#!/bin/sh
docker run --user $(id -u):$(id -g) --rm -v "${PWD}:/local" \
	openapitools/openapi-generator-cli generate \
    -i /local/swagger.json \
    -g javascript \
    -o /local/out/js \
    --package-name "kdepa-api-middleware" \
    --additional-properties usePromises=true

