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
    instance = new KdepaApi.BlocksApi();
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

  describe('BlocksApi', function() {
    describe('blocksGet', function() {
      it('should call blocksGet successfully', function(done) {
        //uncomment below and update the code to test blocksGet
        //instance.blocksGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('blocksIdDelete', function() {
      it('should call blocksIdDelete successfully', function(done) {
        //uncomment below and update the code to test blocksIdDelete
        //instance.blocksIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('blocksIdGet', function() {
      it('should call blocksIdGet successfully', function(done) {
        //uncomment below and update the code to test blocksIdGet
        //instance.blocksIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('blocksIdPut', function() {
      it('should call blocksIdPut successfully', function(done) {
        //uncomment below and update the code to test blocksIdPut
        //instance.blocksIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('blocksPost', function() {
      it('should call blocksPost successfully', function(done) {
        //uncomment below and update the code to test blocksPost
        //instance.blocksPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
