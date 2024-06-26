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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KdepaApi);
  }
}(this, function(expect, KdepaApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KdepaApi.FlowDto();
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

  describe('FlowDto', function() {
    it('should create an instance of FlowDto', function() {
      // uncomment below and update the code to test FlowDto
      //var instance = new KdepaApi.FlowDto();
      //expect(instance).to.be.a(KdepaApi.FlowDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new KdepaApi.FlowDto();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new KdepaApi.FlowDto();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instance = new KdepaApi.FlowDto();
      //expect(instance).to.be();
    });

    it('should have the property valve (base name: "valve")', function() {
      // uncomment below and update the code to test the property valve
      //var instance = new KdepaApi.FlowDto();
      //expect(instance).to.be();
    });

    it('should have the property leakageAmount (base name: "leakageAmount")', function() {
      // uncomment below and update the code to test the property leakageAmount
      //var instance = new KdepaApi.FlowDto();
      //expect(instance).to.be();
    });

    it('should have the property tightnessClass (base name: "tightnessClass")', function() {
      // uncomment below and update the code to test the property tightnessClass
      //var instance = new KdepaApi.FlowDto();
      //expect(instance).to.be();
    });

    it('should have the property registrationSettings (base name: "registrationSettings")', function() {
      // uncomment below and update the code to test the property registrationSettings
      //var instance = new KdepaApi.FlowDto();
      //expect(instance).to.be();
    });

  });

}));
