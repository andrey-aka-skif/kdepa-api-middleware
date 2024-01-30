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
    instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
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

  describe('CreateOrUpdateValveMarkRequest', function() {
    it('should create an instance of CreateOrUpdateValveMarkRequest', function() {
      // uncomment below and update the code to test CreateOrUpdateValveMarkRequest
      //var instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
      //expect(instance).to.be.a(KdepaApi.CreateOrUpdateValveMarkRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
      //expect(instance).to.be();
    });

    it('should have the property valveTypeId (base name: "valveTypeId")', function() {
      // uncomment below and update the code to test the property valveTypeId
      //var instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
      //expect(instance).to.be();
    });

    it('should have the property dn (base name: "dn")', function() {
      // uncomment below and update the code to test the property dn
      //var instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
      //expect(instance).to.be();
    });

    it('should have the property pn (base name: "pn")', function() {
      // uncomment below and update the code to test the property pn
      //var instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
      //expect(instance).to.be();
    });

    it('should have the property tn (base name: "tn")', function() {
      // uncomment below and update the code to test the property tn
      //var instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
      //expect(instance).to.be();
    });

    it('should have the property movementTimeMin (base name: "movementTimeMin")', function() {
      // uncomment below and update the code to test the property movementTimeMin
      //var instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
      //expect(instance).to.be();
    });

    it('should have the property movementTimeMax (base name: "movementTimeMax")', function() {
      // uncomment below and update the code to test the property movementTimeMax
      //var instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
      //expect(instance).to.be();
    });

    it('should have the property modification (base name: "modification")', function() {
      // uncomment below and update the code to test the property modification
      //var instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
      //expect(instance).to.be();
    });

    it('should have the property serviceLife (base name: "serviceLife")', function() {
      // uncomment below and update the code to test the property serviceLife
      //var instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
      //expect(instance).to.be();
    });

    it('should have the property assignedResource (base name: "assignedResource")', function() {
      // uncomment below and update the code to test the property assignedResource
      //var instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
      //expect(instance).to.be();
    });

    it('should have the property timeToFailure (base name: "timeToFailure")', function() {
      // uncomment below and update the code to test the property timeToFailure
      //var instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
      //expect(instance).to.be();
    });

    it('should have the property probabilityOfFailure (base name: "probabilityOfFailure")', function() {
      // uncomment below and update the code to test the property probabilityOfFailure
      //var instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
      //expect(instance).to.be();
    });

    it('should have the property technicalUseCoeff (base name: "technicalUseCoeff")', function() {
      // uncomment below and update the code to test the property technicalUseCoeff
      //var instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
      //expect(instance).to.be();
    });

    it('should have the property availabilityFactor (base name: "availabilityFactor")', function() {
      // uncomment below and update the code to test the property availabilityFactor
      //var instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
      //expect(instance).to.be();
    });

    it('should have the property safetyClassId (base name: "safetyClassId")', function() {
      // uncomment below and update the code to test the property safetyClassId
      //var instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
      //expect(instance).to.be();
    });

    it('should have the property equipmentGroupId (base name: "equipmentGroupId")', function() {
      // uncomment below and update the code to test the property equipmentGroupId
      //var instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
      //expect(instance).to.be();
    });

    it('should have the property seismicCategoryId (base name: "seismicCategoryId")', function() {
      // uncomment below and update the code to test the property seismicCategoryId
      //var instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
      //expect(instance).to.be();
    });

    it('should have the property usingClassId (base name: "usingClassId")', function() {
      // uncomment below and update the code to test the property usingClassId
      //var instance = new KdepaApi.CreateOrUpdateValveMarkRequest();
      //expect(instance).to.be();
    });

  });

}));
