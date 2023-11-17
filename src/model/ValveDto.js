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
 * The ValveDto model module.
 * @module model/ValveDto
 * @version 0.1.0
 */
class ValveDto {
    /**
     * Constructs a new <code>ValveDto</code>.
     * @alias module:model/ValveDto
     */
    constructor() { 
        
        ValveDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValveDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValveDto} obj Optional instance to populate.
     * @return {module:model/ValveDto} The populated <code>ValveDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValveDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('markId')) {
                obj['markId'] = ApiClient.convertToType(data['markId'], 'Number');
            }
            if (data.hasOwnProperty('mark')) {
                obj['mark'] = ApiClient.convertToType(data['mark'], 'String');
            }
            if (data.hasOwnProperty('factoryId')) {
                obj['factoryId'] = ApiClient.convertToType(data['factoryId'], 'Number');
            }
            if (data.hasOwnProperty('factory')) {
                obj['factory'] = ApiClient.convertToType(data['factory'], 'String');
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
     * Validates the JSON data with respect to <code>ValveDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ValveDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['mark'] && !(typeof data['mark'] === 'string' || data['mark'] instanceof String)) {
            throw new Error("Expected the field `mark` to be a primitive type in the JSON string but got " + data['mark']);
        }
        // ensure the json data is a string
        if (data['factory'] && !(typeof data['factory'] === 'string' || data['factory'] instanceof String)) {
            throw new Error("Expected the field `factory` to be a primitive type in the JSON string but got " + data['factory']);
        }
        // ensure the json data is a string
        if (data['serialNumber'] && !(typeof data['serialNumber'] === 'string' || data['serialNumber'] instanceof String)) {
            throw new Error("Expected the field `serialNumber` to be a primitive type in the JSON string but got " + data['serialNumber']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
ValveDto.prototype['id'] = undefined;

/**
 * @member {Number} markId
 */
ValveDto.prototype['markId'] = undefined;

/**
 * @member {String} mark
 */
ValveDto.prototype['mark'] = undefined;

/**
 * @member {Number} factoryId
 */
ValveDto.prototype['factoryId'] = undefined;

/**
 * @member {String} factory
 */
ValveDto.prototype['factory'] = undefined;

/**
 * @member {String} serialNumber
 */
ValveDto.prototype['serialNumber'] = undefined;

/**
 * @member {Date} madeDate
 */
ValveDto.prototype['madeDate'] = undefined;

/**
 * @member {Date} inUseDate
 */
ValveDto.prototype['inUseDate'] = undefined;






export default ValveDto;
