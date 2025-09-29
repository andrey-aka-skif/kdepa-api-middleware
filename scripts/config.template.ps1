return @{
    NotChangedFlag = $true

    Paths = @{
        TempFolder = "../_tmp"
        LocalPackageRepository = "../npm"
    }

    Server = @{
        Address = "192.168.100.99"
        User = "administrator"
        WorkFolder = "/srv/share/OpenApi"
        OutFolder = "out/js"
        Script = "run_ext.sh"
    }

    Specification = @{
        File = "swagger.json"
        Url = "http://127.0.0.1:5005/swagger/v0.1/swagger.json"
    }

    Package = @{
        LocalFolder = "../package"
        Manifest = "package.json"
        Name = "kdepa-api-middleware"
        NameScoped = "@andrey-aka-skif/kdepa-api-middleware"
        ImmutableFiles = @(".git", ".gitignore", ".npmrc")
    }
}
