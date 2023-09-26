# Crud.StationsApi

All URIs are relative to *http://localhost:5275*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiVversionStationsDefaultGet**](StationsApi.md#apiVversionStationsDefaultGet) | **GET** /api/v{version}/Stations/default | Получить Станции по умолчанию
[**apiVversionStationsGet**](StationsApi.md#apiVversionStationsGet) | **GET** /api/v{version}/Stations | Получить пагинированный списка Станций
[**apiVversionStationsIdDelete**](StationsApi.md#apiVversionStationsIdDelete) | **DELETE** /api/v{version}/Stations/{id} | Удалить Станцию
[**apiVversionStationsIdGet**](StationsApi.md#apiVversionStationsIdGet) | **GET** /api/v{version}/Stations/{id} | Получить Станции по id
[**apiVversionStationsPost**](StationsApi.md#apiVversionStationsPost) | **POST** /api/v{version}/Stations | Создать Станцию
[**apiVversionStationsPut**](StationsApi.md#apiVversionStationsPut) | **PUT** /api/v{version}/Stations | Обновить Станцию



## apiVversionStationsDefaultGet

> Station apiVversionStationsDefaultGet(version)

Получить Станции по умолчанию

### Example

```javascript
import Crud from '_crud';

let apiInstance = new Crud.StationsApi();
let version = "version_example"; // String | 
apiInstance.apiVversionStationsDefaultGet(version, (error, data, response) => {
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
 **version** | **String**|  | 

### Return type

[**Station**](Station.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiVversionStationsGet

> StationPaginatedItemsViewModel apiVversionStationsGet(version, opts)

Получить пагинированный списка Станций

### Example

```javascript
import Crud from '_crud';

let apiInstance = new Crud.StationsApi();
let version = "version_example"; // String | 
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'ids': [null] // [Number] | 
};
apiInstance.apiVversionStationsGet(version, opts, (error, data, response) => {
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
 **version** | **String**|  | 
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


## apiVversionStationsIdDelete

> apiVversionStationsIdDelete(id, version)

Удалить Станцию

### Example

```javascript
import Crud from '_crud';

let apiInstance = new Crud.StationsApi();
let id = 56; // Number | 
let version = "version_example"; // String | 
apiInstance.apiVversionStationsIdDelete(id, version, (error, data, response) => {
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
 **version** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiVversionStationsIdGet

> Station apiVversionStationsIdGet(id, version)

Получить Станции по id

### Example

```javascript
import Crud from '_crud';

let apiInstance = new Crud.StationsApi();
let id = 56; // Number | 
let version = "version_example"; // String | 
apiInstance.apiVversionStationsIdGet(id, version, (error, data, response) => {
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
 **version** | **String**|  | 

### Return type

[**Station**](Station.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiVversionStationsPost

> Station apiVversionStationsPost(version, opts)

Создать Станцию

### Example

```javascript
import Crud from '_crud';

let apiInstance = new Crud.StationsApi();
let version = "version_example"; // String | 
let opts = {
  'station': new Crud.Station() // Station | 
};
apiInstance.apiVversionStationsPost(version, opts, (error, data, response) => {
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
 **version** | **String**|  | 
 **station** | [**Station**](Station.md)|  | [optional] 

### Return type

[**Station**](Station.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## apiVversionStationsPut

> Station apiVversionStationsPut(version, opts)

Обновить Станцию

### Example

```javascript
import Crud from '_crud';

let apiInstance = new Crud.StationsApi();
let version = "version_example"; // String | 
let opts = {
  'station': new Crud.Station() // Station | 
};
apiInstance.apiVversionStationsPut(version, opts, (error, data, response) => {
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
 **version** | **String**|  | 
 **station** | [**Station**](Station.md)|  | [optional] 

### Return type

[**Station**](Station.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

