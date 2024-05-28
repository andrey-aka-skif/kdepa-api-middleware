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
 * The AssemblyDto model module.
 * @module model/AssemblyDto
 * @version 0.1.0
 */
class AssemblyDto {
    /**
     * Constructs a new <code>AssemblyDto</code>.
     * @alias module:model/AssemblyDto
     */
    constructor() { 
        
        AssemblyDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AssemblyDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssemblyDto} obj Optional instance to populate.
     * @return {module:model/AssemblyDto} The populated <code>AssemblyDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssemblyDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('valveId')) {
                obj['valveId'] = ApiClient.convertToType(data['valveId'], 'Number');
            }
            if (data.hasOwnProperty('valve')) {
                obj['valve'] = ApiClient.convertToType(data['valve'], 'String');
            }
            if (data.hasOwnProperty('driveId')) {
                obj['driveId'] = ApiClient.convertToType(data['driveId'], 'Number');
            }
            if (data.hasOwnProperty('drive')) {
                obj['drive'] = ApiClient.convertToType(data['drive'], 'String');
            }
            if (data.hasOwnProperty('motorId')) {
                obj['motorId'] = ApiClient.convertToType(data['motorId'], 'Number');
            }
            if (data.hasOwnProperty('motor')) {
                obj['motor'] = ApiClient.convertToType(data['motor'], 'String');
            }
            if (data.hasOwnProperty('positionId')) {
                obj['positionId'] = ApiClient.convertToType(data['positionId'], 'Number');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'String');
            }
            if (data.hasOwnProperty('buildingDate')) {
                obj['buildingDate'] = ApiClient.convertToType(data['buildingDate'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AssemblyDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssemblyDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['valve'] && !(typeof data['valve'] === 'string' || data['valve'] instanceof String)) {
            throw new Error("Expected the field `valve` to be a primitive type in the JSON string but got " + data['valve']);
        }
        // ensure the json data is a string
        if (data['drive'] && !(typeof data['drive'] === 'string' || data['drive'] instanceof String)) {
            throw new Error("Expected the field `drive` to be a primitive type in the JSON string but got " + data['drive']);
        }
        // ensure the json data is a string
        if (data['motor'] && !(typeof data['motor'] === 'string' || data['motor'] instanceof String)) {
            throw new Error("Expected the field `motor` to be a primitive type in the JSON string but got " + data['motor']);
        }
        // ensure the json data is a string
        if (data['position'] && !(typeof data['position'] === 'string' || data['position'] instanceof String)) {
            throw new Error("Expected the field `position` to be a primitive type in the JSON string but got " + data['position']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
AssemblyDto.prototype['id'] = undefined;

/**
 * @member {Number} valveId
 */
AssemblyDto.prototype['valveId'] = undefined;

/**
 * @member {String} valve
 */
AssemblyDto.prototype['valve'] = undefined;

/**
 * @member {Number} driveId
 */
AssemblyDto.prototype['driveId'] = undefined;

/**
 * @member {String} drive
 */
AssemblyDto.prototype['drive'] = undefined;

/**
 * @member {Number} motorId
 */
AssemblyDto.prototype['motorId'] = undefined;

/**
 * @member {String} motor
 */
AssemblyDto.prototype['motor'] = undefined;

/**
 * @member {Number} positionId
 */
AssemblyDto.prototype['positionId'] = undefined;

/**
 * @member {String} position
 */
AssemblyDto.prototype['position'] = undefined;

/**
 * @member {Date} buildingDate
 */
AssemblyDto.prototype['buildingDate'] = undefined;






export default AssemblyDto;

