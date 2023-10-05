# KdepaApi.ShopsApi

All URIs are relative to *http://localhost:5275/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**shopsGet**](ShopsApi.md#shopsGet) | **GET** /Shops | Получить пагинированный список Цехов
[**shopsIdDelete**](ShopsApi.md#shopsIdDelete) | **DELETE** /Shops/{id} | Удалить Цех
[**shopsIdGet**](ShopsApi.md#shopsIdGet) | **GET** /Shops/{id} | Получить Цех по id
[**shopsIdPut**](ShopsApi.md#shopsIdPut) | **PUT** /Shops/{id} | Обновить Цех
[**shopsPost**](ShopsApi.md#shopsPost) | **POST** /Shops | Создать Цех



## shopsGet

> ShopDtoQueryIdsFilterDtoPagedItemsDto shopsGet(opts)

Получить пагинированный список Цехов

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.ShopsApi();
let opts = {
  'pageSize': 10, // Number | 
  'pageIndex': 0, // Number | 
  'sortBy': "sortBy_example", // String | 
  'ascending': true, // Boolean | 
  'ids': [null] // [Number] | 
};
apiInstance.shopsGet(opts).then((data) => {
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

### Return type

[**ShopDtoQueryIdsFilterDtoPagedItemsDto**](ShopDtoQueryIdsFilterDtoPagedItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## shopsIdDelete

> String shopsIdDelete(id)

Удалить Цех

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.ShopsApi();
let id = 56; // Number | 
apiInstance.shopsIdDelete(id).then((data) => {
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


## shopsIdGet

> ShopDto shopsIdGet(id)

Получить Цех по id

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.ShopsApi();
let id = 56; // Number | 
apiInstance.shopsIdGet(id).then((data) => {
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

[**ShopDto**](ShopDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## shopsIdPut

> ShopDto shopsIdPut(id, opts)

Обновить Цех

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.ShopsApi();
let id = 56; // Number | 
let opts = {
  'updateShopRequest': new KdepaApi.UpdateShopRequest() // UpdateShopRequest | 
};
apiInstance.shopsIdPut(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **updateShopRequest** | [**UpdateShopRequest**](UpdateShopRequest.md)|  | [optional] 

### Return type

[**ShopDto**](ShopDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## shopsPost

> ShopDto shopsPost(opts)

Создать Цех

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.ShopsApi();
let opts = {
  'createShopRequest': new KdepaApi.CreateShopRequest() // CreateShopRequest | 
};
apiInstance.shopsPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createShopRequest** | [**CreateShopRequest**](CreateShopRequest.md)|  | [optional] 

### Return type

[**ShopDto**](ShopDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

