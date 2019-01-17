const assert = require("assert");
const Functions = require("../src/index").Functions;
const promise = require("../samples/promise");

describe("Functions", function() {
  describe("IS FUNCTION", function() {
    const value = () => {},
      expected = true;
    it(`'must validate if '${value}' is a function`, function() {
      assert.equal(Functions.is_function(value), expected);
    });
  });
  describe("IS FUNCTION", function() {
    const value = {},
      expected = false;
    it(`'must validate if '${value}' is not a function`, function() {
      assert.equal(Functions.is_function(value), expected);
    });
  });
  describe("IS FUNCTION", function() {
    const value = promise,
      expected = false;
    it(`'must validate if '${value}' is not a function`, function() {
      assert.equal(Functions.is_function(value), expected);
    });
  });
  describe("IS FUNCTION", function() {
    const value = [],
      expected = false;
    it(`'must validate if '${value}' is not a function`, function() {
      assert.equal(Functions.is_function(value), expected);
    });
  });
  describe("IS PROMISE", function() {
    const value = () => {},
      expected = false;
    it(`'must validate if '${value}' is not a promise`, function() {
      assert.equal(Functions.is_promise(value), expected);
    });
  });
  describe("IS PROMISE", function() {
    const value = promise,
      expected = true;
    it(`'must validate if '${value}' is a promise`, function() {
      assert.equal(Functions.is_promise(value), expected);
    });
  });
  describe("IS PROMISE", function() {
    const value = {},
      expected = false;
    it(`'must validate if '${value}' is not a promise`, function() {
      assert.equal(Functions.is_promise(value), expected);
    });
  });
  describe("IS PROMISE", function() {
    const value = [],
      expected = false;
    it(`'must validate if '${value}' is not a promise`, function() {
      assert.equal(Functions.is_promise(value), expected);
    });
  });
});
