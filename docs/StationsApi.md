# KdepaApiMiddleware.StationsApi

All URIs are relative to *http://localhost:5275/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stationsDefaultGet**](StationsApi.md#stationsDefaultGet) | **GET** /Stations/default | Получить Станцию по умолчанию
[**stationsGet**](StationsApi.md#stationsGet) | **GET** /Stations | Получить пагинированный список Станций
[**stationsIdDelete**](StationsApi.md#stationsIdDelete) | **DELETE** /Stations/{id} | Удалить Станцию
[**stationsIdGet**](StationsApi.md#stationsIdGet) | **GET** /Stations/{id} | Получить Станции по id
[**stationsPost**](StationsApi.md#stationsPost) | **POST** /Stations | Создать Станцию
[**stationsPut**](StationsApi.md#stationsPut) | **PUT** /Stations | Обновить Станцию



## stationsDefaultGet

> StationDto stationsDefaultGet()

Получить Станцию по умолчанию

### Example

```javascript
import KdepaApiMiddleware from 'kdepa_api_middleware';

let apiInstance = new KdepaApiMiddleware.StationsApi();
apiInstance.stationsDefaultGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**StationDto**](StationDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## stationsGet

> StationDtoPaginatedItemsDto stationsGet(opts)

Получить пагинированный список Станций

### Example

```javascript
import KdepaApiMiddleware from 'kdepa_api_middleware';

let apiInstance = new KdepaApiMiddleware.StationsApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'sortBy': "sortBy_example", // String | 
  'ascending': true, // Boolean | 
  'ids': [null] // [Number] | 
};
apiInstance.stationsGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**|  | [optional] [default to 10]
 **pageIndex** | **Number**|  | [optional] [default to 0]
 **sortBy** | **String**|  | [optional] 
 **ascending** | **Boolean**|  | [optional] 
 **ids** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**StationDtoPaginatedItemsDto**](StationDtoPaginatedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## stationsIdDelete

> String stationsIdDelete(id)

Удалить Станцию

### Example

```javascript
import KdepaApiMiddleware from 'kdepa_api_middleware';

let apiInstance = new KdepaApiMiddleware.StationsApi();
let id = 56; // Number | 
apiInstance.stationsIdDelete(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## stationsIdGet

> StationDto stationsIdGet(id)

Получить Станции по id

### Example

```javascript
import KdepaApiMiddleware from 'kdepa_api_middleware';

let apiInstance = new KdepaApiMiddleware.StationsApi();
let id = 56; // Number | 
apiInstance.stationsIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**StationDto**](StationDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## stationsPost

> StationDto stationsPost(opts)

Создать Станцию

### Example

```javascript
import KdepaApiMiddleware from 'kdepa_api_middleware';

let apiInstance = new KdepaApiMiddleware.StationsApi();
let opts = {
  'createStationDto': new KdepaApiMiddleware.CreateStationDto() // CreateStationDto | 
};
apiInstance.stationsPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createStationDto** | [**CreateStationDto**](CreateStationDto.md)|  | [optional] 

### Return type

[**StationDto**](StationDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## stationsPut

> StationDto stationsPut(opts)

Обновить Станцию

### Example

```javascript
import KdepaApiMiddleware from 'kdepa_api_middleware';

let apiInstance = new KdepaApiMiddleware.StationsApi();
let opts = {
  'stationDto': new KdepaApiMiddleware.StationDto() // StationDto | 
};
apiInstance.stationsPut(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stationDto** | [**StationDto**](StationDto.md)|  | [optional] 

### Return type

[**StationDto**](StationDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

