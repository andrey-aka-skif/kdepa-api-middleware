function Show-Not-Config-Message {
    Write-Host "-------------------" -ForegroundColor Yellow
    Write-Host "ТРЕБУЕТСЯ РЕДАКТИРОВАНИЕ КОНФИГУРАЦИОННОГО ФАЙЛА" -ForegroundColor Yellow
    Write-Host "-------------------" -ForegroundColor Yellow
}

function Try-Get-Config {
    param(
        [bool]$ShowMessage = $false
    )

    $ConfigPath = Join-Path $PSScriptRoot "config.ps1"
    if (!(Test-Path $ConfigPath)) {
        # Файл конфигурации отсутствует. Создаем из шаблона
        Copy-Item "$PSScriptRoot/config.template.ps1" $ConfigPath

        if($ShowMessage) {
            Show-Not-Config-Message
        }

        return $null
    }

    $Config = . $ConfigPath

    if ($Config.NotChangedFlag) {
        # Файл создан, но не был модифицирован

        if($ShowMessage) {
            Show-Not-Config-Message
        }

        return $null
    }

    return $Config
}

function Clear-Folder {
    param(
        [string]$Folder,
        [string[]]$Exclude
    )

    Get-ChildItem ./${Folder} -Force | Where-Object { 
        $_.Name -notin $Exclude 
    } | Remove-Item -Recurse -Force
}

function Save-Spec-File {
    param(
        [string]$Uri,
        [string]$Folder,
        [string]$FileName
    )

    if (-not (Test-Path $Folder)) {
        New-Item -ItemType Directory -Path $Folder -Force | Out-Null
    }

    $OutFile = Join-Path $Folder $FileName

    try {
        Invoke-WebRequest -Uri $Uri -OutFile $OutFile
    }
    catch {
        Write-Error "Ошибка при скачивании файла: $_"
        return $null
    }
}

function Copy-File-To-Server {
    param(
        [string]$Folder,
        [string]$FileName,
        [string]$DestFolder,
        [string]$User,
        [string]$Server
    )

    $File = Join-Path $Folder $FileName

    scp $File ${User}@${Server}:${DestFolder}/
}

function Exec-Remote {
    param(
        [string]$Path,
        [string]$Script,
        [string]$User,
        [string]$Server
    )

    $command = "cd $Path && ./$Script"
    ssh ${User}@${Server} $command
}

function Copy-Folder-From-Server {
    param(
        [string]$SrcFolder,
        [string]$DestFolder,
        [string]$User,
        [string]$Server
    )

    Write-Host ${User}@${Server}:"${SrcFolder}/.[^.]*"
    Write-Host ${User}@${Server}:"${SrcFolder}/\*"
    Write-Host "./${DestFolder}/"

    scp -r ${User}@${Server}:"${SrcFolder}/.[^.]*" "./${DestFolder}/"
    scp -r ${User}@${Server}:"${SrcFolder}/\*" "./${DestFolder}/"
}

function Increment-PackageVersion {
    param(
        [string]$Version,
        [string]$ChangeType = 'major' # 'major', 'minor', 'patch'
    )
    
    $versionParts = $Version -split '\.'
    
    switch ($ChangeType) {
        'major' {
            $versionParts[0] = [string]([int]$versionParts[0] + 1)
            $versionParts[1] = "0"
            $versionParts[2] = "0"
        }
        'minor' {
            $versionParts[1] = [string]([int]$versionParts[1] + 1)
            $versionParts[2] = "0"
        }
        'patch' {
            $versionParts[2] = [string]([int]$versionParts[2] + 1)
        }
    }
    
    return $versionParts -join '.'
}

function Get-Package-Json-Version {
    param(
        [string]$Folder,
        [string]$File
    )

    $package_json = Get-Content -Path "./${Folder}/${File}" -Raw | ConvertFrom-Json
    return $($package_json.version)
}

function Change-Package-Json {
    param(
        [string]$Folder,
        [string]$File,
        [string]$Name,
        [string]$Version
    )

    $package_json = Get-Content -Path "./${Folder}/${File}" -Raw | ConvertFrom-Json

    $package_json.name = $Name
    $package_json.version = $Version


    $package_json | ConvertTo-Json -Depth 10 | Set-Content -Path "./${Folder}/${File}"
}

function Convert-Scoped-Name-To-Dashed-Name {
    param(
        [string]$PackageName
    )
    
    if ($PackageName -match '@([^/]+)/(.+)') {
        $scope = $matches[1]
        $name = $matches[2]
        return "${scope}-${name}"
    }
    
    return $PackageName
}

function Convert-Scoped-Name-To-Name-Only {
    param(
        [string]$PackageName
    )
    
    if ($PackageName -match '@([^/]+)/(.+)') {
        $scope = $matches[1]
        $name = $matches[2]
        return "${name}"
    }
    
    return $PackageName
}

function Create-NPM-Package {
    param(
        [string]$SrcPackageFolder,
        [string]$TempFolder,
        [string]$LocalPackageRepository,
        [bool]$WithoutScoped = $true
    )

    Set-Location $SrcPackageFolder

    $PackageJson = Get-Content "package.json" | ConvertFrom-Json
    $PackageVersion = $PackageJson.version
    $OriginalPackageName = $PackageJson.name

    $dashedNameWithScoped = Convert-Scoped-Name-To-Dashed-Name $OriginalPackageName
    $dashedNameWithoutScoped = Convert-Scoped-Name-To-Name-Only $OriginalPackageName

    npm install
    npm pack --pack-destination=${TempFolder}

    Set-Location $TempFolder

    if ($WithoutScoped){
        mv ${dashedNameWithScoped}-${PackageVersion}.tgz ${LocalPackageRepository}/${dashedNameWithoutScoped}-${PackageVersion}.tgz
    } else {
        mv ${dashedNameWithScoped}-${PackageVersion}.tgz ${LocalPackageRepository}/${dashedNameWithScoped}-${PackageVersion}.tgz
    }
}
