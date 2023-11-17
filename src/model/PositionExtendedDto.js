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
import BlockDto from './BlockDto';
import EquipmentGroupDto from './EquipmentGroupDto';
import SafetyClassDto from './SafetyClassDto';
import ShopDto from './ShopDto';
import StationSystemDto from './StationSystemDto';

/**
 * The PositionExtendedDto model module.
 * @module model/PositionExtendedDto
 * @version 0.1.0
 */
class PositionExtendedDto {
    /**
     * Constructs a new <code>PositionExtendedDto</code>.
     * @alias module:model/PositionExtendedDto
     */
    constructor() { 
        
        PositionExtendedDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PositionExtendedDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PositionExtendedDto} obj Optional instance to populate.
     * @return {module:model/PositionExtendedDto} The populated <code>PositionExtendedDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PositionExtendedDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('systemId')) {
                obj['systemId'] = ApiClient.convertToType(data['systemId'], 'Number');
            }
            if (data.hasOwnProperty('system')) {
                obj['system'] = ApiClient.convertToType(data['system'], 'String');
            }
            if (data.hasOwnProperty('systems')) {
                obj['systems'] = ApiClient.convertToType(data['systems'], [StationSystemDto]);
            }
            if (data.hasOwnProperty('shopId')) {
                obj['shopId'] = ApiClient.convertToType(data['shopId'], 'Number');
            }
            if (data.hasOwnProperty('shop')) {
                obj['shop'] = ApiClient.convertToType(data['shop'], 'String');
            }
            if (data.hasOwnProperty('shops')) {
                obj['shops'] = ApiClient.convertToType(data['shops'], [ShopDto]);
            }
            if (data.hasOwnProperty('blockId')) {
                obj['blockId'] = ApiClient.convertToType(data['blockId'], 'Number');
            }
            if (data.hasOwnProperty('block')) {
                obj['block'] = ApiClient.convertToType(data['block'], 'Number');
            }
            if (data.hasOwnProperty('blocks')) {
                obj['blocks'] = ApiClient.convertToType(data['blocks'], [BlockDto]);
            }
            if (data.hasOwnProperty('safetyClassId')) {
                obj['safetyClassId'] = ApiClient.convertToType(data['safetyClassId'], 'Number');
            }
            if (data.hasOwnProperty('safetyClass')) {
                obj['safetyClass'] = ApiClient.convertToType(data['safetyClass'], 'String');
            }
            if (data.hasOwnProperty('safetyClasses')) {
                obj['safetyClasses'] = ApiClient.convertToType(data['safetyClasses'], [SafetyClassDto]);
            }
            if (data.hasOwnProperty('equipmentGroupId')) {
                obj['equipmentGroupId'] = ApiClient.convertToType(data['equipmentGroupId'], 'Number');
            }
            if (data.hasOwnProperty('equipmentGroup')) {
                obj['equipmentGroup'] = ApiClient.convertToType(data['equipmentGroup'], 'String');
            }
            if (data.hasOwnProperty('equipmentGroups')) {
                obj['equipmentGroups'] = ApiClient.convertToType(data['equipmentGroups'], [EquipmentGroupDto]);
            }
            if (data.hasOwnProperty('purpose')) {
                obj['purpose'] = ApiClient.convertToType(data['purpose'], 'String');
            }
            if (data.hasOwnProperty('operativeHeight')) {
                obj['operativeHeight'] = ApiClient.convertToType(data['operativeHeight'], 'String');
            }
            if (data.hasOwnProperty('marking')) {
                obj['marking'] = ApiClient.convertToType(data['marking'], 'String');
            }
            if (data.hasOwnProperty('cabinetId')) {
                obj['cabinetId'] = ApiClient.convertToType(data['cabinetId'], 'Number');
            }
            if (data.hasOwnProperty('cabinet')) {
                obj['cabinet'] = ApiClient.convertToType(data['cabinet'], 'String');
            }
            if (data.hasOwnProperty('seismicCategoryId')) {
                obj['seismicCategoryId'] = ApiClient.convertToType(data['seismicCategoryId'], 'Number');
            }
            if (data.hasOwnProperty('seismicCategory')) {
                obj['seismicCategory'] = ApiClient.convertToType(data['seismicCategory'], 'String');
            }
            if (data.hasOwnProperty('climaticExecutionId')) {
                obj['climaticExecutionId'] = ApiClient.convertToType(data['climaticExecutionId'], 'Number');
            }
            if (data.hasOwnProperty('climaticExecution')) {
                obj['climaticExecution'] = ApiClient.convertToType(data['climaticExecution'], 'String');
            }
            if (data.hasOwnProperty('atmosphereTypeId')) {
                obj['atmosphereTypeId'] = ApiClient.convertToType(data['atmosphereTypeId'], 'Number');
            }
            if (data.hasOwnProperty('atmosphereType')) {
                obj['atmosphereType'] = ApiClient.convertToType(data['atmosphereType'], 'String');
            }
            if (data.hasOwnProperty('mediumId')) {
                obj['mediumId'] = ApiClient.convertToType(data['mediumId'], 'Number');
            }
            if (data.hasOwnProperty('medium')) {
                obj['medium'] = ApiClient.convertToType(data['medium'], 'String');
            }
            if (data.hasOwnProperty('mediumPressure')) {
                obj['mediumPressure'] = ApiClient.convertToType(data['mediumPressure'], 'Number');
            }
            if (data.hasOwnProperty('mediumDensity')) {
                obj['mediumDensity'] = ApiClient.convertToType(data['mediumDensity'], 'Number');
            }
            if (data.hasOwnProperty('mediumTemperature')) {
                obj['mediumTemperature'] = ApiClient.convertToType(data['mediumTemperature'], 'Number');
            }
            if (data.hasOwnProperty('mediumHumidity')) {
                obj['mediumHumidity'] = ApiClient.convertToType(data['mediumHumidity'], 'Number');
            }
            if (data.hasOwnProperty('roomAirTemperature')) {
                obj['roomAirTemperature'] = ApiClient.convertToType(data['roomAirTemperature'], 'Number');
            }
            if (data.hasOwnProperty('roomAbsolutePressure')) {
                obj['roomAbsolutePressure'] = ApiClient.convertToType(data['roomAbsolutePressure'], 'Number');
            }
            if (data.hasOwnProperty('roomHumidity')) {
                obj['roomHumidity'] = ApiClient.convertToType(data['roomHumidity'], 'Number');
            }
            if (data.hasOwnProperty('roomDustLevel')) {
                obj['roomDustLevel'] = ApiClient.convertToType(data['roomDustLevel'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PositionExtendedDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PositionExtendedDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['system'] && !(typeof data['system'] === 'string' || data['system'] instanceof String)) {
            throw new Error("Expected the field `system` to be a primitive type in the JSON string but got " + data['system']);
        }
        if (data['systems']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['systems'])) {
                throw new Error("Expected the field `systems` to be an array in the JSON data but got " + data['systems']);
            }
            // validate the optional field `systems` (array)
            for (const item of data['systems']) {
                StationSystemDto.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['shop'] && !(typeof data['shop'] === 'string' || data['shop'] instanceof String)) {
            throw new Error("Expected the field `shop` to be a primitive type in the JSON string but got " + data['shop']);
        }
        if (data['shops']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['shops'])) {
                throw new Error("Expected the field `shops` to be an array in the JSON data but got " + data['shops']);
            }
            // validate the optional field `shops` (array)
            for (const item of data['shops']) {
                ShopDto.validateJSON(item);
            };
        }
        if (data['blocks']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['blocks'])) {
                throw new Error("Expected the field `blocks` to be an array in the JSON data but got " + data['blocks']);
            }
            // validate the optional field `blocks` (array)
            for (const item of data['blocks']) {
                BlockDto.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['safetyClass'] && !(typeof data['safetyClass'] === 'string' || data['safetyClass'] instanceof String)) {
            throw new Error("Expected the field `safetyClass` to be a primitive type in the JSON string but got " + data['safetyClass']);
        }
        if (data['safetyClasses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['safetyClasses'])) {
                throw new Error("Expected the field `safetyClasses` to be an array in the JSON data but got " + data['safetyClasses']);
            }
            // validate the optional field `safetyClasses` (array)
            for (const item of data['safetyClasses']) {
                SafetyClassDto.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['equipmentGroup'] && !(typeof data['equipmentGroup'] === 'string' || data['equipmentGroup'] instanceof String)) {
            throw new Error("Expected the field `equipmentGroup` to be a primitive type in the JSON string but got " + data['equipmentGroup']);
        }
        if (data['equipmentGroups']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['equipmentGroups'])) {
                throw new Error("Expected the field `equipmentGroups` to be an array in the JSON data but got " + data['equipmentGroups']);
            }
            // validate the optional field `equipmentGroups` (array)
            for (const item of data['equipmentGroups']) {
                EquipmentGroupDto.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['purpose'] && !(typeof data['purpose'] === 'string' || data['purpose'] instanceof String)) {
            throw new Error("Expected the field `purpose` to be a primitive type in the JSON string but got " + data['purpose']);
        }
        // ensure the json data is a string
        if (data['operativeHeight'] && !(typeof data['operativeHeight'] === 'string' || data['operativeHeight'] instanceof String)) {
            throw new Error("Expected the field `operativeHeight` to be a primitive type in the JSON string but got " + data['operativeHeight']);
        }
        // ensure the json data is a string
        if (data['marking'] && !(typeof data['marking'] === 'string' || data['marking'] instanceof String)) {
            throw new Error("Expected the field `marking` to be a primitive type in the JSON string but got " + data['marking']);
        }
        // ensure the json data is a string
        if (data['cabinet'] && !(typeof data['cabinet'] === 'string' || data['cabinet'] instanceof String)) {
            throw new Error("Expected the field `cabinet` to be a primitive type in the JSON string but got " + data['cabinet']);
        }
        // ensure the json data is a string
        if (data['seismicCategory'] && !(typeof data['seismicCategory'] === 'string' || data['seismicCategory'] instanceof String)) {
            throw new Error("Expected the field `seismicCategory` to be a primitive type in the JSON string but got " + data['seismicCategory']);
        }
        // ensure the json data is a string
        if (data['climaticExecution'] && !(typeof data['climaticExecution'] === 'string' || data['climaticExecution'] instanceof String)) {
            throw new Error("Expected the field `climaticExecution` to be a primitive type in the JSON string but got " + data['climaticExecution']);
        }
        // ensure the json data is a string
        if (data['atmosphereType'] && !(typeof data['atmosphereType'] === 'string' || data['atmosphereType'] instanceof String)) {
            throw new Error("Expected the field `atmosphereType` to be a primitive type in the JSON string but got " + data['atmosphereType']);
        }
        // ensure the json data is a string
        if (data['medium'] && !(typeof data['medium'] === 'string' || data['medium'] instanceof String)) {
            throw new Error("Expected the field `medium` to be a primitive type in the JSON string but got " + data['medium']);
        }
        // ensure the json data is a string
        if (data['roomDustLevel'] && !(typeof data['roomDustLevel'] === 'string' || data['roomDustLevel'] instanceof String)) {
            throw new Error("Expected the field `roomDustLevel` to be a primitive type in the JSON string but got " + data['roomDustLevel']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
PositionExtendedDto.prototype['id'] = undefined;

/**
 * @member {String} name
 */
PositionExtendedDto.prototype['name'] = undefined;

/**
 * @member {Number} systemId
 */
PositionExtendedDto.prototype['systemId'] = undefined;

/**
 * @member {String} system
 */
PositionExtendedDto.prototype['system'] = undefined;

/**
 * @member {Array.<module:model/StationSystemDto>} systems
 */
PositionExtendedDto.prototype['systems'] = undefined;

/**
 * @member {Number} shopId
 */
PositionExtendedDto.prototype['shopId'] = undefined;

/**
 * @member {String} shop
 */
PositionExtendedDto.prototype['shop'] = undefined;

/**
 * @member {Array.<module:model/ShopDto>} shops
 */
PositionExtendedDto.prototype['shops'] = undefined;

/**
 * @member {Number} blockId
 */
PositionExtendedDto.prototype['blockId'] = undefined;

/**
 * @member {Number} block
 */
PositionExtendedDto.prototype['block'] = undefined;

/**
 * @member {Array.<module:model/BlockDto>} blocks
 */
PositionExtendedDto.prototype['blocks'] = undefined;

/**
 * @member {Number} safetyClassId
 */
PositionExtendedDto.prototype['safetyClassId'] = undefined;

/**
 * @member {String} safetyClass
 */
PositionExtendedDto.prototype['safetyClass'] = undefined;

/**
 * @member {Array.<module:model/SafetyClassDto>} safetyClasses
 */
PositionExtendedDto.prototype['safetyClasses'] = undefined;

/**
 * @member {Number} equipmentGroupId
 */
PositionExtendedDto.prototype['equipmentGroupId'] = undefined;

/**
 * @member {String} equipmentGroup
 */
PositionExtendedDto.prototype['equipmentGroup'] = undefined;

/**
 * @member {Array.<module:model/EquipmentGroupDto>} equipmentGroups
 */
PositionExtendedDto.prototype['equipmentGroups'] = undefined;

/**
 * @member {String} purpose
 */
PositionExtendedDto.prototype['purpose'] = undefined;

/**
 * @member {String} operativeHeight
 */
PositionExtendedDto.prototype['operativeHeight'] = undefined;

/**
 * @member {String} marking
 */
PositionExtendedDto.prototype['marking'] = undefined;

/**
 * @member {Number} cabinetId
 */
PositionExtendedDto.prototype['cabinetId'] = undefined;

/**
 * @member {String} cabinet
 */
PositionExtendedDto.prototype['cabinet'] = undefined;

/**
 * @member {Number} seismicCategoryId
 */
PositionExtendedDto.prototype['seismicCategoryId'] = undefined;

/**
 * @member {String} seismicCategory
 */
PositionExtendedDto.prototype['seismicCategory'] = undefined;

/**
 * @member {Number} climaticExecutionId
 */
PositionExtendedDto.prototype['climaticExecutionId'] = undefined;

/**
 * @member {String} climaticExecution
 */
PositionExtendedDto.prototype['climaticExecution'] = undefined;

/**
 * @member {Number} atmosphereTypeId
 */
PositionExtendedDto.prototype['atmosphereTypeId'] = undefined;

/**
 * @member {String} atmosphereType
 */
PositionExtendedDto.prototype['atmosphereType'] = undefined;

/**
 * @member {Number} mediumId
 */
PositionExtendedDto.prototype['mediumId'] = undefined;

/**
 * @member {String} medium
 */
PositionExtendedDto.prototype['medium'] = undefined;

/**
 * @member {Number} mediumPressure
 */
PositionExtendedDto.prototype['mediumPressure'] = undefined;

/**
 * @member {Number} mediumDensity
 */
PositionExtendedDto.prototype['mediumDensity'] = undefined;

/**
 * @member {Number} mediumTemperature
 */
PositionExtendedDto.prototype['mediumTemperature'] = undefined;

/**
 * @member {Number} mediumHumidity
 */
PositionExtendedDto.prototype['mediumHumidity'] = undefined;

/**
 * @member {Number} roomAirTemperature
 */
PositionExtendedDto.prototype['roomAirTemperature'] = undefined;

/**
 * @member {Number} roomAbsolutePressure
 */
PositionExtendedDto.prototype['roomAbsolutePressure'] = undefined;

/**
 * @member {Number} roomHumidity
 */
PositionExtendedDto.prototype['roomHumidity'] = undefined;

/**
 * @member {String} roomDustLevel
 */
PositionExtendedDto.prototype['roomDustLevel'] = undefined;






export default PositionExtendedDto;

