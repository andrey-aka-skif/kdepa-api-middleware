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
import CreateOrUpdateDriveMarkRequest from '../model/CreateOrUpdateDriveMarkRequest';
import DriveMarkDto from '../model/DriveMarkDto';
import DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto from '../model/DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto';

/**
* DriveMarks service.
* @module api/DriveMarksApi
* @version 0.1.0
*/
export default class DriveMarksApi {

    /**
    * Constructs a new DriveMarksApi. 
    * @alias module:api/DriveMarksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Получить пагинированный список Марок Привода
     * @param {Object} opts Optional parameters
     * @param {Number} [pageSize = 10)] 
     * @param {Number} [pageIndex = 0)] 
     * @param {String} [sortBy] 
     * @param {Boolean} [ascending] 
     * @param {Array.<Number>} [ids] 
     * @param {String} [nameSearchString] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto} and HTTP response
     */
    driveMarksGetWithHttpInfo(opts) {
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
        'NameSearchString': opts['nameSearchString']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto;
      return this.apiClient.callApi(
        '/DriveMarks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Получить пагинированный список Марок Привода
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize  (default to 10)
     * @param {Number} opts.pageIndex  (default to 0)
     * @param {String} opts.sortBy 
     * @param {Boolean} opts.ascending 
     * @param {Array.<Number>} opts.ids 
     * @param {String} opts.nameSearchString 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto}
     */
    driveMarksGet(opts) {
      return this.driveMarksGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Удалить Марку Привода
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    driveMarksIdDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling driveMarksIdDelete");
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
        '/DriveMarks/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Удалить Марку Привода
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    driveMarksIdDelete(id) {
      return this.driveMarksIdDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Получить Марку Привода по id
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DriveMarkDto} and HTTP response
     */
    driveMarksIdGetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling driveMarksIdGet");
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
      let returnType = DriveMarkDto;
      return this.apiClient.callApi(
        '/DriveMarks/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Получить Марку Привода по id
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DriveMarkDto}
     */
    driveMarksIdGet(id) {
      return this.driveMarksIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Обновить Марку Привода
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateOrUpdateDriveMarkRequest} [createOrUpdateDriveMarkRequest] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DriveMarkDto} and HTTP response
     */
    driveMarksIdPutWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['createOrUpdateDriveMarkRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling driveMarksIdPut");
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
      let returnType = DriveMarkDto;
      return this.apiClient.callApi(
        '/DriveMarks/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Обновить Марку Привода
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateOrUpdateDriveMarkRequest} opts.createOrUpdateDriveMarkRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DriveMarkDto}
     */
    driveMarksIdPut(id, opts) {
      return this.driveMarksIdPutWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Создать Марку Привода
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateOrUpdateDriveMarkRequest} [createOrUpdateDriveMarkRequest] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DriveMarkDto} and HTTP response
     */
    driveMarksPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createOrUpdateDriveMarkRequest'];

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
      let returnType = DriveMarkDto;
      return this.apiClient.callApi(
        '/DriveMarks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Создать Марку Привода
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateOrUpdateDriveMarkRequest} opts.createOrUpdateDriveMarkRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DriveMarkDto}
     */
    driveMarksPost(opts) {
      return this.driveMarksPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}