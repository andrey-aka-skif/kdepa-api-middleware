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
import CreateOrUpdateStationRequest from '../model/CreateOrUpdateStationRequest';
import StationDto from '../model/StationDto';
import StationDtoQueryIdsFilterDtoPagedItemsDto from '../model/StationDtoQueryIdsFilterDtoPagedItemsDto';

/**
* Stations service.
* @module api/StationsApi
* @version 0.1.0
*/
export default class StationsApi {

    /**
    * Constructs a new StationsApi. 
    * @alias module:api/StationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Получить Станцию по умолчанию
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StationDto} and HTTP response
     */
    stationsDefaultGetWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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
      let returnType = StationDto;
      return this.apiClient.callApi(
        '/Stations/default', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Получить Станцию по умолчанию
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StationDto}
     */
    stationsDefaultGet() {
      return this.stationsDefaultGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Получить пагинированный список Станций
     * @param {Object} opts Optional parameters
     * @param {Number} [pageSize = 10)] 
     * @param {Number} [pageIndex = 0)] 
     * @param {String} [sortBy] 
     * @param {Boolean} [ascending] 
     * @param {Array.<Number>} [ids] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StationDtoQueryIdsFilterDtoPagedItemsDto} and HTTP response
     */
    stationsGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'pageSize': opts['pageSize'],
        'pageIndex': opts['pageIndex'],
        'SortBy': opts['sortBy'],
        'Ascending': opts['ascending'],
        'Ids': this.apiClient.buildCollectionParam(opts['ids'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = StationDtoQueryIdsFilterDtoPagedItemsDto;
      return this.apiClient.callApi(
        '/Stations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Получить пагинированный список Станций
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize  (default to 10)
     * @param {Number} opts.pageIndex  (default to 0)
     * @param {String} opts.sortBy 
     * @param {Boolean} opts.ascending 
     * @param {Array.<Number>} opts.ids 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StationDtoQueryIdsFilterDtoPagedItemsDto}
     */
    stationsGet(opts) {
      return this.stationsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Удалить Станцию
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    stationsIdDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling stationsIdDelete");
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
        '/Stations/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Удалить Станцию
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    stationsIdDelete(id) {
      return this.stationsIdDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Получить Станцию по id
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StationDto} and HTTP response
     */
    stationsIdGetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling stationsIdGet");
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
      let returnType = StationDto;
      return this.apiClient.callApi(
        '/Stations/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Получить Станцию по id
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StationDto}
     */
    stationsIdGet(id) {
      return this.stationsIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Обновить Станцию
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateOrUpdateStationRequest} [createOrUpdateStationRequest] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StationDto} and HTTP response
     */
    stationsIdPutWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['createOrUpdateStationRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling stationsIdPut");
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
      let returnType = StationDto;
      return this.apiClient.callApi(
        '/Stations/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Обновить Станцию
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateOrUpdateStationRequest} opts.createOrUpdateStationRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StationDto}
     */
    stationsIdPut(id, opts) {
      return this.stationsIdPutWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Создать Станцию
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateOrUpdateStationRequest} [createOrUpdateStationRequest] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StationDto} and HTTP response
     */
    stationsPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createOrUpdateStationRequest'];

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
      let returnType = StationDto;
      return this.apiClient.callApi(
        '/Stations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Создать Станцию
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateOrUpdateStationRequest} opts.createOrUpdateStationRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StationDto}
     */
    stationsPost(opts) {
      return this.stationsPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
