"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constant = exports.addNumbers = exports.sayHello = void 0;
let sayHello = function () {
    console.log("hello");
};
exports.sayHello = sayHello;
let addNumbers = function (a, b) {
    return a + b;
};
exports.addNumbers = addNumbers;
exports.constant = {
    property: 12,
};
