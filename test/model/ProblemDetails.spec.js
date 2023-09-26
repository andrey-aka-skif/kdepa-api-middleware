/**
 * КДЭПА CRUD
 * КДЭПА CRUD API
 *
 * The version of the OpenAPI document: v0.1
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
    factory(root.expect, root.Crud);
  }
}(this, function(expect, Crud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Crud.ProblemDetails();
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

  describe('ProblemDetails', function() {
    it('should create an instance of ProblemDetails', function() {
      // uncomment below and update the code to test ProblemDetails
      //var instance = new Crud.ProblemDetails();
      //expect(instance).to.be.a(Crud.ProblemDetails);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new Crud.ProblemDetails();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Crud.ProblemDetails();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new Crud.ProblemDetails();
      //expect(instance).to.be();
    });

    it('should have the property detail (base name: "detail")', function() {
      // uncomment below and update the code to test the property detail
      //var instance = new Crud.ProblemDetails();
      //expect(instance).to.be();
    });

    it('should have the property instance (base name: "instance")', function() {
      // uncomment below and update the code to test the property instance
      //var instance = new Crud.ProblemDetails();
      //expect(instance).to.be();
    });

  });

}));
