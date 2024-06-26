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
 * The SubscriptDesignationDto model module.
 * @module model/SubscriptDesignationDto
 * @version 0.1.0
 */
class SubscriptDesignationDto {
    /**
     * Constructs a new <code>SubscriptDesignationDto</code>.
     * @alias module:model/SubscriptDesignationDto
     */
    constructor() { 
        
        SubscriptDesignationDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubscriptDesignationDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubscriptDesignationDto} obj Optional instance to populate.
     * @return {module:model/SubscriptDesignationDto} The populated <code>SubscriptDesignationDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptDesignationDto();

            if (data.hasOwnProperty('main')) {
                obj['main'] = ApiClient.convertToType(data['main'], 'String');
            }
            if (data.hasOwnProperty('sub')) {
                obj['sub'] = ApiClient.convertToType(data['sub'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubscriptDesignationDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubscriptDesignationDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['main'] && !(typeof data['main'] === 'string' || data['main'] instanceof String)) {
            throw new Error("Expected the field `main` to be a primitive type in the JSON string but got " + data['main']);
        }
        // ensure the json data is a string
        if (data['sub'] && !(typeof data['sub'] === 'string' || data['sub'] instanceof String)) {
            throw new Error("Expected the field `sub` to be a primitive type in the JSON string but got " + data['sub']);
        }

        return true;
    }


}



/**
 * @member {String} main
 */
SubscriptDesignationDto.prototype['main'] = undefined;

/**
 * @member {String} sub
 */
SubscriptDesignationDto.prototype['sub'] = undefined;






export default SubscriptDesignationDto;

