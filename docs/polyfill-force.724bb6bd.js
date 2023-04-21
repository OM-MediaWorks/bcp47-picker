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
parcelRequire.register("fx716", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $axgUQ = parcelRequire("axgUQ");

var $b4ef617621ac0b9d$var$_1 = $axgUQ.__importDefault((parcelRequire("cKvFP")));
Object.defineProperty(Intl, "ListFormat", {
    value: $b4ef617621ac0b9d$var$_1.default,
    writable: true,
    enumerable: false,
    configurable: true
});

});
parcelRequire.register("axgUQ", function(module, exports) {

$parcel$export(module.exports, "__assign", function () { return $7aba1b9a43219040$export$18ce0697a983be9b; });
$parcel$export(module.exports, "__importDefault", function () { return $7aba1b9a43219040$export$da59b14a69baef04; });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var $7aba1b9a43219040$var$extendStatics = function(d, b) {
    $7aba1b9a43219040$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $7aba1b9a43219040$var$extendStatics(d, b);
};
function $7aba1b9a43219040$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $7aba1b9a43219040$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $7aba1b9a43219040$export$18ce0697a983be9b = function() {
    $7aba1b9a43219040$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $7aba1b9a43219040$export$18ce0697a983be9b.apply(this, arguments);
};
function $7aba1b9a43219040$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $7aba1b9a43219040$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $7aba1b9a43219040$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $7aba1b9a43219040$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $7aba1b9a43219040$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $7aba1b9a43219040$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var $7aba1b9a43219040$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $7aba1b9a43219040$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $7aba1b9a43219040$export$45d3717a4c69092e(o, m, p);
}
function $7aba1b9a43219040$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $7aba1b9a43219040$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $7aba1b9a43219040$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($7aba1b9a43219040$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $7aba1b9a43219040$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $7aba1b9a43219040$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $7aba1b9a43219040$export$10c90e4f7922046c(v) {
    return this instanceof $7aba1b9a43219040$export$10c90e4f7922046c ? (this.v = v, this) : new $7aba1b9a43219040$export$10c90e4f7922046c(v);
}
function $7aba1b9a43219040$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $7aba1b9a43219040$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $7aba1b9a43219040$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $7aba1b9a43219040$export$10c90e4f7922046c(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function $7aba1b9a43219040$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $7aba1b9a43219040$export$19a8beecd37a4c45 === "function" ? $7aba1b9a43219040$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $7aba1b9a43219040$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $7aba1b9a43219040$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function $7aba1b9a43219040$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $7aba1b9a43219040$export$45d3717a4c69092e(result, mod, k);
    }
    $7aba1b9a43219040$var$__setModuleDefault(result, mod);
    return result;
}
function $7aba1b9a43219040$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $7aba1b9a43219040$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $7aba1b9a43219040$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $7aba1b9a43219040$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

});

parcelRequire.register("cKvFP", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $axgUQ = parcelRequire("axgUQ");

var $a5DGV = parcelRequire("a5DGV");
var $i4oKx = parcelRequire("i4oKx");
var $1KabS = parcelRequire("1KabS");
var $cw0sE = parcelRequire("cw0sE");
var $5bD5A = parcelRequire("5bD5A");
var $hodxE = parcelRequire("hodxE");

var $aMu7t = parcelRequire("aMu7t");
function $948259a0a9d177f9$var$validateInstance(instance, method) {
    if (!(instance instanceof $948259a0a9d177f9$var$ListFormat)) throw new TypeError("Method Intl.ListFormat.prototype.".concat(method, " called on incompatible receiver ").concat(String(instance)));
}
/**
 * https://tc39.es/proposal-intl-list-format/#sec-createstringlistfromiterable
 * @param list list
 */ function $948259a0a9d177f9$var$stringListFromIterable(list) {
    if (list === undefined) return [];
    var result = [];
    for(var _i = 0, list_1 = list; _i < list_1.length; _i++){
        var el = list_1[_i];
        if (typeof el !== "string") throw new TypeError("array list[".concat(list.indexOf(el), "] is not type String"));
        result.push(el);
    }
    return result;
}
function $948259a0a9d177f9$var$createPartsFromList(internalSlotMap, lf, list) {
    var size = list.length;
    if (size === 0) return [];
    if (size === 2) {
        var pattern = (0, $i4oKx.getInternalSlot)(internalSlotMap, lf, "templatePair");
        var first = {
            type: "element",
            value: list[0]
        };
        var second = {
            type: "element",
            value: list[1]
        };
        return $948259a0a9d177f9$var$deconstructPattern(pattern, {
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
        if (i === 0) pattern = (0, $i4oKx.getInternalSlot)(internalSlotMap, lf, "templateStart");
        else if (i < size - 2) pattern = (0, $i4oKx.getInternalSlot)(internalSlotMap, lf, "templateMiddle");
        else pattern = (0, $i4oKx.getInternalSlot)(internalSlotMap, lf, "templateEnd");
        var head = {
            type: "element",
            value: list[i]
        };
        parts = $948259a0a9d177f9$var$deconstructPattern(pattern, {
            "0": head,
            "1": parts
        });
        i--;
    }
    return parts;
}
function $948259a0a9d177f9$var$deconstructPattern(pattern, placeables) {
    var patternParts = (0, $5bD5A.PartitionPattern)(pattern);
    var result = [];
    for(var _i = 0, patternParts_1 = patternParts; _i < patternParts_1.length; _i++){
        var patternPart = patternParts_1[_i];
        var part = patternPart.type;
        if ((0, $i4oKx.isLiteralPart)(patternPart)) result.push({
            type: "literal",
            value: patternPart.value
        });
        else {
            (0, $i4oKx.invariant)(part in placeables, "".concat(part, " is missing from placables"));
            var subst = placeables[part];
            if (Array.isArray(subst)) result.push.apply(result, subst);
            else result.push(subst);
        }
    }
    return result;
}
var $948259a0a9d177f9$var$ListFormat = /** @class */ function() {
    function ListFormat(locales, options) {
        // test262/test/intl402/ListFormat/constructor/constructor/newtarget-undefined.js
        // Cannot use `new.target` bc of IE11 & TS transpiles it to something else
        var newTarget = this && this instanceof ListFormat ? this.constructor : void 0;
        if (!newTarget) throw new TypeError("Intl.ListFormat must be called with 'new'");
        (0, $i4oKx.setInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "initializedListFormat", true);
        var requestedLocales = (0, $a5DGV.CanonicalizeLocaleList)(locales);
        var opt = Object.create(null);
        var opts = (0, $cw0sE.GetOptionsObject)(options);
        var matcher = (0, $1KabS.GetOption)(opts, "localeMatcher", "string", [
            "best fit",
            "lookup"
        ], "best fit");
        opt.localeMatcher = matcher;
        var localeData = ListFormat.localeData;
        var r = (0, $aMu7t.ResolveLocale)(ListFormat.availableLocales, requestedLocales, opt, ListFormat.relevantExtensionKeys, localeData, ListFormat.getDefaultLocale);
        (0, $i4oKx.setInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "locale", r.locale);
        var type = (0, $1KabS.GetOption)(opts, "type", "string", [
            "conjunction",
            "disjunction",
            "unit"
        ], "conjunction");
        (0, $i4oKx.setInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "type", type);
        var style = (0, $1KabS.GetOption)(opts, "style", "string", [
            "long",
            "short",
            "narrow"
        ], "long");
        (0, $i4oKx.setInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "style", style);
        var dataLocale = r.dataLocale;
        var dataLocaleData = localeData[dataLocale];
        (0, $i4oKx.invariant)(!!dataLocaleData, "Missing locale data for ".concat(dataLocale));
        var dataLocaleTypes = dataLocaleData[type];
        var templates = dataLocaleTypes[style];
        (0, $i4oKx.setInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "templatePair", templates.pair);
        (0, $i4oKx.setInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "templateStart", templates.start);
        (0, $i4oKx.setInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "templateMiddle", templates.middle);
        (0, $i4oKx.setInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "templateEnd", templates.end);
    }
    ListFormat.prototype.format = function(elements) {
        $948259a0a9d177f9$var$validateInstance(this, "format");
        var result = "";
        var parts = $948259a0a9d177f9$var$createPartsFromList(ListFormat.__INTERNAL_SLOT_MAP__, this, $948259a0a9d177f9$var$stringListFromIterable(elements));
        if (!Array.isArray(parts)) return parts.value;
        for(var _i = 0, parts_1 = parts; _i < parts_1.length; _i++){
            var p = parts_1[_i];
            result += p.value;
        }
        return result;
    };
    ListFormat.prototype.formatToParts = function(elements) {
        $948259a0a9d177f9$var$validateInstance(this, "format");
        var parts = $948259a0a9d177f9$var$createPartsFromList(ListFormat.__INTERNAL_SLOT_MAP__, this, $948259a0a9d177f9$var$stringListFromIterable(elements));
        if (!Array.isArray(parts)) return [
            parts
        ];
        var result = [];
        for(var _i = 0, parts_2 = parts; _i < parts_2.length; _i++){
            var part = parts_2[_i];
            result.push($axgUQ.__assign({}, part));
        }
        return result;
    };
    ListFormat.prototype.resolvedOptions = function() {
        $948259a0a9d177f9$var$validateInstance(this, "resolvedOptions");
        return {
            locale: (0, $i4oKx.getInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "locale"),
            type: (0, $i4oKx.getInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "type"),
            style: (0, $i4oKx.getInternalSlot)(ListFormat.__INTERNAL_SLOT_MAP__, this, "style")
        };
    };
    ListFormat.supportedLocalesOf = function(locales, options) {
        // test262/test/intl402/ListFormat/constructor/supportedLocalesOf/result-type.js
        return (0, $hodxE.SupportedLocales)(ListFormat.availableLocales, (0, $a5DGV.CanonicalizeLocaleList)(locales), options);
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
module.exports.default = $948259a0a9d177f9$var$ListFormat;
try {
    // IE11 does not have Symbol
    if (typeof Symbol !== "undefined") Object.defineProperty($948259a0a9d177f9$var$ListFormat.prototype, Symbol.toStringTag, {
        value: "Intl.ListFormat",
        writable: false,
        enumerable: false,
        configurable: true
    });
    // https://github.com/tc39/test262/blob/master/test/intl402/ListFormat/constructor/length.js
    Object.defineProperty($948259a0a9d177f9$var$ListFormat.prototype.constructor, "length", {
        value: 0,
        writable: false,
        enumerable: false,
        configurable: true
    });
    // https://github.com/tc39/test262/blob/master/test/intl402/ListFormat/constructor/supportedLocalesOf/length.js
    Object.defineProperty($948259a0a9d177f9$var$ListFormat.supportedLocalesOf, "length", {
        value: 1,
        writable: false,
        enumerable: false,
        configurable: true
    });
} catch (e) {
// Meta fix so we're test262-compliant, not important
}

});
parcelRequire.register("a5DGV", function(module, exports) {

$parcel$export(module.exports, "CanonicalizeLocaleList", function () { return $758928e4582fccf0$export$65011bf5eae36f6a; });
/**
 * http://ecma-international.org/ecma-402/7.0/index.html#sec-canonicalizelocalelist
 * @param locales
 */ function $758928e4582fccf0$export$65011bf5eae36f6a(locales) {
    // TODO
    return Intl.getCanonicalLocales(locales);
}

});

parcelRequire.register("i4oKx", function(module, exports) {

$parcel$export(module.exports, "setInternalSlot", function () { return $d27bcc777b917844$export$489176b9ebc725cc; });
$parcel$export(module.exports, "getInternalSlot", function () { return $d27bcc777b917844$export$3fae2929ed23c202; });
$parcel$export(module.exports, "isLiteralPart", function () { return $d27bcc777b917844$export$25c75e09b890f24e; });
$parcel$export(module.exports, "invariant", function () { return $d27bcc777b917844$export$f5708dca728d7177; });
/**
 * Cannot do Math.log(x) / Math.log(10) bc if IEEE floating point issue
 * @param x number
 */ function $d27bcc777b917844$export$f535bb00660c42db(x) {
    // Cannot count string length via Number.toString because it may use scientific notation
    // for very small or very large numbers.
    return Math.floor(Math.log(x) * Math.LOG10E);
}
function $d27bcc777b917844$export$76d90c956114f2c2(s, times) {
    if (typeof s.repeat === "function") return s.repeat(times);
    var arr = new Array(times);
    for(var i = 0; i < arr.length; i++)arr[i] = s;
    return arr.join("");
}
function $d27bcc777b917844$export$489176b9ebc725cc(map, pl, field, value) {
    if (!map.get(pl)) map.set(pl, Object.create(null));
    var slots = map.get(pl);
    slots[field] = value;
}
function $d27bcc777b917844$export$d21499e79b5c28e2(map, pl, props) {
    for(var _i = 0, _a = Object.keys(props); _i < _a.length; _i++){
        var k = _a[_i];
        $d27bcc777b917844$export$489176b9ebc725cc(map, pl, k, props[k]);
    }
}
function $d27bcc777b917844$export$3fae2929ed23c202(map, pl, field) {
    return $d27bcc777b917844$export$ca4e2274c058dd9f(map, pl, field)[field];
}
function $d27bcc777b917844$export$ca4e2274c058dd9f(map, pl) {
    var fields = [];
    for(var _i = 2; _i < arguments.length; _i++)fields[_i - 2] = arguments[_i];
    var slots = map.get(pl);
    if (!slots) throw new TypeError("".concat(pl, " InternalSlot has not been initialized"));
    return fields.reduce(function(all, f) {
        all[f] = slots[f];
        return all;
    }, Object.create(null));
}
function $d27bcc777b917844$export$25c75e09b890f24e(patternPart) {
    return patternPart.type === "literal";
}
function $d27bcc777b917844$export$fdab3c20aae16ddf(target, name, _a) {
    var value = _a.value;
    Object.defineProperty(target, name, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: value
    });
}
var $d27bcc777b917844$export$9049a02e759202e4 = /-u(?:-[0-9a-z]{2,8})+/gi;
function $d27bcc777b917844$export$f5708dca728d7177(condition, message, Err) {
    if (Err === void 0) Err = Error;
    if (!condition) throw new Err(message);
}

});

parcelRequire.register("1KabS", function(module, exports) {

$parcel$export(module.exports, "GetOption", function () { return $1451fdf4e28ddcf9$export$32b401cf5b17228; });

var $hPkzD = parcelRequire("hPkzD");
function $1451fdf4e28ddcf9$export$32b401cf5b17228(opts, prop, type, values, fallback) {
    if (typeof opts !== "object") throw new TypeError("Options must be an object");
    var value = opts[prop];
    if (value !== undefined) {
        if (type !== "boolean" && type !== "string") throw new TypeError("invalid type");
        if (type === "boolean") value = Boolean(value);
        if (type === "string") value = (0, $hPkzD.ToString)(value);
        if (values !== undefined && !values.filter(function(val) {
            return val == value;
        }).length) throw new RangeError("".concat(value, " is not within ").concat(values.join(", ")));
        return value;
    }
    return fallback;
}

});
parcelRequire.register("hPkzD", function(module, exports) {

$parcel$export(module.exports, "ToString", function () { return $cfa7289e2d983123$export$5f245f9a686b5058; });
$parcel$export(module.exports, "ToObject", function () { return $cfa7289e2d983123$export$4b090d2d88b0c214; });
/**
 * https://tc39.es/ecma262/#sec-tostring
 */ function $cfa7289e2d983123$export$5f245f9a686b5058(o) {
    // Only symbol is irregular...
    if (typeof o === "symbol") throw TypeError("Cannot convert a Symbol value to a string");
    return String(o);
}
function $cfa7289e2d983123$export$8084f86c2571bdd(val) {
    if (val === undefined) return NaN;
    if (val === null) return 0;
    if (typeof val === "boolean") return val ? 1 : 0;
    if (typeof val === "number") return val;
    if (typeof val === "symbol" || typeof val === "bigint") throw new TypeError("Cannot convert symbol/bigint to number");
    return Number(val);
}
/**
 * https://tc39.es/ecma262/#sec-tointeger
 * @param n
 */ function $cfa7289e2d983123$var$ToInteger(n) {
    var number = $cfa7289e2d983123$export$8084f86c2571bdd(n);
    if (isNaN(number) || $cfa7289e2d983123$export$9d8eb45e0e4ffe79(number, -0)) return 0;
    if (isFinite(number)) return number;
    var integer = Math.floor(Math.abs(number));
    if (number < 0) integer = -integer;
    if ($cfa7289e2d983123$export$9d8eb45e0e4ffe79(integer, -0)) return 0;
    return integer;
}
function $cfa7289e2d983123$export$2877122e604e77b1(time) {
    if (!isFinite(time)) return NaN;
    if (Math.abs(time) > 8.64 * 1e15) return NaN;
    return $cfa7289e2d983123$var$ToInteger(time);
}
function $cfa7289e2d983123$export$4b090d2d88b0c214(arg) {
    if (arg == null) throw new TypeError("undefined/null cannot be converted to object");
    return Object(arg);
}
function $cfa7289e2d983123$export$9d8eb45e0e4ffe79(x, y) {
    if (Object.is) return Object.is(x, y);
    // SameValue algorithm
    if (x === y) // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
}
function $cfa7289e2d983123$export$c247b818a8aad3b3(len) {
    return new Array(len);
}
function $cfa7289e2d983123$export$49e3c0ca8a474ae(o, prop) {
    return Object.prototype.hasOwnProperty.call(o, prop);
}
function $cfa7289e2d983123$export$92738401e1603719(x) {
    if (x === null) return "Null";
    if (typeof x === "undefined") return "Undefined";
    if (typeof x === "function" || typeof x === "object") return "Object";
    if (typeof x === "number") return "Number";
    if (typeof x === "boolean") return "Boolean";
    if (typeof x === "string") return "String";
    if (typeof x === "symbol") return "Symbol";
    if (typeof x === "bigint") return "BigInt";
}
var $cfa7289e2d983123$var$MS_PER_DAY = 86400000;
/**
 * https://www.ecma-international.org/ecma-262/11.0/index.html#eqn-modulo
 * @param x
 * @param y
 * @return k of the same sign as y
 */ function $cfa7289e2d983123$var$mod(x, y) {
    return x - Math.floor(x / y) * y;
}
function $cfa7289e2d983123$export$7a9a31a911eb9a20(t) {
    return Math.floor(t / $cfa7289e2d983123$var$MS_PER_DAY);
}
function $cfa7289e2d983123$export$c897a47ee206642e(t) {
    return $cfa7289e2d983123$var$mod($cfa7289e2d983123$export$7a9a31a911eb9a20(t) + 4, 7);
}
function $cfa7289e2d983123$export$a97695b64b4f4d06(y) {
    return Date.UTC(y, 0) / $cfa7289e2d983123$var$MS_PER_DAY;
}
function $cfa7289e2d983123$export$9e81316b6c27c99(y) {
    return Date.UTC(y, 0);
}
function $cfa7289e2d983123$export$bc314033bafd2274(t) {
    return new Date(t).getUTCFullYear();
}
function $cfa7289e2d983123$export$6fce83b2f81c3bb6(y) {
    if (y % 4 !== 0) return 365;
    if (y % 100 !== 0) return 366;
    if (y % 400 !== 0) return 365;
    return 366;
}
function $cfa7289e2d983123$export$7cb6315d6f554c3a(t) {
    return $cfa7289e2d983123$export$7a9a31a911eb9a20(t) - $cfa7289e2d983123$export$a97695b64b4f4d06($cfa7289e2d983123$export$bc314033bafd2274(t));
}
function $cfa7289e2d983123$export$444107c791fa218(t) {
    return $cfa7289e2d983123$export$6fce83b2f81c3bb6($cfa7289e2d983123$export$bc314033bafd2274(t)) === 365 ? 0 : 1;
}
function $cfa7289e2d983123$export$636ecc8f6da8a06d(t) {
    var dwy = $cfa7289e2d983123$export$7cb6315d6f554c3a(t);
    var leap = $cfa7289e2d983123$export$444107c791fa218(t);
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
function $cfa7289e2d983123$export$ca9497d7f50cbe6c(t) {
    var dwy = $cfa7289e2d983123$export$7cb6315d6f554c3a(t);
    var mft = $cfa7289e2d983123$export$636ecc8f6da8a06d(t);
    var leap = $cfa7289e2d983123$export$444107c791fa218(t);
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
var $cfa7289e2d983123$var$HOURS_PER_DAY = 24;
var $cfa7289e2d983123$var$MINUTES_PER_HOUR = 60;
var $cfa7289e2d983123$var$SECONDS_PER_MINUTE = 60;
var $cfa7289e2d983123$var$MS_PER_SECOND = 1e3;
var $cfa7289e2d983123$var$MS_PER_MINUTE = $cfa7289e2d983123$var$MS_PER_SECOND * $cfa7289e2d983123$var$SECONDS_PER_MINUTE;
var $cfa7289e2d983123$var$MS_PER_HOUR = $cfa7289e2d983123$var$MS_PER_MINUTE * $cfa7289e2d983123$var$MINUTES_PER_HOUR;
function $cfa7289e2d983123$export$99d93c1d739efdf4(t) {
    return $cfa7289e2d983123$var$mod(Math.floor(t / $cfa7289e2d983123$var$MS_PER_HOUR), $cfa7289e2d983123$var$HOURS_PER_DAY);
}
function $cfa7289e2d983123$export$607c2570879a3d50(t) {
    return $cfa7289e2d983123$var$mod(Math.floor(t / $cfa7289e2d983123$var$MS_PER_MINUTE), $cfa7289e2d983123$var$MINUTES_PER_HOUR);
}
function $cfa7289e2d983123$export$dea907cc0b92a0a2(t) {
    return $cfa7289e2d983123$var$mod(Math.floor(t / $cfa7289e2d983123$var$MS_PER_SECOND), $cfa7289e2d983123$var$SECONDS_PER_MINUTE);
}
function $cfa7289e2d983123$var$IsCallable(fn) {
    return typeof fn === "function";
}
function $cfa7289e2d983123$export$fead66027dec0347(C, O, internalSlots) {
    if (!$cfa7289e2d983123$var$IsCallable(C)) return false;
    if (internalSlots === null || internalSlots === void 0 ? void 0 : internalSlots.boundTargetFunction) {
        var BC = internalSlots === null || internalSlots === void 0 ? void 0 : internalSlots.boundTargetFunction;
        return O instanceof BC;
    }
    if (typeof O !== "object") return false;
    var P = C.prototype;
    if (typeof P !== "object") throw new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
    return Object.prototype.isPrototypeOf.call(P, O);
}
function $cfa7289e2d983123$export$b42324dfacf93544(t) {
    return $cfa7289e2d983123$var$mod(t, $cfa7289e2d983123$var$MS_PER_SECOND);
}

});


parcelRequire.register("cw0sE", function(module, exports) {

$parcel$export(module.exports, "GetOptionsObject", function () { return $91c8d4c524ad1316$export$2a5dd697883cb5fd; });
/**
 * https://tc39.es/ecma402/#sec-getoptionsobject
 * @param options
 * @returns
 */ function $91c8d4c524ad1316$export$2a5dd697883cb5fd(options) {
    if (typeof options === "undefined") return Object.create(null);
    if (typeof options === "object") return options;
    throw new TypeError("Options must be an object");
}

});

parcelRequire.register("5bD5A", function(module, exports) {

$parcel$export(module.exports, "PartitionPattern", function () { return $3c6c4d1b96a788eb$export$c89900121c58bbcc; });

var $i4oKx = parcelRequire("i4oKx");
function $3c6c4d1b96a788eb$export$c89900121c58bbcc(pattern) {
    var result = [];
    var beginIndex = pattern.indexOf("{");
    var endIndex = 0;
    var nextIndex = 0;
    var length = pattern.length;
    while(beginIndex < pattern.length && beginIndex > -1){
        endIndex = pattern.indexOf("}", beginIndex);
        (0, $i4oKx.invariant)(endIndex > beginIndex, "Invalid pattern ".concat(pattern));
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

parcelRequire.register("hodxE", function(module, exports) {

$parcel$export(module.exports, "SupportedLocales", function () { return $ca8f2eb210c6e183$export$a76d9e924467afad; });

var $hPkzD = parcelRequire("hPkzD");

var $1KabS = parcelRequire("1KabS");

var $aMu7t = parcelRequire("aMu7t");
function $ca8f2eb210c6e183$export$a76d9e924467afad(availableLocales, requestedLocales, options) {
    var matcher = "best fit";
    if (options !== undefined) {
        options = (0, $hPkzD.ToObject)(options);
        matcher = (0, $1KabS.GetOption)(options, "localeMatcher", "string", [
            "lookup",
            "best fit"
        ], "best fit");
    }
    if (matcher === "best fit") return (0, $aMu7t.LookupSupportedLocales)(availableLocales, requestedLocales);
    return (0, $aMu7t.LookupSupportedLocales)(availableLocales, requestedLocales);
}

});




//# sourceMappingURL=polyfill-force.724bb6bd.js.map
