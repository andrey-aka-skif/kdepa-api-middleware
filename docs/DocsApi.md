# KdepaApi.DocsApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**docsGet**](DocsApi.md#docsGet) | **GET** /Docs | Получить пагинированный список Документов
[**docsIdGet**](DocsApi.md#docsIdGet) | **GET** /Docs/{id} | Получить Документ по id



## docsGet

> DocFileDtoQueryIdsFilterDtoPagedItemsDto docsGet(opts)

Получить пагинированный список Документов

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.DocsApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'sortBy': "sortBy_example", // String | 
  'ascending': true, // Boolean | 
  'ids': [null] // [Number] | 
};
apiInstance.docsGet(opts).then((data) => {
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

[**DocFileDtoQueryIdsFilterDtoPagedItemsDto**](DocFileDtoQueryIdsFilterDtoPagedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## docsIdGet

> File docsIdGet(id)

Получить Документ по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.DocsApi();
let id = 56; // Number | 
apiInstance.docsIdGet(id).then((data) => {
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

