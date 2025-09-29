# KdepaApi.StationsApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stationsDefaultGet**](StationsApi.md#stationsDefaultGet) | **GET** /Stations/default | Получить Станцию по умолчанию
[**stationsGet**](StationsApi.md#stationsGet) | **GET** /Stations | Получить пагинированный список Станций
[**stationsIdDelete**](StationsApi.md#stationsIdDelete) | **DELETE** /Stations/{id} | Удалить Станцию
[**stationsIdGet**](StationsApi.md#stationsIdGet) | **GET** /Stations/{id} | Получить Станцию по id
[**stationsIdPut**](StationsApi.md#stationsIdPut) | **PUT** /Stations/{id} | Обновить Станцию
[**stationsPost**](StationsApi.md#stationsPost) | **POST** /Stations | Создать Станцию



## stationsDefaultGet

> StationDto stationsDefaultGet()

Получить Станцию по умолчанию

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.StationsApi();
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

> StationDtoQueryIdsFilterDtoPagedItemsDto stationsGet(opts)

Получить пагинированный список Станций

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.StationsApi();
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

[**StationDtoQueryIdsFilterDtoPagedItemsDto**](StationDtoQueryIdsFilterDtoPagedItemsDto.md)

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
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.StationsApi();
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

Получить Станцию по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.StationsApi();
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


## stationsIdPut

> StationDto stationsIdPut(id, opts)

Обновить Станцию

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.StationsApi();
let id = 56; // Number | 
let opts = {
  'createOrUpdateStationRequest': new KdepaApi.CreateOrUpdateStationRequest() // CreateOrUpdateStationRequest | 
};
apiInstance.stationsIdPut(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **createOrUpdateStationRequest** | [**CreateOrUpdateStationRequest**](CreateOrUpdateStationRequest.md)|  | [optional] 

### Return type

[**StationDto**](StationDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## stationsPost

> StationDto stationsPost(opts)

Создать Станцию

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.StationsApi();
let opts = {
  'createOrUpdateStationRequest': new KdepaApi.CreateOrUpdateStationRequest() // CreateOrUpdateStationRequest | 
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
 **createOrUpdateStationRequest** | [**CreateOrUpdateStationRequest**](CreateOrUpdateStationRequest.md)|  | [optional] 

### Return type

[**StationDto**](StationDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

