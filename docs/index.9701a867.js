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
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire8737"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire8737"] = parcelRequire;
}
parcelRequire.register("988ET", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $6a5b93d80d68e256$export$6503ec6e8aabbaf; }, function (v) { return $6a5b93d80d68e256$export$6503ec6e8aabbaf = v; });
$parcel$export(module.exports, "resolve", function () { return $6a5b93d80d68e256$export$f7ad0328861e2f03; }, function (v) { return $6a5b93d80d68e256$export$f7ad0328861e2f03 = v; });
var $6a5b93d80d68e256$export$6503ec6e8aabbaf;
var $6a5b93d80d68e256$export$f7ad0328861e2f03;
"use strict";
var $6a5b93d80d68e256$var$mapping = {};
function $6a5b93d80d68e256$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$6a5b93d80d68e256$var$mapping[keys[i]] = pairs[keys[i]];
}
function $6a5b93d80d68e256$var$resolve(id) {
    var resolved = $6a5b93d80d68e256$var$mapping[id];
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return resolved;
}
$6a5b93d80d68e256$export$6503ec6e8aabbaf = $6a5b93d80d68e256$var$register;
$6a5b93d80d68e256$export$f7ad0328861e2f03 = $6a5b93d80d68e256$var$resolve;

});

parcelRequire.register("6CGvJ", function(module, exports) {



module.exports = (parcelRequire("1LJoW"))((parcelRequire("c3KiG")).getBundleURL("1tqJB") + (parcelRequire("988ET")).resolve("2qg4L")).then(function() {
    return parcelRequire("7Vplj");
});

});
parcelRequire.register("1LJoW", function(module, exports) {
"use strict";

var $au6h7 = parcelRequire("au6h7");
module.exports = $au6h7(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

});
parcelRequire.register("au6h7", function(module, exports) {
"use strict";
var $7a2192ce832bb03f$var$cachedBundles = {};
var $7a2192ce832bb03f$var$cachedPreloads = {};
var $7a2192ce832bb03f$var$cachedPrefetches = {};
function $7a2192ce832bb03f$var$getCache(type) {
    switch(type){
        case "preload":
            return $7a2192ce832bb03f$var$cachedPreloads;
        case "prefetch":
            return $7a2192ce832bb03f$var$cachedPrefetches;
        default:
            return $7a2192ce832bb03f$var$cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = $7a2192ce832bb03f$var$getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

});


parcelRequire.register("c3KiG", function(module, exports) {

$parcel$export(module.exports, "getBundleURL", function () { return $8c79ae272d15a29b$export$bdfd709ae4826697; }, function (v) { return $8c79ae272d15a29b$export$bdfd709ae4826697 = v; });
var $8c79ae272d15a29b$export$bdfd709ae4826697;
var $8c79ae272d15a29b$export$c9e73fbda7da57b6;
var $8c79ae272d15a29b$export$5a759dc7a1cfb72a;
"use strict";
var $8c79ae272d15a29b$var$bundleURL = {};
function $8c79ae272d15a29b$var$getBundleURLCached(id) {
    var value = $8c79ae272d15a29b$var$bundleURL[id];
    if (!value) {
        value = $8c79ae272d15a29b$var$getBundleURL();
        $8c79ae272d15a29b$var$bundleURL[id] = value;
    }
    return value;
}
function $8c79ae272d15a29b$var$getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return $8c79ae272d15a29b$var$getBaseURL(matches[2]);
    }
    return "/";
}
function $8c79ae272d15a29b$var$getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function $8c79ae272d15a29b$var$getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
$8c79ae272d15a29b$export$bdfd709ae4826697 = $8c79ae272d15a29b$var$getBundleURLCached;
$8c79ae272d15a29b$export$c9e73fbda7da57b6 = $8c79ae272d15a29b$var$getBaseURL;
$8c79ae272d15a29b$export$5a759dc7a1cfb72a = $8c79ae272d15a29b$var$getOrigin;

});


parcelRequire.register("44x36", function(module, exports) {



module.exports = (parcelRequire("1LJoW"))((parcelRequire("c3KiG")).getBundleURL("1tqJB") + (parcelRequire("988ET")).resolve("frJvv")).then(function() {
    return parcelRequire("fVp6P");
});

});

parcelRequire.register("2Qf01", function(module, exports) {



module.exports = (parcelRequire("1LJoW"))((parcelRequire("c3KiG")).getBundleURL("1tqJB") + (parcelRequire("988ET")).resolve("jE0GL")).then(function() {
    return parcelRequire("8G8Uz");
});

});

parcelRequire.register("4sUAT", function(module, exports) {



module.exports = (parcelRequire("1LJoW"))((parcelRequire("c3KiG")).getBundleURL("1tqJB") + (parcelRequire("988ET")).resolve("d0Ff6")).then(function() {
    return parcelRequire("7eg8n");
});

});

var $558aae6b5c666c7f$exports = {};

(parcelRequire("988ET")).register(JSON.parse('{"1tqJB":"index.9701a867.js","2qg4L":"iso-15924.38b9250f.js","frJvv":"iso-3166.c5c390d9.js","jE0GL":"iso-639-3.0d0afcf1.js","d0Ff6":"un-m49.80863144.js","6zW2T":"index.e404ca8f.css"}'));

function $cd19ae3843c9e243$export$2e2bcd8739ae039(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}


function $2dfd95a460aa32d3$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $2dfd95a460aa32d3$export$2e2bcd8739ae039(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $2dfd95a460aa32d3$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $2dfd95a460aa32d3$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}


function $8d9b50f7471c26a4$export$2e2bcd8739ae039(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}


function $72a98b1266d4eea6$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $72a98b1266d4eea6$export$2e2bcd8739ae039(Constructor, protoProps, staticProps) {
    if (protoProps) $72a98b1266d4eea6$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $72a98b1266d4eea6$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}


function $0d1900cd201c2943$export$2e2bcd8739ae039(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}


function $0f20f77f8bf47b2f$var$setPrototypeOf(o, p) {
    $0f20f77f8bf47b2f$var$setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $0f20f77f8bf47b2f$var$setPrototypeOf(o, p);
}
function $0f20f77f8bf47b2f$export$2e2bcd8739ae039(o, p) {
    return $0f20f77f8bf47b2f$var$setPrototypeOf(o, p);
}


function $71ac165bff2ee2a5$export$2e2bcd8739ae039(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) (0, $0f20f77f8bf47b2f$export$2e2bcd8739ae039)(subClass, superClass);
}



function $36410437bb65816e$export$2e2bcd8739ae039(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            (0, $0d1900cd201c2943$export$2e2bcd8739ae039)(target, key, source[key]);
        });
    }
    return target;
}


function $2ffd55933e6b10de$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return arr;
}


function $ef4286613801585e$export$2e2bcd8739ae039(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}


function $792238f82f8e475a$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


function $55b9718bb6512ecf$export$2e2bcd8739ae039(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}


function $f5643ced8c8265c3$export$2e2bcd8739ae039(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return (0, $55b9718bb6512ecf$export$2e2bcd8739ae039)(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, $55b9718bb6512ecf$export$2e2bcd8739ae039)(o, minLen);
}


function $7c0b9cb584c10188$export$2e2bcd8739ae039(arr, i) {
    return (0, $2ffd55933e6b10de$export$2e2bcd8739ae039)(arr) || (0, $ef4286613801585e$export$2e2bcd8739ae039)(arr, i) || (0, $f5643ced8c8265c3$export$2e2bcd8739ae039)(arr, i) || (0, $792238f82f8e475a$export$2e2bcd8739ae039)();
}


function $d058b18588395c26$export$2e2bcd8739ae039(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}



function $9767ce6a4b6b4b35$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return (0, $55b9718bb6512ecf$export$2e2bcd8739ae039)(arr);
}



function $e2521d47e906fa79$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}



function $72af24a1cc374e04$export$2e2bcd8739ae039(arr) {
    return (0, $9767ce6a4b6b4b35$export$2e2bcd8739ae039)(arr) || (0, $ef4286613801585e$export$2e2bcd8739ae039)(arr) || (0, $f5643ced8c8265c3$export$2e2bcd8739ae039)(arr) || (0, $e2521d47e906fa79$export$2e2bcd8739ae039)();
}



function $9395b3d372e8e4b0$var$isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function $9395b3d372e8e4b0$var$construct(Parent, args, Class) {
    if ($9395b3d372e8e4b0$var$isNativeReflectConstruct()) $9395b3d372e8e4b0$var$construct = Reflect.construct;
    else $9395b3d372e8e4b0$var$construct = function construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) (0, $0f20f77f8bf47b2f$export$2e2bcd8739ae039)(instance, Class.prototype);
        return instance;
    };
    return $9395b3d372e8e4b0$var$construct.apply(null, arguments);
}
function $9395b3d372e8e4b0$export$2e2bcd8739ae039(Parent, args, Class) {
    return $9395b3d372e8e4b0$var$construct.apply(null, arguments);
}


function $18988aa4f4fe4be0$export$2e2bcd8739ae039(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}


function $5e4e605697ea3510$var$getPrototypeOf(o) {
    $5e4e605697ea3510$var$getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $5e4e605697ea3510$var$getPrototypeOf(o);
}
function $5e4e605697ea3510$export$2e2bcd8739ae039(o) {
    return $5e4e605697ea3510$var$getPrototypeOf(o);
}



function $8e6ebed834f15320$var$wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    $8e6ebed834f15320$var$wrapNativeSuper = function wrapNativeSuper(Class) {
        if (Class === null || !(0, $18988aa4f4fe4be0$export$2e2bcd8739ae039)(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return (0, $9395b3d372e8e4b0$export$2e2bcd8739ae039)(Class, arguments, (0, $5e4e605697ea3510$export$2e2bcd8739ae039)(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return (0, $0f20f77f8bf47b2f$export$2e2bcd8739ae039)(Wrapper, Class);
    };
    return $8e6ebed834f15320$var$wrapNativeSuper(Class);
}
function $8e6ebed834f15320$export$2e2bcd8739ae039(Class) {
    return $8e6ebed834f15320$var$wrapNativeSuper(Class);
}


function $648e565626944cc6$export$2e2bcd8739ae039() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}




function $58655e464e4baf15$export$2e2bcd8739ae039(obj) {
    "@swc/helpers - typeof";
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}


function $bee4a4cc8dc15cc8$export$2e2bcd8739ae039(self, call) {
    if (call && ((0, $58655e464e4baf15$export$2e2bcd8739ae039)(call) === "object" || typeof call === "function")) return call;
    return (0, $cd19ae3843c9e243$export$2e2bcd8739ae039)(self);
}


function $6ab935263735026d$export$2e2bcd8739ae039(Derived) {
    var hasNativeReflectConstruct = (0, $648e565626944cc6$export$2e2bcd8739ae039)();
    return function _createSuperInternal() {
        var Super = (0, $5e4e605697ea3510$export$2e2bcd8739ae039)(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = (0, $5e4e605697ea3510$export$2e2bcd8739ae039)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (0, $bee4a4cc8dc15cc8$export$2e2bcd8739ae039)(this, result);
    };
}


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
***************************************************************************** */ /* global Reflect, Promise */ 
var $a416c163d9ea00bd$var$extendStatics = function extendStatics1(d, b) {
    $a416c163d9ea00bd$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $a416c163d9ea00bd$var$extendStatics(d, b);
};
function $a416c163d9ea00bd$export$a8ba968b8961cb8a(d, b) {
    var __ = function __() {
        this.constructor = d;
    };
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $a416c163d9ea00bd$var$extendStatics(d, b);
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $a416c163d9ea00bd$export$18ce0697a983be9b = function __assign1() {
    $a416c163d9ea00bd$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $a416c163d9ea00bd$export$18ce0697a983be9b.apply(this, arguments);
};
function $a416c163d9ea00bd$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $a416c163d9ea00bd$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $a416c163d9ea00bd$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $a416c163d9ea00bd$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    var accept = function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    };
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function $a416c163d9ea00bd$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $a416c163d9ea00bd$export$6a2a36740a146cb8(x) {
    return (typeof x === "undefined" ? "undefined" : (0, $58655e464e4baf15$export$2e2bcd8739ae039)(x)) === "symbol" ? x : "".concat(x);
}
function $a416c163d9ea00bd$export$d1a06452d3489bc7(f, name, prefix) {
    if ((typeof name === "undefined" ? "undefined" : (0, $58655e464e4baf15$export$2e2bcd8739ae039)(name)) === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $a416c163d9ea00bd$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $a416c163d9ea00bd$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    var adopt = function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    };
    return new (P || (P = Promise))(function(resolve, reject) {
        var fulfilled = function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        };
        var step = function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $a416c163d9ea00bd$export$67ebef60e6f28a6(thisArg, body) {
    var verb = function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    };
    var step = function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
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
    };
    var _ = {
        label: 0,
        sent: function sent() {
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
}
var $a416c163d9ea00bd$export$45d3717a4c69092e = Object.create ? function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function get() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $a416c163d9ea00bd$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $a416c163d9ea00bd$export$45d3717a4c69092e(o, m, p);
}
function $a416c163d9ea00bd$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $a416c163d9ea00bd$export$8d051b38c9118094(o, n) {
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
function $a416c163d9ea00bd$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($a416c163d9ea00bd$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $a416c163d9ea00bd$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $a416c163d9ea00bd$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $a416c163d9ea00bd$export$10c90e4f7922046c(v) {
    return this instanceof $a416c163d9ea00bd$export$10c90e4f7922046c ? (this.v = v, this) : new $a416c163d9ea00bd$export$10c90e4f7922046c(v);
}
function $a416c163d9ea00bd$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    var verb = function verb(n) {
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
    };
    var resume = function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    };
    var step = function step(r) {
        r.value instanceof $a416c163d9ea00bd$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    };
    var fulfill = function fulfill(value) {
        resume("next", value);
    };
    var reject = function reject(value) {
        resume("throw", value);
    };
    var settle = function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    };
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
}
function $a416c163d9ea00bd$export$bbd80228419bb833(o) {
    var verb = function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $a416c163d9ea00bd$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    };
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
}
function $a416c163d9ea00bd$export$e3b29a3d6162315f(o) {
    var verb = function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    };
    var settle = function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    };
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $a416c163d9ea00bd$export$19a8beecd37a4c45 === "function" ? $a416c163d9ea00bd$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
}
function $a416c163d9ea00bd$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $a416c163d9ea00bd$var$__setModuleDefault = Object.create ? function __setModuleDefault(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function $a416c163d9ea00bd$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $a416c163d9ea00bd$export$45d3717a4c69092e(result, mod, k);
    }
    $a416c163d9ea00bd$var$__setModuleDefault(result, mod);
    return result;
}
function $a416c163d9ea00bd$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $a416c163d9ea00bd$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $a416c163d9ea00bd$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $a416c163d9ea00bd$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}





function $ef8402fb34a77b41$export$2e2bcd8739ae039(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = (0, $5e4e605697ea3510$export$2e2bcd8739ae039)(object);
        if (object === null) break;
    }
    return object;
}


function $61963834af60641e$var$get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) $61963834af60641e$var$get = Reflect.get;
    else $61963834af60641e$var$get = function get(target, property, receiver) {
        var base = (0, $ef8402fb34a77b41$export$2e2bcd8739ae039)(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(receiver || target);
        return desc.value;
    };
    return $61963834af60641e$var$get(target, property, receiver);
}
function $61963834af60641e$export$2e2bcd8739ae039(target, property, receiver) {
    return $61963834af60641e$var$get(target, property, receiver);
}






var $fb466622ca206cb9$export$ab7b06d4df4bd22c = /*#__PURE__*/ function(Map1) {
    "use strict";
    (0, $71ac165bff2ee2a5$export$2e2bcd8739ae039)(MapSet, Map1);
    var _super = (0, $6ab935263735026d$export$2e2bcd8739ae039)(MapSet);
    function MapSet() {
        (0, $8d9b50f7471c26a4$export$2e2bcd8739ae039)(this, MapSet);
        return _super.apply(this, arguments);
    }
    (0, $72a98b1266d4eea6$export$2e2bcd8739ae039)(MapSet, [
        {
            key: "set",
            value: function set(key, value) {
                (0, $61963834af60641e$export$2e2bcd8739ae039)((0, $5e4e605697ea3510$export$2e2bcd8739ae039)(MapSet.prototype), "set", this).call(this, key, value);
                return value;
            }
        }
    ]);
    return MapSet;
}((0, $8e6ebed834f15320$export$2e2bcd8739ae039)(Map));
var $fb466622ca206cb9$export$7f4c745ffacc49c3 = /*#__PURE__*/ function(WeakMap1) {
    "use strict";
    (0, $71ac165bff2ee2a5$export$2e2bcd8739ae039)(WeakMapSet, WeakMap1);
    var _super = (0, $6ab935263735026d$export$2e2bcd8739ae039)(WeakMapSet);
    function WeakMapSet() {
        (0, $8d9b50f7471c26a4$export$2e2bcd8739ae039)(this, WeakMapSet);
        return _super.apply(this, arguments);
    }
    (0, $72a98b1266d4eea6$export$2e2bcd8739ae039)(WeakMapSet, [
        {
            key: "set",
            value: function set(key, value) {
                (0, $61963834af60641e$export$2e2bcd8739ae039)((0, $5e4e605697ea3510$export$2e2bcd8739ae039)(WeakMapSet.prototype), "set", this).call(this, key, value);
                return value;
            }
        }
    ]);
    return WeakMapSet;
}((0, $8e6ebed834f15320$export$2e2bcd8739ae039)(WeakMap));




/*! (c) Andrea Giammarchi - ISC */ var $a8006ae83eebbc75$var$empty = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
var $a8006ae83eebbc75$var$elements = /<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/?)>/g;
var $a8006ae83eebbc75$var$attributes = /([^\s\\>"'=]+)\s*=\s*(['"]?)\x01/g;
var $a8006ae83eebbc75$var$holes = /[\x01\x02]/g;
var // \x01 Node.ELEMENT_NODE
// \x02 Node.ATTRIBUTE_NODE
/**
 * Given a template, find holes as both nodes and attributes and
 * return a string with holes as either comment nodes or named attributes.
 * @param {string[]} template a template literal tag array
 * @param {string} prefix prefix to use per each comment/attribute
 * @param {boolean} svg enforces self-closing tags
 * @returns {string} X/HTML with prefixed comments or attributes
 */ $a8006ae83eebbc75$export$2e2bcd8739ae039 = function(template, prefix, svg) {
    var i = 0;
    return template.join("\x01").trim().replace($a8006ae83eebbc75$var$elements, function(_, name, attrs, selfClosing) {
        var ml = name + attrs.replace($a8006ae83eebbc75$var$attributes, "\x02=$2$1").trimEnd();
        if (selfClosing.length) ml += svg || $a8006ae83eebbc75$var$empty.test(name) ? " /" : "></" + name;
        return "<" + ml + ">";
    }).replace($a8006ae83eebbc75$var$holes, function(hole) {
        return hole === "\x01" ? "<!--" + prefix + i++ + "-->" : prefix + i++;
    });
};



var $66326b5fcab7ad30$var$ELEMENT_NODE = 1;
var $66326b5fcab7ad30$var$nodeType = 111;
var $66326b5fcab7ad30$var$remove = function(param) {
    var firstChild = param.firstChild, lastChild = param.lastChild;
    var range = document.createRange();
    range.setStartAfter(firstChild);
    range.setEndAfter(lastChild);
    range.deleteContents();
    return firstChild;
};
var $66326b5fcab7ad30$export$6060d40568773aeb = function(node, operation) {
    return node.nodeType === $66326b5fcab7ad30$var$nodeType ? 1 / operation < 0 ? operation ? $66326b5fcab7ad30$var$remove(node) : node.lastChild : operation ? node.valueOf() : node.firstChild : node;
};
var $66326b5fcab7ad30$export$1f6005ddc92972ec = function(fragment) {
    var firstChild = fragment.firstChild, lastChild = fragment.lastChild;
    if (firstChild === lastChild) return lastChild || fragment;
    var childNodes = fragment.childNodes;
    var nodes = (0, $72af24a1cc374e04$export$2e2bcd8739ae039)(childNodes);
    return {
        ELEMENT_NODE: $66326b5fcab7ad30$var$ELEMENT_NODE,
        nodeType: $66326b5fcab7ad30$var$nodeType,
        firstChild: firstChild,
        lastChild: lastChild,
        valueOf: function() {
            var _fragment;
            if (childNodes.length !== nodes.length) (_fragment = fragment).append.apply(_fragment, (0, $72af24a1cc374e04$export$2e2bcd8739ae039)(nodes));
            return fragment;
        }
    };
};







var $b06b33e87b15397f$export$43bee75e5e14138e = Array.isArray;
var $b06b33e87b15397f$var$_ref = [], $b06b33e87b15397f$export$305f7d4e9d4624f2 = $b06b33e87b15397f$var$_ref.indexOf, $b06b33e87b15397f$export$58adb3bec8346d0f = $b06b33e87b15397f$var$_ref.slice;


// flag for foreign checks (slower path, fast by default)
var $d161b8088f64c577$var$useForeign = false;
var $d161b8088f64c577$export$53ed384e325652d1 = function Foreign(handler, value) {
    "use strict";
    (0, $8d9b50f7471c26a4$export$2e2bcd8739ae039)(this, Foreign);
    $d161b8088f64c577$var$useForeign = true;
    this._ = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return handler.apply(void 0, (0, $72af24a1cc374e04$export$2e2bcd8739ae039)(args).concat([
            value
        ]));
    };
};
var $d161b8088f64c577$export$74ab03834501d175 = function(handler, value) {
    return new $d161b8088f64c577$export$53ed384e325652d1(handler, value);
};
var $d161b8088f64c577$export$4d2d26490572750a = function(node) {
    return function(values) {
        for(var key in values){
            var name = key === "role" ? key : "aria-".concat(key);
            var value = values[key];
            if (value == null) node.removeAttribute(name);
            else node.setAttribute(name, value);
        }
    };
};
var $d161b8088f64c577$var$getValue = function(value) {
    return value == null ? value : value.valueOf();
};
var $d161b8088f64c577$export$af4b9a83f4b00434 = function(node, name) {
    var oldValue, orphan = true;
    var attributeNode = document.createAttributeNS(null, name);
    return function(newValue) {
        var value = $d161b8088f64c577$var$useForeign && newValue instanceof $d161b8088f64c577$export$53ed384e325652d1 ? newValue._(node, name) : $d161b8088f64c577$var$getValue(newValue);
        if (oldValue !== value) {
            if ((oldValue = value) == null) {
                if (!orphan) {
                    node.removeAttributeNode(attributeNode);
                    orphan = true;
                }
            } else {
                attributeNode.value = value;
                if (orphan) {
                    node.setAttributeNodeNS(attributeNode);
                    orphan = false;
                }
            }
        }
    };
};
var $d161b8088f64c577$export$4a21f16c33752377 = function(node, key, oldValue) {
    return function(newValue) {
        var value = !!$d161b8088f64c577$var$getValue(newValue);
        if (oldValue !== value) {
            // when IE won't be around anymore ...
            // node.toggleAttribute(key, oldValue = !!value);
            if (oldValue = value) node.setAttribute(key, "");
            else node.removeAttribute(key);
        }
    };
};
var $d161b8088f64c577$export$4051a07651545597 = function(param) {
    var dataset = param.dataset;
    return function(values) {
        for(var key in values){
            var value = values[key];
            if (value == null) delete dataset[key];
            else dataset[key] = value;
        }
    };
};
var $d161b8088f64c577$export$6cd530ed55e06764 = function(node, name) {
    var oldValue, lower, type = name.slice(2);
    if (!(name in node) && (lower = name.toLowerCase()) in node) type = lower.slice(2);
    return function(newValue) {
        var info = (0, $b06b33e87b15397f$export$43bee75e5e14138e)(newValue) ? newValue : [
            newValue,
            false
        ];
        if (oldValue !== info[0]) {
            if (oldValue) node.removeEventListener(type, oldValue, info[1]);
            if (oldValue = info[0]) node.addEventListener(type, oldValue, info[1]);
        }
    };
};
var $d161b8088f64c577$export$eff4d24c3ff7876e = function(node) {
    var oldValue;
    return function(value) {
        if (oldValue !== value) {
            oldValue = value;
            if (typeof value === "function") value(node);
            else value.current = node;
        }
    };
};
var $d161b8088f64c577$export$a74fa819f7f7dff = function(node, key) {
    return key === "dataset" ? $d161b8088f64c577$export$4051a07651545597(node) : function(value) {
        node[key] = value;
    };
};
var $d161b8088f64c577$export$6f093cfa640b7166 = function(node) {
    var oldValue;
    return function(newValue) {
        var value = $d161b8088f64c577$var$getValue(newValue);
        if (oldValue != value) {
            oldValue = value;
            node.textContent = value == null ? "" : value;
        }
    };
};


/**
 * ISC License
 *
 * Copyright (c) 2020, Andrea Giammarchi, @WebReflection
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
 * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */ /**
 * @param {Node} parentNode The container where children live
 * @param {Node[]} a The list of current/live children
 * @param {Node[]} b The list of future children
 * @param {(entry: Node, action: number) => Node} get
 * The callback invoked per each entry related DOM operation.
 * @param {Node} [before] The optional node used as anchor to insert before.
 * @returns {Node[]} The same list of future children.
 */ var $e60a12fba5be10df$export$2e2bcd8739ae039 = function(parentNode, a, b, get, before) {
    var bLength = b.length;
    var aEnd = a.length;
    var bEnd = bLength;
    var aStart = 0;
    var bStart = 0;
    var map = null;
    while(aStart < aEnd || bStart < bEnd){
        // append head, tail, or nodes in between: fast path
        if (aEnd === aStart) {
            // we could be in a situation where the rest of nodes that
            // need to be added are not at the end, and in such case
            // the node to `insertBefore`, if the index is more than 0
            // must be retrieved, otherwise it's gonna be the first item.
            var node = bEnd < bLength ? bStart ? get(b[bStart - 1], -0).nextSibling : get(b[bEnd - bStart], 0) : before;
            while(bStart < bEnd)parentNode.insertBefore(get(b[bStart++], 1), node);
        } else if (bEnd === bStart) while(aStart < aEnd){
            // remove the node only if it's unknown or not live
            if (!map || !map.has(a[aStart])) parentNode.removeChild(get(a[aStart], -1));
            aStart++;
        }
        else if (a[aStart] === b[bStart]) {
            aStart++;
            bStart++;
        } else if (a[aEnd - 1] === b[bEnd - 1]) {
            aEnd--;
            bEnd--;
        } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
            // this is a "shrink" operation that could happen in these cases:
            // [1, 2, 3, 4, 5]
            // [1, 4, 3, 2, 5]
            // or asymmetric too
            // [1, 2, 3, 4, 5]
            // [1, 2, 3, 5, 6, 4]
            var node1 = get(a[--aEnd], -1).nextSibling;
            parentNode.insertBefore(get(b[bStart++], 1), get(a[aStart++], -1).nextSibling);
            parentNode.insertBefore(get(b[--bEnd], 1), node1);
            // mark the future index as identical (yeah, it's dirty, but cheap 👍)
            // The main reason to do this, is that when a[aEnd] will be reached,
            // the loop will likely be on the fast path, as identical to b[bEnd].
            // In the best case scenario, the next loop will skip the tail,
            // but in the worst one, this node will be considered as already
            // processed, bailing out pretty quickly from the map index check
            a[aEnd] = b[bEnd];
        } else {
            // the map requires an O(bEnd - bStart) operation once
            // to store all future nodes indexes for later purposes.
            // In the worst case scenario, this is a full O(N) cost,
            // and such scenario happens at least when all nodes are different,
            // but also if both first and last items of the lists are different
            if (!map) {
                map = new Map;
                var i = bStart;
                while(i < bEnd)map.set(b[i], i++);
            }
            // if it's a future node, hence it needs some handling
            if (map.has(a[aStart])) {
                // grab the index of such node, 'cause it might have been processed
                var index = map.get(a[aStart]);
                // if it's not already processed, look on demand for the next LCS
                if (bStart < index && index < bEnd) {
                    var i1 = aStart;
                    // counts the amount of nodes that are the same in the future
                    var sequence = 1;
                    while(++i1 < aEnd && i1 < bEnd && map.get(a[i1]) === index + sequence)sequence++;
                    // effort decision here: if the sequence is longer than replaces
                    // needed to reach such sequence, which would brings again this loop
                    // to the fast path, prepend the difference before a sequence,
                    // and move only the future list index forward, so that aStart
                    // and bStart will be aligned again, hence on the fast path.
                    // An example considering aStart and bStart are both 0:
                    // a: [1, 2, 3, 4]
                    // b: [7, 1, 2, 3, 6]
                    // this would place 7 before 1 and, from that time on, 1, 2, and 3
                    // will be processed at zero cost
                    if (sequence > index - bStart) {
                        var node2 = get(a[aStart], 0);
                        while(bStart < index)parentNode.insertBefore(get(b[bStart++], 1), node2);
                    } else parentNode.replaceChild(get(b[bStart++], 1), get(a[aStart++], -1));
                } else aStart++;
            } else parentNode.removeChild(get(a[aStart++], -1));
        }
    }
    return b;
};



var $c22268b665f39187$export$43bee75e5e14138e = Array.isArray, $c22268b665f39187$var$prototype = Array.prototype;
var $c22268b665f39187$export$305f7d4e9d4624f2 = $c22268b665f39187$var$prototype.indexOf;
var $c22268b665f39187$var$_ref = new Proxy(document, {
    get: function(target, method) {
        return target[method].bind(target);
    }
}), $c22268b665f39187$var$createDocumentFragment = $c22268b665f39187$var$_ref.createDocumentFragment, $c22268b665f39187$var$createElement = $c22268b665f39187$var$_ref.createElement, $c22268b665f39187$var$createElementNS = $c22268b665f39187$var$_ref.createElementNS, $c22268b665f39187$export$b2ce9ad90858ed7a = $c22268b665f39187$var$_ref.createTextNode, $c22268b665f39187$export$469f9e892a721cc4 = $c22268b665f39187$var$_ref.createTreeWalker, $c22268b665f39187$export$ce5e1f6513119f55 = $c22268b665f39187$var$_ref.importNode;
var $c22268b665f39187$var$createHTML = function(html) {
    var template = $c22268b665f39187$var$createElement("template");
    template.innerHTML = html;
    return template.content;
};
var $c22268b665f39187$var$xml;
var $c22268b665f39187$var$createSVG = function(svg) {
    var _content;
    if (!$c22268b665f39187$var$xml) $c22268b665f39187$var$xml = $c22268b665f39187$var$createElementNS("http://www.w3.org/2000/svg", "svg");
    $c22268b665f39187$var$xml.innerHTML = svg;
    var content = $c22268b665f39187$var$createDocumentFragment();
    (_content = content).append.apply(_content, (0, $72af24a1cc374e04$export$2e2bcd8739ae039)($c22268b665f39187$var$xml.childNodes));
    return content;
};
var $c22268b665f39187$export$41c7a4cacf5bab80 = function(text, svg) {
    return svg ? $c22268b665f39187$var$createSVG(text) : $c22268b665f39187$var$createHTML(text);
};


// from a generic path, retrieves the exact targeted node
var $4de215c5f952dbc1$var$reducePath = function(param, i) {
    var childNodes = param.childNodes;
    return childNodes[i];
};
// this helper avoid code bloat around handleAnything() callback
var $4de215c5f952dbc1$var$diff = function(comment, oldNodes, newNodes) {
    return (0, $e60a12fba5be10df$export$2e2bcd8739ae039)(comment.parentNode, // TODO: there is a possible edge case where a node has been
    //       removed manually, or it was a keyed one, attached
    //       to a shared reference between renders.
    //       In this case udomdiff might fail at removing such node
    //       as its parent won't be the expected one.
    //       The best way to avoid this issue is to filter oldNodes
    //       in search of those not live, or not in the current parent
    //       anymore, but this would require both a change to uwire,
    //       exposing a parentNode from the firstChild, as example,
    //       but also a filter per each diff that should exclude nodes
    //       that are not in there, penalizing performance quite a lot.
    //       As this has been also a potential issue with domdiff,
    //       and both lighterhtml and hyperHTML might fail with this
    //       very specific edge case, I might as well document this possible
    //       "diffing shenanigan" and call it a day.
    oldNodes, newNodes, (0, $66326b5fcab7ad30$export$6060d40568773aeb), comment);
};
// if an interpolation represents a comment, the whole
// diffing will be related to such comment.
// This helper is in charge of understanding how the new
// content for such interpolation/hole should be updated
var $4de215c5f952dbc1$var$handleAnything = function(comment) {
    var oldValue, text, nodes = [];
    var anyContent = function(newValue) {
        switch(typeof newValue === "undefined" ? "undefined" : (0, $58655e464e4baf15$export$2e2bcd8739ae039)(newValue)){
            // primitives are handled as text content
            case "string":
            case "number":
            case "boolean":
                if (oldValue !== newValue) {
                    oldValue = newValue;
                    if (!text) text = (0, $c22268b665f39187$export$b2ce9ad90858ed7a)("");
                    text.data = newValue;
                    nodes = $4de215c5f952dbc1$var$diff(comment, nodes, [
                        text
                    ]);
                }
                break;
            // null, and undefined are used to cleanup previous content
            case "object":
            case "undefined":
                if (newValue == null) {
                    if (oldValue != newValue) {
                        oldValue = newValue;
                        nodes = $4de215c5f952dbc1$var$diff(comment, nodes, []);
                    }
                    break;
                }
                // arrays and nodes have a special treatment
                if ((0, $c22268b665f39187$export$43bee75e5e14138e)(newValue)) {
                    oldValue = newValue;
                    // arrays can be used to cleanup, if empty
                    if (newValue.length === 0) nodes = $4de215c5f952dbc1$var$diff(comment, nodes, []);
                    else if (typeof newValue[0] === "object") nodes = $4de215c5f952dbc1$var$diff(comment, nodes, newValue);
                    else anyContent(String(newValue));
                    break;
                }
                // if the new value is a DOM node, or a wire, and it's
                // different from the one already live, then it's diffed.
                // if the node is a fragment, it's appended once via its childNodes
                // There is no `else` here, meaning if the content
                // is not expected one, nothing happens, as easy as that.
                if (oldValue !== newValue) {
                    if ("ELEMENT_NODE" in newValue) {
                        oldValue = newValue;
                        nodes = $4de215c5f952dbc1$var$diff(comment, nodes, newValue.nodeType === 11 ? (0, $72af24a1cc374e04$export$2e2bcd8739ae039)(newValue.childNodes) : [
                            newValue
                        ]);
                    } else {
                        var value = newValue.valueOf();
                        if (value !== newValue) anyContent(value);
                    }
                }
                break;
            case "function":
                anyContent(newValue(comment));
                break;
        }
    };
    return anyContent;
};
// attributes can be:
//  * ref=${...}      for hooks and other purposes
//  * aria=${...}     for aria attributes
//  * ?boolean=${...} for boolean attributes
//  * .dataset=${...} for dataset related attributes
//  * .setter=${...}  for Custom Elements setters or nodes with setters
//                    such as buttons, details, options, select, etc
//  * @event=${...}   to explicitly handle event listeners
//  * onevent=${...}  to automatically handle event listeners
//  * generic=${...}  to handle an attribute just like an attribute
var $4de215c5f952dbc1$var$handleAttribute = function(node, name /*, svg*/ ) {
    switch(name[0]){
        case "?":
            return (0, $d161b8088f64c577$export$4a21f16c33752377)(node, name.slice(1), false);
        case ".":
            return (0, $d161b8088f64c577$export$a74fa819f7f7dff)(node, name.slice(1));
        case "@":
            return (0, $d161b8088f64c577$export$6cd530ed55e06764)(node, "on" + name.slice(1));
        case "o":
            if (name[1] === "n") return (0, $d161b8088f64c577$export$6cd530ed55e06764)(node, name);
    }
    switch(name){
        case "ref":
            return (0, $d161b8088f64c577$export$eff4d24c3ff7876e)(node);
        case "aria":
            return (0, $d161b8088f64c577$export$4d2d26490572750a)(node);
    }
    return (0, $d161b8088f64c577$export$af4b9a83f4b00434)(node, name /*, svg*/ );
};
function $4de215c5f952dbc1$export$455ce229eb3d2472(options) {
    var type = options.type, path = options.path;
    var node = path.reduceRight($4de215c5f952dbc1$var$reducePath, this);
    return type === "node" ? $4de215c5f952dbc1$var$handleAnything(node) : type === "attr" ? $4de215c5f952dbc1$var$handleAttribute(node, options.name /*, options.svg*/ ) : (0, $d161b8088f64c577$export$6f093cfa640b7166)(node);
}



// from a fragment container, create an array of indexes
// related to its child nodes, so that it's possible
// to retrieve later on exact node via reducePath
var $797cb1d4d44408e5$var$createPath = function(node) {
    var path = [];
    var parentNode = node.parentNode;
    while(parentNode){
        path.push((0, $c22268b665f39187$export$305f7d4e9d4624f2).call(parentNode.childNodes, node));
        node = parentNode;
        parentNode = node.parentNode;
    }
    return path;
};
// the prefix is used to identify either comments, attributes, or nodes
// that contain the related unique id. In the attribute cases
// isµX="attribute-name" will be used to map current X update to that
// attribute name, while comments will be like <!--isµX-->, to map
// the update to that specific comment node, hence its parent.
// style and textarea will have <!--isµX--> text content, and are handled
// directly through text-only updates.
var $797cb1d4d44408e5$var$prefix = "is\xb5";
// Template Literals are unique per scope and static, meaning a template
// should be parsed once, and once only, as it will always represent the same
// content, within the exact same amount of updates each time.
// This cache relates each template to its unique content and updates.
var $797cb1d4d44408e5$var$cache = new (0, $fb466622ca206cb9$export$7f4c745ffacc49c3);
// a RegExp that helps checking nodes that cannot contain comments
var $797cb1d4d44408e5$var$textOnly = /^(?:textarea|script|style|title|plaintext|xmp)$/;
var $797cb1d4d44408e5$export$cf6fa0bbcc94b912 = function() {
    return {
        stack: [],
        entry: null,
        //  * the template that is representing
        //  * the type of node it represents (html or svg)
        //  * the content fragment with all nodes
        //  * the list of updates per each node (template holes)
        //  * the "wired" node or fragment that will get updates
        // if the template or type are different from the previous one
        // the entry gets re-created each time
        wire: null // each rendered node represent some wired content and
    };
};
// the entry stored in the rendered node cache, and per each "hole"
var $797cb1d4d44408e5$var$createEntry = function(type, template) {
    var _mapUpdates = $797cb1d4d44408e5$var$mapUpdates(type, template), content = _mapUpdates.content, updates = _mapUpdates.updates;
    return {
        type: type,
        template: template,
        content: content,
        updates: updates,
        wire: null
    };
};
// a template is instrumented to be able to retrieve where updates are needed.
// Each unique template becomes a fragment, cloned once per each other
// operation based on the same template, i.e. data => html`<p>${data}</p>`
var $797cb1d4d44408e5$var$mapTemplate = function(type, template) {
    var svg = type === "svg";
    var text = (0, $a8006ae83eebbc75$export$2e2bcd8739ae039)(template, $797cb1d4d44408e5$var$prefix, svg);
    var content = (0, $c22268b665f39187$export$41c7a4cacf5bab80)(text, svg);
    // once instrumented and reproduced as fragment, it's crawled
    // to find out where each update is in the fragment tree
    var tw = (0, $c22268b665f39187$export$469f9e892a721cc4)(content, 129);
    var nodes = [];
    var length = template.length - 1;
    var i = 0;
    // updates are searched via unique names, linearly increased across the tree
    // <div isµ0="attr" isµ1="other"><!--isµ2--><style><!--isµ3--</style></div>
    var search = "".concat($797cb1d4d44408e5$var$prefix).concat(i);
    while(i < length){
        var node = tw.nextNode();
        // if not all updates are bound but there's nothing else to crawl
        // it means that there is something wrong with the template.
        if (!node) throw "bad template: ".concat(text);
        // if the current node is a comment, and it contains isµX
        // it means the update should take care of any content
        if (node.nodeType === 8) // The only comments to be considered are those
        // which content is exactly the same as the searched one.
        {
            if (node.data === search) {
                nodes.push({
                    type: "node",
                    path: $797cb1d4d44408e5$var$createPath(node)
                });
                search = "".concat($797cb1d4d44408e5$var$prefix).concat(++i);
            }
        } else {
            // if the node is not a comment, loop through all its attributes
            // named isµX and relate attribute updates to this node and the
            // attribute name, retrieved through node.getAttribute("isµX")
            // the isµX attribute will be removed as irrelevant for the layout
            // let svg = -1;
            while(node.hasAttribute(search)){
                nodes.push({
                    type: "attr",
                    path: $797cb1d4d44408e5$var$createPath(node),
                    name: node.getAttribute(search)
                });
                node.removeAttribute(search);
                search = "".concat($797cb1d4d44408e5$var$prefix).concat(++i);
            }
            // if the node was a style, textarea, or others, check its content
            // and if it is <!--isµX--> then update tex-only this node
            if ($797cb1d4d44408e5$var$textOnly.test(node.localName) && node.textContent.trim() === "<!--".concat(search, "-->")) {
                node.textContent = "";
                nodes.push({
                    type: "text",
                    path: $797cb1d4d44408e5$var$createPath(node)
                });
                search = "".concat($797cb1d4d44408e5$var$prefix).concat(++i);
            }
        }
    }
    // once all nodes to update, or their attributes, are known, the content
    // will be cloned in the future to represent the template, and all updates
    // related to such content retrieved right away without needing to re-crawl
    // the exact same template, and its content, more than once.
    return {
        content: content,
        nodes: nodes
    };
};
// if a template is unknown, perform the previous mapping, otherwise grab
// its details such as the fragment with all nodes, and updates info.
var $797cb1d4d44408e5$var$mapUpdates = function(type, template) {
    var _ref = $797cb1d4d44408e5$var$cache.get(template) || $797cb1d4d44408e5$var$cache.set(template, $797cb1d4d44408e5$var$mapTemplate(type, template)), content = _ref.content, nodes = _ref.nodes;
    // clone deeply the fragment
    var fragment = (0, $c22268b665f39187$export$ce5e1f6513119f55)(content, true);
    // and relate an update handler per each node that needs one
    var updates = nodes.map((0, $4de215c5f952dbc1$export$455ce229eb3d2472), fragment);
    // return the fragment and all updates to use within its nodes
    return {
        content: fragment,
        updates: updates
    };
};
var $797cb1d4d44408e5$export$ed24ab65af38c83e = function(info, param) {
    var type = param.type, template = param.template, values = param.values;
    // interpolations can contain holes and arrays, so these need
    // to be recursively discovered
    var length = $797cb1d4d44408e5$var$unrollValues(info, values);
    var entry = info.entry;
    // if the cache entry is either null or different from the template
    // and the type this unroll should resolve, create a new entry
    // assigning a new content fragment and the list of updates.
    if (!entry || entry.template !== template || entry.type !== type) info.entry = entry = $797cb1d4d44408e5$var$createEntry(type, template);
    var content = entry.content, updates = entry.updates, wire = entry.wire;
    // even if the fragment and its nodes is not live yet,
    // it is already possible to update via interpolations values.
    for(var i = 0; i < length; i++)updates[i](values[i]);
    // if the entry was new, or representing a different template or type,
    // create a new persistent entity to use during diffing.
    // This is simply a DOM node, when the template has a single container,
    // as in `<p></p>`, or a "wire" in `<p></p><p></p>` and similar cases.
    return wire || (entry.wire = (0, $66326b5fcab7ad30$export$1f6005ddc92972ec)(content));
};
// the stack retains, per each interpolation value, the cache
// related to each interpolation value, or null, if the render
// was conditional and the value is not special (Array or Hole)
var $797cb1d4d44408e5$var$unrollValues = function(param, values) {
    var stack = param.stack;
    var length = values.length;
    for(var i = 0; i < length; i++){
        var hole = values[i];
        // each Hole gets unrolled and re-assigned as value
        // so that domdiff will deal with a node/wire, not with a hole
        if (hole instanceof $797cb1d4d44408e5$export$b5329b670b24e23b) values[i] = $797cb1d4d44408e5$export$ed24ab65af38c83e(stack[i] || (stack[i] = $797cb1d4d44408e5$export$cf6fa0bbcc94b912()), hole);
        else if ((0, $c22268b665f39187$export$43bee75e5e14138e)(hole)) $797cb1d4d44408e5$var$unrollValues(stack[i] || (stack[i] = $797cb1d4d44408e5$export$cf6fa0bbcc94b912()), hole);
        else stack[i] = null;
    }
    if (length < stack.length) stack.splice(length);
    return length;
};
var $797cb1d4d44408e5$export$b5329b670b24e23b = function Hole(type, template, values) {
    "use strict";
    (0, $8d9b50f7471c26a4$export$2e2bcd8739ae039)(this, Hole);
    this.type = type;
    this.template = template;
    this.values = values;
};


// both `html` and `svg` template literal tags are polluted
// with a `for(ref[, id])` and a `node` tag too
var $b92eccbc68fb415f$var$tag = function(type) {
    // both `html` and `svg` tags have their own cache
    var keyed = new (0, $fb466622ca206cb9$export$7f4c745ffacc49c3);
    // keyed operations always re-use the same cache and unroll
    // the template and its interpolations right away
    var fixed = function(cache) {
        return function(template) {
            for(var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                values[_key - 1] = arguments[_key];
            }
            return (0, $797cb1d4d44408e5$export$ed24ab65af38c83e)(cache, {
                type: type,
                template: template,
                values: values
            });
        };
    };
    return Object.assign(// non keyed operations are recognized as instance of Hole
    // during the "unroll", recursively resolved and updated
    function(template) {
        for(var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            values[_key - 1] = arguments[_key];
        }
        return new (0, $797cb1d4d44408e5$export$b5329b670b24e23b)(type, template, values);
    }, {
        // keyed operations need a reference object, usually the parent node
        // which is showing keyed results, and optionally a unique id per each
        // related node, handy with JSON results and mutable list of objects
        // that usually carry a unique identifier
        for: function(ref, id) {
            var memo = keyed.get(ref) || keyed.set(ref, new (0, $fb466622ca206cb9$export$ab7b06d4df4bd22c));
            return memo.get(id) || memo.set(id, fixed((0, $797cb1d4d44408e5$export$cf6fa0bbcc94b912)()));
        },
        // it is possible to create one-off content out of the box via node tag
        // this might return the single created node, or a fragment with all
        // nodes present at the root level and, of course, their child nodes
        node: function(template) {
            for(var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                values[_key - 1] = arguments[_key];
            }
            return (0, $797cb1d4d44408e5$export$ed24ab65af38c83e)((0, $797cb1d4d44408e5$export$cf6fa0bbcc94b912)(), new (0, $797cb1d4d44408e5$export$b5329b670b24e23b)(type, template, values)).valueOf();
        }
    });
};
// each rendered node gets its own cache
var $b92eccbc68fb415f$var$cache = new (0, $fb466622ca206cb9$export$7f4c745ffacc49c3);
// rendering means understanding what `html` or `svg` tags returned
// and it relates a specific node to its own unique cache.
// Each time the content to render changes, the node is cleaned up
// and the new new content is appended, and if such content is a Hole
// then it's "unrolled" to resolve all its inner nodes.
var $b92eccbc68fb415f$export$b3890eb0ae9dca99 = function(where, what) {
    var hole = typeof what === "function" ? what() : what;
    var info = $b92eccbc68fb415f$var$cache.get(where) || $b92eccbc68fb415f$var$cache.set(where, (0, $797cb1d4d44408e5$export$cf6fa0bbcc94b912)());
    var wire = hole instanceof (0, $797cb1d4d44408e5$export$b5329b670b24e23b) ? (0, $797cb1d4d44408e5$export$ed24ab65af38c83e)(info, hole) : hole;
    if (wire !== info.wire) {
        info.wire = wire;
        // valueOf() simply returns the node itself, but in case it was a "wire"
        // it will eventually re-append all nodes to its fragment so that such
        // fragment can be re-appended many times in a meaningful way
        // (wires are basically persistent fragments facades with special behavior)
        where.replaceChildren(wire.valueOf());
    }
    return where;
};
var $b92eccbc68fb415f$export$c0bb0b647f701bb5 = $b92eccbc68fb415f$var$tag("html");
var $b92eccbc68fb415f$export$7ed1367e7fa1ad68 = $b92eccbc68fb415f$var$tag("svg");


var $3beb6f34c7ab3a9d$export$3f32c2013f0dcc1e = !1;
var $3beb6f34c7ab3a9d$export$4ac27c46a1367c = !0;
var $3beb6f34c7ab3a9d$export$611d59e6a7411fb0 = !0;
var $3beb6f34c7ab3a9d$export$9b5b3264e3a20190 = !0;
var $3beb6f34c7ab3a9d$export$b9a1c33bbc086c14 = !0;
var $3beb6f34c7ab3a9d$export$ac906da4cb8b9687 = !0;
var $3beb6f34c7ab3a9d$export$2583819e7f269b8e = !0;
var $3beb6f34c7ab3a9d$export$e47b7068d9a8b7a8 = !0;
var $3beb6f34c7ab3a9d$export$401bee6d54371a40 = !0;
var $3beb6f34c7ab3a9d$export$b343c2997e12a5fc = !0;
var $3beb6f34c7ab3a9d$export$eb77c0361f1e4495 = !0;


function $ecef01d6aa10c6ed$export$80e70052c6153de() {
    this.cache = null, this.matcher = null, this.stemmer = null, this.filter = null;
}
$ecef01d6aa10c6ed$export$80e70052c6153de.prototype.add, $ecef01d6aa10c6ed$export$80e70052c6153de.prototype.append, $ecef01d6aa10c6ed$export$80e70052c6153de.prototype.search, $ecef01d6aa10c6ed$export$80e70052c6153de.prototype.update, $ecef01d6aa10c6ed$export$80e70052c6153de.prototype.remove;
function $ecef01d6aa10c6ed$export$567ed11f878acad9() {
    this.field = null, this.index = null;
}




function $9fea3b920378be77$export$952e4699767d54aa(a, b) {
    return "undefined" == typeof a ? b : a;
}
function $9fea3b920378be77$export$ef70783d1acb931a(a) {
    var b = Array(a);
    for(var c = 0; c < a; c++)b[c] = $9fea3b920378be77$export$5c30cbca21b2d575();
    return b;
}
function $9fea3b920378be77$export$841a3b58e9c90461(a) {
    var b = Array(a);
    for(var c = 0; c < a; c++)b[c] = [];
    return b;
}
function $9fea3b920378be77$export$8848baa1b2a3aeb6(a) {
    return Object.keys(a);
}
function $9fea3b920378be77$export$5c30cbca21b2d575() {
    return Object.create(null);
}
function $9fea3b920378be77$export$ee1b3e54f0441b22(a) {
    return [].concat.apply([], a);
}
function $9fea3b920378be77$export$3b235e93dd1df04f(c, a) {
    return a.length - c.length;
}
function $9fea3b920378be77$export$e11d765514e26475(a) {
    return a.constructor === Array;
}
function $9fea3b920378be77$export$2a124c24c597fe41(a) {
    return "string" == typeof a;
}
function $9fea3b920378be77$export$167528a9b5133c2f(a) {
    return "object" == typeof a;
}
function $9fea3b920378be77$export$b451353ebd749597(a) {
    return "function" == typeof a;
}


function $7d922b49ee491b5b$export$43f28b24e1eb8181(a, b, c, d) {
    if (a && (b && (a = $7d922b49ee491b5b$export$77ad94ebf1c2b9ed(a, b)), this.matcher && (a = $7d922b49ee491b5b$export$77ad94ebf1c2b9ed(a, this.matcher)), this.stemmer && 1 < a.length && (a = $7d922b49ee491b5b$export$77ad94ebf1c2b9ed(a, this.stemmer)), d && 1 < a.length && (a = $7d922b49ee491b5b$export$ec45920981e0ca9b(a)), c || "" === c)) {
        var _$b = a.split(c);
        return this.filter ? $7d922b49ee491b5b$export$3dea766d36a8935f(_$b, this.filter) : _$b;
    }
    return a;
}
var $7d922b49ee491b5b$export$82f1048369ca8b36 = RegExp("[\\p{Z}\\p{S}\\p{P}\\p{C}]+", "u");
var $7d922b49ee491b5b$var$regex_normalize = /[\u0300-\u036f]/g;
function $7d922b49ee491b5b$export$a3295358bff77e(a) {
    return a.normalize && (a = a.normalize("NFD").replace($7d922b49ee491b5b$var$regex_normalize, "")), a;
}
function $7d922b49ee491b5b$export$af393a7932753a5a(a) {
    var b = (0, $9fea3b920378be77$export$5c30cbca21b2d575)();
    for(var c = 0, d = a.length; c < d; c++)b[a[c]] = 1;
    return b;
}
function $7d922b49ee491b5b$export$3f58655d2a05f980(a, b) {
    var c = (0, $9fea3b920378be77$export$8848baa1b2a3aeb6)(a), d = c.length, e = [];
    var f = "", g = 0;
    for(var h, j, k = 0; k < d; k++)h = c[k], j = a[h], j ? (e[g++] = $7d922b49ee491b5b$export$17b0f4d84dbfeedf(b ? "(?!\\b)" + h + "(\\b|_)" : h), e[g++] = j) : f += (f ? "|" : "") + h;
    return f && (e[g++] = $7d922b49ee491b5b$export$17b0f4d84dbfeedf(b ? "(?!\\b)(" + f + ")(\\b|_)" : "(" + f + ")"), e[g] = ""), e;
}
function $7d922b49ee491b5b$export$77ad94ebf1c2b9ed(a, b) {
    for(var c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2);
    return a;
}
function $7d922b49ee491b5b$export$17b0f4d84dbfeedf(a) {
    return new RegExp(a, "g");
}
function $7d922b49ee491b5b$export$ec45920981e0ca9b(a) {
    var b = "", c = "";
    for(var d, e = 0, f = a.length; e < f; e++)(d = a[e]) !== c && (b += c = d);
    return b;
}
function $7d922b49ee491b5b$export$3dea766d36a8935f(a, b) {
    var c = a.length, d = [];
    for(var e = 0, f = 0; e < c; e++){
        var c1 = a[e];
        c1 && !b[c1] && (d[f++] = c1);
    }
    return d;
}


var $ebc853376abcece3$export$270f8a265cdb7a58 = !1;
var $ebc853376abcece3$export$660b2ee2d4fb4eff = "";
var $ebc853376abcece3$export$2e2bcd8739ae039 = {
    encode: $ebc853376abcece3$export$c564cdbbe6da493,
    rtl: !1,
    tokenize: ""
};
function $ebc853376abcece3$export$c564cdbbe6da493(a) {
    return (0, $7d922b49ee491b5b$export$43f28b24e1eb8181).call(this, ("" + a).toLowerCase(), !1, (0, $7d922b49ee491b5b$export$82f1048369ca8b36), !1);
}




var $2d6a78c1e320f65a$export$240dd687449f055c = {};
var $2d6a78c1e320f65a$export$c63ff56643f09e5d = {};
function $2d6a78c1e320f65a$export$69dee88f152bef8d(a, b) {
    $2d6a78c1e320f65a$export$c63ff56643f09e5d[a] = b;
}
function $2d6a78c1e320f65a$export$b5daeabefb05ee6b(a, b) {
    $2d6a78c1e320f65a$export$240dd687449f055c[a] = b;
}




function $fe691fb8f7f14410$export$2e2bcd8739ae039(a) {
    $fe691fb8f7f14410$var$register(a, "add"), $fe691fb8f7f14410$var$register(a, "append"), $fe691fb8f7f14410$var$register(a, "search"), $fe691fb8f7f14410$var$register(a, "update"), $fe691fb8f7f14410$var$register(a, "remove");
}
function $fe691fb8f7f14410$var$register(a, b) {
    a[b + "Async"] = function() {
        var _$a = this, c = arguments, d = c[c.length - 1];
        var e;
        (0, $9fea3b920378be77$export$b451353ebd749597)(d) && (e = d, delete c[c.length - 1]);
        var f = new Promise(function(d) {
            setTimeout(function() {
                _$a.async = !0;
                var e = _$a[b].apply(_$a, c);
                _$a.async = !1, d(e);
            });
        });
        return e ? (f.then(e), this) : f;
    };
}



function $81c6108850478b1f$export$1f4807a235930d45(a, b, c, d) {
    var e = a.length;
    var f, g, h = [], i = 0;
    d && (d = []);
    for(var j = e - 1; 0 <= j; j--){
        var k = a[j], l = k.length, m = (0, $9fea3b920378be77$export$5c30cbca21b2d575)();
        var n = !f;
        for(var _$a = 0; _$a < l; _$a++){
            var l1 = k[_$a], o = l1.length;
            if (o) for(var _$a1 = void 0, k1 = void 0, p = 0; p < o; p++)if (k1 = l1[p], f) {
                if (f[k1]) {
                    if (!j) {
                        if (c) c--;
                        else if (h[i++] = k1, i === b) return h;
                    }
                    (j || d) && (m[k1] = 1), n = !0;
                }
                if (d && (_$a1 = (g[k1] || 0) + 1, g[k1] = _$a1, _$a1 < e)) {
                    var _$b = d[_$a1 - 2] || (d[_$a1 - 2] = []);
                    _$b[_$b.length] = k1;
                }
            } else m[k1] = 1;
        }
        if (d) f || (g = m);
        else if (!n) return [];
        f = m;
    }
    if (d) for(var _$a2, e1, g1 = d.length - 1; 0 <= g1; g1--){
        _$a2 = d[g1], e1 = _$a2.length;
        for(var _$d = void 0, g2 = 0; g2 < e1; g2++)if (_$d = _$a2[g2], !f[_$d]) {
            if (c) c--;
            else if (h[i++] = _$d, i === b) return h;
            f[_$d] = 1;
        }
    }
    return h;
}
function $81c6108850478b1f$export$b1044624651dae94(a, b) {
    var c = (0, $9fea3b920378be77$export$5c30cbca21b2d575)(), d = (0, $9fea3b920378be77$export$5c30cbca21b2d575)(), e = [];
    for(var d1 = 0; d1 < a.length; d1++)c[a[d1]] = 1;
    for(var f, g = 0; g < b.length; g++){
        f = b[g];
        for(var _$a = void 0, _$b = 0; _$b < f.length; _$b++)_$a = f[_$b], c[_$a] && !d[_$a] && (d[_$a] = 1, e[e.length] = _$a);
    }
    return e;
}




function $f796cb59f22a1a66$var$CacheClass(a) {
    this.limit = !0 !== a && a, this.cache = (0, $9fea3b920378be77$export$5c30cbca21b2d575)(), this.queue = [];
}
var $f796cb59f22a1a66$export$2e2bcd8739ae039 = $f796cb59f22a1a66$var$CacheClass;
function $f796cb59f22a1a66$export$393c0f7a9d25469(a, b, c) {
    (0, $9fea3b920378be77$export$167528a9b5133c2f)(a) && (a = a.query);
    var d = this.cache.get(a);
    return d || (d = this.search(a, b, c), this.cache.set(a, d)), d;
}
$f796cb59f22a1a66$var$CacheClass.prototype.set = function(a, b) {
    if (!this.cache[a]) {
        var _$b = this.queue.length;
        _$b === this.limit ? delete this.cache[this.queue[_$b - 1]] : _$b++;
        for(var _$a = _$b - 1; 0 < _$a; _$a--)this.queue[_$a] = this.queue[_$a - 1];
        this.queue[0] = a;
    }
    this.cache[a] = b;
}, $f796cb59f22a1a66$var$CacheClass.prototype.get = function(a) {
    var b = this.cache[a];
    if (this.limit && b) {
        var b1 = this.queue.indexOf(a);
        if (b1) {
            var _$a = this.queue[b1 - 1];
            this.queue[b1 - 1] = this.queue[b1], this.queue[b1] = _$a;
        }
    }
    return b;
}, $f796cb59f22a1a66$var$CacheClass.prototype.del = function(a) {
    for(var b, c, d = 0; d < this.queue.length; d++)c = this.queue[d], b = this.cache[c], b.includes(a) && (this.queue.splice(d--, 1), delete this.cache[c]);
};




var $ac527f7b15d5fbd0$var$preset = {
    memory: {
        charset: "latin:extra",
        resolution: 3,
        minlength: 4,
        fastupdate: !1
    },
    performance: {
        resolution: 3,
        minlength: 3,
        optimize: !1,
        context: {
            depth: 2,
            resolution: 1
        }
    },
    match: {
        charset: "latin:extra",
        tokenize: "reverse"
    },
    score: {
        charset: "latin:advanced",
        resolution: 20,
        minlength: 3,
        context: {
            depth: 3,
            resolution: 9
        }
    },
    default: {}
};
function $ac527f7b15d5fbd0$export$2e2bcd8739ae039(a) {
    if ((0, $9fea3b920378be77$export$2a124c24c597fe41)(a)) (0, $3beb6f34c7ab3a9d$export$3f32c2013f0dcc1e) && !$ac527f7b15d5fbd0$var$preset[a] && console.warn("Preset not found: " + a), a = $ac527f7b15d5fbd0$var$preset[a];
    else {
        var b = a.preset;
        b && ((0, $3beb6f34c7ab3a9d$export$3f32c2013f0dcc1e) && !b[b] && console.warn("Preset not found: " + b), a = Object.assign({}, b[b], a));
    }
    return a;
}




function $18671372fd72c2eb$var$async(a, b, c, d, e, f, g) {
    setTimeout(function() {
        var h = a(c ? c + "." + d : d, JSON.stringify(g));
        h && h.then ? h.then(function() {
            b.export(a, b, c, e, f + 1);
        }) : b.export(a, b, c, e, f + 1);
    });
}
function $18671372fd72c2eb$export$66227b8d5ad2b105(a, b, c, d, e) {
    var f, g;
    switch(e || (e = 0)){
        case 0:
            if (f = "reg", this.fastupdate) for(var _$a in g = (0, $9fea3b920378be77$export$5c30cbca21b2d575)(), this.register)g[_$a] = 1;
            else g = this.register;
            break;
        case 1:
            f = "cfg", g = {
                doc: 0,
                opt: this.optimize ? 1 : 0
            };
            break;
        case 2:
            f = "map", g = this.map;
            break;
        case 3:
            f = "ctx", g = this.ctx;
            break;
        default:
            return;
    }
    return $18671372fd72c2eb$var$async(a, b || this, c, f, d, e, g), !0;
}
function $18671372fd72c2eb$export$c4d30ad25f71cbb5(a, b) {
    b && ((0, $9fea3b920378be77$export$2a124c24c597fe41)(b) && (b = JSON.parse(b)), "cfg" === a ? this.optimize = !!b.opt : "reg" === a ? (this.fastupdate = !1, this.register = b) : "map" === a ? this.map = b : "ctx" === a && (this.ctx = b));
}
function $18671372fd72c2eb$export$c839107fc6c8e852(a, b, c, d, e) {
    if (e || (e = 0), d || (d = 0), d < this.field.length) {
        var _$c = this.field[d], f = this.index[_$c];
        b = this, setTimeout(function() {
            f.export(a, b, e ? _$c : "", d, e++) || (d++, e = 1, b.export(a, b, _$c, d, e));
        });
    } else {
        var _$b, f1;
        switch(e){
            case 1:
                _$b = "tag", f1 = this.tagindex;
                break;
            case 2:
                _$b = "store", f1 = this.store;
                break;
            default:
                return;
        }
        $18671372fd72c2eb$var$async(a, this, c, _$b, d, e, f1);
    }
}
function $18671372fd72c2eb$export$c03643075c5562f3(a, b) {
    if (b) switch((0, $9fea3b920378be77$export$2a124c24c597fe41)(b) && (b = JSON.parse(b)), a){
        case "tag":
            this.tagindex = b;
            break;
        case "reg":
            this.fastupdate = !1, this.register = b;
            for(var _$a, c = 0; c < this.field.length; c++)_$a = this.index[this.field[c]], _$a.register = b, _$a.fastupdate = !1;
            break;
        case "store":
            this.store = b;
            break;
        default:
            a = a.split(".");
            var c1 = a[0];
            a = a[1], c1 && a && this.index[c1].import(a, b);
    }
}


function $0354d21a2b6a4db7$var$Index(a, b) {
    if (!(this instanceof $0354d21a2b6a4db7$var$Index)) return new $0354d21a2b6a4db7$var$Index(a);
    var c, d, e;
    a ? ((0, $3beb6f34c7ab3a9d$export$9b5b3264e3a20190) && (a = (0, $ac527f7b15d5fbd0$export$2e2bcd8739ae039)(a)), c = a.charset, d = a.lang, (0, $9fea3b920378be77$export$2a124c24c597fe41)(c) && (-1 === c.indexOf(":") && (c += ":default"), c = (0, $2d6a78c1e320f65a$export$c63ff56643f09e5d)[c]), (0, $9fea3b920378be77$export$2a124c24c597fe41)(d) && (d = (0, $2d6a78c1e320f65a$export$240dd687449f055c)[d])) : a = {};
    var f, g, h = a.context || {};
    this.encode = a.encode || c && c.encode || (0, $ebc853376abcece3$export$c564cdbbe6da493), this.register = b || (0, $9fea3b920378be77$export$5c30cbca21b2d575)(), this.resolution = f = a.resolution || 9, this.tokenize = e = c && c.tokenize || a.tokenize || "strict", this.depth = "strict" === e && h.depth, this.bidirectional = (0, $9fea3b920378be77$export$952e4699767d54aa)(h.bidirectional, !0), this.optimize = g = (0, $9fea3b920378be77$export$952e4699767d54aa)(a.optimize, !0), this.fastupdate = (0, $9fea3b920378be77$export$952e4699767d54aa)(a.fastupdate, !0), this.minlength = a.minlength || 1, this.boost = a.boost, this.map = g ? (0, $9fea3b920378be77$export$ef70783d1acb931a)(f) : (0, $9fea3b920378be77$export$5c30cbca21b2d575)(), this.resolution_ctx = f = h.resolution || 1, this.ctx = g ? (0, $9fea3b920378be77$export$ef70783d1acb931a)(f) : (0, $9fea3b920378be77$export$5c30cbca21b2d575)(), this.rtl = c && c.rtl || a.rtl, this.matcher = (e = a.matcher || d && d.matcher) && (0, $7d922b49ee491b5b$export$3f58655d2a05f980)(e, !1), this.stemmer = (e = a.stemmer || d && d.stemmer) && (0, $7d922b49ee491b5b$export$3f58655d2a05f980)(e, !0), this.filter = (e = a.filter || d && d.filter) && (0, $7d922b49ee491b5b$export$af393a7932753a5a)(e), (0, $3beb6f34c7ab3a9d$export$b9a1c33bbc086c14) && (this.cache = (e = a.cache) && new (0, $f796cb59f22a1a66$export$2e2bcd8739ae039)(e));
}
var $0354d21a2b6a4db7$export$2e2bcd8739ae039 = $0354d21a2b6a4db7$var$Index;
$0354d21a2b6a4db7$var$Index.prototype.append = function(a, b) {
    return this.add(a, b, !0);
}, $0354d21a2b6a4db7$var$Index.prototype.add = function(a, b, c, d) {
    if (b && (a || 0 === a)) {
        if (!d && !c && this.register[a]) return this.update(a, b);
        b = this.encode("" + b);
        var e = b.length;
        if (e) {
            var _$d = (0, $9fea3b920378be77$export$5c30cbca21b2d575)(), f = (0, $9fea3b920378be77$export$5c30cbca21b2d575)(), g = this.depth, h = this.resolution;
            for(var j = 0; j < e; j++){
                var i = b[this.rtl ? e - 1 - j : j], k = i.length;
                if (i && k >= this.minlength && (g || !f[i])) {
                    var l = $0354d21a2b6a4db7$var$get_score(h, e, j), m = "";
                    switch(this.tokenize){
                        case "full":
                            if (2 < k) {
                                for(var _$b = 0; _$b < k; _$b++)for(var _$d1 = k; _$d1 > _$b; _$d1--)if (_$d1 - _$b >= this.minlength) {
                                    var g1 = $0354d21a2b6a4db7$var$get_score(h, e, j, k, _$b);
                                    m = i.substring(_$b, _$d1), this.push_index(f, m, g1, a, c);
                                }
                                break;
                            }
                        case "reverse":
                            if (1 < k) {
                                for(var _$b1 = k - 1; 0 < _$b1; _$b1--)if (m = i[_$b1] + m, m.length >= this.minlength) {
                                    var _$d2 = $0354d21a2b6a4db7$var$get_score(h, e, j, k, _$b1);
                                    this.push_index(f, m, _$d2, a, c);
                                }
                                m = "";
                            }
                        case "forward":
                            if (1 < k) {
                                for(var _$b2 = 0; _$b2 < k; _$b2++)m += i[_$b2], m.length >= this.minlength && this.push_index(f, m, l, a, c);
                                break;
                            }
                        default:
                            if (this.boost && (l = Math.min(0 | l / this.boost(b, i, j), h - 1)), this.push_index(f, i, l, a, c), g && 1 < e && j < e - 1) {
                                var f1 = (0, $9fea3b920378be77$export$5c30cbca21b2d575)(), h1 = this.resolution_ctx, k1 = i, l1 = Math.min(g + 1, e - j);
                                f1[k1] = 1;
                                for(var g2 = 1; g2 < l1; g2++)if (i = b[this.rtl ? e - 1 - j - g2 : j + g2], i && i.length >= this.minlength && !f1[i]) {
                                    f1[i] = 1;
                                    var _$b3 = $0354d21a2b6a4db7$var$get_score(h1 + (e / 2 > h1 ? 0 : 1), e, j, l1 - 1, g2 - 1), m1 = this.bidirectional && i > k1;
                                    this.push_index(_$d, m1 ? k1 : i, _$b3, a, c, m1 ? i : k1);
                                }
                            }
                    }
                }
            }
            this.fastupdate || (this.register[a] = 1);
        }
    }
    return this;
};
function $0354d21a2b6a4db7$var$get_score(a, b, c, d, e) {
    return c && 1 < a ? b + (d || 0) <= a ? c + (e || 0) : 0 | (a - 1) / (b + (d || 0)) * (c + (e || 0)) + 1 : 0;
}
$0354d21a2b6a4db7$var$Index.prototype.push_index = function(a, b, c, d, e, f) {
    var g = f ? this.ctx : this.map;
    if ((!a[b] || f && !a[b][f]) && (this.optimize && (g = g[c]), f ? (a = a[b] || (a[b] = (0, $9fea3b920378be77$export$5c30cbca21b2d575)()), a[f] = 1, g = g[f] || (g[f] = (0, $9fea3b920378be77$export$5c30cbca21b2d575)())) : a[b] = 1, g = g[b] || (g[b] = []), this.optimize || (g = g[c] || (g[c] = [])), (!e || !g.includes(d)) && (g[g.length] = d, this.fastupdate))) {
        var _$a = this.register[d] || (this.register[d] = []);
        _$a[_$a.length] = g;
    }
}, $0354d21a2b6a4db7$var$Index.prototype.search = function(a, b, c) {
    c || (!b && (0, $9fea3b920378be77$export$167528a9b5133c2f)(a) ? (c = a, a = c.query) : (0, $9fea3b920378be77$export$167528a9b5133c2f)(b) && (c = b));
    var d, e, f, g = [], h = 0;
    if (c && (a = c.query || a, b = c.limit, h = c.offset || 0, e = c.context, f = (0, $3beb6f34c7ab3a9d$export$401bee6d54371a40) && c.suggest), a && (a = this.encode("" + a), d = a.length, 1 < d)) {
        var _$b = (0, $9fea3b920378be77$export$5c30cbca21b2d575)(), _$c = [];
        for(var e1, h1 = 0, i = 0; h1 < d; h1++)if (e1 = a[h1], e1 && e1.length >= this.minlength && !_$b[e1]) {
            if (!this.optimize && !f && !this.map[e1]) return g;
            _$c[i++] = e1, _$b[e1] = 1;
        }
        a = _$c, d = a.length;
    }
    if (!d) return g;
    b || (b = 100);
    var i1, j = this.depth && 1 < d && !1 !== e, k = 0;
    j ? (i1 = a[0], k = 1) : 1 < d && a.sort((0, $9fea3b920378be77$export$3b235e93dd1df04f));
    for(var e2, l; k < d; k++){
        if (l = a[k], j ? (e2 = this.add_result(g, f, b, h, 2 === d, l, i1), (!f || !1 !== e2 || !g.length) && (i1 = l)) : e2 = this.add_result(g, f, b, h, 1 === d, l), e2) return e2;
        if (f && k == d - 1) {
            var _$a = g.length;
            if (!_$a) {
                if (j) {
                    j = 0, k = -1;
                    continue;
                }
                return g;
            }
            if (1 === _$a) return $0354d21a2b6a4db7$var$single_result(g[0], b, h);
        }
    }
    return (0, $81c6108850478b1f$export$1f4807a235930d45)(g, b, h, f);
}, $0354d21a2b6a4db7$var$Index.prototype.add_result = function(a, b, c, d, e, f, g) {
    var h = [], i = g ? this.ctx : this.map;
    if (this.optimize || (i = $0354d21a2b6a4db7$var$get_array(i, f, g, this.bidirectional)), i) {
        var _$b = 0;
        var j = Math.min(i.length, g ? this.resolution_ctx : this.resolution);
        for(var _$a, k, l = 0, m = 0; l < j && (_$a = i[l], !(_$a && (this.optimize && (_$a = $0354d21a2b6a4db7$var$get_array(_$a, f, g, this.bidirectional)), d && _$a && e && (k = _$a.length, k <= d ? (d -= k, _$a = null) : (_$a = _$a.slice(d), d = 0)), _$a && (h[_$b++] = _$a, e && (m += _$a.length, m >= c))))); l++);
        if (_$b) return e ? $0354d21a2b6a4db7$var$single_result(h, c, 0) : void (a[a.length] = h);
    }
    return !b && h;
};
function $0354d21a2b6a4db7$var$single_result(a, b, c) {
    return a = 1 === a.length ? a[0] : (0, $9fea3b920378be77$export$ee1b3e54f0441b22)(a), c || a.length > b ? a.slice(c, c + b) : a;
}
function $0354d21a2b6a4db7$var$get_array(a, b, c, d) {
    if (c) {
        var e = d && b > c;
        a = a[e ? b : c], a = a && a[e ? c : b];
    } else a = a[b];
    return a;
}
$0354d21a2b6a4db7$var$Index.prototype.contain = function(a) {
    return !!this.register[a];
}, $0354d21a2b6a4db7$var$Index.prototype.update = function(a, b) {
    return this.remove(a).add(a, b);
}, $0354d21a2b6a4db7$var$Index.prototype.remove = function(a, b) {
    var c = this.register[a];
    if (c) {
        if (this.fastupdate) for(var _$b, d = 0; d < c.length; d++)_$b = c[d], _$b.splice(_$b.indexOf(a), 1);
        else $0354d21a2b6a4db7$var$remove_index(this.map, a, this.resolution, this.optimize), this.depth && $0354d21a2b6a4db7$var$remove_index(this.ctx, a, this.resolution_ctx, this.optimize);
        b || delete this.register[a], (0, $3beb6f34c7ab3a9d$export$b9a1c33bbc086c14) && this.cache && this.cache.del(a);
    }
    return this;
};
function $0354d21a2b6a4db7$var$remove_index(a, b, c, d, e) {
    var f = 0;
    if (!(0, $9fea3b920378be77$export$e11d765514e26475)(a)) for(var g in a)f = $0354d21a2b6a4db7$var$remove_index(a[g], b, c, d, e), f || delete a[g];
    else if (!e) {
        e = Math.min(a.length, c);
        for(var g1, h = 0; h < e; h++)g1 = a[h], g1 && (f = $0354d21a2b6a4db7$var$remove_index(g1, b, c, d, e), !d && !f && delete a[h]);
    } else {
        var _$c = a.indexOf(b);
        -1 === _$c ? f++ : 1 < a.length && (a.splice(_$c, 1), f++);
    }
    return f;
}
(0, $3beb6f34c7ab3a9d$export$b9a1c33bbc086c14) && ($0354d21a2b6a4db7$var$Index.prototype.searchCache = (0, $f796cb59f22a1a66$export$393c0f7a9d25469)), (0, $3beb6f34c7ab3a9d$export$b343c2997e12a5fc) && ($0354d21a2b6a4db7$var$Index.prototype.export = (0, $18671372fd72c2eb$export$66227b8d5ad2b105), $0354d21a2b6a4db7$var$Index.prototype.import = (0, $18671372fd72c2eb$export$c4d30ad25f71cbb5)), (0, $3beb6f34c7ab3a9d$export$ac906da4cb8b9687) && (0, $fe691fb8f7f14410$export$2e2bcd8739ae039)($0354d21a2b6a4db7$var$Index.prototype);




var $c1422f80caf7519f$export$270f8a265cdb7a58 = !1;
var $c1422f80caf7519f$export$660b2ee2d4fb4eff = "";
var $c1422f80caf7519f$export$2e2bcd8739ae039 = {
    encode: $c1422f80caf7519f$export$c564cdbbe6da493,
    rtl: !1,
    tokenize: ""
};
var $c1422f80caf7519f$var$regex_a = (0, $7d922b49ee491b5b$export$17b0f4d84dbfeedf)("[\xe0\xe1\xe2\xe3\xe4\xe5]"), $c1422f80caf7519f$var$regex_e = (0, $7d922b49ee491b5b$export$17b0f4d84dbfeedf)("[\xe8\xe9\xea\xeb]"), $c1422f80caf7519f$var$regex_i = (0, $7d922b49ee491b5b$export$17b0f4d84dbfeedf)("[\xec\xed\xee\xef]"), $c1422f80caf7519f$var$regex_o = (0, $7d922b49ee491b5b$export$17b0f4d84dbfeedf)("[\xf2\xf3\xf4\xf5\xf6ő]"), $c1422f80caf7519f$var$regex_u = (0, $7d922b49ee491b5b$export$17b0f4d84dbfeedf)("[\xf9\xfa\xfb\xfcű]"), $c1422f80caf7519f$var$regex_y = (0, $7d922b49ee491b5b$export$17b0f4d84dbfeedf)("[\xfdŷ\xff]"), $c1422f80caf7519f$var$regex_n = (0, $7d922b49ee491b5b$export$17b0f4d84dbfeedf)("\xf1"), $c1422f80caf7519f$var$regex_c = (0, $7d922b49ee491b5b$export$17b0f4d84dbfeedf)("[\xe7c]"), $c1422f80caf7519f$var$regex_s = (0, $7d922b49ee491b5b$export$17b0f4d84dbfeedf)("\xdf"), $c1422f80caf7519f$var$regex_and = (0, $7d922b49ee491b5b$export$17b0f4d84dbfeedf)(" & "), $c1422f80caf7519f$var$pairs = [
    $c1422f80caf7519f$var$regex_a,
    "a",
    $c1422f80caf7519f$var$regex_e,
    "e",
    $c1422f80caf7519f$var$regex_i,
    "i",
    $c1422f80caf7519f$var$regex_o,
    "o",
    $c1422f80caf7519f$var$regex_u,
    "u",
    $c1422f80caf7519f$var$regex_y,
    "y",
    $c1422f80caf7519f$var$regex_n,
    "n",
    $c1422f80caf7519f$var$regex_c,
    "k",
    $c1422f80caf7519f$var$regex_s,
    "s",
    $c1422f80caf7519f$var$regex_and,
    " and "
];
function $c1422f80caf7519f$export$c564cdbbe6da493(a) {
    return a = "" + a, (0, $7d922b49ee491b5b$export$43f28b24e1eb8181).call(this, (0, $7d922b49ee491b5b$export$a3295358bff77e)(a).toLowerCase(), !a.normalize && $c1422f80caf7519f$var$pairs, (0, $7d922b49ee491b5b$export$82f1048369ca8b36), !1);
}


/**
 * May be used for filtering array's.
 * @param value 
 * @param index 
 * @param self 
 */ var $e28409dee2b0de01$export$36ea2e897413bf91 = function() {
    var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return function(value, index, self) {
        if (key) {
            var item = self.find(function(inner) {
                return inner[key] === value[key];
            });
            return self.indexOf(item) === index && value;
        }
        return self.indexOf(value) === index && value;
    };
};



var $918b76a580930af9$var$iconMap = {
    x: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>',
    gearFill: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16"><path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/></svg>',
    chevronExpand: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-expand" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/></svg>',
    chevronContract: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-contract" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M3.646 13.854a.5.5 0 0 0 .708 0L8 10.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zm0-11.708a.5.5 0 0 1 .708 0L8 5.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708z"/></svg>',
    plus: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>'
};
var $918b76a580930af9$export$1ca1ec8b29a4ce27 = function(name) {
    return new (0, $797cb1d4d44408e5$export$b5329b670b24e23b)("html", [
        $918b76a580930af9$var$iconMap[name].replace('class="', 'class="icon ')
    ], []);
};


var $05e35bdb95590ee6$export$c7dde40abc42a582 = function(options, value) {
    var _options_find;
    return (_options_find = options.find(function(option) {
        return option[0] === value;
    })) === null || _options_find === void 0 //?.split(' (')?.[0]
     ? void 0 : _options_find[1];
};


// This is a cache of in-flight requests. Each request key maps to an
// array of Promises. When the request resolves, each promise in the
// array is pushed to.
var $35d1d0d7113d247f$var$requests = {};
function $35d1d0d7113d247f$export$c3c960ad782dc3a0() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref$url = _ref.url, url = _ref$url === undefined ? "" : _ref$url, _ref$method = _ref.method, method = _ref$method === undefined ? "" : _ref$method, _ref$responseType = _ref.responseType, responseType = _ref$responseType === undefined ? "" : _ref$responseType, _ref$body = _ref.body, body = _ref$body === undefined ? "" : _ref$body;
    return [
        url,
        method.toUpperCase(),
        responseType,
        body
    ].join("||");
}
function $35d1d0d7113d247f$export$6fbf65a0adda0f96(requestKey) {
    return Boolean($35d1d0d7113d247f$var$requests[requestKey]);
}
function $35d1d0d7113d247f$export$179b81598c08d13a() {
    $35d1d0d7113d247f$var$requests = {};
}
// This loops through all of the handlers for the request and either
// resolves or rejects them.
function $35d1d0d7113d247f$var$resolveRequest(_ref2) {
    var requestKey = _ref2.requestKey, res = _ref2.res, err = _ref2.err;
    var handlers = $35d1d0d7113d247f$var$requests[requestKey] || [];
    handlers.forEach(function(handler) {
        if (res) handler.resolve(res);
        else handler.reject(err);
    });
    // This list of handlers has been, well, handled. So we
    // clear the handlers for the next request.
    $35d1d0d7113d247f$var$requests[requestKey] = null;
}
function $35d1d0d7113d247f$export$3c0f06aa4e3158f2(input) {
    var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var dedupeOptions = arguments[2];
    var opts = void 0, initToUse = void 0;
    if (dedupeOptions) {
        opts = dedupeOptions;
        initToUse = init;
    } else if (init.responseType) {
        opts = init;
        initToUse = {};
    } else {
        opts = {};
        initToUse = init;
    }
    var _opts = opts, requestKey = _opts.requestKey, _opts$responseType = _opts.responseType, responseType = _opts$responseType === undefined ? "" : _opts$responseType, _opts$dedupe = _opts.dedupe, dedupe = _opts$dedupe === undefined ? true : _opts$dedupe;
    // Build the default request key if one is not passed
    var requestKeyToUse = requestKey || $35d1d0d7113d247f$export$c3c960ad782dc3a0({
        // If `input` is a request, then we use that URL
        url: input.url || input,
        // We prefer values from `init` over request objects. With `fetch()`, init
        // takes priority over a passed-in request
        method: initToUse.method || input.method || "",
        body: initToUse.body || input.body || ""
    });
    var proxyReq = void 0;
    if (dedupe) {
        if (!$35d1d0d7113d247f$var$requests[requestKeyToUse]) $35d1d0d7113d247f$var$requests[requestKeyToUse] = [];
        var handlers = $35d1d0d7113d247f$var$requests[requestKeyToUse];
        var requestInFlight = Boolean(handlers.length);
        var requestHandler = {};
        proxyReq = new Promise(function(resolve, reject) {
            requestHandler.resolve = resolve;
            requestHandler.reject = reject;
        });
        handlers.push(requestHandler);
        if (requestInFlight) return proxyReq;
    }
    var request = fetch(input, initToUse).then(function(res) {
        var responseTypeToUse = void 0;
        if (responseType instanceof Function) responseTypeToUse = responseType(res);
        else if (responseType) responseTypeToUse = responseType;
        else if (res.status === 204) responseTypeToUse = "text";
        else responseTypeToUse = "json";
        // The response body is a ReadableStream. ReadableStreams can only be read a single
        // time, so we must handle that in a central location, here, before resolving
        // the fetch.
        return res[responseTypeToUse]().then(function(data) {
            res.data = data;
            if (dedupe) $35d1d0d7113d247f$var$resolveRequest({
                requestKey: requestKeyToUse,
                res: res
            });
            else return res;
        }, function() {
            res.data = null;
            if (dedupe) $35d1d0d7113d247f$var$resolveRequest({
                requestKey: requestKeyToUse,
                res: res
            });
            else return res;
        });
    }, function(err) {
        if (dedupe) $35d1d0d7113d247f$var$resolveRequest({
            requestKey: requestKeyToUse,
            err: err
        });
        else return Promise.reject(err);
    });
    if (dedupe) return proxyReq;
    else return request;
}


/**
 * @callback Warning
 * @param {string} reason
 * @param {number} code
 * @param {number} offset
 * @returns {void}
 *
 * @typedef Options
 * @property {boolean} [normalize=true]
 * @property {boolean} [forgiving=false]
 * @property {Warning} [warning]
 *
 * @typedef Extension
 * @property {string} singleton
 * @property {Array<string>} extensions
 *
 * @typedef Schema
 * @property {string|null|undefined} language
 * @property {Array<string>} extendedLanguageSubtags
 * @property {string|null|undefined} script
 * @property {string|null|undefined} region
 * @property {Array<string>} variants
 * @property {Array<Extension>} extensions
 * @property {Array<string>} privateuse
 * @property {string|null|undefined} irregular
 * @property {string|null|undefined} regular
 */ /**
 * Check if the given character code, or the character code at the first
 * character, is alphabetical.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is alphabetical.
 */ function $34bdb23a693409e5$export$1e381e1de5ace8e(character) {
    var code = typeof character === "string" ? character.charCodeAt(0) : character;
    return code >= 97 && code <= 122 || code >= 65 && code <= 90;
}


/**
 * Check if the given character code, or the character code at the first
 * character, is decimal.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is a decimal
 */ function $50ce7b660a211168$export$2ad0182371401ea4(character) {
    var code = typeof character === "string" ? character.charCodeAt(0) : character;
    return code >= 48 && code <= 57 /* 0-9 */ ;
}


function $83ff43de86dfebb9$export$176ed353558777b8(character) {
    return (0, $34bdb23a693409e5$export$1e381e1de5ace8e)(character) || (0, $50ce7b660a211168$export$2ad0182371401ea4)(character);
}




/** @type {Array<string>} */ var $e70587b83c661607$export$28a535dd448ffda4 = [
    "art-lojban",
    "cel-gaulish",
    "no-bok",
    "no-nyn",
    "zh-guoyu",
    "zh-hakka",
    "zh-min",
    "zh-min-nan",
    "zh-xiang"
];


/** @type {Record<string, string|null>} */ var $aab7fb310a677e09$export$411e9a7b4316b872 = {
    "en-gb-oed": "en-GB-oxendict",
    "i-ami": "ami",
    "i-bnn": "bnn",
    "i-default": null,
    "i-enochian": null,
    "i-hak": "hak",
    "i-klingon": "tlh",
    "i-lux": "lb",
    "i-mingo": null,
    "i-navajo": "nv",
    "i-pwn": "pwn",
    "i-tao": "tao",
    "i-tay": "tay",
    "i-tsu": "tsu",
    "sgn-be-fr": "sfb",
    "sgn-be-nl": "vgt",
    "sgn-ch-de": "sgg",
    "art-lojban": "jbo",
    "cel-gaulish": null,
    "no-bok": "nb",
    "no-nyn": "nn",
    "zh-guoyu": "cmn",
    "zh-hakka": "hak",
    "zh-min": null,
    "zh-min-nan": "nan",
    "zh-xiang": "hsn"
};


var $e669cf75fd6f5394$var$own = {}.hasOwnProperty;
function $e669cf75fd6f5394$export$98e6a39c04603d36(tag) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var fail = /**
   * Create an empty results object.
   *
   * @param {number} offset
   * @param {number} code
   * @param {string} reason
   * @returns {Schema}
   */ function fail(offset, code, reason) {
        if (options.warning) options.warning(reason, code, offset);
        return options.forgiving ? result : $e669cf75fd6f5394$var$empty();
    };
    var result = $e669cf75fd6f5394$var$empty();
    var source = String(tag);
    var value = source.toLowerCase();
    var index = 0;
    // Check input.
    if (tag === null || tag === undefined) throw new Error("Expected string, got `" + tag + "`");
    // Let’s start.
    // First: the edge cases.
    if ($e669cf75fd6f5394$var$own.call((0, $aab7fb310a677e09$export$411e9a7b4316b872), value)) {
        var replacement = (0, $aab7fb310a677e09$export$411e9a7b4316b872)[value];
        if ((options.normalize === undefined || options.normalize === null || options.normalize) && typeof replacement === "string") return $e669cf75fd6f5394$export$98e6a39c04603d36(replacement);
        result[(0, $e70587b83c661607$export$28a535dd448ffda4).includes(value) ? "regular" : "irregular"] = source;
        return result;
    }
    // Now, to actually parse, eat what could be a language.
    while((0, $34bdb23a693409e5$export$1e381e1de5ace8e)(value.charCodeAt(index)) && index < 9)index++;
    // A language.
    if (index > 1 /* Min 639. */  && index < 9 /* Max subtag. */ ) {
        // 5 and up is a subtag.
        // 4 is the size of reserved languages.
        // 3 an ISO 639-2 or ISO 639-3.
        // 2 is an ISO 639-1.
        // <https://github.com/wooorm/iso-639-2>
        // <https://github.com/wooorm/iso-639-3>
        result.language = source.slice(0, index);
        if (index < 4 /* Max 639. */ ) {
            var groups = 0;
            while(value.charCodeAt(index) === 45 /* `-` */  && (0, $34bdb23a693409e5$export$1e381e1de5ace8e)(value.charCodeAt(index + 1)) && (0, $34bdb23a693409e5$export$1e381e1de5ace8e)(value.charCodeAt(index + 2)) && (0, $34bdb23a693409e5$export$1e381e1de5ace8e)(value.charCodeAt(index + 3)) && !(0, $34bdb23a693409e5$export$1e381e1de5ace8e)(value.charCodeAt(index + 4))){
                if (groups > 2 /* Max extended language subtag count. */ ) return fail(index, 3, "Too many extended language subtags, expected at most 3 subtags");
                // Extended language subtag.
                result.extendedLanguageSubtags.push(source.slice(index + 1, index + 4));
                index += 4;
                groups++;
            }
        }
        // ISO 15924 script.
        // <https://github.com/wooorm/iso-15924>
        if (value.charCodeAt(index) === 45 /* `-` */  && (0, $34bdb23a693409e5$export$1e381e1de5ace8e)(value.charCodeAt(index + 1)) && (0, $34bdb23a693409e5$export$1e381e1de5ace8e)(value.charCodeAt(index + 2)) && (0, $34bdb23a693409e5$export$1e381e1de5ace8e)(value.charCodeAt(index + 3)) && (0, $34bdb23a693409e5$export$1e381e1de5ace8e)(value.charCodeAt(index + 4)) && !(0, $34bdb23a693409e5$export$1e381e1de5ace8e)(value.charCodeAt(index + 5))) {
            result.script = source.slice(index + 1, index + 5);
            index += 5;
        }
        if (value.charCodeAt(index) === 45 /* `-` */ ) {
            // ISO 3166-1 region.
            // <https://github.com/wooorm/iso-3166>
            if ((0, $34bdb23a693409e5$export$1e381e1de5ace8e)(value.charCodeAt(index + 1)) && (0, $34bdb23a693409e5$export$1e381e1de5ace8e)(value.charCodeAt(index + 2)) && !(0, $34bdb23a693409e5$export$1e381e1de5ace8e)(value.charCodeAt(index + 3))) {
                result.region = source.slice(index + 1, index + 3);
                index += 3;
            } else if ((0, $50ce7b660a211168$export$2ad0182371401ea4)(value.charCodeAt(index + 1)) && (0, $50ce7b660a211168$export$2ad0182371401ea4)(value.charCodeAt(index + 2)) && (0, $50ce7b660a211168$export$2ad0182371401ea4)(value.charCodeAt(index + 3)) && !(0, $50ce7b660a211168$export$2ad0182371401ea4)(value.charCodeAt(index + 4))) {
                result.region = source.slice(index + 1, index + 4);
                index += 4;
            }
        }
        while(value.charCodeAt(index) === 45 /* `-` */ ){
            var start = index + 1;
            var offset = start;
            while((0, $83ff43de86dfebb9$export$176ed353558777b8)(value.charCodeAt(offset))){
                if (offset - start > 7 /* Max variant. */ ) return fail(offset, 1, "Too long variant, expected at most 8 characters");
                offset++;
            }
            if (// Long variant.
            offset - start > 4 /* Min alpha numeric variant. */  || // Short variant.
            offset - start > 3 /* Min variant. */  && (0, $50ce7b660a211168$export$2ad0182371401ea4)(value.charCodeAt(start))) {
                result.variants.push(source.slice(start, offset));
                index = offset;
            } else break;
        }
        // Extensions.
        while(value.charCodeAt(index) === 45 /* `-` */ ){
            // Exit if this isn’t an extension.
            if (value.charCodeAt(index + 1) === 120 /* `x` */  || !(0, $83ff43de86dfebb9$export$176ed353558777b8)(value.charCodeAt(index + 1)) || value.charCodeAt(index + 2) !== 45 /* `-` */  || !(0, $83ff43de86dfebb9$export$176ed353558777b8)(value.charCodeAt(index + 3))) break;
            var offset1 = index + 2;
            var groups1 = 0;
            while(value.charCodeAt(offset1) === 45 /* `-` */  && (0, $83ff43de86dfebb9$export$176ed353558777b8)(value.charCodeAt(offset1 + 1)) && (0, $83ff43de86dfebb9$export$176ed353558777b8)(value.charCodeAt(offset1 + 2))){
                var start1 = offset1 + 1;
                offset1 = start1 + 2;
                groups1++;
                while((0, $83ff43de86dfebb9$export$176ed353558777b8)(value.charCodeAt(offset1))){
                    if (offset1 - start1 > 7 /* Max extension. */ ) return fail(offset1, 2, "Too long extension, expected at most 8 characters");
                    offset1++;
                }
            }
            if (!groups1) return fail(offset1, 4, "Empty extension, extensions must have at least 2 characters of content");
            result.extensions.push({
                singleton: source.charAt(index + 1),
                extensions: source.slice(index + 3, offset1).split("-")
            });
            index = offset1;
        }
    } else index = 0;
    // Private use.
    if (index === 0 && value.charCodeAt(index) === 120 || value.charCodeAt(index) === 45 /* `-` */  && value.charCodeAt(index + 1) === 120) {
        index = index ? index + 2 : 1;
        var offset2 = index;
        while(value.charCodeAt(offset2) === 45 /* `-` */  && (0, $83ff43de86dfebb9$export$176ed353558777b8)(value.charCodeAt(offset2 + 1))){
            var start2 = index + 1;
            offset2 = start2;
            while((0, $83ff43de86dfebb9$export$176ed353558777b8)(value.charCodeAt(offset2))){
                if (offset2 - start2 > 7 /* Max private use. */ ) return fail(offset2, 5, "Too long private-use area, expected at most 8 characters");
                offset2++;
            }
            result.privateuse.push(source.slice(index + 1, offset2));
            index = offset2;
        }
    }
    if (index !== source.length) return fail(index, 6, "Found superfluous content after tag");
    return result;
}
/**
 * Create an empty results object.
 *
 * @returns {Schema}
 */ function $e669cf75fd6f5394$var$empty() {
    return {
        language: null,
        extendedLanguageSubtags: [],
        script: null,
        region: null,
        variants: [],
        extensions: [],
        privateuse: [],
        irregular: null,
        regular: null
    };
}

/**
 * @typedef {Partial<import('./parse.js').Schema>} Schema
 * @typedef {Partial<import('./parse.js').Extension>} Extension
 */ /**
 * Compile a language schema to a BCP 47 language tag.
 *
 * @param {Schema} schema
 * @returns {string}
 */ 
function $eab602125b5f843c$export$fac44ee5b035f737() {
    var schema = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _result;
    /** @type {Array<string>} */ var result = [];
    if (schema.irregular) return schema.irregular;
    if (schema.regular) return schema.regular;
    if (schema.language) {
        result = result.concat(schema.language, schema.extendedLanguageSubtags || [], schema.script || [], schema.region || [], schema.variants || []);
        var values = schema.extensions || [];
        var index = -1;
        while(++index < values.length){
            var _result1;
            var value = values[index];
            if (value.singleton && value.extensions && value.extensions.length > 0) (_result1 = result).push.apply(_result1, [
                value.singleton
            ].concat((0, $72af24a1cc374e04$export$2e2bcd8739ae039)(value.extensions)));
        }
    }
    if (schema.privateuse && schema.privateuse.length > 0) (_result = result).push.apply(_result, [
        "x"
    ].concat((0, $72af24a1cc374e04$export$2e2bcd8739ae039)(schema.privateuse)));
    return result.join("-");
}


/**
 * @typedef {import('bcp-47').Warning} Warning
 * @typedef {import('bcp-47').Schema} Schema
 * @typedef {import('bcp-47').Extension} Extension
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean} [forgiving]
 *   Passed to `bcp-47` as `options.forgiving`.
 * @property {Warning} [warning]
 *   Passed to `bcp-47` as `options.warning`.
 *
 *   One additional warning is given:
 *
 *   | code | reason                                                     |
 *   | :--- | :--------------------------------------------------------- |
 *   | 7    | Deprecated region `CURRENT`, expected one of `SUGGESTIONS` |
 *
 *   This warning is only given if the region cannot be automatically fixed
 *   (when regions split into multiple regions).
 */ 

/**
 * See <https://tools.ietf.org/html/rfc4647#section-3.1>
 * for more info on the algorithms.
 */ /**
 * @typedef {string} Tag
 *   BCP-47 tag.
 * @typedef {Array<Tag>} Tags
 *   List of BCP-47 tags.
 * @typedef {string} Range
 *   RFC 4647 range.
 * @typedef {Array<Range>} Ranges
 *   List of RFC 4647 range.
 *
 * @callback Check
 *   An internal check.
 * @param {Tag} tag
 *   BCP-47 tag.
 * @param {Range} range
 *   RFC 4647 range.
 * @returns {boolean}
 *   Whether the range matches the tag.
 *
 * @typedef {FilterOrLookup<true>} Filter
 *   Filter: yields all tags that match a range.
 * @typedef {FilterOrLookup<false>} Lookup
 *   Lookup: yields the best tag that matches a range.
 */ /**
 * @template {boolean} IsFilter
 *   Whether to filter or perform a lookup.
 * @callback FilterOrLookup
 *   A check.
 * @param {Tag|Tags} tags
 *   One or more BCP-47 tags.
 * @param {Range|Ranges|undefined} [ranges='*']
 *   One or more RFC 4647 ranges.
 * @returns {IsFilter extends true ? Tags : Tag|undefined}
 *   Result.
 */ /**
 * Factory to perform a filter or a lookup.
 *
 * This factory creates a function that accepts a list of tags and a list of
 * ranges, and contains logic to exit early for lookups.
 * `check` just has to deal with one tag and one range.
 * This match function iterates over ranges, and for each range,
 * iterates over tags.
 * That way, earlier ranges matching any tag have precedence over later ranges.
 *
 * @template {boolean} IsFilter
 * @param {Check} check
 *   A check.
 * @param {IsFilter} filter
 *   Whether to filter or perform a lookup.
 * @returns {FilterOrLookup<IsFilter>}
 *   Filter or lookup.
 */ function $a6c3f5609f7c5336$var$factory(check, filter) {
    /**
   * @param {Tag|Tags} tags
   *   One or more BCP-47 tags.
   * @param {Range|Ranges|undefined} [ranges='*']
   *   One or more RFC 4647 ranges.
   * @returns {IsFilter extends true ? Tags : Tag|undefined}
   *   Result.
   */ return function(tags, ranges) {
        var left = $a6c3f5609f7c5336$var$cast(tags, "tag");
        var right = $a6c3f5609f7c5336$var$cast(ranges === null || ranges === undefined ? "*" : ranges, "range");
        /** @type {Tags} */ var matches = [];
        var rightIndex = -1;
        while(++rightIndex < right.length){
            var range = right[rightIndex].toLowerCase();
            // Ignore wildcards in lookup mode.
            if (!filter && range === "*") continue;
            var leftIndex = -1;
            /** @type {Tags} */ var next = [];
            while(++leftIndex < left.length)if (check(left[leftIndex].toLowerCase(), range)) {
                // Exit if this is a lookup and we have a match.
                if (!filter) return /** @type {IsFilter extends true ? Tags : Tag|undefined} */ left[leftIndex];
                matches.push(left[leftIndex]);
            } else next.push(left[leftIndex]);
            left = next;
        }
        // If this is a filter, return the list.  If it’s a lookup, we didn’t find
        // a match, so return `undefined`.
        return /** @type {IsFilter extends true ? Tags : Tag|undefined} */ filter ? matches : undefined;
    };
}
var $a6c3f5609f7c5336$export$454d02d943c45292 = $a6c3f5609f7c5336$var$factory(function(tag, range) {
    return range === "*" || tag === range || tag.includes(range + "-");
}, true);
var $a6c3f5609f7c5336$export$d216e65da1a9aa7e = $a6c3f5609f7c5336$var$factory(function(tag, range) {
    // 3.3.2.1
    var left = tag.split("-");
    var right = range.split("-");
    var leftIndex = 0;
    var rightIndex = 0;
    // 3.3.2.2
    if (right[rightIndex] !== "*" && left[leftIndex] !== right[rightIndex]) return false;
    leftIndex++;
    rightIndex++;
    // 3.3.2.3
    while(rightIndex < right.length){
        // 3.3.2.3.A
        if (right[rightIndex] === "*") {
            rightIndex++;
            continue;
        }
        // 3.3.2.3.B
        if (!left[leftIndex]) return false;
        // 3.3.2.3.C
        if (left[leftIndex] === right[rightIndex]) {
            leftIndex++;
            rightIndex++;
            continue;
        }
        // 3.3.2.3.D
        if (left[leftIndex].length === 1) return false;
        // 3.3.2.3.E
        leftIndex++;
    }
    // 3.3.2.4
    return true;
}, true);
var $a6c3f5609f7c5336$export$dfc7155ac0343b8 = $a6c3f5609f7c5336$var$factory(function(tag, range) {
    var right = range;
    /* eslint-disable-next-line no-constant-condition */ while(true){
        if (right === "*" || tag === right) return true;
        var index = right.lastIndexOf("-");
        if (index < 0) return false;
        if (right.charAt(index - 2) === "-") index -= 2;
        right = right.slice(0, index);
    }
}, false);
/**
 * Validate tags or ranges, and cast them to arrays.
 *
 * @param {string|Array<string>} values
 * @param {string} name
 * @returns {Array<string>}
 */ function $a6c3f5609f7c5336$var$cast(values, name) {
    var value = values && typeof values === "string" ? [
        values
    ] : values;
    if (!value || typeof value !== "object" || !("length" in value)) throw new Error("Invalid " + name + " `" + value + "`, expected non-empty string");
    return value;
}


/**
 * @typedef Change
 * @property {string} from
 * @property {string} to
 */ /**
 * @type {Array<Change>}
 */ var $400ed7f3cad3733c$export$de994efd351b291c = [
    {
        from: "in",
        to: "id"
    },
    {
        from: "iw",
        to: "he"
    },
    {
        from: "ji",
        to: "yi"
    },
    {
        from: "jw",
        to: "jv"
    },
    {
        from: "mo",
        to: "ro"
    },
    {
        from: "scc",
        to: "sr"
    },
    {
        from: "scr",
        to: "hr"
    },
    {
        from: "aam",
        to: "aas"
    },
    {
        from: "adp",
        to: "dz"
    },
    {
        from: "aue",
        to: "ktz"
    },
    {
        from: "ayx",
        to: "nun"
    },
    {
        from: "bgm",
        to: "bcg"
    },
    {
        from: "bjd",
        to: "drl"
    },
    {
        from: "ccq",
        to: "rki"
    },
    {
        from: "cjr",
        to: "mom"
    },
    {
        from: "cka",
        to: "cmr"
    },
    {
        from: "cmk",
        to: "xch"
    },
    {
        from: "coy",
        to: "pij"
    },
    {
        from: "cqu",
        to: "quh"
    },
    {
        from: "drh",
        to: "mn"
    },
    {
        from: "drw",
        to: "fa-af"
    },
    {
        from: "gav",
        to: "dev"
    },
    {
        from: "gfx",
        to: "vaj"
    },
    {
        from: "ggn",
        to: "gvr"
    },
    {
        from: "gti",
        to: "nyc"
    },
    {
        from: "guv",
        to: "duz"
    },
    {
        from: "hrr",
        to: "jal"
    },
    {
        from: "ibi",
        to: "opa"
    },
    {
        from: "ilw",
        to: "gal"
    },
    {
        from: "jeg",
        to: "oyb"
    },
    {
        from: "kgc",
        to: "tdf"
    },
    {
        from: "kgh",
        to: "kml"
    },
    {
        from: "koj",
        to: "kwv"
    },
    {
        from: "krm",
        to: "bmf"
    },
    {
        from: "ktr",
        to: "dtp"
    },
    {
        from: "kvs",
        to: "gdj"
    },
    {
        from: "kwq",
        to: "yam"
    },
    {
        from: "kxe",
        to: "tvd"
    },
    {
        from: "kzj",
        to: "dtp"
    },
    {
        from: "kzt",
        to: "dtp"
    },
    {
        from: "lii",
        to: "raq"
    },
    {
        from: "lmm",
        to: "rmx"
    },
    {
        from: "meg",
        to: "cir"
    },
    {
        from: "mst",
        to: "mry"
    },
    {
        from: "mwj",
        to: "vaj"
    },
    {
        from: "myt",
        to: "mry"
    },
    {
        from: "nad",
        to: "xny"
    },
    {
        from: "ncp",
        to: "kdz"
    },
    {
        from: "nnx",
        to: "ngv"
    },
    {
        from: "nts",
        to: "pij"
    },
    {
        from: "oun",
        to: "vaj"
    },
    {
        from: "pcr",
        to: "adx"
    },
    {
        from: "pmc",
        to: "huw"
    },
    {
        from: "pmu",
        to: "phr"
    },
    {
        from: "ppa",
        to: "bfy"
    },
    {
        from: "ppr",
        to: "lcq"
    },
    {
        from: "pry",
        to: "prt"
    },
    {
        from: "puz",
        to: "pub"
    },
    {
        from: "sca",
        to: "hle"
    },
    {
        from: "skk",
        to: "oyb"
    },
    {
        from: "tdu",
        to: "dtp"
    },
    {
        from: "thc",
        to: "tpo"
    },
    {
        from: "thx",
        to: "oyb"
    },
    {
        from: "tie",
        to: "ras"
    },
    {
        from: "tkk",
        to: "twm"
    },
    {
        from: "tlw",
        to: "weo"
    },
    {
        from: "tmp",
        to: "tyj"
    },
    {
        from: "tne",
        to: "kak"
    },
    {
        from: "tnf",
        to: "fa-af"
    },
    {
        from: "tsf",
        to: "taj"
    },
    {
        from: "uok",
        to: "ema"
    },
    {
        from: "xba",
        to: "cax"
    },
    {
        from: "xia",
        to: "acn"
    },
    {
        from: "xkh",
        to: "waw"
    },
    {
        from: "xsj",
        to: "suj"
    },
    {
        from: "ybd",
        to: "rki"
    },
    {
        from: "yma",
        to: "lrr"
    },
    {
        from: "ymt",
        to: "mtm"
    },
    {
        from: "yos",
        to: "zom"
    },
    {
        from: "yuu",
        to: "yug"
    },
    {
        from: "asd",
        to: "snz"
    },
    {
        from: "dit",
        to: "dif"
    },
    {
        from: "llo",
        to: "ngt"
    },
    {
        from: "myd",
        to: "aog"
    },
    {
        from: "nns",
        to: "nbr"
    },
    {
        from: "agp",
        to: "apf"
    },
    {
        from: "ais",
        to: "ami"
    },
    {
        from: "ajt",
        to: "aeb"
    },
    {
        from: "baz",
        to: "nvo"
    },
    {
        from: "bhk",
        to: "fbl"
    },
    {
        from: "bic",
        to: "bir"
    },
    {
        from: "bjq",
        to: "bzc"
    },
    {
        from: "bkb",
        to: "ebk"
    },
    {
        from: "blg",
        to: "iba"
    },
    {
        from: "btb",
        to: "beb"
    },
    {
        from: "daf",
        to: "dnj"
    },
    {
        from: "dap",
        to: "njz"
    },
    {
        from: "djl",
        to: "dze"
    },
    {
        from: "dkl",
        to: "aqd"
    },
    {
        from: "drr",
        to: "kzk"
    },
    {
        from: "dud",
        to: "uth"
    },
    {
        from: "duj",
        to: "dwu"
    },
    {
        from: "dwl",
        to: "dbt"
    },
    {
        from: "elp",
        to: "amq"
    },
    {
        from: "gbc",
        to: "wny"
    },
    {
        from: "ggo",
        to: "esg"
    },
    {
        from: "ggr",
        to: "gtu"
    },
    {
        from: "gio",
        to: "aou"
    },
    {
        from: "gli",
        to: "kzk"
    },
    {
        from: "ill",
        to: "ilm"
    },
    {
        from: "izi",
        to: "eza"
    },
    {
        from: "jar",
        to: "jgk"
    },
    {
        from: "kdv",
        to: "zkd"
    },
    {
        from: "kgd",
        to: "ncq"
    },
    {
        from: "kpp",
        to: "jkm"
    },
    {
        from: "kxl",
        to: "kru"
    },
    {
        from: "kzh",
        to: "dgl"
    },
    {
        from: "lak",
        to: "ksp"
    },
    {
        from: "leg",
        to: "enl"
    },
    {
        from: "mgx",
        to: "jbk"
    },
    {
        from: "mnt",
        to: "wnn"
    },
    {
        from: "mof",
        to: "xnt"
    },
    {
        from: "mwd",
        to: "dmw"
    },
    {
        from: "nbf",
        to: "nru"
    },
    {
        from: "nbx",
        to: "ekc"
    },
    {
        from: "nln",
        to: "azd"
    },
    {
        from: "nlr",
        to: "nrk"
    },
    {
        from: "noo",
        to: "dtd"
    },
    {
        from: "nxu",
        to: "bpp"
    },
    {
        from: "pat",
        to: "kxr"
    },
    {
        from: "rmr",
        to: "emx"
    },
    {
        from: "sap",
        to: "aqt"
    },
    {
        from: "sgl",
        to: "isk"
    },
    {
        from: "smd",
        to: "kmb"
    },
    {
        from: "snb",
        to: "iba"
    },
    {
        from: "sul",
        to: "sgd"
    },
    {
        from: "sum",
        to: "ulw"
    },
    {
        from: "tgg",
        to: "bjp"
    },
    {
        from: "thw",
        to: "ola"
    },
    {
        from: "tid",
        to: "itd"
    },
    {
        from: "unp",
        to: "wro"
    },
    {
        from: "wgw",
        to: "wgb"
    },
    {
        from: "wit",
        to: "nol"
    },
    {
        from: "wiw",
        to: "nwo"
    },
    {
        from: "xrq",
        to: "dmw"
    },
    {
        from: "yen",
        to: "ynq"
    },
    {
        from: "yiy",
        to: "yrm"
    },
    {
        from: "zir",
        to: "scv"
    },
    {
        from: "sgn-br",
        to: "bzs"
    },
    {
        from: "sgn-co",
        to: "csn"
    },
    {
        from: "sgn-de",
        to: "gsg"
    },
    {
        from: "sgn-dk",
        to: "dsl"
    },
    {
        from: "sgn-fr",
        to: "fsl"
    },
    {
        from: "sgn-gb",
        to: "bfi"
    },
    {
        from: "sgn-gr",
        to: "gss"
    },
    {
        from: "sgn-ie",
        to: "isg"
    },
    {
        from: "sgn-it",
        to: "ise"
    },
    {
        from: "sgn-jp",
        to: "jsl"
    },
    {
        from: "sgn-mx",
        to: "mfs"
    },
    {
        from: "sgn-ni",
        to: "ncs"
    },
    {
        from: "sgn-nl",
        to: "dse"
    },
    {
        from: "sgn-no",
        to: "nsi"
    },
    {
        from: "sgn-pt",
        to: "psr"
    },
    {
        from: "sgn-se",
        to: "swl"
    },
    {
        from: "sgn-us",
        to: "ase"
    },
    {
        from: "sgn-za",
        to: "sfs"
    },
    {
        from: "sgn-es",
        to: "ssp"
    },
    {
        from: "zh-cmn",
        to: "zh"
    },
    {
        from: "zh-cmn-hans",
        to: "zh-hans"
    },
    {
        from: "zh-cmn-hant",
        to: "zh-hant"
    },
    {
        from: "zh-gan",
        to: "gan"
    },
    {
        from: "zh-wuu",
        to: "wuu"
    },
    {
        from: "zh-yue",
        to: "yue"
    },
    {
        from: "no-bokmal",
        to: "nb"
    },
    {
        from: "no-nynorsk",
        to: "nn"
    },
    {
        from: "aa-saaho",
        to: "ssy"
    },
    {
        from: "sh",
        to: "sr-latn"
    },
    {
        from: "cnr",
        to: "sr-me"
    },
    {
        from: "tl",
        to: "fil"
    },
    {
        from: "aju",
        to: "jrb"
    },
    {
        from: "als",
        to: "sq"
    },
    {
        from: "arb",
        to: "ar"
    },
    {
        from: "ayr",
        to: "ay"
    },
    {
        from: "azj",
        to: "az"
    },
    {
        from: "bcc",
        to: "bal"
    },
    {
        from: "bcl",
        to: "bik"
    },
    {
        from: "bxk",
        to: "luy"
    },
    {
        from: "bxr",
        to: "bua"
    },
    {
        from: "cld",
        to: "syr"
    },
    {
        from: "cmn",
        to: "zh"
    },
    {
        from: "cwd",
        to: "cr"
    },
    {
        from: "dgo",
        to: "doi"
    },
    {
        from: "dhd",
        to: "mwr"
    },
    {
        from: "dik",
        to: "din"
    },
    {
        from: "diq",
        to: "zza"
    },
    {
        from: "lbk",
        to: "bnc"
    },
    {
        from: "ekk",
        to: "et"
    },
    {
        from: "emk",
        to: "man"
    },
    {
        from: "esk",
        to: "ik"
    },
    {
        from: "fat",
        to: "ak"
    },
    {
        from: "fuc",
        to: "ff"
    },
    {
        from: "gaz",
        to: "om"
    },
    {
        from: "gbo",
        to: "grb"
    },
    {
        from: "gno",
        to: "gon"
    },
    {
        from: "gug",
        to: "gn"
    },
    {
        from: "gya",
        to: "gba"
    },
    {
        from: "hdn",
        to: "hai"
    },
    {
        from: "hea",
        to: "hmn"
    },
    {
        from: "ike",
        to: "iu"
    },
    {
        from: "kmr",
        to: "ku"
    },
    {
        from: "knc",
        to: "kr"
    },
    {
        from: "kng",
        to: "kg"
    },
    {
        from: "knn",
        to: "kok"
    },
    {
        from: "kpv",
        to: "kv"
    },
    {
        from: "lvs",
        to: "lv"
    },
    {
        from: "mhr",
        to: "chm"
    },
    {
        from: "mup",
        to: "raj"
    },
    {
        from: "khk",
        to: "mn"
    },
    {
        from: "npi",
        to: "ne"
    },
    {
        from: "ojg",
        to: "oj"
    },
    {
        from: "ory",
        to: "or"
    },
    {
        from: "pbu",
        to: "ps"
    },
    {
        from: "pes",
        to: "fa"
    },
    {
        from: "plt",
        to: "mg"
    },
    {
        from: "pnb",
        to: "lah"
    },
    {
        from: "quz",
        to: "qu"
    },
    {
        from: "rmy",
        to: "rom"
    },
    {
        from: "spy",
        to: "kln"
    },
    {
        from: "src",
        to: "sc"
    },
    {
        from: "swh",
        to: "sw"
    },
    {
        from: "ttq",
        to: "tmh"
    },
    {
        from: "tw",
        to: "ak"
    },
    {
        from: "umu",
        to: "del"
    },
    {
        from: "uzn",
        to: "uz"
    },
    {
        from: "xpe",
        to: "kpe"
    },
    {
        from: "xsl",
        to: "den"
    },
    {
        from: "ydd",
        to: "yi"
    },
    {
        from: "zai",
        to: "zap"
    },
    {
        from: "zsm",
        to: "ms"
    },
    {
        from: "zyb",
        to: "za"
    },
    {
        from: "him",
        to: "srx"
    },
    {
        from: "mnk",
        to: "man"
    },
    {
        from: "bh",
        to: "bho"
    },
    {
        from: "prs",
        to: "fa-af"
    },
    {
        from: "swc",
        to: "sw-cd"
    },
    {
        from: "aar",
        to: "aa"
    },
    {
        from: "abk",
        to: "ab"
    },
    {
        from: "ave",
        to: "ae"
    },
    {
        from: "afr",
        to: "af"
    },
    {
        from: "aka",
        to: "ak"
    },
    {
        from: "amh",
        to: "am"
    },
    {
        from: "arg",
        to: "an"
    },
    {
        from: "ara",
        to: "ar"
    },
    {
        from: "asm",
        to: "as"
    },
    {
        from: "ava",
        to: "av"
    },
    {
        from: "aym",
        to: "ay"
    },
    {
        from: "aze",
        to: "az"
    },
    {
        from: "bak",
        to: "ba"
    },
    {
        from: "bel",
        to: "be"
    },
    {
        from: "bul",
        to: "bg"
    },
    {
        from: "bih",
        to: "bho"
    },
    {
        from: "bis",
        to: "bi"
    },
    {
        from: "bam",
        to: "bm"
    },
    {
        from: "ben",
        to: "bn"
    },
    {
        from: "bod",
        to: "bo"
    },
    {
        from: "bre",
        to: "br"
    },
    {
        from: "bos",
        to: "bs"
    },
    {
        from: "cat",
        to: "ca"
    },
    {
        from: "che",
        to: "ce"
    },
    {
        from: "cha",
        to: "ch"
    },
    {
        from: "cos",
        to: "co"
    },
    {
        from: "cre",
        to: "cr"
    },
    {
        from: "ces",
        to: "cs"
    },
    {
        from: "chu",
        to: "cu"
    },
    {
        from: "chv",
        to: "cv"
    },
    {
        from: "cym",
        to: "cy"
    },
    {
        from: "dan",
        to: "da"
    },
    {
        from: "deu",
        to: "de"
    },
    {
        from: "div",
        to: "dv"
    },
    {
        from: "dzo",
        to: "dz"
    },
    {
        from: "ewe",
        to: "ee"
    },
    {
        from: "ell",
        to: "el"
    },
    {
        from: "eng",
        to: "en"
    },
    {
        from: "epo",
        to: "eo"
    },
    {
        from: "spa",
        to: "es"
    },
    {
        from: "est",
        to: "et"
    },
    {
        from: "eus",
        to: "eu"
    },
    {
        from: "fas",
        to: "fa"
    },
    {
        from: "ful",
        to: "ff"
    },
    {
        from: "fin",
        to: "fi"
    },
    {
        from: "fij",
        to: "fj"
    },
    {
        from: "fao",
        to: "fo"
    },
    {
        from: "fra",
        to: "fr"
    },
    {
        from: "fry",
        to: "fy"
    },
    {
        from: "gle",
        to: "ga"
    },
    {
        from: "gla",
        to: "gd"
    },
    {
        from: "glg",
        to: "gl"
    },
    {
        from: "grn",
        to: "gn"
    },
    {
        from: "guj",
        to: "gu"
    },
    {
        from: "glv",
        to: "gv"
    },
    {
        from: "hau",
        to: "ha"
    },
    {
        from: "heb",
        to: "he"
    },
    {
        from: "hin",
        to: "hi"
    },
    {
        from: "hmo",
        to: "ho"
    },
    {
        from: "hrv",
        to: "hr"
    },
    {
        from: "hat",
        to: "ht"
    },
    {
        from: "hun",
        to: "hu"
    },
    {
        from: "hye",
        to: "hy"
    },
    {
        from: "her",
        to: "hz"
    },
    {
        from: "ina",
        to: "ia"
    },
    {
        from: "ind",
        to: "id"
    },
    {
        from: "ile",
        to: "ie"
    },
    {
        from: "ibo",
        to: "ig"
    },
    {
        from: "iii",
        to: "ii"
    },
    {
        from: "ipk",
        to: "ik"
    },
    {
        from: "ido",
        to: "io"
    },
    {
        from: "isl",
        to: "is"
    },
    {
        from: "ita",
        to: "it"
    },
    {
        from: "iku",
        to: "iu"
    },
    {
        from: "jpn",
        to: "ja"
    },
    {
        from: "jav",
        to: "jv"
    },
    {
        from: "kat",
        to: "ka"
    },
    {
        from: "kon",
        to: "kg"
    },
    {
        from: "kik",
        to: "ki"
    },
    {
        from: "kua",
        to: "kj"
    },
    {
        from: "kaz",
        to: "kk"
    },
    {
        from: "kal",
        to: "kl"
    },
    {
        from: "khm",
        to: "km"
    },
    {
        from: "kan",
        to: "kn"
    },
    {
        from: "kor",
        to: "ko"
    },
    {
        from: "kau",
        to: "kr"
    },
    {
        from: "kas",
        to: "ks"
    },
    {
        from: "kur",
        to: "ku"
    },
    {
        from: "kom",
        to: "kv"
    },
    {
        from: "cor",
        to: "kw"
    },
    {
        from: "kir",
        to: "ky"
    },
    {
        from: "lat",
        to: "la"
    },
    {
        from: "ltz",
        to: "lb"
    },
    {
        from: "lug",
        to: "lg"
    },
    {
        from: "lim",
        to: "li"
    },
    {
        from: "lin",
        to: "ln"
    },
    {
        from: "lao",
        to: "lo"
    },
    {
        from: "lit",
        to: "lt"
    },
    {
        from: "lub",
        to: "lu"
    },
    {
        from: "lav",
        to: "lv"
    },
    {
        from: "mlg",
        to: "mg"
    },
    {
        from: "mah",
        to: "mh"
    },
    {
        from: "mri",
        to: "mi"
    },
    {
        from: "mkd",
        to: "mk"
    },
    {
        from: "mal",
        to: "ml"
    },
    {
        from: "mon",
        to: "mn"
    },
    {
        from: "mol",
        to: "ro"
    },
    {
        from: "mar",
        to: "mr"
    },
    {
        from: "msa",
        to: "ms"
    },
    {
        from: "mlt",
        to: "mt"
    },
    {
        from: "mya",
        to: "my"
    },
    {
        from: "nau",
        to: "na"
    },
    {
        from: "nob",
        to: "nb"
    },
    {
        from: "nde",
        to: "nd"
    },
    {
        from: "nep",
        to: "ne"
    },
    {
        from: "ndo",
        to: "ng"
    },
    {
        from: "nld",
        to: "nl"
    },
    {
        from: "nno",
        to: "nn"
    },
    {
        from: "nor",
        to: "no"
    },
    {
        from: "nbl",
        to: "nr"
    },
    {
        from: "nav",
        to: "nv"
    },
    {
        from: "nya",
        to: "ny"
    },
    {
        from: "oci",
        to: "oc"
    },
    {
        from: "oji",
        to: "oj"
    },
    {
        from: "orm",
        to: "om"
    },
    {
        from: "ori",
        to: "or"
    },
    {
        from: "oss",
        to: "os"
    },
    {
        from: "pan",
        to: "pa"
    },
    {
        from: "pli",
        to: "pi"
    },
    {
        from: "pol",
        to: "pl"
    },
    {
        from: "pus",
        to: "ps"
    },
    {
        from: "por",
        to: "pt"
    },
    {
        from: "que",
        to: "qu"
    },
    {
        from: "roh",
        to: "rm"
    },
    {
        from: "run",
        to: "rn"
    },
    {
        from: "ron",
        to: "ro"
    },
    {
        from: "rus",
        to: "ru"
    },
    {
        from: "kin",
        to: "rw"
    },
    {
        from: "san",
        to: "sa"
    },
    {
        from: "srd",
        to: "sc"
    },
    {
        from: "snd",
        to: "sd"
    },
    {
        from: "sme",
        to: "se"
    },
    {
        from: "sag",
        to: "sg"
    },
    {
        from: "hbs",
        to: "sr-latn"
    },
    {
        from: "sin",
        to: "si"
    },
    {
        from: "slk",
        to: "sk"
    },
    {
        from: "slv",
        to: "sl"
    },
    {
        from: "smo",
        to: "sm"
    },
    {
        from: "sna",
        to: "sn"
    },
    {
        from: "som",
        to: "so"
    },
    {
        from: "sqi",
        to: "sq"
    },
    {
        from: "srp",
        to: "sr"
    },
    {
        from: "ssw",
        to: "ss"
    },
    {
        from: "sot",
        to: "st"
    },
    {
        from: "sun",
        to: "su"
    },
    {
        from: "swe",
        to: "sv"
    },
    {
        from: "swa",
        to: "sw"
    },
    {
        from: "tam",
        to: "ta"
    },
    {
        from: "tel",
        to: "te"
    },
    {
        from: "tgk",
        to: "tg"
    },
    {
        from: "tha",
        to: "th"
    },
    {
        from: "tir",
        to: "ti"
    },
    {
        from: "tuk",
        to: "tk"
    },
    {
        from: "tgl",
        to: "fil"
    },
    {
        from: "tsn",
        to: "tn"
    },
    {
        from: "ton",
        to: "to"
    },
    {
        from: "tur",
        to: "tr"
    },
    {
        from: "tso",
        to: "ts"
    },
    {
        from: "tat",
        to: "tt"
    },
    {
        from: "twi",
        to: "ak"
    },
    {
        from: "tah",
        to: "ty"
    },
    {
        from: "uig",
        to: "ug"
    },
    {
        from: "ukr",
        to: "uk"
    },
    {
        from: "urd",
        to: "ur"
    },
    {
        from: "uzb",
        to: "uz"
    },
    {
        from: "ven",
        to: "ve"
    },
    {
        from: "vie",
        to: "vi"
    },
    {
        from: "vol",
        to: "vo"
    },
    {
        from: "wln",
        to: "wa"
    },
    {
        from: "wol",
        to: "wo"
    },
    {
        from: "xho",
        to: "xh"
    },
    {
        from: "yid",
        to: "yi"
    },
    {
        from: "yor",
        to: "yo"
    },
    {
        from: "zha",
        to: "za"
    },
    {
        from: "zho",
        to: "zh"
    },
    {
        from: "zul",
        to: "zu"
    },
    {
        from: "alb",
        to: "sq"
    },
    {
        from: "arm",
        to: "hy"
    },
    {
        from: "baq",
        to: "eu"
    },
    {
        from: "bur",
        to: "my"
    },
    {
        from: "chi",
        to: "zh"
    },
    {
        from: "cze",
        to: "cs"
    },
    {
        from: "dut",
        to: "nl"
    },
    {
        from: "fre",
        to: "fr"
    },
    {
        from: "geo",
        to: "ka"
    },
    {
        from: "ger",
        to: "de"
    },
    {
        from: "gre",
        to: "el"
    },
    {
        from: "ice",
        to: "is"
    },
    {
        from: "mac",
        to: "mk"
    },
    {
        from: "mao",
        to: "mi"
    },
    {
        from: "may",
        to: "ms"
    },
    {
        from: "per",
        to: "fa"
    },
    {
        from: "rum",
        to: "ro"
    },
    {
        from: "slo",
        to: "sk"
    },
    {
        from: "tib",
        to: "bo"
    },
    {
        from: "wel",
        to: "cy"
    },
    {
        from: "und-aaland",
        to: "und-ax"
    },
    {
        from: "hy-arevmda",
        to: "hyw"
    },
    {
        from: "und-arevmda",
        to: "und"
    },
    {
        from: "und-arevela",
        to: "und"
    },
    {
        from: "und-lojban",
        to: "und"
    },
    {
        from: "und-saaho",
        to: "und"
    },
    {
        from: "und-bokmal",
        to: "und"
    },
    {
        from: "und-nynorsk",
        to: "und"
    },
    {
        from: "und-hakka",
        to: "und"
    },
    {
        from: "und-xiang",
        to: "und"
    },
    {
        from: "und-hepburn-heploc",
        to: "und-alalc97"
    }
];


/**
 * @typedef {'script'|'region'|'variants'} Field
 *
 * @typedef AddOrRemove
 * @property {Field} field
 * @property {string} value
 *
 * @typedef Change
 * @property {AddOrRemove} from
 * @property {AddOrRemove} to
 */ /**
 * @type {Array<Change>}
 */ var $916f27da40e5479a$export$4dbdc8f16fed8a34 = [
    {
        from: {
            field: "script",
            value: "qaai"
        },
        to: {
            field: "script",
            value: "zinh"
        }
    },
    {
        from: {
            field: "region",
            value: "bu"
        },
        to: {
            field: "region",
            value: "mm"
        }
    },
    {
        from: {
            field: "region",
            value: "ct"
        },
        to: {
            field: "region",
            value: "ki"
        }
    },
    {
        from: {
            field: "region",
            value: "dd"
        },
        to: {
            field: "region",
            value: "de"
        }
    },
    {
        from: {
            field: "region",
            value: "dy"
        },
        to: {
            field: "region",
            value: "bj"
        }
    },
    {
        from: {
            field: "region",
            value: "fx"
        },
        to: {
            field: "region",
            value: "fr"
        }
    },
    {
        from: {
            field: "region",
            value: "hv"
        },
        to: {
            field: "region",
            value: "bf"
        }
    },
    {
        from: {
            field: "region",
            value: "jt"
        },
        to: {
            field: "region",
            value: "um"
        }
    },
    {
        from: {
            field: "region",
            value: "mi"
        },
        to: {
            field: "region",
            value: "um"
        }
    },
    {
        from: {
            field: "region",
            value: "nh"
        },
        to: {
            field: "region",
            value: "vu"
        }
    },
    {
        from: {
            field: "region",
            value: "nq"
        },
        to: {
            field: "region",
            value: "aq"
        }
    },
    {
        from: {
            field: "region",
            value: "pu"
        },
        to: {
            field: "region",
            value: "um"
        }
    },
    {
        from: {
            field: "region",
            value: "pz"
        },
        to: {
            field: "region",
            value: "pa"
        }
    },
    {
        from: {
            field: "region",
            value: "qu"
        },
        to: {
            field: "region",
            value: "eu"
        }
    },
    {
        from: {
            field: "region",
            value: "rh"
        },
        to: {
            field: "region",
            value: "zw"
        }
    },
    {
        from: {
            field: "region",
            value: "tp"
        },
        to: {
            field: "region",
            value: "tl"
        }
    },
    {
        from: {
            field: "region",
            value: "uk"
        },
        to: {
            field: "region",
            value: "gb"
        }
    },
    {
        from: {
            field: "region",
            value: "vd"
        },
        to: {
            field: "region",
            value: "vn"
        }
    },
    {
        from: {
            field: "region",
            value: "wk"
        },
        to: {
            field: "region",
            value: "um"
        }
    },
    {
        from: {
            field: "region",
            value: "yd"
        },
        to: {
            field: "region",
            value: "ye"
        }
    },
    {
        from: {
            field: "region",
            value: "zr"
        },
        to: {
            field: "region",
            value: "cd"
        }
    },
    {
        from: {
            field: "region",
            value: "230"
        },
        to: {
            field: "region",
            value: "et"
        }
    },
    {
        from: {
            field: "region",
            value: "280"
        },
        to: {
            field: "region",
            value: "de"
        }
    },
    {
        from: {
            field: "region",
            value: "736"
        },
        to: {
            field: "region",
            value: "sd"
        }
    },
    {
        from: {
            field: "region",
            value: "886"
        },
        to: {
            field: "region",
            value: "ye"
        }
    },
    {
        from: {
            field: "region",
            value: "958"
        },
        to: {
            field: "region",
            value: "aa"
        }
    },
    {
        from: {
            field: "region",
            value: "020"
        },
        to: {
            field: "region",
            value: "ad"
        }
    },
    {
        from: {
            field: "region",
            value: "784"
        },
        to: {
            field: "region",
            value: "ae"
        }
    },
    {
        from: {
            field: "region",
            value: "004"
        },
        to: {
            field: "region",
            value: "af"
        }
    },
    {
        from: {
            field: "region",
            value: "028"
        },
        to: {
            field: "region",
            value: "ag"
        }
    },
    {
        from: {
            field: "region",
            value: "660"
        },
        to: {
            field: "region",
            value: "ai"
        }
    },
    {
        from: {
            field: "region",
            value: "008"
        },
        to: {
            field: "region",
            value: "al"
        }
    },
    {
        from: {
            field: "region",
            value: "051"
        },
        to: {
            field: "region",
            value: "am"
        }
    },
    {
        from: {
            field: "region",
            value: "024"
        },
        to: {
            field: "region",
            value: "ao"
        }
    },
    {
        from: {
            field: "region",
            value: "010"
        },
        to: {
            field: "region",
            value: "aq"
        }
    },
    {
        from: {
            field: "region",
            value: "032"
        },
        to: {
            field: "region",
            value: "ar"
        }
    },
    {
        from: {
            field: "region",
            value: "016"
        },
        to: {
            field: "region",
            value: "as"
        }
    },
    {
        from: {
            field: "region",
            value: "040"
        },
        to: {
            field: "region",
            value: "at"
        }
    },
    {
        from: {
            field: "region",
            value: "036"
        },
        to: {
            field: "region",
            value: "au"
        }
    },
    {
        from: {
            field: "region",
            value: "533"
        },
        to: {
            field: "region",
            value: "aw"
        }
    },
    {
        from: {
            field: "region",
            value: "248"
        },
        to: {
            field: "region",
            value: "ax"
        }
    },
    {
        from: {
            field: "region",
            value: "031"
        },
        to: {
            field: "region",
            value: "az"
        }
    },
    {
        from: {
            field: "region",
            value: "070"
        },
        to: {
            field: "region",
            value: "ba"
        }
    },
    {
        from: {
            field: "region",
            value: "052"
        },
        to: {
            field: "region",
            value: "bb"
        }
    },
    {
        from: {
            field: "region",
            value: "050"
        },
        to: {
            field: "region",
            value: "bd"
        }
    },
    {
        from: {
            field: "region",
            value: "056"
        },
        to: {
            field: "region",
            value: "be"
        }
    },
    {
        from: {
            field: "region",
            value: "854"
        },
        to: {
            field: "region",
            value: "bf"
        }
    },
    {
        from: {
            field: "region",
            value: "100"
        },
        to: {
            field: "region",
            value: "bg"
        }
    },
    {
        from: {
            field: "region",
            value: "048"
        },
        to: {
            field: "region",
            value: "bh"
        }
    },
    {
        from: {
            field: "region",
            value: "108"
        },
        to: {
            field: "region",
            value: "bi"
        }
    },
    {
        from: {
            field: "region",
            value: "204"
        },
        to: {
            field: "region",
            value: "bj"
        }
    },
    {
        from: {
            field: "region",
            value: "652"
        },
        to: {
            field: "region",
            value: "bl"
        }
    },
    {
        from: {
            field: "region",
            value: "060"
        },
        to: {
            field: "region",
            value: "bm"
        }
    },
    {
        from: {
            field: "region",
            value: "096"
        },
        to: {
            field: "region",
            value: "bn"
        }
    },
    {
        from: {
            field: "region",
            value: "068"
        },
        to: {
            field: "region",
            value: "bo"
        }
    },
    {
        from: {
            field: "region",
            value: "535"
        },
        to: {
            field: "region",
            value: "bq"
        }
    },
    {
        from: {
            field: "region",
            value: "076"
        },
        to: {
            field: "region",
            value: "br"
        }
    },
    {
        from: {
            field: "region",
            value: "044"
        },
        to: {
            field: "region",
            value: "bs"
        }
    },
    {
        from: {
            field: "region",
            value: "064"
        },
        to: {
            field: "region",
            value: "bt"
        }
    },
    {
        from: {
            field: "region",
            value: "104"
        },
        to: {
            field: "region",
            value: "mm"
        }
    },
    {
        from: {
            field: "region",
            value: "074"
        },
        to: {
            field: "region",
            value: "bv"
        }
    },
    {
        from: {
            field: "region",
            value: "072"
        },
        to: {
            field: "region",
            value: "bw"
        }
    },
    {
        from: {
            field: "region",
            value: "112"
        },
        to: {
            field: "region",
            value: "by"
        }
    },
    {
        from: {
            field: "region",
            value: "084"
        },
        to: {
            field: "region",
            value: "bz"
        }
    },
    {
        from: {
            field: "region",
            value: "124"
        },
        to: {
            field: "region",
            value: "ca"
        }
    },
    {
        from: {
            field: "region",
            value: "166"
        },
        to: {
            field: "region",
            value: "cc"
        }
    },
    {
        from: {
            field: "region",
            value: "180"
        },
        to: {
            field: "region",
            value: "cd"
        }
    },
    {
        from: {
            field: "region",
            value: "140"
        },
        to: {
            field: "region",
            value: "cf"
        }
    },
    {
        from: {
            field: "region",
            value: "178"
        },
        to: {
            field: "region",
            value: "cg"
        }
    },
    {
        from: {
            field: "region",
            value: "756"
        },
        to: {
            field: "region",
            value: "ch"
        }
    },
    {
        from: {
            field: "region",
            value: "384"
        },
        to: {
            field: "region",
            value: "ci"
        }
    },
    {
        from: {
            field: "region",
            value: "184"
        },
        to: {
            field: "region",
            value: "ck"
        }
    },
    {
        from: {
            field: "region",
            value: "152"
        },
        to: {
            field: "region",
            value: "cl"
        }
    },
    {
        from: {
            field: "region",
            value: "120"
        },
        to: {
            field: "region",
            value: "cm"
        }
    },
    {
        from: {
            field: "region",
            value: "156"
        },
        to: {
            field: "region",
            value: "cn"
        }
    },
    {
        from: {
            field: "region",
            value: "170"
        },
        to: {
            field: "region",
            value: "co"
        }
    },
    {
        from: {
            field: "region",
            value: "188"
        },
        to: {
            field: "region",
            value: "cr"
        }
    },
    {
        from: {
            field: "region",
            value: "192"
        },
        to: {
            field: "region",
            value: "cu"
        }
    },
    {
        from: {
            field: "region",
            value: "132"
        },
        to: {
            field: "region",
            value: "cv"
        }
    },
    {
        from: {
            field: "region",
            value: "531"
        },
        to: {
            field: "region",
            value: "cw"
        }
    },
    {
        from: {
            field: "region",
            value: "162"
        },
        to: {
            field: "region",
            value: "cx"
        }
    },
    {
        from: {
            field: "region",
            value: "196"
        },
        to: {
            field: "region",
            value: "cy"
        }
    },
    {
        from: {
            field: "region",
            value: "203"
        },
        to: {
            field: "region",
            value: "cz"
        }
    },
    {
        from: {
            field: "region",
            value: "278"
        },
        to: {
            field: "region",
            value: "de"
        }
    },
    {
        from: {
            field: "region",
            value: "276"
        },
        to: {
            field: "region",
            value: "de"
        }
    },
    {
        from: {
            field: "region",
            value: "262"
        },
        to: {
            field: "region",
            value: "dj"
        }
    },
    {
        from: {
            field: "region",
            value: "208"
        },
        to: {
            field: "region",
            value: "dk"
        }
    },
    {
        from: {
            field: "region",
            value: "212"
        },
        to: {
            field: "region",
            value: "dm"
        }
    },
    {
        from: {
            field: "region",
            value: "214"
        },
        to: {
            field: "region",
            value: "do"
        }
    },
    {
        from: {
            field: "region",
            value: "012"
        },
        to: {
            field: "region",
            value: "dz"
        }
    },
    {
        from: {
            field: "region",
            value: "218"
        },
        to: {
            field: "region",
            value: "ec"
        }
    },
    {
        from: {
            field: "region",
            value: "233"
        },
        to: {
            field: "region",
            value: "ee"
        }
    },
    {
        from: {
            field: "region",
            value: "818"
        },
        to: {
            field: "region",
            value: "eg"
        }
    },
    {
        from: {
            field: "region",
            value: "732"
        },
        to: {
            field: "region",
            value: "eh"
        }
    },
    {
        from: {
            field: "region",
            value: "232"
        },
        to: {
            field: "region",
            value: "er"
        }
    },
    {
        from: {
            field: "region",
            value: "724"
        },
        to: {
            field: "region",
            value: "es"
        }
    },
    {
        from: {
            field: "region",
            value: "231"
        },
        to: {
            field: "region",
            value: "et"
        }
    },
    {
        from: {
            field: "region",
            value: "246"
        },
        to: {
            field: "region",
            value: "fi"
        }
    },
    {
        from: {
            field: "region",
            value: "242"
        },
        to: {
            field: "region",
            value: "fj"
        }
    },
    {
        from: {
            field: "region",
            value: "238"
        },
        to: {
            field: "region",
            value: "fk"
        }
    },
    {
        from: {
            field: "region",
            value: "583"
        },
        to: {
            field: "region",
            value: "fm"
        }
    },
    {
        from: {
            field: "region",
            value: "234"
        },
        to: {
            field: "region",
            value: "fo"
        }
    },
    {
        from: {
            field: "region",
            value: "250"
        },
        to: {
            field: "region",
            value: "fr"
        }
    },
    {
        from: {
            field: "region",
            value: "249"
        },
        to: {
            field: "region",
            value: "fr"
        }
    },
    {
        from: {
            field: "region",
            value: "266"
        },
        to: {
            field: "region",
            value: "ga"
        }
    },
    {
        from: {
            field: "region",
            value: "826"
        },
        to: {
            field: "region",
            value: "gb"
        }
    },
    {
        from: {
            field: "region",
            value: "308"
        },
        to: {
            field: "region",
            value: "gd"
        }
    },
    {
        from: {
            field: "region",
            value: "268"
        },
        to: {
            field: "region",
            value: "ge"
        }
    },
    {
        from: {
            field: "region",
            value: "254"
        },
        to: {
            field: "region",
            value: "gf"
        }
    },
    {
        from: {
            field: "region",
            value: "831"
        },
        to: {
            field: "region",
            value: "gg"
        }
    },
    {
        from: {
            field: "region",
            value: "288"
        },
        to: {
            field: "region",
            value: "gh"
        }
    },
    {
        from: {
            field: "region",
            value: "292"
        },
        to: {
            field: "region",
            value: "gi"
        }
    },
    {
        from: {
            field: "region",
            value: "304"
        },
        to: {
            field: "region",
            value: "gl"
        }
    },
    {
        from: {
            field: "region",
            value: "270"
        },
        to: {
            field: "region",
            value: "gm"
        }
    },
    {
        from: {
            field: "region",
            value: "324"
        },
        to: {
            field: "region",
            value: "gn"
        }
    },
    {
        from: {
            field: "region",
            value: "312"
        },
        to: {
            field: "region",
            value: "gp"
        }
    },
    {
        from: {
            field: "region",
            value: "226"
        },
        to: {
            field: "region",
            value: "gq"
        }
    },
    {
        from: {
            field: "region",
            value: "300"
        },
        to: {
            field: "region",
            value: "gr"
        }
    },
    {
        from: {
            field: "region",
            value: "239"
        },
        to: {
            field: "region",
            value: "gs"
        }
    },
    {
        from: {
            field: "region",
            value: "320"
        },
        to: {
            field: "region",
            value: "gt"
        }
    },
    {
        from: {
            field: "region",
            value: "316"
        },
        to: {
            field: "region",
            value: "gu"
        }
    },
    {
        from: {
            field: "region",
            value: "624"
        },
        to: {
            field: "region",
            value: "gw"
        }
    },
    {
        from: {
            field: "region",
            value: "328"
        },
        to: {
            field: "region",
            value: "gy"
        }
    },
    {
        from: {
            field: "region",
            value: "344"
        },
        to: {
            field: "region",
            value: "hk"
        }
    },
    {
        from: {
            field: "region",
            value: "334"
        },
        to: {
            field: "region",
            value: "hm"
        }
    },
    {
        from: {
            field: "region",
            value: "340"
        },
        to: {
            field: "region",
            value: "hn"
        }
    },
    {
        from: {
            field: "region",
            value: "191"
        },
        to: {
            field: "region",
            value: "hr"
        }
    },
    {
        from: {
            field: "region",
            value: "332"
        },
        to: {
            field: "region",
            value: "ht"
        }
    },
    {
        from: {
            field: "region",
            value: "348"
        },
        to: {
            field: "region",
            value: "hu"
        }
    },
    {
        from: {
            field: "region",
            value: "360"
        },
        to: {
            field: "region",
            value: "id"
        }
    },
    {
        from: {
            field: "region",
            value: "372"
        },
        to: {
            field: "region",
            value: "ie"
        }
    },
    {
        from: {
            field: "region",
            value: "376"
        },
        to: {
            field: "region",
            value: "il"
        }
    },
    {
        from: {
            field: "region",
            value: "833"
        },
        to: {
            field: "region",
            value: "im"
        }
    },
    {
        from: {
            field: "region",
            value: "356"
        },
        to: {
            field: "region",
            value: "in"
        }
    },
    {
        from: {
            field: "region",
            value: "086"
        },
        to: {
            field: "region",
            value: "io"
        }
    },
    {
        from: {
            field: "region",
            value: "368"
        },
        to: {
            field: "region",
            value: "iq"
        }
    },
    {
        from: {
            field: "region",
            value: "364"
        },
        to: {
            field: "region",
            value: "ir"
        }
    },
    {
        from: {
            field: "region",
            value: "352"
        },
        to: {
            field: "region",
            value: "is"
        }
    },
    {
        from: {
            field: "region",
            value: "380"
        },
        to: {
            field: "region",
            value: "it"
        }
    },
    {
        from: {
            field: "region",
            value: "832"
        },
        to: {
            field: "region",
            value: "je"
        }
    },
    {
        from: {
            field: "region",
            value: "388"
        },
        to: {
            field: "region",
            value: "jm"
        }
    },
    {
        from: {
            field: "region",
            value: "400"
        },
        to: {
            field: "region",
            value: "jo"
        }
    },
    {
        from: {
            field: "region",
            value: "392"
        },
        to: {
            field: "region",
            value: "jp"
        }
    },
    {
        from: {
            field: "region",
            value: "404"
        },
        to: {
            field: "region",
            value: "ke"
        }
    },
    {
        from: {
            field: "region",
            value: "417"
        },
        to: {
            field: "region",
            value: "kg"
        }
    },
    {
        from: {
            field: "region",
            value: "116"
        },
        to: {
            field: "region",
            value: "kh"
        }
    },
    {
        from: {
            field: "region",
            value: "296"
        },
        to: {
            field: "region",
            value: "ki"
        }
    },
    {
        from: {
            field: "region",
            value: "174"
        },
        to: {
            field: "region",
            value: "km"
        }
    },
    {
        from: {
            field: "region",
            value: "659"
        },
        to: {
            field: "region",
            value: "kn"
        }
    },
    {
        from: {
            field: "region",
            value: "408"
        },
        to: {
            field: "region",
            value: "kp"
        }
    },
    {
        from: {
            field: "region",
            value: "410"
        },
        to: {
            field: "region",
            value: "kr"
        }
    },
    {
        from: {
            field: "region",
            value: "414"
        },
        to: {
            field: "region",
            value: "kw"
        }
    },
    {
        from: {
            field: "region",
            value: "136"
        },
        to: {
            field: "region",
            value: "ky"
        }
    },
    {
        from: {
            field: "region",
            value: "398"
        },
        to: {
            field: "region",
            value: "kz"
        }
    },
    {
        from: {
            field: "region",
            value: "418"
        },
        to: {
            field: "region",
            value: "la"
        }
    },
    {
        from: {
            field: "region",
            value: "422"
        },
        to: {
            field: "region",
            value: "lb"
        }
    },
    {
        from: {
            field: "region",
            value: "662"
        },
        to: {
            field: "region",
            value: "lc"
        }
    },
    {
        from: {
            field: "region",
            value: "438"
        },
        to: {
            field: "region",
            value: "li"
        }
    },
    {
        from: {
            field: "region",
            value: "144"
        },
        to: {
            field: "region",
            value: "lk"
        }
    },
    {
        from: {
            field: "region",
            value: "430"
        },
        to: {
            field: "region",
            value: "lr"
        }
    },
    {
        from: {
            field: "region",
            value: "426"
        },
        to: {
            field: "region",
            value: "ls"
        }
    },
    {
        from: {
            field: "region",
            value: "440"
        },
        to: {
            field: "region",
            value: "lt"
        }
    },
    {
        from: {
            field: "region",
            value: "442"
        },
        to: {
            field: "region",
            value: "lu"
        }
    },
    {
        from: {
            field: "region",
            value: "428"
        },
        to: {
            field: "region",
            value: "lv"
        }
    },
    {
        from: {
            field: "region",
            value: "434"
        },
        to: {
            field: "region",
            value: "ly"
        }
    },
    {
        from: {
            field: "region",
            value: "504"
        },
        to: {
            field: "region",
            value: "ma"
        }
    },
    {
        from: {
            field: "region",
            value: "492"
        },
        to: {
            field: "region",
            value: "mc"
        }
    },
    {
        from: {
            field: "region",
            value: "498"
        },
        to: {
            field: "region",
            value: "md"
        }
    },
    {
        from: {
            field: "region",
            value: "499"
        },
        to: {
            field: "region",
            value: "me"
        }
    },
    {
        from: {
            field: "region",
            value: "663"
        },
        to: {
            field: "region",
            value: "mf"
        }
    },
    {
        from: {
            field: "region",
            value: "450"
        },
        to: {
            field: "region",
            value: "mg"
        }
    },
    {
        from: {
            field: "region",
            value: "584"
        },
        to: {
            field: "region",
            value: "mh"
        }
    },
    {
        from: {
            field: "region",
            value: "807"
        },
        to: {
            field: "region",
            value: "mk"
        }
    },
    {
        from: {
            field: "region",
            value: "466"
        },
        to: {
            field: "region",
            value: "ml"
        }
    },
    {
        from: {
            field: "region",
            value: "496"
        },
        to: {
            field: "region",
            value: "mn"
        }
    },
    {
        from: {
            field: "region",
            value: "446"
        },
        to: {
            field: "region",
            value: "mo"
        }
    },
    {
        from: {
            field: "region",
            value: "580"
        },
        to: {
            field: "region",
            value: "mp"
        }
    },
    {
        from: {
            field: "region",
            value: "474"
        },
        to: {
            field: "region",
            value: "mq"
        }
    },
    {
        from: {
            field: "region",
            value: "478"
        },
        to: {
            field: "region",
            value: "mr"
        }
    },
    {
        from: {
            field: "region",
            value: "500"
        },
        to: {
            field: "region",
            value: "ms"
        }
    },
    {
        from: {
            field: "region",
            value: "470"
        },
        to: {
            field: "region",
            value: "mt"
        }
    },
    {
        from: {
            field: "region",
            value: "480"
        },
        to: {
            field: "region",
            value: "mu"
        }
    },
    {
        from: {
            field: "region",
            value: "462"
        },
        to: {
            field: "region",
            value: "mv"
        }
    },
    {
        from: {
            field: "region",
            value: "454"
        },
        to: {
            field: "region",
            value: "mw"
        }
    },
    {
        from: {
            field: "region",
            value: "484"
        },
        to: {
            field: "region",
            value: "mx"
        }
    },
    {
        from: {
            field: "region",
            value: "458"
        },
        to: {
            field: "region",
            value: "my"
        }
    },
    {
        from: {
            field: "region",
            value: "508"
        },
        to: {
            field: "region",
            value: "mz"
        }
    },
    {
        from: {
            field: "region",
            value: "516"
        },
        to: {
            field: "region",
            value: "na"
        }
    },
    {
        from: {
            field: "region",
            value: "540"
        },
        to: {
            field: "region",
            value: "nc"
        }
    },
    {
        from: {
            field: "region",
            value: "562"
        },
        to: {
            field: "region",
            value: "ne"
        }
    },
    {
        from: {
            field: "region",
            value: "574"
        },
        to: {
            field: "region",
            value: "nf"
        }
    },
    {
        from: {
            field: "region",
            value: "566"
        },
        to: {
            field: "region",
            value: "ng"
        }
    },
    {
        from: {
            field: "region",
            value: "558"
        },
        to: {
            field: "region",
            value: "ni"
        }
    },
    {
        from: {
            field: "region",
            value: "528"
        },
        to: {
            field: "region",
            value: "nl"
        }
    },
    {
        from: {
            field: "region",
            value: "578"
        },
        to: {
            field: "region",
            value: "no"
        }
    },
    {
        from: {
            field: "region",
            value: "524"
        },
        to: {
            field: "region",
            value: "np"
        }
    },
    {
        from: {
            field: "region",
            value: "520"
        },
        to: {
            field: "region",
            value: "nr"
        }
    },
    {
        from: {
            field: "region",
            value: "570"
        },
        to: {
            field: "region",
            value: "nu"
        }
    },
    {
        from: {
            field: "region",
            value: "554"
        },
        to: {
            field: "region",
            value: "nz"
        }
    },
    {
        from: {
            field: "region",
            value: "512"
        },
        to: {
            field: "region",
            value: "om"
        }
    },
    {
        from: {
            field: "region",
            value: "591"
        },
        to: {
            field: "region",
            value: "pa"
        }
    },
    {
        from: {
            field: "region",
            value: "604"
        },
        to: {
            field: "region",
            value: "pe"
        }
    },
    {
        from: {
            field: "region",
            value: "258"
        },
        to: {
            field: "region",
            value: "pf"
        }
    },
    {
        from: {
            field: "region",
            value: "598"
        },
        to: {
            field: "region",
            value: "pg"
        }
    },
    {
        from: {
            field: "region",
            value: "608"
        },
        to: {
            field: "region",
            value: "ph"
        }
    },
    {
        from: {
            field: "region",
            value: "586"
        },
        to: {
            field: "region",
            value: "pk"
        }
    },
    {
        from: {
            field: "region",
            value: "616"
        },
        to: {
            field: "region",
            value: "pl"
        }
    },
    {
        from: {
            field: "region",
            value: "666"
        },
        to: {
            field: "region",
            value: "pm"
        }
    },
    {
        from: {
            field: "region",
            value: "612"
        },
        to: {
            field: "region",
            value: "pn"
        }
    },
    {
        from: {
            field: "region",
            value: "630"
        },
        to: {
            field: "region",
            value: "pr"
        }
    },
    {
        from: {
            field: "region",
            value: "275"
        },
        to: {
            field: "region",
            value: "ps"
        }
    },
    {
        from: {
            field: "region",
            value: "620"
        },
        to: {
            field: "region",
            value: "pt"
        }
    },
    {
        from: {
            field: "region",
            value: "585"
        },
        to: {
            field: "region",
            value: "pw"
        }
    },
    {
        from: {
            field: "region",
            value: "600"
        },
        to: {
            field: "region",
            value: "py"
        }
    },
    {
        from: {
            field: "region",
            value: "634"
        },
        to: {
            field: "region",
            value: "qa"
        }
    },
    {
        from: {
            field: "region",
            value: "959"
        },
        to: {
            field: "region",
            value: "qm"
        }
    },
    {
        from: {
            field: "region",
            value: "960"
        },
        to: {
            field: "region",
            value: "qn"
        }
    },
    {
        from: {
            field: "region",
            value: "962"
        },
        to: {
            field: "region",
            value: "qp"
        }
    },
    {
        from: {
            field: "region",
            value: "963"
        },
        to: {
            field: "region",
            value: "qq"
        }
    },
    {
        from: {
            field: "region",
            value: "964"
        },
        to: {
            field: "region",
            value: "qr"
        }
    },
    {
        from: {
            field: "region",
            value: "965"
        },
        to: {
            field: "region",
            value: "qs"
        }
    },
    {
        from: {
            field: "region",
            value: "966"
        },
        to: {
            field: "region",
            value: "qt"
        }
    },
    {
        from: {
            field: "region",
            value: "967"
        },
        to: {
            field: "region",
            value: "eu"
        }
    },
    {
        from: {
            field: "region",
            value: "968"
        },
        to: {
            field: "region",
            value: "qv"
        }
    },
    {
        from: {
            field: "region",
            value: "969"
        },
        to: {
            field: "region",
            value: "qw"
        }
    },
    {
        from: {
            field: "region",
            value: "970"
        },
        to: {
            field: "region",
            value: "qx"
        }
    },
    {
        from: {
            field: "region",
            value: "971"
        },
        to: {
            field: "region",
            value: "qy"
        }
    },
    {
        from: {
            field: "region",
            value: "972"
        },
        to: {
            field: "region",
            value: "qz"
        }
    },
    {
        from: {
            field: "region",
            value: "638"
        },
        to: {
            field: "region",
            value: "re"
        }
    },
    {
        from: {
            field: "region",
            value: "642"
        },
        to: {
            field: "region",
            value: "ro"
        }
    },
    {
        from: {
            field: "region",
            value: "688"
        },
        to: {
            field: "region",
            value: "rs"
        }
    },
    {
        from: {
            field: "region",
            value: "643"
        },
        to: {
            field: "region",
            value: "ru"
        }
    },
    {
        from: {
            field: "region",
            value: "646"
        },
        to: {
            field: "region",
            value: "rw"
        }
    },
    {
        from: {
            field: "region",
            value: "682"
        },
        to: {
            field: "region",
            value: "sa"
        }
    },
    {
        from: {
            field: "region",
            value: "090"
        },
        to: {
            field: "region",
            value: "sb"
        }
    },
    {
        from: {
            field: "region",
            value: "690"
        },
        to: {
            field: "region",
            value: "sc"
        }
    },
    {
        from: {
            field: "region",
            value: "729"
        },
        to: {
            field: "region",
            value: "sd"
        }
    },
    {
        from: {
            field: "region",
            value: "752"
        },
        to: {
            field: "region",
            value: "se"
        }
    },
    {
        from: {
            field: "region",
            value: "702"
        },
        to: {
            field: "region",
            value: "sg"
        }
    },
    {
        from: {
            field: "region",
            value: "654"
        },
        to: {
            field: "region",
            value: "sh"
        }
    },
    {
        from: {
            field: "region",
            value: "705"
        },
        to: {
            field: "region",
            value: "si"
        }
    },
    {
        from: {
            field: "region",
            value: "744"
        },
        to: {
            field: "region",
            value: "sj"
        }
    },
    {
        from: {
            field: "region",
            value: "703"
        },
        to: {
            field: "region",
            value: "sk"
        }
    },
    {
        from: {
            field: "region",
            value: "694"
        },
        to: {
            field: "region",
            value: "sl"
        }
    },
    {
        from: {
            field: "region",
            value: "674"
        },
        to: {
            field: "region",
            value: "sm"
        }
    },
    {
        from: {
            field: "region",
            value: "686"
        },
        to: {
            field: "region",
            value: "sn"
        }
    },
    {
        from: {
            field: "region",
            value: "706"
        },
        to: {
            field: "region",
            value: "so"
        }
    },
    {
        from: {
            field: "region",
            value: "740"
        },
        to: {
            field: "region",
            value: "sr"
        }
    },
    {
        from: {
            field: "region",
            value: "728"
        },
        to: {
            field: "region",
            value: "ss"
        }
    },
    {
        from: {
            field: "region",
            value: "678"
        },
        to: {
            field: "region",
            value: "st"
        }
    },
    {
        from: {
            field: "region",
            value: "222"
        },
        to: {
            field: "region",
            value: "sv"
        }
    },
    {
        from: {
            field: "region",
            value: "534"
        },
        to: {
            field: "region",
            value: "sx"
        }
    },
    {
        from: {
            field: "region",
            value: "760"
        },
        to: {
            field: "region",
            value: "sy"
        }
    },
    {
        from: {
            field: "region",
            value: "748"
        },
        to: {
            field: "region",
            value: "sz"
        }
    },
    {
        from: {
            field: "region",
            value: "796"
        },
        to: {
            field: "region",
            value: "tc"
        }
    },
    {
        from: {
            field: "region",
            value: "148"
        },
        to: {
            field: "region",
            value: "td"
        }
    },
    {
        from: {
            field: "region",
            value: "260"
        },
        to: {
            field: "region",
            value: "tf"
        }
    },
    {
        from: {
            field: "region",
            value: "768"
        },
        to: {
            field: "region",
            value: "tg"
        }
    },
    {
        from: {
            field: "region",
            value: "764"
        },
        to: {
            field: "region",
            value: "th"
        }
    },
    {
        from: {
            field: "region",
            value: "762"
        },
        to: {
            field: "region",
            value: "tj"
        }
    },
    {
        from: {
            field: "region",
            value: "772"
        },
        to: {
            field: "region",
            value: "tk"
        }
    },
    {
        from: {
            field: "region",
            value: "626"
        },
        to: {
            field: "region",
            value: "tl"
        }
    },
    {
        from: {
            field: "region",
            value: "795"
        },
        to: {
            field: "region",
            value: "tm"
        }
    },
    {
        from: {
            field: "region",
            value: "788"
        },
        to: {
            field: "region",
            value: "tn"
        }
    },
    {
        from: {
            field: "region",
            value: "776"
        },
        to: {
            field: "region",
            value: "to"
        }
    },
    {
        from: {
            field: "region",
            value: "792"
        },
        to: {
            field: "region",
            value: "tr"
        }
    },
    {
        from: {
            field: "region",
            value: "780"
        },
        to: {
            field: "region",
            value: "tt"
        }
    },
    {
        from: {
            field: "region",
            value: "798"
        },
        to: {
            field: "region",
            value: "tv"
        }
    },
    {
        from: {
            field: "region",
            value: "158"
        },
        to: {
            field: "region",
            value: "tw"
        }
    },
    {
        from: {
            field: "region",
            value: "834"
        },
        to: {
            field: "region",
            value: "tz"
        }
    },
    {
        from: {
            field: "region",
            value: "804"
        },
        to: {
            field: "region",
            value: "ua"
        }
    },
    {
        from: {
            field: "region",
            value: "800"
        },
        to: {
            field: "region",
            value: "ug"
        }
    },
    {
        from: {
            field: "region",
            value: "581"
        },
        to: {
            field: "region",
            value: "um"
        }
    },
    {
        from: {
            field: "region",
            value: "840"
        },
        to: {
            field: "region",
            value: "us"
        }
    },
    {
        from: {
            field: "region",
            value: "858"
        },
        to: {
            field: "region",
            value: "uy"
        }
    },
    {
        from: {
            field: "region",
            value: "860"
        },
        to: {
            field: "region",
            value: "uz"
        }
    },
    {
        from: {
            field: "region",
            value: "336"
        },
        to: {
            field: "region",
            value: "va"
        }
    },
    {
        from: {
            field: "region",
            value: "670"
        },
        to: {
            field: "region",
            value: "vc"
        }
    },
    {
        from: {
            field: "region",
            value: "862"
        },
        to: {
            field: "region",
            value: "ve"
        }
    },
    {
        from: {
            field: "region",
            value: "092"
        },
        to: {
            field: "region",
            value: "vg"
        }
    },
    {
        from: {
            field: "region",
            value: "850"
        },
        to: {
            field: "region",
            value: "vi"
        }
    },
    {
        from: {
            field: "region",
            value: "704"
        },
        to: {
            field: "region",
            value: "vn"
        }
    },
    {
        from: {
            field: "region",
            value: "548"
        },
        to: {
            field: "region",
            value: "vu"
        }
    },
    {
        from: {
            field: "region",
            value: "876"
        },
        to: {
            field: "region",
            value: "wf"
        }
    },
    {
        from: {
            field: "region",
            value: "882"
        },
        to: {
            field: "region",
            value: "ws"
        }
    },
    {
        from: {
            field: "region",
            value: "973"
        },
        to: {
            field: "region",
            value: "xa"
        }
    },
    {
        from: {
            field: "region",
            value: "974"
        },
        to: {
            field: "region",
            value: "xb"
        }
    },
    {
        from: {
            field: "region",
            value: "975"
        },
        to: {
            field: "region",
            value: "xc"
        }
    },
    {
        from: {
            field: "region",
            value: "976"
        },
        to: {
            field: "region",
            value: "xd"
        }
    },
    {
        from: {
            field: "region",
            value: "977"
        },
        to: {
            field: "region",
            value: "xe"
        }
    },
    {
        from: {
            field: "region",
            value: "978"
        },
        to: {
            field: "region",
            value: "xf"
        }
    },
    {
        from: {
            field: "region",
            value: "979"
        },
        to: {
            field: "region",
            value: "xg"
        }
    },
    {
        from: {
            field: "region",
            value: "980"
        },
        to: {
            field: "region",
            value: "xh"
        }
    },
    {
        from: {
            field: "region",
            value: "981"
        },
        to: {
            field: "region",
            value: "xi"
        }
    },
    {
        from: {
            field: "region",
            value: "982"
        },
        to: {
            field: "region",
            value: "xj"
        }
    },
    {
        from: {
            field: "region",
            value: "983"
        },
        to: {
            field: "region",
            value: "xk"
        }
    },
    {
        from: {
            field: "region",
            value: "984"
        },
        to: {
            field: "region",
            value: "xl"
        }
    },
    {
        from: {
            field: "region",
            value: "985"
        },
        to: {
            field: "region",
            value: "xm"
        }
    },
    {
        from: {
            field: "region",
            value: "986"
        },
        to: {
            field: "region",
            value: "xn"
        }
    },
    {
        from: {
            field: "region",
            value: "987"
        },
        to: {
            field: "region",
            value: "xo"
        }
    },
    {
        from: {
            field: "region",
            value: "988"
        },
        to: {
            field: "region",
            value: "xp"
        }
    },
    {
        from: {
            field: "region",
            value: "989"
        },
        to: {
            field: "region",
            value: "xq"
        }
    },
    {
        from: {
            field: "region",
            value: "990"
        },
        to: {
            field: "region",
            value: "xr"
        }
    },
    {
        from: {
            field: "region",
            value: "991"
        },
        to: {
            field: "region",
            value: "xs"
        }
    },
    {
        from: {
            field: "region",
            value: "992"
        },
        to: {
            field: "region",
            value: "xt"
        }
    },
    {
        from: {
            field: "region",
            value: "993"
        },
        to: {
            field: "region",
            value: "xu"
        }
    },
    {
        from: {
            field: "region",
            value: "994"
        },
        to: {
            field: "region",
            value: "xv"
        }
    },
    {
        from: {
            field: "region",
            value: "995"
        },
        to: {
            field: "region",
            value: "xw"
        }
    },
    {
        from: {
            field: "region",
            value: "996"
        },
        to: {
            field: "region",
            value: "xx"
        }
    },
    {
        from: {
            field: "region",
            value: "997"
        },
        to: {
            field: "region",
            value: "xy"
        }
    },
    {
        from: {
            field: "region",
            value: "998"
        },
        to: {
            field: "region",
            value: "xz"
        }
    },
    {
        from: {
            field: "region",
            value: "720"
        },
        to: {
            field: "region",
            value: "ye"
        }
    },
    {
        from: {
            field: "region",
            value: "887"
        },
        to: {
            field: "region",
            value: "ye"
        }
    },
    {
        from: {
            field: "region",
            value: "175"
        },
        to: {
            field: "region",
            value: "yt"
        }
    },
    {
        from: {
            field: "region",
            value: "710"
        },
        to: {
            field: "region",
            value: "za"
        }
    },
    {
        from: {
            field: "region",
            value: "894"
        },
        to: {
            field: "region",
            value: "zm"
        }
    },
    {
        from: {
            field: "region",
            value: "716"
        },
        to: {
            field: "region",
            value: "zw"
        }
    },
    {
        from: {
            field: "region",
            value: "999"
        },
        to: {
            field: "region",
            value: "zz"
        }
    },
    {
        from: {
            field: "variants",
            value: "polytoni"
        },
        to: {
            field: "variants",
            value: "polyton"
        }
    },
    {
        from: {
            field: "variants",
            value: "heploc"
        },
        to: {
            field: "variants",
            value: "alalc97"
        }
    }
];


/**
 * @typedef {'script'|'region'|'variants'} Field
 */ /**
 * @type {{region: Record<string, Array<string>>}}
 */ var $ed551a29fdd56fec$export$14badfee79ea396f = {
    region: {
        172: [
            "ru",
            "am",
            "az",
            "by",
            "ge",
            "kg",
            "kz",
            "md",
            "tj",
            "tm",
            "ua",
            "uz"
        ],
        200: [
            "cz",
            "sk"
        ],
        530: [
            "cw",
            "sx",
            "bq"
        ],
        532: [
            "cw",
            "sx",
            "bq"
        ],
        536: [
            "sa",
            "iq"
        ],
        582: [
            "fm",
            "mh",
            "mp",
            "pw"
        ],
        810: [
            "ru",
            "am",
            "az",
            "by",
            "ee",
            "ge",
            "kz",
            "kg",
            "lv",
            "lt",
            "md",
            "tj",
            "tm",
            "ua",
            "uz"
        ],
        830: [
            "je",
            "gg"
        ],
        890: [
            "rs",
            "me",
            "si",
            "hr",
            "mk",
            "ba"
        ],
        891: [
            "rs",
            "me"
        ],
        an: [
            "cw",
            "sx",
            "bq"
        ],
        cs: [
            "rs",
            "me"
        ],
        fq: [
            "aq",
            "tf"
        ],
        nt: [
            "sa",
            "iq"
        ],
        pc: [
            "fm",
            "mh",
            "mp",
            "pw"
        ],
        su: [
            "ru",
            "am",
            "az",
            "by",
            "ee",
            "ge",
            "kz",
            "kg",
            "lv",
            "lt",
            "md",
            "tj",
            "tm",
            "ua",
            "uz"
        ],
        yu: [
            "rs",
            "me"
        ],
        "062": [
            "034",
            "143"
        ],
        ant: [
            "cw",
            "sx",
            "bq"
        ],
        scg: [
            "rs",
            "me"
        ],
        ntz: [
            "sa",
            "iq"
        ],
        sun: [
            "ru",
            "am",
            "az",
            "by",
            "ee",
            "ge",
            "kz",
            "kg",
            "lv",
            "lt",
            "md",
            "tj",
            "tm",
            "ua",
            "uz"
        ],
        yug: [
            "rs",
            "me"
        ]
    }
};


/**
 * @type {Record<string, string>}
 */ var $353222f293c868ce$export$b94b6742f5dec598 = {
    aa: "aa-latn-et",
    aai: "aai-latn-zz",
    aak: "aak-latn-zz",
    aau: "aau-latn-zz",
    ab: "ab-cyrl-ge",
    abi: "abi-latn-zz",
    abq: "abq-cyrl-zz",
    abr: "abr-latn-gh",
    abt: "abt-latn-zz",
    aby: "aby-latn-zz",
    acd: "acd-latn-zz",
    ace: "ace-latn-id",
    ach: "ach-latn-ug",
    ada: "ada-latn-gh",
    ade: "ade-latn-zz",
    adj: "adj-latn-zz",
    adp: "adp-tibt-bt",
    ady: "ady-cyrl-ru",
    adz: "adz-latn-zz",
    ae: "ae-avst-ir",
    aeb: "aeb-arab-tn",
    aey: "aey-latn-zz",
    af: "af-latn-za",
    agc: "agc-latn-zz",
    agd: "agd-latn-zz",
    agg: "agg-latn-zz",
    agm: "agm-latn-zz",
    ago: "ago-latn-zz",
    agq: "agq-latn-cm",
    aha: "aha-latn-zz",
    ahl: "ahl-latn-zz",
    aho: "aho-ahom-in",
    ajg: "ajg-latn-zz",
    ajt: "ajt-arab-tn",
    ak: "ak-latn-gh",
    akk: "akk-xsux-iq",
    ala: "ala-latn-zz",
    ali: "ali-latn-zz",
    aln: "aln-latn-xk",
    alt: "alt-cyrl-ru",
    am: "am-ethi-et",
    amm: "amm-latn-zz",
    amn: "amn-latn-zz",
    amo: "amo-latn-ng",
    amp: "amp-latn-zz",
    an: "an-latn-es",
    anc: "anc-latn-zz",
    ank: "ank-latn-zz",
    ann: "ann-latn-ng",
    any: "any-latn-zz",
    aoj: "aoj-latn-zz",
    aom: "aom-latn-zz",
    aoz: "aoz-latn-id",
    apc: "apc-arab-zz",
    apd: "apd-arab-tg",
    ape: "ape-latn-zz",
    apr: "apr-latn-zz",
    aps: "aps-latn-zz",
    apz: "apz-latn-zz",
    ar: "ar-arab-eg",
    arc: "arc-armi-ir",
    "arc-nbat": "arc-nbat-jo",
    "arc-palm": "arc-palm-sy",
    arh: "arh-latn-zz",
    arn: "arn-latn-cl",
    aro: "aro-latn-bo",
    arq: "arq-arab-dz",
    ars: "ars-arab-sa",
    ary: "ary-arab-ma",
    arz: "arz-arab-eg",
    as: "as-beng-in",
    asa: "asa-latn-tz",
    ase: "ase-sgnw-us",
    asg: "asg-latn-zz",
    aso: "aso-latn-zz",
    ast: "ast-latn-es",
    ata: "ata-latn-zz",
    atg: "atg-latn-zz",
    atj: "atj-latn-ca",
    auy: "auy-latn-zz",
    av: "av-cyrl-ru",
    avl: "avl-arab-zz",
    avn: "avn-latn-zz",
    avt: "avt-latn-zz",
    avu: "avu-latn-zz",
    awa: "awa-deva-in",
    awb: "awb-latn-zz",
    awo: "awo-latn-zz",
    awx: "awx-latn-zz",
    ay: "ay-latn-bo",
    ayb: "ayb-latn-zz",
    az: "az-latn-az",
    "az-arab": "az-arab-ir",
    "az-iq": "az-arab-iq",
    "az-ir": "az-arab-ir",
    "az-ru": "az-cyrl-ru",
    ba: "ba-cyrl-ru",
    bal: "bal-arab-pk",
    ban: "ban-latn-id",
    bap: "bap-deva-np",
    bar: "bar-latn-at",
    bas: "bas-latn-cm",
    bav: "bav-latn-zz",
    bax: "bax-bamu-cm",
    bba: "bba-latn-zz",
    bbb: "bbb-latn-zz",
    bbc: "bbc-latn-id",
    bbd: "bbd-latn-zz",
    bbj: "bbj-latn-cm",
    bbp: "bbp-latn-zz",
    bbr: "bbr-latn-zz",
    bcf: "bcf-latn-zz",
    bch: "bch-latn-zz",
    bci: "bci-latn-ci",
    bcm: "bcm-latn-zz",
    bcn: "bcn-latn-zz",
    bco: "bco-latn-zz",
    bcq: "bcq-ethi-zz",
    bcu: "bcu-latn-zz",
    bdd: "bdd-latn-zz",
    be: "be-cyrl-by",
    bef: "bef-latn-zz",
    beh: "beh-latn-zz",
    bej: "bej-arab-sd",
    bem: "bem-latn-zm",
    bet: "bet-latn-zz",
    bew: "bew-latn-id",
    bex: "bex-latn-zz",
    bez: "bez-latn-tz",
    bfd: "bfd-latn-cm",
    bfq: "bfq-taml-in",
    bft: "bft-arab-pk",
    bfy: "bfy-deva-in",
    bg: "bg-cyrl-bg",
    bgc: "bgc-deva-in",
    bgn: "bgn-arab-pk",
    bgx: "bgx-grek-tr",
    bhb: "bhb-deva-in",
    bhg: "bhg-latn-zz",
    bhi: "bhi-deva-in",
    bhl: "bhl-latn-zz",
    bho: "bho-deva-in",
    bhy: "bhy-latn-zz",
    bi: "bi-latn-vu",
    bib: "bib-latn-zz",
    big: "big-latn-zz",
    bik: "bik-latn-ph",
    bim: "bim-latn-zz",
    bin: "bin-latn-ng",
    bio: "bio-latn-zz",
    biq: "biq-latn-zz",
    bjh: "bjh-latn-zz",
    bji: "bji-ethi-zz",
    bjj: "bjj-deva-in",
    bjn: "bjn-latn-id",
    bjo: "bjo-latn-zz",
    bjr: "bjr-latn-zz",
    bjt: "bjt-latn-sn",
    bjz: "bjz-latn-zz",
    bkc: "bkc-latn-zz",
    bkm: "bkm-latn-cm",
    bkq: "bkq-latn-zz",
    bku: "bku-latn-ph",
    bkv: "bkv-latn-zz",
    bla: "bla-latn-ca",
    blg: "blg-latn-my",
    blt: "blt-tavt-vn",
    bm: "bm-latn-ml",
    bmh: "bmh-latn-zz",
    bmk: "bmk-latn-zz",
    bmq: "bmq-latn-ml",
    bmu: "bmu-latn-zz",
    bn: "bn-beng-bd",
    bng: "bng-latn-zz",
    bnm: "bnm-latn-zz",
    bnp: "bnp-latn-zz",
    bo: "bo-tibt-cn",
    boj: "boj-latn-zz",
    bom: "bom-latn-zz",
    bon: "bon-latn-zz",
    bpy: "bpy-beng-in",
    bqc: "bqc-latn-zz",
    bqi: "bqi-arab-ir",
    bqp: "bqp-latn-zz",
    bqv: "bqv-latn-ci",
    br: "br-latn-fr",
    bra: "bra-deva-in",
    brh: "brh-arab-pk",
    brx: "brx-deva-in",
    brz: "brz-latn-zz",
    bs: "bs-latn-ba",
    bsj: "bsj-latn-zz",
    bsq: "bsq-bass-lr",
    bss: "bss-latn-cm",
    bst: "bst-ethi-zz",
    bto: "bto-latn-ph",
    btt: "btt-latn-zz",
    btv: "btv-deva-pk",
    bua: "bua-cyrl-ru",
    buc: "buc-latn-yt",
    bud: "bud-latn-zz",
    bug: "bug-latn-id",
    buk: "buk-latn-zz",
    bum: "bum-latn-cm",
    buo: "buo-latn-zz",
    bus: "bus-latn-zz",
    buu: "buu-latn-zz",
    bvb: "bvb-latn-gq",
    bwd: "bwd-latn-zz",
    bwr: "bwr-latn-zz",
    bxh: "bxh-latn-zz",
    bye: "bye-latn-zz",
    byn: "byn-ethi-er",
    byr: "byr-latn-zz",
    bys: "bys-latn-zz",
    byv: "byv-latn-cm",
    byx: "byx-latn-zz",
    bza: "bza-latn-zz",
    bze: "bze-latn-ml",
    bzf: "bzf-latn-zz",
    bzh: "bzh-latn-zz",
    bzw: "bzw-latn-zz",
    ca: "ca-latn-es",
    cad: "cad-latn-us",
    can: "can-latn-zz",
    cbj: "cbj-latn-zz",
    cch: "cch-latn-ng",
    ccp: "ccp-cakm-bd",
    ce: "ce-cyrl-ru",
    ceb: "ceb-latn-ph",
    cfa: "cfa-latn-zz",
    cgg: "cgg-latn-ug",
    ch: "ch-latn-gu",
    chk: "chk-latn-fm",
    chm: "chm-cyrl-ru",
    cho: "cho-latn-us",
    chp: "chp-latn-ca",
    chr: "chr-cher-us",
    cic: "cic-latn-us",
    cja: "cja-arab-kh",
    cjm: "cjm-cham-vn",
    cjv: "cjv-latn-zz",
    ckb: "ckb-arab-iq",
    ckl: "ckl-latn-zz",
    cko: "cko-latn-zz",
    cky: "cky-latn-zz",
    cla: "cla-latn-zz",
    clc: "clc-latn-ca",
    cme: "cme-latn-zz",
    cmg: "cmg-soyo-mn",
    co: "co-latn-fr",
    cop: "cop-copt-eg",
    cps: "cps-latn-ph",
    cr: "cr-cans-ca",
    crg: "crg-latn-ca",
    crh: "crh-cyrl-ua",
    crk: "crk-cans-ca",
    crl: "crl-cans-ca",
    crs: "crs-latn-sc",
    cs: "cs-latn-cz",
    csb: "csb-latn-pl",
    csw: "csw-cans-ca",
    ctd: "ctd-pauc-mm",
    cu: "cu-cyrl-ru",
    "cu-glag": "cu-glag-bg",
    cv: "cv-cyrl-ru",
    cy: "cy-latn-gb",
    da: "da-latn-dk",
    dad: "dad-latn-zz",
    daf: "daf-latn-ci",
    dag: "dag-latn-zz",
    dah: "dah-latn-zz",
    dak: "dak-latn-us",
    dar: "dar-cyrl-ru",
    dav: "dav-latn-ke",
    dbd: "dbd-latn-zz",
    dbq: "dbq-latn-zz",
    dcc: "dcc-arab-in",
    ddn: "ddn-latn-zz",
    de: "de-latn-de",
    ded: "ded-latn-zz",
    den: "den-latn-ca",
    dga: "dga-latn-zz",
    dgh: "dgh-latn-zz",
    dgi: "dgi-latn-zz",
    dgl: "dgl-arab-zz",
    dgr: "dgr-latn-ca",
    dgz: "dgz-latn-zz",
    dia: "dia-latn-zz",
    dje: "dje-latn-ne",
    dmf: "dmf-medf-ng",
    dnj: "dnj-latn-ci",
    dob: "dob-latn-zz",
    doi: "doi-deva-in",
    dop: "dop-latn-zz",
    dow: "dow-latn-zz",
    drh: "drh-mong-cn",
    dri: "dri-latn-zz",
    drs: "drs-ethi-zz",
    dsb: "dsb-latn-de",
    dtm: "dtm-latn-ml",
    dtp: "dtp-latn-my",
    dts: "dts-latn-zz",
    dty: "dty-deva-np",
    dua: "dua-latn-cm",
    duc: "duc-latn-zz",
    dud: "dud-latn-zz",
    dug: "dug-latn-zz",
    dv: "dv-thaa-mv",
    dva: "dva-latn-zz",
    dww: "dww-latn-zz",
    dyo: "dyo-latn-sn",
    dyu: "dyu-latn-bf",
    dz: "dz-tibt-bt",
    dzg: "dzg-latn-zz",
    ebu: "ebu-latn-ke",
    ee: "ee-latn-gh",
    efi: "efi-latn-ng",
    egl: "egl-latn-it",
    egy: "egy-egyp-eg",
    eka: "eka-latn-zz",
    eky: "eky-kali-mm",
    el: "el-grek-gr",
    ema: "ema-latn-zz",
    emi: "emi-latn-zz",
    en: "en-latn-us",
    "en-shaw": "en-shaw-gb",
    enn: "enn-latn-zz",
    enq: "enq-latn-zz",
    eo: "eo-latn-001",
    eri: "eri-latn-zz",
    es: "es-latn-es",
    esg: "esg-gonm-in",
    esu: "esu-latn-us",
    et: "et-latn-ee",
    etr: "etr-latn-zz",
    ett: "ett-ital-it",
    etu: "etu-latn-zz",
    etx: "etx-latn-zz",
    eu: "eu-latn-es",
    ewo: "ewo-latn-cm",
    ext: "ext-latn-es",
    eza: "eza-latn-zz",
    fa: "fa-arab-ir",
    faa: "faa-latn-zz",
    fab: "fab-latn-zz",
    fag: "fag-latn-zz",
    fai: "fai-latn-zz",
    fan: "fan-latn-gq",
    ff: "ff-latn-sn",
    "ff-adlm": "ff-adlm-gn",
    ffi: "ffi-latn-zz",
    ffm: "ffm-latn-ml",
    fi: "fi-latn-fi",
    fia: "fia-arab-sd",
    fil: "fil-latn-ph",
    fit: "fit-latn-se",
    fj: "fj-latn-fj",
    flr: "flr-latn-zz",
    fmp: "fmp-latn-zz",
    fo: "fo-latn-fo",
    fod: "fod-latn-zz",
    fon: "fon-latn-bj",
    for: "for-latn-zz",
    fpe: "fpe-latn-zz",
    fqs: "fqs-latn-zz",
    fr: "fr-latn-fr",
    frc: "frc-latn-us",
    frp: "frp-latn-fr",
    frr: "frr-latn-de",
    frs: "frs-latn-de",
    fub: "fub-arab-cm",
    fud: "fud-latn-wf",
    fue: "fue-latn-zz",
    fuf: "fuf-latn-gn",
    fuh: "fuh-latn-zz",
    fuq: "fuq-latn-ne",
    fur: "fur-latn-it",
    fuv: "fuv-latn-ng",
    fuy: "fuy-latn-zz",
    fvr: "fvr-latn-sd",
    fy: "fy-latn-nl",
    ga: "ga-latn-ie",
    gaa: "gaa-latn-gh",
    gaf: "gaf-latn-zz",
    gag: "gag-latn-md",
    gah: "gah-latn-zz",
    gaj: "gaj-latn-zz",
    gam: "gam-latn-zz",
    gan: "gan-hans-cn",
    gaw: "gaw-latn-zz",
    gay: "gay-latn-id",
    gba: "gba-latn-zz",
    gbf: "gbf-latn-zz",
    gbm: "gbm-deva-in",
    gby: "gby-latn-zz",
    gbz: "gbz-arab-ir",
    gcr: "gcr-latn-gf",
    gd: "gd-latn-gb",
    gde: "gde-latn-zz",
    gdn: "gdn-latn-zz",
    gdr: "gdr-latn-zz",
    geb: "geb-latn-zz",
    gej: "gej-latn-zz",
    gel: "gel-latn-zz",
    gez: "gez-ethi-et",
    gfk: "gfk-latn-zz",
    ggn: "ggn-deva-np",
    ghs: "ghs-latn-zz",
    gil: "gil-latn-ki",
    gim: "gim-latn-zz",
    gjk: "gjk-arab-pk",
    gjn: "gjn-latn-zz",
    gju: "gju-arab-pk",
    gkn: "gkn-latn-zz",
    gkp: "gkp-latn-zz",
    gl: "gl-latn-es",
    glk: "glk-arab-ir",
    gmm: "gmm-latn-zz",
    gmv: "gmv-ethi-zz",
    gn: "gn-latn-py",
    gnd: "gnd-latn-zz",
    gng: "gng-latn-zz",
    god: "god-latn-zz",
    gof: "gof-ethi-zz",
    goi: "goi-latn-zz",
    gom: "gom-deva-in",
    gon: "gon-telu-in",
    gor: "gor-latn-id",
    gos: "gos-latn-nl",
    got: "got-goth-ua",
    grb: "grb-latn-zz",
    grc: "grc-cprt-cy",
    "grc-linb": "grc-linb-gr",
    grt: "grt-beng-in",
    grw: "grw-latn-zz",
    gsw: "gsw-latn-ch",
    gu: "gu-gujr-in",
    gub: "gub-latn-br",
    guc: "guc-latn-co",
    gud: "gud-latn-zz",
    gur: "gur-latn-gh",
    guw: "guw-latn-zz",
    gux: "gux-latn-zz",
    guz: "guz-latn-ke",
    gv: "gv-latn-im",
    gvf: "gvf-latn-zz",
    gvr: "gvr-deva-np",
    gvs: "gvs-latn-zz",
    gwc: "gwc-arab-zz",
    gwi: "gwi-latn-ca",
    gwt: "gwt-arab-zz",
    gyi: "gyi-latn-zz",
    ha: "ha-latn-ng",
    "ha-cm": "ha-arab-cm",
    "ha-sd": "ha-arab-sd",
    hag: "hag-latn-zz",
    hak: "hak-hans-cn",
    ham: "ham-latn-zz",
    haw: "haw-latn-us",
    haz: "haz-arab-af",
    hbb: "hbb-latn-zz",
    hdy: "hdy-ethi-zz",
    he: "he-hebr-il",
    hhy: "hhy-latn-zz",
    hi: "hi-deva-in",
    "hi-latn": "hi-latn-in",
    hia: "hia-latn-zz",
    hif: "hif-latn-fj",
    hig: "hig-latn-zz",
    hih: "hih-latn-zz",
    hil: "hil-latn-ph",
    hla: "hla-latn-zz",
    hlu: "hlu-hluw-tr",
    hmd: "hmd-plrd-cn",
    hmt: "hmt-latn-zz",
    hnd: "hnd-arab-pk",
    hne: "hne-deva-in",
    hnj: "hnj-hmnp-us",
    hnn: "hnn-latn-ph",
    hno: "hno-arab-pk",
    ho: "ho-latn-pg",
    hoc: "hoc-deva-in",
    hoj: "hoj-deva-in",
    hot: "hot-latn-zz",
    hr: "hr-latn-hr",
    hsb: "hsb-latn-de",
    hsn: "hsn-hans-cn",
    ht: "ht-latn-ht",
    hu: "hu-latn-hu",
    hui: "hui-latn-zz",
    hur: "hur-latn-ca",
    hy: "hy-armn-am",
    hz: "hz-latn-na",
    ia: "ia-latn-001",
    ian: "ian-latn-zz",
    iar: "iar-latn-zz",
    iba: "iba-latn-my",
    ibb: "ibb-latn-ng",
    iby: "iby-latn-zz",
    ica: "ica-latn-zz",
    ich: "ich-latn-zz",
    id: "id-latn-id",
    idd: "idd-latn-zz",
    idi: "idi-latn-zz",
    idu: "idu-latn-zz",
    ife: "ife-latn-tg",
    ig: "ig-latn-ng",
    igb: "igb-latn-zz",
    ige: "ige-latn-zz",
    ii: "ii-yiii-cn",
    ijj: "ijj-latn-zz",
    ik: "ik-latn-us",
    ikk: "ikk-latn-zz",
    ikw: "ikw-latn-zz",
    ikx: "ikx-latn-zz",
    ilo: "ilo-latn-ph",
    imo: "imo-latn-zz",
    in: "in-latn-id",
    inh: "inh-cyrl-ru",
    io: "io-latn-001",
    iou: "iou-latn-zz",
    iri: "iri-latn-zz",
    is: "is-latn-is",
    it: "it-latn-it",
    iu: "iu-cans-ca",
    iw: "iw-hebr-il",
    iwm: "iwm-latn-zz",
    iws: "iws-latn-zz",
    izh: "izh-latn-ru",
    izi: "izi-latn-zz",
    ja: "ja-jpan-jp",
    jab: "jab-latn-zz",
    jam: "jam-latn-jm",
    jar: "jar-latn-zz",
    jbo: "jbo-latn-001",
    jbu: "jbu-latn-zz",
    jen: "jen-latn-zz",
    jgk: "jgk-latn-zz",
    jgo: "jgo-latn-cm",
    ji: "ji-hebr-ua",
    jib: "jib-latn-zz",
    jmc: "jmc-latn-tz",
    jml: "jml-deva-np",
    jra: "jra-latn-zz",
    jut: "jut-latn-dk",
    jv: "jv-latn-id",
    jw: "jw-latn-id",
    ka: "ka-geor-ge",
    kaa: "kaa-cyrl-uz",
    kab: "kab-latn-dz",
    kac: "kac-latn-mm",
    kad: "kad-latn-zz",
    kai: "kai-latn-zz",
    kaj: "kaj-latn-ng",
    kam: "kam-latn-ke",
    kao: "kao-latn-ml",
    kaw: "kaw-kawi-id",
    kbd: "kbd-cyrl-ru",
    kbm: "kbm-latn-zz",
    kbp: "kbp-latn-zz",
    kbq: "kbq-latn-zz",
    kbx: "kbx-latn-zz",
    kby: "kby-arab-ne",
    kcg: "kcg-latn-ng",
    kck: "kck-latn-zw",
    kcl: "kcl-latn-zz",
    kct: "kct-latn-zz",
    kde: "kde-latn-tz",
    kdh: "kdh-latn-tg",
    kdl: "kdl-latn-zz",
    kdt: "kdt-thai-th",
    kea: "kea-latn-cv",
    ken: "ken-latn-cm",
    kez: "kez-latn-zz",
    kfo: "kfo-latn-ci",
    kfr: "kfr-deva-in",
    kfy: "kfy-deva-in",
    kg: "kg-latn-cd",
    kge: "kge-latn-id",
    kgf: "kgf-latn-zz",
    kgp: "kgp-latn-br",
    kha: "kha-latn-in",
    khb: "khb-talu-cn",
    khn: "khn-deva-in",
    khq: "khq-latn-ml",
    khs: "khs-latn-zz",
    kht: "kht-mymr-in",
    khw: "khw-arab-pk",
    khz: "khz-latn-zz",
    ki: "ki-latn-ke",
    kij: "kij-latn-zz",
    kiu: "kiu-latn-tr",
    kiw: "kiw-latn-zz",
    kj: "kj-latn-na",
    kjd: "kjd-latn-zz",
    kjg: "kjg-laoo-la",
    kjs: "kjs-latn-zz",
    kjy: "kjy-latn-zz",
    kk: "kk-cyrl-kz",
    "kk-af": "kk-arab-af",
    "kk-arab": "kk-arab-cn",
    "kk-cn": "kk-arab-cn",
    "kk-ir": "kk-arab-ir",
    "kk-mn": "kk-arab-mn",
    kkc: "kkc-latn-zz",
    kkj: "kkj-latn-cm",
    kl: "kl-latn-gl",
    kln: "kln-latn-ke",
    klq: "klq-latn-zz",
    klt: "klt-latn-zz",
    klx: "klx-latn-zz",
    km: "km-khmr-kh",
    kmb: "kmb-latn-ao",
    kmh: "kmh-latn-zz",
    kmo: "kmo-latn-zz",
    kms: "kms-latn-zz",
    kmu: "kmu-latn-zz",
    kmw: "kmw-latn-zz",
    kn: "kn-knda-in",
    knf: "knf-latn-gw",
    knp: "knp-latn-zz",
    ko: "ko-kore-kr",
    koi: "koi-cyrl-ru",
    kok: "kok-deva-in",
    kol: "kol-latn-zz",
    kos: "kos-latn-fm",
    koz: "koz-latn-zz",
    kpe: "kpe-latn-lr",
    kpf: "kpf-latn-zz",
    kpo: "kpo-latn-zz",
    kpr: "kpr-latn-zz",
    kpx: "kpx-latn-zz",
    kqb: "kqb-latn-zz",
    kqf: "kqf-latn-zz",
    kqs: "kqs-latn-zz",
    kqy: "kqy-ethi-zz",
    kr: "kr-latn-zz",
    krc: "krc-cyrl-ru",
    kri: "kri-latn-sl",
    krj: "krj-latn-ph",
    krl: "krl-latn-ru",
    krs: "krs-latn-zz",
    kru: "kru-deva-in",
    ks: "ks-arab-in",
    ksb: "ksb-latn-tz",
    ksd: "ksd-latn-zz",
    ksf: "ksf-latn-cm",
    ksh: "ksh-latn-de",
    ksj: "ksj-latn-zz",
    ksr: "ksr-latn-zz",
    ktb: "ktb-ethi-zz",
    ktm: "ktm-latn-zz",
    kto: "kto-latn-zz",
    ktr: "ktr-latn-my",
    ku: "ku-latn-tr",
    "ku-arab": "ku-arab-iq",
    "ku-lb": "ku-arab-lb",
    "ku-yezi": "ku-yezi-ge",
    kub: "kub-latn-zz",
    kud: "kud-latn-zz",
    kue: "kue-latn-zz",
    kuj: "kuj-latn-zz",
    kum: "kum-cyrl-ru",
    kun: "kun-latn-zz",
    kup: "kup-latn-zz",
    kus: "kus-latn-zz",
    kv: "kv-cyrl-ru",
    kvg: "kvg-latn-zz",
    kvr: "kvr-latn-id",
    kvx: "kvx-arab-pk",
    kw: "kw-latn-gb",
    kwj: "kwj-latn-zz",
    kwk: "kwk-latn-ca",
    kwo: "kwo-latn-zz",
    kwq: "kwq-latn-zz",
    kxa: "kxa-latn-zz",
    kxc: "kxc-ethi-zz",
    kxe: "kxe-latn-zz",
    kxl: "kxl-deva-in",
    kxm: "kxm-thai-th",
    kxp: "kxp-arab-pk",
    kxw: "kxw-latn-zz",
    kxz: "kxz-latn-zz",
    ky: "ky-cyrl-kg",
    "ky-arab": "ky-arab-cn",
    "ky-cn": "ky-arab-cn",
    "ky-latn": "ky-latn-tr",
    "ky-tr": "ky-latn-tr",
    kye: "kye-latn-zz",
    kyx: "kyx-latn-zz",
    kzh: "kzh-arab-zz",
    kzj: "kzj-latn-my",
    kzr: "kzr-latn-zz",
    kzt: "kzt-latn-my",
    la: "la-latn-va",
    lab: "lab-lina-gr",
    lad: "lad-hebr-il",
    lag: "lag-latn-tz",
    lah: "lah-arab-pk",
    laj: "laj-latn-ug",
    las: "las-latn-zz",
    lb: "lb-latn-lu",
    lbe: "lbe-cyrl-ru",
    lbu: "lbu-latn-zz",
    lbw: "lbw-latn-id",
    lcm: "lcm-latn-zz",
    lcp: "lcp-thai-cn",
    ldb: "ldb-latn-zz",
    led: "led-latn-zz",
    lee: "lee-latn-zz",
    lem: "lem-latn-zz",
    lep: "lep-lepc-in",
    leq: "leq-latn-zz",
    leu: "leu-latn-zz",
    lez: "lez-cyrl-ru",
    lg: "lg-latn-ug",
    lgg: "lgg-latn-zz",
    li: "li-latn-nl",
    lia: "lia-latn-zz",
    lid: "lid-latn-zz",
    lif: "lif-deva-np",
    "lif-limb": "lif-limb-in",
    lig: "lig-latn-zz",
    lih: "lih-latn-zz",
    lij: "lij-latn-it",
    lil: "lil-latn-ca",
    lis: "lis-lisu-cn",
    ljp: "ljp-latn-id",
    lki: "lki-arab-ir",
    lkt: "lkt-latn-us",
    lle: "lle-latn-zz",
    lln: "lln-latn-zz",
    lmn: "lmn-telu-in",
    lmo: "lmo-latn-it",
    lmp: "lmp-latn-zz",
    ln: "ln-latn-cd",
    lns: "lns-latn-zz",
    lnu: "lnu-latn-zz",
    lo: "lo-laoo-la",
    loj: "loj-latn-zz",
    lok: "lok-latn-zz",
    lol: "lol-latn-cd",
    lor: "lor-latn-zz",
    los: "los-latn-zz",
    loz: "loz-latn-zm",
    lrc: "lrc-arab-ir",
    lt: "lt-latn-lt",
    ltg: "ltg-latn-lv",
    lu: "lu-latn-cd",
    lua: "lua-latn-cd",
    luo: "luo-latn-ke",
    luy: "luy-latn-ke",
    luz: "luz-arab-ir",
    lv: "lv-latn-lv",
    lwl: "lwl-thai-th",
    lzh: "lzh-hans-cn",
    lzz: "lzz-latn-tr",
    mad: "mad-latn-id",
    maf: "maf-latn-cm",
    mag: "mag-deva-in",
    mai: "mai-deva-in",
    mak: "mak-latn-id",
    man: "man-latn-gm",
    "man-gn": "man-nkoo-gn",
    "man-nkoo": "man-nkoo-gn",
    mas: "mas-latn-ke",
    maw: "maw-latn-zz",
    maz: "maz-latn-mx",
    mbh: "mbh-latn-zz",
    mbo: "mbo-latn-zz",
    mbq: "mbq-latn-zz",
    mbu: "mbu-latn-zz",
    mbw: "mbw-latn-zz",
    mci: "mci-latn-zz",
    mcp: "mcp-latn-zz",
    mcq: "mcq-latn-zz",
    mcr: "mcr-latn-zz",
    mcu: "mcu-latn-zz",
    mda: "mda-latn-zz",
    mde: "mde-arab-zz",
    mdf: "mdf-cyrl-ru",
    mdh: "mdh-latn-ph",
    mdj: "mdj-latn-zz",
    mdr: "mdr-latn-id",
    mdx: "mdx-ethi-zz",
    med: "med-latn-zz",
    mee: "mee-latn-zz",
    mek: "mek-latn-zz",
    men: "men-latn-sl",
    mer: "mer-latn-ke",
    met: "met-latn-zz",
    meu: "meu-latn-zz",
    mfa: "mfa-arab-th",
    mfe: "mfe-latn-mu",
    mfn: "mfn-latn-zz",
    mfo: "mfo-latn-zz",
    mfq: "mfq-latn-zz",
    mg: "mg-latn-mg",
    mgh: "mgh-latn-mz",
    mgl: "mgl-latn-zz",
    mgo: "mgo-latn-cm",
    mgp: "mgp-deva-np",
    mgy: "mgy-latn-tz",
    mh: "mh-latn-mh",
    mhi: "mhi-latn-zz",
    mhl: "mhl-latn-zz",
    mi: "mi-latn-nz",
    mic: "mic-latn-ca",
    mif: "mif-latn-zz",
    min: "min-latn-id",
    miw: "miw-latn-zz",
    mk: "mk-cyrl-mk",
    mki: "mki-arab-zz",
    mkl: "mkl-latn-zz",
    mkp: "mkp-latn-zz",
    mkw: "mkw-latn-zz",
    ml: "ml-mlym-in",
    mle: "mle-latn-zz",
    mlp: "mlp-latn-zz",
    mls: "mls-latn-sd",
    mmo: "mmo-latn-zz",
    mmu: "mmu-latn-zz",
    mmx: "mmx-latn-zz",
    mn: "mn-cyrl-mn",
    "mn-cn": "mn-mong-cn",
    "mn-mong": "mn-mong-cn",
    mna: "mna-latn-zz",
    mnf: "mnf-latn-zz",
    mni: "mni-beng-in",
    mnw: "mnw-mymr-mm",
    mo: "mo-latn-ro",
    moa: "moa-latn-zz",
    moe: "moe-latn-ca",
    moh: "moh-latn-ca",
    mos: "mos-latn-bf",
    mox: "mox-latn-zz",
    mpp: "mpp-latn-zz",
    mps: "mps-latn-zz",
    mpt: "mpt-latn-zz",
    mpx: "mpx-latn-zz",
    mql: "mql-latn-zz",
    mr: "mr-deva-in",
    mrd: "mrd-deva-np",
    mrj: "mrj-cyrl-ru",
    mro: "mro-mroo-bd",
    ms: "ms-latn-my",
    "ms-cc": "ms-arab-cc",
    mt: "mt-latn-mt",
    mtc: "mtc-latn-zz",
    mtf: "mtf-latn-zz",
    mti: "mti-latn-zz",
    mtr: "mtr-deva-in",
    mua: "mua-latn-cm",
    mur: "mur-latn-zz",
    mus: "mus-latn-us",
    mva: "mva-latn-zz",
    mvn: "mvn-latn-zz",
    mvy: "mvy-arab-pk",
    mwk: "mwk-latn-ml",
    mwr: "mwr-deva-in",
    mwv: "mwv-latn-id",
    mww: "mww-hmnp-us",
    mxc: "mxc-latn-zw",
    mxm: "mxm-latn-zz",
    my: "my-mymr-mm",
    myk: "myk-latn-zz",
    mym: "mym-ethi-zz",
    myv: "myv-cyrl-ru",
    myw: "myw-latn-zz",
    myx: "myx-latn-ug",
    myz: "myz-mand-ir",
    mzk: "mzk-latn-zz",
    mzm: "mzm-latn-zz",
    mzn: "mzn-arab-ir",
    mzp: "mzp-latn-zz",
    mzw: "mzw-latn-zz",
    mzz: "mzz-latn-zz",
    na: "na-latn-nr",
    nac: "nac-latn-zz",
    naf: "naf-latn-zz",
    nak: "nak-latn-zz",
    nan: "nan-hans-cn",
    nap: "nap-latn-it",
    naq: "naq-latn-na",
    nas: "nas-latn-zz",
    nb: "nb-latn-no",
    nca: "nca-latn-zz",
    nce: "nce-latn-zz",
    ncf: "ncf-latn-zz",
    nch: "nch-latn-mx",
    nco: "nco-latn-zz",
    ncu: "ncu-latn-zz",
    nd: "nd-latn-zw",
    ndc: "ndc-latn-mz",
    nds: "nds-latn-de",
    ne: "ne-deva-np",
    neb: "neb-latn-zz",
    new: "new-deva-np",
    nex: "nex-latn-zz",
    nfr: "nfr-latn-zz",
    ng: "ng-latn-na",
    nga: "nga-latn-zz",
    ngb: "ngb-latn-zz",
    ngl: "ngl-latn-mz",
    nhb: "nhb-latn-zz",
    nhe: "nhe-latn-mx",
    nhw: "nhw-latn-mx",
    nif: "nif-latn-zz",
    nii: "nii-latn-zz",
    nij: "nij-latn-id",
    nin: "nin-latn-zz",
    niu: "niu-latn-nu",
    niy: "niy-latn-zz",
    niz: "niz-latn-zz",
    njo: "njo-latn-in",
    nkg: "nkg-latn-zz",
    nko: "nko-latn-zz",
    nl: "nl-latn-nl",
    nmg: "nmg-latn-cm",
    nmz: "nmz-latn-zz",
    nn: "nn-latn-no",
    nnf: "nnf-latn-zz",
    nnh: "nnh-latn-cm",
    nnk: "nnk-latn-zz",
    nnm: "nnm-latn-zz",
    nnp: "nnp-wcho-in",
    no: "no-latn-no",
    nod: "nod-lana-th",
    noe: "noe-deva-in",
    non: "non-runr-se",
    nop: "nop-latn-zz",
    nou: "nou-latn-zz",
    nqo: "nqo-nkoo-gn",
    nr: "nr-latn-za",
    nrb: "nrb-latn-zz",
    nsk: "nsk-cans-ca",
    nsn: "nsn-latn-zz",
    nso: "nso-latn-za",
    nss: "nss-latn-zz",
    nst: "nst-tnsa-in",
    ntm: "ntm-latn-zz",
    ntr: "ntr-latn-zz",
    nui: "nui-latn-zz",
    nup: "nup-latn-zz",
    nus: "nus-latn-ss",
    nuv: "nuv-latn-zz",
    nux: "nux-latn-zz",
    nv: "nv-latn-us",
    nwb: "nwb-latn-zz",
    nxq: "nxq-latn-cn",
    nxr: "nxr-latn-zz",
    ny: "ny-latn-mw",
    nym: "nym-latn-tz",
    nyn: "nyn-latn-ug",
    nzi: "nzi-latn-gh",
    oc: "oc-latn-fr",
    "oc-es": "oc-latn-es",
    ogc: "ogc-latn-zz",
    oj: "oj-cans-ca",
    ojs: "ojs-cans-ca",
    oka: "oka-latn-ca",
    okr: "okr-latn-zz",
    okv: "okv-latn-zz",
    om: "om-latn-et",
    ong: "ong-latn-zz",
    onn: "onn-latn-zz",
    ons: "ons-latn-zz",
    opm: "opm-latn-zz",
    or: "or-orya-in",
    oro: "oro-latn-zz",
    oru: "oru-arab-zz",
    os: "os-cyrl-ge",
    osa: "osa-osge-us",
    ota: "ota-arab-zz",
    otk: "otk-orkh-mn",
    oui: "oui-ougr-143",
    ozm: "ozm-latn-zz",
    pa: "pa-guru-in",
    "pa-arab": "pa-arab-pk",
    "pa-pk": "pa-arab-pk",
    pag: "pag-latn-ph",
    pal: "pal-phli-ir",
    "pal-phlp": "pal-phlp-cn",
    pam: "pam-latn-ph",
    pap: "pap-latn-aw",
    pau: "pau-latn-pw",
    pbi: "pbi-latn-zz",
    pcd: "pcd-latn-fr",
    pcm: "pcm-latn-ng",
    pdc: "pdc-latn-us",
    pdt: "pdt-latn-ca",
    ped: "ped-latn-zz",
    peo: "peo-xpeo-ir",
    pex: "pex-latn-zz",
    pfl: "pfl-latn-de",
    phl: "phl-arab-zz",
    phn: "phn-phnx-lb",
    pil: "pil-latn-zz",
    pip: "pip-latn-zz",
    pis: "pis-latn-sb",
    pka: "pka-brah-in",
    pko: "pko-latn-ke",
    pl: "pl-latn-pl",
    pla: "pla-latn-zz",
    pms: "pms-latn-it",
    png: "png-latn-zz",
    pnn: "pnn-latn-zz",
    pnt: "pnt-grek-gr",
    pon: "pon-latn-fm",
    ppa: "ppa-deva-in",
    ppo: "ppo-latn-zz",
    pqm: "pqm-latn-ca",
    pra: "pra-khar-pk",
    prd: "prd-arab-ir",
    prg: "prg-latn-001",
    ps: "ps-arab-af",
    pss: "pss-latn-zz",
    pt: "pt-latn-br",
    ptp: "ptp-latn-zz",
    puu: "puu-latn-ga",
    pwa: "pwa-latn-zz",
    qu: "qu-latn-pe",
    quc: "quc-latn-gt",
    qug: "qug-latn-ec",
    rai: "rai-latn-zz",
    raj: "raj-deva-in",
    rao: "rao-latn-zz",
    rcf: "rcf-latn-re",
    rej: "rej-latn-id",
    rel: "rel-latn-zz",
    res: "res-latn-zz",
    rgn: "rgn-latn-it",
    rhg: "rhg-rohg-mm",
    ria: "ria-latn-in",
    rif: "rif-tfng-ma",
    "rif-nl": "rif-latn-nl",
    rjs: "rjs-deva-np",
    rkt: "rkt-beng-bd",
    rm: "rm-latn-ch",
    rmf: "rmf-latn-fi",
    rmo: "rmo-latn-ch",
    rmt: "rmt-arab-ir",
    rmu: "rmu-latn-se",
    rn: "rn-latn-bi",
    rna: "rna-latn-zz",
    rng: "rng-latn-mz",
    ro: "ro-latn-ro",
    rob: "rob-latn-id",
    rof: "rof-latn-tz",
    roo: "roo-latn-zz",
    rro: "rro-latn-zz",
    rtm: "rtm-latn-fj",
    ru: "ru-cyrl-ru",
    rue: "rue-cyrl-ua",
    rug: "rug-latn-sb",
    rw: "rw-latn-rw",
    rwk: "rwk-latn-tz",
    rwo: "rwo-latn-zz",
    ryu: "ryu-kana-jp",
    sa: "sa-deva-in",
    saf: "saf-latn-gh",
    sah: "sah-cyrl-ru",
    saq: "saq-latn-ke",
    sas: "sas-latn-id",
    sat: "sat-olck-in",
    sav: "sav-latn-sn",
    saz: "saz-saur-in",
    sba: "sba-latn-zz",
    sbe: "sbe-latn-zz",
    sbp: "sbp-latn-tz",
    sc: "sc-latn-it",
    sck: "sck-deva-in",
    scl: "scl-arab-zz",
    scn: "scn-latn-it",
    sco: "sco-latn-gb",
    sd: "sd-arab-pk",
    "sd-deva": "sd-deva-in",
    "sd-in": "sd-deva-in",
    "sd-khoj": "sd-khoj-in",
    "sd-sind": "sd-sind-in",
    sdc: "sdc-latn-it",
    sdh: "sdh-arab-ir",
    se: "se-latn-no",
    sef: "sef-latn-ci",
    seh: "seh-latn-mz",
    sei: "sei-latn-mx",
    ses: "ses-latn-ml",
    sg: "sg-latn-cf",
    sga: "sga-ogam-ie",
    sgs: "sgs-latn-lt",
    sgw: "sgw-ethi-zz",
    sgz: "sgz-latn-zz",
    shi: "shi-tfng-ma",
    shk: "shk-latn-zz",
    shn: "shn-mymr-mm",
    shu: "shu-arab-zz",
    si: "si-sinh-lk",
    sid: "sid-latn-et",
    sig: "sig-latn-zz",
    sil: "sil-latn-zz",
    sim: "sim-latn-zz",
    sjr: "sjr-latn-zz",
    sk: "sk-latn-sk",
    skc: "skc-latn-zz",
    skr: "skr-arab-pk",
    sks: "sks-latn-zz",
    sl: "sl-latn-si",
    sld: "sld-latn-zz",
    sli: "sli-latn-pl",
    sll: "sll-latn-zz",
    sly: "sly-latn-id",
    sm: "sm-latn-ws",
    sma: "sma-latn-se",
    smd: "smd-latn-ao",
    smj: "smj-latn-se",
    smn: "smn-latn-fi",
    smp: "smp-samr-il",
    smq: "smq-latn-zz",
    sms: "sms-latn-fi",
    sn: "sn-latn-zw",
    snb: "snb-latn-my",
    snc: "snc-latn-zz",
    snk: "snk-latn-ml",
    snp: "snp-latn-zz",
    snx: "snx-latn-zz",
    sny: "sny-latn-zz",
    so: "so-latn-so",
    sog: "sog-sogd-uz",
    sok: "sok-latn-zz",
    soq: "soq-latn-zz",
    sou: "sou-thai-th",
    soy: "soy-latn-zz",
    spd: "spd-latn-zz",
    spl: "spl-latn-zz",
    sps: "sps-latn-zz",
    sq: "sq-latn-al",
    sr: "sr-cyrl-rs",
    "sr-me": "sr-latn-me",
    "sr-ro": "sr-latn-ro",
    "sr-ru": "sr-latn-ru",
    "sr-tr": "sr-latn-tr",
    srb: "srb-sora-in",
    srn: "srn-latn-sr",
    srr: "srr-latn-sn",
    srx: "srx-deva-in",
    ss: "ss-latn-za",
    ssd: "ssd-latn-zz",
    ssg: "ssg-latn-zz",
    ssy: "ssy-latn-er",
    st: "st-latn-za",
    stk: "stk-latn-zz",
    stq: "stq-latn-de",
    su: "su-latn-id",
    sua: "sua-latn-zz",
    sue: "sue-latn-zz",
    suk: "suk-latn-tz",
    sur: "sur-latn-zz",
    sus: "sus-latn-gn",
    sv: "sv-latn-se",
    sw: "sw-latn-tz",
    swb: "swb-arab-yt",
    swc: "swc-latn-cd",
    swg: "swg-latn-de",
    swp: "swp-latn-zz",
    swv: "swv-deva-in",
    sxn: "sxn-latn-id",
    sxw: "sxw-latn-zz",
    syl: "syl-beng-bd",
    syr: "syr-syrc-iq",
    szl: "szl-latn-pl",
    ta: "ta-taml-in",
    taj: "taj-deva-np",
    tal: "tal-latn-zz",
    tan: "tan-latn-zz",
    taq: "taq-latn-zz",
    tbc: "tbc-latn-zz",
    tbd: "tbd-latn-zz",
    tbf: "tbf-latn-zz",
    tbg: "tbg-latn-zz",
    tbo: "tbo-latn-zz",
    tbw: "tbw-latn-ph",
    tbz: "tbz-latn-zz",
    tci: "tci-latn-zz",
    tcy: "tcy-knda-in",
    tdd: "tdd-tale-cn",
    tdg: "tdg-deva-np",
    tdh: "tdh-deva-np",
    tdu: "tdu-latn-my",
    te: "te-telu-in",
    ted: "ted-latn-zz",
    tem: "tem-latn-sl",
    teo: "teo-latn-ug",
    tet: "tet-latn-tl",
    tfi: "tfi-latn-zz",
    tg: "tg-cyrl-tj",
    "tg-arab": "tg-arab-pk",
    "tg-pk": "tg-arab-pk",
    tgc: "tgc-latn-zz",
    tgo: "tgo-latn-zz",
    tgu: "tgu-latn-zz",
    th: "th-thai-th",
    thl: "thl-deva-np",
    thq: "thq-deva-np",
    thr: "thr-deva-np",
    ti: "ti-ethi-et",
    tif: "tif-latn-zz",
    tig: "tig-ethi-er",
    tik: "tik-latn-zz",
    tim: "tim-latn-zz",
    tio: "tio-latn-zz",
    tiv: "tiv-latn-ng",
    tk: "tk-latn-tm",
    tkl: "tkl-latn-tk",
    tkr: "tkr-latn-az",
    tkt: "tkt-deva-np",
    tl: "tl-latn-ph",
    tlf: "tlf-latn-zz",
    tlx: "tlx-latn-zz",
    tly: "tly-latn-az",
    tmh: "tmh-latn-ne",
    tmy: "tmy-latn-zz",
    tn: "tn-latn-za",
    tnh: "tnh-latn-zz",
    to: "to-latn-to",
    tof: "tof-latn-zz",
    tog: "tog-latn-mw",
    tok: "tok-latn-001",
    toq: "toq-latn-zz",
    tpi: "tpi-latn-pg",
    tpm: "tpm-latn-zz",
    tpz: "tpz-latn-zz",
    tqo: "tqo-latn-zz",
    tr: "tr-latn-tr",
    tru: "tru-latn-tr",
    trv: "trv-latn-tw",
    trw: "trw-arab-pk",
    ts: "ts-latn-za",
    tsd: "tsd-grek-gr",
    tsf: "tsf-deva-np",
    tsg: "tsg-latn-ph",
    tsj: "tsj-tibt-bt",
    tsw: "tsw-latn-zz",
    tt: "tt-cyrl-ru",
    ttd: "ttd-latn-zz",
    tte: "tte-latn-zz",
    ttj: "ttj-latn-ug",
    ttr: "ttr-latn-zz",
    tts: "tts-thai-th",
    ttt: "ttt-latn-az",
    tuh: "tuh-latn-zz",
    tul: "tul-latn-zz",
    tum: "tum-latn-mw",
    tuq: "tuq-latn-zz",
    tvd: "tvd-latn-zz",
    tvl: "tvl-latn-tv",
    tvu: "tvu-latn-zz",
    twh: "twh-latn-zz",
    twq: "twq-latn-ne",
    txg: "txg-tang-cn",
    txo: "txo-toto-in",
    ty: "ty-latn-pf",
    tya: "tya-latn-zz",
    tyv: "tyv-cyrl-ru",
    tzm: "tzm-latn-ma",
    ubu: "ubu-latn-zz",
    udi: "udi-aghb-ru",
    udm: "udm-cyrl-ru",
    ug: "ug-arab-cn",
    "ug-cyrl": "ug-cyrl-kz",
    "ug-kz": "ug-cyrl-kz",
    "ug-mn": "ug-cyrl-mn",
    uga: "uga-ugar-sy",
    uk: "uk-cyrl-ua",
    uli: "uli-latn-fm",
    umb: "umb-latn-ao",
    und: "en-latn-us",
    "und-002": "en-latn-ng",
    "und-003": "en-latn-us",
    "und-005": "pt-latn-br",
    "und-009": "en-latn-au",
    "und-011": "en-latn-ng",
    "und-013": "es-latn-mx",
    "und-014": "sw-latn-tz",
    "und-015": "ar-arab-eg",
    "und-017": "sw-latn-cd",
    "und-018": "en-latn-za",
    "und-019": "en-latn-us",
    "und-021": "en-latn-us",
    "und-029": "es-latn-cu",
    "und-030": "zh-hans-cn",
    "und-034": "hi-deva-in",
    "und-035": "id-latn-id",
    "und-039": "it-latn-it",
    "und-053": "en-latn-au",
    "und-054": "en-latn-pg",
    "und-057": "en-latn-gu",
    "und-061": "sm-latn-ws",
    "und-142": "zh-hans-cn",
    "und-143": "uz-latn-uz",
    "und-145": "ar-arab-sa",
    "und-150": "ru-cyrl-ru",
    "und-151": "ru-cyrl-ru",
    "und-154": "en-latn-gb",
    "und-155": "de-latn-de",
    "und-202": "en-latn-ng",
    "und-419": "es-latn-419",
    "und-ad": "ca-latn-ad",
    "und-adlm": "ff-adlm-gn",
    "und-ae": "ar-arab-ae",
    "und-af": "fa-arab-af",
    "und-aghb": "udi-aghb-ru",
    "und-ahom": "aho-ahom-in",
    "und-al": "sq-latn-al",
    "und-am": "hy-armn-am",
    "und-ao": "pt-latn-ao",
    "und-aq": "und-latn-aq",
    "und-ar": "es-latn-ar",
    "und-arab": "ar-arab-eg",
    "und-arab-cc": "ms-arab-cc",
    "und-arab-cn": "ug-arab-cn",
    "und-arab-gb": "ur-arab-gb",
    "und-arab-id": "ms-arab-id",
    "und-arab-in": "ur-arab-in",
    "und-arab-kh": "cja-arab-kh",
    "und-arab-mm": "rhg-arab-mm",
    "und-arab-mn": "kk-arab-mn",
    "und-arab-mu": "ur-arab-mu",
    "und-arab-ng": "ha-arab-ng",
    "und-arab-pk": "ur-arab-pk",
    "und-arab-tg": "apd-arab-tg",
    "und-arab-th": "mfa-arab-th",
    "und-arab-tj": "fa-arab-tj",
    "und-arab-tr": "az-arab-tr",
    "und-arab-yt": "swb-arab-yt",
    "und-armi": "arc-armi-ir",
    "und-armn": "hy-armn-am",
    "und-as": "sm-latn-as",
    "und-at": "de-latn-at",
    "und-avst": "ae-avst-ir",
    "und-aw": "nl-latn-aw",
    "und-ax": "sv-latn-ax",
    "und-az": "az-latn-az",
    "und-ba": "bs-latn-ba",
    "und-bali": "ban-bali-id",
    "und-bamu": "bax-bamu-cm",
    "und-bass": "bsq-bass-lr",
    "und-batk": "bbc-batk-id",
    "und-bd": "bn-beng-bd",
    "und-be": "nl-latn-be",
    "und-beng": "bn-beng-bd",
    "und-bf": "fr-latn-bf",
    "und-bg": "bg-cyrl-bg",
    "und-bh": "ar-arab-bh",
    "und-bhks": "sa-bhks-in",
    "und-bi": "rn-latn-bi",
    "und-bj": "fr-latn-bj",
    "und-bl": "fr-latn-bl",
    "und-bn": "ms-latn-bn",
    "und-bo": "es-latn-bo",
    "und-bopo": "zh-bopo-tw",
    "und-bq": "pap-latn-bq",
    "und-br": "pt-latn-br",
    "und-brah": "pka-brah-in",
    "und-brai": "fr-brai-fr",
    "und-bt": "dz-tibt-bt",
    "und-bugi": "bug-bugi-id",
    "und-buhd": "bku-buhd-ph",
    "und-bv": "und-latn-bv",
    "und-by": "be-cyrl-by",
    "und-cakm": "ccp-cakm-bd",
    "und-cans": "iu-cans-ca",
    "und-cari": "xcr-cari-tr",
    "und-cd": "sw-latn-cd",
    "und-cf": "fr-latn-cf",
    "und-cg": "fr-latn-cg",
    "und-ch": "de-latn-ch",
    "und-cham": "cjm-cham-vn",
    "und-cher": "chr-cher-us",
    "und-chrs": "xco-chrs-uz",
    "und-ci": "fr-latn-ci",
    "und-cl": "es-latn-cl",
    "und-cm": "fr-latn-cm",
    "und-cn": "zh-hans-cn",
    "und-co": "es-latn-co",
    "und-copt": "cop-copt-eg",
    "und-cp": "und-latn-cp",
    "und-cpmn": "und-cpmn-cy",
    "und-cpmn-cy": "und-cpmn-cy",
    "und-cprt": "grc-cprt-cy",
    "und-cr": "es-latn-cr",
    "und-cu": "es-latn-cu",
    "und-cv": "pt-latn-cv",
    "und-cw": "pap-latn-cw",
    "und-cy": "el-grek-cy",
    "und-cyrl": "ru-cyrl-ru",
    "und-cyrl-al": "mk-cyrl-al",
    "und-cyrl-ba": "sr-cyrl-ba",
    "und-cyrl-ge": "ab-cyrl-ge",
    "und-cyrl-gr": "mk-cyrl-gr",
    "und-cyrl-md": "uk-cyrl-md",
    "und-cyrl-ro": "bg-cyrl-ro",
    "und-cyrl-sk": "uk-cyrl-sk",
    "und-cyrl-tr": "kbd-cyrl-tr",
    "und-cyrl-xk": "sr-cyrl-xk",
    "und-cz": "cs-latn-cz",
    "und-de": "de-latn-de",
    "und-deva": "hi-deva-in",
    "und-deva-bt": "ne-deva-bt",
    "und-deva-fj": "hif-deva-fj",
    "und-deva-mu": "bho-deva-mu",
    "und-deva-pk": "btv-deva-pk",
    "und-diak": "dv-diak-mv",
    "und-dj": "aa-latn-dj",
    "und-dk": "da-latn-dk",
    "und-do": "es-latn-do",
    "und-dogr": "doi-dogr-in",
    "und-dupl": "fr-dupl-fr",
    "und-dz": "ar-arab-dz",
    "und-ea": "es-latn-ea",
    "und-ec": "es-latn-ec",
    "und-ee": "et-latn-ee",
    "und-eg": "ar-arab-eg",
    "und-egyp": "egy-egyp-eg",
    "und-eh": "ar-arab-eh",
    "und-elba": "sq-elba-al",
    "und-elym": "arc-elym-ir",
    "und-er": "ti-ethi-er",
    "und-es": "es-latn-es",
    "und-et": "am-ethi-et",
    "und-ethi": "am-ethi-et",
    "und-eu": "en-latn-ie",
    "und-ez": "de-latn-ez",
    "und-fi": "fi-latn-fi",
    "und-fo": "fo-latn-fo",
    "und-fr": "fr-latn-fr",
    "und-ga": "fr-latn-ga",
    "und-ge": "ka-geor-ge",
    "und-geor": "ka-geor-ge",
    "und-gf": "fr-latn-gf",
    "und-gh": "ak-latn-gh",
    "und-gl": "kl-latn-gl",
    "und-glag": "cu-glag-bg",
    "und-gn": "fr-latn-gn",
    "und-gong": "wsg-gong-in",
    "und-gonm": "esg-gonm-in",
    "und-goth": "got-goth-ua",
    "und-gp": "fr-latn-gp",
    "und-gq": "es-latn-gq",
    "und-gr": "el-grek-gr",
    "und-gran": "sa-gran-in",
    "und-grek": "el-grek-gr",
    "und-grek-tr": "bgx-grek-tr",
    "und-gs": "und-latn-gs",
    "und-gt": "es-latn-gt",
    "und-gujr": "gu-gujr-in",
    "und-guru": "pa-guru-in",
    "und-gw": "pt-latn-gw",
    "und-hanb": "zh-hanb-tw",
    "und-hang": "ko-hang-kr",
    "und-hani": "zh-hani-cn",
    "und-hano": "hnn-hano-ph",
    "und-hans": "zh-hans-cn",
    "und-hant": "zh-hant-tw",
    "und-hant-ca": "yue-hant-ca",
    "und-hebr": "he-hebr-il",
    "und-hebr-se": "yi-hebr-se",
    "und-hebr-ua": "yi-hebr-ua",
    "und-hebr-us": "yi-hebr-us",
    "und-hira": "ja-hira-jp",
    "und-hk": "zh-hant-hk",
    "und-hluw": "hlu-hluw-tr",
    "und-hm": "und-latn-hm",
    "und-hmng": "hnj-hmng-la",
    "und-hmnp": "hnj-hmnp-us",
    "und-hn": "es-latn-hn",
    "und-hr": "hr-latn-hr",
    "und-ht": "ht-latn-ht",
    "und-hu": "hu-latn-hu",
    "und-hung": "hu-hung-hu",
    "und-ic": "es-latn-ic",
    "und-id": "id-latn-id",
    "und-il": "he-hebr-il",
    "und-in": "hi-deva-in",
    "und-iq": "ar-arab-iq",
    "und-ir": "fa-arab-ir",
    "und-is": "is-latn-is",
    "und-it": "it-latn-it",
    "und-ital": "ett-ital-it",
    "und-jamo": "ko-jamo-kr",
    "und-java": "jv-java-id",
    "und-jo": "ar-arab-jo",
    "und-jp": "ja-jpan-jp",
    "und-jpan": "ja-jpan-jp",
    "und-kali": "eky-kali-mm",
    "und-kana": "ja-kana-jp",
    "und-kawi": "kaw-kawi-id",
    "und-ke": "sw-latn-ke",
    "und-kg": "ky-cyrl-kg",
    "und-kh": "km-khmr-kh",
    "und-khar": "pra-khar-pk",
    "und-khmr": "km-khmr-kh",
    "und-khoj": "sd-khoj-in",
    "und-kits": "zkt-kits-cn",
    "und-km": "ar-arab-km",
    "und-knda": "kn-knda-in",
    "und-kore": "ko-kore-kr",
    "und-kp": "ko-kore-kp",
    "und-kr": "ko-kore-kr",
    "und-kthi": "bho-kthi-in",
    "und-kw": "ar-arab-kw",
    "und-kz": "ru-cyrl-kz",
    "und-la": "lo-laoo-la",
    "und-lana": "nod-lana-th",
    "und-laoo": "lo-laoo-la",
    "und-latn-af": "tk-latn-af",
    "und-latn-am": "ku-latn-am",
    "und-latn-cn": "za-latn-cn",
    "und-latn-cy": "tr-latn-cy",
    "und-latn-dz": "fr-latn-dz",
    "und-latn-et": "en-latn-et",
    "und-latn-ge": "ku-latn-ge",
    "und-latn-ir": "tk-latn-ir",
    "und-latn-km": "fr-latn-km",
    "und-latn-ma": "fr-latn-ma",
    "und-latn-mk": "sq-latn-mk",
    "und-latn-mm": "kac-latn-mm",
    "und-latn-mo": "pt-latn-mo",
    "und-latn-mr": "fr-latn-mr",
    "und-latn-ru": "krl-latn-ru",
    "und-latn-sy": "fr-latn-sy",
    "und-latn-tn": "fr-latn-tn",
    "und-latn-tw": "trv-latn-tw",
    "und-latn-ua": "pl-latn-ua",
    "und-lb": "ar-arab-lb",
    "und-lepc": "lep-lepc-in",
    "und-li": "de-latn-li",
    "und-limb": "lif-limb-in",
    "und-lina": "lab-lina-gr",
    "und-linb": "grc-linb-gr",
    "und-lisu": "lis-lisu-cn",
    "und-lk": "si-sinh-lk",
    "und-ls": "st-latn-ls",
    "und-lt": "lt-latn-lt",
    "und-lu": "fr-latn-lu",
    "und-lv": "lv-latn-lv",
    "und-ly": "ar-arab-ly",
    "und-lyci": "xlc-lyci-tr",
    "und-lydi": "xld-lydi-tr",
    "und-ma": "ar-arab-ma",
    "und-mahj": "hi-mahj-in",
    "und-maka": "mak-maka-id",
    "und-mand": "myz-mand-ir",
    "und-mani": "xmn-mani-cn",
    "und-marc": "bo-marc-cn",
    "und-mc": "fr-latn-mc",
    "und-md": "ro-latn-md",
    "und-me": "sr-latn-me",
    "und-medf": "dmf-medf-ng",
    "und-mend": "men-mend-sl",
    "und-merc": "xmr-merc-sd",
    "und-mero": "xmr-mero-sd",
    "und-mf": "fr-latn-mf",
    "und-mg": "mg-latn-mg",
    "und-mk": "mk-cyrl-mk",
    "und-ml": "bm-latn-ml",
    "und-mlym": "ml-mlym-in",
    "und-mm": "my-mymr-mm",
    "und-mn": "mn-cyrl-mn",
    "und-mo": "zh-hant-mo",
    "und-modi": "mr-modi-in",
    "und-mong": "mn-mong-cn",
    "und-mq": "fr-latn-mq",
    "und-mr": "ar-arab-mr",
    "und-mroo": "mro-mroo-bd",
    "und-mt": "mt-latn-mt",
    "und-mtei": "mni-mtei-in",
    "und-mu": "mfe-latn-mu",
    "und-mult": "skr-mult-pk",
    "und-mv": "dv-thaa-mv",
    "und-mx": "es-latn-mx",
    "und-my": "ms-latn-my",
    "und-mymr": "my-mymr-mm",
    "und-mymr-in": "kht-mymr-in",
    "und-mymr-th": "mnw-mymr-th",
    "und-mz": "pt-latn-mz",
    "und-na": "af-latn-na",
    "und-nagm": "unr-nagm-in",
    "und-nand": "sa-nand-in",
    "und-narb": "xna-narb-sa",
    "und-nbat": "arc-nbat-jo",
    "und-nc": "fr-latn-nc",
    "und-ne": "ha-latn-ne",
    "und-newa": "new-newa-np",
    "und-ni": "es-latn-ni",
    "und-nkoo": "man-nkoo-gn",
    "und-nl": "nl-latn-nl",
    "und-no": "nb-latn-no",
    "und-np": "ne-deva-np",
    "und-nshu": "zhx-nshu-cn",
    "und-ogam": "sga-ogam-ie",
    "und-olck": "sat-olck-in",
    "und-om": "ar-arab-om",
    "und-orkh": "otk-orkh-mn",
    "und-orya": "or-orya-in",
    "und-osge": "osa-osge-us",
    "und-osma": "so-osma-so",
    "und-ougr": "oui-ougr-143",
    "und-pa": "es-latn-pa",
    "und-palm": "arc-palm-sy",
    "und-pauc": "ctd-pauc-mm",
    "und-pe": "es-latn-pe",
    "und-perm": "kv-perm-ru",
    "und-pf": "fr-latn-pf",
    "und-pg": "tpi-latn-pg",
    "und-ph": "fil-latn-ph",
    "und-phag": "lzh-phag-cn",
    "und-phli": "pal-phli-ir",
    "und-phlp": "pal-phlp-cn",
    "und-phnx": "phn-phnx-lb",
    "und-pk": "ur-arab-pk",
    "und-pl": "pl-latn-pl",
    "und-plrd": "hmd-plrd-cn",
    "und-pm": "fr-latn-pm",
    "und-pr": "es-latn-pr",
    "und-prti": "xpr-prti-ir",
    "und-ps": "ar-arab-ps",
    "und-pt": "pt-latn-pt",
    "und-pw": "pau-latn-pw",
    "und-py": "gn-latn-py",
    "und-qa": "ar-arab-qa",
    "und-qo": "en-latn-dg",
    "und-re": "fr-latn-re",
    "und-rjng": "rej-rjng-id",
    "und-ro": "ro-latn-ro",
    "und-rohg": "rhg-rohg-mm",
    "und-rs": "sr-cyrl-rs",
    "und-ru": "ru-cyrl-ru",
    "und-runr": "non-runr-se",
    "und-rw": "rw-latn-rw",
    "und-sa": "ar-arab-sa",
    "und-samr": "smp-samr-il",
    "und-sarb": "xsa-sarb-ye",
    "und-saur": "saz-saur-in",
    "und-sc": "fr-latn-sc",
    "und-sd": "ar-arab-sd",
    "und-se": "sv-latn-se",
    "und-sgnw": "ase-sgnw-us",
    "und-shaw": "en-shaw-gb",
    "und-shrd": "sa-shrd-in",
    "und-si": "sl-latn-si",
    "und-sidd": "sa-sidd-in",
    "und-sind": "sd-sind-in",
    "und-sinh": "si-sinh-lk",
    "und-sj": "nb-latn-sj",
    "und-sk": "sk-latn-sk",
    "und-sm": "it-latn-sm",
    "und-sn": "fr-latn-sn",
    "und-so": "so-latn-so",
    "und-sogd": "sog-sogd-uz",
    "und-sogo": "sog-sogo-uz",
    "und-sora": "srb-sora-in",
    "und-soyo": "cmg-soyo-mn",
    "und-sr": "nl-latn-sr",
    "und-st": "pt-latn-st",
    "und-sund": "su-sund-id",
    "und-sv": "es-latn-sv",
    "und-sy": "ar-arab-sy",
    "und-sylo": "syl-sylo-bd",
    "und-syrc": "syr-syrc-iq",
    "und-tagb": "tbw-tagb-ph",
    "und-takr": "doi-takr-in",
    "und-tale": "tdd-tale-cn",
    "und-talu": "khb-talu-cn",
    "und-taml": "ta-taml-in",
    "und-tang": "txg-tang-cn",
    "und-tavt": "blt-tavt-vn",
    "und-td": "fr-latn-td",
    "und-telu": "te-telu-in",
    "und-tf": "fr-latn-tf",
    "und-tfng": "zgh-tfng-ma",
    "und-tg": "fr-latn-tg",
    "und-tglg": "fil-tglg-ph",
    "und-th": "th-thai-th",
    "und-thaa": "dv-thaa-mv",
    "und-thai": "th-thai-th",
    "und-thai-cn": "lcp-thai-cn",
    "und-thai-kh": "kdt-thai-kh",
    "und-thai-la": "kdt-thai-la",
    "und-tibt": "bo-tibt-cn",
    "und-tirh": "mai-tirh-in",
    "und-tj": "tg-cyrl-tj",
    "und-tk": "tkl-latn-tk",
    "und-tl": "pt-latn-tl",
    "und-tm": "tk-latn-tm",
    "und-tn": "ar-arab-tn",
    "und-tnsa": "nst-tnsa-in",
    "und-to": "to-latn-to",
    "und-toto": "txo-toto-in",
    "und-tr": "tr-latn-tr",
    "und-tv": "tvl-latn-tv",
    "und-tw": "zh-hant-tw",
    "und-tz": "sw-latn-tz",
    "und-ua": "uk-cyrl-ua",
    "und-ug": "sw-latn-ug",
    "und-ugar": "uga-ugar-sy",
    "und-uy": "es-latn-uy",
    "und-uz": "uz-latn-uz",
    "und-va": "it-latn-va",
    "und-vaii": "vai-vaii-lr",
    "und-ve": "es-latn-ve",
    "und-vith": "sq-vith-al",
    "und-vn": "vi-latn-vn",
    "und-vu": "bi-latn-vu",
    "und-wara": "hoc-wara-in",
    "und-wcho": "nnp-wcho-in",
    "und-wf": "fr-latn-wf",
    "und-ws": "sm-latn-ws",
    "und-xk": "sq-latn-xk",
    "und-xpeo": "peo-xpeo-ir",
    "und-xsux": "akk-xsux-iq",
    "und-ye": "ar-arab-ye",
    "und-yezi": "ku-yezi-ge",
    "und-yiii": "ii-yiii-cn",
    "und-yt": "fr-latn-yt",
    "und-zanb": "cmg-zanb-mn",
    "und-zw": "sn-latn-zw",
    unr: "unr-beng-in",
    "unr-deva": "unr-deva-np",
    "unr-np": "unr-deva-np",
    unx: "unx-beng-in",
    uok: "uok-latn-zz",
    ur: "ur-arab-pk",
    uri: "uri-latn-zz",
    urt: "urt-latn-zz",
    urw: "urw-latn-zz",
    usa: "usa-latn-zz",
    uth: "uth-latn-zz",
    utr: "utr-latn-zz",
    uvh: "uvh-latn-zz",
    uvl: "uvl-latn-zz",
    uz: "uz-latn-uz",
    "uz-af": "uz-arab-af",
    "uz-arab": "uz-arab-af",
    "uz-cn": "uz-cyrl-cn",
    vag: "vag-latn-zz",
    vai: "vai-vaii-lr",
    van: "van-latn-zz",
    ve: "ve-latn-za",
    vec: "vec-latn-it",
    vep: "vep-latn-ru",
    vi: "vi-latn-vn",
    vic: "vic-latn-sx",
    viv: "viv-latn-zz",
    vls: "vls-latn-be",
    vmf: "vmf-latn-de",
    vmw: "vmw-latn-mz",
    vo: "vo-latn-001",
    vot: "vot-latn-ru",
    vro: "vro-latn-ee",
    vun: "vun-latn-tz",
    vut: "vut-latn-zz",
    wa: "wa-latn-be",
    wae: "wae-latn-ch",
    waj: "waj-latn-zz",
    wal: "wal-ethi-et",
    wan: "wan-latn-zz",
    war: "war-latn-ph",
    wbp: "wbp-latn-au",
    wbq: "wbq-telu-in",
    wbr: "wbr-deva-in",
    wci: "wci-latn-zz",
    wer: "wer-latn-zz",
    wgi: "wgi-latn-zz",
    whg: "whg-latn-zz",
    wib: "wib-latn-zz",
    wiu: "wiu-latn-zz",
    wiv: "wiv-latn-zz",
    wja: "wja-latn-zz",
    wji: "wji-latn-zz",
    wls: "wls-latn-wf",
    wmo: "wmo-latn-zz",
    wnc: "wnc-latn-zz",
    wni: "wni-arab-km",
    wnu: "wnu-latn-zz",
    wo: "wo-latn-sn",
    wob: "wob-latn-zz",
    wos: "wos-latn-zz",
    wrs: "wrs-latn-zz",
    wsg: "wsg-gong-in",
    wsk: "wsk-latn-zz",
    wtm: "wtm-deva-in",
    wuu: "wuu-hans-cn",
    wuv: "wuv-latn-zz",
    wwa: "wwa-latn-zz",
    xav: "xav-latn-br",
    xbi: "xbi-latn-zz",
    xco: "xco-chrs-uz",
    xcr: "xcr-cari-tr",
    xes: "xes-latn-zz",
    xh: "xh-latn-za",
    xla: "xla-latn-zz",
    xlc: "xlc-lyci-tr",
    xld: "xld-lydi-tr",
    xmf: "xmf-geor-ge",
    xmn: "xmn-mani-cn",
    xmr: "xmr-merc-sd",
    xna: "xna-narb-sa",
    xnr: "xnr-deva-in",
    xog: "xog-latn-ug",
    xon: "xon-latn-zz",
    xpr: "xpr-prti-ir",
    xrb: "xrb-latn-zz",
    xsa: "xsa-sarb-ye",
    xsi: "xsi-latn-zz",
    xsm: "xsm-latn-zz",
    xsr: "xsr-deva-np",
    xwe: "xwe-latn-zz",
    yam: "yam-latn-zz",
    yao: "yao-latn-mz",
    yap: "yap-latn-fm",
    yas: "yas-latn-zz",
    yat: "yat-latn-zz",
    yav: "yav-latn-cm",
    yay: "yay-latn-zz",
    yaz: "yaz-latn-zz",
    yba: "yba-latn-zz",
    ybb: "ybb-latn-cm",
    yby: "yby-latn-zz",
    yer: "yer-latn-zz",
    ygr: "ygr-latn-zz",
    ygw: "ygw-latn-zz",
    yi: "yi-hebr-001",
    yko: "yko-latn-zz",
    yle: "yle-latn-zz",
    ylg: "ylg-latn-zz",
    yll: "yll-latn-zz",
    yml: "yml-latn-zz",
    yo: "yo-latn-ng",
    yon: "yon-latn-zz",
    yrb: "yrb-latn-zz",
    yre: "yre-latn-zz",
    yrl: "yrl-latn-br",
    yss: "yss-latn-zz",
    yua: "yua-latn-mx",
    yue: "yue-hant-hk",
    "yue-cn": "yue-hans-cn",
    "yue-hans": "yue-hans-cn",
    yuj: "yuj-latn-zz",
    yut: "yut-latn-zz",
    yuw: "yuw-latn-zz",
    za: "za-latn-cn",
    zag: "zag-latn-sd",
    zdj: "zdj-arab-km",
    zea: "zea-latn-nl",
    zgh: "zgh-tfng-ma",
    zh: "zh-hans-cn",
    "zh-au": "zh-hant-au",
    "zh-bn": "zh-hant-bn",
    "zh-bopo": "zh-bopo-tw",
    "zh-gb": "zh-hant-gb",
    "zh-gf": "zh-hant-gf",
    "zh-hanb": "zh-hanb-tw",
    "zh-hant": "zh-hant-tw",
    "zh-hk": "zh-hant-hk",
    "zh-id": "zh-hant-id",
    "zh-mo": "zh-hant-mo",
    "zh-pa": "zh-hant-pa",
    "zh-pf": "zh-hant-pf",
    "zh-ph": "zh-hant-ph",
    "zh-sr": "zh-hant-sr",
    "zh-th": "zh-hant-th",
    "zh-tw": "zh-hant-tw",
    "zh-us": "zh-hant-us",
    "zh-vn": "zh-hant-vn",
    zhx: "zhx-nshu-cn",
    zia: "zia-latn-zz",
    zkt: "zkt-kits-cn",
    zlm: "zlm-latn-tg",
    zmi: "zmi-latn-my",
    zne: "zne-latn-zz",
    zu: "zu-latn-za",
    zza: "zza-latn-tr"
};


var $b1c36f392367feb3$var$own = {}.hasOwnProperty;
var $b1c36f392367feb3$var$collator = new Intl.Collator();
/**
 * @param {Schema} base
 * @param {Partial<Schema>} changes
 * @returns {Schema}
 */ function $b1c36f392367feb3$var$merge(base, changes) {
    var _base_variants;
    if (!base.language) base.language = changes.language;
    if (!base.script) base.script = changes.script;
    if (!base.region) base.region = changes.region;
    if (changes.variants) (_base_variants = base.variants).push.apply(_base_variants, (0, $72af24a1cc374e04$export$2e2bcd8739ae039)(changes.variants));
    return base;
}
/**
 * Mostly like:
 * <https://github.com/formatjs/formatjs/blob/a15e757/packages/intl-locale/index.ts#L254>
 * But doesn’t crash.
 *
 * @param {Schema} schema
 * @returns {string}
 */ function $b1c36f392367feb3$var$addLikelySubtags(schema) {
    var language = schema.language, script = schema.script, region = schema.region;
    /** @type {string|undefined} */ var match;
    if (script && region && (match = (0, $353222f293c868ce$export$b94b6742f5dec598)[(0, $eab602125b5f843c$export$fac44ee5b035f737)({
        language: language,
        script: script,
        region: region
    })])) {
        schema.script = undefined;
        schema.region = undefined;
    } else if (script && (match = (0, $353222f293c868ce$export$b94b6742f5dec598)[(0, $eab602125b5f843c$export$fac44ee5b035f737)({
        language: language,
        script: script
    })])) schema.script = undefined;
    else if (region && (match = (0, $353222f293c868ce$export$b94b6742f5dec598)[(0, $eab602125b5f843c$export$fac44ee5b035f737)({
        language: language,
        region: region
    })])) schema.region = undefined;
    else language && (match = (0, $353222f293c868ce$export$b94b6742f5dec598)[language]);
    if (match) {
        schema.language = undefined;
        $b1c36f392367feb3$var$merge(schema, (0, $e669cf75fd6f5394$export$98e6a39c04603d36)(match));
    }
    return (0, $eab602125b5f843c$export$fac44ee5b035f737)(schema);
}
/**
 * @param {Schema} schema
 */ function $b1c36f392367feb3$var$removeLikelySubtags(schema) {
    $b1c36f392367feb3$var$addLikelySubtags(schema);
    var language = schema.language, script = schema.script, region = schema.region;
    if (!language) return schema;
    var maxLocale = (0, $eab602125b5f843c$export$fac44ee5b035f737)({
        language: language,
        script: script,
        region: region
    });
    if (maxLocale === $b1c36f392367feb3$var$addLikelySubtags((0, $e669cf75fd6f5394$export$98e6a39c04603d36)(language))) {
        schema.script = undefined;
        schema.region = undefined;
    } else if (region && maxLocale === $b1c36f392367feb3$var$addLikelySubtags((0, $e669cf75fd6f5394$export$98e6a39c04603d36)(language + "-" + region))) schema.script = undefined;
    else if (script && maxLocale === $b1c36f392367feb3$var$addLikelySubtags((0, $e669cf75fd6f5394$export$98e6a39c04603d36)(language + "-" + script))) schema.region = undefined;
    return schema;
}
function $b1c36f392367feb3$export$d9b31aac4a13cff9(tag, options) {
    var settings = options || {};
    // 1. normalize and lowercase the tag (`sgn-be-fr` -> `sfb`).
    var schema = (0, $e669cf75fd6f5394$export$98e6a39c04603d36)(String(tag || "").toLowerCase(), settings);
    var value = (0, $eab602125b5f843c$export$fac44ee5b035f737)(schema);
    if (!value) return value;
    var index = -1;
    // 2. Do fancy, expensive replaces (`ha-latn-gh` -> `ha-gh`).
    while(++index < (0, $400ed7f3cad3733c$export$de994efd351b291c).length){
        var from = (0, $400ed7f3cad3733c$export$de994efd351b291c)[index].from;
        if (from.slice(0, 4) === "und-" && schema.language) from = schema.language + from.slice(3);
        if ((0, $a6c3f5609f7c5336$export$d216e65da1a9aa7e)(value, from).length > 0) $b1c36f392367feb3$var$replace(schema, from, (0, $400ed7f3cad3733c$export$de994efd351b291c)[index].to);
    }
    // 3. Do basic field replaces (`en-840` -> `en-us`).
    index = -1;
    while(++index < (0, $916f27da40e5479a$export$4dbdc8f16fed8a34).length)if ($b1c36f392367feb3$var$remove(schema, (0, $916f27da40e5479a$export$4dbdc8f16fed8a34)[index].from.field, (0, $916f27da40e5479a$export$4dbdc8f16fed8a34)[index].from.value)) $b1c36f392367feb3$var$add(schema, (0, $916f27da40e5479a$export$4dbdc8f16fed8a34)[index].to.field, (0, $916f27da40e5479a$export$4dbdc8f16fed8a34)[index].to.value);
    // 4. Minimize.
    $b1c36f392367feb3$var$removeLikelySubtags(schema);
    // 5. Sort variants, and sort extensions on singleton.
    schema.variants.sort($b1c36f392367feb3$var$collator.compare);
    schema.extensions.sort($b1c36f392367feb3$var$compareSingleton);
    // 6. Warn if fields (currently only regions) should be updated but have
    // multiple choices.
    if (settings.warning) {
        /** @type {keyof many} */ var key;
        for(key in 0, $ed551a29fdd56fec$export$14badfee79ea396f)if ($b1c36f392367feb3$var$own.call((0, $ed551a29fdd56fec$export$14badfee79ea396f), key)) {
            var map = (0, $ed551a29fdd56fec$export$14badfee79ea396f)[key];
            var value1 = schema[key];
            if (value1 && $b1c36f392367feb3$var$own.call(map, value1)) {
                var replacements = map[value1];
                settings.warning("Deprecated " + key + " `" + value1 + "`, expected one of `" + replacements.join("`, `") + "`", -1, 7);
            }
        }
    }
    // 7. Add proper casing back.
    // Format script (ISO 15924) as titlecase (example: `Latn`):
    if (schema.script) schema.script = schema.script.charAt(0).toUpperCase() + schema.script.slice(1);
    // Format region (ISO 3166) as uppercase (note: this doesn’t affect numeric
    // codes, which is fine):
    if (schema.region) schema.region = schema.region.toUpperCase();
    return (0, $eab602125b5f843c$export$fac44ee5b035f737)(schema);
}
/**
 * @param {Schema} schema
 * @param {string} from
 * @param {string} to
 * @returns {void}
 */ function $b1c36f392367feb3$var$replace(schema, from, to) {
    var left = (0, $e669cf75fd6f5394$export$98e6a39c04603d36)(from);
    var right = (0, $e669cf75fd6f5394$export$98e6a39c04603d36)(to);
    /** @type {Array<string>} */ var removed = [];
    /** @type {string|null|undefined} */ var lang = left.language;
    /** @type {keyof schema} */ var key;
    // Remove values from `from`:
    for(key in left)if ($b1c36f392367feb3$var$own.call(left, key)) {
        var value = left[key];
        if (value && $b1c36f392367feb3$var$remove(schema, key, value)) removed.push(key);
    }
    // Add values from `to`:
    for(key in right)if ($b1c36f392367feb3$var$own.call(right, key)) {
        var value1 = right[key];
        // Only add values that are defined on `to`, and that were either removed by
        // `from` or are currently empty.
        if (lang && value1 && (removed.includes(key) || !schema[key])) $b1c36f392367feb3$var$add(schema, key, key === "language" && value1 === "und" ? lang : value1);
    }
}
/**
 * @param {Schema} object
 * @param {keyof Schema} key
 * @param {string|Array<string>|Array<Extension>} value
 * @returns {boolean}
 */ function $b1c36f392367feb3$var$remove(object, key, value) {
    var removed = false;
    /** @type {string|Array<string>|Array<Extension>|null|undefined} */ var result;
    if (value) {
        var current = object[key];
        result = current;
        if (Array.isArray(current)) {
            result = [];
            var index = -1;
            while(++index < current.length){
                var item = current[index];
                // @ts-expect-error: TS can’t handle the two lists.
                if (value.includes(item)) removed = true;
                else // @ts-expect-error: TS can’t handle the two lists.
                result.push(item);
            }
        } else if (current === value) {
            result = null;
            removed = true;
        }
        // @ts-expect-error: Assume the value matches.
        object[key] = result;
    }
    return removed;
}
/**
 * @param {Schema} object
 * @param {keyof Schema} key
 * @param {string|Array<string>|Array<Extension>} value
 * @returns {void}
 */ function $b1c36f392367feb3$var$add(object, key, value) {
    /** @type {string|Array<string>|Array<Extension>|null|undefined} */ var current = object[key];
    if (Array.isArray(current)) {
        var list = Array.isArray(value) ? value : [
            value
        ];
        /** @type {number} */ var index = -1;
        while(++index < list.length){
            var item = list[index];
            // @ts-expect-error: TS can’t handle the two lists.
            if (!current.includes(item)) // @ts-expect-error: TS can’t handle the two lists.
            current.push(item);
        }
    } else // @ts-expect-error: Assume the value matches.
    object[key] = value;
}
/**
 * @param {Extension} left
 * @param {Extension} right
 * @returns {number}
 */ function $b1c36f392367feb3$var$compareSingleton(left, right) {
    return $b1c36f392367feb3$var$collator.compare(left.singleton, right.singleton);
}


var /** @ts-ignore */ $756ef23503bdc599$export$2e2bcd8739ae039 = {
    sources: [
        "https://bcp47.danielbeeke.nl/data/lmt.json",
        "https://bcp47.danielbeeke.nl/data/iso-639-3.json",
        "https://bcp47.danielbeeke.nl/data/rolv2.json"
    ],
    alternativeHtmlName: "bcp47-picker",
    theme: {
        valueInput: "form-control",
        valueContainer: "input-group",
        base: "bootstrap",
        valueContainerAdvanced: "form-floating mb-3",
        showPartsButton: "btn btn-outline-secondary",
        showSearchButton: "btn btn-outline-secondary",
        backButton: "btn btn-outline-secondary",
        results: "list-group",
        resultItem: "list-group-item list-group-item-action d-flex gap-2",
        code: "badge rounded-pill bg-light text-dark",
        resultCount: "input-group-text",
        collapseButton: "btn btn-outline-secondary",
        expandButton: "btn btn-outline-secondary",
        loading: "loading",
        advanced: "mt-4",
        advancedTitle: "mb-2",
        valueItem: "item",
        addItemButton: "btn btn-outline-secondary",
        alternativeNames: "text-truncate text-muted fst-italic fw-light pe-1",
        name: "flex-nowrap bcp47-name-span"
    },
    forceCanonical: true
};



function $0757cf2a9f037b0c$var$_templateObject() {
    var data = (0, $d058b18588395c26$export$2e2bcd8739ae039)([
        "\n        <div class=",
        ">\n          ",
        "\n\n          ",
        "\n        </div>\n\n        ",
        "\n\n        ",
        "\n      "
    ]);
    $0757cf2a9f037b0c$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $0757cf2a9f037b0c$var$_templateObject1() {
    var data = (0, $d058b18588395c26$export$2e2bcd8739ae039)([
        "\n        <input \n          placeholder=",
        " \n          class=",
        " \n          type='search' \n          onchange=",
        "\n          onkeydown=",
        "\n          onblur=",
        " \n          />\n      "
    ]);
    $0757cf2a9f037b0c$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $0757cf2a9f037b0c$var$_templateObject2() {
    var data = (0, $d058b18588395c26$export$2e2bcd8739ae039)([
        "\n            <div class=",
        ">\n              <span onclick=",
        " class=",
        ">\n                ",
        "\n              </span>\n\n              <span class=",
        ">\n                ",
        '\n              </span>\n              \n              <span class="bcp47-remove-value" onclick=',
        ">",
        "</span>\n            </div>"
    ]);
    $0757cf2a9f037b0c$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $0757cf2a9f037b0c$var$_templateObject3() {
    var data = (0, $d058b18588395c26$export$2e2bcd8739ae039)([
        ""
    ]);
    $0757cf2a9f037b0c$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function $0757cf2a9f037b0c$var$_templateObject4() {
    var data = (0, $d058b18588395c26$export$2e2bcd8739ae039)([
        "\n        <span class=",
        ">\n          ",
        "\n        </span>\n        "
    ]);
    $0757cf2a9f037b0c$var$_templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
function $0757cf2a9f037b0c$var$_templateObject5() {
    var data = (0, $d058b18588395c26$export$2e2bcd8739ae039)([
        "\n        <div class=",
        ">\n          ",
        "\n\n          ",
        "\n        </div>\n\n\n        ",
        "\n      "
    ]);
    $0757cf2a9f037b0c$var$_templateObject5 = function _templateObject5() {
        return data;
    };
    return data;
}
function $0757cf2a9f037b0c$var$_templateObject6() {
    var data = (0, $d058b18588395c26$export$2e2bcd8739ae039)([
        '\n      <button type="button" class=',
        " onclick=",
        ">",
        "</button>\n      "
    ]);
    $0757cf2a9f037b0c$var$_templateObject6 = function _templateObject6() {
        return data;
    };
    return data;
}
function $0757cf2a9f037b0c$var$_templateObject7() {
    var data = (0, $d058b18588395c26$export$2e2bcd8739ae039)([
        "\n\n      ",
        '\n\n      <button type="button" class=',
        " onclick=",
        ">",
        "</button>\n      "
    ]);
    $0757cf2a9f037b0c$var$_templateObject7 = function _templateObject7() {
        return data;
    };
    return data;
}
function $0757cf2a9f037b0c$var$_templateObject8() {
    var data = (0, $d058b18588395c26$export$2e2bcd8739ae039)([
        "\n        <div class=",
        ">\n          <input disabled=",
        ' placeholder="." class=',
        ' type="text" .value=',
        ' maxlength="3" />\n          <label>Extended language subtags</label>\n        </div>\n        '
    ]);
    $0757cf2a9f037b0c$var$_templateObject8 = function _templateObject8() {
        return data;
    };
    return data;
}
function $0757cf2a9f037b0c$var$_templateObject9() {
    var data = (0, $d058b18588395c26$export$2e2bcd8739ae039)([
        "\n        <div class=",
        ">\n            <input disabled=",
        ' placeholder="." type="text" class=',
        " .value=",
        " />\n            <label>Extension subtags</label>\n        </div>\n\n        <div class=",
        ">\n          <input disabled=",
        ' type="text" placeholder="." class=',
        " .value=",
        " />\n          <label>Private use subtags</label>\n        </div>\n      "
    ]);
    $0757cf2a9f037b0c$var$_templateObject9 = function _templateObject9() {
        return data;
    };
    return data;
}
function $0757cf2a9f037b0c$var$_templateObject10() {
    var data = (0, $d058b18588395c26$export$2e2bcd8739ae039)([
        "\n      <div class=",
        ">\n        <h6 class=",
        ">Manual configuration</h6>\n\n        <div class=",
        ">\n          ",
        "\n        </div>\n\n        ",
        "\n\n        <div class=",
        ">\n          ",
        "\n        </div>\n\n        <div class=",
        ">\n          ",
        "\n        </div>\n\n        ",
        "\n        \n      </div>\n      "
    ]);
    $0757cf2a9f037b0c$var$_templateObject10 = function _templateObject10() {
        return data;
    };
    return data;
}
function $0757cf2a9f037b0c$var$_templateObject11() {
    var data = (0, $d058b18588395c26$export$2e2bcd8739ae039)([
        "<option value=",
        " ?selected=",
        ">",
        "</option>"
    ]);
    $0757cf2a9f037b0c$var$_templateObject11 = function _templateObject11() {
        return data;
    };
    return data;
}
function $0757cf2a9f037b0c$var$_templateObject12() {
    var data = (0, $d058b18588395c26$export$2e2bcd8739ae039)([
        "\n        <input disabled=",
        ' placeholder="." class=',
        " onchange=",
        " list=",
        ' autocomplete="off" .value=',
        ">\n        <label>",
        "</label>\n        <datalist id=",
        ">\n          ",
        "\n        </datalist>\n        <span class=",
        ">\n          ",
        "\n          <span class=",
        ">",
        "</span>\n        </span>\n      "
    ]);
    $0757cf2a9f037b0c$var$_templateObject12 = function _templateObject12() {
        return data;
    };
    return data;
}
function $0757cf2a9f037b0c$var$_templateObject13() {
    var data = (0, $d058b18588395c26$export$2e2bcd8739ae039)([
        "\n      <div class=",
        ">\n      ",
        "\n        <div ref=",
        ' class="bcp47-observer"></div>\n        <div class="bcp47-observer-spacer" style=',
        "></div>\n      </div>\n    "
    ]);
    $0757cf2a9f037b0c$var$_templateObject13 = function _templateObject13() {
        return data;
    };
    return data;
}
function $0757cf2a9f037b0c$var$_templateObject14() {
    var data = (0, $d058b18588395c26$export$2e2bcd8739ae039)([
        '\n      <button type="button" class=',
        " onclick=",
        ">\n        <span class=",
        ">",
        "</span>\n        <span class=",
        ">",
        "</span>\n        <span class=",
        " title=",
        ">",
        "</span>\n      </button>"
    ]);
    $0757cf2a9f037b0c$var$_templateObject14 = function _templateObject14() {
        return data;
    };
    return data;
}
var $0757cf2a9f037b0c$var$regionCodesMerged = [];
var $0757cf2a9f037b0c$var$languageOptions = [];
var $0757cf2a9f037b0c$var$scriptOptions = [];
var $0757cf2a9f037b0c$var$clean = function(input) {
    return input.split(" (")[0];
};
var $0757cf2a9f037b0c$var$listsAreImported = false;




var $0757cf2a9f037b0c$var$importLists = function() {
    var _ref = (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function() {
        var _regionCodesMerged, _languageOptions, _scriptOptions, iso15924, iso31661, iso6393, unM49, _language_iso6391;
        return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
            switch(_state.label){
                case 0:
                    if ($0757cf2a9f037b0c$var$listsAreImported) return [
                        2
                    ];
                    return [
                        4,
                        (parcelRequire("6CGvJ"))
                    ];
                case 1:
                    iso15924 = _state.sent().iso15924;
                    return [
                        4,
                        (parcelRequire("44x36"))
                    ];
                case 2:
                    iso31661 = _state.sent().iso31661;
                    return [
                        4,
                        (parcelRequire("2Qf01"))
                    ];
                case 3:
                    iso6393 = _state.sent().iso6393;
                    return [
                        4,
                        (parcelRequire("4sUAT"))
                    ];
                case 4:
                    unM49 = _state.sent().unM49;
                    (_regionCodesMerged = $0757cf2a9f037b0c$var$regionCodesMerged).push.apply(_regionCodesMerged, (0, $72af24a1cc374e04$export$2e2bcd8739ae039)((0, $72af24a1cc374e04$export$2e2bcd8739ae039)(iso31661.map(function(region) {
                        return [
                            region.alpha2,
                            "".concat(region.name, " (ISO 31661)")
                        ];
                    })).concat((0, $72af24a1cc374e04$export$2e2bcd8739ae039)(unM49.map(function(region) {
                        return [
                            region.code,
                            "".concat(region.name, " (unM49)")
                        ];
                    })))));
                    (_languageOptions = $0757cf2a9f037b0c$var$languageOptions).push.apply(_languageOptions, (0, $72af24a1cc374e04$export$2e2bcd8739ae039)(iso6393.map(function(language) {
                        return [
                            (_language_iso6391 = language.iso6391) !== null && _language_iso6391 !== void 0 ? _language_iso6391 : language.iso6393,
                            language.name
                        ];
                    })));
                    (_scriptOptions = $0757cf2a9f037b0c$var$scriptOptions).push.apply(_scriptOptions, (0, $72af24a1cc374e04$export$2e2bcd8739ae039)(iso15924.map(function(script) {
                        return [
                            script.code,
                            script.name
                        ];
                    })));
                    $0757cf2a9f037b0c$var$listsAreImported = true;
                    return [
                        2
                    ];
            }
        });
    });
    return function importLists() {
        return _ref.apply(this, arguments);
    };
}();
var $0757cf2a9f037b0c$export$2cd8252107eb640b = function() {
    var _ref = (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function() {
        var givenSettings, settings, sources, _, sourceKeys, searchIndex, index, Bcp47Picker, _settings_alternativeHtmlName;
        var _arguments = arguments;
        return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
            switch(_state.label){
                case 0:
                    givenSettings = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : {};
                    settings = (0, $36410437bb65816e$export$2e2bcd8739ae039)({}, (0, $756ef23503bdc599$export$2e2bcd8739ae039));
                    Object.assign(settings, givenSettings);
                    _ = Object.fromEntries;
                    return [
                        4,
                        Promise.all(settings.sources.map(function() {
                            var _ref = (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function(source) {
                                var _tmp;
                                return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            _tmp = [
                                                source
                                            ];
                                            return [
                                                4,
                                                (0, $35d1d0d7113d247f$export$3c0f06aa4e3158f2)(source).then(function(response) {
                                                    return new Map(response.data);
                                                })
                                            ];
                                        case 1:
                                            return [
                                                2,
                                                _tmp.concat([
                                                    _state.sent()
                                                ])
                                            ];
                                    }
                                });
                            });
                            return function(source) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 1:
                    sources = _.apply(Object, [
                        _state.sent()
                    ]);
                    sourceKeys = Object.keys(sources);
                    searchIndex = new (0, $0354d21a2b6a4db7$export$2e2bcd8739ae039)({
                        preset: "match",
                        tokenize: "forward",
                        cache: true,
                        encode: (0, $c1422f80caf7519f$export$c564cdbbe6da493)
                    });
                    index = function() {
                        var _ref = (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function() {
                            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, sourceName, sourceItems, sourceIndex, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, _step_value1, bcp47, _step_value_, name, names, index, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, name1;
                            return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = Object.entries(sources)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        _step_value = (0, $7c0b9cb584c10188$export$2e2bcd8739ae039)(_step.value, 2), sourceName = _step_value[0], sourceItems = _step_value[1];
                                        sourceIndex = sourceKeys.indexOf(sourceName);
                                        _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                        try {
                                            for(_iterator1 = sourceItems.entries()[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                                _step_value1 = (0, $7c0b9cb584c10188$export$2e2bcd8739ae039)(_step1.value, 2), bcp47 = _step_value1[0], _step_value_ = (0, $7c0b9cb584c10188$export$2e2bcd8739ae039)(_step_value1[1], 2), name = _step_value_[0], names = _step_value_[1];
                                                index = 0;
                                                searchIndex.add([
                                                    sourceIndex,
                                                    bcp47,
                                                    index++
                                                ], name);
                                                searchIndex.add([
                                                    sourceIndex,
                                                    bcp47,
                                                    index++
                                                ], bcp47);
                                                _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                                                if (names) try {
                                                    for(_iterator2 = names[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                                        name1 = _step2.value;
                                                        searchIndex.add([
                                                            sourceIndex,
                                                            bcp47,
                                                            index++
                                                        ], name1);
                                                    }
                                                } catch (err) {
                                                    _didIteratorError2 = true;
                                                    _iteratorError2 = err;
                                                } finally{
                                                    try {
                                                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                                            _iterator2.return();
                                                        }
                                                    } finally{
                                                        if (_didIteratorError2) {
                                                            throw _iteratorError2;
                                                        }
                                                    }
                                                }
                                            }
                                        } catch (err) {
                                            _didIteratorError1 = true;
                                            _iteratorError1 = err;
                                        } finally{
                                            try {
                                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                                    _iterator1.return();
                                                }
                                            } finally{
                                                if (_didIteratorError1) {
                                                    throw _iteratorError1;
                                                }
                                            }
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }
                                return [
                                    2
                                ];
                            });
                        });
                        return function index() {
                            return _ref.apply(this, arguments);
                        };
                    }();
                    setTimeout(index, 100);
                    Bcp47Picker = /*#__PURE__*/ function(HTMLElement1) {
                        "use strict";
                        (0, $71ac165bff2ee2a5$export$2e2bcd8739ae039)(Bcp47Picker, HTMLElement1);
                        var _super = (0, $6ab935263735026d$export$2e2bcd8739ae039)(Bcp47Picker);
                        function Bcp47Picker() {
                            (0, $8d9b50f7471c26a4$export$2e2bcd8739ae039)(this, Bcp47Picker);
                            var _this;
                            _this = _super.apply(this, arguments);
                            (0, $0d1900cd201c2943$export$2e2bcd8739ae039)((0, $cd19ae3843c9e243$export$2e2bcd8739ae039)(_this), "searchResults", []);
                            (0, $0d1900cd201c2943$export$2e2bcd8739ae039)((0, $cd19ae3843c9e243$export$2e2bcd8739ae039)(_this), "values", []);
                            (0, $0d1900cd201c2943$export$2e2bcd8739ae039)((0, $cd19ae3843c9e243$export$2e2bcd8739ae039)(_this), "showIndividualComponents", false);
                            (0, $0d1900cd201c2943$export$2e2bcd8739ae039)((0, $cd19ae3843c9e243$export$2e2bcd8739ae039)(_this), "showAdvanced", false);
                            (0, $0d1900cd201c2943$export$2e2bcd8739ae039)((0, $cd19ae3843c9e243$export$2e2bcd8739ae039)(_this), "isEditing", false);
                            (0, $0d1900cd201c2943$export$2e2bcd8739ae039)((0, $cd19ae3843c9e243$export$2e2bcd8739ae039)(_this), "maxItems", 20);
                            (0, $0d1900cd201c2943$export$2e2bcd8739ae039)((0, $cd19ae3843c9e243$export$2e2bcd8739ae039)(_this), "observer", false);
                            (0, $0d1900cd201c2943$export$2e2bcd8739ae039)((0, $cd19ae3843c9e243$export$2e2bcd8739ae039)(_this), "defaultMaxItems", 20);
                            (0, $0d1900cd201c2943$export$2e2bcd8739ae039)((0, $cd19ae3843c9e243$export$2e2bcd8739ae039)(_this), "bcp47Index", new Map());
                            (0, $0d1900cd201c2943$export$2e2bcd8739ae039)((0, $cd19ae3843c9e243$export$2e2bcd8739ae039)(_this), "focusedResult", 0);
                            return _this;
                        }
                        (0, $72a98b1266d4eea6$export$2e2bcd8739ae039)(Bcp47Picker, [
                            {
                                key: "connectedCallback",
                                value: /**
     * We render first and then we index the data.
     */ function connectedCallback() {
                                    var _this = this;
                                    return (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function() {
                                        var _this_getAttribute, _this_values, _this_getAttribute_split, _this_values_;
                                        return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    _this.values = (_this_getAttribute_split = (_this_getAttribute = _this.getAttribute("value")) === null || _this_getAttribute === void 0 ? void 0 : _this_getAttribute.split(/,| /g)) !== null && _this_getAttribute_split !== void 0 ? _this_getAttribute_split : [];
                                                    _this.selectedValue = (_this_values_ = (_this_values = _this.values) === null || _this_values === void 0 ? void 0 : _this_values[0]) !== null && _this_values_ !== void 0 ? _this_values_ : "";
                                                    _this.classList.add("bcp47-picker");
                                                    if (_this.bcp47Index.size) return [
                                                        2
                                                    ];
                                                    if (settings.theme.base) _this.classList.add(settings.theme.base);
                                                    return [
                                                        4,
                                                        _this.render()
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    })();
                                }
                            },
                            {
                                key: "render",
                                value: function render1() {
                                    var searchTerm = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
                                    var _this = this;
                                    return (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function() {
                                        var _tmp;
                                        return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    _tmp = [
                                                        _this
                                                    ];
                                                    return [
                                                        4,
                                                        _this.template(searchTerm)
                                                    ];
                                                case 1:
                                                    return [
                                                        2,
                                                        (0, $b92eccbc68fb415f$export$b3890eb0ae9dca99).apply(void 0, _tmp.concat([
                                                            _state.sent()
                                                        ]))
                                                    ];
                                            }
                                        });
                                    })();
                                }
                            },
                            {
                                key: "search",
                                value: /**
     * Searches through the text index and returns an initiated object.
     */ function search(searchTerm) {
                                    var _this = this;
                                    return (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function() {
                                        var bcp47Strings;
                                        return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        searchIndex.search(searchTerm)
                                                    ];
                                                case 1:
                                                    bcp47Strings = _state.sent();
                                                    return [
                                                        2,
                                                        bcp47Strings.map(function(param) {
                                                            var _param = (0, $7c0b9cb584c10188$export$2e2bcd8739ae039)(param, 2), sourceIndex = _param[0], index = _param[1];
                                                            var sourceName = sourceKeys[sourceIndex];
                                                            return [
                                                                index,
                                                                sources[sourceName].get(index.toString())
                                                            ];
                                                        }).filter((0, $e28409dee2b0de01$export$36ea2e897413bf91)("0")).sort(function(a, b) {
                                                            var aNormalized = settings.forceCanonical ? (0, $b1c36f392367feb3$export$d9b31aac4a13cff9)(a[0], {
                                                                forgiving: true
                                                            }) : a[0];
                                                            var bNormalized = settings.forceCanonical ? (0, $b1c36f392367feb3$export$d9b31aac4a13cff9)(b[0], {
                                                                forgiving: true
                                                            }) : b[0];
                                                            if (aNormalized.length !== bNormalized.length) return aNormalized.length - bNormalized.length;
                                                            return aNormalized.localeCompare(bNormalized);
                                                        }).slice(0, _this.maxItems)
                                                    ];
                                            }
                                        });
                                    })();
                                }
                            },
                            {
                                key: "template",
                                value: /**
     * The template of the whole widget.
     */ function template() {
                                    var searchTerm = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
                                    var _this = this;
                                    return (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function() {
                                        var value, _tmp, _tmp1;
                                        return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    value = _this.selectedValue ? (0, $e669cf75fd6f5394$export$98e6a39c04603d36)(_this.selectedValue) : {
                                                        language: null,
                                                        extendedLanguageSubtags: [],
                                                        script: null,
                                                        region: null,
                                                        variants: [],
                                                        extensions: [],
                                                        privateuse: [],
                                                        irregular: null,
                                                        regular: null
                                                    };
                                                    _tmp = [
                                                        $0757cf2a9f037b0c$var$_templateObject(),
                                                        "bcp47-value ".concat(settings.theme.valueContainer)
                                                    ];
                                                    if (!_this.selectedValue) return [
                                                        3,
                                                        2
                                                    ];
                                                    return [
                                                        4,
                                                        _this.valuesDisplay()
                                                    ];
                                                case 1:
                                                    _tmp1 = _state.sent();
                                                    return [
                                                        3,
                                                        3
                                                    ];
                                                case 2:
                                                    _tmp1 = _this.emptyDisplay();
                                                    _state.label = 3;
                                                case 3:
                                                    _tmp = _tmp.concat(_tmp1, _this.buttons(value));
                                                    return [
                                                        4,
                                                        _this.individualComponentsForm(value)
                                                    ];
                                                case 4:
                                                    return [
                                                        2,
                                                        (0, $b92eccbc68fb415f$export$c0bb0b647f701bb5).apply(void 0, _tmp.concat([
                                                            _state.sent(),
                                                            _this.resultsWrapper(searchTerm)
                                                        ]))
                                                    ];
                                            }
                                        });
                                    })();
                                }
                            },
                            {
                                key: "focus",
                                value: function focus() {
                                    var _this_querySelector;
                                    (_this_querySelector = this.querySelector(".bcp47-search")) === null || _this_querySelector === void 0 ? void 0 : _this_querySelector.focus();
                                }
                            },
                            {
                                key: "label",
                                value: function label(value) {
                                    var _this = this;
                                    return (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function() {
                                        var label, _sources_source_get, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, source;
                                        return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    label = undefined;
                                                    if (!value) return [
                                                        3,
                                                        2
                                                    ];
                                                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                                    try {
                                                        /**
         * Do we have a label given by one of the sources?
         */ for(_iterator = Object.keys(sources)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                                            source = _step.value;
                                                            if (!label) label = (_sources_source_get = sources[source].get((0, $eab602125b5f843c$export$fac44ee5b035f737)(value))) === null || _sources_source_get === void 0 ? void 0 : _sources_source_get[0];
                                                        }
                                                    } catch (err) {
                                                        _didIteratorError = true;
                                                        _iteratorError = err;
                                                    } finally{
                                                        try {
                                                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                                                _iterator.return();
                                                            }
                                                        } finally{
                                                            if (_didIteratorError) {
                                                                throw _iteratorError;
                                                            }
                                                        }
                                                    }
                                                    if (!!label) return [
                                                        3,
                                                        2
                                                    ];
                                                    return [
                                                        4,
                                                        _this.getLabel(value)
                                                    ];
                                                case 1:
                                                    label = _state.sent();
                                                    _state.label = 2;
                                                case 2:
                                                    return [
                                                        2,
                                                        label
                                                    ];
                                            }
                                        });
                                    })();
                                }
                            },
                            {
                                /**
     * Default starting input
     */ key: "emptyDisplay",
                                value: function emptyDisplay() {
                                    var hideBorder = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                                    var _this = this;
                                    var _this1 = this;
                                    return (0, $b92eccbc68fb415f$export$c0bb0b647f701bb5)($0757cf2a9f037b0c$var$_templateObject1(), this.values.length === 0 ? "Search for a language, region or dialect" : "", "".concat(hideBorder ? "hide-borders" : "", " bcp47-search ").concat(settings.theme.valueInput), function(event) {
                                        event.stopPropagation();
                                        event.stopImmediatePropagation();
                                        event.preventDefault();
                                    }, function() {
                                        var _ref = (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function(event) {
                                            var _this_searchResults, _this_searchResults_this_focusedResult, _this_querySelector, isChar, searchTerm, resultsWrapper, _resultsWrapper_children_indexToScrollTo, itemsPerPage, page, indexToScrollTo;
                                            return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        isChar = event.key.length === 1 && event.key.match(/[a-z]/g) && !event.ctrlKey;
                                                        searchTerm = event.target.value + (isChar ? event.key : "");
                                                        return [
                                                            4,
                                                            _this.search(searchTerm)
                                                        ];
                                                    case 1:
                                                        _this.searchResults = _state.sent();
                                                        if (event.key === "Backspace" && searchTerm.length === 0) {
                                                            _this.values.pop();
                                                            _this.selectedValue = _this.values[0];
                                                            _this.value = _this.values.join(",");
                                                            _this.dispatchEvent(new CustomEvent("change"));
                                                        }
                                                        if (!(event.key === "Escape")) return [
                                                            3,
                                                            3
                                                        ];
                                                        return [
                                                            4,
                                                            _this.setValue(null)
                                                        ];
                                                    case 2:
                                                        _state.sent();
                                                        _state.label = 3;
                                                    case 3:
                                                        if (!(event.key === "ArrowDown")) return [
                                                            3,
                                                            5
                                                        ];
                                                        _this.focusedResult++;
                                                        if (!(_this.focusedResult > _this.maxItems && _this.focusedResult < _this.searchResults.length)) return [
                                                            3,
                                                            5
                                                        ];
                                                        return [
                                                            4,
                                                            _this.increaseVisibleResults()
                                                        ];
                                                    case 4:
                                                        _state.sent();
                                                        _state.label = 5;
                                                    case 5:
                                                        if (event.key === "ArrowUp") _this.focusedResult--;
                                                        if (!(event.key === "Enter" && ((_this_searchResults = _this.searchResults) === null || _this_searchResults === void 0 ? void 0 : (_this_searchResults_this_focusedResult = _this_searchResults[_this.focusedResult]) === null || _this_searchResults_this_focusedResult === void 0 ? void 0 : _this_searchResults_this_focusedResult[0]))) return [
                                                            3,
                                                            7
                                                        ];
                                                        return [
                                                            4,
                                                            _this.setValue(_this.searchResults[_this.focusedResult][0])
                                                        ];
                                                    case 6:
                                                        _state.sent();
                                                        _state.label = 7;
                                                    case 7:
                                                        if (_this.focusedResult < 0) _this.focusedResult = 0;
                                                        if (_this.focusedResult >= _this.searchResults.length) _this.focusedResult = _this.searchResults.length - 1;
                                                        return [
                                                            4,
                                                            _this.render(searchTerm)
                                                        ];
                                                    case 8:
                                                        _state.sent();
                                                        resultsWrapper = document.querySelector(".bcp47-results");
                                                        if (resultsWrapper) {
                                                            if (isChar) resultsWrapper.scrollTop = 0;
                                                            else {
                                                                ;
                                                                itemsPerPage = Math.floor(resultsWrapper.clientHeight / resultsWrapper.children[0].clientHeight);
                                                                page = Math.floor(_this.focusedResult / itemsPerPage);
                                                                indexToScrollTo = page * itemsPerPage;
                                                                (_resultsWrapper_children_indexToScrollTo = resultsWrapper.children[indexToScrollTo]) === null || _resultsWrapper_children_indexToScrollTo === void 0 ? void 0 : _resultsWrapper_children_indexToScrollTo.scrollIntoView({
                                                                    behavior: "smooth"
                                                                });
                                                            }
                                                        }
                                                        (_this_querySelector = _this.querySelector(".bcp47-search")) === null || _this_querySelector === void 0 ? void 0 : _this_querySelector.focus();
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        });
                                        return function(event) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }(), function() {
                                        var _ref = (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function(event) {
                                            var _event_relatedTarget;
                                            return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        if (((_event_relatedTarget = event.relatedTarget) === null || _event_relatedTarget === void 0 ? void 0 : _event_relatedTarget.closest(".bcp47-picker")) === _this1) return [
                                                            2
                                                        ];
                                                        return [
                                                            4,
                                                            _this1.setValue(null)
                                                        ];
                                                    case 1:
                                                        _state.sent();
                                                        return [
                                                            4,
                                                            _this1.render()
                                                        ];
                                                    case 2:
                                                        _state.sent();
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        });
                                        return function(event) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }());
                                }
                            },
                            {
                                key: "valuesDisplay",
                                value: /**
     * Shows the current value
     */ function valuesDisplay() {
                                    var _this = this;
                                    return (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function() {
                                        var _tmp;
                                        return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    _tmp = [
                                                        $0757cf2a9f037b0c$var$_templateObject5(),
                                                        "bcp47-value-wrapper ".concat(settings.theme.valueInput)
                                                    ];
                                                    return [
                                                        4,
                                                        Promise.all(_this.values.map(function() {
                                                            var _ref = (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function(item) {
                                                                var value, _tmp;
                                                                return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                                                    switch(_state.label){
                                                                        case 0:
                                                                            value = (0, $e669cf75fd6f5394$export$98e6a39c04603d36)(item);
                                                                            _tmp = [
                                                                                $0757cf2a9f037b0c$var$_templateObject2(),
                                                                                "bcp47-value-item ".concat(settings.theme.valueItem),
                                                                                function() {
                                                                                    _this.selectedValue = item;
                                                                                    _this.render();
                                                                                },
                                                                                "bcp47-value-label ".concat(item === _this.selectedValue ? "active" : "")
                                                                            ];
                                                                            return [
                                                                                4,
                                                                                _this.label(value)
                                                                            ];
                                                                        case 1:
                                                                            return [
                                                                                2,
                                                                                (0, $b92eccbc68fb415f$export$c0bb0b647f701bb5).apply(void 0, _tmp.concat([
                                                                                    _state.sent(),
                                                                                    "bcp47-value-bcp47 ".concat(settings.theme.code),
                                                                                    item,
                                                                                    /*#__PURE__*/ (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function() {
                                                                                        var selectedItem, index, _this_values_join;
                                                                                        return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                                                                            switch(_state.label){
                                                                                                case 0:
                                                                                                    selectedItem = _this.values.find(function(innerValue) {
                                                                                                        return innerValue === item;
                                                                                                    });
                                                                                                    if (selectedItem) {
                                                                                                        index = _this.values.indexOf(selectedItem);
                                                                                                        if (index !== -1) _this.values.splice(index, 1);
                                                                                                    }
                                                                                                    _this.selectedValue = _this.values[0];
                                                                                                    _this.value = (_this_values_join = _this.values.join(",")) !== null && _this_values_join !== void 0 ? _this_values_join : "";
                                                                                                    _this.dispatchEvent(new CustomEvent("change"));
                                                                                                    return [
                                                                                                        4,
                                                                                                        _this.render()
                                                                                                    ];
                                                                                                case 1:
                                                                                                    _state.sent();
                                                                                                    _this.querySelector(".bcp47-search").focus();
                                                                                                    return [
                                                                                                        2
                                                                                                    ];
                                                                                            }
                                                                                        });
                                                                                    }),
                                                                                    (0, $918b76a580930af9$export$1ca1ec8b29a4ce27)("x")
                                                                                ]))
                                                                            ];
                                                                    }
                                                                });
                                                            });
                                                            return function(item) {
                                                                return _ref.apply(this, arguments);
                                                            };
                                                        }()))
                                                    ];
                                                case 1:
                                                    return [
                                                        2,
                                                        (0, $b92eccbc68fb415f$export$c0bb0b647f701bb5).apply(void 0, _tmp.concat([
                                                            _state.sent(),
                                                            _this.hasAttribute("multiple") ? _this.emptyDisplay(true) : (0, $b92eccbc68fb415f$export$c0bb0b647f701bb5)($0757cf2a9f037b0c$var$_templateObject3()),
                                                            _this.searchResults.length ? (0, $b92eccbc68fb415f$export$c0bb0b647f701bb5)($0757cf2a9f037b0c$var$_templateObject4(), "search-results-count ".concat(settings.theme.resultCount), _this.searchResults.length) : null
                                                        ]))
                                                    ];
                                            }
                                        });
                                    })();
                                }
                            },
                            {
                                /**
     * The buttons to show the fields.
     */ key: "buttons",
                                value: function buttons(value) {
                                    var _this = this;
                                    var _this1 = this;
                                    return (0, $b92eccbc68fb415f$export$c0bb0b647f701bb5)($0757cf2a9f037b0c$var$_templateObject7(), this.showIndividualComponents ? (0, $b92eccbc68fb415f$export$c0bb0b647f701bb5)($0757cf2a9f037b0c$var$_templateObject6(), "".concat(this.showAdvanced ? "active" : "", " ").concat(this.showAdvanced ? settings.theme.collapseButton : settings.theme.expandButton), /*#__PURE__*/ (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function() {
                                        return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    _this.showAdvanced = !_this.showAdvanced;
                                                    return [
                                                        4,
                                                        _this.render()
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    }), (0, $918b76a580930af9$export$1ca1ec8b29a4ce27)(this.showAdvanced ? "chevronContract" : "chevronExpand")) : null, "button ".concat(this.showIndividualComponents ? "active" : "", " ").concat(settings.theme.showPartsButton), /*#__PURE__*/ (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function() {
                                        return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    _this1.showIndividualComponents = !_this1.showIndividualComponents;
                                                    if (_this1.showIndividualComponents && (value.privateuse.length || value.extensions.length)) _this1.showAdvanced = true;
                                                    return [
                                                        4,
                                                        _this1.render()
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    }), (0, $918b76a580930af9$export$1ca1ec8b29a4ce27)("gearFill"));
                                }
                            },
                            {
                                key: "individualComponentsForm",
                                value: /**
     * The form with the seperate BCP47 components.
     */ function individualComponentsForm(value) {
                                    var _this = this;
                                    return (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function() {
                                        var _value_extendedLanguageSubtags_, _value_extensions_, _value_privateuse_;
                                        return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    if (!(_this.showIndividualComponents && !_this.searchResults.length)) return [
                                                        3,
                                                        2
                                                    ];
                                                    return [
                                                        4,
                                                        $0757cf2a9f037b0c$var$importLists()
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    _state.label = 2;
                                                case 2:
                                                    return [
                                                        2,
                                                        _this.showIndividualComponents && !_this.searchResults.length ? (0, $b92eccbc68fb415f$export$c0bb0b647f701bb5)($0757cf2a9f037b0c$var$_templateObject10(), "bcp47-advanced ".concat(settings.theme.advanced), "bcp47-advanced-title ".concat(settings.theme.advancedTitle), "bcp47-language bcp47-current-value-part ".concat(settings.theme.valueContainerAdvanced), _this.autoComplete("Language", $0757cf2a9f037b0c$var$languageOptions, value, "language"), _this.showAdvanced ? (0, $b92eccbc68fb415f$export$c0bb0b647f701bb5)($0757cf2a9f037b0c$var$_templateObject8(), "bcp47-region bcp47-current-value-part ".concat(settings.theme.valueContainerAdvanced), !value.language ? true : null, settings.theme.valueInput, (_value_extendedLanguageSubtags_ = value.extendedLanguageSubtags[0]) !== null && _value_extendedLanguageSubtags_ !== void 0 ? _value_extendedLanguageSubtags_ : "") : null, "bcp47-script bcp47-current-value-part ".concat(settings.theme.valueContainerAdvanced), _this.autoComplete("Script", $0757cf2a9f037b0c$var$scriptOptions, value, "script", !value.language), "bcp47-region bcp47-current-value-part ".concat(settings.theme.valueContainerAdvanced), _this.autoComplete("Region", $0757cf2a9f037b0c$var$regionCodesMerged, value, "region", !value.language), _this.showAdvanced ? (0, $b92eccbc68fb415f$export$c0bb0b647f701bb5)($0757cf2a9f037b0c$var$_templateObject9(), "bcp47-region bcp47-current-value-part-normal ".concat(settings.theme.valueContainerAdvanced), !value.language ? true : null, settings.theme.valueInput, (_value_extensions_ = value.extensions[0]) !== null && _value_extensions_ !== void 0 ? _value_extensions_ : "", "bcp47-region bcp47-current-value-part-normal ".concat(settings.theme.valueContainerAdvanced), !value.language ? true : null, settings.theme.valueInput, (_value_privateuse_ = value.privateuse[0]) !== null && _value_privateuse_ !== void 0 ? _value_privateuse_ : "") : null) : null
                                                    ];
                                            }
                                        });
                                    })();
                                }
                            },
                            {
                                key: "getLabel",
                                value: /**
     * Generates a selected label for a given schema.
     */ function getLabel(value) {
                                    return (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function() {
                                        var label, _getValueOfOptions, language, _getValueOfOptions1, region, _getValueOfOptions2, script;
                                        return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        $0757cf2a9f037b0c$var$importLists()
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    if (typeof value === "string") value = (0, $e669cf75fd6f5394$export$98e6a39c04603d36)(value);
                                                    label = "";
                                                    language = value.language ? $0757cf2a9f037b0c$var$clean((_getValueOfOptions = (0, $05e35bdb95590ee6$export$c7dde40abc42a582)($0757cf2a9f037b0c$var$languageOptions, value.language)) !== null && _getValueOfOptions !== void 0 ? _getValueOfOptions : "") : null;
                                                    region = value.region ? $0757cf2a9f037b0c$var$clean((_getValueOfOptions1 = (0, $05e35bdb95590ee6$export$c7dde40abc42a582)($0757cf2a9f037b0c$var$regionCodesMerged, value.region)) !== null && _getValueOfOptions1 !== void 0 ? _getValueOfOptions1 : "") : null;
                                                    script = value.script ? $0757cf2a9f037b0c$var$clean((_getValueOfOptions2 = (0, $05e35bdb95590ee6$export$c7dde40abc42a582)($0757cf2a9f037b0c$var$scriptOptions, value.script)) !== null && _getValueOfOptions2 !== void 0 ? _getValueOfOptions2 : "") : null;
                                                    if (language && region) label = "".concat(language, " as spoken in ").concat(region);
                                                    else if (language && script) label = "".concat(language, " written with ").concat(script);
                                                    else if (language) label = language;
                                                    return [
                                                        2,
                                                        label
                                                    ];
                                            }
                                        });
                                    })();
                                }
                            },
                            {
                                /**
     * When you find a lot of results only 20 are shows, when scrolling more are shown.
     * The observer takes care of detecting scroll.
     */ key: "observerCallback",
                                value: function observerCallback(entries) {
                                    var _this = this;
                                    entries.forEach(function() {
                                        var _ref = (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function(entry) {
                                            var resultsWrapper, scrollHeight, clientHeight;
                                            return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        if (!entry.intersectionRatio) return [
                                                            3,
                                                            2
                                                        ];
                                                        resultsWrapper = document.querySelector(".bcp47-results");
                                                        scrollHeight = resultsWrapper.scrollHeight;
                                                        clientHeight = resultsWrapper.clientHeight;
                                                        if (!(clientHeight < scrollHeight && _this.maxItems < _this.searchResults.length)) return [
                                                            3,
                                                            2
                                                        ];
                                                        return [
                                                            4,
                                                            _this.increaseVisibleResults()
                                                        ];
                                                    case 1:
                                                        _state.sent();
                                                        _state.label = 2;
                                                    case 2:
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        });
                                        return function(entry) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }());
                                }
                            },
                            {
                                key: "increaseVisibleResults",
                                value: function increaseVisibleResults() {
                                    var _this = this;
                                    return (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function() {
                                        return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    _this.maxItems = _this.maxItems + _this.defaultMaxItems;
                                                    return [
                                                        4,
                                                        _this.render()
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    })();
                                }
                            },
                            {
                                /**
     * A re-usable autocomplete, used for Language, Region and Script.
     */ key: "autoComplete",
                                value: function autoComplete(label, options, value, key) {
                                    var disabled = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
                                    var _this = this;
                                    var _options_find__split, _options_find, _options_find_;
                                    var _value_key;
                                    return (0, $b92eccbc68fb415f$export$c0bb0b647f701bb5)($0757cf2a9f037b0c$var$_templateObject12(), disabled ? true : null, settings.theme.valueInput, function(event) {
                                        event.stopPropagation();
                                        event.stopImmediatePropagation();
                                        event.preventDefault();
                                        var oldValue = (0, $eab602125b5f843c$export$fac44ee5b035f737)(value);
                                        value[key] = event.target.value;
                                        _this.values = _this.values.filter(function(item) {
                                            return item !== oldValue;
                                        });
                                        _this.setValue((0, $eab602125b5f843c$export$fac44ee5b035f737)(value));
                                    }, key, (_value_key = value[key]) !== null && _value_key !== void 0 ? _value_key : "", label, key, options.map(function(param) {
                                        var _param = (0, $7c0b9cb584c10188$export$2e2bcd8739ae039)(param, 2), optionValue = _param[0], optionLabel = _param[1];
                                        return (0, $b92eccbc68fb415f$export$c0bb0b647f701bb5)($0757cf2a9f037b0c$var$_templateObject11(), optionValue, optionValue === value[key], optionLabel);
                                    }), "bcp47-current-value-part-value ".concat(settings.theme.partValue), value[key] ? (_options_find__split = (_options_find = options.find(function(item) {
                                        return item[0] === value[key];
                                    })) === null || _options_find === void 0 ? void 0 : (_options_find_ = _options_find[1]) === null || _options_find_ === void 0 ? void 0 : _options_find_.split(" (")) === null || _options_find__split === void 0 ? void 0 : _options_find__split[0] : null, settings.theme.code, value[key]);
                                }
                            },
                            {
                                /**
     * The search results
     */ key: "resultsWrapper",
                                value: function resultsWrapper() {
                                    var searchTerm = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
                                    var _this = this;
                                    return this.searchResults.length ? (0, $b92eccbc68fb415f$export$c0bb0b647f701bb5)($0757cf2a9f037b0c$var$_templateObject13(), "bcp47-results ".concat(settings.theme.results), this.searchResults.map(function(item, index) {
                                        return _this.resultItem(item, index, searchTerm);
                                    }), function(element) {
                                        _this.observer = new IntersectionObserver(_this.observerCallback.bind(_this), {
                                            root: document.querySelector(".bcp47-results"),
                                            rootMargin: "0px",
                                            threshold: 1.0
                                        });
                                        _this.observer.observe(element);
                                    }, "--items: ".concat((this.searchResults.length - this.maxItems) * 41, "px")) : null;
                                }
                            },
                            {
                                /**
     * The template of one result item
     */ key: "resultItem",
                                value: function resultItem(param, index) {
                                    var _param = (0, $7c0b9cb584c10188$export$2e2bcd8739ae039)(param, 2), bcp47 = _param[0], _param_ = (0, $7c0b9cb584c10188$export$2e2bcd8739ae039)(_param[1], 2), name = _param_[0], alternativeNames = _param_[1], searchTerm = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
                                    if (!alternativeNames) alternativeNames = [];
                                    var alternativeNamesFiltered = alternativeNames.filter(function(alternativeName) {
                                        return alternativeName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
                                    });
                                    var otherAltNames = alternativeNames.filter(function(alternativeName) {
                                        return !alternativeNamesFiltered.includes(alternativeName);
                                    });
                                    /** @ts-ignore */ var formatter = Intl.ListFormat ? new Intl.ListFormat("en", {
                                        style: "long",
                                        type: "conjunction"
                                    }) : {
                                        format: function(items) {
                                            return items.join(", ");
                                        }
                                    };
                                    var altNames = formatter.format((0, $72af24a1cc374e04$export$2e2bcd8739ae039)(alternativeNamesFiltered).concat((0, $72af24a1cc374e04$export$2e2bcd8739ae039)(otherAltNames)));
                                    if (settings.forceCanonical) bcp47 = (0, $b1c36f392367feb3$export$d9b31aac4a13cff9)(bcp47, {
                                        forgiving: true
                                    });
                                    var _this = this;
                                    return (0, $b92eccbc68fb415f$export$c0bb0b647f701bb5)($0757cf2a9f037b0c$var$_templateObject14(), "bcp47-result ".concat(settings.theme.resultItem, " ").concat(index === this.focusedResult ? "active" : ""), /*#__PURE__*/ (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function() {
                                        return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                            _this.setValue(bcp47);
                                            return [
                                                2
                                            ];
                                        });
                                    }), "bcp47-name ".concat(settings.theme.name), name, "bcp47-code ".concat(settings.theme.code), bcp47, "bcp47-alternative-names ".concat(settings.theme.alternativeNames), altNames, altNames);
                                }
                            },
                            {
                                key: "setValue",
                                value: /**
     * Sets the value
     */ function setValue(bcp47) {
                                    var _this = this;
                                    return (0, $2dfd95a460aa32d3$export$2e2bcd8739ae039)(function() {
                                        var searchField;
                                        return (0, $a416c163d9ea00bd$export$67ebef60e6f28a6)(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    if (settings.forceCanonical && bcp47) bcp47 = (0, $b1c36f392367feb3$export$d9b31aac4a13cff9)(bcp47, {
                                                        forgiving: true
                                                    });
                                                    if (bcp47) {
                                                        _this.selectedValue = bcp47;
                                                        _this.values.push(bcp47);
                                                    }
                                                    _this.value = _this.values.join(",");
                                                    _this.isEditing = false;
                                                    _this.searchResults = [];
                                                    _this.maxItems = _this.defaultMaxItems;
                                                    _this.dispatchEvent(new CustomEvent("change"));
                                                    return [
                                                        4,
                                                        _this.render()
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    searchField = _this.querySelector(".bcp47-search");
                                                    if (searchField) {
                                                        searchField.value = "";
                                                        searchField.focus();
                                                    }
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    })();
                                }
                            }
                        ]);
                        return Bcp47Picker;
                    }((0, $8e6ebed834f15320$export$2e2bcd8739ae039)(HTMLElement));
                    customElements.define((_settings_alternativeHtmlName = settings.alternativeHtmlName) !== null && _settings_alternativeHtmlName !== void 0 ? _settings_alternativeHtmlName : "bcp47-picker", Bcp47Picker);
                    return [
                        2
                    ];
            }
        });
    });
    return function init() {
        return _ref.apply(this, arguments);
    };
}();


if (location.pathname === "/alone") {
    document.body.innerHTML = '\n  <div class="page">\n    <bcp47-picker id="first" value="nl"></bcp47-picker>\n  </div>\n  ';
    (0, $0757cf2a9f037b0c$export$2cd8252107eb640b)({
        sources: [
            "https://bcp47.danielbeeke.nl/data/lmt.json"
        ]
    });
}
if (location.pathname !== "/alone") {
    (0, $0757cf2a9f037b0c$export$2cd8252107eb640b)();
    (0, $0757cf2a9f037b0c$export$2cd8252107eb640b)({
        alternativeHtmlName: "bcp47-picker-rolv",
        sources: [
            "https://bcp47.danielbeeke.nl/data/lmt.json",
            "https://bcp47.danielbeeke.nl/data/rolv2.json"
        ]
    });
    (0, $0757cf2a9f037b0c$export$2cd8252107eb640b)({
        alternativeHtmlName: "bcp47-picker-iso",
        sources: [
            "https://bcp47.danielbeeke.nl/data/iso-639-3.json"
        ]
    });
    (0, $0757cf2a9f037b0c$export$2cd8252107eb640b)({
        alternativeHtmlName: "bcp47-picker-iso-forced",
        forceCanonical: true,
        sources: [
            "https://bcp47.danielbeeke.nl/data/iso-639-3.json"
        ]
    });
    var $b81c5857337cd101$var$picker1 = document.querySelector("bcp47-picker#first");
    $b81c5857337cd101$var$picker1.addEventListener("change", function(event) {
        console.log(event);
    });
    var $b81c5857337cd101$var$picker2 = document.querySelector("bcp47-picker-rolv#second");
    $b81c5857337cd101$var$picker2.addEventListener("change", function(event) {
        console.log(event);
    });
    var $b81c5857337cd101$var$picker3 = document.querySelector("bcp47-picker-iso");
    $b81c5857337cd101$var$picker3.addEventListener("change", function(event) {
        console.log(event);
    });
}

})();
//# sourceMappingURL=index.9701a867.js.map
