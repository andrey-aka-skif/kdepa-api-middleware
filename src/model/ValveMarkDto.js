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
 * The ValveMarkDto model module.
 * @module model/ValveMarkDto
 * @version 0.1.0
 */
class ValveMarkDto {
    /**
     * Constructs a new <code>ValveMarkDto</code>.
     * @alias module:model/ValveMarkDto
     */
    constructor() { 
        
        ValveMarkDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValveMarkDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValveMarkDto} obj Optional instance to populate.
     * @return {module:model/ValveMarkDto} The populated <code>ValveMarkDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValveMarkDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('design')) {
                obj['design'] = ApiClient.convertToType(data['design'], 'String');
            }
            if (data.hasOwnProperty('dn')) {
                obj['dn'] = ApiClient.convertToType(data['dn'], 'Number');
            }
            if (data.hasOwnProperty('dn2')) {
                obj['dn2'] = ApiClient.convertToType(data['dn2'], 'Number');
            }
            if (data.hasOwnProperty('pn')) {
                obj['pn'] = ApiClient.convertToType(data['pn'], 'Number');
            }
            if (data.hasOwnProperty('tn')) {
                obj['tn'] = ApiClient.convertToType(data['tn'], 'Number');
            }
            if (data.hasOwnProperty('movementTimeMin')) {
                obj['movementTimeMin'] = ApiClient.convertToType(data['movementTimeMin'], 'Number');
            }
            if (data.hasOwnProperty('movementTimeMax')) {
                obj['movementTimeMax'] = ApiClient.convertToType(data['movementTimeMax'], 'Number');
            }
            if (data.hasOwnProperty('modification')) {
                obj['modification'] = ApiClient.convertToType(data['modification'], 'String');
            }
            if (data.hasOwnProperty('serviceLife')) {
                obj['serviceLife'] = ApiClient.convertToType(data['serviceLife'], 'Number');
            }
            if (data.hasOwnProperty('assignedResource')) {
                obj['assignedResource'] = ApiClient.convertToType(data['assignedResource'], 'Number');
            }
            if (data.hasOwnProperty('timeToFailure')) {
                obj['timeToFailure'] = ApiClient.convertToType(data['timeToFailure'], 'Number');
            }
            if (data.hasOwnProperty('probabilityOfFailure')) {
                obj['probabilityOfFailure'] = ApiClient.convertToType(data['probabilityOfFailure'], 'Number');
            }
            if (data.hasOwnProperty('technicalUseCoeff')) {
                obj['technicalUseCoeff'] = ApiClient.convertToType(data['technicalUseCoeff'], 'Number');
            }
            if (data.hasOwnProperty('availabilityFactor')) {
                obj['availabilityFactor'] = ApiClient.convertToType(data['availabilityFactor'], 'Number');
            }
            if (data.hasOwnProperty('safetyClassId')) {
                obj['safetyClassId'] = ApiClient.convertToType(data['safetyClassId'], 'Number');
            }
            if (data.hasOwnProperty('safetyClass')) {
                obj['safetyClass'] = ApiClient.convertToType(data['safetyClass'], 'String');
            }
            if (data.hasOwnProperty('equipmentGroupId')) {
                obj['equipmentGroupId'] = ApiClient.convertToType(data['equipmentGroupId'], 'Number');
            }
            if (data.hasOwnProperty('equipmentGroup')) {
                obj['equipmentGroup'] = ApiClient.convertToType(data['equipmentGroup'], 'String');
            }
            if (data.hasOwnProperty('seismicCategoryId')) {
                obj['seismicCategoryId'] = ApiClient.convertToType(data['seismicCategoryId'], 'Number');
            }
            if (data.hasOwnProperty('seismicCategory')) {
                obj['seismicCategory'] = ApiClient.convertToType(data['seismicCategory'], 'String');
            }
            if (data.hasOwnProperty('usingClassId')) {
                obj['usingClassId'] = ApiClient.convertToType(data['usingClassId'], 'Number');
            }
            if (data.hasOwnProperty('usingClass')) {
                obj['usingClass'] = ApiClient.convertToType(data['usingClass'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ValveMarkDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ValveMarkDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['design'] && !(typeof data['design'] === 'string' || data['design'] instanceof String)) {
            throw new Error("Expected the field `design` to be a primitive type in the JSON string but got " + data['design']);
        }
        // ensure the json data is a string
        if (data['modification'] && !(typeof data['modification'] === 'string' || data['modification'] instanceof String)) {
            throw new Error("Expected the field `modification` to be a primitive type in the JSON string but got " + data['modification']);
        }
        // ensure the json data is a string
        if (data['safetyClass'] && !(typeof data['safetyClass'] === 'string' || data['safetyClass'] instanceof String)) {
            throw new Error("Expected the field `safetyClass` to be a primitive type in the JSON string but got " + data['safetyClass']);
        }
        // ensure the json data is a string
        if (data['equipmentGroup'] && !(typeof data['equipmentGroup'] === 'string' || data['equipmentGroup'] instanceof String)) {
            throw new Error("Expected the field `equipmentGroup` to be a primitive type in the JSON string but got " + data['equipmentGroup']);
        }
        // ensure the json data is a string
        if (data['seismicCategory'] && !(typeof data['seismicCategory'] === 'string' || data['seismicCategory'] instanceof String)) {
            throw new Error("Expected the field `seismicCategory` to be a primitive type in the JSON string but got " + data['seismicCategory']);
        }
        // ensure the json data is a string
        if (data['usingClass'] && !(typeof data['usingClass'] === 'string' || data['usingClass'] instanceof String)) {
            throw new Error("Expected the field `usingClass` to be a primitive type in the JSON string but got " + data['usingClass']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
ValveMarkDto.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ValveMarkDto.prototype['name'] = undefined;

/**
 * @member {String} type
 */
ValveMarkDto.prototype['type'] = undefined;

/**
 * @member {String} design
 */
ValveMarkDto.prototype['design'] = undefined;

/**
 * @member {Number} dn
 */
ValveMarkDto.prototype['dn'] = undefined;

/**
 * @member {Number} dn2
 */
ValveMarkDto.prototype['dn2'] = undefined;

/**
 * @member {Number} pn
 */
ValveMarkDto.prototype['pn'] = undefined;

/**
 * @member {Number} tn
 */
ValveMarkDto.prototype['tn'] = undefined;

/**
 * @member {Number} movementTimeMin
 */
ValveMarkDto.prototype['movementTimeMin'] = undefined;

/**
 * @member {Number} movementTimeMax
 */
ValveMarkDto.prototype['movementTimeMax'] = undefined;

/**
 * @member {String} modification
 */
ValveMarkDto.prototype['modification'] = undefined;

/**
 * @member {Number} serviceLife
 */
ValveMarkDto.prototype['serviceLife'] = undefined;

/**
 * @member {Number} assignedResource
 */
ValveMarkDto.prototype['assignedResource'] = undefined;

/**
 * @member {Number} timeToFailure
 */
ValveMarkDto.prototype['timeToFailure'] = undefined;

/**
 * @member {Number} probabilityOfFailure
 */
ValveMarkDto.prototype['probabilityOfFailure'] = undefined;

/**
 * @member {Number} technicalUseCoeff
 */
ValveMarkDto.prototype['technicalUseCoeff'] = undefined;

/**
 * @member {Number} availabilityFactor
 */
ValveMarkDto.prototype['availabilityFactor'] = undefined;

/**
 * @member {Number} safetyClassId
 */
ValveMarkDto.prototype['safetyClassId'] = undefined;

/**
 * @member {String} safetyClass
 */
ValveMarkDto.prototype['safetyClass'] = undefined;

/**
 * @member {Number} equipmentGroupId
 */
ValveMarkDto.prototype['equipmentGroupId'] = undefined;

/**
 * @member {String} equipmentGroup
 */
ValveMarkDto.prototype['equipmentGroup'] = undefined;

/**
 * @member {Number} seismicCategoryId
 */
ValveMarkDto.prototype['seismicCategoryId'] = undefined;

/**
 * @member {String} seismicCategory
 */
ValveMarkDto.prototype['seismicCategory'] = undefined;

/**
 * @member {Number} usingClassId
 */
ValveMarkDto.prototype['usingClassId'] = undefined;

/**
 * @member {String} usingClass
 */
ValveMarkDto.prototype['usingClass'] = undefined;






export default ValveMarkDto;

