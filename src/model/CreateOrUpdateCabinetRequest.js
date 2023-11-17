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
 * The CreateOrUpdateCabinetRequest model module.
 * @module model/CreateOrUpdateCabinetRequest
 * @version 0.1.0
 */
class CreateOrUpdateCabinetRequest {
    /**
     * Constructs a new <code>CreateOrUpdateCabinetRequest</code>.
     * @alias module:model/CreateOrUpdateCabinetRequest
     */
    constructor() { 
        
        CreateOrUpdateCabinetRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateOrUpdateCabinetRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateOrUpdateCabinetRequest} obj Optional instance to populate.
     * @return {module:model/CreateOrUpdateCabinetRequest} The populated <code>CreateOrUpdateCabinetRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateOrUpdateCabinetRequest();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateOrUpdateCabinetRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateOrUpdateCabinetRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}



/**
 * @member {String} value
 */
CreateOrUpdateCabinetRequest.prototype['value'] = undefined;






export default CreateOrUpdateCabinetRequest;
