# KdepaApi.MotorMarksApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**motorMarksGet**](MotorMarksApi.md#motorMarksGet) | **GET** /MotorMarks | Получить пагинированный список Марок Двигателей
[**motorMarksIdDelete**](MotorMarksApi.md#motorMarksIdDelete) | **DELETE** /MotorMarks/{id} | Удалить Марку Двигателя
[**motorMarksIdGet**](MotorMarksApi.md#motorMarksIdGet) | **GET** /MotorMarks/{id} | Получить Марку Двигателя по id
[**motorMarksIdPut**](MotorMarksApi.md#motorMarksIdPut) | **PUT** /MotorMarks/{id} | Обновить Марку Двигателя
[**motorMarksPost**](MotorMarksApi.md#motorMarksPost) | **POST** /MotorMarks | Создать Марку Двигателя



## motorMarksGet

> MotorMarkDtoMotorMarksQueryFilterDtoPagedItemsDto motorMarksGet(opts)

Получить пагинированный список Марок Двигателей

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.MotorMarksApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'sortBy': "sortBy_example", // String | 
  'ascending': true, // Boolean | 
  'ids': [null], // [Number] | 
  'names': ["null"], // [String] | 
  'nameSearchString': "nameSearchString_example" // String | 
};
apiInstance.motorMarksGet(opts).then((data) => {
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
 **names** | [**[String]**](String.md)|  | [optional] 
 **nameSearchString** | **String**|  | [optional] 

### Return type

[**MotorMarkDtoMotorMarksQueryFilterDtoPagedItemsDto**](MotorMarkDtoMotorMarksQueryFilterDtoPagedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## motorMarksIdDelete

> String motorMarksIdDelete(id)

Удалить Марку Двигателя

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.MotorMarksApi();
let id = 56; // Number | 
apiInstance.motorMarksIdDelete(id).then((data) => {
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


## motorMarksIdGet

> MotorMarkDto motorMarksIdGet(id)

Получить Марку Двигателя по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.MotorMarksApi();
let id = 56; // Number | 
apiInstance.motorMarksIdGet(id).then((data) => {
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

[**MotorMarkDto**](MotorMarkDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## motorMarksIdPut

> MotorMarkDto motorMarksIdPut(id, opts)

Обновить Марку Двигателя

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.MotorMarksApi();
let id = 56; // Number | 
let opts = {
  'createOrUpdateMotorMarkRequest': new KdepaApi.CreateOrUpdateMotorMarkRequest() // CreateOrUpdateMotorMarkRequest | 
};
apiInstance.motorMarksIdPut(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **createOrUpdateMotorMarkRequest** | [**CreateOrUpdateMotorMarkRequest**](CreateOrUpdateMotorMarkRequest.md)|  | [optional] 

### Return type

[**MotorMarkDto**](MotorMarkDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## motorMarksPost

> MotorMarkDto motorMarksPost(opts)

Создать Марку Двигателя

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.MotorMarksApi();
let opts = {
  'createOrUpdateMotorMarkRequest': new KdepaApi.CreateOrUpdateMotorMarkRequest() // CreateOrUpdateMotorMarkRequest | 
};
apiInstance.motorMarksPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdateMotorMarkRequest** | [**CreateOrUpdateMotorMarkRequest**](CreateOrUpdateMotorMarkRequest.md)|  | [optional] 

### Return type

[**MotorMarkDto**](MotorMarkDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

