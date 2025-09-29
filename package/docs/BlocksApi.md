# KdepaApi.BlocksApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blocksGet**](BlocksApi.md#blocksGet) | **GET** /Blocks | Получить пагинированный список Блоков
[**blocksIdDelete**](BlocksApi.md#blocksIdDelete) | **DELETE** /Blocks/{id} | Удалить Блок
[**blocksIdGet**](BlocksApi.md#blocksIdGet) | **GET** /Blocks/{id} | Получить Блок по id
[**blocksIdPut**](BlocksApi.md#blocksIdPut) | **PUT** /Blocks/{id} | Обновить Блок
[**blocksPost**](BlocksApi.md#blocksPost) | **POST** /Blocks | Создать Блок



## blocksGet

> BlockDtoBlocksQueryFilterDtoPagedItemsDto blocksGet(opts)

Получить пагинированный список Блоков

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.BlocksApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'sortBy': "sortBy_example", // String | 
  'ascending': true, // Boolean | 
  'ids': [null], // [Number] | 
  'blockNumberSearchNumber': 56 // Number | 
};
apiInstance.blocksGet(opts).then((data) => {
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
 **blockNumberSearchNumber** | **Number**|  | [optional] 

### Return type

[**BlockDtoBlocksQueryFilterDtoPagedItemsDto**](BlockDtoBlocksQueryFilterDtoPagedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## blocksIdDelete

> String blocksIdDelete(id)

Удалить Блок

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.BlocksApi();
let id = 56; // Number | 
apiInstance.blocksIdDelete(id).then((data) => {
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


## blocksIdGet

> BlockDto blocksIdGet(id)

Получить Блок по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.BlocksApi();
let id = 56; // Number | 
apiInstance.blocksIdGet(id).then((data) => {
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

[**BlockDto**](BlockDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## blocksIdPut

> BlockDto blocksIdPut(id, opts)

Обновить Блок

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.BlocksApi();
let id = 56; // Number | 
let opts = {
  'createOrUpdateBlockRequest': new KdepaApi.CreateOrUpdateBlockRequest() // CreateOrUpdateBlockRequest | 
};
apiInstance.blocksIdPut(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **createOrUpdateBlockRequest** | [**CreateOrUpdateBlockRequest**](CreateOrUpdateBlockRequest.md)|  | [optional] 

### Return type

[**BlockDto**](BlockDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## blocksPost

> BlockDto blocksPost(opts)

Создать Блок

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.BlocksApi();
let opts = {
  'createOrUpdateBlockRequest': new KdepaApi.CreateOrUpdateBlockRequest() // CreateOrUpdateBlockRequest | 
};
apiInstance.blocksPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdateBlockRequest** | [**CreateOrUpdateBlockRequest**](CreateOrUpdateBlockRequest.md)|  | [optional] 

### Return type

[**BlockDto**](BlockDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

