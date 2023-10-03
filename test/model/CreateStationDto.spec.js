/**
 * kdepa-api-middleware
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KdepaApiMiddleware);
  }
}(this, function(expect, KdepaApiMiddleware) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KdepaApiMiddleware.CreateStationDto();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreateStationDto', function() {
    it('should create an instance of CreateStationDto', function() {
      // uncomment below and update the code to test CreateStationDto
      //var instance = new KdepaApiMiddleware.CreateStationDto();
      //expect(instance).to.be.a(KdepaApiMiddleware.CreateStationDto);
    });

    it('should have the property shortName (base name: "shortName")', function() {
      // uncomment below and update the code to test the property shortName
      //var instance = new KdepaApiMiddleware.CreateStationDto();
      //expect(instance).to.be();
    });

    it('should have the property fullName (base name: "fullName")', function() {
      // uncomment below and update the code to test the property fullName
      //var instance = new KdepaApiMiddleware.CreateStationDto();
      //expect(instance).to.be();
    });

    it('should have the property isDefault (base name: "isDefault")', function() {
      // uncomment below and update the code to test the property isDefault
      //var instance = new KdepaApiMiddleware.CreateStationDto();
      //expect(instance).to.be();
    });

  });

}));