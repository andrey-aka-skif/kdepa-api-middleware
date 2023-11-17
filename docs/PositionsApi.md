# KdepaApi.PositionsApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**positionsGet**](PositionsApi.md#positionsGet) | **GET** /Positions | Получить пагинированный список Оперативных Позиций
[**positionsIdDelete**](PositionsApi.md#positionsIdDelete) | **DELETE** /Positions/{id} | Удалить Оперативную Позицию
[**positionsIdExtendedGet**](PositionsApi.md#positionsIdExtendedGet) | **GET** /Positions/{id}/extended | Получить Оперативную позицию по id, включая контент Справочников
[**positionsIdGet**](PositionsApi.md#positionsIdGet) | **GET** /Positions/{id} | Получить Оперативную Позицию по id
[**positionsIdPut**](PositionsApi.md#positionsIdPut) | **PUT** /Positions/{id} | Обновить Оперативную Позицию
[**positionsPost**](PositionsApi.md#positionsPost) | **POST** /Positions | Создать Оперативную Позицию



## positionsGet

> PositionDtoPositionsQueryFilterDtoPagedItemsDto positionsGet(opts)

Получить пагинированный список Оперативных Позиций

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.PositionsApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'sortBy': "sortBy_example", // String | 
  'ascending': true, // Boolean | 
  'ids': [null], // [Number] | 
  'blockIds': [null], // [Number] | 
  'systemIds': [null], // [Number] | 
  'shopIds': [null], // [Number] | 
  'safetyClassIds': [null], // [Number] | 
  'cabinetIds': [null], // [Number] | 
  'mediumIds': [null], // [Number] | 
  'nameSearchString': "nameSearchString_example" // String | 
};
apiInstance.positionsGet(opts).then((data) => {
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
 **blockIds** | [**[Number]**](Number.md)|  | [optional] 
 **systemIds** | [**[Number]**](Number.md)|  | [optional] 
 **shopIds** | [**[Number]**](Number.md)|  | [optional] 
 **safetyClassIds** | [**[Number]**](Number.md)|  | [optional] 
 **cabinetIds** | [**[Number]**](Number.md)|  | [optional] 
 **mediumIds** | [**[Number]**](Number.md)|  | [optional] 
 **nameSearchString** | **String**|  | [optional] 

### Return type

[**PositionDtoPositionsQueryFilterDtoPagedItemsDto**](PositionDtoPositionsQueryFilterDtoPagedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## positionsIdDelete

> String positionsIdDelete(id)

Удалить Оперативную Позицию

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.PositionsApi();
let id = 56; // Number | 
apiInstance.positionsIdDelete(id).then((data) => {
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


## positionsIdExtendedGet

> PositionExtendedDto positionsIdExtendedGet(id)

Получить Оперативную позицию по id, включая контент Справочников

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.PositionsApi();
let id = 56; // Number | 
apiInstance.positionsIdExtendedGet(id).then((data) => {
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

[**PositionExtendedDto**](PositionExtendedDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## positionsIdGet

> PositionDto positionsIdGet(id)

Получить Оперативную Позицию по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.PositionsApi();
let id = 56; // Number | 
apiInstance.positionsIdGet(id).then((data) => {
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

[**PositionDto**](PositionDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## positionsIdPut

> PositionDto positionsIdPut(id, opts)

Обновить Оперативную Позицию

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.PositionsApi();
let id = 56; // Number | 
let opts = {
  'createOrUpdatePositionRequest': new KdepaApi.CreateOrUpdatePositionRequest() // CreateOrUpdatePositionRequest | 
};
apiInstance.positionsIdPut(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **createOrUpdatePositionRequest** | [**CreateOrUpdatePositionRequest**](CreateOrUpdatePositionRequest.md)|  | [optional] 

### Return type

[**PositionDto**](PositionDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## positionsPost

> PositionDto positionsPost(opts)

Создать Оперативную Позицию

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.PositionsApi();
let opts = {
  'createOrUpdatePositionRequest': new KdepaApi.CreateOrUpdatePositionRequest() // CreateOrUpdatePositionRequest | 
};
apiInstance.positionsPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdatePositionRequest** | [**CreateOrUpdatePositionRequest**](CreateOrUpdatePositionRequest.md)|  | [optional] 

### Return type

[**PositionDto**](PositionDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

