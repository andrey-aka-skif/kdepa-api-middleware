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
    instance = new KdepaApi.CreateOrUpdatePositionRequest();
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

  describe('CreateOrUpdatePositionRequest', function() {
    it('should create an instance of CreateOrUpdatePositionRequest', function() {
      // uncomment below and update the code to test CreateOrUpdatePositionRequest
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be.a(KdepaApi.CreateOrUpdatePositionRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property systemId (base name: "systemId")', function() {
      // uncomment below and update the code to test the property systemId
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property shopId (base name: "shopId")', function() {
      // uncomment below and update the code to test the property shopId
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property blockId (base name: "blockId")', function() {
      // uncomment below and update the code to test the property blockId
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property safetyClassId (base name: "safetyClassId")', function() {
      // uncomment below and update the code to test the property safetyClassId
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property equipmentGroupId (base name: "equipmentGroupId")', function() {
      // uncomment below and update the code to test the property equipmentGroupId
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property purpose (base name: "purpose")', function() {
      // uncomment below and update the code to test the property purpose
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property operativeHeight (base name: "operativeHeight")', function() {
      // uncomment below and update the code to test the property operativeHeight
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property marking (base name: "marking")', function() {
      // uncomment below and update the code to test the property marking
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property cabinetId (base name: "cabinetId")', function() {
      // uncomment below and update the code to test the property cabinetId
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property seismicCategoryId (base name: "seismicCategoryId")', function() {
      // uncomment below and update the code to test the property seismicCategoryId
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property climaticExecutionId (base name: "climaticExecutionId")', function() {
      // uncomment below and update the code to test the property climaticExecutionId
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property atmosphereTypeId (base name: "atmosphereTypeId")', function() {
      // uncomment below and update the code to test the property atmosphereTypeId
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property mediumId (base name: "mediumId")', function() {
      // uncomment below and update the code to test the property mediumId
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property mediumPressure (base name: "mediumPressure")', function() {
      // uncomment below and update the code to test the property mediumPressure
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property mediumDensity (base name: "mediumDensity")', function() {
      // uncomment below and update the code to test the property mediumDensity
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property mediumTemperature (base name: "mediumTemperature")', function() {
      // uncomment below and update the code to test the property mediumTemperature
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property mediumHumidity (base name: "mediumHumidity")', function() {
      // uncomment below and update the code to test the property mediumHumidity
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property roomAirTemperature (base name: "roomAirTemperature")', function() {
      // uncomment below and update the code to test the property roomAirTemperature
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property roomAbsolutePressure (base name: "roomAbsolutePressure")', function() {
      // uncomment below and update the code to test the property roomAbsolutePressure
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property roomHumidity (base name: "roomHumidity")', function() {
      // uncomment below and update the code to test the property roomHumidity
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

    it('should have the property roomDustLevel (base name: "roomDustLevel")', function() {
      // uncomment below and update the code to test the property roomDustLevel
      //var instance = new KdepaApi.CreateOrUpdatePositionRequest();
      //expect(instance).to.be();
    });

  });

}));
