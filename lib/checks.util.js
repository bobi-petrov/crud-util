"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var obj_util_1 = require("./obj.util");
exports.isUndefined = function (val) { return typeof val === 'undefined'; };
exports.isNull = function (val) { return val === null; };
exports.isNil = function (val) { return exports.isUndefined(val) || exports.isNull(val); };
exports.isString = function (val) { return typeof val === 'string'; };
exports.hasLength = function (val) { return val.length > 0; };
exports.isStringFull = function (val) { return exports.isString(val) && exports.hasLength(val); };
exports.isArrayFull = function (val) { return Array.isArray(val) && exports.hasLength(val); };
exports.isArrayStrings = function (val) {
    return exports.isArrayFull(val) && val.every(function (v) { return exports.isStringFull(v); });
};
exports.isObject = function (val) { return typeof val === 'object' && !exports.isNull(val); };
exports.isObjectFull = function (val) { return exports.isObject(val) && exports.hasLength(obj_util_1.objKeys(val)); };
exports.isNumber = function (val) {
    return typeof val === 'number' && !Number.isNaN(val) && Number.isFinite(val);
};
exports.isEqual = function (val, eq) { return val === eq; };
exports.isFalse = function (val) { return val === false; };
exports.isTrue = function (val) { return val === true; };
exports.isIn = function (val, arr) {
    if (arr === void 0) { arr = []; }
    return arr.some(function (o) { return exports.isEqual(val, o); });
};
exports.isBoolean = function (val) { return typeof val === 'boolean'; };
exports.isNumeric = function (val) { return /^[+-]?([0-9]*[.])?[0-9]+$/.test(val); };
exports.isDateString = function (val) {
    return exports.isStringFull(val) &&
        /^\d{4}-[01]\d-[0-3]\d(?:T[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z|[-+][0-2]\d(?::?[0-5]\d)?)?)?$/g.test(val);
};
exports.isDate = function (val) { return val instanceof Date; };
exports.isValue = function (val) {
    return exports.isStringFull(val) || exports.isNumber(val) || exports.isBoolean(val) || exports.isDate(val);
};
exports.hasValue = function (val) {
    return exports.isArrayFull(val) ? val.every(function (o) { return exports.isValue(o); }) : exports.isValue(val);
};
exports.isFunction = function (val) { return typeof val === 'function'; };
//# sourceMappingURL=checks.util.js.map