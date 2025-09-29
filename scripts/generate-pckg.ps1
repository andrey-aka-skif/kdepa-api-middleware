. ./generate-pckg.functions.ps1

$CONFIG = Try-Get-Config -ShowMessage $true

if (!$CONFIG) {
    exit 1
}

Write-Host "ЗАПУСК"

$packageVersion = Get-Package-Json-Version $CONFIG.Package.LocalFolder $CONFIG.Package.Manifest
Write-Host "::Прочитали старую версию пакета: $packageVersion"

Clear-Folder $CONFIG.Package.LocalFolder $CONFIG.Package.ImmutableFiles
Write-Host "::Очистили локальный каталог пакета: $((Resolve-Path $CONFIG.Package.LocalFolder).Path)"

Save-Spec-File $CONFIG.Specification.Url $CONFIG.Paths.TempFolder $CONFIG.Specification.File
Write-Host "::Сохранили файл спецификации: $($CONFIG.Specification.File)"

Copy-File-To-Server $CONFIG.Paths.TempFolder $CONFIG.Specification.File $CONFIG.Server.WorkFolder $CONFIG.Server.User $CONFIG.Server.Address
Write-Host "::Копировали файл спецификации на сервер: $($CONFIG.Specification.File)"

Exec-Remote $CONFIG.Server.WorkFolder $CONFIG.Server.Script $CONFIG.Server.User $CONFIG.Server.Address
Write-Host "::Выполнили действия на удаленном сервере"

Copy-Folder-From-Server "$($CONFIG.Server.WorkFolder)/$($CONFIG.Server.OutFolder)" $CONFIG.Package.LocalFolder $CONFIG.Server.User $CONFIG.Server.Address
Write-Host "::Копировали каталог пакета с сервера в каталог: $((Resolve-Path $CONFIG.Package.LocalFolder).Path)"

$newPackageVersion = Increment-PackageVersion $packageVersion
Change-Package-Json $CONFIG.Package.LocalFolder $CONFIG.Package.Manifest $CONFIG.Package.NameScoped $newPackageVersion
Write-Host "::Внесли изменения в $($CONFIG.Package.Manifest)"
Write-Host "::Новая версия пакета: $newPackageVersion"

Create-NPM-Package $CONFIG.Package.LocalFolder $CONFIG.Paths.TempFolder $CONFIG.Paths.LocalPackageRepository
Write-Host "::Пакет создан и помещен в локальный репозиторий $((Resolve-Path $CONFIG.Paths.LocalPackageRepository).Path)"

Write-Host -ForegroundColor Green "===== ЗАВЕРШЕНО ====="
