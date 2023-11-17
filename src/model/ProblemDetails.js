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
 * The ProblemDetails model module.
 * @module model/ProblemDetails
 * @version 0.1.0
 */
class ProblemDetails {
    /**
     * Constructs a new <code>ProblemDetails</code>.
     * @alias module:model/ProblemDetails
     * @extends Object
     */
    constructor() { 
        
        ProblemDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProblemDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProblemDetails} obj Optional instance to populate.
     * @return {module:model/ProblemDetails} The populated <code>ProblemDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProblemDetails();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
            if (data.hasOwnProperty('instance')) {
                obj['instance'] = ApiClient.convertToType(data['instance'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProblemDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProblemDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['detail'] && !(typeof data['detail'] === 'string' || data['detail'] instanceof String)) {
            throw new Error("Expected the field `detail` to be a primitive type in the JSON string but got " + data['detail']);
        }
        // ensure the json data is a string
        if (data['instance'] && !(typeof data['instance'] === 'string' || data['instance'] instanceof String)) {
            throw new Error("Expected the field `instance` to be a primitive type in the JSON string but got " + data['instance']);
        }

        return true;
    }


}



/**
 * @member {String} type
 */
ProblemDetails.prototype['type'] = undefined;

/**
 * @member {String} title
 */
ProblemDetails.prototype['title'] = undefined;

/**
 * @member {Number} status
 */
ProblemDetails.prototype['status'] = undefined;

/**
 * @member {String} detail
 */
ProblemDetails.prototype['detail'] = undefined;

/**
 * @member {String} instance
 */
ProblemDetails.prototype['instance'] = undefined;






export default ProblemDetails;

