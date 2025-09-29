# KdepaApi.DrivesApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**drivesGet**](DrivesApi.md#drivesGet) | **GET** /Drives | Получить пагинированный список Приводов
[**drivesIdDelete**](DrivesApi.md#drivesIdDelete) | **DELETE** /Drives/{id} | Удалить Привод
[**drivesIdGet**](DrivesApi.md#drivesIdGet) | **GET** /Drives/{id} | Получить Привод по id
[**drivesIdPut**](DrivesApi.md#drivesIdPut) | **PUT** /Drives/{id} | Обновить Привод
[**drivesPost**](DrivesApi.md#drivesPost) | **POST** /Drives | Создать Привод



## drivesGet

> DriveDtoDrivesQueryFilterDtoPagedItemsDto drivesGet(opts)

Получить пагинированный список Приводов

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.DrivesApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'sortBy': "sortBy_example", // String | 
  'ascending': true, // Boolean | 
  'ids': [null], // [Number] | 
  'markIds': [null], // [Number] | 
  'factoryIds': [null], // [Number] | 
  'serialNumberSearchString': "serialNumberSearchString_example", // String | 
  'madeDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'madeDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'inUseDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'inUseDateTo': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.drivesGet(opts).then((data) => {
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
 **markIds** | [**[Number]**](Number.md)|  | [optional] 
 **factoryIds** | [**[Number]**](Number.md)|  | [optional] 
 **serialNumberSearchString** | **String**|  | [optional] 
 **madeDateFrom** | **Date**|  | [optional] 
 **madeDateTo** | **Date**|  | [optional] 
 **inUseDateFrom** | **Date**|  | [optional] 
 **inUseDateTo** | **Date**|  | [optional] 

### Return type

[**DriveDtoDrivesQueryFilterDtoPagedItemsDto**](DriveDtoDrivesQueryFilterDtoPagedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## drivesIdDelete

> String drivesIdDelete(id)

Удалить Привод

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.DrivesApi();
let id = 56; // Number | 
apiInstance.drivesIdDelete(id).then((data) => {
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


## drivesIdGet

> DriveDto drivesIdGet(id)

Получить Привод по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.DrivesApi();
let id = 56; // Number | 
apiInstance.drivesIdGet(id).then((data) => {
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

[**DriveDto**](DriveDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## drivesIdPut

> DriveDto drivesIdPut(id, opts)

Обновить Привод

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.DrivesApi();
let id = 56; // Number | 
let opts = {
  'createOrUpdateDriveRequest': new KdepaApi.CreateOrUpdateDriveRequest() // CreateOrUpdateDriveRequest | 
};
apiInstance.drivesIdPut(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **createOrUpdateDriveRequest** | [**CreateOrUpdateDriveRequest**](CreateOrUpdateDriveRequest.md)|  | [optional] 

### Return type

[**DriveDto**](DriveDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## drivesPost

> DriveDto drivesPost(opts)

Создать Привод

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.DrivesApi();
let opts = {
  'createOrUpdateDriveRequest': new KdepaApi.CreateOrUpdateDriveRequest() // CreateOrUpdateDriveRequest | 
};
apiInstance.drivesPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdateDriveRequest** | [**CreateOrUpdateDriveRequest**](CreateOrUpdateDriveRequest.md)|  | [optional] 

### Return type

[**DriveDto**](DriveDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

