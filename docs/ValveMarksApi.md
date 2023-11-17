# KdepaApi.ValveMarksApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**valveMarksGet**](ValveMarksApi.md#valveMarksGet) | **GET** /ValveMarks | Получить пагинированный список Марок Арматур
[**valveMarksIdDelete**](ValveMarksApi.md#valveMarksIdDelete) | **DELETE** /ValveMarks/{id} | Удалить Марку Арматуры
[**valveMarksIdExtendedGet**](ValveMarksApi.md#valveMarksIdExtendedGet) | **GET** /ValveMarks/{id}/extended | Получить Марку Арматуры по id, включая контент Справочников
[**valveMarksIdGet**](ValveMarksApi.md#valveMarksIdGet) | **GET** /ValveMarks/{id} | Получить Марку Арматуры по id
[**valveMarksIdPut**](ValveMarksApi.md#valveMarksIdPut) | **PUT** /ValveMarks/{id} | Обновить Марку Арматуры
[**valveMarksPost**](ValveMarksApi.md#valveMarksPost) | **POST** /ValveMarks | Создать Марку Арматуры



## valveMarksGet

> ValveMarkDtoValveMarksQueryFilterDtoPagedItemsDto valveMarksGet(opts)

Получить пагинированный список Марок Арматур

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.ValveMarksApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'sortBy': "sortBy_example", // String | 
  'ascending': true, // Boolean | 
  'ids': [null], // [Number] | 
  'nameSearchString': "nameSearchString_example" // String | 
};
apiInstance.valveMarksGet(opts).then((data) => {
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

[**ValveMarkDtoValveMarksQueryFilterDtoPagedItemsDto**](ValveMarkDtoValveMarksQueryFilterDtoPagedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## valveMarksIdDelete

> String valveMarksIdDelete(id)

Удалить Марку Арматуры

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.ValveMarksApi();
let id = 56; // Number | 
apiInstance.valveMarksIdDelete(id).then((data) => {
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


## valveMarksIdExtendedGet

> ValveMarkExtendedDto valveMarksIdExtendedGet(id)

Получить Марку Арматуры по id, включая контент Справочников

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.ValveMarksApi();
let id = 56; // Number | 
apiInstance.valveMarksIdExtendedGet(id).then((data) => {
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

[**ValveMarkExtendedDto**](ValveMarkExtendedDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## valveMarksIdGet

> ValveMarkDto valveMarksIdGet(id)

Получить Марку Арматуры по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.ValveMarksApi();
let id = 56; // Number | 
apiInstance.valveMarksIdGet(id).then((data) => {
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

[**ValveMarkDto**](ValveMarkDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## valveMarksIdPut

> ValveMarkDto valveMarksIdPut(id, opts)

Обновить Марку Арматуры

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.ValveMarksApi();
let id = 56; // Number | 
let opts = {
  'createOrUpdateValveMarkRequest': new KdepaApi.CreateOrUpdateValveMarkRequest() // CreateOrUpdateValveMarkRequest | 
};
apiInstance.valveMarksIdPut(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **createOrUpdateValveMarkRequest** | [**CreateOrUpdateValveMarkRequest**](CreateOrUpdateValveMarkRequest.md)|  | [optional] 

### Return type

[**ValveMarkDto**](ValveMarkDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## valveMarksPost

> ValveMarkDto valveMarksPost(opts)

Создать Марку Арматуры

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.ValveMarksApi();
let opts = {
  'createOrUpdateValveMarkRequest': new KdepaApi.CreateOrUpdateValveMarkRequest() // CreateOrUpdateValveMarkRequest | 
};
apiInstance.valveMarksPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdateValveMarkRequest** | [**CreateOrUpdateValveMarkRequest**](CreateOrUpdateValveMarkRequest.md)|  | [optional] 

### Return type

[**ValveMarkDto**](ValveMarkDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

