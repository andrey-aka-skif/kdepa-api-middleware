# kdepa_api_middleware

KdepaApiMiddleware - JavaScript client for kdepa_api_middleware
КДЭПА CRUD API
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.1.0
- Package version: 0.1.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install kdepa_api_middleware --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your kdepa_api_middleware from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var KdepaApiMiddleware = require('kdepa_api_middleware');


var api = new KdepaApiMiddleware.StationsApi()
api.stationsDefaultGet().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:5275/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*KdepaApiMiddleware.StationsApi* | [**stationsDefaultGet**](docs/StationsApi.md#stationsDefaultGet) | **GET** /Stations/default | Получить Станции по умолчанию
*KdepaApiMiddleware.StationsApi* | [**stationsGet**](docs/StationsApi.md#stationsGet) | **GET** /Stations | Получить пагинированный списка Станций
*KdepaApiMiddleware.StationsApi* | [**stationsIdDelete**](docs/StationsApi.md#stationsIdDelete) | **DELETE** /Stations/{id} | Удалить Станцию
*KdepaApiMiddleware.StationsApi* | [**stationsIdGet**](docs/StationsApi.md#stationsIdGet) | **GET** /Stations/{id} | Получить Станции по id
*KdepaApiMiddleware.StationsApi* | [**stationsPost**](docs/StationsApi.md#stationsPost) | **POST** /Stations | Создать Станцию
*KdepaApiMiddleware.StationsApi* | [**stationsPut**](docs/StationsApi.md#stationsPut) | **PUT** /Stations | Обновить Станцию


## Documentation for Models

 - [KdepaApiMiddleware.ProblemDetails](docs/ProblemDetails.md)
 - [KdepaApiMiddleware.SimpleQueryFilter](docs/SimpleQueryFilter.md)
 - [KdepaApiMiddleware.SortDto](docs/SortDto.md)
 - [KdepaApiMiddleware.Station](docs/Station.md)
 - [KdepaApiMiddleware.StationPaginatedItemsViewModel](docs/StationPaginatedItemsViewModel.md)


## Documentation for Authorization

Endpoints do not require authorization.

