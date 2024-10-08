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
 * The UpdateSurveyProtocolRequest model module.
 * @module model/UpdateSurveyProtocolRequest
 * @version 0.1.0
 */
class UpdateSurveyProtocolRequest {
    /**
     * Constructs a new <code>UpdateSurveyProtocolRequest</code>.
     * @alias module:model/UpdateSurveyProtocolRequest
     */
    constructor() { 
        
        UpdateSurveyProtocolRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateSurveyProtocolRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateSurveyProtocolRequest} obj Optional instance to populate.
     * @return {module:model/UpdateSurveyProtocolRequest} The populated <code>UpdateSurveyProtocolRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateSurveyProtocolRequest();

            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
            if (data.hasOwnProperty('identified')) {
                obj['identified'] = ApiClient.convertToType(data['identified'], 'String');
            }
            if (data.hasOwnProperty('recommend')) {
                obj['recommend'] = ApiClient.convertToType(data['recommend'], 'String');
            }
            if (data.hasOwnProperty('conclusion')) {
                obj['conclusion'] = ApiClient.convertToType(data['conclusion'], 'String');
            }
            if (data.hasOwnProperty('performers')) {
                obj['performers'] = ApiClient.convertToType(data['performers'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateSurveyProtocolRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateSurveyProtocolRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['number'] && !(typeof data['number'] === 'string' || data['number'] instanceof String)) {
            throw new Error("Expected the field `number` to be a primitive type in the JSON string but got " + data['number']);
        }
        // ensure the json data is a string
        if (data['identified'] && !(typeof data['identified'] === 'string' || data['identified'] instanceof String)) {
            throw new Error("Expected the field `identified` to be a primitive type in the JSON string but got " + data['identified']);
        }
        // ensure the json data is a string
        if (data['recommend'] && !(typeof data['recommend'] === 'string' || data['recommend'] instanceof String)) {
            throw new Error("Expected the field `recommend` to be a primitive type in the JSON string but got " + data['recommend']);
        }
        // ensure the json data is a string
        if (data['conclusion'] && !(typeof data['conclusion'] === 'string' || data['conclusion'] instanceof String)) {
            throw new Error("Expected the field `conclusion` to be a primitive type in the JSON string but got " + data['conclusion']);
        }
        // ensure the json data is a string
        if (data['performers'] && !(typeof data['performers'] === 'string' || data['performers'] instanceof String)) {
            throw new Error("Expected the field `performers` to be a primitive type in the JSON string but got " + data['performers']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }

        return true;
    }


}



/**
 * @member {String} number
 */
UpdateSurveyProtocolRequest.prototype['number'] = undefined;

/**
 * @member {String} identified
 */
UpdateSurveyProtocolRequest.prototype['identified'] = undefined;

/**
 * @member {String} recommend
 */
UpdateSurveyProtocolRequest.prototype['recommend'] = undefined;

/**
 * @member {String} conclusion
 */
UpdateSurveyProtocolRequest.prototype['conclusion'] = undefined;

/**
 * @member {String} performers
 */
UpdateSurveyProtocolRequest.prototype['performers'] = undefined;

/**
 * @member {String} notes
 */
UpdateSurveyProtocolRequest.prototype['notes'] = undefined;






export default UpdateSurveyProtocolRequest;

