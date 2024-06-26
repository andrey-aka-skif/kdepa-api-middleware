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
 * The RegulatoryDocumentDto model module.
 * @module model/RegulatoryDocumentDto
 * @version 0.1.0
 */
class RegulatoryDocumentDto {
    /**
     * Constructs a new <code>RegulatoryDocumentDto</code>.
     * @alias module:model/RegulatoryDocumentDto
     */
    constructor() { 
        
        RegulatoryDocumentDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RegulatoryDocumentDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegulatoryDocumentDto} obj Optional instance to populate.
     * @return {module:model/RegulatoryDocumentDto} The populated <code>RegulatoryDocumentDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegulatoryDocumentDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('shortName')) {
                obj['shortName'] = ApiClient.convertToType(data['shortName'], 'String');
            }
            if (data.hasOwnProperty('fullName')) {
                obj['fullName'] = ApiClient.convertToType(data['fullName'], 'String');
            }
            if (data.hasOwnProperty('fileId')) {
                obj['fileId'] = ApiClient.convertToType(data['fileId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RegulatoryDocumentDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RegulatoryDocumentDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['shortName'] && !(typeof data['shortName'] === 'string' || data['shortName'] instanceof String)) {
            throw new Error("Expected the field `shortName` to be a primitive type in the JSON string but got " + data['shortName']);
        }
        // ensure the json data is a string
        if (data['fullName'] && !(typeof data['fullName'] === 'string' || data['fullName'] instanceof String)) {
            throw new Error("Expected the field `fullName` to be a primitive type in the JSON string but got " + data['fullName']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
RegulatoryDocumentDto.prototype['id'] = undefined;

/**
 * @member {String} shortName
 */
RegulatoryDocumentDto.prototype['shortName'] = undefined;

/**
 * @member {String} fullName
 */
RegulatoryDocumentDto.prototype['fullName'] = undefined;

/**
 * @member {Number} fileId
 */
RegulatoryDocumentDto.prototype['fileId'] = undefined;






export default RegulatoryDocumentDto;

