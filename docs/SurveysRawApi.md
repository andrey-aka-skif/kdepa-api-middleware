# KdepaApi.SurveysRawApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**surveysRawGet**](SurveysRawApi.md#surveysRawGet) | **GET** /SurveysRaw | Получить список Сырых Обследований
[**surveysRawGuidChannelsIndexGet**](SurveysRawApi.md#surveysRawGuidChannelsIndexGet) | **GET** /SurveysRaw/{guid}/channels/{index} | Получить график канала по guid Сырого Обследования и index канала
[**surveysRawGuidDelete**](SurveysRawApi.md#surveysRawGuidDelete) | **DELETE** /SurveysRaw/{guid} | Удалить Сырое Обследование
[**surveysRawGuidGet**](SurveysRawApi.md#surveysRawGuidGet) | **GET** /SurveysRaw/{guid} | Получить Сырое Обследование по GUID
[**surveysRawPost**](SurveysRawApi.md#surveysRawPost) | **POST** /SurveysRaw | Создать Сырое Обследование



## surveysRawGet

> [SurveyRawDto] surveysRawGet()

Получить список Сырых Обследований

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysRawApi();
apiInstance.surveysRawGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[SurveyRawDto]**](SurveyRawDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## surveysRawGuidChannelsIndexGet

> [ChartPoint] surveysRawGuidChannelsIndexGet(guid, index, opts)

Получить график канала по guid Сырого Обследования и index канала

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysRawApi();
let guid = "guid_example"; // String | 
let index = 56; // Number | 
let opts = {
  'chartFilterDto': new KdepaApi.ChartFilterDto() // ChartFilterDto | 
};
apiInstance.surveysRawGuidChannelsIndexGet(guid, index, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **String**|  | 
 **index** | **Number**|  | 
 **chartFilterDto** | [**ChartFilterDto**](ChartFilterDto.md)|  | [optional] 

### Return type

[**[ChartPoint]**](ChartPoint.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## surveysRawGuidDelete

> String surveysRawGuidDelete(guid)

Удалить Сырое Обследование

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysRawApi();
let guid = "guid_example"; // String | 
apiInstance.surveysRawGuidDelete(guid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **String**|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## surveysRawGuidGet

> SurveyRawDto surveysRawGuidGet(guid)

Получить Сырое Обследование по GUID

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysRawApi();
let guid = "guid_example"; // String | 
apiInstance.surveysRawGuidGet(guid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **String**|  | 

### Return type

[**SurveyRawDto**](SurveyRawDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## surveysRawPost

> SurveyRawDto surveysRawPost()

Создать Сырое Обследование

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysRawApi();
apiInstance.surveysRawPost().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SurveyRawDto**](SurveyRawDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

