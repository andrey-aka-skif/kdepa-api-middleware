/**
 * kdepa-api
 * КДЭПА CRUD API
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BlockDto from '../model/BlockDto';
import BlockDtoBlocksQueryFilterDtoPagedItemsDto from '../model/BlockDtoBlocksQueryFilterDtoPagedItemsDto';
import CreateOrUpdateBlockRequest from '../model/CreateOrUpdateBlockRequest';

/**
* Blocks service.
* @module api/BlocksApi
* @version 0.1.0
*/
export default class BlocksApi {

    /**
    * Constructs a new BlocksApi. 
    * @alias module:api/BlocksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Получить пагинированный список Блоков
     * @param {Object} opts Optional parameters
     * @param {Number} [pageSize = 10)] 
     * @param {Number} [pageIndex = 0)] 
     * @param {String} [sortBy] 
     * @param {Boolean} [ascending] 
     * @param {Array.<Number>} [ids] 
     * @param {Number} [blockNumberSearchNumber] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlockDtoBlocksQueryFilterDtoPagedItemsDto} and HTTP response
     */
    blocksGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'pageSize': opts['pageSize'],
        'pageIndex': opts['pageIndex'],
        'SortBy': opts['sortBy'],
        'Ascending': opts['ascending'],
        'Ids': this.apiClient.buildCollectionParam(opts['ids'], 'multi'),
        'BlockNumberSearchNumber': opts['blockNumberSearchNumber']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = BlockDtoBlocksQueryFilterDtoPagedItemsDto;
      return this.apiClient.callApi(
        '/Blocks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Получить пагинированный список Блоков
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize  (default to 10)
     * @param {Number} opts.pageIndex  (default to 0)
     * @param {String} opts.sortBy 
     * @param {Boolean} opts.ascending 
     * @param {Array.<Number>} opts.ids 
     * @param {Number} opts.blockNumberSearchNumber 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlockDtoBlocksQueryFilterDtoPagedItemsDto}
     */
    blocksGet(opts) {
      return this.blocksGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Удалить Блок
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    blocksIdDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling blocksIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/Blocks/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Удалить Блок
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    blocksIdDelete(id) {
      return this.blocksIdDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Получить Блок по id
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlockDto} and HTTP response
     */
    blocksIdGetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling blocksIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = BlockDto;
      return this.apiClient.callApi(
        '/Blocks/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Получить Блок по id
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlockDto}
     */
    blocksIdGet(id) {
      return this.blocksIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Обновить Блок
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateOrUpdateBlockRequest} [createOrUpdateBlockRequest] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlockDto} and HTTP response
     */
    blocksIdPutWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['createOrUpdateBlockRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling blocksIdPut");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'text/json', 'application/*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = BlockDto;
      return this.apiClient.callApi(
        '/Blocks/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Обновить Блок
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateOrUpdateBlockRequest} opts.createOrUpdateBlockRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlockDto}
     */
    blocksIdPut(id, opts) {
      return this.blocksIdPutWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Создать Блок
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateOrUpdateBlockRequest} [createOrUpdateBlockRequest] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlockDto} and HTTP response
     */
    blocksPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createOrUpdateBlockRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'text/json', 'application/*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = BlockDto;
      return this.apiClient.callApi(
        '/Blocks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Создать Блок
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateOrUpdateBlockRequest} opts.createOrUpdateBlockRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlockDto}
     */
    blocksPost(opts) {
      return this.blocksPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
