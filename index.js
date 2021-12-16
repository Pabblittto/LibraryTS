"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constant = exports.something = exports.addNumbers = exports.sayHello = void 0;
let sayHello = function () {
    console.log("hello");
};
exports.sayHello = sayHello;
let addNumbers = function (a, b) {
    return a + b;
};
exports.addNumbers = addNumbers;
exports.something = { x: "" };
exports.constant = {
    property: 12,
};
