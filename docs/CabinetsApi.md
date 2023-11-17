# KdepaApi.CabinetsApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cabinetsGet**](CabinetsApi.md#cabinetsGet) | **GET** /Cabinets | Получить пагинированный список Помещений
[**cabinetsIdDelete**](CabinetsApi.md#cabinetsIdDelete) | **DELETE** /Cabinets/{id} | Удалить Помещение
[**cabinetsIdGet**](CabinetsApi.md#cabinetsIdGet) | **GET** /Cabinets/{id} | Получить Помещение по id
[**cabinetsIdPut**](CabinetsApi.md#cabinetsIdPut) | **PUT** /Cabinets/{id} | Обновить Помещение
[**cabinetsPost**](CabinetsApi.md#cabinetsPost) | **POST** /Cabinets | Создать Помещение



## cabinetsGet

> CabinetDtoCabinetsQueryFilterDtoPagedItemsDto cabinetsGet(opts)

Получить пагинированный список Помещений

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.CabinetsApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'sortBy': "sortBy_example", // String | 
  'ascending': true, // Boolean | 
  'ids': [null], // [Number] | 
  'cabinetSearchString': "cabinetSearchString_example" // String | 
};
apiInstance.cabinetsGet(opts).then((data) => {
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
 **cabinetSearchString** | **String**|  | [optional] 

### Return type

[**CabinetDtoCabinetsQueryFilterDtoPagedItemsDto**](CabinetDtoCabinetsQueryFilterDtoPagedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## cabinetsIdDelete

> String cabinetsIdDelete(id)

Удалить Помещение

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.CabinetsApi();
let id = 56; // Number | 
apiInstance.cabinetsIdDelete(id).then((data) => {
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


## cabinetsIdGet

> CabinetDto cabinetsIdGet(id)

Получить Помещение по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.CabinetsApi();
let id = 56; // Number | 
apiInstance.cabinetsIdGet(id).then((data) => {
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

[**CabinetDto**](CabinetDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## cabinetsIdPut

> CabinetDto cabinetsIdPut(id, opts)

Обновить Помещение

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.CabinetsApi();
let id = 56; // Number | 
let opts = {
  'createOrUpdateCabinetRequest': new KdepaApi.CreateOrUpdateCabinetRequest() // CreateOrUpdateCabinetRequest | 
};
apiInstance.cabinetsIdPut(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **createOrUpdateCabinetRequest** | [**CreateOrUpdateCabinetRequest**](CreateOrUpdateCabinetRequest.md)|  | [optional] 

### Return type

[**CabinetDto**](CabinetDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## cabinetsPost

> CabinetDto cabinetsPost(opts)

Создать Помещение

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.CabinetsApi();
let opts = {
  'createOrUpdateCabinetRequest': new KdepaApi.CreateOrUpdateCabinetRequest() // CreateOrUpdateCabinetRequest | 
};
apiInstance.cabinetsPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdateCabinetRequest** | [**CreateOrUpdateCabinetRequest**](CreateOrUpdateCabinetRequest.md)|  | [optional] 

### Return type

[**CabinetDto**](CabinetDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

