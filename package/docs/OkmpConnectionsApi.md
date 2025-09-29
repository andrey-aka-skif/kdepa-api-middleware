# KdepaApi.OkmpConnectionsApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dumpGet**](OkmpConnectionsApi.md#dumpGet) | **GET** /dump | Получить Оперативные позиции



## dumpGet

> String dumpGet()

Получить Оперативные позиции

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.OkmpConnectionsApi();
apiInstance.dumpGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

