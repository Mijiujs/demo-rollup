'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var version = "1.0.0";

function add(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}
var pacVersion = "".concat(version, "+!1");
var arrowFn = function arrowFn() {
  console.log('arrowFn');
};

exports.add = add;
exports.arrowFn = arrowFn;
exports.mul = mul;
exports.pacVersion = pacVersion;
