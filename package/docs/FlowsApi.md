# KdepaApi.FlowsApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**flowsGet**](FlowsApi.md#flowsGet) | **GET** /Flows | Получить пагинированный список Диагностирований протечек
[**flowsIdDelete**](FlowsApi.md#flowsIdDelete) | **DELETE** /Flows/{id} | Удалить Диагностирование протечки
[**flowsIdGet**](FlowsApi.md#flowsIdGet) | **GET** /Flows/{id} | Получить Диагностирование протечки по id
[**flowsIdPut**](FlowsApi.md#flowsIdPut) | **PUT** /Flows/{id} | Обновить Диагностирование протечки
[**flowsPost**](FlowsApi.md#flowsPost) | **POST** /Flows | Добавить Диагностирования из ПК ДУЗ



## flowsGet

> FlowDtoValvesQueryFilterDtoPagedItemsDto flowsGet(opts)

Получить пагинированный список Диагностирований протечек

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.FlowsApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'sortBy': "sortBy_example", // String | 
  'ascending': true, // Boolean | 
  'ids': [null] // [Number] | 
};
apiInstance.flowsGet(opts).then((data) => {
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

[**FlowDtoValvesQueryFilterDtoPagedItemsDto**](FlowDtoValvesQueryFilterDtoPagedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## flowsIdDelete

> String flowsIdDelete(id)

Удалить Диагностирование протечки

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.FlowsApi();
let id = 56; // Number | 
apiInstance.flowsIdDelete(id).then((data) => {
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


## flowsIdGet

> FlowDto flowsIdGet(id)

Получить Диагностирование протечки по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.FlowsApi();
let id = 56; // Number | 
apiInstance.flowsIdGet(id).then((data) => {
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

[**FlowDto**](FlowDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## flowsIdPut

> FlowDto flowsIdPut(id, opts)

Обновить Диагностирование протечки

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.FlowsApi();
let id = 56; // Number | 
let opts = {
  'updateFlowRequest': new KdepaApi.UpdateFlowRequest() // UpdateFlowRequest | 
};
apiInstance.flowsIdPut(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **updateFlowRequest** | [**UpdateFlowRequest**](UpdateFlowRequest.md)|  | [optional] 

### Return type

[**FlowDto**](FlowDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## flowsPost

> FlowDto flowsPost()

Добавить Диагностирования из ПК ДУЗ

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.FlowsApi();
apiInstance.flowsPost().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**FlowDto**](FlowDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

