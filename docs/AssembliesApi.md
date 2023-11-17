# KdepaApi.AssembliesApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assembliesGet**](AssembliesApi.md#assembliesGet) | **GET** /Assemblies | Получить пагинированный список Сборок
[**assembliesIdDelete**](AssembliesApi.md#assembliesIdDelete) | **DELETE** /Assemblies/{id} | Удалить Сборку
[**assembliesIdGet**](AssembliesApi.md#assembliesIdGet) | **GET** /Assemblies/{id} | Получить Сборку по id
[**assembliesIdPut**](AssembliesApi.md#assembliesIdPut) | **PUT** /Assemblies/{id} | Обновить Сборку
[**assembliesPost**](AssembliesApi.md#assembliesPost) | **POST** /Assemblies | Создать Сборку



## assembliesGet

> AssemblyDtoAssembliesQueryFilterDtoPagedItemsDto assembliesGet(opts)

Получить пагинированный список Сборок

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.AssembliesApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'sortBy': "sortBy_example", // String | 
  'ascending': true, // Boolean | 
  'ids': [null], // [Number] | 
  'positionIds': [null], // [Number] | 
  'valveIds': [null], // [Number] | 
  'driveIds': [null], // [Number] | 
  'motorIds': [null], // [Number] | 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'openTime': 789, // Number | 
  'closeTime': 789, // Number | 
  'isFastActing': true // Boolean | 
};
apiInstance.assembliesGet(opts).then((data) => {
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
 **positionIds** | [**[Number]**](Number.md)|  | [optional] 
 **valveIds** | [**[Number]**](Number.md)|  | [optional] 
 **driveIds** | [**[Number]**](Number.md)|  | [optional] 
 **motorIds** | [**[Number]**](Number.md)|  | [optional] 
 **dateFrom** | **Date**|  | [optional] 
 **dateTo** | **Date**|  | [optional] 
 **openTime** | **Number**|  | [optional] 
 **closeTime** | **Number**|  | [optional] 
 **isFastActing** | **Boolean**|  | [optional] 

### Return type

[**AssemblyDtoAssembliesQueryFilterDtoPagedItemsDto**](AssemblyDtoAssembliesQueryFilterDtoPagedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## assembliesIdDelete

> String assembliesIdDelete(id)

Удалить Сборку

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.AssembliesApi();
let id = 56; // Number | 
apiInstance.assembliesIdDelete(id).then((data) => {
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


## assembliesIdGet

> AssemblyDto assembliesIdGet(id)

Получить Сборку по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.AssembliesApi();
let id = 56; // Number | 
apiInstance.assembliesIdGet(id).then((data) => {
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

[**AssemblyDto**](AssemblyDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## assembliesIdPut

> AssemblyDto assembliesIdPut(id, opts)

Обновить Сборку

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.AssembliesApi();
let id = 56; // Number | 
let opts = {
  'createOrUpdateAssemblyRequest': new KdepaApi.CreateOrUpdateAssemblyRequest() // CreateOrUpdateAssemblyRequest | 
};
apiInstance.assembliesIdPut(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **createOrUpdateAssemblyRequest** | [**CreateOrUpdateAssemblyRequest**](CreateOrUpdateAssemblyRequest.md)|  | [optional] 

### Return type

[**AssemblyDto**](AssemblyDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## assembliesPost

> AssemblyDto assembliesPost(opts)

Создать Сборку

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.AssembliesApi();
let opts = {
  'createOrUpdateAssemblyRequest': new KdepaApi.CreateOrUpdateAssemblyRequest() // CreateOrUpdateAssemblyRequest | 
};
apiInstance.assembliesPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdateAssemblyRequest** | [**CreateOrUpdateAssemblyRequest**](CreateOrUpdateAssemblyRequest.md)|  | [optional] 

### Return type

[**AssemblyDto**](AssemblyDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

