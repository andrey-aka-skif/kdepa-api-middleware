# KdepaApi.SurveysApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**surveysExtendedGet**](SurveysApi.md#surveysExtendedGet) | **GET** /Surveys/extended | Получить расширенный пагинированый список Обследований
[**surveysGet**](SurveysApi.md#surveysGet) | **GET** /Surveys | Получить пагинированый список Обследований
[**surveysIdChannelChannelGet**](SurveysApi.md#surveysIdChannelChannelGet) | **GET** /Surveys/{id}/channel/{channel} | Получить график по id Обследования и типу канала
[**surveysIdChannelsChannelIdGet**](SurveysApi.md#surveysIdChannelsChannelIdGet) | **GET** /Surveys/{id}/channels/{channelId} | Получить график канала по id Обследования и channelId канала
[**surveysIdDelete**](SurveysApi.md#surveysIdDelete) | **DELETE** /Surveys/{id} | Удалить Обследование
[**surveysIdDiagnosticsPost**](SurveysApi.md#surveysIdDiagnosticsPost) | **POST** /Surveys/{id}/diagnostics | Создать Диагностирование для Обследования
[**surveysIdGet**](SurveysApi.md#surveysIdGet) | **GET** /Surveys/{id} | Получить Обследование по id
[**surveysIdProtocolGet**](SurveysApi.md#surveysIdProtocolGet) | **GET** /Surveys/{id}/protocol | Получить протокол обследования по id обследования
[**surveysIdProtocolPut**](SurveysApi.md#surveysIdProtocolPut) | **PUT** /Surveys/{id}/protocol | Обновить протокол обследования по id обследования
[**surveysIdPut**](SurveysApi.md#surveysIdPut) | **PUT** /Surveys/{id} | Обновить Обследование
[**surveysPost**](SurveysApi.md#surveysPost) | **POST** /Surveys | Создать Обследование



## surveysExtendedGet

> SurveyExtendedDtoSurveysExtendedQueryFilterDtoPagedItemsDto surveysExtendedGet(opts)

Получить расширенный пагинированый список Обследований

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'sortBy': "sortBy_example", // String | 
  'ascending': true, // Boolean | 
  'positionIds': [null], // [Number] | 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'hasElectricChannel': true, // Boolean | 
  'hasTorqueChannel': true, // Boolean | 
  'hasActualAssembly': true, // Boolean | 
  'hasArchivalAssembly': true, // Boolean | 
  'isSynched': true, // Boolean | 
  'isSliced': true, // Boolean | 
  'isAnalyzed': true, // Boolean | 
  'hasStatAnalysis': true, // Boolean | 
  'hasTorqueAnalysis': true, // Boolean | 
  'hasTrend': true // Boolean | 
};
apiInstance.surveysExtendedGet(opts).then((data) => {
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
 **positionIds** | [**[Number]**](Number.md)|  | [optional] 
 **dateFrom** | **Date**|  | [optional] 
 **dateTo** | **Date**|  | [optional] 
 **hasElectricChannel** | **Boolean**|  | [optional] 
 **hasTorqueChannel** | **Boolean**|  | [optional] 
 **hasActualAssembly** | **Boolean**|  | [optional] 
 **hasArchivalAssembly** | **Boolean**|  | [optional] 
 **isSynched** | **Boolean**|  | [optional] 
 **isSliced** | **Boolean**|  | [optional] 
 **isAnalyzed** | **Boolean**|  | [optional] 
 **hasStatAnalysis** | **Boolean**|  | [optional] 
 **hasTorqueAnalysis** | **Boolean**|  | [optional] 
 **hasTrend** | **Boolean**|  | [optional] 

### Return type

[**SurveyExtendedDtoSurveysExtendedQueryFilterDtoPagedItemsDto**](SurveyExtendedDtoSurveysExtendedQueryFilterDtoPagedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


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


## surveysIdChannelChannelGet

> ChartResult surveysIdChannelChannelGet(id, channel, opts)

Получить график по id Обследования и типу канала

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysApi();
let id = 56; // Number | 
let channel = new KdepaApi.ChannelType(); // ChannelType | 
let opts = {
  'region': "region_example", // String | 
  'regionPadding': 3.4, // Number | 
  'from': 3.4, // Number | 
  'to': 3.4, // Number | 
  'spectrum': "spectrum_example", // String | 
  'envelope': "envelope_example", // String | 
  'decimation': "decimation_example", // String | 
  'decimationSamples': 56 // Number | 
};
apiInstance.surveysIdChannelChannelGet(id, channel, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **channel** | [**ChannelType**](.md)|  | 
 **region** | **String**|  | [optional] 
 **regionPadding** | **Number**|  | [optional] 
 **from** | **Number**|  | [optional] 
 **to** | **Number**|  | [optional] 
 **spectrum** | **String**|  | [optional] 
 **envelope** | **String**|  | [optional] 
 **decimation** | **String**|  | [optional] 
 **decimationSamples** | **Number**|  | [optional] 

### Return type

[**ChartResult**](ChartResult.md)

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
  'type': new KdepaApi.ChartType(), // ChartType | 
  'from': 3.4, // Number | 
  'to': 3.4, // Number | 
  'samples': 56 // Number | 
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
 **type** | [**ChartType**](.md)|  | [optional] 
 **from** | **Number**|  | [optional] 
 **to** | **Number**|  | [optional] 
 **samples** | **Number**|  | [optional] 

### Return type

[**[ChartPoint]**](ChartPoint.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
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


## surveysIdDiagnosticsPost

> SurveyDto surveysIdDiagnosticsPost(id)

Создать Диагностирование для Обследования

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysApi();
let id = 56; // Number | 
apiInstance.surveysIdDiagnosticsPost(id).then((data) => {
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


## surveysIdProtocolGet

> SurveyProtocolDto surveysIdProtocolGet(id)

Получить протокол обследования по id обследования

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysApi();
let id = 56; // Number | 
apiInstance.surveysIdProtocolGet(id).then((data) => {
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


## surveysIdProtocolPut

> SurveyProtocolDto surveysIdProtocolPut(id, opts)

Обновить протокол обследования по id обследования

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.SurveysApi();
let id = 56; // Number | 
let opts = {
  'updateSurveyProtocolRequest': new KdepaApi.UpdateSurveyProtocolRequest() // UpdateSurveyProtocolRequest | 
};
apiInstance.surveysIdProtocolPut(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **updateSurveyProtocolRequest** | [**UpdateSurveyProtocolRequest**](UpdateSurveyProtocolRequest.md)|  | [optional] 

### Return type

[**SurveyProtocolDto**](SurveyProtocolDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
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

