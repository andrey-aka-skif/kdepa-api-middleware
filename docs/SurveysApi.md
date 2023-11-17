# KdepaApi.SurveysApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**surveysGet**](SurveysApi.md#surveysGet) | **GET** /Surveys | Получить пагинированый список Обследований
[**surveysIdChannelsChannelIdGet**](SurveysApi.md#surveysIdChannelsChannelIdGet) | **GET** /Surveys/{id}/channels/{channelId} | Получить график канала по id Обследования и channelId канала
[**surveysIdDelete**](SurveysApi.md#surveysIdDelete) | **DELETE** /Surveys/{id} | Удалить Обследование
[**surveysIdGet**](SurveysApi.md#surveysIdGet) | **GET** /Surveys/{id} | Получить Обследование по id
[**surveysIdPut**](SurveysApi.md#surveysIdPut) | **PUT** /Surveys/{id} | Обновить Обследование
[**surveysPost**](SurveysApi.md#surveysPost) | **POST** /Surveys | Создать Обследование



## surveysGet

> SurveyDtoSurveysQueryFilterDtoPagedItemsDto surveysGet(opts)

Получить пагинированый список Обследований

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'sortBy': "sortBy_example", // String | 
  'ascending': true, // Boolean | 
  'filter': {key: null} // Object | 
};
apiInstance.surveysGet(opts).then((data) => {
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
 **filter** | [**Object**](.md)|  | [optional] 

### Return type

[**SurveyDtoSurveysQueryFilterDtoPagedItemsDto**](SurveyDtoSurveysQueryFilterDtoPagedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## surveysIdChannelsChannelIdGet

> [ChartPoint] surveysIdChannelsChannelIdGet(id, channelId, opts)

Получить график канала по id Обследования и channelId канала

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysApi();
let id = 56; // Number | 
let channelId = 56; // Number | 
let opts = {
  'chartFilterDto': new KdepaApi.ChartFilterDto() // ChartFilterDto | 
};
apiInstance.surveysIdChannelsChannelIdGet(id, channelId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **channelId** | **Number**|  | 
 **chartFilterDto** | [**ChartFilterDto**](ChartFilterDto.md)|  | [optional] 

### Return type

[**[ChartPoint]**](ChartPoint.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## surveysIdDelete

> String surveysIdDelete(id)

Удалить Обследование

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysApi();
let id = 56; // Number | 
apiInstance.surveysIdDelete(id).then((data) => {
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


## surveysIdGet

> SurveyDto surveysIdGet(id)

Получить Обследование по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysApi();
let id = 56; // Number | 
apiInstance.surveysIdGet(id).then((data) => {
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

[**SurveyDto**](SurveyDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## surveysIdPut

> SurveyDto surveysIdPut(id, opts)

Обновить Обследование

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysApi();
let id = 56; // Number | 
let opts = {
  'updateSurveyRequest': new KdepaApi.UpdateSurveyRequest() // UpdateSurveyRequest | 
};
apiInstance.surveysIdPut(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **updateSurveyRequest** | [**UpdateSurveyRequest**](UpdateSurveyRequest.md)|  | [optional] 

### Return type

[**SurveyDto**](SurveyDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## surveysPost

> SurveyDto surveysPost(opts)

Создать Обследование

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysApi();
let opts = {
  'createSurveyRequest': new KdepaApi.CreateSurveyRequest() // CreateSurveyRequest | 
};
apiInstance.surveysPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSurveyRequest** | [**CreateSurveyRequest**](CreateSurveyRequest.md)|  | [optional] 

### Return type

[**SurveyDto**](SurveyDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

