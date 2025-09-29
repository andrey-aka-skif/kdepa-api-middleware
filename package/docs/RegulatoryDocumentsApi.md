# KdepaApi.RegulatoryDocumentsApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**regulatoryDocumentsGet**](RegulatoryDocumentsApi.md#regulatoryDocumentsGet) | **GET** /RegulatoryDocuments | Получить пагинированный список Документов
[**regulatoryDocumentsIdGet**](RegulatoryDocumentsApi.md#regulatoryDocumentsIdGet) | **GET** /RegulatoryDocuments/{id} | Получить Документ по id



## regulatoryDocumentsGet

> RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto regulatoryDocumentsGet(opts)

Получить пагинированный список Документов

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.RegulatoryDocumentsApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'sortBy': "sortBy_example", // String | 
  'ascending': true, // Boolean | 
  'ids': [null] // [Number] | 
};
apiInstance.regulatoryDocumentsGet(opts).then((data) => {
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

[**RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto**](RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## regulatoryDocumentsIdGet

> RegulatoryDocumentDto regulatoryDocumentsIdGet(id)

Получить Документ по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.RegulatoryDocumentsApi();
let id = 56; // Number | 
apiInstance.regulatoryDocumentsIdGet(id).then((data) => {
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

[**RegulatoryDocumentDto**](RegulatoryDocumentDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

