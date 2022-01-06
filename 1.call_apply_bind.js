"use strict";

Function.prototype.fakeBind = function (obj, ...args) {
  return (...newArgs) => {
    obj["fakeThis"] = this;
    let result = obj["fakeThis"](...args, ...newArgs);
    return result;
  };
};

Function.prototype.fakeCall = function (obj, ...args) {
  let foo = (...newArgs) => {
    obj["fakeThis"] = this;

    let result = obj["fakeThis"](...args, ...newArgs);
    return result;
  };
  return foo();
};

Function.prototype.fakeApply = function (obj, arr) {
  let foo = () => {
    obj["fakeThis"] = this;
    let result = obj["fakeThis"](...arr);
    return result;
  };
  return foo();
};
