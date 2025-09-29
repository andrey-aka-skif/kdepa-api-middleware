# KdepaApi.FilesApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filesGet**](FilesApi.md#filesGet) | **GET** /Files | Получить пагинированный список Файлов
[**filesIdGet**](FilesApi.md#filesIdGet) | **GET** /Files/{id} | Получить Файл по id



## filesGet

> FileDtoQueryIdsFilterDtoPagedItemsDto filesGet(opts)

Получить пагинированный список Файлов

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.FilesApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'sortBy': "sortBy_example", // String | 
  'ascending': true, // Boolean | 
  'ids': [null] // [Number] | 
};
apiInstance.filesGet(opts).then((data) => {
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

[**FileDtoQueryIdsFilterDtoPagedItemsDto**](FileDtoQueryIdsFilterDtoPagedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## filesIdGet

> File filesIdGet(id)

Получить Файл по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.FilesApi();
let id = 56; // Number | 
apiInstance.filesIdGet(id).then((data) => {
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

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

