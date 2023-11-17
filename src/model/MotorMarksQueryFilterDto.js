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
 * The MotorMarksQueryFilterDto model module.
 * @module model/MotorMarksQueryFilterDto
 * @version 0.1.0
 */
class MotorMarksQueryFilterDto {
    /**
     * Constructs a new <code>MotorMarksQueryFilterDto</code>.
     * @alias module:model/MotorMarksQueryFilterDto
     */
    constructor() { 
        
        MotorMarksQueryFilterDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MotorMarksQueryFilterDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MotorMarksQueryFilterDto} obj Optional instance to populate.
     * @return {module:model/MotorMarksQueryFilterDto} The populated <code>MotorMarksQueryFilterDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MotorMarksQueryFilterDto();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
            if (data.hasOwnProperty('names')) {
                obj['names'] = ApiClient.convertToType(data['names'], ['String']);
            }
            if (data.hasOwnProperty('nameSearchString')) {
                obj['nameSearchString'] = ApiClient.convertToType(data['nameSearchString'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MotorMarksQueryFilterDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MotorMarksQueryFilterDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['ids'])) {
            throw new Error("Expected the field `ids` to be an array in the JSON data but got " + data['ids']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['names'])) {
            throw new Error("Expected the field `names` to be an array in the JSON data but got " + data['names']);
        }
        // ensure the json data is a string
        if (data['nameSearchString'] && !(typeof data['nameSearchString'] === 'string' || data['nameSearchString'] instanceof String)) {
            throw new Error("Expected the field `nameSearchString` to be a primitive type in the JSON string but got " + data['nameSearchString']);
        }

        return true;
    }


}



/**
 * @member {Array.<Number>} ids
 */
MotorMarksQueryFilterDto.prototype['ids'] = undefined;

/**
 * @member {Array.<String>} names
 */
MotorMarksQueryFilterDto.prototype['names'] = undefined;

/**
 * @member {String} nameSearchString
 */
MotorMarksQueryFilterDto.prototype['nameSearchString'] = undefined;






export default MotorMarksQueryFilterDto;

