# KdepaApi.DebugApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**debugEndpointUrlsGet**](DebugApi.md#debugEndpointUrlsGet) | **GET** /Debug/endpoint-urls | Список url конечных точек ресурсов API
[**debugEndpointsGet**](DebugApi.md#debugEndpointsGet) | **GET** /Debug/endpoints | Список конечных точек ресурсов API
[**debugHelloGet**](DebugApi.md#debugHelloGet) | **GET** /Debug/hello | Сообщить о работоспособности



## debugEndpointUrlsGet

> [String] debugEndpointUrlsGet()

Список url конечных точек ресурсов API

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.DebugApi();
apiInstance.debugEndpointUrlsGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## debugEndpointsGet

> [String] debugEndpointsGet()

Список конечных точек ресурсов API

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.DebugApi();
apiInstance.debugEndpointsGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## debugHelloGet

> String debugHelloGet()

Сообщить о работоспособности

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.DebugApi();
apiInstance.debugHelloGet().then((data) => {
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

