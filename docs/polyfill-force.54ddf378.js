(function () {
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var parcelRequire = $parcel$global["parcelRequire8737"];
parcelRequire.register("bhEJ1", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $e5rmm = parcelRequire("e5rmm");

var $8370df65a10e7c31$var$_1 = $e5rmm.__importDefault((parcelRequire("c5iA1")));
Object.defineProperty(Intl, "ListFormat", {
    value: $8370df65a10e7c31$var$_1.default,
    writable: true,
    enumerable: false,
    configurable: true
});

});
parcelRequire.register("c5iA1", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $e5rmm = parcelRequire("e5rmm");

var $na3a9 = parcelRequire("na3a9");
var $j6pxV = parcelRequire("j6pxV");
var $6JGUg = parcelRequire("6JGUg");
var $94AR0 = parcelRequire("94AR0");
var $b63ZY = parcelRequire("b63ZY");
var $7V9pv = parcelRequire("7V9pv");

var $3SZLw = parcelRequire("3SZLw");
function $8cc45d41206d41cc$var$validateInstance(instance, method) {
    if (!(instance instanceof $8cc45d41206d41cc$var$ListFormat)) throw new TypeError("Method Intl.ListFormat.prototype.".concat(method, " called on incompatible receiver ").concat(String(instance)));
}
/**
 * https://tc39.es/proposal-intl-list-format/#sec-createstringlistfromiterable
 * @param list list
 */ function $8cc45d41206d41cc$var$stringListFromIterable(list) {
    if (list === undefined) return [];
    var result = [];
    for(var _i = 0, list_1 = list; _i < list_1.length; _i++){
        var el = list_1[_i];
        if (typeof el !== "string") throw new TypeError("array list[".concat(list.indexOf(el), "] is not type String"));
        result.push(el);
    }
    return result;
}
function $8cc45d41206d41cc$var$createPartsFromList(internalSlotMap, lf, list) {
    var size = list.length;
    if (size === 0) return [];
    if (size === 2) {
        var pattern = (0, $j6pxV.getInternalSlot)(internalSlotMap, lf, "templatePair");
        var first = {
            type: "element",
            value: list[0]
        };
        var second = {
            type: "element",
            value: list[1]
        };
        return $8cc45d41206d41cc$var$deconstructPattern(pattern, {
            "0": first,
            "1": second
        });
    }
    var last = {
        type: "element",
        value: list[size - 1]
    };
    var parts = last;
    var i = size - 2;
    while(i >= 0){
        var pattern = void 0;
        if (i === 0) pattern = (0, $j6pxV.getInternalSlot)(internalSlotMap, lf, "templateStart");
        else if (i < size - 2) pattern = (0, $j6pxV.getInternalSlot)(internalSlotMap, lf, "templateMiddle");
        else pattern = (0, $j6pxV.getInternalSlot)(internalSlotMap, lf, "templateEnd");
        var head = {
            type: "element",
            value: list[i]
        };
        parts = $8cc45d41206d41cc$var$deconstructPattern(pattern, {
            "0": head,
            "1": parts
        });
        i--;
    }
    return parts;
}
function $8cc45d41206d41cc$var$deconstructPattern(pattern, placeables) {
    var patternParts = (0, $b63ZY.PartitionPattern)(pattern);
    var result = [];
    for(var _i = 0, patternParts_1 = patternParts; _i < patternParts_1.length; _i++){
        var patternPart = patternParts_1[_i];
        var part = patternPart.type;
        if ((0, $j6pxV.isLiteralPart)(patternPart)) result.push({
            type: "literal",
            value: patternPart.value
        });
        else {
            (0, $j6pxV.invariant)(part in placeables, "".concat(part, " is missing from placables"));
            var subst = placeables[part];
            if (Array.isArray(subst)) result.push.apply(result, subst);
            else result.push(subst);
        }
    }
    return result;
}
var $8cc45d41206d41cc$var$ListFormat = /** @class */ function() {
    function ListFormat(locales, options) {
        // test262/test/intl402/ListFormat/constructor/constructor/newtarget-undefined.js
        // Cannot use `new.target` bc of IE11 & TS transpiles it to something else
        var newTarget = this && this instanceof ListFormat ? this.constructor : void 0;
        if (!newTarget) throw new TypeError("Intl.ListFormat must be called with 'new'");
        (0, $j6pxV.setInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "initializedListFormat", true);
        var requestedLocales = (0, $na3a9.CanonicalizeLocaleList)(locales);
        var opt = Object.create(null);
        var opts = (0, $94AR0.GetOptionsObject)(options);
        var matcher = (0, $6JGUg.GetOption)(opts, "localeMatcher", "string", [
            "best fit",
            "lookup"
        ], "best fit");
        opt.localeMatcher = matcher;
        var localeData = ListFormat.localeData;
        var r = (0, $3SZLw.ResolveLocale)(ListFormat.availableLocales, requestedLocales, opt, ListFormat.relevantExtensionKeys, localeData, ListFormat.getDefaultLocale);
        (0, $j6pxV.setInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "locale", r.locale);
        var type = (0, $6JGUg.GetOption)(opts, "type", "string", [
            "conjunction",
            "disjunction",
            "unit"
        ], "conjunction");
        (0, $j6pxV.setInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "type", type);
        var style = (0, $6JGUg.GetOption)(opts, "style", "string", [
            "long",
            "short",
            "narrow"
        ], "long");
        (0, $j6pxV.setInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "style", style);
        var dataLocale = r.dataLocale;
        var dataLocaleData = localeData[dataLocale];
        (0, $j6pxV.invariant)(!!dataLocaleData, "Missing locale data for ".concat(dataLocale));
        var dataLocaleTypes = dataLocaleData[type];
        var templates = dataLocaleTypes[style];
        (0, $j6pxV.setInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "templatePair", templates.pair);
        (0, $j6pxV.setInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "templateStart", templates.start);
        (0, $j6pxV.setInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "templateMiddle", templates.middle);
        (0, $j6pxV.setInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "templateEnd", templates.end);
    }
    ListFormat.prototype.format = function(elements) {
        $8cc45d41206d41cc$var$validateInstance(this, "format");
        var result = "";
        var parts = $8cc45d41206d41cc$var$createPartsFromList(ListFormat.__INTERNAL_SLOT_MAP__, this, $8cc45d41206d41cc$var$stringListFromIterable(elements));
        if (!Array.isArray(parts)) return parts.value;
        for(var _i = 0, parts_1 = parts; _i < parts_1.length; _i++){
            var p = parts_1[_i];
            result += p.value;
        }
        return result;
    };
    ListFormat.prototype.formatToParts = function(elements) {
        $8cc45d41206d41cc$var$validateInstance(this, "format");
        var parts = $8cc45d41206d41cc$var$createPartsFromList(ListFormat.__INTERNAL_SLOT_MAP__, this, $8cc45d41206d41cc$var$stringListFromIterable(elements));
        if (!Array.isArray(parts)) return [
            parts
        ];
        var result = [];
        for(var _i = 0, parts_2 = parts; _i < parts_2.length; _i++){
            var part = parts_2[_i];
            result.push($e5rmm.__assign({}, part));
        }
        return result;
    };
    ListFormat.prototype.resolvedOptions = function() {
        $8cc45d41206d41cc$var$validateInstance(this, "resolvedOptions");
        return {
            locale: (0, $j6pxV.getInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "locale"),
            type: (0, $j6pxV.getInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "type"),
            style: (0, $j6pxV.getInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "style")
        };
    };
    ListFormat.supportedLocalesOf = function(locales, options) {
        // test262/test/intl402/ListFormat/constructor/supportedLocalesOf/result-type.js
        return (0, $7V9pv.SupportedLocales)(ListFormat.availableLocales, (0, $na3a9.CanonicalizeLocaleList)(locales), options);
    };
    ListFormat.__addLocaleData = function() {
        var data = [];
        for(var _i = 0; _i < arguments.length; _i++)data[_i] = arguments[_i];
        for(var _a = 0, data_1 = data; _a < data_1.length; _a++){
            var _b = data_1[_a], d = _b.data, locale = _b.locale;
            var minimizedLocale = new Intl.Locale(locale).minimize().toString();
            ListFormat.localeData[locale] = ListFormat.localeData[minimizedLocale] = d;
            ListFormat.availableLocales.add(minimizedLocale);
            ListFormat.availableLocales.add(locale);
            if (!ListFormat.__defaultLocale) ListFormat.__defaultLocale = minimizedLocale;
        }
    };
    ListFormat.getDefaultLocale = function() {
        return ListFormat.__defaultLocale;
    };
    ListFormat.localeData = {};
    ListFormat.availableLocales = new Set();
    ListFormat.__defaultLocale = "";
    ListFormat.relevantExtensionKeys = [];
    ListFormat.polyfilled = true;
    ListFormat.__INTERNAL_SLOT_MAP__ = new WeakMap();
    return ListFormat;
}();
module.exports.default = $8cc45d41206d41cc$var$ListFormat;
try {
    // IE11 does not have Symbol
    if (typeof Symbol !== "undefined") Object.defineProperty($8cc45d41206d41cc$var$ListFormat.prototype, Symbol.toStringTag, {
        value: "Intl.ListFormat",
        writable: false,
        enumerable: false,
        configurable: true
    });
    // https://github.com/tc39/test262/blob/master/test/intl402/ListFormat/constructor/length.js
    Object.defineProperty($8cc45d41206d41cc$var$ListFormat.prototype.constructor, "length", {
        value: 0,
        writable: false,
        enumerable: false,
        configurable: true
    });
    // https://github.com/tc39/test262/blob/master/test/intl402/ListFormat/constructor/supportedLocalesOf/length.js
    Object.defineProperty($8cc45d41206d41cc$var$ListFormat.supportedLocalesOf, "length", {
        value: 1,
        writable: false,
        enumerable: false,
        configurable: true
    });
} catch (e) {
// Meta fix so we're test262-compliant, not important
}

});
parcelRequire.register("na3a9", function(module, exports) {

$parcel$export(module.exports, "CanonicalizeLocaleList", function () { return $0459f1d1edc642ec$export$65011bf5eae36f6a; });
/**
 * http://ecma-international.org/ecma-402/7.0/index.html#sec-canonicalizelocalelist
 * @param locales
 */ function $0459f1d1edc642ec$export$65011bf5eae36f6a(locales) {
    // TODO
    return Intl.getCanonicalLocales(locales);
}

});

parcelRequire.register("j6pxV", function(module, exports) {

$parcel$export(module.exports, "setInternalSlot", function () { return $de8264d03e9c7cdc$export$489176b9ebc725cc; });
$parcel$export(module.exports, "getInternalSlot", function () { return $de8264d03e9c7cdc$export$3fae2929ed23c202; });
$parcel$export(module.exports, "isLiteralPart", function () { return $de8264d03e9c7cdc$export$25c75e09b890f24e; });
$parcel$export(module.exports, "invariant", function () { return $de8264d03e9c7cdc$export$f5708dca728d7177; });
/**
 * Cannot do Math.log(x) / Math.log(10) bc if IEEE floating point issue
 * @param x number
 */ function $de8264d03e9c7cdc$export$f535bb00660c42db(x) {
    // Cannot count string length via Number.toString because it may use scientific notation
    // for very small or very large numbers.
    return Math.floor(Math.log(x) * Math.LOG10E);
}
function $de8264d03e9c7cdc$export$76d90c956114f2c2(s, times) {
    if (typeof s.repeat === "function") return s.repeat(times);
    var arr = new Array(times);
    for(var i = 0; i < arr.length; i++)arr[i] = s;
    return arr.join("");
}
function $de8264d03e9c7cdc$export$489176b9ebc725cc(map, pl, field, value) {
    if (!map.get(pl)) map.set(pl, Object.create(null));
    var slots = map.get(pl);
    slots[field] = value;
}
function $de8264d03e9c7cdc$export$d21499e79b5c28e2(map, pl, props) {
    for(var _i = 0, _a = Object.keys(props); _i < _a.length; _i++){
        var k = _a[_i];
        $de8264d03e9c7cdc$export$489176b9ebc725cc(map, pl, k, props[k]);
    }
}
function $de8264d03e9c7cdc$export$3fae2929ed23c202(map, pl, field) {
    return $de8264d03e9c7cdc$export$ca4e2274c058dd9f(map, pl, field)[field];
}
function $de8264d03e9c7cdc$export$ca4e2274c058dd9f(map, pl) {
    var fields = [];
    for(var _i = 2; _i < arguments.length; _i++)fields[_i - 2] = arguments[_i];
    var slots = map.get(pl);
    if (!slots) throw new TypeError("".concat(pl, " InternalSlot has not been initialized"));
    return fields.reduce(function(all, f) {
        all[f] = slots[f];
        return all;
    }, Object.create(null));
}
function $de8264d03e9c7cdc$export$25c75e09b890f24e(patternPart) {
    return patternPart.type === "literal";
}
function $de8264d03e9c7cdc$export$fdab3c20aae16ddf(target, name, _a) {
    var value = _a.value;
    Object.defineProperty(target, name, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: value
    });
}
var $de8264d03e9c7cdc$export$9049a02e759202e4 = /-u(?:-[0-9a-z]{2,8})+/gi;
function $de8264d03e9c7cdc$export$f5708dca728d7177(condition, message, Err) {
    if (Err === void 0) Err = Error;
    if (!condition) throw new Err(message);
}

});

parcelRequire.register("6JGUg", function(module, exports) {

$parcel$export(module.exports, "GetOption", function () { return $4e783a607b8c1bd7$export$32b401cf5b17228; });

var $5YhaC = parcelRequire("5YhaC");
function $4e783a607b8c1bd7$export$32b401cf5b17228(opts, prop, type, values, fallback) {
    if (typeof opts !== "object") throw new TypeError("Options must be an object");
    var value = opts[prop];
    if (value !== undefined) {
        if (type !== "boolean" && type !== "string") throw new TypeError("invalid type");
        if (type === "boolean") value = Boolean(value);
        if (type === "string") value = (0, $5YhaC.ToString)(value);
        if (values !== undefined && !values.filter(function(val) {
            return val == value;
        }).length) throw new RangeError("".concat(value, " is not within ").concat(values.join(", ")));
        return value;
    }
    return fallback;
}

});
parcelRequire.register("5YhaC", function(module, exports) {

$parcel$export(module.exports, "ToString", function () { return $458fe005bb2075d7$export$5f245f9a686b5058; });
$parcel$export(module.exports, "ToObject", function () { return $458fe005bb2075d7$export$4b090d2d88b0c214; });
/**
 * https://tc39.es/ecma262/#sec-tostring
 */ 
var $7FXNV = parcelRequire("7FXNV");
function $458fe005bb2075d7$export$5f245f9a686b5058(o) {
    // Only symbol is irregular...
    if ((typeof o === "undefined" ? "undefined" : (0, $7FXNV.default)(o)) === "symbol") throw TypeError("Cannot convert a Symbol value to a string");
    return String(o);
}
function $458fe005bb2075d7$export$8084f86c2571bdd(val) {
    if (val === undefined) return NaN;
    if (val === null) return 0;
    if (typeof val === "boolean") return val ? 1 : 0;
    if (typeof val === "number") return val;
    if ((typeof val === "undefined" ? "undefined" : (0, $7FXNV.default)(val)) === "symbol" || (typeof val === "undefined" ? "undefined" : (0, $7FXNV.default)(val)) === "bigint") throw new TypeError("Cannot convert symbol/bigint to number");
    return Number(val);
}
/**
 * https://tc39.es/ecma262/#sec-tointeger
 * @param n
 */ function $458fe005bb2075d7$var$ToInteger(n) {
    var number = $458fe005bb2075d7$export$8084f86c2571bdd(n);
    if (isNaN(number) || $458fe005bb2075d7$export$9d8eb45e0e4ffe79(number, -0)) return 0;
    if (isFinite(number)) return number;
    var integer = Math.floor(Math.abs(number));
    if (number < 0) integer = -integer;
    if ($458fe005bb2075d7$export$9d8eb45e0e4ffe79(integer, -0)) return 0;
    return integer;
}
function $458fe005bb2075d7$export$2877122e604e77b1(time) {
    if (!isFinite(time)) return NaN;
    if (Math.abs(time) > 8.64 * 1e15) return NaN;
    return $458fe005bb2075d7$var$ToInteger(time);
}
function $458fe005bb2075d7$export$4b090d2d88b0c214(arg) {
    if (arg == null) throw new TypeError("undefined/null cannot be converted to object");
    return Object(arg);
}
function $458fe005bb2075d7$export$9d8eb45e0e4ffe79(x, y) {
    if (Object.is) return Object.is(x, y);
    // SameValue algorithm
    if (x === y) // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
}
function $458fe005bb2075d7$export$c247b818a8aad3b3(len) {
    return new Array(len);
}
function $458fe005bb2075d7$export$49e3c0ca8a474ae(o, prop) {
    return Object.prototype.hasOwnProperty.call(o, prop);
}
function $458fe005bb2075d7$export$92738401e1603719(x) {
    if (x === null) return "Null";
    if (typeof x === "undefined") return "Undefined";
    if (typeof x === "function" || typeof x === "object") return "Object";
    if (typeof x === "number") return "Number";
    if (typeof x === "boolean") return "Boolean";
    if (typeof x === "string") return "String";
    if ((typeof x === "undefined" ? "undefined" : (0, $7FXNV.default)(x)) === "symbol") return "Symbol";
    if ((typeof x === "undefined" ? "undefined" : (0, $7FXNV.default)(x)) === "bigint") return "BigInt";
}
var $458fe005bb2075d7$var$MS_PER_DAY = 86400000;
/**
 * https://www.ecma-international.org/ecma-262/11.0/index.html#eqn-modulo
 * @param x
 * @param y
 * @return k of the same sign as y
 */ function $458fe005bb2075d7$var$mod(x, y) {
    return x - Math.floor(x / y) * y;
}
function $458fe005bb2075d7$export$7a9a31a911eb9a20(t) {
    return Math.floor(t / $458fe005bb2075d7$var$MS_PER_DAY);
}
function $458fe005bb2075d7$export$c897a47ee206642e(t) {
    return $458fe005bb2075d7$var$mod($458fe005bb2075d7$export$7a9a31a911eb9a20(t) + 4, 7);
}
function $458fe005bb2075d7$export$a97695b64b4f4d06(y) {
    return Date.UTC(y, 0) / $458fe005bb2075d7$var$MS_PER_DAY;
}
function $458fe005bb2075d7$export$9e81316b6c27c99(y) {
    return Date.UTC(y, 0);
}
function $458fe005bb2075d7$export$bc314033bafd2274(t) {
    return new Date(t).getUTCFullYear();
}
function $458fe005bb2075d7$export$6fce83b2f81c3bb6(y) {
    if (y % 4 !== 0) return 365;
    if (y % 100 !== 0) return 366;
    if (y % 400 !== 0) return 365;
    return 366;
}
function $458fe005bb2075d7$export$7cb6315d6f554c3a(t) {
    return $458fe005bb2075d7$export$7a9a31a911eb9a20(t) - $458fe005bb2075d7$export$a97695b64b4f4d06($458fe005bb2075d7$export$bc314033bafd2274(t));
}
function $458fe005bb2075d7$export$444107c791fa218(t) {
    return $458fe005bb2075d7$export$6fce83b2f81c3bb6($458fe005bb2075d7$export$bc314033bafd2274(t)) === 365 ? 0 : 1;
}
function $458fe005bb2075d7$export$636ecc8f6da8a06d(t) {
    var dwy = $458fe005bb2075d7$export$7cb6315d6f554c3a(t);
    var leap = $458fe005bb2075d7$export$444107c791fa218(t);
    if (dwy >= 0 && dwy < 31) return 0;
    if (dwy < 59 + leap) return 1;
    if (dwy < 90 + leap) return 2;
    if (dwy < 120 + leap) return 3;
    if (dwy < 151 + leap) return 4;
    if (dwy < 181 + leap) return 5;
    if (dwy < 212 + leap) return 6;
    if (dwy < 243 + leap) return 7;
    if (dwy < 273 + leap) return 8;
    if (dwy < 304 + leap) return 9;
    if (dwy < 334 + leap) return 10;
    if (dwy < 365 + leap) return 11;
    throw new Error("Invalid time");
}
function $458fe005bb2075d7$export$ca9497d7f50cbe6c(t) {
    var dwy = $458fe005bb2075d7$export$7cb6315d6f554c3a(t);
    var mft = $458fe005bb2075d7$export$636ecc8f6da8a06d(t);
    var leap = $458fe005bb2075d7$export$444107c791fa218(t);
    if (mft === 0) return dwy + 1;
    if (mft === 1) return dwy - 30;
    if (mft === 2) return dwy - 58 - leap;
    if (mft === 3) return dwy - 89 - leap;
    if (mft === 4) return dwy - 119 - leap;
    if (mft === 5) return dwy - 150 - leap;
    if (mft === 6) return dwy - 180 - leap;
    if (mft === 7) return dwy - 211 - leap;
    if (mft === 8) return dwy - 242 - leap;
    if (mft === 9) return dwy - 272 - leap;
    if (mft === 10) return dwy - 303 - leap;
    if (mft === 11) return dwy - 333 - leap;
    throw new Error("Invalid time");
}
var $458fe005bb2075d7$var$HOURS_PER_DAY = 24;
var $458fe005bb2075d7$var$MINUTES_PER_HOUR = 60;
var $458fe005bb2075d7$var$SECONDS_PER_MINUTE = 60;
var $458fe005bb2075d7$var$MS_PER_SECOND = 1e3;
var $458fe005bb2075d7$var$MS_PER_MINUTE = $458fe005bb2075d7$var$MS_PER_SECOND * $458fe005bb2075d7$var$SECONDS_PER_MINUTE;
var $458fe005bb2075d7$var$MS_PER_HOUR = $458fe005bb2075d7$var$MS_PER_MINUTE * $458fe005bb2075d7$var$MINUTES_PER_HOUR;
function $458fe005bb2075d7$export$99d93c1d739efdf4(t) {
    return $458fe005bb2075d7$var$mod(Math.floor(t / $458fe005bb2075d7$var$MS_PER_HOUR), $458fe005bb2075d7$var$HOURS_PER_DAY);
}
function $458fe005bb2075d7$export$607c2570879a3d50(t) {
    return $458fe005bb2075d7$var$mod(Math.floor(t / $458fe005bb2075d7$var$MS_PER_MINUTE), $458fe005bb2075d7$var$MINUTES_PER_HOUR);
}
function $458fe005bb2075d7$export$dea907cc0b92a0a2(t) {
    return $458fe005bb2075d7$var$mod(Math.floor(t / $458fe005bb2075d7$var$MS_PER_SECOND), $458fe005bb2075d7$var$SECONDS_PER_MINUTE);
}
function $458fe005bb2075d7$var$IsCallable(fn) {
    return typeof fn === "function";
}
function $458fe005bb2075d7$export$fead66027dec0347(C, O, internalSlots) {
    if (!$458fe005bb2075d7$var$IsCallable(C)) return false;
    if (internalSlots === null || internalSlots === void 0 ? void 0 : internalSlots.boundTargetFunction) {
        var BC = internalSlots === null || internalSlots === void 0 ? void 0 : internalSlots.boundTargetFunction;
        return O instanceof BC;
    }
    if (typeof O !== "object") return false;
    var P = C.prototype;
    if (typeof P !== "object") throw new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
    return Object.prototype.isPrototypeOf.call(P, O);
}
function $458fe005bb2075d7$export$b42324dfacf93544(t) {
    return $458fe005bb2075d7$var$mod(t, $458fe005bb2075d7$var$MS_PER_SECOND);
}

});


parcelRequire.register("94AR0", function(module, exports) {

$parcel$export(module.exports, "GetOptionsObject", function () { return $69b11330e97e2575$export$2a5dd697883cb5fd; });
/**
 * https://tc39.es/ecma402/#sec-getoptionsobject
 * @param options
 * @returns
 */ function $69b11330e97e2575$export$2a5dd697883cb5fd(options) {
    if (typeof options === "undefined") return Object.create(null);
    if (typeof options === "object") return options;
    throw new TypeError("Options must be an object");
}

});

parcelRequire.register("b63ZY", function(module, exports) {

$parcel$export(module.exports, "PartitionPattern", function () { return $81435b44edf72196$export$c89900121c58bbcc; });

var $j6pxV = parcelRequire("j6pxV");
function $81435b44edf72196$export$c89900121c58bbcc(pattern) {
    var result = [];
    var beginIndex = pattern.indexOf("{");
    var endIndex = 0;
    var nextIndex = 0;
    var length = pattern.length;
    while(beginIndex < pattern.length && beginIndex > -1){
        endIndex = pattern.indexOf("}", beginIndex);
        (0, $j6pxV.invariant)(endIndex > beginIndex, "Invalid pattern ".concat(pattern));
        if (beginIndex > nextIndex) result.push({
            type: "literal",
            value: pattern.substring(nextIndex, beginIndex)
        });
        result.push({
            type: pattern.substring(beginIndex + 1, endIndex),
            value: undefined
        });
        nextIndex = endIndex + 1;
        beginIndex = pattern.indexOf("{", nextIndex);
    }
    if (nextIndex < length) result.push({
        type: "literal",
        value: pattern.substring(nextIndex, length)
    });
    return result;
}

});

parcelRequire.register("7V9pv", function(module, exports) {

$parcel$export(module.exports, "SupportedLocales", function () { return $5c4527faada420dc$export$a76d9e924467afad; });

var $5YhaC = parcelRequire("5YhaC");

var $6JGUg = parcelRequire("6JGUg");

var $3SZLw = parcelRequire("3SZLw");
function $5c4527faada420dc$export$a76d9e924467afad(availableLocales, requestedLocales, options) {
    var matcher = "best fit";
    if (options !== undefined) {
        options = (0, $5YhaC.ToObject)(options);
        matcher = (0, $6JGUg.GetOption)(options, "localeMatcher", "string", [
            "lookup",
            "best fit"
        ], "best fit");
    }
    if (matcher === "best fit") return (0, $3SZLw.LookupSupportedLocales)(availableLocales, requestedLocales);
    return (0, $3SZLw.LookupSupportedLocales)(availableLocales, requestedLocales);
}

});



})();
//# sourceMappingURL=polyfill-force.54ddf378.js.map
