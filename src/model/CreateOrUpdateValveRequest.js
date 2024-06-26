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

import ApiClient from '../ApiClient';

/**
 * The CreateOrUpdateValveRequest model module.
 * @module model/CreateOrUpdateValveRequest
 * @version 0.1.0
 */
class CreateOrUpdateValveRequest {
    /**
     * Constructs a new <code>CreateOrUpdateValveRequest</code>.
     * @alias module:model/CreateOrUpdateValveRequest
     */
    constructor() { 
        
        CreateOrUpdateValveRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateOrUpdateValveRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateOrUpdateValveRequest} obj Optional instance to populate.
     * @return {module:model/CreateOrUpdateValveRequest} The populated <code>CreateOrUpdateValveRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateOrUpdateValveRequest();

            if (data.hasOwnProperty('markId')) {
                obj['markId'] = ApiClient.convertToType(data['markId'], 'Number');
            }
            if (data.hasOwnProperty('factoryId')) {
                obj['factoryId'] = ApiClient.convertToType(data['factoryId'], 'Number');
            }
            if (data.hasOwnProperty('serialNumber')) {
                obj['serialNumber'] = ApiClient.convertToType(data['serialNumber'], 'String');
            }
            if (data.hasOwnProperty('madeDate')) {
                obj['madeDate'] = ApiClient.convertToType(data['madeDate'], 'Date');
            }
            if (data.hasOwnProperty('inUseDate')) {
                obj['inUseDate'] = ApiClient.convertToType(data['inUseDate'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateOrUpdateValveRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateOrUpdateValveRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['serialNumber'] && !(typeof data['serialNumber'] === 'string' || data['serialNumber'] instanceof String)) {
            throw new Error("Expected the field `serialNumber` to be a primitive type in the JSON string but got " + data['serialNumber']);
        }

        return true;
    }


}



/**
 * @member {Number} markId
 */
CreateOrUpdateValveRequest.prototype['markId'] = undefined;

/**
 * @member {Number} factoryId
 */
CreateOrUpdateValveRequest.prototype['factoryId'] = undefined;

/**
 * @member {String} serialNumber
 */
CreateOrUpdateValveRequest.prototype['serialNumber'] = undefined;

/**
 * @member {Date} madeDate
 */
CreateOrUpdateValveRequest.prototype['madeDate'] = undefined;

/**
 * @member {Date} inUseDate
 */
CreateOrUpdateValveRequest.prototype['inUseDate'] = undefined;






export default CreateOrUpdateValveRequest;

