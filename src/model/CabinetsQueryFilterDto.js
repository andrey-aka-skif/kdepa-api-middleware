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
 * The CabinetsQueryFilterDto model module.
 * @module model/CabinetsQueryFilterDto
 * @version 0.1.0
 */
class CabinetsQueryFilterDto {
    /**
     * Constructs a new <code>CabinetsQueryFilterDto</code>.
     * @alias module:model/CabinetsQueryFilterDto
     */
    constructor() { 
        
        CabinetsQueryFilterDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CabinetsQueryFilterDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CabinetsQueryFilterDto} obj Optional instance to populate.
     * @return {module:model/CabinetsQueryFilterDto} The populated <code>CabinetsQueryFilterDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CabinetsQueryFilterDto();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
            if (data.hasOwnProperty('cabinetSearchString')) {
                obj['cabinetSearchString'] = ApiClient.convertToType(data['cabinetSearchString'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CabinetsQueryFilterDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CabinetsQueryFilterDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['ids'])) {
            throw new Error("Expected the field `ids` to be an array in the JSON data but got " + data['ids']);
        }
        // ensure the json data is a string
        if (data['cabinetSearchString'] && !(typeof data['cabinetSearchString'] === 'string' || data['cabinetSearchString'] instanceof String)) {
            throw new Error("Expected the field `cabinetSearchString` to be a primitive type in the JSON string but got " + data['cabinetSearchString']);
        }

        return true;
    }


}



/**
 * @member {Array.<Number>} ids
 */
CabinetsQueryFilterDto.prototype['ids'] = undefined;

/**
 * @member {String} cabinetSearchString
 */
CabinetsQueryFilterDto.prototype['cabinetSearchString'] = undefined;






export default CabinetsQueryFilterDto;
