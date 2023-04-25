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
parcelRequire.register("iZN3Y", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $dd43fb6b9aa35de2$export$6503ec6e8aabbaf; }, function (v) { return $dd43fb6b9aa35de2$export$6503ec6e8aabbaf = v; });
$parcel$export(module.exports, "resolve", function () { return $dd43fb6b9aa35de2$export$f7ad0328861e2f03; }, function (v) { return $dd43fb6b9aa35de2$export$f7ad0328861e2f03 = v; });
var $dd43fb6b9aa35de2$export$6503ec6e8aabbaf;
var $dd43fb6b9aa35de2$export$f7ad0328861e2f03;
"use strict";
var $dd43fb6b9aa35de2$var$mapping = {};
function $dd43fb6b9aa35de2$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$dd43fb6b9aa35de2$var$mapping[keys[i]] = pairs[keys[i]];
}
function $dd43fb6b9aa35de2$var$resolve(id) {
    var resolved = $dd43fb6b9aa35de2$var$mapping[id];
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return resolved;
}
$dd43fb6b9aa35de2$export$6503ec6e8aabbaf = $dd43fb6b9aa35de2$var$register;
$dd43fb6b9aa35de2$export$f7ad0328861e2f03 = $dd43fb6b9aa35de2$var$resolve;

});

parcelRequire.register("9ED0o", function(module, exports) {

module.exports = import("./" + (parcelRequire("iZN3Y")).resolve("lKWV7")).then(()=>parcelRequire("d99AJ"));

});

parcelRequire.register("6U5lK", function(module, exports) {

module.exports = import("./" + (parcelRequire("iZN3Y")).resolve("ep2bv")).then(()=>parcelRequire("d9WAi"));

});

parcelRequire.register("9XnEc", function(module, exports) {

module.exports = import("./" + (parcelRequire("iZN3Y")).resolve("dqC2M")).then(()=>parcelRequire("hXcd9"));

});

parcelRequire.register("am40c", function(module, exports) {

module.exports = import("./" + (parcelRequire("iZN3Y")).resolve("fzIvo")).then(()=>parcelRequire("9MqQ3"));

});

var $d0c82d1939bcb746$exports = {};

(parcelRequire("iZN3Y")).register(JSON.parse('{"dL2H6":"index.9da60372.js","lKWV7":"iso-15924.28314dfc.js","ep2bv":"iso-3166.b68c386c.js","dqC2M":"iso-639-3.fae4afeb.js","fzIvo":"un-m49.970dc3e7.js","6zW2T":"index.e404ca8f.css"}'));

class $e7212ca0a4304309$export$ab7b06d4df4bd22c extends Map {
    set(key, value) {
        super.set(key, value);
        return value;
    }
}
class $e7212ca0a4304309$export$7f4c745ffacc49c3 extends WeakMap {
    set(key, value) {
        super.set(key, value);
        return value;
    }
}



/*! (c) Andrea Giammarchi - ISC */ const $52f22f780d2cc5f7$var$empty = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
const $52f22f780d2cc5f7$var$elements = /<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/?)>/g;
const $52f22f780d2cc5f7$var$attributes = /([^\s\\>"'=]+)\s*=\s*(['"]?)\x01/g;
const $52f22f780d2cc5f7$var$holes = /[\x01\x02]/g;
var // \x01 Node.ELEMENT_NODE
// \x02 Node.ATTRIBUTE_NODE
/**
 * Given a template, find holes as both nodes and attributes and
 * return a string with holes as either comment nodes or named attributes.
 * @param {string[]} template a template literal tag array
 * @param {string} prefix prefix to use per each comment/attribute
 * @param {boolean} svg enforces self-closing tags
 * @returns {string} X/HTML with prefixed comments or attributes
 */ $52f22f780d2cc5f7$export$2e2bcd8739ae039 = (template, prefix, svg)=>{
    let i = 0;
    return template.join("\x01").trim().replace($52f22f780d2cc5f7$var$elements, (_, name, attrs, selfClosing)=>{
        let ml = name + attrs.replace($52f22f780d2cc5f7$var$attributes, "\x02=$2$1").trimEnd();
        if (selfClosing.length) ml += svg || $52f22f780d2cc5f7$var$empty.test(name) ? " /" : "></" + name;
        return "<" + ml + ">";
    }).replace($52f22f780d2cc5f7$var$holes, (hole)=>hole === "\x01" ? "<!--" + prefix + i++ + "-->" : prefix + i++);
};


const $58704f3474cad3ad$var$ELEMENT_NODE = 1;
const $58704f3474cad3ad$var$nodeType = 111;
const $58704f3474cad3ad$var$remove = ({ firstChild: firstChild , lastChild: lastChild  })=>{
    const range = document.createRange();
    range.setStartAfter(firstChild);
    range.setEndAfter(lastChild);
    range.deleteContents();
    return firstChild;
};
const $58704f3474cad3ad$export$6060d40568773aeb = (node, operation)=>node.nodeType === $58704f3474cad3ad$var$nodeType ? 1 / operation < 0 ? operation ? $58704f3474cad3ad$var$remove(node) : node.lastChild : operation ? node.valueOf() : node.firstChild : node;
const $58704f3474cad3ad$export$1f6005ddc92972ec = (fragment)=>{
    const { firstChild: firstChild , lastChild: lastChild  } = fragment;
    if (firstChild === lastChild) return lastChild || fragment;
    const { childNodes: childNodes  } = fragment;
    const nodes = [
        ...childNodes
    ];
    return {
        ELEMENT_NODE: $58704f3474cad3ad$var$ELEMENT_NODE,
        nodeType: $58704f3474cad3ad$var$nodeType,
        firstChild: firstChild,
        lastChild: lastChild,
        valueOf () {
            if (childNodes.length !== nodes.length) fragment.append(...nodes);
            return fragment;
        }
    };
};



const { isArray: $b0637753d1f1bcf6$export$43bee75e5e14138e  } = Array;
const { indexOf: $b0637753d1f1bcf6$export$305f7d4e9d4624f2 , slice: $b0637753d1f1bcf6$export$58adb3bec8346d0f  } = [];


// flag for foreign checks (slower path, fast by default)
let $d7b76fa8bf14bbd0$var$useForeign = false;
class $d7b76fa8bf14bbd0$export$53ed384e325652d1 {
    constructor(handler, value){
        $d7b76fa8bf14bbd0$var$useForeign = true;
        this._ = (...args)=>handler(...args, value);
    }
}
const $d7b76fa8bf14bbd0$export$74ab03834501d175 = (handler, value)=>new $d7b76fa8bf14bbd0$export$53ed384e325652d1(handler, value);
const $d7b76fa8bf14bbd0$export$4d2d26490572750a = (node)=>(values)=>{
        for(const key in values){
            const name = key === "role" ? key : `aria-${key}`;
            const value = values[key];
            if (value == null) node.removeAttribute(name);
            else node.setAttribute(name, value);
        }
    };
const $d7b76fa8bf14bbd0$var$getValue = (value)=>value == null ? value : value.valueOf();
const $d7b76fa8bf14bbd0$export$af4b9a83f4b00434 = (node, name)=>{
    let oldValue, orphan = true;
    const attributeNode = document.createAttributeNS(null, name);
    return (newValue)=>{
        const value = $d7b76fa8bf14bbd0$var$useForeign && newValue instanceof $d7b76fa8bf14bbd0$export$53ed384e325652d1 ? newValue._(node, name) : $d7b76fa8bf14bbd0$var$getValue(newValue);
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
const $d7b76fa8bf14bbd0$export$4a21f16c33752377 = (node, key, oldValue)=>(newValue)=>{
        const value = !!$d7b76fa8bf14bbd0$var$getValue(newValue);
        if (oldValue !== value) {
            // when IE won't be around anymore ...
            // node.toggleAttribute(key, oldValue = !!value);
            if (oldValue = value) node.setAttribute(key, "");
            else node.removeAttribute(key);
        }
    };
const $d7b76fa8bf14bbd0$export$4051a07651545597 = ({ dataset: dataset  })=>(values)=>{
        for(const key in values){
            const value = values[key];
            if (value == null) delete dataset[key];
            else dataset[key] = value;
        }
    };
const $d7b76fa8bf14bbd0$export$6cd530ed55e06764 = (node, name)=>{
    let oldValue, lower, type = name.slice(2);
    if (!(name in node) && (lower = name.toLowerCase()) in node) type = lower.slice(2);
    return (newValue)=>{
        const info = (0, $b0637753d1f1bcf6$export$43bee75e5e14138e)(newValue) ? newValue : [
            newValue,
            false
        ];
        if (oldValue !== info[0]) {
            if (oldValue) node.removeEventListener(type, oldValue, info[1]);
            if (oldValue = info[0]) node.addEventListener(type, oldValue, info[1]);
        }
    };
};
const $d7b76fa8bf14bbd0$export$eff4d24c3ff7876e = (node)=>{
    let oldValue;
    return (value)=>{
        if (oldValue !== value) {
            oldValue = value;
            if (typeof value === "function") value(node);
            else value.current = node;
        }
    };
};
const $d7b76fa8bf14bbd0$export$a74fa819f7f7dff = (node, key)=>key === "dataset" ? $d7b76fa8bf14bbd0$export$4051a07651545597(node) : (value)=>{
        node[key] = value;
    };
const $d7b76fa8bf14bbd0$export$6f093cfa640b7166 = (node)=>{
    let oldValue;
    return (newValue)=>{
        const value = $d7b76fa8bf14bbd0$var$getValue(newValue);
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
 */ var $23fe2e4af8ff4b5c$export$2e2bcd8739ae039 = (parentNode, a, b, get, before)=>{
    const bLength = b.length;
    let aEnd = a.length;
    let bEnd = bLength;
    let aStart = 0;
    let bStart = 0;
    let map = null;
    while(aStart < aEnd || bStart < bEnd){
        // append head, tail, or nodes in between: fast path
        if (aEnd === aStart) {
            // we could be in a situation where the rest of nodes that
            // need to be added are not at the end, and in such case
            // the node to `insertBefore`, if the index is more than 0
            // must be retrieved, otherwise it's gonna be the first item.
            const node = bEnd < bLength ? bStart ? get(b[bStart - 1], -0).nextSibling : get(b[bEnd - bStart], 0) : before;
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
            const node = get(a[--aEnd], -1).nextSibling;
            parentNode.insertBefore(get(b[bStart++], 1), get(a[aStart++], -1).nextSibling);
            parentNode.insertBefore(get(b[--bEnd], 1), node);
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
                let i = bStart;
                while(i < bEnd)map.set(b[i], i++);
            }
            // if it's a future node, hence it needs some handling
            if (map.has(a[aStart])) {
                // grab the index of such node, 'cause it might have been processed
                const index = map.get(a[aStart]);
                // if it's not already processed, look on demand for the next LCS
                if (bStart < index && index < bEnd) {
                    let i = aStart;
                    // counts the amount of nodes that are the same in the future
                    let sequence = 1;
                    while(++i < aEnd && i < bEnd && map.get(a[i]) === index + sequence)sequence++;
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
                        const node = get(a[aStart], 0);
                        while(bStart < index)parentNode.insertBefore(get(b[bStart++], 1), node);
                    } else parentNode.replaceChild(get(b[bStart++], 1), get(a[aStart++], -1));
                } else aStart++;
            } else parentNode.removeChild(get(a[aStart++], -1));
        }
    }
    return b;
};


const { isArray: $a91c5d5674e63c32$export$43bee75e5e14138e , prototype: $a91c5d5674e63c32$var$prototype  } = Array;
const { indexOf: $a91c5d5674e63c32$export$305f7d4e9d4624f2  } = $a91c5d5674e63c32$var$prototype;
const { createDocumentFragment: $a91c5d5674e63c32$var$createDocumentFragment , createElement: $a91c5d5674e63c32$var$createElement , createElementNS: $a91c5d5674e63c32$var$createElementNS , createTextNode: $a91c5d5674e63c32$export$b2ce9ad90858ed7a , createTreeWalker: $a91c5d5674e63c32$export$469f9e892a721cc4 , importNode: $a91c5d5674e63c32$export$ce5e1f6513119f55  } = new Proxy(document, {
    get: (target, method)=>target[method].bind(target)
});
const $a91c5d5674e63c32$var$createHTML = (html)=>{
    const template = $a91c5d5674e63c32$var$createElement("template");
    template.innerHTML = html;
    return template.content;
};
let $a91c5d5674e63c32$var$xml;
const $a91c5d5674e63c32$var$createSVG = (svg)=>{
    if (!$a91c5d5674e63c32$var$xml) $a91c5d5674e63c32$var$xml = $a91c5d5674e63c32$var$createElementNS("http://www.w3.org/2000/svg", "svg");
    $a91c5d5674e63c32$var$xml.innerHTML = svg;
    const content = $a91c5d5674e63c32$var$createDocumentFragment();
    content.append(...$a91c5d5674e63c32$var$xml.childNodes);
    return content;
};
const $a91c5d5674e63c32$export$41c7a4cacf5bab80 = (text, svg)=>svg ? $a91c5d5674e63c32$var$createSVG(text) : $a91c5d5674e63c32$var$createHTML(text);


// from a generic path, retrieves the exact targeted node
const $83e5311e113222d3$var$reducePath = ({ childNodes: childNodes  }, i)=>childNodes[i];
// this helper avoid code bloat around handleAnything() callback
const $83e5311e113222d3$var$diff = (comment, oldNodes, newNodes)=>(0, $23fe2e4af8ff4b5c$export$2e2bcd8739ae039)(comment.parentNode, // TODO: there is a possible edge case where a node has been
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
    oldNodes, newNodes, (0, $58704f3474cad3ad$export$6060d40568773aeb), comment);
// if an interpolation represents a comment, the whole
// diffing will be related to such comment.
// This helper is in charge of understanding how the new
// content for such interpolation/hole should be updated
const $83e5311e113222d3$var$handleAnything = (comment)=>{
    let oldValue, text, nodes = [];
    const anyContent = (newValue)=>{
        switch(typeof newValue){
            // primitives are handled as text content
            case "string":
            case "number":
            case "boolean":
                if (oldValue !== newValue) {
                    oldValue = newValue;
                    if (!text) text = (0, $a91c5d5674e63c32$export$b2ce9ad90858ed7a)("");
                    text.data = newValue;
                    nodes = $83e5311e113222d3$var$diff(comment, nodes, [
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
                        nodes = $83e5311e113222d3$var$diff(comment, nodes, []);
                    }
                    break;
                }
                // arrays and nodes have a special treatment
                if ((0, $a91c5d5674e63c32$export$43bee75e5e14138e)(newValue)) {
                    oldValue = newValue;
                    // arrays can be used to cleanup, if empty
                    if (newValue.length === 0) nodes = $83e5311e113222d3$var$diff(comment, nodes, []);
                    else if (typeof newValue[0] === "object") nodes = $83e5311e113222d3$var$diff(comment, nodes, newValue);
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
                        nodes = $83e5311e113222d3$var$diff(comment, nodes, newValue.nodeType === 11 ? [
                            ...newValue.childNodes
                        ] : [
                            newValue
                        ]);
                    } else {
                        const value = newValue.valueOf();
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
const $83e5311e113222d3$var$handleAttribute = (node, name /*, svg*/ )=>{
    switch(name[0]){
        case "?":
            return (0, $d7b76fa8bf14bbd0$export$4a21f16c33752377)(node, name.slice(1), false);
        case ".":
            return (0, $d7b76fa8bf14bbd0$export$a74fa819f7f7dff)(node, name.slice(1));
        case "@":
            return (0, $d7b76fa8bf14bbd0$export$6cd530ed55e06764)(node, "on" + name.slice(1));
        case "o":
            if (name[1] === "n") return (0, $d7b76fa8bf14bbd0$export$6cd530ed55e06764)(node, name);
    }
    switch(name){
        case "ref":
            return (0, $d7b76fa8bf14bbd0$export$eff4d24c3ff7876e)(node);
        case "aria":
            return (0, $d7b76fa8bf14bbd0$export$4d2d26490572750a)(node);
    }
    return (0, $d7b76fa8bf14bbd0$export$af4b9a83f4b00434)(node, name /*, svg*/ );
};
function $83e5311e113222d3$export$455ce229eb3d2472(options) {
    const { type: type , path: path  } = options;
    const node = path.reduceRight($83e5311e113222d3$var$reducePath, this);
    return type === "node" ? $83e5311e113222d3$var$handleAnything(node) : type === "attr" ? $83e5311e113222d3$var$handleAttribute(node, options.name /*, options.svg*/ ) : (0, $d7b76fa8bf14bbd0$export$6f093cfa640b7166)(node);
}



// from a fragment container, create an array of indexes
// related to its child nodes, so that it's possible
// to retrieve later on exact node via reducePath
const $c521b6b4e199919c$var$createPath = (node)=>{
    const path = [];
    let { parentNode: parentNode  } = node;
    while(parentNode){
        path.push((0, $a91c5d5674e63c32$export$305f7d4e9d4624f2).call(parentNode.childNodes, node));
        node = parentNode;
        ({ parentNode: parentNode  } = node);
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
const $c521b6b4e199919c$var$prefix = "is\xb5";
// Template Literals are unique per scope and static, meaning a template
// should be parsed once, and once only, as it will always represent the same
// content, within the exact same amount of updates each time.
// This cache relates each template to its unique content and updates.
const $c521b6b4e199919c$var$cache = new (0, $e7212ca0a4304309$export$7f4c745ffacc49c3);
// a RegExp that helps checking nodes that cannot contain comments
const $c521b6b4e199919c$var$textOnly = /^(?:textarea|script|style|title|plaintext|xmp)$/;
const $c521b6b4e199919c$export$cf6fa0bbcc94b912 = ()=>({
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
    });
// the entry stored in the rendered node cache, and per each "hole"
const $c521b6b4e199919c$var$createEntry = (type, template)=>{
    const { content: content , updates: updates  } = $c521b6b4e199919c$var$mapUpdates(type, template);
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
const $c521b6b4e199919c$var$mapTemplate = (type, template)=>{
    const svg = type === "svg";
    const text = (0, $52f22f780d2cc5f7$export$2e2bcd8739ae039)(template, $c521b6b4e199919c$var$prefix, svg);
    const content = (0, $a91c5d5674e63c32$export$41c7a4cacf5bab80)(text, svg);
    // once instrumented and reproduced as fragment, it's crawled
    // to find out where each update is in the fragment tree
    const tw = (0, $a91c5d5674e63c32$export$469f9e892a721cc4)(content, 129);
    const nodes = [];
    const length = template.length - 1;
    let i = 0;
    // updates are searched via unique names, linearly increased across the tree
    // <div isµ0="attr" isµ1="other"><!--isµ2--><style><!--isµ3--</style></div>
    let search = `${$c521b6b4e199919c$var$prefix}${i}`;
    while(i < length){
        const node = tw.nextNode();
        // if not all updates are bound but there's nothing else to crawl
        // it means that there is something wrong with the template.
        if (!node) throw `bad template: ${text}`;
        // if the current node is a comment, and it contains isµX
        // it means the update should take care of any content
        if (node.nodeType === 8) // The only comments to be considered are those
        // which content is exactly the same as the searched one.
        {
            if (node.data === search) {
                nodes.push({
                    type: "node",
                    path: $c521b6b4e199919c$var$createPath(node)
                });
                search = `${$c521b6b4e199919c$var$prefix}${++i}`;
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
                    path: $c521b6b4e199919c$var$createPath(node),
                    name: node.getAttribute(search)
                });
                node.removeAttribute(search);
                search = `${$c521b6b4e199919c$var$prefix}${++i}`;
            }
            // if the node was a style, textarea, or others, check its content
            // and if it is <!--isµX--> then update tex-only this node
            if ($c521b6b4e199919c$var$textOnly.test(node.localName) && node.textContent.trim() === `<!--${search}-->`) {
                node.textContent = "";
                nodes.push({
                    type: "text",
                    path: $c521b6b4e199919c$var$createPath(node)
                });
                search = `${$c521b6b4e199919c$var$prefix}${++i}`;
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
const $c521b6b4e199919c$var$mapUpdates = (type, template)=>{
    const { content: content , nodes: nodes  } = $c521b6b4e199919c$var$cache.get(template) || $c521b6b4e199919c$var$cache.set(template, $c521b6b4e199919c$var$mapTemplate(type, template));
    // clone deeply the fragment
    const fragment = (0, $a91c5d5674e63c32$export$ce5e1f6513119f55)(content, true);
    // and relate an update handler per each node that needs one
    const updates = nodes.map((0, $83e5311e113222d3$export$455ce229eb3d2472), fragment);
    // return the fragment and all updates to use within its nodes
    return {
        content: fragment,
        updates: updates
    };
};
const $c521b6b4e199919c$export$ed24ab65af38c83e = (info, { type: type , template: template , values: values  })=>{
    // interpolations can contain holes and arrays, so these need
    // to be recursively discovered
    const length = $c521b6b4e199919c$var$unrollValues(info, values);
    let { entry: entry  } = info;
    // if the cache entry is either null or different from the template
    // and the type this unroll should resolve, create a new entry
    // assigning a new content fragment and the list of updates.
    if (!entry || entry.template !== template || entry.type !== type) info.entry = entry = $c521b6b4e199919c$var$createEntry(type, template);
    const { content: content , updates: updates , wire: wire  } = entry;
    // even if the fragment and its nodes is not live yet,
    // it is already possible to update via interpolations values.
    for(let i = 0; i < length; i++)updates[i](values[i]);
    // if the entry was new, or representing a different template or type,
    // create a new persistent entity to use during diffing.
    // This is simply a DOM node, when the template has a single container,
    // as in `<p></p>`, or a "wire" in `<p></p><p></p>` and similar cases.
    return wire || (entry.wire = (0, $58704f3474cad3ad$export$1f6005ddc92972ec)(content));
};
// the stack retains, per each interpolation value, the cache
// related to each interpolation value, or null, if the render
// was conditional and the value is not special (Array or Hole)
const $c521b6b4e199919c$var$unrollValues = ({ stack: stack  }, values)=>{
    const { length: length  } = values;
    for(let i = 0; i < length; i++){
        const hole = values[i];
        // each Hole gets unrolled and re-assigned as value
        // so that domdiff will deal with a node/wire, not with a hole
        if (hole instanceof $c521b6b4e199919c$export$b5329b670b24e23b) values[i] = $c521b6b4e199919c$export$ed24ab65af38c83e(stack[i] || (stack[i] = $c521b6b4e199919c$export$cf6fa0bbcc94b912()), hole);
        else if ((0, $a91c5d5674e63c32$export$43bee75e5e14138e)(hole)) $c521b6b4e199919c$var$unrollValues(stack[i] || (stack[i] = $c521b6b4e199919c$export$cf6fa0bbcc94b912()), hole);
        else stack[i] = null;
    }
    if (length < stack.length) stack.splice(length);
    return length;
};
class $c521b6b4e199919c$export$b5329b670b24e23b {
    constructor(type, template, values){
        this.type = type;
        this.template = template;
        this.values = values;
    }
}


// both `html` and `svg` template literal tags are polluted
// with a `for(ref[, id])` and a `node` tag too
const $f8cbb652275fbda3$var$tag = (type)=>{
    // both `html` and `svg` tags have their own cache
    const keyed = new (0, $e7212ca0a4304309$export$7f4c745ffacc49c3);
    // keyed operations always re-use the same cache and unroll
    // the template and its interpolations right away
    const fixed = (cache)=>(template, ...values)=>(0, $c521b6b4e199919c$export$ed24ab65af38c83e)(cache, {
                type: type,
                template: template,
                values: values
            });
    return Object.assign(// non keyed operations are recognized as instance of Hole
    // during the "unroll", recursively resolved and updated
    (template, ...values)=>new (0, $c521b6b4e199919c$export$b5329b670b24e23b)(type, template, values), {
        // keyed operations need a reference object, usually the parent node
        // which is showing keyed results, and optionally a unique id per each
        // related node, handy with JSON results and mutable list of objects
        // that usually carry a unique identifier
        for (ref, id) {
            const memo = keyed.get(ref) || keyed.set(ref, new (0, $e7212ca0a4304309$export$ab7b06d4df4bd22c));
            return memo.get(id) || memo.set(id, fixed((0, $c521b6b4e199919c$export$cf6fa0bbcc94b912)()));
        },
        // it is possible to create one-off content out of the box via node tag
        // this might return the single created node, or a fragment with all
        // nodes present at the root level and, of course, their child nodes
        node: (template, ...values)=>(0, $c521b6b4e199919c$export$ed24ab65af38c83e)((0, $c521b6b4e199919c$export$cf6fa0bbcc94b912)(), new (0, $c521b6b4e199919c$export$b5329b670b24e23b)(type, template, values)).valueOf()
    });
};
// each rendered node gets its own cache
const $f8cbb652275fbda3$var$cache = new (0, $e7212ca0a4304309$export$7f4c745ffacc49c3);
// rendering means understanding what `html` or `svg` tags returned
// and it relates a specific node to its own unique cache.
// Each time the content to render changes, the node is cleaned up
// and the new new content is appended, and if such content is a Hole
// then it's "unrolled" to resolve all its inner nodes.
const $f8cbb652275fbda3$export$b3890eb0ae9dca99 = (where, what)=>{
    const hole = typeof what === "function" ? what() : what;
    const info = $f8cbb652275fbda3$var$cache.get(where) || $f8cbb652275fbda3$var$cache.set(where, (0, $c521b6b4e199919c$export$cf6fa0bbcc94b912)());
    const wire = hole instanceof (0, $c521b6b4e199919c$export$b5329b670b24e23b) ? (0, $c521b6b4e199919c$export$ed24ab65af38c83e)(info, hole) : hole;
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
const $f8cbb652275fbda3$export$c0bb0b647f701bb5 = $f8cbb652275fbda3$var$tag("html");
const $f8cbb652275fbda3$export$7ed1367e7fa1ad68 = $f8cbb652275fbda3$var$tag("svg");


const $75aac1a564928241$export$3f32c2013f0dcc1e = !1;
const $75aac1a564928241$export$4ac27c46a1367c = !0;
const $75aac1a564928241$export$611d59e6a7411fb0 = !0;
const $75aac1a564928241$export$9b5b3264e3a20190 = !0;
const $75aac1a564928241$export$b9a1c33bbc086c14 = !0;
const $75aac1a564928241$export$ac906da4cb8b9687 = !0;
const $75aac1a564928241$export$2583819e7f269b8e = !0;
const $75aac1a564928241$export$e47b7068d9a8b7a8 = !0;
const $75aac1a564928241$export$401bee6d54371a40 = !0;
const $75aac1a564928241$export$b343c2997e12a5fc = !0;
const $75aac1a564928241$export$eb77c0361f1e4495 = !0;


function $4bb5a360e8bc15c6$export$80e70052c6153de() {
    this.cache = null, this.matcher = null, this.stemmer = null, this.filter = null;
}
$4bb5a360e8bc15c6$export$80e70052c6153de.prototype.add, $4bb5a360e8bc15c6$export$80e70052c6153de.prototype.append, $4bb5a360e8bc15c6$export$80e70052c6153de.prototype.search, $4bb5a360e8bc15c6$export$80e70052c6153de.prototype.update, $4bb5a360e8bc15c6$export$80e70052c6153de.prototype.remove;
function $4bb5a360e8bc15c6$export$567ed11f878acad9() {
    this.field = null, this.index = null;
}




function $d5e7506932211fe0$export$952e4699767d54aa(a, b) {
    return "undefined" == typeof a ? b : a;
}
function $d5e7506932211fe0$export$ef70783d1acb931a(a) {
    const b = Array(a);
    for(let c = 0; c < a; c++)b[c] = $d5e7506932211fe0$export$5c30cbca21b2d575();
    return b;
}
function $d5e7506932211fe0$export$841a3b58e9c90461(a) {
    const b = Array(a);
    for(let c = 0; c < a; c++)b[c] = [];
    return b;
}
function $d5e7506932211fe0$export$8848baa1b2a3aeb6(a) {
    return Object.keys(a);
}
function $d5e7506932211fe0$export$5c30cbca21b2d575() {
    return Object.create(null);
}
function $d5e7506932211fe0$export$ee1b3e54f0441b22(a) {
    return [].concat.apply([], a);
}
function $d5e7506932211fe0$export$3b235e93dd1df04f(c, a) {
    return a.length - c.length;
}
function $d5e7506932211fe0$export$e11d765514e26475(a) {
    return a.constructor === Array;
}
function $d5e7506932211fe0$export$2a124c24c597fe41(a) {
    return "string" == typeof a;
}
function $d5e7506932211fe0$export$167528a9b5133c2f(a) {
    return "object" == typeof a;
}
function $d5e7506932211fe0$export$b451353ebd749597(a) {
    return "function" == typeof a;
}


function $ff72f3603b01430d$export$43f28b24e1eb8181(a, b, c, d) {
    if (a && (b && (a = $ff72f3603b01430d$export$77ad94ebf1c2b9ed(a, b)), this.matcher && (a = $ff72f3603b01430d$export$77ad94ebf1c2b9ed(a, this.matcher)), this.stemmer && 1 < a.length && (a = $ff72f3603b01430d$export$77ad94ebf1c2b9ed(a, this.stemmer)), d && 1 < a.length && (a = $ff72f3603b01430d$export$ec45920981e0ca9b(a)), c || "" === c)) {
        const b = a.split(c);
        return this.filter ? $ff72f3603b01430d$export$3dea766d36a8935f(b, this.filter) : b;
    }
    return a;
}
const $ff72f3603b01430d$export$82f1048369ca8b36 = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
const $ff72f3603b01430d$var$regex_normalize = /[\u0300-\u036f]/g;
function $ff72f3603b01430d$export$a3295358bff77e(a) {
    return a.normalize && (a = a.normalize("NFD").replace($ff72f3603b01430d$var$regex_normalize, "")), a;
}
function $ff72f3603b01430d$export$af393a7932753a5a(a) {
    const b = (0, $d5e7506932211fe0$export$5c30cbca21b2d575)();
    for(let c = 0, d = a.length; c < d; c++)b[a[c]] = 1;
    return b;
}
function $ff72f3603b01430d$export$3f58655d2a05f980(a, b) {
    const c = (0, $d5e7506932211fe0$export$8848baa1b2a3aeb6)(a), d = c.length, e = [];
    let f = "", g = 0;
    for(let h, j, k = 0; k < d; k++)h = c[k], j = a[h], j ? (e[g++] = $ff72f3603b01430d$export$17b0f4d84dbfeedf(b ? "(?!\\b)" + h + "(\\b|_)" : h), e[g++] = j) : f += (f ? "|" : "") + h;
    return f && (e[g++] = $ff72f3603b01430d$export$17b0f4d84dbfeedf(b ? "(?!\\b)(" + f + ")(\\b|_)" : "(" + f + ")"), e[g] = ""), e;
}
function $ff72f3603b01430d$export$77ad94ebf1c2b9ed(a, b) {
    for(let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2);
    return a;
}
function $ff72f3603b01430d$export$17b0f4d84dbfeedf(a) {
    return new RegExp(a, "g");
}
function $ff72f3603b01430d$export$ec45920981e0ca9b(a) {
    let b = "", c = "";
    for(let d, e = 0, f = a.length; e < f; e++)(d = a[e]) !== c && (b += c = d);
    return b;
}
function $ff72f3603b01430d$export$3dea766d36a8935f(a, b) {
    const c = a.length, d = [];
    for(let e = 0, f = 0; e < c; e++){
        const c = a[e];
        c && !b[c] && (d[f++] = c);
    }
    return d;
}


const $145a3fc78cf15432$export$270f8a265cdb7a58 = !1;
const $145a3fc78cf15432$export$660b2ee2d4fb4eff = "";
var $145a3fc78cf15432$export$2e2bcd8739ae039 = {
    encode: $145a3fc78cf15432$export$c564cdbbe6da493,
    rtl: !1,
    tokenize: ""
};
function $145a3fc78cf15432$export$c564cdbbe6da493(a) {
    return (0, $ff72f3603b01430d$export$43f28b24e1eb8181).call(this, ("" + a).toLowerCase(), !1, (0, $ff72f3603b01430d$export$82f1048369ca8b36), !1);
}




const $1bf4ad37858666c2$export$240dd687449f055c = {};
const $1bf4ad37858666c2$export$c63ff56643f09e5d = {};
function $1bf4ad37858666c2$export$69dee88f152bef8d(a, b) {
    $1bf4ad37858666c2$export$c63ff56643f09e5d[a] = b;
}
function $1bf4ad37858666c2$export$b5daeabefb05ee6b(a, b) {
    $1bf4ad37858666c2$export$240dd687449f055c[a] = b;
}




function $3c7ef75cc23da802$export$2e2bcd8739ae039(a) {
    $3c7ef75cc23da802$var$register(a, "add"), $3c7ef75cc23da802$var$register(a, "append"), $3c7ef75cc23da802$var$register(a, "search"), $3c7ef75cc23da802$var$register(a, "update"), $3c7ef75cc23da802$var$register(a, "remove");
}
function $3c7ef75cc23da802$var$register(a, b) {
    a[b + "Async"] = function() {
        const a = this, c = arguments, d = c[c.length - 1];
        let e;
        (0, $d5e7506932211fe0$export$b451353ebd749597)(d) && (e = d, delete c[c.length - 1]);
        const f = new Promise(function(d) {
            setTimeout(function() {
                a.async = !0;
                const e = a[b].apply(a, c);
                a.async = !1, d(e);
            });
        });
        return e ? (f.then(e), this) : f;
    };
}



function $7ad27e6ca9f7d5a4$export$1f4807a235930d45(a, b, c, d) {
    const e = a.length;
    let f, g, h = [], i = 0;
    d && (d = []);
    for(let j = e - 1; 0 <= j; j--){
        const k = a[j], l = k.length, m = (0, $d5e7506932211fe0$export$5c30cbca21b2d575)();
        let n = !f;
        for(let a = 0; a < l; a++){
            const l = k[a], o = l.length;
            if (o) for(let a, k, p = 0; p < o; p++)if (k = l[p], f) {
                if (f[k]) {
                    if (!j) {
                        if (c) c--;
                        else if (h[i++] = k, i === b) return h;
                    }
                    (j || d) && (m[k] = 1), n = !0;
                }
                if (d && (a = (g[k] || 0) + 1, g[k] = a, a < e)) {
                    const b = d[a - 2] || (d[a - 2] = []);
                    b[b.length] = k;
                }
            } else m[k] = 1;
        }
        if (d) f || (g = m);
        else if (!n) return [];
        f = m;
    }
    if (d) for(let a, e, g = d.length - 1; 0 <= g; g--){
        a = d[g], e = a.length;
        for(let d, g = 0; g < e; g++)if (d = a[g], !f[d]) {
            if (c) c--;
            else if (h[i++] = d, i === b) return h;
            f[d] = 1;
        }
    }
    return h;
}
function $7ad27e6ca9f7d5a4$export$b1044624651dae94(a, b) {
    const c = (0, $d5e7506932211fe0$export$5c30cbca21b2d575)(), d = (0, $d5e7506932211fe0$export$5c30cbca21b2d575)(), e = [];
    for(let d = 0; d < a.length; d++)c[a[d]] = 1;
    for(let f, g = 0; g < b.length; g++){
        f = b[g];
        for(let a, b = 0; b < f.length; b++)a = f[b], c[a] && !d[a] && (d[a] = 1, e[e.length] = a);
    }
    return e;
}




function $802581eeb863c46c$var$CacheClass(a) {
    this.limit = !0 !== a && a, this.cache = (0, $d5e7506932211fe0$export$5c30cbca21b2d575)(), this.queue = [];
}
var $802581eeb863c46c$export$2e2bcd8739ae039 = $802581eeb863c46c$var$CacheClass;
function $802581eeb863c46c$export$393c0f7a9d25469(a, b, c) {
    (0, $d5e7506932211fe0$export$167528a9b5133c2f)(a) && (a = a.query);
    let d = this.cache.get(a);
    return d || (d = this.search(a, b, c), this.cache.set(a, d)), d;
}
$802581eeb863c46c$var$CacheClass.prototype.set = function(a, b) {
    if (!this.cache[a]) {
        let b = this.queue.length;
        b === this.limit ? delete this.cache[this.queue[b - 1]] : b++;
        for(let a = b - 1; 0 < a; a--)this.queue[a] = this.queue[a - 1];
        this.queue[0] = a;
    }
    this.cache[a] = b;
}, $802581eeb863c46c$var$CacheClass.prototype.get = function(a) {
    const b = this.cache[a];
    if (this.limit && b) {
        const b = this.queue.indexOf(a);
        if (b) {
            const a = this.queue[b - 1];
            this.queue[b - 1] = this.queue[b], this.queue[b] = a;
        }
    }
    return b;
}, $802581eeb863c46c$var$CacheClass.prototype.del = function(a) {
    for(let b, c, d = 0; d < this.queue.length; d++)c = this.queue[d], b = this.cache[c], b.includes(a) && (this.queue.splice(d--, 1), delete this.cache[c]);
};




const $ce46ba6140cfd506$var$preset = {
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
function $ce46ba6140cfd506$export$2e2bcd8739ae039(a) {
    if ((0, $d5e7506932211fe0$export$2a124c24c597fe41)(a)) (0, $75aac1a564928241$export$3f32c2013f0dcc1e) && !$ce46ba6140cfd506$var$preset[a] && console.warn("Preset not found: " + a), a = $ce46ba6140cfd506$var$preset[a];
    else {
        const b = a.preset;
        b && ((0, $75aac1a564928241$export$3f32c2013f0dcc1e) && !b[b] && console.warn("Preset not found: " + b), a = Object.assign({}, b[b], a));
    }
    return a;
}




function $8439c1229775a928$var$async(a, b, c, d, e, f, g) {
    setTimeout(function() {
        const h = a(c ? c + "." + d : d, JSON.stringify(g));
        h && h.then ? h.then(function() {
            b.export(a, b, c, e, f + 1);
        }) : b.export(a, b, c, e, f + 1);
    });
}
function $8439c1229775a928$export$66227b8d5ad2b105(a, b, c, d, e) {
    let f, g;
    switch(e || (e = 0)){
        case 0:
            if (f = "reg", this.fastupdate) for(let a in g = (0, $d5e7506932211fe0$export$5c30cbca21b2d575)(), this.register)g[a] = 1;
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
    return $8439c1229775a928$var$async(a, b || this, c, f, d, e, g), !0;
}
function $8439c1229775a928$export$c4d30ad25f71cbb5(a, b) {
    b && ((0, $d5e7506932211fe0$export$2a124c24c597fe41)(b) && (b = JSON.parse(b)), "cfg" === a ? this.optimize = !!b.opt : "reg" === a ? (this.fastupdate = !1, this.register = b) : "map" === a ? this.map = b : "ctx" === a && (this.ctx = b));
}
function $8439c1229775a928$export$c839107fc6c8e852(a, b, c, d, e) {
    if (e || (e = 0), d || (d = 0), d < this.field.length) {
        const c = this.field[d], f = this.index[c];
        b = this, setTimeout(function() {
            f.export(a, b, e ? c : "", d, e++) || (d++, e = 1, b.export(a, b, c, d, e));
        });
    } else {
        let b, f;
        switch(e){
            case 1:
                b = "tag", f = this.tagindex;
                break;
            case 2:
                b = "store", f = this.store;
                break;
            default:
                return;
        }
        $8439c1229775a928$var$async(a, this, c, b, d, e, f);
    }
}
function $8439c1229775a928$export$c03643075c5562f3(a, b) {
    if (b) switch((0, $d5e7506932211fe0$export$2a124c24c597fe41)(b) && (b = JSON.parse(b)), a){
        case "tag":
            this.tagindex = b;
            break;
        case "reg":
            this.fastupdate = !1, this.register = b;
            for(let a, c = 0; c < this.field.length; c++)a = this.index[this.field[c]], a.register = b, a.fastupdate = !1;
            break;
        case "store":
            this.store = b;
            break;
        default:
            a = a.split(".");
            const c = a[0];
            a = a[1], c && a && this.index[c].import(a, b);
    }
}


function $46cb4c3ac7b3a143$var$Index(a, b) {
    if (!(this instanceof $46cb4c3ac7b3a143$var$Index)) return new $46cb4c3ac7b3a143$var$Index(a);
    let c, d, e;
    a ? ((0, $75aac1a564928241$export$9b5b3264e3a20190) && (a = (0, $ce46ba6140cfd506$export$2e2bcd8739ae039)(a)), c = a.charset, d = a.lang, (0, $d5e7506932211fe0$export$2a124c24c597fe41)(c) && (-1 === c.indexOf(":") && (c += ":default"), c = (0, $1bf4ad37858666c2$export$c63ff56643f09e5d)[c]), (0, $d5e7506932211fe0$export$2a124c24c597fe41)(d) && (d = (0, $1bf4ad37858666c2$export$240dd687449f055c)[d])) : a = {};
    let f, g, h = a.context || {};
    this.encode = a.encode || c && c.encode || (0, $145a3fc78cf15432$export$c564cdbbe6da493), this.register = b || (0, $d5e7506932211fe0$export$5c30cbca21b2d575)(), this.resolution = f = a.resolution || 9, this.tokenize = e = c && c.tokenize || a.tokenize || "strict", this.depth = "strict" === e && h.depth, this.bidirectional = (0, $d5e7506932211fe0$export$952e4699767d54aa)(h.bidirectional, !0), this.optimize = g = (0, $d5e7506932211fe0$export$952e4699767d54aa)(a.optimize, !0), this.fastupdate = (0, $d5e7506932211fe0$export$952e4699767d54aa)(a.fastupdate, !0), this.minlength = a.minlength || 1, this.boost = a.boost, this.map = g ? (0, $d5e7506932211fe0$export$ef70783d1acb931a)(f) : (0, $d5e7506932211fe0$export$5c30cbca21b2d575)(), this.resolution_ctx = f = h.resolution || 1, this.ctx = g ? (0, $d5e7506932211fe0$export$ef70783d1acb931a)(f) : (0, $d5e7506932211fe0$export$5c30cbca21b2d575)(), this.rtl = c && c.rtl || a.rtl, this.matcher = (e = a.matcher || d && d.matcher) && (0, $ff72f3603b01430d$export$3f58655d2a05f980)(e, !1), this.stemmer = (e = a.stemmer || d && d.stemmer) && (0, $ff72f3603b01430d$export$3f58655d2a05f980)(e, !0), this.filter = (e = a.filter || d && d.filter) && (0, $ff72f3603b01430d$export$af393a7932753a5a)(e), (0, $75aac1a564928241$export$b9a1c33bbc086c14) && (this.cache = (e = a.cache) && new (0, $802581eeb863c46c$export$2e2bcd8739ae039)(e));
}
var $46cb4c3ac7b3a143$export$2e2bcd8739ae039 = $46cb4c3ac7b3a143$var$Index;
$46cb4c3ac7b3a143$var$Index.prototype.append = function(a, b) {
    return this.add(a, b, !0);
}, $46cb4c3ac7b3a143$var$Index.prototype.add = function(a, b, c, d) {
    if (b && (a || 0 === a)) {
        if (!d && !c && this.register[a]) return this.update(a, b);
        b = this.encode("" + b);
        const e = b.length;
        if (e) {
            const d = (0, $d5e7506932211fe0$export$5c30cbca21b2d575)(), f = (0, $d5e7506932211fe0$export$5c30cbca21b2d575)(), g = this.depth, h = this.resolution;
            for(let j = 0; j < e; j++){
                let i = b[this.rtl ? e - 1 - j : j], k = i.length;
                if (i && k >= this.minlength && (g || !f[i])) {
                    let l = $46cb4c3ac7b3a143$var$get_score(h, e, j), m = "";
                    switch(this.tokenize){
                        case "full":
                            if (2 < k) {
                                for(let b = 0; b < k; b++)for(let d = k; d > b; d--)if (d - b >= this.minlength) {
                                    const g = $46cb4c3ac7b3a143$var$get_score(h, e, j, k, b);
                                    m = i.substring(b, d), this.push_index(f, m, g, a, c);
                                }
                                break;
                            }
                        case "reverse":
                            if (1 < k) {
                                for(let b = k - 1; 0 < b; b--)if (m = i[b] + m, m.length >= this.minlength) {
                                    const d = $46cb4c3ac7b3a143$var$get_score(h, e, j, k, b);
                                    this.push_index(f, m, d, a, c);
                                }
                                m = "";
                            }
                        case "forward":
                            if (1 < k) {
                                for(let b = 0; b < k; b++)m += i[b], m.length >= this.minlength && this.push_index(f, m, l, a, c);
                                break;
                            }
                        default:
                            if (this.boost && (l = Math.min(0 | l / this.boost(b, i, j), h - 1)), this.push_index(f, i, l, a, c), g && 1 < e && j < e - 1) {
                                const f = (0, $d5e7506932211fe0$export$5c30cbca21b2d575)(), h = this.resolution_ctx, k = i, l = Math.min(g + 1, e - j);
                                f[k] = 1;
                                for(let g = 1; g < l; g++)if (i = b[this.rtl ? e - 1 - j - g : j + g], i && i.length >= this.minlength && !f[i]) {
                                    f[i] = 1;
                                    const b = $46cb4c3ac7b3a143$var$get_score(h + (e / 2 > h ? 0 : 1), e, j, l - 1, g - 1), m = this.bidirectional && i > k;
                                    this.push_index(d, m ? k : i, b, a, c, m ? i : k);
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
function $46cb4c3ac7b3a143$var$get_score(a, b, c, d, e) {
    return c && 1 < a ? b + (d || 0) <= a ? c + (e || 0) : 0 | (a - 1) / (b + (d || 0)) * (c + (e || 0)) + 1 : 0;
}
$46cb4c3ac7b3a143$var$Index.prototype.push_index = function(a, b, c, d, e, f) {
    let g = f ? this.ctx : this.map;
    if ((!a[b] || f && !a[b][f]) && (this.optimize && (g = g[c]), f ? (a = a[b] || (a[b] = (0, $d5e7506932211fe0$export$5c30cbca21b2d575)()), a[f] = 1, g = g[f] || (g[f] = (0, $d5e7506932211fe0$export$5c30cbca21b2d575)())) : a[b] = 1, g = g[b] || (g[b] = []), this.optimize || (g = g[c] || (g[c] = [])), (!e || !g.includes(d)) && (g[g.length] = d, this.fastupdate))) {
        const a = this.register[d] || (this.register[d] = []);
        a[a.length] = g;
    }
}, $46cb4c3ac7b3a143$var$Index.prototype.search = function(a, b, c) {
    c || (!b && (0, $d5e7506932211fe0$export$167528a9b5133c2f)(a) ? (c = a, a = c.query) : (0, $d5e7506932211fe0$export$167528a9b5133c2f)(b) && (c = b));
    let d, e, f, g = [], h = 0;
    if (c && (a = c.query || a, b = c.limit, h = c.offset || 0, e = c.context, f = (0, $75aac1a564928241$export$401bee6d54371a40) && c.suggest), a && (a = this.encode("" + a), d = a.length, 1 < d)) {
        const b = (0, $d5e7506932211fe0$export$5c30cbca21b2d575)(), c = [];
        for(let e, h = 0, i = 0; h < d; h++)if (e = a[h], e && e.length >= this.minlength && !b[e]) {
            if (!this.optimize && !f && !this.map[e]) return g;
            c[i++] = e, b[e] = 1;
        }
        a = c, d = a.length;
    }
    if (!d) return g;
    b || (b = 100);
    let i, j = this.depth && 1 < d && !1 !== e, k = 0;
    j ? (i = a[0], k = 1) : 1 < d && a.sort((0, $d5e7506932211fe0$export$3b235e93dd1df04f));
    for(let e, l; k < d; k++){
        if (l = a[k], j ? (e = this.add_result(g, f, b, h, 2 === d, l, i), (!f || !1 !== e || !g.length) && (i = l)) : e = this.add_result(g, f, b, h, 1 === d, l), e) return e;
        if (f && k == d - 1) {
            let a = g.length;
            if (!a) {
                if (j) {
                    j = 0, k = -1;
                    continue;
                }
                return g;
            }
            if (1 === a) return $46cb4c3ac7b3a143$var$single_result(g[0], b, h);
        }
    }
    return (0, $7ad27e6ca9f7d5a4$export$1f4807a235930d45)(g, b, h, f);
}, $46cb4c3ac7b3a143$var$Index.prototype.add_result = function(a, b, c, d, e, f, g) {
    let h = [], i = g ? this.ctx : this.map;
    if (this.optimize || (i = $46cb4c3ac7b3a143$var$get_array(i, f, g, this.bidirectional)), i) {
        let b = 0;
        const j = Math.min(i.length, g ? this.resolution_ctx : this.resolution);
        for(let a, k, l = 0, m = 0; l < j && (a = i[l], !(a && (this.optimize && (a = $46cb4c3ac7b3a143$var$get_array(a, f, g, this.bidirectional)), d && a && e && (k = a.length, k <= d ? (d -= k, a = null) : (a = a.slice(d), d = 0)), a && (h[b++] = a, e && (m += a.length, m >= c))))); l++);
        if (b) return e ? $46cb4c3ac7b3a143$var$single_result(h, c, 0) : void (a[a.length] = h);
    }
    return !b && h;
};
function $46cb4c3ac7b3a143$var$single_result(a, b, c) {
    return a = 1 === a.length ? a[0] : (0, $d5e7506932211fe0$export$ee1b3e54f0441b22)(a), c || a.length > b ? a.slice(c, c + b) : a;
}
function $46cb4c3ac7b3a143$var$get_array(a, b, c, d) {
    if (c) {
        const e = d && b > c;
        a = a[e ? b : c], a = a && a[e ? c : b];
    } else a = a[b];
    return a;
}
$46cb4c3ac7b3a143$var$Index.prototype.contain = function(a) {
    return !!this.register[a];
}, $46cb4c3ac7b3a143$var$Index.prototype.update = function(a, b) {
    return this.remove(a).add(a, b);
}, $46cb4c3ac7b3a143$var$Index.prototype.remove = function(a, b) {
    const c = this.register[a];
    if (c) {
        if (this.fastupdate) for(let b, d = 0; d < c.length; d++)b = c[d], b.splice(b.indexOf(a), 1);
        else $46cb4c3ac7b3a143$var$remove_index(this.map, a, this.resolution, this.optimize), this.depth && $46cb4c3ac7b3a143$var$remove_index(this.ctx, a, this.resolution_ctx, this.optimize);
        b || delete this.register[a], (0, $75aac1a564928241$export$b9a1c33bbc086c14) && this.cache && this.cache.del(a);
    }
    return this;
};
function $46cb4c3ac7b3a143$var$remove_index(a, b, c, d, e) {
    let f = 0;
    if (!(0, $d5e7506932211fe0$export$e11d765514e26475)(a)) for(let g in a)f = $46cb4c3ac7b3a143$var$remove_index(a[g], b, c, d, e), f || delete a[g];
    else if (!e) {
        e = Math.min(a.length, c);
        for(let g, h = 0; h < e; h++)g = a[h], g && (f = $46cb4c3ac7b3a143$var$remove_index(g, b, c, d, e), !d && !f && delete a[h]);
    } else {
        const c = a.indexOf(b);
        -1 === c ? f++ : 1 < a.length && (a.splice(c, 1), f++);
    }
    return f;
}
(0, $75aac1a564928241$export$b9a1c33bbc086c14) && ($46cb4c3ac7b3a143$var$Index.prototype.searchCache = (0, $802581eeb863c46c$export$393c0f7a9d25469)), (0, $75aac1a564928241$export$b343c2997e12a5fc) && ($46cb4c3ac7b3a143$var$Index.prototype.export = (0, $8439c1229775a928$export$66227b8d5ad2b105), $46cb4c3ac7b3a143$var$Index.prototype.import = (0, $8439c1229775a928$export$c4d30ad25f71cbb5)), (0, $75aac1a564928241$export$ac906da4cb8b9687) && (0, $3c7ef75cc23da802$export$2e2bcd8739ae039)($46cb4c3ac7b3a143$var$Index.prototype);




const $3803f040aa017e61$export$270f8a265cdb7a58 = !1;
const $3803f040aa017e61$export$660b2ee2d4fb4eff = "";
var $3803f040aa017e61$export$2e2bcd8739ae039 = {
    encode: $3803f040aa017e61$export$c564cdbbe6da493,
    rtl: !1,
    tokenize: ""
};
const $3803f040aa017e61$var$regex_a = (0, $ff72f3603b01430d$export$17b0f4d84dbfeedf)("[\xe0\xe1\xe2\xe3\xe4\xe5]"), $3803f040aa017e61$var$regex_e = (0, $ff72f3603b01430d$export$17b0f4d84dbfeedf)("[\xe8\xe9\xea\xeb]"), $3803f040aa017e61$var$regex_i = (0, $ff72f3603b01430d$export$17b0f4d84dbfeedf)("[\xec\xed\xee\xef]"), $3803f040aa017e61$var$regex_o = (0, $ff72f3603b01430d$export$17b0f4d84dbfeedf)("[\xf2\xf3\xf4\xf5\xf6ő]"), $3803f040aa017e61$var$regex_u = (0, $ff72f3603b01430d$export$17b0f4d84dbfeedf)("[\xf9\xfa\xfb\xfcű]"), $3803f040aa017e61$var$regex_y = (0, $ff72f3603b01430d$export$17b0f4d84dbfeedf)("[\xfdŷ\xff]"), $3803f040aa017e61$var$regex_n = (0, $ff72f3603b01430d$export$17b0f4d84dbfeedf)("\xf1"), $3803f040aa017e61$var$regex_c = (0, $ff72f3603b01430d$export$17b0f4d84dbfeedf)("[\xe7c]"), $3803f040aa017e61$var$regex_s = (0, $ff72f3603b01430d$export$17b0f4d84dbfeedf)("\xdf"), $3803f040aa017e61$var$regex_and = (0, $ff72f3603b01430d$export$17b0f4d84dbfeedf)(" & "), $3803f040aa017e61$var$pairs = [
    $3803f040aa017e61$var$regex_a,
    "a",
    $3803f040aa017e61$var$regex_e,
    "e",
    $3803f040aa017e61$var$regex_i,
    "i",
    $3803f040aa017e61$var$regex_o,
    "o",
    $3803f040aa017e61$var$regex_u,
    "u",
    $3803f040aa017e61$var$regex_y,
    "y",
    $3803f040aa017e61$var$regex_n,
    "n",
    $3803f040aa017e61$var$regex_c,
    "k",
    $3803f040aa017e61$var$regex_s,
    "s",
    $3803f040aa017e61$var$regex_and,
    " and "
];
function $3803f040aa017e61$export$c564cdbbe6da493(a) {
    return a = "" + a, (0, $ff72f3603b01430d$export$43f28b24e1eb8181).call(this, (0, $ff72f3603b01430d$export$a3295358bff77e)(a).toLowerCase(), !a.normalize && $3803f040aa017e61$var$pairs, (0, $ff72f3603b01430d$export$82f1048369ca8b36), !1);
}


/**
 * May be used for filtering array's.
 * @param value 
 * @param index 
 * @param self 
 */ const $e9efd3cb45cdea86$export$36ea2e897413bf91 = (key = "")=>(value, index, self)=>{
        if (key) {
            const item = self.find((inner)=>inner[key] === value[key]);
            return self.indexOf(item) === index && value;
        }
        return self.indexOf(value) === index && value;
    };



const $516c0ea598792020$var$iconMap = {
    x: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>`,
    gearFill: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16"><path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/></svg>`,
    chevronExpand: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-expand" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/></svg>`,
    chevronContract: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-contract" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M3.646 13.854a.5.5 0 0 0 .708 0L8 10.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zm0-11.708a.5.5 0 0 1 .708 0L8 5.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708z"/></svg>`,
    plus: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>`
};
const $516c0ea598792020$export$1ca1ec8b29a4ce27 = (name)=>new (0, $c521b6b4e199919c$export$b5329b670b24e23b)("html", [
        $516c0ea598792020$var$iconMap[name].replace('class="', 'class="icon ')
    ], []);


const $3087701a1feb61cf$export$c7dde40abc42a582 = (options, value)=>{
    return options.find((option)=>option[0] === value)?.[1] //?.split(' (')?.[0]
    ;
};


// This is a cache of in-flight requests. Each request key maps to an
// array of Promises. When the request resolves, each promise in the
// array is pushed to.
var $206f33389fcf828d$var$requests = {};
function $206f33389fcf828d$export$c3c960ad782dc3a0() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref$url = _ref.url, url = _ref$url === undefined ? "" : _ref$url, _ref$method = _ref.method, method = _ref$method === undefined ? "" : _ref$method, _ref$responseType = _ref.responseType, responseType = _ref$responseType === undefined ? "" : _ref$responseType, _ref$body = _ref.body, body = _ref$body === undefined ? "" : _ref$body;
    return [
        url,
        method.toUpperCase(),
        responseType,
        body
    ].join("||");
}
function $206f33389fcf828d$export$6fbf65a0adda0f96(requestKey) {
    return Boolean($206f33389fcf828d$var$requests[requestKey]);
}
function $206f33389fcf828d$export$179b81598c08d13a() {
    $206f33389fcf828d$var$requests = {};
}
// This loops through all of the handlers for the request and either
// resolves or rejects them.
function $206f33389fcf828d$var$resolveRequest(_ref2) {
    var requestKey = _ref2.requestKey, res = _ref2.res, err = _ref2.err;
    var handlers = $206f33389fcf828d$var$requests[requestKey] || [];
    handlers.forEach(function(handler) {
        if (res) handler.resolve(res);
        else handler.reject(err);
    });
    // This list of handlers has been, well, handled. So we
    // clear the handlers for the next request.
    $206f33389fcf828d$var$requests[requestKey] = null;
}
function $206f33389fcf828d$export$3c0f06aa4e3158f2(input) {
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
    var requestKeyToUse = requestKey || $206f33389fcf828d$export$c3c960ad782dc3a0({
        // If `input` is a request, then we use that URL
        url: input.url || input,
        // We prefer values from `init` over request objects. With `fetch()`, init
        // takes priority over a passed-in request
        method: initToUse.method || input.method || "",
        body: initToUse.body || input.body || ""
    });
    var proxyReq = void 0;
    if (dedupe) {
        if (!$206f33389fcf828d$var$requests[requestKeyToUse]) $206f33389fcf828d$var$requests[requestKeyToUse] = [];
        var handlers = $206f33389fcf828d$var$requests[requestKeyToUse];
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
            if (dedupe) $206f33389fcf828d$var$resolveRequest({
                requestKey: requestKeyToUse,
                res: res
            });
            else return res;
        }, function() {
            res.data = null;
            if (dedupe) $206f33389fcf828d$var$resolveRequest({
                requestKey: requestKeyToUse,
                res: res
            });
            else return res;
        });
    }, function(err) {
        if (dedupe) $206f33389fcf828d$var$resolveRequest({
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
 */ function $1638992fa62a0689$export$1e381e1de5ace8e(character) {
    const code = typeof character === "string" ? character.charCodeAt(0) : character;
    return code >= 97 && code <= 122 || code >= 65 && code <= 90;
}


/**
 * Check if the given character code, or the character code at the first
 * character, is decimal.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is a decimal
 */ function $b2bad729ab671cf6$export$2ad0182371401ea4(character) {
    const code = typeof character === "string" ? character.charCodeAt(0) : character;
    return code >= 48 && code <= 57 /* 0-9 */ ;
}


function $5e0eb22705eb8f1b$export$176ed353558777b8(character) {
    return (0, $1638992fa62a0689$export$1e381e1de5ace8e)(character) || (0, $b2bad729ab671cf6$export$2ad0182371401ea4)(character);
}




/** @type {Array<string>} */ const $06c41386ada6e135$export$28a535dd448ffda4 = [
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


/** @type {Record<string, string|null>} */ const $1b4aad1f7b8190c6$export$411e9a7b4316b872 = {
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


const $5493746a982439d5$var$own = {}.hasOwnProperty;
function $5493746a982439d5$export$98e6a39c04603d36(tag, options = {}) {
    const result = $5493746a982439d5$var$empty();
    const source = String(tag);
    const value = source.toLowerCase();
    let index = 0;
    // Check input.
    if (tag === null || tag === undefined) throw new Error("Expected string, got `" + tag + "`");
    // Let’s start.
    // First: the edge cases.
    if ($5493746a982439d5$var$own.call((0, $1b4aad1f7b8190c6$export$411e9a7b4316b872), value)) {
        const replacement = (0, $1b4aad1f7b8190c6$export$411e9a7b4316b872)[value];
        if ((options.normalize === undefined || options.normalize === null || options.normalize) && typeof replacement === "string") return $5493746a982439d5$export$98e6a39c04603d36(replacement);
        result[(0, $06c41386ada6e135$export$28a535dd448ffda4).includes(value) ? "regular" : "irregular"] = source;
        return result;
    }
    // Now, to actually parse, eat what could be a language.
    while((0, $1638992fa62a0689$export$1e381e1de5ace8e)(value.charCodeAt(index)) && index < 9)index++;
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
            let groups = 0;
            while(value.charCodeAt(index) === 45 /* `-` */  && (0, $1638992fa62a0689$export$1e381e1de5ace8e)(value.charCodeAt(index + 1)) && (0, $1638992fa62a0689$export$1e381e1de5ace8e)(value.charCodeAt(index + 2)) && (0, $1638992fa62a0689$export$1e381e1de5ace8e)(value.charCodeAt(index + 3)) && !(0, $1638992fa62a0689$export$1e381e1de5ace8e)(value.charCodeAt(index + 4))){
                if (groups > 2 /* Max extended language subtag count. */ ) return fail(index, 3, "Too many extended language subtags, expected at most 3 subtags");
                // Extended language subtag.
                result.extendedLanguageSubtags.push(source.slice(index + 1, index + 4));
                index += 4;
                groups++;
            }
        }
        // ISO 15924 script.
        // <https://github.com/wooorm/iso-15924>
        if (value.charCodeAt(index) === 45 /* `-` */  && (0, $1638992fa62a0689$export$1e381e1de5ace8e)(value.charCodeAt(index + 1)) && (0, $1638992fa62a0689$export$1e381e1de5ace8e)(value.charCodeAt(index + 2)) && (0, $1638992fa62a0689$export$1e381e1de5ace8e)(value.charCodeAt(index + 3)) && (0, $1638992fa62a0689$export$1e381e1de5ace8e)(value.charCodeAt(index + 4)) && !(0, $1638992fa62a0689$export$1e381e1de5ace8e)(value.charCodeAt(index + 5))) {
            result.script = source.slice(index + 1, index + 5);
            index += 5;
        }
        if (value.charCodeAt(index) === 45 /* `-` */ ) {
            // ISO 3166-1 region.
            // <https://github.com/wooorm/iso-3166>
            if ((0, $1638992fa62a0689$export$1e381e1de5ace8e)(value.charCodeAt(index + 1)) && (0, $1638992fa62a0689$export$1e381e1de5ace8e)(value.charCodeAt(index + 2)) && !(0, $1638992fa62a0689$export$1e381e1de5ace8e)(value.charCodeAt(index + 3))) {
                result.region = source.slice(index + 1, index + 3);
                index += 3;
            } else if ((0, $b2bad729ab671cf6$export$2ad0182371401ea4)(value.charCodeAt(index + 1)) && (0, $b2bad729ab671cf6$export$2ad0182371401ea4)(value.charCodeAt(index + 2)) && (0, $b2bad729ab671cf6$export$2ad0182371401ea4)(value.charCodeAt(index + 3)) && !(0, $b2bad729ab671cf6$export$2ad0182371401ea4)(value.charCodeAt(index + 4))) {
                result.region = source.slice(index + 1, index + 4);
                index += 4;
            }
        }
        while(value.charCodeAt(index) === 45 /* `-` */ ){
            const start = index + 1;
            let offset = start;
            while((0, $5e0eb22705eb8f1b$export$176ed353558777b8)(value.charCodeAt(offset))){
                if (offset - start > 7 /* Max variant. */ ) return fail(offset, 1, "Too long variant, expected at most 8 characters");
                offset++;
            }
            if (// Long variant.
            offset - start > 4 /* Min alpha numeric variant. */  || // Short variant.
            offset - start > 3 /* Min variant. */  && (0, $b2bad729ab671cf6$export$2ad0182371401ea4)(value.charCodeAt(start))) {
                result.variants.push(source.slice(start, offset));
                index = offset;
            } else break;
        }
        // Extensions.
        while(value.charCodeAt(index) === 45 /* `-` */ ){
            // Exit if this isn’t an extension.
            if (value.charCodeAt(index + 1) === 120 /* `x` */  || !(0, $5e0eb22705eb8f1b$export$176ed353558777b8)(value.charCodeAt(index + 1)) || value.charCodeAt(index + 2) !== 45 /* `-` */  || !(0, $5e0eb22705eb8f1b$export$176ed353558777b8)(value.charCodeAt(index + 3))) break;
            let offset = index + 2;
            let groups = 0;
            while(value.charCodeAt(offset) === 45 /* `-` */  && (0, $5e0eb22705eb8f1b$export$176ed353558777b8)(value.charCodeAt(offset + 1)) && (0, $5e0eb22705eb8f1b$export$176ed353558777b8)(value.charCodeAt(offset + 2))){
                const start = offset + 1;
                offset = start + 2;
                groups++;
                while((0, $5e0eb22705eb8f1b$export$176ed353558777b8)(value.charCodeAt(offset))){
                    if (offset - start > 7 /* Max extension. */ ) return fail(offset, 2, "Too long extension, expected at most 8 characters");
                    offset++;
                }
            }
            if (!groups) return fail(offset, 4, "Empty extension, extensions must have at least 2 characters of content");
            result.extensions.push({
                singleton: source.charAt(index + 1),
                extensions: source.slice(index + 3, offset).split("-")
            });
            index = offset;
        }
    } else index = 0;
    // Private use.
    if (index === 0 && value.charCodeAt(index) === 120 || value.charCodeAt(index) === 45 /* `-` */  && value.charCodeAt(index + 1) === 120) {
        index = index ? index + 2 : 1;
        let offset = index;
        while(value.charCodeAt(offset) === 45 /* `-` */  && (0, $5e0eb22705eb8f1b$export$176ed353558777b8)(value.charCodeAt(offset + 1))){
            const start = index + 1;
            offset = start;
            while((0, $5e0eb22705eb8f1b$export$176ed353558777b8)(value.charCodeAt(offset))){
                if (offset - start > 7 /* Max private use. */ ) return fail(offset, 5, "Too long private-use area, expected at most 8 characters");
                offset++;
            }
            result.privateuse.push(source.slice(index + 1, offset));
            index = offset;
        }
    }
    if (index !== source.length) return fail(index, 6, "Found superfluous content after tag");
    return result;
    /**
   * Create an empty results object.
   *
   * @param {number} offset
   * @param {number} code
   * @param {string} reason
   * @returns {Schema}
   */ function fail(offset, code, reason) {
        if (options.warning) options.warning(reason, code, offset);
        return options.forgiving ? result : $5493746a982439d5$var$empty();
    }
}
/**
 * Create an empty results object.
 *
 * @returns {Schema}
 */ function $5493746a982439d5$var$empty() {
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
 */ function $142d340fab5fe737$export$fac44ee5b035f737(schema = {}) {
    /** @type {Array<string>} */ let result = [];
    if (schema.irregular) return schema.irregular;
    if (schema.regular) return schema.regular;
    if (schema.language) {
        result = result.concat(schema.language, schema.extendedLanguageSubtags || [], schema.script || [], schema.region || [], schema.variants || []);
        const values = schema.extensions || [];
        let index = -1;
        while(++index < values.length){
            const value = values[index];
            if (value.singleton && value.extensions && value.extensions.length > 0) result.push(value.singleton, ...value.extensions);
        }
    }
    if (schema.privateuse && schema.privateuse.length > 0) result.push("x", ...schema.privateuse);
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
 */ function $baad5419b2d891c7$var$factory(check, filter) {
    /**
   * @param {Tag|Tags} tags
   *   One or more BCP-47 tags.
   * @param {Range|Ranges|undefined} [ranges='*']
   *   One or more RFC 4647 ranges.
   * @returns {IsFilter extends true ? Tags : Tag|undefined}
   *   Result.
   */ return function(tags, ranges) {
        let left = $baad5419b2d891c7$var$cast(tags, "tag");
        const right = $baad5419b2d891c7$var$cast(ranges === null || ranges === undefined ? "*" : ranges, "range");
        /** @type {Tags} */ const matches = [];
        let rightIndex = -1;
        while(++rightIndex < right.length){
            const range = right[rightIndex].toLowerCase();
            // Ignore wildcards in lookup mode.
            if (!filter && range === "*") continue;
            let leftIndex = -1;
            /** @type {Tags} */ const next = [];
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
const $baad5419b2d891c7$export$454d02d943c45292 = $baad5419b2d891c7$var$factory(function(tag, range) {
    return range === "*" || tag === range || tag.includes(range + "-");
}, true);
const $baad5419b2d891c7$export$d216e65da1a9aa7e = $baad5419b2d891c7$var$factory(function(tag, range) {
    // 3.3.2.1
    const left = tag.split("-");
    const right = range.split("-");
    let leftIndex = 0;
    let rightIndex = 0;
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
const $baad5419b2d891c7$export$dfc7155ac0343b8 = $baad5419b2d891c7$var$factory(function(tag, range) {
    let right = range;
    /* eslint-disable-next-line no-constant-condition */ while(true){
        if (right === "*" || tag === right) return true;
        let index = right.lastIndexOf("-");
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
 */ function $baad5419b2d891c7$var$cast(values, name) {
    const value = values && typeof values === "string" ? [
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
 */ const $758366a4bae6da00$export$de994efd351b291c = [
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
 */ const $76b7c34eaa717dad$export$4dbdc8f16fed8a34 = [
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
 */ const $cc98d117eed3de0b$export$14badfee79ea396f = {
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
 */ const $0ff9c9c081116044$export$b94b6742f5dec598 = {
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


const $9ba2ac6517409fde$var$own = {}.hasOwnProperty;
const $9ba2ac6517409fde$var$collator = new Intl.Collator();
/**
 * @param {Schema} base
 * @param {Partial<Schema>} changes
 * @returns {Schema}
 */ function $9ba2ac6517409fde$var$merge(base, changes) {
    if (!base.language) base.language = changes.language;
    if (!base.script) base.script = changes.script;
    if (!base.region) base.region = changes.region;
    if (changes.variants) base.variants.push(...changes.variants);
    return base;
}
/**
 * Mostly like:
 * <https://github.com/formatjs/formatjs/blob/a15e757/packages/intl-locale/index.ts#L254>
 * But doesn’t crash.
 *
 * @param {Schema} schema
 * @returns {string}
 */ function $9ba2ac6517409fde$var$addLikelySubtags(schema) {
    const { language: language , script: script , region: region  } = schema;
    /** @type {string|undefined} */ let match;
    if (script && region && (match = (0, $0ff9c9c081116044$export$b94b6742f5dec598)[(0, $142d340fab5fe737$export$fac44ee5b035f737)({
        language: language,
        script: script,
        region: region
    })])) {
        schema.script = undefined;
        schema.region = undefined;
    } else if (script && (match = (0, $0ff9c9c081116044$export$b94b6742f5dec598)[(0, $142d340fab5fe737$export$fac44ee5b035f737)({
        language: language,
        script: script
    })])) schema.script = undefined;
    else if (region && (match = (0, $0ff9c9c081116044$export$b94b6742f5dec598)[(0, $142d340fab5fe737$export$fac44ee5b035f737)({
        language: language,
        region: region
    })])) schema.region = undefined;
    else language && (match = (0, $0ff9c9c081116044$export$b94b6742f5dec598)[language]);
    if (match) {
        schema.language = undefined;
        $9ba2ac6517409fde$var$merge(schema, (0, $5493746a982439d5$export$98e6a39c04603d36)(match));
    }
    return (0, $142d340fab5fe737$export$fac44ee5b035f737)(schema);
}
/**
 * @param {Schema} schema
 */ function $9ba2ac6517409fde$var$removeLikelySubtags(schema) {
    $9ba2ac6517409fde$var$addLikelySubtags(schema);
    const { language: language , script: script , region: region  } = schema;
    if (!language) return schema;
    const maxLocale = (0, $142d340fab5fe737$export$fac44ee5b035f737)({
        language: language,
        script: script,
        region: region
    });
    if (maxLocale === $9ba2ac6517409fde$var$addLikelySubtags((0, $5493746a982439d5$export$98e6a39c04603d36)(language))) {
        schema.script = undefined;
        schema.region = undefined;
    } else if (region && maxLocale === $9ba2ac6517409fde$var$addLikelySubtags((0, $5493746a982439d5$export$98e6a39c04603d36)(language + "-" + region))) schema.script = undefined;
    else if (script && maxLocale === $9ba2ac6517409fde$var$addLikelySubtags((0, $5493746a982439d5$export$98e6a39c04603d36)(language + "-" + script))) schema.region = undefined;
    return schema;
}
function $9ba2ac6517409fde$export$d9b31aac4a13cff9(tag, options) {
    const settings = options || {};
    // 1. normalize and lowercase the tag (`sgn-be-fr` -> `sfb`).
    const schema = (0, $5493746a982439d5$export$98e6a39c04603d36)(String(tag || "").toLowerCase(), settings);
    const value = (0, $142d340fab5fe737$export$fac44ee5b035f737)(schema);
    if (!value) return value;
    let index = -1;
    // 2. Do fancy, expensive replaces (`ha-latn-gh` -> `ha-gh`).
    while(++index < (0, $758366a4bae6da00$export$de994efd351b291c).length){
        let from = (0, $758366a4bae6da00$export$de994efd351b291c)[index].from;
        if (from.slice(0, 4) === "und-" && schema.language) from = schema.language + from.slice(3);
        if ((0, $baad5419b2d891c7$export$d216e65da1a9aa7e)(value, from).length > 0) $9ba2ac6517409fde$var$replace(schema, from, (0, $758366a4bae6da00$export$de994efd351b291c)[index].to);
    }
    // 3. Do basic field replaces (`en-840` -> `en-us`).
    index = -1;
    while(++index < (0, $76b7c34eaa717dad$export$4dbdc8f16fed8a34).length)if ($9ba2ac6517409fde$var$remove(schema, (0, $76b7c34eaa717dad$export$4dbdc8f16fed8a34)[index].from.field, (0, $76b7c34eaa717dad$export$4dbdc8f16fed8a34)[index].from.value)) $9ba2ac6517409fde$var$add(schema, (0, $76b7c34eaa717dad$export$4dbdc8f16fed8a34)[index].to.field, (0, $76b7c34eaa717dad$export$4dbdc8f16fed8a34)[index].to.value);
    // 4. Minimize.
    $9ba2ac6517409fde$var$removeLikelySubtags(schema);
    // 5. Sort variants, and sort extensions on singleton.
    schema.variants.sort($9ba2ac6517409fde$var$collator.compare);
    schema.extensions.sort($9ba2ac6517409fde$var$compareSingleton);
    // 6. Warn if fields (currently only regions) should be updated but have
    // multiple choices.
    if (settings.warning) {
        /** @type {keyof many} */ let key;
        for(key in 0, $cc98d117eed3de0b$export$14badfee79ea396f)if ($9ba2ac6517409fde$var$own.call((0, $cc98d117eed3de0b$export$14badfee79ea396f), key)) {
            const map = (0, $cc98d117eed3de0b$export$14badfee79ea396f)[key];
            const value = schema[key];
            if (value && $9ba2ac6517409fde$var$own.call(map, value)) {
                const replacements = map[value];
                settings.warning("Deprecated " + key + " `" + value + "`, expected one of `" + replacements.join("`, `") + "`", -1, 7);
            }
        }
    }
    // 7. Add proper casing back.
    // Format script (ISO 15924) as titlecase (example: `Latn`):
    if (schema.script) schema.script = schema.script.charAt(0).toUpperCase() + schema.script.slice(1);
    // Format region (ISO 3166) as uppercase (note: this doesn’t affect numeric
    // codes, which is fine):
    if (schema.region) schema.region = schema.region.toUpperCase();
    return (0, $142d340fab5fe737$export$fac44ee5b035f737)(schema);
}
/**
 * @param {Schema} schema
 * @param {string} from
 * @param {string} to
 * @returns {void}
 */ function $9ba2ac6517409fde$var$replace(schema, from, to) {
    const left = (0, $5493746a982439d5$export$98e6a39c04603d36)(from);
    const right = (0, $5493746a982439d5$export$98e6a39c04603d36)(to);
    /** @type {Array<string>} */ const removed = [];
    /** @type {string|null|undefined} */ const lang = left.language;
    /** @type {keyof schema} */ let key;
    // Remove values from `from`:
    for(key in left)if ($9ba2ac6517409fde$var$own.call(left, key)) {
        const value = left[key];
        if (value && $9ba2ac6517409fde$var$remove(schema, key, value)) removed.push(key);
    }
    // Add values from `to`:
    for(key in right)if ($9ba2ac6517409fde$var$own.call(right, key)) {
        const value = right[key];
        // Only add values that are defined on `to`, and that were either removed by
        // `from` or are currently empty.
        if (lang && value && (removed.includes(key) || !schema[key])) $9ba2ac6517409fde$var$add(schema, key, key === "language" && value === "und" ? lang : value);
    }
}
/**
 * @param {Schema} object
 * @param {keyof Schema} key
 * @param {string|Array<string>|Array<Extension>} value
 * @returns {boolean}
 */ function $9ba2ac6517409fde$var$remove(object, key, value) {
    let removed = false;
    /** @type {string|Array<string>|Array<Extension>|null|undefined} */ let result;
    if (value) {
        const current = object[key];
        result = current;
        if (Array.isArray(current)) {
            result = [];
            let index = -1;
            while(++index < current.length){
                const item = current[index];
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
 */ function $9ba2ac6517409fde$var$add(object, key, value) {
    /** @type {string|Array<string>|Array<Extension>|null|undefined} */ const current = object[key];
    if (Array.isArray(current)) {
        const list = Array.isArray(value) ? value : [
            value
        ];
        /** @type {number} */ let index = -1;
        while(++index < list.length){
            const item = list[index];
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
 */ function $9ba2ac6517409fde$var$compareSingleton(left, right) {
    return $9ba2ac6517409fde$var$collator.compare(left.singleton, right.singleton);
}


var /** @ts-ignore */ $5a974927d95078c1$export$2e2bcd8739ae039 = {
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



const $bb1ab12bbffef664$var$regionCodesMerged = [];
const $bb1ab12bbffef664$var$languageOptions = [];
const $bb1ab12bbffef664$var$scriptOptions = [];
const $bb1ab12bbffef664$var$clean = (input)=>input.split(" (")[0];
let $bb1ab12bbffef664$var$listsAreImported = false;




const $bb1ab12bbffef664$var$importLists = async ()=>{
    if ($bb1ab12bbffef664$var$listsAreImported) return;
    const { iso15924: iso15924  } = await (parcelRequire("9ED0o"));
    const { iso31661: iso31661  } = await (parcelRequire("6U5lK"));
    const { iso6393: iso6393  } = await (parcelRequire("9XnEc"));
    const { unM49: unM49  } = await (parcelRequire("am40c"));
    $bb1ab12bbffef664$var$regionCodesMerged.push(...[
        ...iso31661.map((region)=>[
                region.alpha2,
                `${region.name} (ISO 31661)`
            ]),
        ...unM49.map((region)=>[
                region.code,
                `${region.name} (unM49)`
            ])
    ]);
    $bb1ab12bbffef664$var$languageOptions.push(...iso6393.map((language)=>[
            language.iso6391 ?? language.iso6393,
            language.name
        ]));
    $bb1ab12bbffef664$var$scriptOptions.push(...iso15924.map((script)=>[
            script.code,
            script.name
        ]));
    $bb1ab12bbffef664$var$listsAreImported = true;
};
const $bb1ab12bbffef664$export$2cd8252107eb640b = async (givenSettings = {})=>{
    const settings = {
        ...(0, $5a974927d95078c1$export$2e2bcd8739ae039)
    };
    Object.assign(settings, givenSettings);
    const sources = Object.fromEntries(await Promise.all(settings.sources.map(async (source)=>{
        return [
            source,
            await (0, $206f33389fcf828d$export$3c0f06aa4e3158f2)(source).then((response)=>new Map(response.data))
        ];
    })));
    const sourceKeys = Object.keys(sources);
    const searchIndex = new (0, $46cb4c3ac7b3a143$export$2e2bcd8739ae039)({
        preset: "match",
        tokenize: "forward",
        cache: true,
        encode: (0, $3803f040aa017e61$export$c564cdbbe6da493)
    });
    const index = async ()=>{
        for (let [sourceName, sourceItems] of Object.entries(sources)){
            const sourceIndex = sourceKeys.indexOf(sourceName);
            for (let [bcp47, [name, names]] of sourceItems.entries()){
                let index = 0;
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
                if (names) for (const name of names)searchIndex.add([
                    sourceIndex,
                    bcp47,
                    index++
                ], name);
            }
        }
    };
    setTimeout(index, 100);
    class Bcp47Picker extends HTMLElement {
        searchResults = [];
        values = [];
        showIndividualComponents = false;
        showAdvanced = false;
        isEditing = false;
        maxItems = 20;
        observer = false;
        defaultMaxItems = 20;
        bcp47Index = new Map();
        focusedResult = 0;
        /**
     * We render first and then we index the data.
     */ async connectedCallback() {
            this.values = this.getAttribute("value")?.split(/,| /g) ?? [];
            this.selectedValue = this.values?.[0] ?? "";
            this.classList.add("bcp47-picker");
            if (this.bcp47Index.size) return;
            if (settings.theme.base) this.classList.add(settings.theme.base);
            await this.render();
        }
        async render(searchTerm = "") {
            return (0, $f8cbb652275fbda3$export$b3890eb0ae9dca99)(this, await this.template(searchTerm));
        }
        /**
     * Searches through the text index and returns an initiated object.
     */ async search(searchTerm) {
            const bcp47Strings = await searchIndex.search(searchTerm);
            return bcp47Strings.map(([sourceIndex, index])=>{
                const sourceName = sourceKeys[sourceIndex];
                return [
                    index,
                    sources[sourceName].get(index.toString())
                ];
            }).filter((0, $e9efd3cb45cdea86$export$36ea2e897413bf91)("0")).sort((a, b)=>{
                const aNormalized = settings.forceCanonical ? (0, $9ba2ac6517409fde$export$d9b31aac4a13cff9)(a[0], {
                    forgiving: true
                }) : a[0];
                const bNormalized = settings.forceCanonical ? (0, $9ba2ac6517409fde$export$d9b31aac4a13cff9)(b[0], {
                    forgiving: true
                }) : b[0];
                if (aNormalized.length !== bNormalized.length) return aNormalized.length - bNormalized.length;
                return aNormalized.localeCompare(bNormalized);
            }).slice(0, this.maxItems);
        }
        /**
     * The template of the whole widget.
     */ async template(searchTerm = "") {
            const value = this.selectedValue ? (0, $5493746a982439d5$export$98e6a39c04603d36)(this.selectedValue) : {
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
            return (0, $f8cbb652275fbda3$export$c0bb0b647f701bb5)`
        <div class=${`bcp47-value ${settings.theme.valueContainer}`}>
          ${this.selectedValue ? await this.valuesDisplay() : this.emptyDisplay()}

          ${this.buttons(value)}
        </div>

        ${await this.individualComponentsForm(value)}

        ${this.resultsWrapper(searchTerm)}
      `;
        }
        focus() {
            this.querySelector(".bcp47-search")?.focus();
        }
        async label(value) {
            let label = undefined;
            if (value) {
                /**
         * Do we have a label given by one of the sources?
         */ for (const source of Object.keys(sources))if (!label) label = sources[source].get((0, $142d340fab5fe737$export$fac44ee5b035f737)(value))?.[0];
                /**
         * If not, generate it from the information we do have.
         */ if (!label) label = await this.getLabel(value);
            }
            return label;
        }
        /**
     * Default starting input
     */ emptyDisplay(hideBorder = false) {
            return (0, $f8cbb652275fbda3$export$c0bb0b647f701bb5)`
        <input 
          placeholder=${this.values.length === 0 ? `Search for a language, region or dialect` : ""} 
          class=${`${hideBorder ? "hide-borders" : ""} bcp47-search ${settings.theme.valueInput}`} 
          type='search' 
          onchange=${(event)=>{
                event.stopPropagation();
                event.stopImmediatePropagation();
                event.preventDefault();
            }}
          onkeydown=${async (event)=>{
                const isChar = event.key.length === 1 && event.key.match(/[a-z]/g) && !event.ctrlKey;
                const searchTerm = event.target.value + (isChar ? event.key : "");
                this.searchResults = await this.search(searchTerm);
                if (event.key === "Backspace" && searchTerm.length === 0) {
                    this.values.pop();
                    this.selectedValue = this.values[0];
                    this.value = this.values.join(",");
                    this.dispatchEvent(new CustomEvent("change"));
                }
                if (event.key === "Escape") await this.setValue(null);
                if (event.key === "ArrowDown") {
                    this.focusedResult++;
                    if (this.focusedResult > this.maxItems && this.focusedResult < this.searchResults.length) await this.increaseVisibleResults();
                }
                if (event.key === "ArrowUp") this.focusedResult--;
                if (event.key === "Enter" && this.searchResults?.[this.focusedResult]?.[0]) await this.setValue(this.searchResults[this.focusedResult][0]);
                if (this.focusedResult < 0) this.focusedResult = 0;
                if (this.focusedResult >= this.searchResults.length) this.focusedResult = this.searchResults.length - 1;
                await this.render(searchTerm);
                const resultsWrapper = document.querySelector(".bcp47-results");
                if (resultsWrapper) {
                    if (isChar) resultsWrapper.scrollTop = 0;
                    else {
                        const itemsPerPage = Math.floor(resultsWrapper.clientHeight / resultsWrapper.children[0].clientHeight);
                        const page = Math.floor(this.focusedResult / itemsPerPage);
                        const indexToScrollTo = page * itemsPerPage;
                        resultsWrapper.children[indexToScrollTo]?.scrollIntoView({
                            behavior: "smooth"
                        });
                    }
                }
                this.querySelector(".bcp47-search")?.focus();
            }}
          onblur=${async (event)=>{
                if (event.relatedTarget?.closest(".bcp47-picker") === this) return;
                await this.setValue(null);
                await this.render();
            }} 
          />
      `;
        }
        /**
     * Shows the current value
     */ async valuesDisplay() {
            return (0, $f8cbb652275fbda3$export$c0bb0b647f701bb5)`
        <div class=${`bcp47-value-wrapper ${settings.theme.valueInput}`}>
          ${await Promise.all(this.values.map(async (item)=>{
                const value = (0, $5493746a982439d5$export$98e6a39c04603d36)(item);
                return (0, $f8cbb652275fbda3$export$c0bb0b647f701bb5)`
            <div class=${`bcp47-value-item ${settings.theme.valueItem}`}>
              <span onclick=${()=>{
                    this.selectedValue = item;
                    this.render();
                }} class=${`bcp47-value-label ${item === this.selectedValue ? "active" : ""}`}>
                ${await this.label(value)}
              </span>

              <span class=${`bcp47-value-bcp47 ${settings.theme.code}`}>
                ${item}
              </span>
              
              <span class="bcp47-remove-value" onclick=${async ()=>{
                    const selectedItem = this.values.find((innerValue)=>innerValue === item);
                    if (selectedItem) {
                        const index = this.values.indexOf(selectedItem);
                        if (index !== -1) this.values.splice(index, 1);
                    }
                    this.selectedValue = this.values[0];
                    this.value = this.values.join(",") ?? "";
                    this.dispatchEvent(new CustomEvent("change"));
                    await this.render();
                    this.querySelector(".bcp47-search").focus();
                }}>${(0, $516c0ea598792020$export$1ca1ec8b29a4ce27)("x")}</span>
            </div>`;
            }))}

          ${this.hasAttribute("multiple") ? this.emptyDisplay(true) : (0, $f8cbb652275fbda3$export$c0bb0b647f701bb5)``}
        </div>


        ${this.searchResults.length ? (0, $f8cbb652275fbda3$export$c0bb0b647f701bb5)`
        <span class=${`search-results-count ${settings.theme.resultCount}`}>
          ${this.searchResults.length}
        </span>
        ` : null}
      `;
        }
        /**
     * The buttons to show the fields.
     */ buttons(value) {
            return (0, $f8cbb652275fbda3$export$c0bb0b647f701bb5)`

      ${this.showIndividualComponents ? (0, $f8cbb652275fbda3$export$c0bb0b647f701bb5)`
      <button type="button" class=${`${this.showAdvanced ? "active" : ""} ${this.showAdvanced ? settings.theme.collapseButton : settings.theme.expandButton}`} onclick=${async ()=>{
                this.showAdvanced = !this.showAdvanced;
                await this.render();
            }}>${(0, $516c0ea598792020$export$1ca1ec8b29a4ce27)(this.showAdvanced ? "chevronContract" : "chevronExpand")}</button>
      ` : null}

      <button type="button" class=${`button ${this.showIndividualComponents ? "active" : ""} ${settings.theme.showPartsButton}`} onclick=${async ()=>{
                this.showIndividualComponents = !this.showIndividualComponents;
                if (this.showIndividualComponents && (value.privateuse.length || value.extensions.length)) this.showAdvanced = true;
                await this.render();
            }}>${(0, $516c0ea598792020$export$1ca1ec8b29a4ce27)("gearFill")}</button>
      `;
        }
        /**
     * The form with the seperate BCP47 components.
     */ async individualComponentsForm(value) {
            if (this.showIndividualComponents && !this.searchResults.length) await $bb1ab12bbffef664$var$importLists();
            return this.showIndividualComponents && !this.searchResults.length ? (0, $f8cbb652275fbda3$export$c0bb0b647f701bb5)`
      <div class=${`bcp47-advanced ${settings.theme.advanced}`}>
        <h6 class=${`bcp47-advanced-title ${settings.theme.advancedTitle}`}>Manual configuration</h6>

        <div class=${`bcp47-language bcp47-current-value-part ${settings.theme.valueContainerAdvanced}`}>
          ${this.autoComplete("Language", $bb1ab12bbffef664$var$languageOptions, value, "language")}
        </div>

        ${this.showAdvanced ? (0, $f8cbb652275fbda3$export$c0bb0b647f701bb5)`
        <div class=${`bcp47-region bcp47-current-value-part ${settings.theme.valueContainerAdvanced}`}>
          <input disabled=${!value.language ? true : null} placeholder="." class=${settings.theme.valueInput} type="text" .value=${value.extendedLanguageSubtags[0] ?? ""} maxlength="3" />
          <label>Extended language subtags</label>
        </div>
        ` : null}

        <div class=${`bcp47-script bcp47-current-value-part ${settings.theme.valueContainerAdvanced}`}>
          ${this.autoComplete("Script", $bb1ab12bbffef664$var$scriptOptions, value, "script", !value.language)}
        </div>

        <div class=${`bcp47-region bcp47-current-value-part ${settings.theme.valueContainerAdvanced}`}>
          ${this.autoComplete("Region", $bb1ab12bbffef664$var$regionCodesMerged, value, "region", !value.language)}
        </div>

        ${this.showAdvanced ? (0, $f8cbb652275fbda3$export$c0bb0b647f701bb5)`
        <div class=${`bcp47-region bcp47-current-value-part-normal ${settings.theme.valueContainerAdvanced}`}>
            <input disabled=${!value.language ? true : null} placeholder="." type="text" class=${settings.theme.valueInput} .value=${value.extensions[0] ?? ""} />
            <label>Extension subtags</label>
        </div>

        <div class=${`bcp47-region bcp47-current-value-part-normal ${settings.theme.valueContainerAdvanced}`}>
          <input disabled=${!value.language ? true : null} type="text" placeholder="." class=${settings.theme.valueInput} .value=${value.privateuse[0] ?? ""} />
          <label>Private use subtags</label>
        </div>
      ` : null}
        
      </div>
      ` : null;
        }
        /**
     * Generates a selected label for a given schema.
     */ async getLabel(value) {
            await $bb1ab12bbffef664$var$importLists();
            if (typeof value === "string") value = (0, $5493746a982439d5$export$98e6a39c04603d36)(value);
            let label = "";
            const language = value.language ? $bb1ab12bbffef664$var$clean((0, $3087701a1feb61cf$export$c7dde40abc42a582)($bb1ab12bbffef664$var$languageOptions, value.language) ?? "") : null;
            const region = value.region ? $bb1ab12bbffef664$var$clean((0, $3087701a1feb61cf$export$c7dde40abc42a582)($bb1ab12bbffef664$var$regionCodesMerged, value.region) ?? "") : null;
            const script = value.script ? $bb1ab12bbffef664$var$clean((0, $3087701a1feb61cf$export$c7dde40abc42a582)($bb1ab12bbffef664$var$scriptOptions, value.script) ?? "") : null;
            if (language && region) label = `${language} as spoken in ${region}`;
            else if (language && script) label = `${language} written with ${script}`;
            else if (language) label = language;
            return label;
        }
        /**
     * When you find a lot of results only 20 are shows, when scrolling more are shown.
     * The observer takes care of detecting scroll.
     */ observerCallback(entries) {
            entries.forEach(async (entry)=>{
                if (entry.intersectionRatio) {
                    const resultsWrapper = document.querySelector(".bcp47-results");
                    const scrollHeight = resultsWrapper.scrollHeight;
                    const clientHeight = resultsWrapper.clientHeight;
                    if (clientHeight < scrollHeight && this.maxItems < this.searchResults.length) await this.increaseVisibleResults();
                }
            });
        }
        async increaseVisibleResults() {
            this.maxItems = this.maxItems + this.defaultMaxItems;
            await this.render();
        }
        /**
     * A re-usable autocomplete, used for Language, Region and Script.
     */ autoComplete(label, options, value, key, disabled = false) {
            return (0, $f8cbb652275fbda3$export$c0bb0b647f701bb5)`
        <input disabled=${disabled ? true : null} placeholder="." class=${settings.theme.valueInput} onchange=${(event)=>{
                event.stopPropagation();
                event.stopImmediatePropagation();
                event.preventDefault();
                const oldValue = (0, $142d340fab5fe737$export$fac44ee5b035f737)(value);
                value[key] = event.target.value;
                this.values = this.values.filter((item)=>item !== oldValue);
                this.setValue((0, $142d340fab5fe737$export$fac44ee5b035f737)(value));
            }} list=${key} autocomplete="off" .value=${value[key] ?? ""}>
        <label>${label}</label>
        <datalist id=${key}>
          ${options.map(([optionValue, optionLabel])=>{
                return (0, $f8cbb652275fbda3$export$c0bb0b647f701bb5)`<option value=${optionValue} ?selected=${optionValue === value[key]}>${optionLabel}</option>`;
            })}
        </datalist>
        <span class=${`bcp47-current-value-part-value ${settings.theme.partValue}`}>
          ${value[key] ? options.find((item)=>item[0] === value[key])?.[1]?.split(" (")?.[0] : null}
          <span class=${settings.theme.code}>${value[key]}</span>
        </span>
      `;
        }
        /**
     * The search results
     */ resultsWrapper(searchTerm = "") {
            return this.searchResults.length ? (0, $f8cbb652275fbda3$export$c0bb0b647f701bb5)`
      <div class=${`bcp47-results ${settings.theme.results}`}>
      ${this.searchResults.map((item, index)=>this.resultItem(item, index, searchTerm))}
        <div ref=${(element)=>{
                this.observer = new IntersectionObserver(this.observerCallback.bind(this), {
                    root: document.querySelector(".bcp47-results"),
                    rootMargin: "0px",
                    threshold: 1.0
                });
                this.observer.observe(element);
            }} class="bcp47-observer"></div>
        <div class="bcp47-observer-spacer" style=${`--items: ${(this.searchResults.length - this.maxItems) * 41}px`}></div>
      </div>
    ` : null;
        }
        /**
     * The template of one result item
     */ resultItem([bcp47, [name, alternativeNames]], index, searchTerm = "") {
            if (!alternativeNames) alternativeNames = [];
            const alternativeNamesFiltered = alternativeNames.filter((alternativeName)=>alternativeName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
            const otherAltNames = alternativeNames.filter((alternativeName)=>!alternativeNamesFiltered.includes(alternativeName));
            /** @ts-ignore */ const formatter = Intl.ListFormat ? new Intl.ListFormat("en", {
                style: "long",
                type: "conjunction"
            }) : {
                format: (items)=>items.join(", ")
            };
            const altNames = formatter.format([
                ...alternativeNamesFiltered,
                ...otherAltNames
            ]);
            if (settings.forceCanonical) bcp47 = (0, $9ba2ac6517409fde$export$d9b31aac4a13cff9)(bcp47, {
                forgiving: true
            });
            return (0, $f8cbb652275fbda3$export$c0bb0b647f701bb5)`
      <button type="button" class=${`bcp47-result ${settings.theme.resultItem} ${index === this.focusedResult ? "active" : ""}`} onclick=${async ()=>{
                this.setValue(bcp47);
            }}>
        <span class=${`bcp47-name ${settings.theme.name}`}>${name}</span>
        <span class=${`bcp47-code ${settings.theme.code}`}>${bcp47}</span>
        <span class=${`bcp47-alternative-names ${settings.theme.alternativeNames}`} title=${altNames}>${altNames}</span>
      </button>`;
        }
        /**
     * Sets the value
     */ async setValue(bcp47) {
            if (settings.forceCanonical && bcp47) bcp47 = (0, $9ba2ac6517409fde$export$d9b31aac4a13cff9)(bcp47, {
                forgiving: true
            });
            if (bcp47) {
                this.selectedValue = bcp47;
                this.values.push(bcp47);
            }
            this.value = this.values.join(",");
            this.isEditing = false;
            this.searchResults = [];
            this.maxItems = this.defaultMaxItems;
            this.dispatchEvent(new CustomEvent("change"));
            await this.render();
            const searchField = this.querySelector(".bcp47-search");
            if (searchField) {
                searchField.value = "";
                searchField.focus();
            }
        }
    }
    customElements.define(settings.alternativeHtmlName ?? "bcp47-picker", Bcp47Picker);
};


if (location.pathname === "/alone") {
    document.body.innerHTML = `
  <div class="page">
    <bcp47-picker id="first" value="nl"></bcp47-picker>
  </div>
  `;
    (0, $bb1ab12bbffef664$export$2cd8252107eb640b)({
        sources: [
            "https://bcp47.danielbeeke.nl/data/lmt.json"
        ]
    });
}
if (location.pathname !== "/alone") {
    (0, $bb1ab12bbffef664$export$2cd8252107eb640b)();
    (0, $bb1ab12bbffef664$export$2cd8252107eb640b)({
        alternativeHtmlName: "bcp47-picker-rolv",
        sources: [
            "https://bcp47.danielbeeke.nl/data/lmt.json",
            "https://bcp47.danielbeeke.nl/data/rolv2.json"
        ]
    });
    (0, $bb1ab12bbffef664$export$2cd8252107eb640b)({
        alternativeHtmlName: "bcp47-picker-iso",
        sources: [
            "https://bcp47.danielbeeke.nl/data/iso-639-3.json"
        ]
    });
    (0, $bb1ab12bbffef664$export$2cd8252107eb640b)({
        alternativeHtmlName: "bcp47-picker-iso-forced",
        forceCanonical: true,
        sources: [
            "https://bcp47.danielbeeke.nl/data/iso-639-3.json"
        ]
    });
    const picker1 = document.querySelector("bcp47-picker#first");
    picker1.addEventListener("change", (event)=>{
        console.log(event);
    });
    const picker2 = document.querySelector("bcp47-picker-rolv#second");
    picker2.addEventListener("change", (event)=>{
        console.log(event);
    });
    const picker3 = document.querySelector("bcp47-picker-iso");
    picker3.addEventListener("change", (event)=>{
        console.log(event);
    });
}


//# sourceMappingURL=index.9da60372.js.map
