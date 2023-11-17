# KdepaApi.DriveMarksApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**driveMarksGet**](DriveMarksApi.md#driveMarksGet) | **GET** /DriveMarks | Получить пагинированный список Марок Привода
[**driveMarksIdDelete**](DriveMarksApi.md#driveMarksIdDelete) | **DELETE** /DriveMarks/{id} | Удалить Марку Привода
[**driveMarksIdGet**](DriveMarksApi.md#driveMarksIdGet) | **GET** /DriveMarks/{id} | Получить Марку Привода по id
[**driveMarksIdPut**](DriveMarksApi.md#driveMarksIdPut) | **PUT** /DriveMarks/{id} | Обновить Марку Привода
[**driveMarksPost**](DriveMarksApi.md#driveMarksPost) | **POST** /DriveMarks | Создать Марку Привода



## driveMarksGet

> DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto driveMarksGet(opts)

Получить пагинированный список Марок Привода

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.DriveMarksApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'sortBy': "sortBy_example", // String | 
  'ascending': true, // Boolean | 
  'ids': [null], // [Number] | 
  'nameSearchString': "nameSearchString_example" // String | 
};
apiInstance.driveMarksGet(opts).then((data) => {
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

[**DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto**](DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## driveMarksIdDelete

> String driveMarksIdDelete(id)

Удалить Марку Привода

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.DriveMarksApi();
let id = 56; // Number | 
apiInstance.driveMarksIdDelete(id).then((data) => {
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


## driveMarksIdGet

> DriveMarkDto driveMarksIdGet(id)

Получить Марку Привода по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.DriveMarksApi();
let id = 56; // Number | 
apiInstance.driveMarksIdGet(id).then((data) => {
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

[**DriveMarkDto**](DriveMarkDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## driveMarksIdPut

> DriveMarkDto driveMarksIdPut(id, opts)

Обновить Марку Привода

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.DriveMarksApi();
let id = 56; // Number | 
let opts = {
  'createOrUpdateDriveMarkRequest': new KdepaApi.CreateOrUpdateDriveMarkRequest() // CreateOrUpdateDriveMarkRequest | 
};
apiInstance.driveMarksIdPut(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **createOrUpdateDriveMarkRequest** | [**CreateOrUpdateDriveMarkRequest**](CreateOrUpdateDriveMarkRequest.md)|  | [optional] 

### Return type

[**DriveMarkDto**](DriveMarkDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## driveMarksPost

> DriveMarkDto driveMarksPost(opts)

Создать Марку Привода

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.DriveMarksApi();
let opts = {
  'createOrUpdateDriveMarkRequest': new KdepaApi.CreateOrUpdateDriveMarkRequest() // CreateOrUpdateDriveMarkRequest | 
};
apiInstance.driveMarksPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdateDriveMarkRequest** | [**CreateOrUpdateDriveMarkRequest**](CreateOrUpdateDriveMarkRequest.md)|  | [optional] 

### Return type

[**DriveMarkDto**](DriveMarkDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

