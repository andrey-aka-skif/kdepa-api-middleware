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
    instance = new KdepaApi.ValveDto();
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

  describe('ValveDto', function() {
    it('should create an instance of ValveDto', function() {
      // uncomment below and update the code to test ValveDto
      //var instance = new KdepaApi.ValveDto();
      //expect(instance).to.be.a(KdepaApi.ValveDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new KdepaApi.ValveDto();
      //expect(instance).to.be();
    });

    it('should have the property markId (base name: "markId")', function() {
      // uncomment below and update the code to test the property markId
      //var instance = new KdepaApi.ValveDto();
      //expect(instance).to.be();
    });

    it('should have the property mark (base name: "mark")', function() {
      // uncomment below and update the code to test the property mark
      //var instance = new KdepaApi.ValveDto();
      //expect(instance).to.be();
    });

    it('should have the property factoryId (base name: "factoryId")', function() {
      // uncomment below and update the code to test the property factoryId
      //var instance = new KdepaApi.ValveDto();
      //expect(instance).to.be();
    });

    it('should have the property factory (base name: "factory")', function() {
      // uncomment below and update the code to test the property factory
      //var instance = new KdepaApi.ValveDto();
      //expect(instance).to.be();
    });

    it('should have the property serialNumber (base name: "serialNumber")', function() {
      // uncomment below and update the code to test the property serialNumber
      //var instance = new KdepaApi.ValveDto();
      //expect(instance).to.be();
    });

    it('should have the property madeDate (base name: "madeDate")', function() {
      // uncomment below and update the code to test the property madeDate
      //var instance = new KdepaApi.ValveDto();
      //expect(instance).to.be();
    });

    it('should have the property inUseDate (base name: "inUseDate")', function() {
      // uncomment below and update the code to test the property inUseDate
      //var instance = new KdepaApi.ValveDto();
      //expect(instance).to.be();
    });

  });

}));