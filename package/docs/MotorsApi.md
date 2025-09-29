# KdepaApi.MotorsApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**motorsGet**](MotorsApi.md#motorsGet) | **GET** /Motors | Получить пагинированный список Двигателей
[**motorsIdDelete**](MotorsApi.md#motorsIdDelete) | **DELETE** /Motors/{id} | Удалить Двигатель
[**motorsIdGet**](MotorsApi.md#motorsIdGet) | **GET** /Motors/{id} | Получить Двигатель по id
[**motorsIdPut**](MotorsApi.md#motorsIdPut) | **PUT** /Motors/{id} | Обновить Двигатель
[**motorsPost**](MotorsApi.md#motorsPost) | **POST** /Motors | Создать Двигатель



## motorsGet

> MotorDtoMotorsQueryFilterDtoPagedItemsDto motorsGet(opts)

Получить пагинированный список Двигателей

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.MotorsApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'sortBy': "sortBy_example", // String | 
  'ascending': true, // Boolean | 
  'ids': [null], // [Number] | 
  'markIds': [null], // [Number] | 
  'factoryIds': [null], // [Number] | 
  'serialNumbers': ["null"], // [String] | 
  'serialNumberSearchString': "serialNumberSearchString_example", // String | 
  'madeDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'madeDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'inUseDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'inUseDateTo': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.motorsGet(opts).then((data) => {
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
 **markIds** | [**[Number]**](Number.md)|  | [optional] 
 **factoryIds** | [**[Number]**](Number.md)|  | [optional] 
 **serialNumbers** | [**[String]**](String.md)|  | [optional] 
 **serialNumberSearchString** | **String**|  | [optional] 
 **madeDateFrom** | **Date**|  | [optional] 
 **madeDateTo** | **Date**|  | [optional] 
 **inUseDateFrom** | **Date**|  | [optional] 
 **inUseDateTo** | **Date**|  | [optional] 

### Return type

[**MotorDtoMotorsQueryFilterDtoPagedItemsDto**](MotorDtoMotorsQueryFilterDtoPagedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## motorsIdDelete

> String motorsIdDelete(id)

Удалить Двигатель

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.MotorsApi();
let id = 56; // Number | 
apiInstance.motorsIdDelete(id).then((data) => {
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


## motorsIdGet

> MotorDto motorsIdGet(id)

Получить Двигатель по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.MotorsApi();
let id = 56; // Number | 
apiInstance.motorsIdGet(id).then((data) => {
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

[**MotorDto**](MotorDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## motorsIdPut

> MotorDto motorsIdPut(id, opts)

Обновить Двигатель

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.MotorsApi();
let id = 56; // Number | 
let opts = {
  'createOrUpdateMotorRequest': new KdepaApi.CreateOrUpdateMotorRequest() // CreateOrUpdateMotorRequest | 
};
apiInstance.motorsIdPut(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **createOrUpdateMotorRequest** | [**CreateOrUpdateMotorRequest**](CreateOrUpdateMotorRequest.md)|  | [optional] 

### Return type

[**MotorDto**](MotorDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## motorsPost

> MotorDto motorsPost(opts)

Создать Двигатель

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.MotorsApi();
let opts = {
  'createOrUpdateMotorRequest': new KdepaApi.CreateOrUpdateMotorRequest() // CreateOrUpdateMotorRequest | 
};
apiInstance.motorsPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdateMotorRequest** | [**CreateOrUpdateMotorRequest**](CreateOrUpdateMotorRequest.md)|  | [optional] 

### Return type

[**MotorDto**](MotorDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

