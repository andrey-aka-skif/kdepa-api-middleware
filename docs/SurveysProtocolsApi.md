# KdepaApi.SurveysProtocolsApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**surveysProtocolsProtocolsIdGet**](SurveysProtocolsApi.md#surveysProtocolsProtocolsIdGet) | **GET** /SurveysProtocols/protocols/{id} | Получить протокол по id
[**surveysProtocolsSurveyIdActualProtocolGet**](SurveysProtocolsApi.md#surveysProtocolsSurveyIdActualProtocolGet) | **GET** /SurveysProtocols/{surveyId}/actual-protocol | Получить актуальный протокол по id обследования
[**surveysProtocolsSurveyIdProtocolPut**](SurveysProtocolsApi.md#surveysProtocolsSurveyIdProtocolPut) | **PUT** /SurveysProtocols/{surveyId}/protocol | Обновить актуальный протокол обследования по id обследования
[**surveysProtocolsSurveyIdProtocolsGet**](SurveysProtocolsApi.md#surveysProtocolsSurveyIdProtocolsGet) | **GET** /SurveysProtocols/{surveyId}/protocols | Получить все протоколы по id обследования



## surveysProtocolsProtocolsIdGet

> SurveyProtocolDto surveysProtocolsProtocolsIdGet(id)

Получить протокол по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysProtocolsApi();
let id = 56; // Number | 
apiInstance.surveysProtocolsProtocolsIdGet(id).then((data) => {
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

[**SurveyProtocolDto**](SurveyProtocolDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## surveysProtocolsSurveyIdActualProtocolGet

> SurveyProtocolDto surveysProtocolsSurveyIdActualProtocolGet(surveyId)

Получить актуальный протокол по id обследования

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysProtocolsApi();
let surveyId = 56; // Number | 
apiInstance.surveysProtocolsSurveyIdActualProtocolGet(surveyId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **surveyId** | **Number**|  | 

### Return type

[**SurveyProtocolDto**](SurveyProtocolDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## surveysProtocolsSurveyIdProtocolPut

> SurveyProtocolDto surveysProtocolsSurveyIdProtocolPut(surveyId, opts)

Обновить актуальный протокол обследования по id обследования

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysProtocolsApi();
let surveyId = 56; // Number | 
let opts = {
  'updateSurveyProtocolRequest': new KdepaApi.UpdateSurveyProtocolRequest() // UpdateSurveyProtocolRequest | 
};
apiInstance.surveysProtocolsSurveyIdProtocolPut(surveyId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **surveyId** | **Number**|  | 
 **updateSurveyProtocolRequest** | [**UpdateSurveyProtocolRequest**](UpdateSurveyProtocolRequest.md)|  | [optional] 

### Return type

[**SurveyProtocolDto**](SurveyProtocolDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## surveysProtocolsSurveyIdProtocolsGet

> SurveyProtocolDto surveysProtocolsSurveyIdProtocolsGet(surveyId)

Получить все протоколы по id обследования

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysProtocolsApi();
let surveyId = 56; // Number | 
apiInstance.surveysProtocolsSurveyIdProtocolsGet(surveyId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **surveyId** | **Number**|  | 

### Return type

[**SurveyProtocolDto**](SurveyProtocolDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

