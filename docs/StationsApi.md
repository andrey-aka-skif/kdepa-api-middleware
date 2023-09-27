# Crud.StationsApi

All URIs are relative to *http://localhost:5275/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stationsDefaultGet**](StationsApi.md#stationsDefaultGet) | **GET** /Stations/default | Получить Станции по умолчанию
[**stationsGet**](StationsApi.md#stationsGet) | **GET** /Stations | Получить пагинированный списка Станций
[**stationsIdDelete**](StationsApi.md#stationsIdDelete) | **DELETE** /Stations/{id} | Удалить Станцию
[**stationsIdGet**](StationsApi.md#stationsIdGet) | **GET** /Stations/{id} | Получить Станции по id
[**stationsPost**](StationsApi.md#stationsPost) | **POST** /Stations | Создать Станцию
[**stationsPut**](StationsApi.md#stationsPut) | **PUT** /Stations | Обновить Станцию



## stationsDefaultGet

> Station stationsDefaultGet()

Получить Станции по умолчанию

### Example

```javascript
import Crud from '_crud';

let apiInstance = new Crud.StationsApi();
apiInstance.stationsDefaultGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Station**](Station.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## stationsGet

> StationPaginatedItemsViewModel stationsGet(opts)

Получить пагинированный списка Станций

### Example

```javascript
import Crud from '_crud';

let apiInstance = new Crud.StationsApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'ids': [null] // [Number] | 
};
apiInstance.stationsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**|  | [optional] [default to 10]
 **pageIndex** | **Number**|  | [optional] [default to 0]
 **ids** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**StationPaginatedItemsViewModel**](StationPaginatedItemsViewModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## stationsIdDelete

> stationsIdDelete(id)

Удалить Станцию

### Example

```javascript
import Crud from '_crud';

let apiInstance = new Crud.StationsApi();
let id = 56; // Number | 
apiInstance.stationsIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## stationsIdGet

> Station stationsIdGet(id)

Получить Станции по id

### Example

```javascript
import Crud from '_crud';

let apiInstance = new Crud.StationsApi();
let id = 56; // Number | 
apiInstance.stationsIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Station**](Station.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## stationsPost

> Station stationsPost(opts)

Создать Станцию

### Example

```javascript
import Crud from '_crud';

let apiInstance = new Crud.StationsApi();
let opts = {
  'station': new Crud.Station() // Station | 
};
apiInstance.stationsPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **station** | [**Station**](Station.md)|  | [optional] 

### Return type

[**Station**](Station.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## stationsPut

> Station stationsPut(opts)

Обновить Станцию

### Example

```javascript
import Crud from '_crud';

let apiInstance = new Crud.StationsApi();
let opts = {
  'station': new Crud.Station() // Station | 
};
apiInstance.stationsPut(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **station** | [**Station**](Station.md)|  | [optional] 

### Return type

[**Station**](Station.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

