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
import SubscriptDesignationDto from './SubscriptDesignationDto';

/**
 * The SingleParamDto model module.
 * @module model/SingleParamDto
 * @version 0.1.0
 */
class SingleParamDto {
    /**
     * Constructs a new <code>SingleParamDto</code>.
     * @alias module:model/SingleParamDto
     */
    constructor() { 
        
        SingleParamDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SingleParamDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SingleParamDto} obj Optional instance to populate.
     * @return {module:model/SingleParamDto} The populated <code>SingleParamDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SingleParamDto();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = SubscriptDesignationDto.constructFromObject(data['symbol']);
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('toleranceResult')) {
                obj['toleranceResult'] = ApiClient.convertToType(data['toleranceResult'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SingleParamDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SingleParamDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `symbol`
        if (data['symbol']) { // data not null
          SubscriptDesignationDto.validateJSON(data['symbol']);
        }
        // ensure the json data is a string
        if (data['unit'] && !(typeof data['unit'] === 'string' || data['unit'] instanceof String)) {
            throw new Error("Expected the field `unit` to be a primitive type in the JSON string but got " + data['unit']);
        }
        // ensure the json data is a string
        if (data['toleranceResult'] && !(typeof data['toleranceResult'] === 'string' || data['toleranceResult'] instanceof String)) {
            throw new Error("Expected the field `toleranceResult` to be a primitive type in the JSON string but got " + data['toleranceResult']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
SingleParamDto.prototype['name'] = undefined;

/**
 * @member {module:model/SubscriptDesignationDto} symbol
 */
SingleParamDto.prototype['symbol'] = undefined;

/**
 * @member {String} unit
 */
SingleParamDto.prototype['unit'] = undefined;

/**
 * @member {Number} value
 */
SingleParamDto.prototype['value'] = undefined;

/**
 * @member {String} toleranceResult
 */
SingleParamDto.prototype['toleranceResult'] = undefined;






export default SingleParamDto;
