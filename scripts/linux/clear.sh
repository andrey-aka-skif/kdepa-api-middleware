#!/bin/sh

KEEP="run_ext.sh clear.sh generate-api.sh swagger.json"

for item in *; do
    case " $KEEP " in
        *" $item "*) 
            # Нашли в списке KEEP - пропускаем
            ;;
        *)
            echo "Удаляем: $item"
            rm -rf "$item"
            ;;
    esac
done
