/**
 * kdepa-api-middleware
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
 * The SortDto model module.
 * @module model/SortDto
 * @version 0.1.0
 */
class SortDto {
    /**
     * Constructs a new <code>SortDto</code>.
     * @alias module:model/SortDto
     */
    constructor() { 
        
        SortDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SortDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SortDto} obj Optional instance to populate.
     * @return {module:model/SortDto} The populated <code>SortDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SortDto();

            if (data.hasOwnProperty('sortBy')) {
                obj['sortBy'] = ApiClient.convertToType(data['sortBy'], 'String');
            }
            if (data.hasOwnProperty('ascending')) {
                obj['ascending'] = ApiClient.convertToType(data['ascending'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SortDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SortDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['sortBy'] && !(typeof data['sortBy'] === 'string' || data['sortBy'] instanceof String)) {
            throw new Error("Expected the field `sortBy` to be a primitive type in the JSON string but got " + data['sortBy']);
        }

        return true;
    }


}



/**
 * @member {String} sortBy
 */
SortDto.prototype['sortBy'] = undefined;

/**
 * @member {Boolean} ascending
 */
SortDto.prototype['ascending'] = undefined;






export default SortDto;

