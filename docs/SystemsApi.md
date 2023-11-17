# KdepaApi.SystemsApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**systemsGet**](SystemsApi.md#systemsGet) | **GET** /Systems | Получить пагинированный список Систем
[**systemsIdDelete**](SystemsApi.md#systemsIdDelete) | **DELETE** /Systems/{id} | Удалить Систему
[**systemsIdGet**](SystemsApi.md#systemsIdGet) | **GET** /Systems/{id} | Получить Систему по id
[**systemsIdPut**](SystemsApi.md#systemsIdPut) | **PUT** /Systems/{id} | Обновить Систему
[**systemsPost**](SystemsApi.md#systemsPost) | **POST** /Systems | Создать Систему



## systemsGet

> StationSystemDtoSystemsQueryFilterDtoPagedItemsDto systemsGet(opts)

Получить пагинированный список Систем

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SystemsApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'sortBy': "sortBy_example", // String | 
  'ascending': true, // Boolean | 
  'ids': [null], // [Number] | 
  'nameSearchString': "nameSearchString_example" // String | 
};
apiInstance.systemsGet(opts).then((data) => {
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
 **nameSearchString** | **String**|  | [optional] 

### Return type

[**StationSystemDtoSystemsQueryFilterDtoPagedItemsDto**](StationSystemDtoSystemsQueryFilterDtoPagedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## systemsIdDelete

> String systemsIdDelete(id)

Удалить Систему

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SystemsApi();
let id = 56; // Number | 
apiInstance.systemsIdDelete(id).then((data) => {
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


## systemsIdGet

> StationSystemDto systemsIdGet(id)

Получить Систему по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SystemsApi();
let id = 56; // Number | 
apiInstance.systemsIdGet(id).then((data) => {
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

[**StationSystemDto**](StationSystemDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## systemsIdPut

> StationSystemDto systemsIdPut(id, opts)

Обновить Систему

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SystemsApi();
let id = 56; // Number | 
let opts = {
  'createOrUpdateStationSystemRequest': new KdepaApi.CreateOrUpdateStationSystemRequest() // CreateOrUpdateStationSystemRequest | 
};
apiInstance.systemsIdPut(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **createOrUpdateStationSystemRequest** | [**CreateOrUpdateStationSystemRequest**](CreateOrUpdateStationSystemRequest.md)|  | [optional] 

### Return type

[**StationSystemDto**](StationSystemDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## systemsPost

> StationSystemDto systemsPost(opts)

Создать Систему

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SystemsApi();
let opts = {
  'createOrUpdateStationSystemRequest': new KdepaApi.CreateOrUpdateStationSystemRequest() // CreateOrUpdateStationSystemRequest | 
};
apiInstance.systemsPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdateStationSystemRequest** | [**CreateOrUpdateStationSystemRequest**](CreateOrUpdateStationSystemRequest.md)|  | [optional] 

### Return type

[**StationSystemDto**](StationSystemDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

