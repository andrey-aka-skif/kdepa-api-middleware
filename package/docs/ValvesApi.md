# KdepaApi.ValvesApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**valvesGet**](ValvesApi.md#valvesGet) | **GET** /Valves | Получить пагинированный список Арматур
[**valvesIdDelete**](ValvesApi.md#valvesIdDelete) | **DELETE** /Valves/{id} | Удалить Арматуру
[**valvesIdGet**](ValvesApi.md#valvesIdGet) | **GET** /Valves/{id} | Получить Арматуру по id
[**valvesIdPut**](ValvesApi.md#valvesIdPut) | **PUT** /Valves/{id} | Обновить Арматуру
[**valvesPost**](ValvesApi.md#valvesPost) | **POST** /Valves | Создать Арматуру



## valvesGet

> ValveDtoValvesQueryFilterDtoPagedItemsDto valvesGet(opts)

Получить пагинированный список Арматур

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.ValvesApi();
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
apiInstance.valvesGet(opts).then((data) => {
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

[**ValveDtoValvesQueryFilterDtoPagedItemsDto**](ValveDtoValvesQueryFilterDtoPagedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## valvesIdDelete

> String valvesIdDelete(id)

Удалить Арматуру

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.ValvesApi();
let id = 56; // Number | 
apiInstance.valvesIdDelete(id).then((data) => {
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


## valvesIdGet

> ValveDto valvesIdGet(id)

Получить Арматуру по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.ValvesApi();
let id = 56; // Number | 
apiInstance.valvesIdGet(id).then((data) => {
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

[**ValveDto**](ValveDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## valvesIdPut

> ValveDto valvesIdPut(id, opts)

Обновить Арматуру

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.ValvesApi();
let id = 56; // Number | 
let opts = {
  'createOrUpdateValveRequest': new KdepaApi.CreateOrUpdateValveRequest() // CreateOrUpdateValveRequest | 
};
apiInstance.valvesIdPut(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **createOrUpdateValveRequest** | [**CreateOrUpdateValveRequest**](CreateOrUpdateValveRequest.md)|  | [optional] 

### Return type

[**ValveDto**](ValveDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## valvesPost

> ValveDto valvesPost(opts)

Создать Арматуру

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.ValvesApi();
let opts = {
  'createOrUpdateValveRequest': new KdepaApi.CreateOrUpdateValveRequest() // CreateOrUpdateValveRequest | 
};
apiInstance.valvesPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdateValveRequest** | [**CreateOrUpdateValveRequest**](CreateOrUpdateValveRequest.md)|  | [optional] 

### Return type

[**ValveDto**](ValveDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

