# KdepaApi.FactoriesApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**factoriesGet**](FactoriesApi.md#factoriesGet) | **GET** /Factories | Получить пагинированный список Изготовителей
[**factoriesIdDelete**](FactoriesApi.md#factoriesIdDelete) | **DELETE** /Factories/{id} | Удалить Изготовителя
[**factoriesIdGet**](FactoriesApi.md#factoriesIdGet) | **GET** /Factories/{id} | Получить Изготовителя по id
[**factoriesIdPut**](FactoriesApi.md#factoriesIdPut) | **PUT** /Factories/{id} | Обновить Изготовителя
[**factoriesPost**](FactoriesApi.md#factoriesPost) | **POST** /Factories | Создать Изготовителя



## factoriesGet

> FactoryDtoFactoriesQueryFilterDtoPagedItemsDto factoriesGet(opts)

Получить пагинированный список Изготовителей

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.FactoriesApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'sortBy': "sortBy_example", // String | 
  'ascending': true, // Boolean | 
  'ids': [null], // [Number] | 
  'factorySearchString': "factorySearchString_example" // String | 
};
apiInstance.factoriesGet(opts).then((data) => {
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
 **factorySearchString** | **String**|  | [optional] 

### Return type

[**FactoryDtoFactoriesQueryFilterDtoPagedItemsDto**](FactoryDtoFactoriesQueryFilterDtoPagedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## factoriesIdDelete

> String factoriesIdDelete(id)

Удалить Изготовителя

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.FactoriesApi();
let id = 56; // Number | 
apiInstance.factoriesIdDelete(id).then((data) => {
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


## factoriesIdGet

> FactoryDto factoriesIdGet(id)

Получить Изготовителя по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.FactoriesApi();
let id = 56; // Number | 
apiInstance.factoriesIdGet(id).then((data) => {
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

[**FactoryDto**](FactoryDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## factoriesIdPut

> FactoryDto factoriesIdPut(id, opts)

Обновить Изготовителя

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.FactoriesApi();
let id = 56; // Number | 
let opts = {
  'createOrUpdateFactoryRequest': new KdepaApi.CreateOrUpdateFactoryRequest() // CreateOrUpdateFactoryRequest | 
};
apiInstance.factoriesIdPut(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **createOrUpdateFactoryRequest** | [**CreateOrUpdateFactoryRequest**](CreateOrUpdateFactoryRequest.md)|  | [optional] 

### Return type

[**FactoryDto**](FactoryDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## factoriesPost

> FactoryDto factoriesPost(opts)

Создать Изготовителя

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.FactoriesApi();
let opts = {
  'createOrUpdateFactoryRequest': new KdepaApi.CreateOrUpdateFactoryRequest() // CreateOrUpdateFactoryRequest | 
};
apiInstance.factoriesPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdateFactoryRequest** | [**CreateOrUpdateFactoryRequest**](CreateOrUpdateFactoryRequest.md)|  | [optional] 

### Return type

[**FactoryDto**](FactoryDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

