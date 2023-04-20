function $96f2fa3fbababdc4$export$2e2bcd8739ae039(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}


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
    return options.find((option)=>option[0] === value)?.[1]?.split(" (")?.[0];
};


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
 * @typedef Script
 * @property {string} name Name of script
 * @property {string} code Four character ISO 15924 code
 * @property {string} numeric Three character ISO 15924 code
 * @property {string} [pva] Property value alias
 * @property {string} date Date of addition (e.g., `2016-12-05`)
 */ /** @type {Array<Script>} */ const $99238e492f473600$export$f960cfe3b44c4f27 = [
    {
        code: "Adlm",
        name: "Adlam",
        numeric: "166",
        pva: "Adlam",
        date: "2016-12-05"
    },
    {
        code: "Afak",
        name: "Afaka",
        numeric: "439",
        date: "2010-12-21"
    },
    {
        code: "Aghb",
        name: "Caucasian Albanian",
        numeric: "239",
        pva: "Caucasian_Albanian",
        date: "2014-11-15"
    },
    {
        code: "Ahom",
        name: "Ahom, Tai Ahom",
        numeric: "338",
        pva: "Ahom",
        date: "2015-07-07"
    },
    {
        code: "Arab",
        name: "Arabic",
        numeric: "160",
        pva: "Arabic",
        date: "2004-05-01"
    },
    {
        code: "Aran",
        name: "Arabic (Nastaliq variant)",
        numeric: "161",
        date: "2014-11-15"
    },
    {
        code: "Armi",
        name: "Imperial Aramaic",
        numeric: "124",
        pva: "Imperial_Aramaic",
        date: "2009-06-01"
    },
    {
        code: "Armn",
        name: "Armenian",
        numeric: "230",
        pva: "Armenian",
        date: "2004-05-01"
    },
    {
        code: "Avst",
        name: "Avestan",
        numeric: "134",
        pva: "Avestan",
        date: "2009-06-01"
    },
    {
        code: "Bali",
        name: "Balinese",
        numeric: "360",
        pva: "Balinese",
        date: "2006-10-10"
    },
    {
        code: "Bamu",
        name: "Bamum",
        numeric: "435",
        pva: "Bamum",
        date: "2009-06-01"
    },
    {
        code: "Bass",
        name: "Bassa Vah",
        numeric: "259",
        pva: "Bassa_Vah",
        date: "2014-11-15"
    },
    {
        code: "Batk",
        name: "Batak",
        numeric: "365",
        pva: "Batak",
        date: "2010-07-23"
    },
    {
        code: "Beng",
        name: "Bengali (Bangla)",
        numeric: "325",
        pva: "Bengali",
        date: "2016-12-05"
    },
    {
        code: "Bhks",
        name: "Bhaiksuki",
        numeric: "334",
        pva: "Bhaiksuki",
        date: "2016-12-05"
    },
    {
        code: "Blis",
        name: "Blissymbols",
        numeric: "550",
        date: "2004-05-01"
    },
    {
        code: "Bopo",
        name: "Bopomofo",
        numeric: "285",
        pva: "Bopomofo",
        date: "2004-05-01"
    },
    {
        code: "Brah",
        name: "Brahmi",
        numeric: "300",
        pva: "Brahmi",
        date: "2010-07-23"
    },
    {
        code: "Brai",
        name: "Braille",
        numeric: "570",
        pva: "Braille",
        date: "2004-05-01"
    },
    {
        code: "Bugi",
        name: "Buginese",
        numeric: "367",
        pva: "Buginese",
        date: "2006-06-21"
    },
    {
        code: "Buhd",
        name: "Buhid",
        numeric: "372",
        pva: "Buhid",
        date: "2004-05-01"
    },
    {
        code: "Cakm",
        name: "Chakma",
        numeric: "349",
        pva: "Chakma",
        date: "2012-02-06"
    },
    {
        code: "Cans",
        name: "Unified Canadian Aboriginal Syllabics",
        numeric: "440",
        pva: "Canadian_Aboriginal",
        date: "2004-05-29"
    },
    {
        code: "Cari",
        name: "Carian",
        numeric: "201",
        pva: "Carian",
        date: "2007-07-02"
    },
    {
        code: "Cham",
        name: "Cham",
        numeric: "358",
        pva: "Cham",
        date: "2009-11-11"
    },
    {
        code: "Cher",
        name: "Cherokee",
        numeric: "445",
        pva: "Cherokee",
        date: "2004-05-01"
    },
    {
        code: "Chrs",
        name: "Chorasmian",
        numeric: "109",
        pva: "Chorasmian",
        date: "2019-08-19"
    },
    {
        code: "Cirt",
        name: "Cirth",
        numeric: "291",
        date: "2004-05-01"
    },
    {
        code: "Copt",
        name: "Coptic",
        numeric: "204",
        pva: "Coptic",
        date: "2006-06-21"
    },
    {
        code: "Cpmn",
        name: "Cypro-Minoan",
        numeric: "402",
        pva: "Cypro_Minoan",
        date: "2017-07-26"
    },
    {
        code: "Cprt",
        name: "Cypriot syllabary",
        numeric: "403",
        pva: "Cypriot",
        date: "2017-07-26"
    },
    {
        code: "Cyrl",
        name: "Cyrillic",
        numeric: "220",
        pva: "Cyrillic",
        date: "2004-05-01"
    },
    {
        code: "Cyrs",
        name: "Cyrillic (Old Church Slavonic variant)",
        numeric: "221",
        date: "2004-05-01"
    },
    {
        code: "Deva",
        name: "Devanagari (Nagari)",
        numeric: "315",
        pva: "Devanagari",
        date: "2004-05-01"
    },
    {
        code: "Diak",
        name: "Dives Akuru",
        numeric: "342",
        pva: "Dives_Akuru",
        date: "2019-08-19"
    },
    {
        code: "Dogr",
        name: "Dogra",
        numeric: "328",
        pva: "Dogra",
        date: "2016-12-05"
    },
    {
        code: "Dsrt",
        name: "Deseret (Mormon)",
        numeric: "250",
        pva: "Deseret",
        date: "2004-05-01"
    },
    {
        code: "Dupl",
        name: "Duployan shorthand, Duployan stenography",
        numeric: "755",
        pva: "Duployan",
        date: "2014-11-15"
    },
    {
        code: "Egyd",
        name: "Egyptian demotic",
        numeric: "070",
        date: "2004-05-01"
    },
    {
        code: "Egyh",
        name: "Egyptian hieratic",
        numeric: "060",
        date: "2004-05-01"
    },
    {
        code: "Egyp",
        name: "Egyptian hieroglyphs",
        numeric: "050",
        pva: "Egyptian_Hieroglyphs",
        date: "2009-06-01"
    },
    {
        code: "Elba",
        name: "Elbasan",
        numeric: "226",
        pva: "Elbasan",
        date: "2014-11-15"
    },
    {
        code: "Elym",
        name: "Elymaic",
        numeric: "128",
        pva: "Elymaic",
        date: "2018-08-26"
    },
    {
        code: "Ethi",
        name: "Ethiopic (Geʻez)",
        numeric: "430",
        pva: "Ethiopic",
        date: "2004-10-25"
    },
    {
        code: "Geok",
        name: "Khutsuri (Asomtavruli and Nuskhuri)",
        numeric: "241",
        pva: "Georgian",
        date: "2012-10-16"
    },
    {
        code: "Geor",
        name: "Georgian (Mkhedruli and Mtavruli)",
        numeric: "240",
        pva: "Georgian",
        date: "2016-12-05"
    },
    {
        code: "Glag",
        name: "Glagolitic",
        numeric: "225",
        pva: "Glagolitic",
        date: "2006-06-21"
    },
    {
        code: "Gong",
        name: "Gunjala Gondi",
        numeric: "312",
        pva: "Gunjala_Gondi",
        date: "2016-12-05"
    },
    {
        code: "Gonm",
        name: "Masaram Gondi",
        numeric: "313",
        pva: "Masaram_Gondi",
        date: "2017-07-26"
    },
    {
        code: "Goth",
        name: "Gothic",
        numeric: "206",
        pva: "Gothic",
        date: "2004-05-01"
    },
    {
        code: "Gran",
        name: "Grantha",
        numeric: "343",
        pva: "Grantha",
        date: "2014-11-15"
    },
    {
        code: "Grek",
        name: "Greek",
        numeric: "200",
        pva: "Greek",
        date: "2004-05-01"
    },
    {
        code: "Gujr",
        name: "Gujarati",
        numeric: "320",
        pva: "Gujarati",
        date: "2004-05-01"
    },
    {
        code: "Guru",
        name: "Gurmukhi",
        numeric: "310",
        pva: "Gurmukhi",
        date: "2004-05-01"
    },
    {
        code: "Hanb",
        name: "Han with Bopomofo (alias for Han + Bopomofo)",
        numeric: "503",
        date: "2016-01-19"
    },
    {
        code: "Hang",
        name: "Hangul (Hangŭl, Hangeul)",
        numeric: "286",
        pva: "Hangul",
        date: "2004-05-29"
    },
    {
        code: "Hani",
        name: "Han (Hanzi, Kanji, Hanja)",
        numeric: "500",
        pva: "Han",
        date: "2009-02-23"
    },
    {
        code: "Hano",
        name: "Hanunoo (Hanun\xf3o)",
        numeric: "371",
        pva: "Hanunoo",
        date: "2004-05-29"
    },
    {
        code: "Hans",
        name: "Han (Simplified variant)",
        numeric: "501",
        date: "2004-05-29"
    },
    {
        code: "Hant",
        name: "Han (Traditional variant)",
        numeric: "502",
        date: "2004-05-29"
    },
    {
        code: "Hatr",
        name: "Hatran",
        numeric: "127",
        pva: "Hatran",
        date: "2015-07-07"
    },
    {
        code: "Hebr",
        name: "Hebrew",
        numeric: "125",
        pva: "Hebrew",
        date: "2004-05-01"
    },
    {
        code: "Hira",
        name: "Hiragana",
        numeric: "410",
        pva: "Hiragana",
        date: "2004-05-01"
    },
    {
        code: "Hluw",
        name: "Anatolian Hieroglyphs (Luwian Hieroglyphs, Hittite Hieroglyphs)",
        numeric: "080",
        pva: "Anatolian_Hieroglyphs",
        date: "2015-07-07"
    },
    {
        code: "Hmng",
        name: "Pahawh Hmong",
        numeric: "450",
        pva: "Pahawh_Hmong",
        date: "2014-11-15"
    },
    {
        code: "Hmnp",
        name: "Nyiakeng Puachue Hmong",
        numeric: "451",
        pva: "Nyiakeng_Puachue_Hmong",
        date: "2017-07-26"
    },
    {
        code: "Hrkt",
        name: "Japanese syllabaries (alias for Hiragana + Katakana)",
        numeric: "412",
        pva: "Katakana_Or_Hiragana",
        date: "2011-06-21"
    },
    {
        code: "Hung",
        name: "Old Hungarian (Hungarian Runic)",
        numeric: "176",
        pva: "Old_Hungarian",
        date: "2015-07-07"
    },
    {
        code: "Inds",
        name: "Indus (Harappan)",
        numeric: "610",
        date: "2004-05-01"
    },
    {
        code: "Ital",
        name: "Old Italic (Etruscan, Oscan, etc.)",
        numeric: "210",
        pva: "Old_Italic",
        date: "2004-05-29"
    },
    {
        code: "Jamo",
        name: "Jamo (alias for Jamo subset of Hangul)",
        numeric: "284",
        date: "2016-01-19"
    },
    {
        code: "Java",
        name: "Javanese",
        numeric: "361",
        pva: "Javanese",
        date: "2009-06-01"
    },
    {
        code: "Jpan",
        name: "Japanese (alias for Han + Hiragana + Katakana)",
        numeric: "413",
        date: "2006-06-21"
    },
    {
        code: "Jurc",
        name: "Jurchen",
        numeric: "510",
        date: "2010-12-21"
    },
    {
        code: "Kali",
        name: "Kayah Li",
        numeric: "357",
        pva: "Kayah_Li",
        date: "2007-07-02"
    },
    {
        code: "Kana",
        name: "Katakana",
        numeric: "411",
        pva: "Katakana",
        date: "2004-05-01"
    },
    {
        code: "Kawi",
        name: "Kawi",
        numeric: "368",
        date: "2021-12-03"
    },
    {
        code: "Khar",
        name: "Kharoshthi",
        numeric: "305",
        pva: "Kharoshthi",
        date: "2006-06-21"
    },
    {
        code: "Khmr",
        name: "Khmer",
        numeric: "355",
        pva: "Khmer",
        date: "2004-05-29"
    },
    {
        code: "Khoj",
        name: "Khojki",
        numeric: "322",
        pva: "Khojki",
        date: "2014-11-15"
    },
    {
        code: "Kitl",
        name: "Khitan large script",
        numeric: "505",
        date: "2015-07-15"
    },
    {
        code: "Kits",
        name: "Khitan small script",
        numeric: "288",
        pva: "Khitan_Small_Script",
        date: "2015-07-15"
    },
    {
        code: "Knda",
        name: "Kannada",
        numeric: "345",
        pva: "Kannada",
        date: "2004-05-29"
    },
    {
        code: "Kore",
        name: "Korean (alias for Hangul + Han)",
        numeric: "287",
        date: "2007-06-13"
    },
    {
        code: "Kpel",
        name: "Kpelle",
        numeric: "436",
        date: "2010-03-26"
    },
    {
        code: "Kthi",
        name: "Kaithi",
        numeric: "317",
        pva: "Kaithi",
        date: "2009-06-01"
    },
    {
        code: "Lana",
        name: "Tai Tham (Lanna)",
        numeric: "351",
        pva: "Tai_Tham",
        date: "2009-06-01"
    },
    {
        code: "Laoo",
        name: "Lao",
        numeric: "356",
        pva: "Lao",
        date: "2004-05-01"
    },
    {
        code: "Latf",
        name: "Latin (Fraktur variant)",
        numeric: "217",
        date: "2004-05-01"
    },
    {
        code: "Latg",
        name: "Latin (Gaelic variant)",
        numeric: "216",
        date: "2004-05-01"
    },
    {
        code: "Latn",
        name: "Latin",
        numeric: "215",
        pva: "Latin",
        date: "2004-05-01"
    },
    {
        code: "Leke",
        name: "Leke",
        numeric: "364",
        date: "2015-07-07"
    },
    {
        code: "Lepc",
        name: "Lepcha (R\xf3ng)",
        numeric: "335",
        pva: "Lepcha",
        date: "2007-07-02"
    },
    {
        code: "Limb",
        name: "Limbu",
        numeric: "336",
        pva: "Limbu",
        date: "2004-05-29"
    },
    {
        code: "Lina",
        name: "Linear A",
        numeric: "400",
        pva: "Linear_A",
        date: "2014-11-15"
    },
    {
        code: "Linb",
        name: "Linear B",
        numeric: "401",
        pva: "Linear_B",
        date: "2004-05-29"
    },
    {
        code: "Lisu",
        name: "Lisu (Fraser)",
        numeric: "399",
        pva: "Lisu",
        date: "2009-06-01"
    },
    {
        code: "Loma",
        name: "Loma",
        numeric: "437",
        date: "2010-03-26"
    },
    {
        code: "Lyci",
        name: "Lycian",
        numeric: "202",
        pva: "Lycian",
        date: "2007-07-02"
    },
    {
        code: "Lydi",
        name: "Lydian",
        numeric: "116",
        pva: "Lydian",
        date: "2007-07-02"
    },
    {
        code: "Mahj",
        name: "Mahajani",
        numeric: "314",
        pva: "Mahajani",
        date: "2014-11-15"
    },
    {
        code: "Maka",
        name: "Makasar",
        numeric: "366",
        pva: "Makasar",
        date: "2016-12-05"
    },
    {
        code: "Mand",
        name: "Mandaic, Mandaean",
        numeric: "140",
        pva: "Mandaic",
        date: "2010-07-23"
    },
    {
        code: "Mani",
        name: "Manichaean",
        numeric: "139",
        pva: "Manichaean",
        date: "2014-11-15"
    },
    {
        code: "Marc",
        name: "Marchen",
        numeric: "332",
        pva: "Marchen",
        date: "2016-12-05"
    },
    {
        code: "Maya",
        name: "Mayan hieroglyphs",
        numeric: "090",
        date: "2004-05-01"
    },
    {
        code: "Medf",
        name: "Medefaidrin (Oberi Okaime, Oberi Ɔkaimɛ)",
        numeric: "265",
        pva: "Medefaidrin",
        date: "2016-12-05"
    },
    {
        code: "Mend",
        name: "Mende Kikakui",
        numeric: "438",
        pva: "Mende_Kikakui",
        date: "2014-11-15"
    },
    {
        code: "Merc",
        name: "Meroitic Cursive",
        numeric: "101",
        pva: "Meroitic_Cursive",
        date: "2012-02-06"
    },
    {
        code: "Mero",
        name: "Meroitic Hieroglyphs",
        numeric: "100",
        pva: "Meroitic_Hieroglyphs",
        date: "2012-02-06"
    },
    {
        code: "Mlym",
        name: "Malayalam",
        numeric: "347",
        pva: "Malayalam",
        date: "2004-05-01"
    },
    {
        code: "Modi",
        name: "Modi, Moḍī",
        numeric: "324",
        pva: "Modi",
        date: "2014-11-15"
    },
    {
        code: "Mong",
        name: "Mongolian",
        numeric: "145",
        pva: "Mongolian",
        date: "2004-05-01"
    },
    {
        code: "Moon",
        name: "Moon (Moon code, Moon script, Moon type)",
        numeric: "218",
        date: "2006-12-11"
    },
    {
        code: "Mroo",
        name: "Mro, Mru",
        numeric: "264",
        pva: "Mro",
        date: "2016-12-05"
    },
    {
        code: "Mtei",
        name: "Meitei Mayek (Meithei, Meetei)",
        numeric: "337",
        pva: "Meetei_Mayek",
        date: "2009-06-01"
    },
    {
        code: "Mult",
        name: "Multani",
        numeric: "323",
        pva: "Multani",
        date: "2015-07-07"
    },
    {
        code: "Mymr",
        name: "Myanmar (Burmese)",
        numeric: "350",
        pva: "Myanmar",
        date: "2004-05-01"
    },
    {
        code: "Nagm",
        name: "Nag Mundari",
        numeric: "295",
        date: "2021-12-03"
    },
    {
        code: "Nand",
        name: "Nandinagari",
        numeric: "311",
        pva: "Nandinagari",
        date: "2018-08-26"
    },
    {
        code: "Narb",
        name: "Old North Arabian (Ancient North Arabian)",
        numeric: "106",
        pva: "Old_North_Arabian",
        date: "2014-11-15"
    },
    {
        code: "Nbat",
        name: "Nabataean",
        numeric: "159",
        pva: "Nabataean",
        date: "2014-11-15"
    },
    {
        code: "Newa",
        name: "Newa, Newar, Newari, Nepāla lipi",
        numeric: "333",
        pva: "Newa",
        date: "2016-12-05"
    },
    {
        code: "Nkdb",
        name: "Naxi Dongba (na\xb2\xb9ɕi\xb3\xb3 to\xb3\xb3ba\xb2\xb9, Nakhi Tomba)",
        numeric: "085",
        date: "2017-07-26"
    },
    {
        code: "Nkgb",
        name: "Naxi Geba (na\xb2\xb9ɕi\xb3\xb3 gʌ\xb2\xb9ba\xb2\xb9, 'Na-'Khi \xb2Ggŏ-\xb9baw, Nakhi Geba)",
        numeric: "420",
        date: "2017-07-26"
    },
    {
        code: "Nkoo",
        name: "N’Ko",
        numeric: "165",
        pva: "Nko",
        date: "2006-10-10"
    },
    {
        code: "Nshu",
        name: "N\xfcshu",
        numeric: "499",
        pva: "Nushu",
        date: "2017-07-26"
    },
    {
        code: "Ogam",
        name: "Ogham",
        numeric: "212",
        pva: "Ogham",
        date: "2004-05-01"
    },
    {
        code: "Olck",
        name: "Ol Chiki (Ol Cemet’, Ol, Santali)",
        numeric: "261",
        pva: "Ol_Chiki",
        date: "2007-07-02"
    },
    {
        code: "Orkh",
        name: "Old Turkic, Orkhon Runic",
        numeric: "175",
        pva: "Old_Turkic",
        date: "2009-06-01"
    },
    {
        code: "Orya",
        name: "Oriya (Odia)",
        numeric: "327",
        pva: "Oriya",
        date: "2016-12-05"
    },
    {
        code: "Osge",
        name: "Osage",
        numeric: "219",
        pva: "Osage",
        date: "2016-12-05"
    },
    {
        code: "Osma",
        name: "Osmanya",
        numeric: "260",
        pva: "Osmanya",
        date: "2004-05-01"
    },
    {
        code: "Ougr",
        name: "Old Uyghur",
        numeric: "143",
        pva: "Old_Uyghur",
        date: "2021-01-25"
    },
    {
        code: "Palm",
        name: "Palmyrene",
        numeric: "126",
        pva: "Palmyrene",
        date: "2014-11-15"
    },
    {
        code: "Pauc",
        name: "Pau Cin Hau",
        numeric: "263",
        pva: "Pau_Cin_Hau",
        date: "2014-11-15"
    },
    {
        code: "Pcun",
        name: "Proto-Cuneiform",
        numeric: "015",
        date: "2021-01-25"
    },
    {
        code: "Pelm",
        name: "Proto-Elamite",
        numeric: "016",
        date: "2021-01-25"
    },
    {
        code: "Perm",
        name: "Old Permic",
        numeric: "227",
        pva: "Old_Permic",
        date: "2014-11-15"
    },
    {
        code: "Phag",
        name: "Phags-pa",
        numeric: "331",
        pva: "Phags_Pa",
        date: "2006-10-10"
    },
    {
        code: "Phli",
        name: "Inscriptional Pahlavi",
        numeric: "131",
        pva: "Inscriptional_Pahlavi",
        date: "2009-06-01"
    },
    {
        code: "Phlp",
        name: "Psalter Pahlavi",
        numeric: "132",
        pva: "Psalter_Pahlavi",
        date: "2014-11-15"
    },
    {
        code: "Phlv",
        name: "Book Pahlavi",
        numeric: "133",
        date: "2007-07-15"
    },
    {
        code: "Phnx",
        name: "Phoenician",
        numeric: "115",
        pva: "Phoenician",
        date: "2006-10-10"
    },
    {
        code: "Plrd",
        name: "Miao (Pollard)",
        numeric: "282",
        pva: "Miao",
        date: "2012-02-06"
    },
    {
        code: "Piqd",
        name: "Klingon (KLI pIqaD)",
        numeric: "293",
        date: "2015-12-16"
    },
    {
        code: "Prti",
        name: "Inscriptional Parthian",
        numeric: "130",
        pva: "Inscriptional_Parthian",
        date: "2009-06-01"
    },
    {
        code: "Psin",
        name: "Proto-Sinaitic",
        numeric: "103",
        date: "2021-01-25"
    },
    {
        code: "Qaaa",
        name: "Reserved for private use (start)",
        numeric: "900",
        date: "2004-05-29"
    },
    {
        code: "Qabx",
        name: "Reserved for private use (end)",
        numeric: "949",
        date: "2004-05-29"
    },
    {
        code: "Ranj",
        name: "Ranjana",
        numeric: "303",
        date: "2021-01-25"
    },
    {
        code: "Rjng",
        name: "Rejang (Redjang, Kaganga)",
        numeric: "363",
        pva: "Rejang",
        date: "2009-02-23"
    },
    {
        code: "Rohg",
        name: "Hanifi Rohingya",
        numeric: "167",
        pva: "Hanifi_Rohingya",
        date: "2017-11-21"
    },
    {
        code: "Roro",
        name: "Rongorongo",
        numeric: "620",
        date: "2004-05-01"
    },
    {
        code: "Runr",
        name: "Runic",
        numeric: "211",
        pva: "Runic",
        date: "2004-05-01"
    },
    {
        code: "Samr",
        name: "Samaritan",
        numeric: "123",
        pva: "Samaritan",
        date: "2009-06-01"
    },
    {
        code: "Sara",
        name: "Sarati",
        numeric: "292",
        date: "2004-05-29"
    },
    {
        code: "Sarb",
        name: "Old South Arabian",
        numeric: "105",
        pva: "Old_South_Arabian",
        date: "2009-06-01"
    },
    {
        code: "Saur",
        name: "Saurashtra",
        numeric: "344",
        pva: "Saurashtra",
        date: "2007-07-02"
    },
    {
        code: "Sgnw",
        name: "SignWriting",
        numeric: "095",
        pva: "SignWriting",
        date: "2015-07-07"
    },
    {
        code: "Shaw",
        name: "Shavian (Shaw)",
        numeric: "281",
        pva: "Shavian",
        date: "2004-05-01"
    },
    {
        code: "Shrd",
        name: "Sharada, Śāradā",
        numeric: "319",
        pva: "Sharada",
        date: "2012-02-06"
    },
    {
        code: "Shui",
        name: "Shuishu",
        numeric: "530",
        date: "2017-07-26"
    },
    {
        code: "Sidd",
        name: "Siddham, Siddhaṃ, Siddhamātṛkā",
        numeric: "302",
        pva: "Siddham",
        date: "2014-11-15"
    },
    {
        code: "Sind",
        name: "Khudawadi, Sindhi",
        numeric: "318",
        pva: "Khudawadi",
        date: "2014-11-15"
    },
    {
        code: "Sinh",
        name: "Sinhala",
        numeric: "348",
        pva: "Sinhala",
        date: "2004-05-01"
    },
    {
        code: "Sogd",
        name: "Sogdian",
        numeric: "141",
        pva: "Sogdian",
        date: "2017-11-21"
    },
    {
        code: "Sogo",
        name: "Old Sogdian",
        numeric: "142",
        pva: "Old_Sogdian",
        date: "2017-11-21"
    },
    {
        code: "Sora",
        name: "Sora Sompeng",
        numeric: "398",
        pva: "Sora_Sompeng",
        date: "2012-02-06"
    },
    {
        code: "Soyo",
        name: "Soyombo",
        numeric: "329",
        pva: "Soyombo",
        date: "2017-07-26"
    },
    {
        code: "Sund",
        name: "Sundanese",
        numeric: "362",
        pva: "Sundanese",
        date: "2007-07-02"
    },
    {
        code: "Sunu",
        name: "Sunuwar",
        numeric: "274",
        date: "2021-12-03"
    },
    {
        code: "Sylo",
        name: "Syloti Nagri",
        numeric: "316",
        pva: "Syloti_Nagri",
        date: "2006-06-21"
    },
    {
        code: "Syrc",
        name: "Syriac",
        numeric: "135",
        pva: "Syriac",
        date: "2004-05-01"
    },
    {
        code: "Syre",
        name: "Syriac (Estrangelo variant)",
        numeric: "138",
        date: "2004-05-01"
    },
    {
        code: "Syrj",
        name: "Syriac (Western variant)",
        numeric: "137",
        date: "2004-05-01"
    },
    {
        code: "Syrn",
        name: "Syriac (Eastern variant)",
        numeric: "136",
        date: "2004-05-01"
    },
    {
        code: "Tagb",
        name: "Tagbanwa",
        numeric: "373",
        pva: "Tagbanwa",
        date: "2004-05-01"
    },
    {
        code: "Takr",
        name: "Takri, Ṭākrī, Ṭāṅkrī",
        numeric: "321",
        pva: "Takri",
        date: "2012-02-06"
    },
    {
        code: "Tale",
        name: "Tai Le",
        numeric: "353",
        pva: "Tai_Le",
        date: "2004-10-25"
    },
    {
        code: "Talu",
        name: "New Tai Lue",
        numeric: "354",
        pva: "New_Tai_Lue",
        date: "2006-06-21"
    },
    {
        code: "Taml",
        name: "Tamil",
        numeric: "346",
        pva: "Tamil",
        date: "2004-05-01"
    },
    {
        code: "Tang",
        name: "Tangut",
        numeric: "520",
        pva: "Tangut",
        date: "2016-12-05"
    },
    {
        code: "Tavt",
        name: "Tai Viet",
        numeric: "359",
        pva: "Tai_Viet",
        date: "2009-06-01"
    },
    {
        code: "Telu",
        name: "Telugu",
        numeric: "340",
        pva: "Telugu",
        date: "2004-05-01"
    },
    {
        code: "Teng",
        name: "Tengwar",
        numeric: "290",
        date: "2004-05-01"
    },
    {
        code: "Tfng",
        name: "Tifinagh (Berber)",
        numeric: "120",
        pva: "Tifinagh",
        date: "2006-06-21"
    },
    {
        code: "Tglg",
        name: "Tagalog (Baybayin, Alibata)",
        numeric: "370",
        pva: "Tagalog",
        date: "2009-02-23"
    },
    {
        code: "Thaa",
        name: "Thaana",
        numeric: "170",
        pva: "Thaana",
        date: "2004-05-01"
    },
    {
        code: "Thai",
        name: "Thai",
        numeric: "352",
        pva: "Thai",
        date: "2004-05-01"
    },
    {
        code: "Tibt",
        name: "Tibetan",
        numeric: "330",
        pva: "Tibetan",
        date: "2004-05-01"
    },
    {
        code: "Tirh",
        name: "Tirhuta",
        numeric: "326",
        pva: "Tirhuta",
        date: "2014-11-15"
    },
    {
        code: "Tnsa",
        name: "Tangsa",
        numeric: "275",
        pva: "Tangsa",
        date: "2021-02-17"
    },
    {
        code: "Toto",
        name: "Toto",
        numeric: "294",
        pva: "Toto",
        date: "2020-04-16"
    },
    {
        code: "Ugar",
        name: "Ugaritic",
        numeric: "040",
        pva: "Ugaritic",
        date: "2004-05-01"
    },
    {
        code: "Vaii",
        name: "Vai",
        numeric: "470",
        pva: "Vai",
        date: "2007-07-02"
    },
    {
        code: "Visp",
        name: "Visible Speech",
        numeric: "280",
        date: "2004-05-01"
    },
    {
        code: "Vith",
        name: "Vithkuqi",
        numeric: "228",
        pva: "Vithkuqi",
        date: "2021-02-17"
    },
    {
        code: "Wara",
        name: "Warang Citi (Varang Kshiti)",
        numeric: "262",
        pva: "Warang_Citi",
        date: "2014-11-15"
    },
    {
        code: "Wcho",
        name: "Wancho",
        numeric: "283",
        pva: "Wancho",
        date: "2017-07-26"
    },
    {
        code: "Wole",
        name: "Woleai",
        numeric: "480",
        date: "2010-12-21"
    },
    {
        code: "Xpeo",
        name: "Old Persian",
        numeric: "030",
        pva: "Old_Persian",
        date: "2006-06-21"
    },
    {
        code: "Xsux",
        name: "Cuneiform, Sumero-Akkadian",
        numeric: "020",
        pva: "Cuneiform",
        date: "2006-10-10"
    },
    {
        code: "Yezi",
        name: "Yezidi",
        numeric: "192",
        pva: "Yezidi",
        date: "2019-08-19"
    },
    {
        code: "Yiii",
        name: "Yi",
        numeric: "460",
        pva: "Yi",
        date: "2004-05-01"
    },
    {
        code: "Zanb",
        name: "Zanabazar Square (Zanabazarin D\xf6rb\xf6ljin Useg, Xewtee D\xf6rb\xf6ljin Bicig, Horizontal Square Script)",
        numeric: "339",
        pva: "Zanabazar_Square",
        date: "2017-07-26"
    },
    {
        code: "Zinh",
        name: "Code for inherited script",
        numeric: "994",
        pva: "Inherited",
        date: "2009-02-23"
    },
    {
        code: "Zmth",
        name: "Mathematical notation",
        numeric: "995",
        date: "2007-11-26"
    },
    {
        code: "Zsye",
        name: "Symbols (Emoji variant)",
        numeric: "993",
        date: "2015-12-16"
    },
    {
        code: "Zsym",
        name: "Symbols",
        numeric: "996",
        date: "2007-11-26"
    },
    {
        code: "Zxxx",
        name: "Code for unwritten documents",
        numeric: "997",
        date: "2011-06-21"
    },
    {
        code: "Zyyy",
        name: "Code for undetermined script",
        numeric: "998",
        pva: "Common",
        date: "2004-05-29"
    },
    {
        code: "Zzzz",
        name: "Code for uncoded script",
        numeric: "999",
        pva: "Unknown",
        date: "2006-10-10"
    }
];


/**
 * @typedef ISO31661AssignedEntry
 *   Object representing an assigned country.
 * @property {'assigned'} state
 *   State (example: `'assigned'`)
 * @property {string} alpha2
 *   ISO 3166-1 alpha-2 code (example: `'GB'`)
 * @property {string} alpha3
 *   ISO 3166-1 alpha-3 code (example: `'GBR'`)
 * @property {string} numeric
 *   ISO 3166-1 numeric (UN M49) code (example: `'826'`)
 * @property {string} name
 *   Name (example: `'United Kingdom of Great Britain and Northern Ireland'`)
 */ /**
 * List of assigned countries.
 *
 * @type {Array<ISO31661AssignedEntry>}
 */ const $70a4b262c4130e3e$export$3ed700545caf4431 = [
    {
        name: "Andorra",
        state: "assigned",
        alpha2: "AD",
        alpha3: "AND",
        numeric: "020"
    },
    {
        name: "United Arab Emirates",
        state: "assigned",
        alpha2: "AE",
        alpha3: "ARE",
        numeric: "784"
    },
    {
        name: "Afghanistan",
        state: "assigned",
        alpha2: "AF",
        alpha3: "AFG",
        numeric: "004"
    },
    {
        name: "Antigua and Barbuda",
        state: "assigned",
        alpha2: "AG",
        alpha3: "ATG",
        numeric: "028"
    },
    {
        name: "Anguilla",
        state: "assigned",
        alpha2: "AI",
        alpha3: "AIA",
        numeric: "660"
    },
    {
        name: "Albania",
        state: "assigned",
        alpha2: "AL",
        alpha3: "ALB",
        numeric: "008"
    },
    {
        name: "Armenia",
        state: "assigned",
        alpha2: "AM",
        alpha3: "ARM",
        numeric: "051"
    },
    {
        name: "Angola",
        state: "assigned",
        alpha2: "AO",
        alpha3: "AGO",
        numeric: "024"
    },
    {
        name: "Antarctica",
        state: "assigned",
        alpha2: "AQ",
        alpha3: "ATA",
        numeric: "010"
    },
    {
        name: "Argentina",
        state: "assigned",
        alpha2: "AR",
        alpha3: "ARG",
        numeric: "032"
    },
    {
        name: "American Samoa",
        state: "assigned",
        alpha2: "AS",
        alpha3: "ASM",
        numeric: "016"
    },
    {
        name: "Austria",
        state: "assigned",
        alpha2: "AT",
        alpha3: "AUT",
        numeric: "040"
    },
    {
        name: "Australia",
        state: "assigned",
        alpha2: "AU",
        alpha3: "AUS",
        numeric: "036"
    },
    {
        name: "Aruba",
        state: "assigned",
        alpha2: "AW",
        alpha3: "ABW",
        numeric: "533"
    },
    {
        name: "\xc5land Islands",
        state: "assigned",
        alpha2: "AX",
        alpha3: "ALA",
        numeric: "248"
    },
    {
        name: "Azerbaijan",
        state: "assigned",
        alpha2: "AZ",
        alpha3: "AZE",
        numeric: "031"
    },
    {
        name: "Bosnia and Herzegovina",
        state: "assigned",
        alpha2: "BA",
        alpha3: "BIH",
        numeric: "070"
    },
    {
        name: "Barbados",
        state: "assigned",
        alpha2: "BB",
        alpha3: "BRB",
        numeric: "052"
    },
    {
        name: "Bangladesh",
        state: "assigned",
        alpha2: "BD",
        alpha3: "BGD",
        numeric: "050"
    },
    {
        name: "Belgium",
        state: "assigned",
        alpha2: "BE",
        alpha3: "BEL",
        numeric: "056"
    },
    {
        name: "Burkina Faso",
        state: "assigned",
        alpha2: "BF",
        alpha3: "BFA",
        numeric: "854"
    },
    {
        name: "Bulgaria",
        state: "assigned",
        alpha2: "BG",
        alpha3: "BGR",
        numeric: "100"
    },
    {
        name: "Bahrain",
        state: "assigned",
        alpha2: "BH",
        alpha3: "BHR",
        numeric: "048"
    },
    {
        name: "Burundi",
        state: "assigned",
        alpha2: "BI",
        alpha3: "BDI",
        numeric: "108"
    },
    {
        name: "Benin",
        state: "assigned",
        alpha2: "BJ",
        alpha3: "BEN",
        numeric: "204"
    },
    {
        name: "Saint Barth\xe9lemy",
        state: "assigned",
        alpha2: "BL",
        alpha3: "BLM",
        numeric: "652"
    },
    {
        name: "Bermuda",
        state: "assigned",
        alpha2: "BM",
        alpha3: "BMU",
        numeric: "060"
    },
    {
        name: "Brunei Darussalam",
        state: "assigned",
        alpha2: "BN",
        alpha3: "BRN",
        numeric: "096"
    },
    {
        name: "Bolivia (Plurinational State of)",
        state: "assigned",
        alpha2: "BO",
        alpha3: "BOL",
        numeric: "068"
    },
    {
        name: "Bonaire, Sint Eustatius and Saba",
        state: "assigned",
        alpha2: "BQ",
        alpha3: "BES",
        numeric: "535"
    },
    {
        name: "Brazil",
        state: "assigned",
        alpha2: "BR",
        alpha3: "BRA",
        numeric: "076"
    },
    {
        name: "Bahamas",
        state: "assigned",
        alpha2: "BS",
        alpha3: "BHS",
        numeric: "044"
    },
    {
        name: "Bhutan",
        state: "assigned",
        alpha2: "BT",
        alpha3: "BTN",
        numeric: "064"
    },
    {
        name: "Bouvet Island",
        state: "assigned",
        alpha2: "BV",
        alpha3: "BVT",
        numeric: "074"
    },
    {
        name: "Botswana",
        state: "assigned",
        alpha2: "BW",
        alpha3: "BWA",
        numeric: "072"
    },
    {
        name: "Belarus",
        state: "assigned",
        alpha2: "BY",
        alpha3: "BLR",
        numeric: "112"
    },
    {
        name: "Belize",
        state: "assigned",
        alpha2: "BZ",
        alpha3: "BLZ",
        numeric: "084"
    },
    {
        name: "Canada",
        state: "assigned",
        alpha2: "CA",
        alpha3: "CAN",
        numeric: "124"
    },
    {
        name: "Cocos (Keeling) Islands",
        state: "assigned",
        alpha2: "CC",
        alpha3: "CCK",
        numeric: "166"
    },
    {
        name: "Congo, Democratic Republic of the",
        state: "assigned",
        alpha2: "CD",
        alpha3: "COD",
        numeric: "180"
    },
    {
        name: "Central African Republic",
        state: "assigned",
        alpha2: "CF",
        alpha3: "CAF",
        numeric: "140"
    },
    {
        name: "Congo",
        state: "assigned",
        alpha2: "CG",
        alpha3: "COG",
        numeric: "178"
    },
    {
        name: "Switzerland",
        state: "assigned",
        alpha2: "CH",
        alpha3: "CHE",
        numeric: "756"
    },
    {
        name: "C\xf4te d'Ivoire",
        state: "assigned",
        alpha2: "CI",
        alpha3: "CIV",
        numeric: "384"
    },
    {
        name: "Cook Islands",
        state: "assigned",
        alpha2: "CK",
        alpha3: "COK",
        numeric: "184"
    },
    {
        name: "Chile",
        state: "assigned",
        alpha2: "CL",
        alpha3: "CHL",
        numeric: "152"
    },
    {
        name: "Cameroon",
        state: "assigned",
        alpha2: "CM",
        alpha3: "CMR",
        numeric: "120"
    },
    {
        name: "China",
        state: "assigned",
        alpha2: "CN",
        alpha3: "CHN",
        numeric: "156"
    },
    {
        name: "Colombia",
        state: "assigned",
        alpha2: "CO",
        alpha3: "COL",
        numeric: "170"
    },
    {
        name: "Costa Rica",
        state: "assigned",
        alpha2: "CR",
        alpha3: "CRI",
        numeric: "188"
    },
    {
        name: "Cuba",
        state: "assigned",
        alpha2: "CU",
        alpha3: "CUB",
        numeric: "192"
    },
    {
        name: "Cabo Verde",
        state: "assigned",
        alpha2: "CV",
        alpha3: "CPV",
        numeric: "132"
    },
    {
        name: "Cura\xe7ao",
        state: "assigned",
        alpha2: "CW",
        alpha3: "CUW",
        numeric: "531"
    },
    {
        name: "Christmas Island",
        state: "assigned",
        alpha2: "CX",
        alpha3: "CXR",
        numeric: "162"
    },
    {
        name: "Cyprus",
        state: "assigned",
        alpha2: "CY",
        alpha3: "CYP",
        numeric: "196"
    },
    {
        name: "Czechia",
        state: "assigned",
        alpha2: "CZ",
        alpha3: "CZE",
        numeric: "203"
    },
    {
        name: "Germany",
        state: "assigned",
        alpha2: "DE",
        alpha3: "DEU",
        numeric: "276"
    },
    {
        name: "Djibouti",
        state: "assigned",
        alpha2: "DJ",
        alpha3: "DJI",
        numeric: "262"
    },
    {
        name: "Denmark",
        state: "assigned",
        alpha2: "DK",
        alpha3: "DNK",
        numeric: "208"
    },
    {
        name: "Dominica",
        state: "assigned",
        alpha2: "DM",
        alpha3: "DMA",
        numeric: "212"
    },
    {
        name: "Dominican Republic",
        state: "assigned",
        alpha2: "DO",
        alpha3: "DOM",
        numeric: "214"
    },
    {
        name: "Algeria",
        state: "assigned",
        alpha2: "DZ",
        alpha3: "DZA",
        numeric: "012"
    },
    {
        name: "Ecuador",
        state: "assigned",
        alpha2: "EC",
        alpha3: "ECU",
        numeric: "218"
    },
    {
        name: "Estonia",
        state: "assigned",
        alpha2: "EE",
        alpha3: "EST",
        numeric: "233"
    },
    {
        name: "Egypt",
        state: "assigned",
        alpha2: "EG",
        alpha3: "EGY",
        numeric: "818"
    },
    {
        name: "Western Sahara",
        state: "assigned",
        alpha2: "EH",
        alpha3: "ESH",
        numeric: "732"
    },
    {
        name: "Eritrea",
        state: "assigned",
        alpha2: "ER",
        alpha3: "ERI",
        numeric: "232"
    },
    {
        name: "Spain",
        state: "assigned",
        alpha2: "ES",
        alpha3: "ESP",
        numeric: "724"
    },
    {
        name: "Ethiopia",
        state: "assigned",
        alpha2: "ET",
        alpha3: "ETH",
        numeric: "231"
    },
    {
        name: "Finland",
        state: "assigned",
        alpha2: "FI",
        alpha3: "FIN",
        numeric: "246"
    },
    {
        name: "Fiji",
        state: "assigned",
        alpha2: "FJ",
        alpha3: "FJI",
        numeric: "242"
    },
    {
        name: "Falkland Islands (Malvinas)",
        state: "assigned",
        alpha2: "FK",
        alpha3: "FLK",
        numeric: "238"
    },
    {
        name: "Micronesia (Federated States of)",
        state: "assigned",
        alpha2: "FM",
        alpha3: "FSM",
        numeric: "583"
    },
    {
        name: "Faroe Islands",
        state: "assigned",
        alpha2: "FO",
        alpha3: "FRO",
        numeric: "234"
    },
    {
        name: "France",
        state: "assigned",
        alpha2: "FR",
        alpha3: "FRA",
        numeric: "250"
    },
    {
        name: "Gabon",
        state: "assigned",
        alpha2: "GA",
        alpha3: "GAB",
        numeric: "266"
    },
    {
        name: "United Kingdom of Great Britain and Northern Ireland",
        state: "assigned",
        alpha2: "GB",
        alpha3: "GBR",
        numeric: "826"
    },
    {
        name: "Grenada",
        state: "assigned",
        alpha2: "GD",
        alpha3: "GRD",
        numeric: "308"
    },
    {
        name: "Georgia",
        state: "assigned",
        alpha2: "GE",
        alpha3: "GEO",
        numeric: "268"
    },
    {
        name: "French Guiana",
        state: "assigned",
        alpha2: "GF",
        alpha3: "GUF",
        numeric: "254"
    },
    {
        name: "Guernsey",
        state: "assigned",
        alpha2: "GG",
        alpha3: "GGY",
        numeric: "831"
    },
    {
        name: "Ghana",
        state: "assigned",
        alpha2: "GH",
        alpha3: "GHA",
        numeric: "288"
    },
    {
        name: "Gibraltar",
        state: "assigned",
        alpha2: "GI",
        alpha3: "GIB",
        numeric: "292"
    },
    {
        name: "Greenland",
        state: "assigned",
        alpha2: "GL",
        alpha3: "GRL",
        numeric: "304"
    },
    {
        name: "Gambia",
        state: "assigned",
        alpha2: "GM",
        alpha3: "GMB",
        numeric: "270"
    },
    {
        name: "Guinea",
        state: "assigned",
        alpha2: "GN",
        alpha3: "GIN",
        numeric: "324"
    },
    {
        name: "Guadeloupe",
        state: "assigned",
        alpha2: "GP",
        alpha3: "GLP",
        numeric: "312"
    },
    {
        name: "Equatorial Guinea",
        state: "assigned",
        alpha2: "GQ",
        alpha3: "GNQ",
        numeric: "226"
    },
    {
        name: "Greece",
        state: "assigned",
        alpha2: "GR",
        alpha3: "GRC",
        numeric: "300"
    },
    {
        name: "South Georgia and the South Sandwich Islands",
        state: "assigned",
        alpha2: "GS",
        alpha3: "SGS",
        numeric: "239"
    },
    {
        name: "Guatemala",
        state: "assigned",
        alpha2: "GT",
        alpha3: "GTM",
        numeric: "320"
    },
    {
        name: "Guam",
        state: "assigned",
        alpha2: "GU",
        alpha3: "GUM",
        numeric: "316"
    },
    {
        name: "Guinea-Bissau",
        state: "assigned",
        alpha2: "GW",
        alpha3: "GNB",
        numeric: "624"
    },
    {
        name: "Guyana",
        state: "assigned",
        alpha2: "GY",
        alpha3: "GUY",
        numeric: "328"
    },
    {
        name: "Hong Kong",
        state: "assigned",
        alpha2: "HK",
        alpha3: "HKG",
        numeric: "344"
    },
    {
        name: "Heard Island and McDonald Islands",
        state: "assigned",
        alpha2: "HM",
        alpha3: "HMD",
        numeric: "334"
    },
    {
        name: "Honduras",
        state: "assigned",
        alpha2: "HN",
        alpha3: "HND",
        numeric: "340"
    },
    {
        name: "Croatia",
        state: "assigned",
        alpha2: "HR",
        alpha3: "HRV",
        numeric: "191"
    },
    {
        name: "Haiti",
        state: "assigned",
        alpha2: "HT",
        alpha3: "HTI",
        numeric: "332"
    },
    {
        name: "Hungary",
        state: "assigned",
        alpha2: "HU",
        alpha3: "HUN",
        numeric: "348"
    },
    {
        name: "Indonesia",
        state: "assigned",
        alpha2: "ID",
        alpha3: "IDN",
        numeric: "360"
    },
    {
        name: "Ireland",
        state: "assigned",
        alpha2: "IE",
        alpha3: "IRL",
        numeric: "372"
    },
    {
        name: "Israel",
        state: "assigned",
        alpha2: "IL",
        alpha3: "ISR",
        numeric: "376"
    },
    {
        name: "Isle of Man",
        state: "assigned",
        alpha2: "IM",
        alpha3: "IMN",
        numeric: "833"
    },
    {
        name: "India",
        state: "assigned",
        alpha2: "IN",
        alpha3: "IND",
        numeric: "356"
    },
    {
        name: "British Indian Ocean Territory",
        state: "assigned",
        alpha2: "IO",
        alpha3: "IOT",
        numeric: "086"
    },
    {
        name: "Iraq",
        state: "assigned",
        alpha2: "IQ",
        alpha3: "IRQ",
        numeric: "368"
    },
    {
        name: "Iran (Islamic Republic of)",
        state: "assigned",
        alpha2: "IR",
        alpha3: "IRN",
        numeric: "364"
    },
    {
        name: "Iceland",
        state: "assigned",
        alpha2: "IS",
        alpha3: "ISL",
        numeric: "352"
    },
    {
        name: "Italy",
        state: "assigned",
        alpha2: "IT",
        alpha3: "ITA",
        numeric: "380"
    },
    {
        name: "Jersey",
        state: "assigned",
        alpha2: "JE",
        alpha3: "JEY",
        numeric: "832"
    },
    {
        name: "Jamaica",
        state: "assigned",
        alpha2: "JM",
        alpha3: "JAM",
        numeric: "388"
    },
    {
        name: "Jordan",
        state: "assigned",
        alpha2: "JO",
        alpha3: "JOR",
        numeric: "400"
    },
    {
        name: "Japan",
        state: "assigned",
        alpha2: "JP",
        alpha3: "JPN",
        numeric: "392"
    },
    {
        name: "Kenya",
        state: "assigned",
        alpha2: "KE",
        alpha3: "KEN",
        numeric: "404"
    },
    {
        name: "Kyrgyzstan",
        state: "assigned",
        alpha2: "KG",
        alpha3: "KGZ",
        numeric: "417"
    },
    {
        name: "Cambodia",
        state: "assigned",
        alpha2: "KH",
        alpha3: "KHM",
        numeric: "116"
    },
    {
        name: "Kiribati",
        state: "assigned",
        alpha2: "KI",
        alpha3: "KIR",
        numeric: "296"
    },
    {
        name: "Comoros",
        state: "assigned",
        alpha2: "KM",
        alpha3: "COM",
        numeric: "174"
    },
    {
        name: "Saint Kitts and Nevis",
        state: "assigned",
        alpha2: "KN",
        alpha3: "KNA",
        numeric: "659"
    },
    {
        name: "Korea (Democratic People's Republic of)",
        state: "assigned",
        alpha2: "KP",
        alpha3: "PRK",
        numeric: "408"
    },
    {
        name: "Korea, Republic of",
        state: "assigned",
        alpha2: "KR",
        alpha3: "KOR",
        numeric: "410"
    },
    {
        name: "Kuwait",
        state: "assigned",
        alpha2: "KW",
        alpha3: "KWT",
        numeric: "414"
    },
    {
        name: "Cayman Islands",
        state: "assigned",
        alpha2: "KY",
        alpha3: "CYM",
        numeric: "136"
    },
    {
        name: "Kazakhstan",
        state: "assigned",
        alpha2: "KZ",
        alpha3: "KAZ",
        numeric: "398"
    },
    {
        name: "Lao People's Democratic Republic",
        state: "assigned",
        alpha2: "LA",
        alpha3: "LAO",
        numeric: "418"
    },
    {
        name: "Lebanon",
        state: "assigned",
        alpha2: "LB",
        alpha3: "LBN",
        numeric: "422"
    },
    {
        name: "Saint Lucia",
        state: "assigned",
        alpha2: "LC",
        alpha3: "LCA",
        numeric: "662"
    },
    {
        name: "Liechtenstein",
        state: "assigned",
        alpha2: "LI",
        alpha3: "LIE",
        numeric: "438"
    },
    {
        name: "Sri Lanka",
        state: "assigned",
        alpha2: "LK",
        alpha3: "LKA",
        numeric: "144"
    },
    {
        name: "Liberia",
        state: "assigned",
        alpha2: "LR",
        alpha3: "LBR",
        numeric: "430"
    },
    {
        name: "Lesotho",
        state: "assigned",
        alpha2: "LS",
        alpha3: "LSO",
        numeric: "426"
    },
    {
        name: "Lithuania",
        state: "assigned",
        alpha2: "LT",
        alpha3: "LTU",
        numeric: "440"
    },
    {
        name: "Luxembourg",
        state: "assigned",
        alpha2: "LU",
        alpha3: "LUX",
        numeric: "442"
    },
    {
        name: "Latvia",
        state: "assigned",
        alpha2: "LV",
        alpha3: "LVA",
        numeric: "428"
    },
    {
        name: "Libya",
        state: "assigned",
        alpha2: "LY",
        alpha3: "LBY",
        numeric: "434"
    },
    {
        name: "Morocco",
        state: "assigned",
        alpha2: "MA",
        alpha3: "MAR",
        numeric: "504"
    },
    {
        name: "Monaco",
        state: "assigned",
        alpha2: "MC",
        alpha3: "MCO",
        numeric: "492"
    },
    {
        name: "Moldova, Republic of",
        state: "assigned",
        alpha2: "MD",
        alpha3: "MDA",
        numeric: "498"
    },
    {
        name: "Montenegro",
        state: "assigned",
        alpha2: "ME",
        alpha3: "MNE",
        numeric: "499"
    },
    {
        name: "Saint Martin (French part)",
        state: "assigned",
        alpha2: "MF",
        alpha3: "MAF",
        numeric: "663"
    },
    {
        name: "Madagascar",
        state: "assigned",
        alpha2: "MG",
        alpha3: "MDG",
        numeric: "450"
    },
    {
        name: "Marshall Islands",
        state: "assigned",
        alpha2: "MH",
        alpha3: "MHL",
        numeric: "584"
    },
    {
        name: "North Macedonia",
        state: "assigned",
        alpha2: "MK",
        alpha3: "MKD",
        numeric: "807"
    },
    {
        name: "Mali",
        state: "assigned",
        alpha2: "ML",
        alpha3: "MLI",
        numeric: "466"
    },
    {
        name: "Myanmar",
        state: "assigned",
        alpha2: "MM",
        alpha3: "MMR",
        numeric: "104"
    },
    {
        name: "Mongolia",
        state: "assigned",
        alpha2: "MN",
        alpha3: "MNG",
        numeric: "496"
    },
    {
        name: "Macao",
        state: "assigned",
        alpha2: "MO",
        alpha3: "MAC",
        numeric: "446"
    },
    {
        name: "Northern Mariana Islands",
        state: "assigned",
        alpha2: "MP",
        alpha3: "MNP",
        numeric: "580"
    },
    {
        name: "Martinique",
        state: "assigned",
        alpha2: "MQ",
        alpha3: "MTQ",
        numeric: "474"
    },
    {
        name: "Mauritania",
        state: "assigned",
        alpha2: "MR",
        alpha3: "MRT",
        numeric: "478"
    },
    {
        name: "Montserrat",
        state: "assigned",
        alpha2: "MS",
        alpha3: "MSR",
        numeric: "500"
    },
    {
        name: "Malta",
        state: "assigned",
        alpha2: "MT",
        alpha3: "MLT",
        numeric: "470"
    },
    {
        name: "Mauritius",
        state: "assigned",
        alpha2: "MU",
        alpha3: "MUS",
        numeric: "480"
    },
    {
        name: "Maldives",
        state: "assigned",
        alpha2: "MV",
        alpha3: "MDV",
        numeric: "462"
    },
    {
        name: "Malawi",
        state: "assigned",
        alpha2: "MW",
        alpha3: "MWI",
        numeric: "454"
    },
    {
        name: "Mexico",
        state: "assigned",
        alpha2: "MX",
        alpha3: "MEX",
        numeric: "484"
    },
    {
        name: "Malaysia",
        state: "assigned",
        alpha2: "MY",
        alpha3: "MYS",
        numeric: "458"
    },
    {
        name: "Mozambique",
        state: "assigned",
        alpha2: "MZ",
        alpha3: "MOZ",
        numeric: "508"
    },
    {
        name: "Namibia",
        state: "assigned",
        alpha2: "NA",
        alpha3: "NAM",
        numeric: "516"
    },
    {
        name: "New Caledonia",
        state: "assigned",
        alpha2: "NC",
        alpha3: "NCL",
        numeric: "540"
    },
    {
        name: "Niger",
        state: "assigned",
        alpha2: "NE",
        alpha3: "NER",
        numeric: "562"
    },
    {
        name: "Norfolk Island",
        state: "assigned",
        alpha2: "NF",
        alpha3: "NFK",
        numeric: "574"
    },
    {
        name: "Nigeria",
        state: "assigned",
        alpha2: "NG",
        alpha3: "NGA",
        numeric: "566"
    },
    {
        name: "Nicaragua",
        state: "assigned",
        alpha2: "NI",
        alpha3: "NIC",
        numeric: "558"
    },
    {
        name: "Netherlands",
        state: "assigned",
        alpha2: "NL",
        alpha3: "NLD",
        numeric: "528"
    },
    {
        name: "Norway",
        state: "assigned",
        alpha2: "NO",
        alpha3: "NOR",
        numeric: "578"
    },
    {
        name: "Nepal",
        state: "assigned",
        alpha2: "NP",
        alpha3: "NPL",
        numeric: "524"
    },
    {
        name: "Nauru",
        state: "assigned",
        alpha2: "NR",
        alpha3: "NRU",
        numeric: "520"
    },
    {
        name: "Niue",
        state: "assigned",
        alpha2: "NU",
        alpha3: "NIU",
        numeric: "570"
    },
    {
        name: "New Zealand",
        state: "assigned",
        alpha2: "NZ",
        alpha3: "NZL",
        numeric: "554"
    },
    {
        name: "Oman",
        state: "assigned",
        alpha2: "OM",
        alpha3: "OMN",
        numeric: "512"
    },
    {
        name: "Panama",
        state: "assigned",
        alpha2: "PA",
        alpha3: "PAN",
        numeric: "591"
    },
    {
        name: "Peru",
        state: "assigned",
        alpha2: "PE",
        alpha3: "PER",
        numeric: "604"
    },
    {
        name: "French Polynesia",
        state: "assigned",
        alpha2: "PF",
        alpha3: "PYF",
        numeric: "258"
    },
    {
        name: "Papua New Guinea",
        state: "assigned",
        alpha2: "PG",
        alpha3: "PNG",
        numeric: "598"
    },
    {
        name: "Philippines",
        state: "assigned",
        alpha2: "PH",
        alpha3: "PHL",
        numeric: "608"
    },
    {
        name: "Pakistan",
        state: "assigned",
        alpha2: "PK",
        alpha3: "PAK",
        numeric: "586"
    },
    {
        name: "Poland",
        state: "assigned",
        alpha2: "PL",
        alpha3: "POL",
        numeric: "616"
    },
    {
        name: "Saint Pierre and Miquelon",
        state: "assigned",
        alpha2: "PM",
        alpha3: "SPM",
        numeric: "666"
    },
    {
        name: "Pitcairn",
        state: "assigned",
        alpha2: "PN",
        alpha3: "PCN",
        numeric: "612"
    },
    {
        name: "Puerto Rico",
        state: "assigned",
        alpha2: "PR",
        alpha3: "PRI",
        numeric: "630"
    },
    {
        name: "Palestine, State of",
        state: "assigned",
        alpha2: "PS",
        alpha3: "PSE",
        numeric: "275"
    },
    {
        name: "Portugal",
        state: "assigned",
        alpha2: "PT",
        alpha3: "PRT",
        numeric: "620"
    },
    {
        name: "Palau",
        state: "assigned",
        alpha2: "PW",
        alpha3: "PLW",
        numeric: "585"
    },
    {
        name: "Paraguay",
        state: "assigned",
        alpha2: "PY",
        alpha3: "PRY",
        numeric: "600"
    },
    {
        name: "Qatar",
        state: "assigned",
        alpha2: "QA",
        alpha3: "QAT",
        numeric: "634"
    },
    {
        name: "R\xe9union",
        state: "assigned",
        alpha2: "RE",
        alpha3: "REU",
        numeric: "638"
    },
    {
        name: "Romania",
        state: "assigned",
        alpha2: "RO",
        alpha3: "ROU",
        numeric: "642"
    },
    {
        name: "Serbia",
        state: "assigned",
        alpha2: "RS",
        alpha3: "SRB",
        numeric: "688"
    },
    {
        name: "Russian Federation",
        state: "assigned",
        alpha2: "RU",
        alpha3: "RUS",
        numeric: "643"
    },
    {
        name: "Rwanda",
        state: "assigned",
        alpha2: "RW",
        alpha3: "RWA",
        numeric: "646"
    },
    {
        name: "Saudi Arabia",
        state: "assigned",
        alpha2: "SA",
        alpha3: "SAU",
        numeric: "682"
    },
    {
        name: "Solomon Islands",
        state: "assigned",
        alpha2: "SB",
        alpha3: "SLB",
        numeric: "090"
    },
    {
        name: "Seychelles",
        state: "assigned",
        alpha2: "SC",
        alpha3: "SYC",
        numeric: "690"
    },
    {
        name: "Sudan",
        state: "assigned",
        alpha2: "SD",
        alpha3: "SDN",
        numeric: "729"
    },
    {
        name: "Sweden",
        state: "assigned",
        alpha2: "SE",
        alpha3: "SWE",
        numeric: "752"
    },
    {
        name: "Singapore",
        state: "assigned",
        alpha2: "SG",
        alpha3: "SGP",
        numeric: "702"
    },
    {
        name: "Saint Helena, Ascension and Tristan da Cunha",
        state: "assigned",
        alpha2: "SH",
        alpha3: "SHN",
        numeric: "654"
    },
    {
        name: "Slovenia",
        state: "assigned",
        alpha2: "SI",
        alpha3: "SVN",
        numeric: "705"
    },
    {
        name: "Svalbard and Jan Mayen",
        state: "assigned",
        alpha2: "SJ",
        alpha3: "SJM",
        numeric: "744"
    },
    {
        name: "Slovakia",
        state: "assigned",
        alpha2: "SK",
        alpha3: "SVK",
        numeric: "703"
    },
    {
        name: "Sierra Leone",
        state: "assigned",
        alpha2: "SL",
        alpha3: "SLE",
        numeric: "694"
    },
    {
        name: "San Marino",
        state: "assigned",
        alpha2: "SM",
        alpha3: "SMR",
        numeric: "674"
    },
    {
        name: "Senegal",
        state: "assigned",
        alpha2: "SN",
        alpha3: "SEN",
        numeric: "686"
    },
    {
        name: "Somalia",
        state: "assigned",
        alpha2: "SO",
        alpha3: "SOM",
        numeric: "706"
    },
    {
        name: "Suriname",
        state: "assigned",
        alpha2: "SR",
        alpha3: "SUR",
        numeric: "740"
    },
    {
        name: "South Sudan",
        state: "assigned",
        alpha2: "SS",
        alpha3: "SSD",
        numeric: "728"
    },
    {
        name: "Sao Tome and Principe",
        state: "assigned",
        alpha2: "ST",
        alpha3: "STP",
        numeric: "678"
    },
    {
        name: "El Salvador",
        state: "assigned",
        alpha2: "SV",
        alpha3: "SLV",
        numeric: "222"
    },
    {
        name: "Sint Maarten (Dutch part)",
        state: "assigned",
        alpha2: "SX",
        alpha3: "SXM",
        numeric: "534"
    },
    {
        name: "Syrian Arab Republic",
        state: "assigned",
        alpha2: "SY",
        alpha3: "SYR",
        numeric: "760"
    },
    {
        name: "Eswatini",
        state: "assigned",
        alpha2: "SZ",
        alpha3: "SWZ",
        numeric: "748"
    },
    {
        name: "Turks and Caicos Islands",
        state: "assigned",
        alpha2: "TC",
        alpha3: "TCA",
        numeric: "796"
    },
    {
        name: "Chad",
        state: "assigned",
        alpha2: "TD",
        alpha3: "TCD",
        numeric: "148"
    },
    {
        name: "French Southern Territories",
        state: "assigned",
        alpha2: "TF",
        alpha3: "ATF",
        numeric: "260"
    },
    {
        name: "Togo",
        state: "assigned",
        alpha2: "TG",
        alpha3: "TGO",
        numeric: "768"
    },
    {
        name: "Thailand",
        state: "assigned",
        alpha2: "TH",
        alpha3: "THA",
        numeric: "764"
    },
    {
        name: "Tajikistan",
        state: "assigned",
        alpha2: "TJ",
        alpha3: "TJK",
        numeric: "762"
    },
    {
        name: "Tokelau",
        state: "assigned",
        alpha2: "TK",
        alpha3: "TKL",
        numeric: "772"
    },
    {
        name: "Timor-Leste",
        state: "assigned",
        alpha2: "TL",
        alpha3: "TLS",
        numeric: "626"
    },
    {
        name: "Turkmenistan",
        state: "assigned",
        alpha2: "TM",
        alpha3: "TKM",
        numeric: "795"
    },
    {
        name: "Tunisia",
        state: "assigned",
        alpha2: "TN",
        alpha3: "TUN",
        numeric: "788"
    },
    {
        name: "Tonga",
        state: "assigned",
        alpha2: "TO",
        alpha3: "TON",
        numeric: "776"
    },
    {
        name: "Turkey",
        state: "assigned",
        alpha2: "TR",
        alpha3: "TUR",
        numeric: "792"
    },
    {
        name: "Trinidad and Tobago",
        state: "assigned",
        alpha2: "TT",
        alpha3: "TTO",
        numeric: "780"
    },
    {
        name: "Tuvalu",
        state: "assigned",
        alpha2: "TV",
        alpha3: "TUV",
        numeric: "798"
    },
    {
        name: "Taiwan, Province of China",
        state: "assigned",
        alpha2: "TW",
        alpha3: "TWN",
        numeric: "158"
    },
    {
        name: "Tanzania, United Republic of",
        state: "assigned",
        alpha2: "TZ",
        alpha3: "TZA",
        numeric: "834"
    },
    {
        name: "Ukraine",
        state: "assigned",
        alpha2: "UA",
        alpha3: "UKR",
        numeric: "804"
    },
    {
        name: "Uganda",
        state: "assigned",
        alpha2: "UG",
        alpha3: "UGA",
        numeric: "800"
    },
    {
        name: "United States Minor Outlying Islands",
        state: "assigned",
        alpha2: "UM",
        alpha3: "UMI",
        numeric: "581"
    },
    {
        name: "United States of America",
        state: "assigned",
        alpha2: "US",
        alpha3: "USA",
        numeric: "840"
    },
    {
        name: "Uruguay",
        state: "assigned",
        alpha2: "UY",
        alpha3: "URY",
        numeric: "858"
    },
    {
        name: "Uzbekistan",
        state: "assigned",
        alpha2: "UZ",
        alpha3: "UZB",
        numeric: "860"
    },
    {
        name: "Holy See",
        state: "assigned",
        alpha2: "VA",
        alpha3: "VAT",
        numeric: "336"
    },
    {
        name: "Saint Vincent and the Grenadines",
        state: "assigned",
        alpha2: "VC",
        alpha3: "VCT",
        numeric: "670"
    },
    {
        name: "Venezuela (Bolivarian Republic of)",
        state: "assigned",
        alpha2: "VE",
        alpha3: "VEN",
        numeric: "862"
    },
    {
        name: "Virgin Islands (British)",
        state: "assigned",
        alpha2: "VG",
        alpha3: "VGB",
        numeric: "092"
    },
    {
        name: "Virgin Islands (U.S.)",
        state: "assigned",
        alpha2: "VI",
        alpha3: "VIR",
        numeric: "850"
    },
    {
        name: "Viet Nam",
        state: "assigned",
        alpha2: "VN",
        alpha3: "VNM",
        numeric: "704"
    },
    {
        name: "Vanuatu",
        state: "assigned",
        alpha2: "VU",
        alpha3: "VUT",
        numeric: "548"
    },
    {
        name: "Wallis and Futuna",
        state: "assigned",
        alpha2: "WF",
        alpha3: "WLF",
        numeric: "876"
    },
    {
        name: "Samoa",
        state: "assigned",
        alpha2: "WS",
        alpha3: "WSM",
        numeric: "882"
    },
    {
        name: "Yemen",
        state: "assigned",
        alpha2: "YE",
        alpha3: "YEM",
        numeric: "887"
    },
    {
        name: "Mayotte",
        state: "assigned",
        alpha2: "YT",
        alpha3: "MYT",
        numeric: "175"
    },
    {
        name: "South Africa",
        state: "assigned",
        alpha2: "ZA",
        alpha3: "ZAF",
        numeric: "710"
    },
    {
        name: "Zambia",
        state: "assigned",
        alpha2: "ZM",
        alpha3: "ZMB",
        numeric: "894"
    },
    {
        name: "Zimbabwe",
        state: "assigned",
        alpha2: "ZW",
        alpha3: "ZWE",
        numeric: "716"
    }
];


/**
 * @typedef {'living'|'historical'|'extinct'|'ancient'|'constructed'|'special'} Type
 *   Category of a language:
 *
 *   *   `'living'`
 *       — currently spoken language
 *       (example: `nhi` for `Zacatlán-Ahuacatlán-Tepetzintla Nahuatl`)
 *   *   `'historical'`
 *       — extinct language distinct from modern languages that descended from it
 *       (example: `ofs` for `Old Frisian`)
 *   *   `'extinct'`
 *       — language that went extinct recently
 *       (example: `rbp` for `Barababaraba`)
 *   *   `'ancient'`
 *       — language that went extinct long ago
 *       (example: `got` for `Gothic`)
 *   *   `'constructed'`
 *       — artificial languages, excluding programming languages
 *       (example: `epo` for `Esperanto`)
 *   *   `'special'`
 *       — non-language codes
 *       (example: `und` for `Undetermined`)
 *
 * @typedef {'individual'|'macrolanguage'|'special'} Scope
 *   Scope of a language:
 *
 *   *   `'individual'`
 *       — normal, single language
 *       (example: `eng` for `English`)
 *   *   `'macrolanguage'`
 *       — one-to-many grouping of languages, because older ISO 639s included them
 *       (example: `ara` for `Arabic`)
 *   *   `'special'`
 *       — non-language codes
 *       (example: `und` for `Undetermined`)
 *
 * @typedef Language
 *   Object representing a language.
 * @property {string} name
 *   Name (example: `'English'`).
 * @property {Type} type
 *   Type (example: `'living'`).
 * @property {Scope} scope
 *   Scope (example: `'individual'`)
 * @property {string} iso6393
 *   ISO 639-3 code.
 * @property {string} [iso6392B]
 *   ISO 639-2 (bibliographic) code (example: `'eng'`).
 * @property {string} [iso6392T]
 *   ISO 639-2 (terminologic) code (example: `'eng'`).
 * @property {string} [iso6391]
 *   ISO 639-1 code (example: `'en'`).
 */ /**
 * List of ISO 639-3 languages.
 *
 * @type {Array<Language>}
 */ // @ts-expect-error
const $bfe21b6c46468562$export$d97f6a93f068741 = [
    {
        name: "Ghotuo",
        type: "living",
        scope: "individual",
        iso6393: "aaa"
    },
    {
        name: "Alumu-Tesu",
        type: "living",
        scope: "individual",
        iso6393: "aab"
    },
    {
        name: "Ari",
        type: "living",
        scope: "individual",
        iso6393: "aac"
    },
    {
        name: "Amal",
        type: "living",
        scope: "individual",
        iso6393: "aad"
    },
    {
        name: "Arb\xebresh\xeb Albanian",
        type: "living",
        scope: "individual",
        iso6393: "aae"
    },
    {
        name: "Aranadan",
        type: "living",
        scope: "individual",
        iso6393: "aaf"
    },
    {
        name: "Ambrak",
        type: "living",
        scope: "individual",
        iso6393: "aag"
    },
    {
        name: "Abu' Arapesh",
        type: "living",
        scope: "individual",
        iso6393: "aah"
    },
    {
        name: "Arifama-Miniafia",
        type: "living",
        scope: "individual",
        iso6393: "aai"
    },
    {
        name: "Ankave",
        type: "living",
        scope: "individual",
        iso6393: "aak"
    },
    {
        name: "Afade",
        type: "living",
        scope: "individual",
        iso6393: "aal"
    },
    {
        name: "Anamb\xe9",
        type: "living",
        scope: "individual",
        iso6393: "aan"
    },
    {
        name: "Algerian Saharan Arabic",
        type: "living",
        scope: "individual",
        iso6393: "aao"
    },
    {
        name: "Par\xe1 Ar\xe1ra",
        type: "living",
        scope: "individual",
        iso6393: "aap"
    },
    {
        name: "Eastern Abnaki",
        type: "extinct",
        scope: "individual",
        iso6393: "aaq"
    },
    {
        name: "Afar",
        type: "living",
        scope: "individual",
        iso6393: "aar",
        iso6392B: "aar",
        iso6392T: "aar",
        iso6391: "aa"
    },
    {
        name: "Aas\xe1x",
        type: "living",
        scope: "individual",
        iso6393: "aas"
    },
    {
        name: "Arvanitika Albanian",
        type: "living",
        scope: "individual",
        iso6393: "aat"
    },
    {
        name: "Abau",
        type: "living",
        scope: "individual",
        iso6393: "aau"
    },
    {
        name: "Solong",
        type: "living",
        scope: "individual",
        iso6393: "aaw"
    },
    {
        name: "Mandobo Atas",
        type: "living",
        scope: "individual",
        iso6393: "aax"
    },
    {
        name: "Amarasi",
        type: "living",
        scope: "individual",
        iso6393: "aaz"
    },
    {
        name: "Ab\xe9",
        type: "living",
        scope: "individual",
        iso6393: "aba"
    },
    {
        name: "Bankon",
        type: "living",
        scope: "individual",
        iso6393: "abb"
    },
    {
        name: "Ambala Ayta",
        type: "living",
        scope: "individual",
        iso6393: "abc"
    },
    {
        name: "Manide",
        type: "living",
        scope: "individual",
        iso6393: "abd"
    },
    {
        name: "Western Abnaki",
        type: "living",
        scope: "individual",
        iso6393: "abe"
    },
    {
        name: "Abai Sungai",
        type: "living",
        scope: "individual",
        iso6393: "abf"
    },
    {
        name: "Abaga",
        type: "living",
        scope: "individual",
        iso6393: "abg"
    },
    {
        name: "Tajiki Arabic",
        type: "living",
        scope: "individual",
        iso6393: "abh"
    },
    {
        name: "Abidji",
        type: "living",
        scope: "individual",
        iso6393: "abi"
    },
    {
        name: "Aka-Bea",
        type: "extinct",
        scope: "individual",
        iso6393: "abj"
    },
    {
        name: "Abkhazian",
        type: "living",
        scope: "individual",
        iso6393: "abk",
        iso6392B: "abk",
        iso6392T: "abk",
        iso6391: "ab"
    },
    {
        name: "Lampung Nyo",
        type: "living",
        scope: "individual",
        iso6393: "abl"
    },
    {
        name: "Abanyom",
        type: "living",
        scope: "individual",
        iso6393: "abm"
    },
    {
        name: "Abua",
        type: "living",
        scope: "individual",
        iso6393: "abn"
    },
    {
        name: "Abon",
        type: "living",
        scope: "individual",
        iso6393: "abo"
    },
    {
        name: "Abellen Ayta",
        type: "living",
        scope: "individual",
        iso6393: "abp"
    },
    {
        name: "Abaza",
        type: "living",
        scope: "individual",
        iso6393: "abq"
    },
    {
        name: "Abron",
        type: "living",
        scope: "individual",
        iso6393: "abr"
    },
    {
        name: "Ambonese Malay",
        type: "living",
        scope: "individual",
        iso6393: "abs"
    },
    {
        name: "Ambulas",
        type: "living",
        scope: "individual",
        iso6393: "abt"
    },
    {
        name: "Abure",
        type: "living",
        scope: "individual",
        iso6393: "abu"
    },
    {
        name: "Baharna Arabic",
        type: "living",
        scope: "individual",
        iso6393: "abv"
    },
    {
        name: "Pal",
        type: "living",
        scope: "individual",
        iso6393: "abw"
    },
    {
        name: "Inabaknon",
        type: "living",
        scope: "individual",
        iso6393: "abx"
    },
    {
        name: "Aneme Wake",
        type: "living",
        scope: "individual",
        iso6393: "aby"
    },
    {
        name: "Abui",
        type: "living",
        scope: "individual",
        iso6393: "abz"
    },
    {
        name: "Achagua",
        type: "living",
        scope: "individual",
        iso6393: "aca"
    },
    {
        name: "\xc1nc\xe1",
        type: "living",
        scope: "individual",
        iso6393: "acb"
    },
    {
        name: "Gikyode",
        type: "living",
        scope: "individual",
        iso6393: "acd"
    },
    {
        name: "Achinese",
        type: "living",
        scope: "individual",
        iso6393: "ace",
        iso6392B: "ace",
        iso6392T: "ace"
    },
    {
        name: "Saint Lucian Creole French",
        type: "living",
        scope: "individual",
        iso6393: "acf"
    },
    {
        name: "Acoli",
        type: "living",
        scope: "individual",
        iso6393: "ach",
        iso6392B: "ach",
        iso6392T: "ach"
    },
    {
        name: "Aka-Cari",
        type: "extinct",
        scope: "individual",
        iso6393: "aci"
    },
    {
        name: "Aka-Kora",
        type: "extinct",
        scope: "individual",
        iso6393: "ack"
    },
    {
        name: "Akar-Bale",
        type: "extinct",
        scope: "individual",
        iso6393: "acl"
    },
    {
        name: "Mesopotamian Arabic",
        type: "living",
        scope: "individual",
        iso6393: "acm"
    },
    {
        name: "Achang",
        type: "living",
        scope: "individual",
        iso6393: "acn"
    },
    {
        name: "Eastern Acipa",
        type: "living",
        scope: "individual",
        iso6393: "acp"
    },
    {
        name: "Ta'izzi-Adeni Arabic",
        type: "living",
        scope: "individual",
        iso6393: "acq"
    },
    {
        name: "Achi",
        type: "living",
        scope: "individual",
        iso6393: "acr"
    },
    {
        name: "Acro\xe1",
        type: "extinct",
        scope: "individual",
        iso6393: "acs"
    },
    {
        name: "Achterhoeks",
        type: "living",
        scope: "individual",
        iso6393: "act"
    },
    {
        name: "Achuar-Shiwiar",
        type: "living",
        scope: "individual",
        iso6393: "acu"
    },
    {
        name: "Achumawi",
        type: "living",
        scope: "individual",
        iso6393: "acv"
    },
    {
        name: "Hijazi Arabic",
        type: "living",
        scope: "individual",
        iso6393: "acw"
    },
    {
        name: "Omani Arabic",
        type: "living",
        scope: "individual",
        iso6393: "acx"
    },
    {
        name: "Cypriot Arabic",
        type: "living",
        scope: "individual",
        iso6393: "acy"
    },
    {
        name: "Acheron",
        type: "living",
        scope: "individual",
        iso6393: "acz"
    },
    {
        name: "Adangme",
        type: "living",
        scope: "individual",
        iso6393: "ada",
        iso6392B: "ada",
        iso6392T: "ada"
    },
    {
        name: "Atauran",
        type: "living",
        scope: "individual",
        iso6393: "adb"
    },
    {
        name: "Lidzonka",
        type: "living",
        scope: "individual",
        iso6393: "add"
    },
    {
        name: "Adele",
        type: "living",
        scope: "individual",
        iso6393: "ade"
    },
    {
        name: "Dhofari Arabic",
        type: "living",
        scope: "individual",
        iso6393: "adf"
    },
    {
        name: "Andegerebinha",
        type: "living",
        scope: "individual",
        iso6393: "adg"
    },
    {
        name: "Adhola",
        type: "living",
        scope: "individual",
        iso6393: "adh"
    },
    {
        name: "Adi",
        type: "living",
        scope: "individual",
        iso6393: "adi"
    },
    {
        name: "Adioukrou",
        type: "living",
        scope: "individual",
        iso6393: "adj"
    },
    {
        name: "Galo",
        type: "living",
        scope: "individual",
        iso6393: "adl"
    },
    {
        name: "Adang",
        type: "living",
        scope: "individual",
        iso6393: "adn"
    },
    {
        name: "Abu",
        type: "living",
        scope: "individual",
        iso6393: "ado"
    },
    {
        name: "Adangbe",
        type: "living",
        scope: "individual",
        iso6393: "adq"
    },
    {
        name: "Adonara",
        type: "living",
        scope: "individual",
        iso6393: "adr"
    },
    {
        name: "Adamorobe Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "ads"
    },
    {
        name: "Adnyamathanha",
        type: "living",
        scope: "individual",
        iso6393: "adt"
    },
    {
        name: "Aduge",
        type: "living",
        scope: "individual",
        iso6393: "adu"
    },
    {
        name: "Amundava",
        type: "living",
        scope: "individual",
        iso6393: "adw"
    },
    {
        name: "Amdo Tibetan",
        type: "living",
        scope: "individual",
        iso6393: "adx"
    },
    {
        name: "Adyghe",
        type: "living",
        scope: "individual",
        iso6393: "ady",
        iso6392B: "ady",
        iso6392T: "ady"
    },
    {
        name: "Adzera",
        type: "living",
        scope: "individual",
        iso6393: "adz"
    },
    {
        name: "Areba",
        type: "extinct",
        scope: "individual",
        iso6393: "aea"
    },
    {
        name: "Tunisian Arabic",
        type: "living",
        scope: "individual",
        iso6393: "aeb"
    },
    {
        name: "Saidi Arabic",
        type: "living",
        scope: "individual",
        iso6393: "aec"
    },
    {
        name: "Argentine Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "aed"
    },
    {
        name: "Northeast Pashai",
        type: "living",
        scope: "individual",
        iso6393: "aee"
    },
    {
        name: "Haeke",
        type: "living",
        scope: "individual",
        iso6393: "aek"
    },
    {
        name: "Ambele",
        type: "living",
        scope: "individual",
        iso6393: "ael"
    },
    {
        name: "Arem",
        type: "living",
        scope: "individual",
        iso6393: "aem"
    },
    {
        name: "Armenian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "aen"
    },
    {
        name: "Aer",
        type: "living",
        scope: "individual",
        iso6393: "aeq"
    },
    {
        name: "Eastern Arrernte",
        type: "living",
        scope: "individual",
        iso6393: "aer"
    },
    {
        name: "Alsea",
        type: "extinct",
        scope: "individual",
        iso6393: "aes"
    },
    {
        name: "Akeu",
        type: "living",
        scope: "individual",
        iso6393: "aeu"
    },
    {
        name: "Ambakich",
        type: "living",
        scope: "individual",
        iso6393: "aew"
    },
    {
        name: "Amele",
        type: "living",
        scope: "individual",
        iso6393: "aey"
    },
    {
        name: "Aeka",
        type: "living",
        scope: "individual",
        iso6393: "aez"
    },
    {
        name: "Gulf Arabic",
        type: "living",
        scope: "individual",
        iso6393: "afb"
    },
    {
        name: "Andai",
        type: "living",
        scope: "individual",
        iso6393: "afd"
    },
    {
        name: "Putukwam",
        type: "living",
        scope: "individual",
        iso6393: "afe"
    },
    {
        name: "Afghan Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "afg"
    },
    {
        name: "Afrihili",
        type: "constructed",
        scope: "individual",
        iso6393: "afh",
        iso6392B: "afh",
        iso6392T: "afh"
    },
    {
        name: "Akrukay",
        type: "living",
        scope: "individual",
        iso6393: "afi"
    },
    {
        name: "Nanubae",
        type: "living",
        scope: "individual",
        iso6393: "afk"
    },
    {
        name: "Defaka",
        type: "living",
        scope: "individual",
        iso6393: "afn"
    },
    {
        name: "Eloyi",
        type: "living",
        scope: "individual",
        iso6393: "afo"
    },
    {
        name: "Tapei",
        type: "living",
        scope: "individual",
        iso6393: "afp"
    },
    {
        name: "Afrikaans",
        type: "living",
        scope: "individual",
        iso6393: "afr",
        iso6392B: "afr",
        iso6392T: "afr",
        iso6391: "af"
    },
    {
        name: "Afro-Seminole Creole",
        type: "living",
        scope: "individual",
        iso6393: "afs"
    },
    {
        name: "Afitti",
        type: "living",
        scope: "individual",
        iso6393: "aft"
    },
    {
        name: "Awutu",
        type: "living",
        scope: "individual",
        iso6393: "afu"
    },
    {
        name: "Obokuitai",
        type: "living",
        scope: "individual",
        iso6393: "afz"
    },
    {
        name: "Aguano",
        type: "extinct",
        scope: "individual",
        iso6393: "aga"
    },
    {
        name: "Legbo",
        type: "living",
        scope: "individual",
        iso6393: "agb"
    },
    {
        name: "Agatu",
        type: "living",
        scope: "individual",
        iso6393: "agc"
    },
    {
        name: "Agarabi",
        type: "living",
        scope: "individual",
        iso6393: "agd"
    },
    {
        name: "Angal",
        type: "living",
        scope: "individual",
        iso6393: "age"
    },
    {
        name: "Arguni",
        type: "living",
        scope: "individual",
        iso6393: "agf"
    },
    {
        name: "Angor",
        type: "living",
        scope: "individual",
        iso6393: "agg"
    },
    {
        name: "Ngelima",
        type: "living",
        scope: "individual",
        iso6393: "agh"
    },
    {
        name: "Agariya",
        type: "living",
        scope: "individual",
        iso6393: "agi"
    },
    {
        name: "Argobba",
        type: "living",
        scope: "individual",
        iso6393: "agj"
    },
    {
        name: "Isarog Agta",
        type: "living",
        scope: "individual",
        iso6393: "agk"
    },
    {
        name: "Fembe",
        type: "living",
        scope: "individual",
        iso6393: "agl"
    },
    {
        name: "Angaataha",
        type: "living",
        scope: "individual",
        iso6393: "agm"
    },
    {
        name: "Agutaynen",
        type: "living",
        scope: "individual",
        iso6393: "agn"
    },
    {
        name: "Tainae",
        type: "living",
        scope: "individual",
        iso6393: "ago"
    },
    {
        name: "Aghem",
        type: "living",
        scope: "individual",
        iso6393: "agq"
    },
    {
        name: "Aguaruna",
        type: "living",
        scope: "individual",
        iso6393: "agr"
    },
    {
        name: "Esimbi",
        type: "living",
        scope: "individual",
        iso6393: "ags"
    },
    {
        name: "Central Cagayan Agta",
        type: "living",
        scope: "individual",
        iso6393: "agt"
    },
    {
        name: "Aguacateco",
        type: "living",
        scope: "individual",
        iso6393: "agu"
    },
    {
        name: "Remontado Dumagat",
        type: "living",
        scope: "individual",
        iso6393: "agv"
    },
    {
        name: "Kahua",
        type: "living",
        scope: "individual",
        iso6393: "agw"
    },
    {
        name: "Aghul",
        type: "living",
        scope: "individual",
        iso6393: "agx"
    },
    {
        name: "Southern Alta",
        type: "living",
        scope: "individual",
        iso6393: "agy"
    },
    {
        name: "Mt. Iriga Agta",
        type: "living",
        scope: "individual",
        iso6393: "agz"
    },
    {
        name: "Ahanta",
        type: "living",
        scope: "individual",
        iso6393: "aha"
    },
    {
        name: "Axamb",
        type: "living",
        scope: "individual",
        iso6393: "ahb"
    },
    {
        name: "Qimant",
        type: "living",
        scope: "individual",
        iso6393: "ahg"
    },
    {
        name: "Aghu",
        type: "living",
        scope: "individual",
        iso6393: "ahh"
    },
    {
        name: "Tiagbamrin Aizi",
        type: "living",
        scope: "individual",
        iso6393: "ahi"
    },
    {
        name: "Akha",
        type: "living",
        scope: "individual",
        iso6393: "ahk"
    },
    {
        name: "Igo",
        type: "living",
        scope: "individual",
        iso6393: "ahl"
    },
    {
        name: "Mobumrin Aizi",
        type: "living",
        scope: "individual",
        iso6393: "ahm"
    },
    {
        name: "\xc0h\xe0n",
        type: "living",
        scope: "individual",
        iso6393: "ahn"
    },
    {
        name: "Ahom",
        type: "extinct",
        scope: "individual",
        iso6393: "aho"
    },
    {
        name: "Aproumu Aizi",
        type: "living",
        scope: "individual",
        iso6393: "ahp"
    },
    {
        name: "Ahirani",
        type: "living",
        scope: "individual",
        iso6393: "ahr"
    },
    {
        name: "Ashe",
        type: "living",
        scope: "individual",
        iso6393: "ahs"
    },
    {
        name: "Ahtena",
        type: "living",
        scope: "individual",
        iso6393: "aht"
    },
    {
        name: "Arosi",
        type: "living",
        scope: "individual",
        iso6393: "aia"
    },
    {
        name: "Ainu (China)",
        type: "living",
        scope: "individual",
        iso6393: "aib"
    },
    {
        name: "Ainbai",
        type: "living",
        scope: "individual",
        iso6393: "aic"
    },
    {
        name: "Alngith",
        type: "extinct",
        scope: "individual",
        iso6393: "aid"
    },
    {
        name: "Amara",
        type: "living",
        scope: "individual",
        iso6393: "aie"
    },
    {
        name: "Agi",
        type: "living",
        scope: "individual",
        iso6393: "aif"
    },
    {
        name: "Antigua and Barbuda Creole English",
        type: "living",
        scope: "individual",
        iso6393: "aig"
    },
    {
        name: "Ai-Cham",
        type: "living",
        scope: "individual",
        iso6393: "aih"
    },
    {
        name: "Assyrian Neo-Aramaic",
        type: "living",
        scope: "individual",
        iso6393: "aii"
    },
    {
        name: "Lishanid Noshan",
        type: "living",
        scope: "individual",
        iso6393: "aij"
    },
    {
        name: "Ake",
        type: "living",
        scope: "individual",
        iso6393: "aik"
    },
    {
        name: "Aimele",
        type: "living",
        scope: "individual",
        iso6393: "ail"
    },
    {
        name: "Aimol",
        type: "living",
        scope: "individual",
        iso6393: "aim"
    },
    {
        name: "Ainu (Japan)",
        type: "living",
        scope: "individual",
        iso6393: "ain",
        iso6392B: "ain",
        iso6392T: "ain"
    },
    {
        name: "Aiton",
        type: "living",
        scope: "individual",
        iso6393: "aio"
    },
    {
        name: "Burumakok",
        type: "living",
        scope: "individual",
        iso6393: "aip"
    },
    {
        name: "Aimaq",
        type: "living",
        scope: "individual",
        iso6393: "aiq"
    },
    {
        name: "Airoran",
        type: "living",
        scope: "individual",
        iso6393: "air"
    },
    {
        name: "Arikem",
        type: "extinct",
        scope: "individual",
        iso6393: "ait"
    },
    {
        name: "Aari",
        type: "living",
        scope: "individual",
        iso6393: "aiw"
    },
    {
        name: "Aighon",
        type: "living",
        scope: "individual",
        iso6393: "aix"
    },
    {
        name: "Ali",
        type: "living",
        scope: "individual",
        iso6393: "aiy"
    },
    {
        name: "Aja (South Sudan)",
        type: "living",
        scope: "individual",
        iso6393: "aja"
    },
    {
        name: "Aja (Benin)",
        type: "living",
        scope: "individual",
        iso6393: "ajg"
    },
    {
        name: "Aji\xeb",
        type: "living",
        scope: "individual",
        iso6393: "aji"
    },
    {
        name: "Andajin",
        type: "living",
        scope: "individual",
        iso6393: "ajn"
    },
    {
        name: "South Levantine Arabic",
        type: "living",
        scope: "individual",
        iso6393: "ajp"
    },
    {
        name: "Judeo-Tunisian Arabic",
        type: "living",
        scope: "individual",
        iso6393: "ajt"
    },
    {
        name: "Judeo-Moroccan Arabic",
        type: "living",
        scope: "individual",
        iso6393: "aju"
    },
    {
        name: "Ajawa",
        type: "extinct",
        scope: "individual",
        iso6393: "ajw"
    },
    {
        name: "Amri Karbi",
        type: "living",
        scope: "individual",
        iso6393: "ajz"
    },
    {
        name: "Akan",
        type: "living",
        scope: "macrolanguage",
        iso6393: "aka",
        iso6392B: "aka",
        iso6392T: "aka",
        iso6391: "ak"
    },
    {
        name: "Batak Angkola",
        type: "living",
        scope: "individual",
        iso6393: "akb"
    },
    {
        name: "Mpur",
        type: "living",
        scope: "individual",
        iso6393: "akc"
    },
    {
        name: "Ukpet-Ehom",
        type: "living",
        scope: "individual",
        iso6393: "akd"
    },
    {
        name: "Akawaio",
        type: "living",
        scope: "individual",
        iso6393: "ake"
    },
    {
        name: "Akpa",
        type: "living",
        scope: "individual",
        iso6393: "akf"
    },
    {
        name: "Anakalangu",
        type: "living",
        scope: "individual",
        iso6393: "akg"
    },
    {
        name: "Angal Heneng",
        type: "living",
        scope: "individual",
        iso6393: "akh"
    },
    {
        name: "Aiome",
        type: "living",
        scope: "individual",
        iso6393: "aki"
    },
    {
        name: "Aka-Jeru",
        type: "extinct",
        scope: "individual",
        iso6393: "akj"
    },
    {
        name: "Akkadian",
        type: "ancient",
        scope: "individual",
        iso6393: "akk",
        iso6392B: "akk",
        iso6392T: "akk"
    },
    {
        name: "Aklanon",
        type: "living",
        scope: "individual",
        iso6393: "akl"
    },
    {
        name: "Aka-Bo",
        type: "extinct",
        scope: "individual",
        iso6393: "akm"
    },
    {
        name: "Akurio",
        type: "living",
        scope: "individual",
        iso6393: "ako"
    },
    {
        name: "Siwu",
        type: "living",
        scope: "individual",
        iso6393: "akp"
    },
    {
        name: "Ak",
        type: "living",
        scope: "individual",
        iso6393: "akq"
    },
    {
        name: "Araki",
        type: "living",
        scope: "individual",
        iso6393: "akr"
    },
    {
        name: "Akaselem",
        type: "living",
        scope: "individual",
        iso6393: "aks"
    },
    {
        name: "Akolet",
        type: "living",
        scope: "individual",
        iso6393: "akt"
    },
    {
        name: "Akum",
        type: "living",
        scope: "individual",
        iso6393: "aku"
    },
    {
        name: "Akhvakh",
        type: "living",
        scope: "individual",
        iso6393: "akv"
    },
    {
        name: "Akwa",
        type: "living",
        scope: "individual",
        iso6393: "akw"
    },
    {
        name: "Aka-Kede",
        type: "extinct",
        scope: "individual",
        iso6393: "akx"
    },
    {
        name: "Aka-Kol",
        type: "extinct",
        scope: "individual",
        iso6393: "aky"
    },
    {
        name: "Alabama",
        type: "living",
        scope: "individual",
        iso6393: "akz"
    },
    {
        name: "Alago",
        type: "living",
        scope: "individual",
        iso6393: "ala"
    },
    {
        name: "Qawasqar",
        type: "living",
        scope: "individual",
        iso6393: "alc"
    },
    {
        name: "Alladian",
        type: "living",
        scope: "individual",
        iso6393: "ald"
    },
    {
        name: "Aleut",
        type: "living",
        scope: "individual",
        iso6393: "ale",
        iso6392B: "ale",
        iso6392T: "ale"
    },
    {
        name: "Alege",
        type: "living",
        scope: "individual",
        iso6393: "alf"
    },
    {
        name: "Alawa",
        type: "living",
        scope: "individual",
        iso6393: "alh"
    },
    {
        name: "Amaimon",
        type: "living",
        scope: "individual",
        iso6393: "ali"
    },
    {
        name: "Alangan",
        type: "living",
        scope: "individual",
        iso6393: "alj"
    },
    {
        name: "Alak",
        type: "living",
        scope: "individual",
        iso6393: "alk"
    },
    {
        name: "Allar",
        type: "living",
        scope: "individual",
        iso6393: "all"
    },
    {
        name: "Amblong",
        type: "living",
        scope: "individual",
        iso6393: "alm"
    },
    {
        name: "Gheg Albanian",
        type: "living",
        scope: "individual",
        iso6393: "aln"
    },
    {
        name: "Larike-Wakasihu",
        type: "living",
        scope: "individual",
        iso6393: "alo"
    },
    {
        name: "Alune",
        type: "living",
        scope: "individual",
        iso6393: "alp"
    },
    {
        name: "Algonquin",
        type: "living",
        scope: "individual",
        iso6393: "alq"
    },
    {
        name: "Alutor",
        type: "living",
        scope: "individual",
        iso6393: "alr"
    },
    {
        name: "Tosk Albanian",
        type: "living",
        scope: "individual",
        iso6393: "als"
    },
    {
        name: "Southern Altai",
        type: "living",
        scope: "individual",
        iso6393: "alt",
        iso6392B: "alt",
        iso6392T: "alt"
    },
    {
        name: "'Are'are",
        type: "living",
        scope: "individual",
        iso6393: "alu"
    },
    {
        name: "Alaba-K’abeena",
        type: "living",
        scope: "individual",
        iso6393: "alw"
    },
    {
        name: "Amol",
        type: "living",
        scope: "individual",
        iso6393: "alx"
    },
    {
        name: "Alyawarr",
        type: "living",
        scope: "individual",
        iso6393: "aly"
    },
    {
        name: "Alur",
        type: "living",
        scope: "individual",
        iso6393: "alz"
    },
    {
        name: "Amanay\xe9",
        type: "extinct",
        scope: "individual",
        iso6393: "ama"
    },
    {
        name: "Ambo",
        type: "living",
        scope: "individual",
        iso6393: "amb"
    },
    {
        name: "Amahuaca",
        type: "living",
        scope: "individual",
        iso6393: "amc"
    },
    {
        name: "Yanesha'",
        type: "living",
        scope: "individual",
        iso6393: "ame"
    },
    {
        name: "Hamer-Banna",
        type: "living",
        scope: "individual",
        iso6393: "amf"
    },
    {
        name: "Amurdak",
        type: "living",
        scope: "individual",
        iso6393: "amg"
    },
    {
        name: "Amharic",
        type: "living",
        scope: "individual",
        iso6393: "amh",
        iso6392B: "amh",
        iso6392T: "amh",
        iso6391: "am"
    },
    {
        name: "Amis",
        type: "living",
        scope: "individual",
        iso6393: "ami"
    },
    {
        name: "Amdang",
        type: "living",
        scope: "individual",
        iso6393: "amj"
    },
    {
        name: "Ambai",
        type: "living",
        scope: "individual",
        iso6393: "amk"
    },
    {
        name: "War-Jaintia",
        type: "living",
        scope: "individual",
        iso6393: "aml"
    },
    {
        name: "Ama (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "amm"
    },
    {
        name: "Amanab",
        type: "living",
        scope: "individual",
        iso6393: "amn"
    },
    {
        name: "Amo",
        type: "living",
        scope: "individual",
        iso6393: "amo"
    },
    {
        name: "Alamblak",
        type: "living",
        scope: "individual",
        iso6393: "amp"
    },
    {
        name: "Amahai",
        type: "living",
        scope: "individual",
        iso6393: "amq"
    },
    {
        name: "Amarakaeri",
        type: "living",
        scope: "individual",
        iso6393: "amr"
    },
    {
        name: "Southern Amami-Oshima",
        type: "living",
        scope: "individual",
        iso6393: "ams"
    },
    {
        name: "Amto",
        type: "living",
        scope: "individual",
        iso6393: "amt"
    },
    {
        name: "Guerrero Amuzgo",
        type: "living",
        scope: "individual",
        iso6393: "amu"
    },
    {
        name: "Ambelau",
        type: "living",
        scope: "individual",
        iso6393: "amv"
    },
    {
        name: "Western Neo-Aramaic",
        type: "living",
        scope: "individual",
        iso6393: "amw"
    },
    {
        name: "Anmatyerre",
        type: "living",
        scope: "individual",
        iso6393: "amx"
    },
    {
        name: "Ami",
        type: "living",
        scope: "individual",
        iso6393: "amy"
    },
    {
        name: "Atampaya",
        type: "extinct",
        scope: "individual",
        iso6393: "amz"
    },
    {
        name: "Andaqui",
        type: "extinct",
        scope: "individual",
        iso6393: "ana"
    },
    {
        name: "Andoa",
        type: "extinct",
        scope: "individual",
        iso6393: "anb"
    },
    {
        name: "Ngas",
        type: "living",
        scope: "individual",
        iso6393: "anc"
    },
    {
        name: "Ansus",
        type: "living",
        scope: "individual",
        iso6393: "and"
    },
    {
        name: "X\xe2r\xe2c\xf9\xf9",
        type: "living",
        scope: "individual",
        iso6393: "ane"
    },
    {
        name: "Animere",
        type: "living",
        scope: "individual",
        iso6393: "anf"
    },
    {
        name: "Old English (ca. 450-1100)",
        type: "historical",
        scope: "individual",
        iso6393: "ang",
        iso6392B: "ang",
        iso6392T: "ang"
    },
    {
        name: "Nend",
        type: "living",
        scope: "individual",
        iso6393: "anh"
    },
    {
        name: "Andi",
        type: "living",
        scope: "individual",
        iso6393: "ani"
    },
    {
        name: "Anor",
        type: "living",
        scope: "individual",
        iso6393: "anj"
    },
    {
        name: "Goemai",
        type: "living",
        scope: "individual",
        iso6393: "ank"
    },
    {
        name: "Anu-Hkongso Chin",
        type: "living",
        scope: "individual",
        iso6393: "anl"
    },
    {
        name: "Anal",
        type: "living",
        scope: "individual",
        iso6393: "anm"
    },
    {
        name: "Obolo",
        type: "living",
        scope: "individual",
        iso6393: "ann"
    },
    {
        name: "Andoque",
        type: "living",
        scope: "individual",
        iso6393: "ano"
    },
    {
        name: "Angika",
        type: "living",
        scope: "individual",
        iso6393: "anp",
        iso6392B: "anp",
        iso6392T: "anp"
    },
    {
        name: "Jarawa (India)",
        type: "living",
        scope: "individual",
        iso6393: "anq"
    },
    {
        name: "Andh",
        type: "living",
        scope: "individual",
        iso6393: "anr"
    },
    {
        name: "Anserma",
        type: "extinct",
        scope: "individual",
        iso6393: "ans"
    },
    {
        name: "Antakarinya",
        type: "living",
        scope: "individual",
        iso6393: "ant"
    },
    {
        name: "Anuak",
        type: "living",
        scope: "individual",
        iso6393: "anu"
    },
    {
        name: "Denya",
        type: "living",
        scope: "individual",
        iso6393: "anv"
    },
    {
        name: "Anaang",
        type: "living",
        scope: "individual",
        iso6393: "anw"
    },
    {
        name: "Andra-Hus",
        type: "living",
        scope: "individual",
        iso6393: "anx"
    },
    {
        name: "Anyin",
        type: "living",
        scope: "individual",
        iso6393: "any"
    },
    {
        name: "Anem",
        type: "living",
        scope: "individual",
        iso6393: "anz"
    },
    {
        name: "Angolar",
        type: "living",
        scope: "individual",
        iso6393: "aoa"
    },
    {
        name: "Abom",
        type: "living",
        scope: "individual",
        iso6393: "aob"
    },
    {
        name: "Pemon",
        type: "living",
        scope: "individual",
        iso6393: "aoc"
    },
    {
        name: "Andarum",
        type: "living",
        scope: "individual",
        iso6393: "aod"
    },
    {
        name: "Angal Enen",
        type: "living",
        scope: "individual",
        iso6393: "aoe"
    },
    {
        name: "Bragat",
        type: "living",
        scope: "individual",
        iso6393: "aof"
    },
    {
        name: "Angoram",
        type: "living",
        scope: "individual",
        iso6393: "aog"
    },
    {
        name: "Anindilyakwa",
        type: "living",
        scope: "individual",
        iso6393: "aoi"
    },
    {
        name: "Mufian",
        type: "living",
        scope: "individual",
        iso6393: "aoj"
    },
    {
        name: "Arh\xf6",
        type: "living",
        scope: "individual",
        iso6393: "aok"
    },
    {
        name: "Alor",
        type: "living",
        scope: "individual",
        iso6393: "aol"
    },
    {
        name: "\xd6mie",
        type: "living",
        scope: "individual",
        iso6393: "aom"
    },
    {
        name: "Bumbita Arapesh",
        type: "living",
        scope: "individual",
        iso6393: "aon"
    },
    {
        name: "Aore",
        type: "extinct",
        scope: "individual",
        iso6393: "aor"
    },
    {
        name: "Taikat",
        type: "living",
        scope: "individual",
        iso6393: "aos"
    },
    {
        name: "Atong (India)",
        type: "living",
        scope: "individual",
        iso6393: "aot"
    },
    {
        name: "A'ou",
        type: "living",
        scope: "individual",
        iso6393: "aou"
    },
    {
        name: "Atorada",
        type: "living",
        scope: "individual",
        iso6393: "aox"
    },
    {
        name: "Uab Meto",
        type: "living",
        scope: "individual",
        iso6393: "aoz"
    },
    {
        name: "Sa'a",
        type: "living",
        scope: "individual",
        iso6393: "apb"
    },
    {
        name: "North Levantine Arabic",
        type: "living",
        scope: "individual",
        iso6393: "apc"
    },
    {
        name: "Sudanese Arabic",
        type: "living",
        scope: "individual",
        iso6393: "apd"
    },
    {
        name: "Bukiyip",
        type: "living",
        scope: "individual",
        iso6393: "ape"
    },
    {
        name: "Pahanan Agta",
        type: "living",
        scope: "individual",
        iso6393: "apf"
    },
    {
        name: "Ampanang",
        type: "living",
        scope: "individual",
        iso6393: "apg"
    },
    {
        name: "Athpariya",
        type: "living",
        scope: "individual",
        iso6393: "aph"
    },
    {
        name: "Apiak\xe1",
        type: "living",
        scope: "individual",
        iso6393: "api"
    },
    {
        name: "Jicarilla Apache",
        type: "living",
        scope: "individual",
        iso6393: "apj"
    },
    {
        name: "Kiowa Apache",
        type: "living",
        scope: "individual",
        iso6393: "apk"
    },
    {
        name: "Lipan Apache",
        type: "living",
        scope: "individual",
        iso6393: "apl"
    },
    {
        name: "Mescalero-Chiricahua Apache",
        type: "living",
        scope: "individual",
        iso6393: "apm"
    },
    {
        name: "Apinay\xe9",
        type: "living",
        scope: "individual",
        iso6393: "apn"
    },
    {
        name: "Ambul",
        type: "living",
        scope: "individual",
        iso6393: "apo"
    },
    {
        name: "Apma",
        type: "living",
        scope: "individual",
        iso6393: "app"
    },
    {
        name: "A-Pucikwar",
        type: "living",
        scope: "individual",
        iso6393: "apq"
    },
    {
        name: "Arop-Lokep",
        type: "living",
        scope: "individual",
        iso6393: "apr"
    },
    {
        name: "Arop-Sissano",
        type: "living",
        scope: "individual",
        iso6393: "aps"
    },
    {
        name: "Apatani",
        type: "living",
        scope: "individual",
        iso6393: "apt"
    },
    {
        name: "Apurin\xe3",
        type: "living",
        scope: "individual",
        iso6393: "apu"
    },
    {
        name: "Alapmunte",
        type: "extinct",
        scope: "individual",
        iso6393: "apv"
    },
    {
        name: "Western Apache",
        type: "living",
        scope: "individual",
        iso6393: "apw"
    },
    {
        name: "Aputai",
        type: "living",
        scope: "individual",
        iso6393: "apx"
    },
    {
        name: "Apala\xed",
        type: "living",
        scope: "individual",
        iso6393: "apy"
    },
    {
        name: "Safeyoka",
        type: "living",
        scope: "individual",
        iso6393: "apz"
    },
    {
        name: "Archi",
        type: "living",
        scope: "individual",
        iso6393: "aqc"
    },
    {
        name: "Ampari Dogon",
        type: "living",
        scope: "individual",
        iso6393: "aqd"
    },
    {
        name: "Arigidi",
        type: "living",
        scope: "individual",
        iso6393: "aqg"
    },
    {
        name: "Atohwaim",
        type: "living",
        scope: "individual",
        iso6393: "aqm"
    },
    {
        name: "Northern Alta",
        type: "living",
        scope: "individual",
        iso6393: "aqn"
    },
    {
        name: "Atakapa",
        type: "extinct",
        scope: "individual",
        iso6393: "aqp"
    },
    {
        name: "Arh\xe2",
        type: "living",
        scope: "individual",
        iso6393: "aqr"
    },
    {
        name: "Angait\xe9",
        type: "living",
        scope: "individual",
        iso6393: "aqt"
    },
    {
        name: "Akuntsu",
        type: "living",
        scope: "individual",
        iso6393: "aqz"
    },
    {
        name: "Arabic",
        type: "living",
        scope: "macrolanguage",
        iso6393: "ara",
        iso6392B: "ara",
        iso6392T: "ara",
        iso6391: "ar"
    },
    {
        name: "Standard Arabic",
        type: "living",
        scope: "individual",
        iso6393: "arb"
    },
    {
        name: "Official Aramaic (700-300 BCE)",
        type: "ancient",
        scope: "individual",
        iso6393: "arc",
        iso6392B: "arc",
        iso6392T: "arc"
    },
    {
        name: "Arabana",
        type: "extinct",
        scope: "individual",
        iso6393: "ard"
    },
    {
        name: "Western Arrarnta",
        type: "living",
        scope: "individual",
        iso6393: "are"
    },
    {
        name: "Aragonese",
        type: "living",
        scope: "individual",
        iso6393: "arg",
        iso6392B: "arg",
        iso6392T: "arg",
        iso6391: "an"
    },
    {
        name: "Arhuaco",
        type: "living",
        scope: "individual",
        iso6393: "arh"
    },
    {
        name: "Arikara",
        type: "living",
        scope: "individual",
        iso6393: "ari"
    },
    {
        name: "Arapaso",
        type: "extinct",
        scope: "individual",
        iso6393: "arj"
    },
    {
        name: "Arikap\xfa",
        type: "living",
        scope: "individual",
        iso6393: "ark"
    },
    {
        name: "Arabela",
        type: "living",
        scope: "individual",
        iso6393: "arl"
    },
    {
        name: "Mapudungun",
        type: "living",
        scope: "individual",
        iso6393: "arn",
        iso6392B: "arn",
        iso6392T: "arn"
    },
    {
        name: "Araona",
        type: "living",
        scope: "individual",
        iso6393: "aro"
    },
    {
        name: "Arapaho",
        type: "living",
        scope: "individual",
        iso6393: "arp",
        iso6392B: "arp",
        iso6392T: "arp"
    },
    {
        name: "Algerian Arabic",
        type: "living",
        scope: "individual",
        iso6393: "arq"
    },
    {
        name: "Karo (Brazil)",
        type: "living",
        scope: "individual",
        iso6393: "arr"
    },
    {
        name: "Najdi Arabic",
        type: "living",
        scope: "individual",
        iso6393: "ars"
    },
    {
        name: "Aru\xe1 (Amazonas State)",
        type: "extinct",
        scope: "individual",
        iso6393: "aru"
    },
    {
        name: "Arbore",
        type: "living",
        scope: "individual",
        iso6393: "arv"
    },
    {
        name: "Arawak",
        type: "living",
        scope: "individual",
        iso6393: "arw",
        iso6392B: "arw",
        iso6392T: "arw"
    },
    {
        name: "Aru\xe1 (Rodonia State)",
        type: "living",
        scope: "individual",
        iso6393: "arx"
    },
    {
        name: "Moroccan Arabic",
        type: "living",
        scope: "individual",
        iso6393: "ary"
    },
    {
        name: "Egyptian Arabic",
        type: "living",
        scope: "individual",
        iso6393: "arz"
    },
    {
        name: "Asu (Tanzania)",
        type: "living",
        scope: "individual",
        iso6393: "asa"
    },
    {
        name: "Assiniboine",
        type: "living",
        scope: "individual",
        iso6393: "asb"
    },
    {
        name: "Casuarina Coast Asmat",
        type: "living",
        scope: "individual",
        iso6393: "asc"
    },
    {
        name: "American Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "ase"
    },
    {
        name: "Auslan",
        type: "living",
        scope: "individual",
        iso6393: "asf"
    },
    {
        name: "Cishingini",
        type: "living",
        scope: "individual",
        iso6393: "asg"
    },
    {
        name: "Abishira",
        type: "extinct",
        scope: "individual",
        iso6393: "ash"
    },
    {
        name: "Buruwai",
        type: "living",
        scope: "individual",
        iso6393: "asi"
    },
    {
        name: "Sari",
        type: "living",
        scope: "individual",
        iso6393: "asj"
    },
    {
        name: "Ashkun",
        type: "living",
        scope: "individual",
        iso6393: "ask"
    },
    {
        name: "Asilulu",
        type: "living",
        scope: "individual",
        iso6393: "asl"
    },
    {
        name: "Assamese",
        type: "living",
        scope: "individual",
        iso6393: "asm",
        iso6392B: "asm",
        iso6392T: "asm",
        iso6391: "as"
    },
    {
        name: "Xing\xfa Asurin\xed",
        type: "living",
        scope: "individual",
        iso6393: "asn"
    },
    {
        name: "Dano",
        type: "living",
        scope: "individual",
        iso6393: "aso"
    },
    {
        name: "Algerian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "asp"
    },
    {
        name: "Austrian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "asq"
    },
    {
        name: "Asuri",
        type: "living",
        scope: "individual",
        iso6393: "asr"
    },
    {
        name: "Ipulo",
        type: "living",
        scope: "individual",
        iso6393: "ass"
    },
    {
        name: "Asturian",
        type: "living",
        scope: "individual",
        iso6393: "ast",
        iso6392B: "ast",
        iso6392T: "ast"
    },
    {
        name: "Tocantins Asurini",
        type: "living",
        scope: "individual",
        iso6393: "asu"
    },
    {
        name: "Asoa",
        type: "living",
        scope: "individual",
        iso6393: "asv"
    },
    {
        name: "Australian Aborigines Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "asw"
    },
    {
        name: "Muratayak",
        type: "living",
        scope: "individual",
        iso6393: "asx"
    },
    {
        name: "Yaosakor Asmat",
        type: "living",
        scope: "individual",
        iso6393: "asy"
    },
    {
        name: "As",
        type: "living",
        scope: "individual",
        iso6393: "asz"
    },
    {
        name: "Pele-Ata",
        type: "living",
        scope: "individual",
        iso6393: "ata"
    },
    {
        name: "Zaiwa",
        type: "living",
        scope: "individual",
        iso6393: "atb"
    },
    {
        name: "Atsahuaca",
        type: "extinct",
        scope: "individual",
        iso6393: "atc"
    },
    {
        name: "Ata Manobo",
        type: "living",
        scope: "individual",
        iso6393: "atd"
    },
    {
        name: "Atemble",
        type: "living",
        scope: "individual",
        iso6393: "ate"
    },
    {
        name: "Ivbie North-Okpela-Arhe",
        type: "living",
        scope: "individual",
        iso6393: "atg"
    },
    {
        name: "Atti\xe9",
        type: "living",
        scope: "individual",
        iso6393: "ati"
    },
    {
        name: "Atikamekw",
        type: "living",
        scope: "individual",
        iso6393: "atj"
    },
    {
        name: "Ati",
        type: "living",
        scope: "individual",
        iso6393: "atk"
    },
    {
        name: "Mt. Iraya Agta",
        type: "living",
        scope: "individual",
        iso6393: "atl"
    },
    {
        name: "Ata",
        type: "living",
        scope: "individual",
        iso6393: "atm"
    },
    {
        name: "Ashtiani",
        type: "living",
        scope: "individual",
        iso6393: "atn"
    },
    {
        name: "Atong (Cameroon)",
        type: "living",
        scope: "individual",
        iso6393: "ato"
    },
    {
        name: "Pudtol Atta",
        type: "living",
        scope: "individual",
        iso6393: "atp"
    },
    {
        name: "Aralle-Tabulahan",
        type: "living",
        scope: "individual",
        iso6393: "atq"
    },
    {
        name: "Waimiri-Atroari",
        type: "living",
        scope: "individual",
        iso6393: "atr"
    },
    {
        name: "Gros Ventre",
        type: "living",
        scope: "individual",
        iso6393: "ats"
    },
    {
        name: "Pamplona Atta",
        type: "living",
        scope: "individual",
        iso6393: "att"
    },
    {
        name: "Reel",
        type: "living",
        scope: "individual",
        iso6393: "atu"
    },
    {
        name: "Northern Altai",
        type: "living",
        scope: "individual",
        iso6393: "atv"
    },
    {
        name: "Atsugewi",
        type: "living",
        scope: "individual",
        iso6393: "atw"
    },
    {
        name: "Arutani",
        type: "living",
        scope: "individual",
        iso6393: "atx"
    },
    {
        name: "Aneityum",
        type: "living",
        scope: "individual",
        iso6393: "aty"
    },
    {
        name: "Arta",
        type: "living",
        scope: "individual",
        iso6393: "atz"
    },
    {
        name: "Asumboa",
        type: "living",
        scope: "individual",
        iso6393: "aua"
    },
    {
        name: "Alugu",
        type: "living",
        scope: "individual",
        iso6393: "aub"
    },
    {
        name: "Waorani",
        type: "living",
        scope: "individual",
        iso6393: "auc"
    },
    {
        name: "Anuta",
        type: "living",
        scope: "individual",
        iso6393: "aud"
    },
    {
        name: "Aguna",
        type: "living",
        scope: "individual",
        iso6393: "aug"
    },
    {
        name: "Aushi",
        type: "living",
        scope: "individual",
        iso6393: "auh"
    },
    {
        name: "Anuki",
        type: "living",
        scope: "individual",
        iso6393: "aui"
    },
    {
        name: "Awjilah",
        type: "living",
        scope: "individual",
        iso6393: "auj"
    },
    {
        name: "Heyo",
        type: "living",
        scope: "individual",
        iso6393: "auk"
    },
    {
        name: "Aulua",
        type: "living",
        scope: "individual",
        iso6393: "aul"
    },
    {
        name: "Asu (Nigeria)",
        type: "living",
        scope: "individual",
        iso6393: "aum"
    },
    {
        name: "Molmo One",
        type: "living",
        scope: "individual",
        iso6393: "aun"
    },
    {
        name: "Auyokawa",
        type: "extinct",
        scope: "individual",
        iso6393: "auo"
    },
    {
        name: "Makayam",
        type: "living",
        scope: "individual",
        iso6393: "aup"
    },
    {
        name: "Anus",
        type: "living",
        scope: "individual",
        iso6393: "auq"
    },
    {
        name: "Aruek",
        type: "living",
        scope: "individual",
        iso6393: "aur"
    },
    {
        name: "Austral",
        type: "living",
        scope: "individual",
        iso6393: "aut"
    },
    {
        name: "Auye",
        type: "living",
        scope: "individual",
        iso6393: "auu"
    },
    {
        name: "Awyi",
        type: "living",
        scope: "individual",
        iso6393: "auw"
    },
    {
        name: "Aur\xe1",
        type: "extinct",
        scope: "individual",
        iso6393: "aux"
    },
    {
        name: "Awiyaana",
        type: "living",
        scope: "individual",
        iso6393: "auy"
    },
    {
        name: "Uzbeki Arabic",
        type: "living",
        scope: "individual",
        iso6393: "auz"
    },
    {
        name: "Avaric",
        type: "living",
        scope: "individual",
        iso6393: "ava",
        iso6392B: "ava",
        iso6392T: "ava",
        iso6391: "av"
    },
    {
        name: "Avau",
        type: "living",
        scope: "individual",
        iso6393: "avb"
    },
    {
        name: "Alviri-Vidari",
        type: "living",
        scope: "individual",
        iso6393: "avd"
    },
    {
        name: "Avestan",
        type: "ancient",
        scope: "individual",
        iso6393: "ave",
        iso6392B: "ave",
        iso6392T: "ave",
        iso6391: "ae"
    },
    {
        name: "Avikam",
        type: "living",
        scope: "individual",
        iso6393: "avi"
    },
    {
        name: "Kotava",
        type: "constructed",
        scope: "individual",
        iso6393: "avk"
    },
    {
        name: "Eastern Egyptian Bedawi Arabic",
        type: "living",
        scope: "individual",
        iso6393: "avl"
    },
    {
        name: "Angkamuthi",
        type: "extinct",
        scope: "individual",
        iso6393: "avm"
    },
    {
        name: "Avatime",
        type: "living",
        scope: "individual",
        iso6393: "avn"
    },
    {
        name: "Agavotaguerra",
        type: "extinct",
        scope: "individual",
        iso6393: "avo"
    },
    {
        name: "Aushiri",
        type: "extinct",
        scope: "individual",
        iso6393: "avs"
    },
    {
        name: "Au",
        type: "living",
        scope: "individual",
        iso6393: "avt"
    },
    {
        name: "Avokaya",
        type: "living",
        scope: "individual",
        iso6393: "avu"
    },
    {
        name: "Av\xe1-Canoeiro",
        type: "living",
        scope: "individual",
        iso6393: "avv"
    },
    {
        name: "Awadhi",
        type: "living",
        scope: "individual",
        iso6393: "awa",
        iso6392B: "awa",
        iso6392T: "awa"
    },
    {
        name: "Awa (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "awb"
    },
    {
        name: "Cicipu",
        type: "living",
        scope: "individual",
        iso6393: "awc"
    },
    {
        name: "Awet\xed",
        type: "living",
        scope: "individual",
        iso6393: "awe"
    },
    {
        name: "Anguthimri",
        type: "extinct",
        scope: "individual",
        iso6393: "awg"
    },
    {
        name: "Awbono",
        type: "living",
        scope: "individual",
        iso6393: "awh"
    },
    {
        name: "Aekyom",
        type: "living",
        scope: "individual",
        iso6393: "awi"
    },
    {
        name: "Awabakal",
        type: "extinct",
        scope: "individual",
        iso6393: "awk"
    },
    {
        name: "Arawum",
        type: "living",
        scope: "individual",
        iso6393: "awm"
    },
    {
        name: "Awngi",
        type: "living",
        scope: "individual",
        iso6393: "awn"
    },
    {
        name: "Awak",
        type: "living",
        scope: "individual",
        iso6393: "awo"
    },
    {
        name: "Awera",
        type: "living",
        scope: "individual",
        iso6393: "awr"
    },
    {
        name: "South Awyu",
        type: "living",
        scope: "individual",
        iso6393: "aws"
    },
    {
        name: "Arawet\xe9",
        type: "living",
        scope: "individual",
        iso6393: "awt"
    },
    {
        name: "Central Awyu",
        type: "living",
        scope: "individual",
        iso6393: "awu"
    },
    {
        name: "Jair Awyu",
        type: "living",
        scope: "individual",
        iso6393: "awv"
    },
    {
        name: "Awun",
        type: "living",
        scope: "individual",
        iso6393: "aww"
    },
    {
        name: "Awara",
        type: "living",
        scope: "individual",
        iso6393: "awx"
    },
    {
        name: "Edera Awyu",
        type: "living",
        scope: "individual",
        iso6393: "awy"
    },
    {
        name: "Abipon",
        type: "extinct",
        scope: "individual",
        iso6393: "axb"
    },
    {
        name: "Ayerrerenge",
        type: "extinct",
        scope: "individual",
        iso6393: "axe"
    },
    {
        name: "Mato Grosso Ar\xe1ra",
        type: "extinct",
        scope: "individual",
        iso6393: "axg"
    },
    {
        name: "Yaka (Central African Republic)",
        type: "living",
        scope: "individual",
        iso6393: "axk"
    },
    {
        name: "Lower Southern Aranda",
        type: "extinct",
        scope: "individual",
        iso6393: "axl"
    },
    {
        name: "Middle Armenian",
        type: "historical",
        scope: "individual",
        iso6393: "axm"
    },
    {
        name: "X\xe2r\xe2gur\xe8",
        type: "living",
        scope: "individual",
        iso6393: "axx"
    },
    {
        name: "Awar",
        type: "living",
        scope: "individual",
        iso6393: "aya"
    },
    {
        name: "Ayizo Gbe",
        type: "living",
        scope: "individual",
        iso6393: "ayb"
    },
    {
        name: "Southern Aymara",
        type: "living",
        scope: "individual",
        iso6393: "ayc"
    },
    {
        name: "Ayabadhu",
        type: "extinct",
        scope: "individual",
        iso6393: "ayd"
    },
    {
        name: "Ayere",
        type: "living",
        scope: "individual",
        iso6393: "aye"
    },
    {
        name: "Ginyanga",
        type: "living",
        scope: "individual",
        iso6393: "ayg"
    },
    {
        name: "Hadrami Arabic",
        type: "living",
        scope: "individual",
        iso6393: "ayh"
    },
    {
        name: "Leyigha",
        type: "living",
        scope: "individual",
        iso6393: "ayi"
    },
    {
        name: "Akuku",
        type: "living",
        scope: "individual",
        iso6393: "ayk"
    },
    {
        name: "Libyan Arabic",
        type: "living",
        scope: "individual",
        iso6393: "ayl"
    },
    {
        name: "Aymara",
        type: "living",
        scope: "macrolanguage",
        iso6393: "aym",
        iso6392B: "aym",
        iso6392T: "aym",
        iso6391: "ay"
    },
    {
        name: "Sanaani Arabic",
        type: "living",
        scope: "individual",
        iso6393: "ayn"
    },
    {
        name: "Ayoreo",
        type: "living",
        scope: "individual",
        iso6393: "ayo"
    },
    {
        name: "North Mesopotamian Arabic",
        type: "living",
        scope: "individual",
        iso6393: "ayp"
    },
    {
        name: "Ayi (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "ayq"
    },
    {
        name: "Central Aymara",
        type: "living",
        scope: "individual",
        iso6393: "ayr"
    },
    {
        name: "Sorsogon Ayta",
        type: "living",
        scope: "individual",
        iso6393: "ays"
    },
    {
        name: "Magbukun Ayta",
        type: "living",
        scope: "individual",
        iso6393: "ayt"
    },
    {
        name: "Ayu",
        type: "living",
        scope: "individual",
        iso6393: "ayu"
    },
    {
        name: "Mai Brat",
        type: "living",
        scope: "individual",
        iso6393: "ayz"
    },
    {
        name: "Azha",
        type: "living",
        scope: "individual",
        iso6393: "aza"
    },
    {
        name: "South Azerbaijani",
        type: "living",
        scope: "individual",
        iso6393: "azb"
    },
    {
        name: "Eastern Durango Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "azd"
    },
    {
        name: "Azerbaijani",
        type: "living",
        scope: "macrolanguage",
        iso6393: "aze",
        iso6392B: "aze",
        iso6392T: "aze",
        iso6391: "az"
    },
    {
        name: "San Pedro Amuzgos Amuzgo",
        type: "living",
        scope: "individual",
        iso6393: "azg"
    },
    {
        name: "North Azerbaijani",
        type: "living",
        scope: "individual",
        iso6393: "azj"
    },
    {
        name: "Ipalapa Amuzgo",
        type: "living",
        scope: "individual",
        iso6393: "azm"
    },
    {
        name: "Western Durango Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "azn"
    },
    {
        name: "Awing",
        type: "living",
        scope: "individual",
        iso6393: "azo"
    },
    {
        name: "Faire Atta",
        type: "living",
        scope: "individual",
        iso6393: "azt"
    },
    {
        name: "Highland Puebla Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "azz"
    },
    {
        name: "Babatana",
        type: "living",
        scope: "individual",
        iso6393: "baa"
    },
    {
        name: "Bainouk-Gunyu\xf1o",
        type: "living",
        scope: "individual",
        iso6393: "bab"
    },
    {
        name: "Badui",
        type: "living",
        scope: "individual",
        iso6393: "bac"
    },
    {
        name: "Bar\xe9",
        type: "extinct",
        scope: "individual",
        iso6393: "bae"
    },
    {
        name: "Nubaca",
        type: "living",
        scope: "individual",
        iso6393: "baf"
    },
    {
        name: "Tuki",
        type: "living",
        scope: "individual",
        iso6393: "bag"
    },
    {
        name: "Bahamas Creole English",
        type: "living",
        scope: "individual",
        iso6393: "bah"
    },
    {
        name: "Barakai",
        type: "living",
        scope: "individual",
        iso6393: "baj"
    },
    {
        name: "Bashkir",
        type: "living",
        scope: "individual",
        iso6393: "bak",
        iso6392B: "bak",
        iso6392T: "bak",
        iso6391: "ba"
    },
    {
        name: "Baluchi",
        type: "living",
        scope: "macrolanguage",
        iso6393: "bal",
        iso6392B: "bal",
        iso6392T: "bal"
    },
    {
        name: "Bambara",
        type: "living",
        scope: "individual",
        iso6393: "bam",
        iso6392B: "bam",
        iso6392T: "bam",
        iso6391: "bm"
    },
    {
        name: "Balinese",
        type: "living",
        scope: "individual",
        iso6393: "ban",
        iso6392B: "ban",
        iso6392T: "ban"
    },
    {
        name: "Waimaha",
        type: "living",
        scope: "individual",
        iso6393: "bao"
    },
    {
        name: "Bantawa",
        type: "living",
        scope: "individual",
        iso6393: "bap"
    },
    {
        name: "Bavarian",
        type: "living",
        scope: "individual",
        iso6393: "bar"
    },
    {
        name: "Basa (Cameroon)",
        type: "living",
        scope: "individual",
        iso6393: "bas",
        iso6392B: "bas",
        iso6392T: "bas"
    },
    {
        name: "Bada (Nigeria)",
        type: "living",
        scope: "individual",
        iso6393: "bau"
    },
    {
        name: "Vengo",
        type: "living",
        scope: "individual",
        iso6393: "bav"
    },
    {
        name: "Bambili-Bambui",
        type: "living",
        scope: "individual",
        iso6393: "baw"
    },
    {
        name: "Bamun",
        type: "living",
        scope: "individual",
        iso6393: "bax"
    },
    {
        name: "Batuley",
        type: "living",
        scope: "individual",
        iso6393: "bay"
    },
    {
        name: "Baatonum",
        type: "living",
        scope: "individual",
        iso6393: "bba"
    },
    {
        name: "Barai",
        type: "living",
        scope: "individual",
        iso6393: "bbb"
    },
    {
        name: "Batak Toba",
        type: "living",
        scope: "individual",
        iso6393: "bbc"
    },
    {
        name: "Bau",
        type: "living",
        scope: "individual",
        iso6393: "bbd"
    },
    {
        name: "Bangba",
        type: "living",
        scope: "individual",
        iso6393: "bbe"
    },
    {
        name: "Baibai",
        type: "living",
        scope: "individual",
        iso6393: "bbf"
    },
    {
        name: "Barama",
        type: "living",
        scope: "individual",
        iso6393: "bbg"
    },
    {
        name: "Bugan",
        type: "living",
        scope: "individual",
        iso6393: "bbh"
    },
    {
        name: "Barombi",
        type: "living",
        scope: "individual",
        iso6393: "bbi"
    },
    {
        name: "Ghom\xe1l\xe1'",
        type: "living",
        scope: "individual",
        iso6393: "bbj"
    },
    {
        name: "Babanki",
        type: "living",
        scope: "individual",
        iso6393: "bbk"
    },
    {
        name: "Bats",
        type: "living",
        scope: "individual",
        iso6393: "bbl"
    },
    {
        name: "Babango",
        type: "living",
        scope: "individual",
        iso6393: "bbm"
    },
    {
        name: "Uneapa",
        type: "living",
        scope: "individual",
        iso6393: "bbn"
    },
    {
        name: "Northern Bobo Madar\xe9",
        type: "living",
        scope: "individual",
        iso6393: "bbo"
    },
    {
        name: "West Central Banda",
        type: "living",
        scope: "individual",
        iso6393: "bbp"
    },
    {
        name: "Bamali",
        type: "living",
        scope: "individual",
        iso6393: "bbq"
    },
    {
        name: "Girawa",
        type: "living",
        scope: "individual",
        iso6393: "bbr"
    },
    {
        name: "Bakpinka",
        type: "living",
        scope: "individual",
        iso6393: "bbs"
    },
    {
        name: "Mburku",
        type: "living",
        scope: "individual",
        iso6393: "bbt"
    },
    {
        name: "Kulung (Nigeria)",
        type: "living",
        scope: "individual",
        iso6393: "bbu"
    },
    {
        name: "Karnai",
        type: "living",
        scope: "individual",
        iso6393: "bbv"
    },
    {
        name: "Baba",
        type: "living",
        scope: "individual",
        iso6393: "bbw"
    },
    {
        name: "Bubia",
        type: "living",
        scope: "individual",
        iso6393: "bbx"
    },
    {
        name: "Befang",
        type: "living",
        scope: "individual",
        iso6393: "bby"
    },
    {
        name: "Central Bai",
        type: "living",
        scope: "individual",
        iso6393: "bca"
    },
    {
        name: "Bainouk-Samik",
        type: "living",
        scope: "individual",
        iso6393: "bcb"
    },
    {
        name: "Southern Balochi",
        type: "living",
        scope: "individual",
        iso6393: "bcc"
    },
    {
        name: "North Babar",
        type: "living",
        scope: "individual",
        iso6393: "bcd"
    },
    {
        name: "Bamenyam",
        type: "living",
        scope: "individual",
        iso6393: "bce"
    },
    {
        name: "Bamu",
        type: "living",
        scope: "individual",
        iso6393: "bcf"
    },
    {
        name: "Baga Pokur",
        type: "living",
        scope: "individual",
        iso6393: "bcg"
    },
    {
        name: "Bariai",
        type: "living",
        scope: "individual",
        iso6393: "bch"
    },
    {
        name: "Baoul\xe9",
        type: "living",
        scope: "individual",
        iso6393: "bci"
    },
    {
        name: "Bardi",
        type: "living",
        scope: "individual",
        iso6393: "bcj"
    },
    {
        name: "Bunuba",
        type: "living",
        scope: "individual",
        iso6393: "bck"
    },
    {
        name: "Central Bikol",
        type: "living",
        scope: "individual",
        iso6393: "bcl"
    },
    {
        name: "Bannoni",
        type: "living",
        scope: "individual",
        iso6393: "bcm"
    },
    {
        name: "Bali (Nigeria)",
        type: "living",
        scope: "individual",
        iso6393: "bcn"
    },
    {
        name: "Kaluli",
        type: "living",
        scope: "individual",
        iso6393: "bco"
    },
    {
        name: "Bali (Democratic Republic of Congo)",
        type: "living",
        scope: "individual",
        iso6393: "bcp"
    },
    {
        name: "Bench",
        type: "living",
        scope: "individual",
        iso6393: "bcq"
    },
    {
        name: "Babine",
        type: "living",
        scope: "individual",
        iso6393: "bcr"
    },
    {
        name: "Kohumono",
        type: "living",
        scope: "individual",
        iso6393: "bcs"
    },
    {
        name: "Bendi",
        type: "living",
        scope: "individual",
        iso6393: "bct"
    },
    {
        name: "Awad Bing",
        type: "living",
        scope: "individual",
        iso6393: "bcu"
    },
    {
        name: "Shoo-Minda-Nye",
        type: "living",
        scope: "individual",
        iso6393: "bcv"
    },
    {
        name: "Bana",
        type: "living",
        scope: "individual",
        iso6393: "bcw"
    },
    {
        name: "Bacama",
        type: "living",
        scope: "individual",
        iso6393: "bcy"
    },
    {
        name: "Bainouk-Gunyaamolo",
        type: "living",
        scope: "individual",
        iso6393: "bcz"
    },
    {
        name: "Bayot",
        type: "living",
        scope: "individual",
        iso6393: "bda"
    },
    {
        name: "Basap",
        type: "living",
        scope: "individual",
        iso6393: "bdb"
    },
    {
        name: "Ember\xe1-Baud\xf3",
        type: "living",
        scope: "individual",
        iso6393: "bdc"
    },
    {
        name: "Bunama",
        type: "living",
        scope: "individual",
        iso6393: "bdd"
    },
    {
        name: "Bade",
        type: "living",
        scope: "individual",
        iso6393: "bde"
    },
    {
        name: "Biage",
        type: "living",
        scope: "individual",
        iso6393: "bdf"
    },
    {
        name: "Bonggi",
        type: "living",
        scope: "individual",
        iso6393: "bdg"
    },
    {
        name: "Baka (South Sudan)",
        type: "living",
        scope: "individual",
        iso6393: "bdh"
    },
    {
        name: "Burun",
        type: "living",
        scope: "individual",
        iso6393: "bdi"
    },
    {
        name: "Bai (South Sudan)",
        type: "living",
        scope: "individual",
        iso6393: "bdj"
    },
    {
        name: "Budukh",
        type: "living",
        scope: "individual",
        iso6393: "bdk"
    },
    {
        name: "Indonesian Bajau",
        type: "living",
        scope: "individual",
        iso6393: "bdl"
    },
    {
        name: "Buduma",
        type: "living",
        scope: "individual",
        iso6393: "bdm"
    },
    {
        name: "Baldemu",
        type: "living",
        scope: "individual",
        iso6393: "bdn"
    },
    {
        name: "Morom",
        type: "living",
        scope: "individual",
        iso6393: "bdo"
    },
    {
        name: "Bende",
        type: "living",
        scope: "individual",
        iso6393: "bdp"
    },
    {
        name: "Bahnar",
        type: "living",
        scope: "individual",
        iso6393: "bdq"
    },
    {
        name: "West Coast Bajau",
        type: "living",
        scope: "individual",
        iso6393: "bdr"
    },
    {
        name: "Burunge",
        type: "living",
        scope: "individual",
        iso6393: "bds"
    },
    {
        name: "Bokoto",
        type: "living",
        scope: "individual",
        iso6393: "bdt"
    },
    {
        name: "Oroko",
        type: "living",
        scope: "individual",
        iso6393: "bdu"
    },
    {
        name: "Bodo Parja",
        type: "living",
        scope: "individual",
        iso6393: "bdv"
    },
    {
        name: "Baham",
        type: "living",
        scope: "individual",
        iso6393: "bdw"
    },
    {
        name: "Budong-Budong",
        type: "living",
        scope: "individual",
        iso6393: "bdx"
    },
    {
        name: "Bandjalang",
        type: "living",
        scope: "individual",
        iso6393: "bdy"
    },
    {
        name: "Badeshi",
        type: "living",
        scope: "individual",
        iso6393: "bdz"
    },
    {
        name: "Beaver",
        type: "living",
        scope: "individual",
        iso6393: "bea"
    },
    {
        name: "Bebele",
        type: "living",
        scope: "individual",
        iso6393: "beb"
    },
    {
        name: "Iceve-Maci",
        type: "living",
        scope: "individual",
        iso6393: "bec"
    },
    {
        name: "Bedoanas",
        type: "living",
        scope: "individual",
        iso6393: "bed"
    },
    {
        name: "Byangsi",
        type: "living",
        scope: "individual",
        iso6393: "bee"
    },
    {
        name: "Benabena",
        type: "living",
        scope: "individual",
        iso6393: "bef"
    },
    {
        name: "Belait",
        type: "living",
        scope: "individual",
        iso6393: "beg"
    },
    {
        name: "Biali",
        type: "living",
        scope: "individual",
        iso6393: "beh"
    },
    {
        name: "Bekati'",
        type: "living",
        scope: "individual",
        iso6393: "bei"
    },
    {
        name: "Beja",
        type: "living",
        scope: "individual",
        iso6393: "bej",
        iso6392B: "bej",
        iso6392T: "bej"
    },
    {
        name: "Bebeli",
        type: "living",
        scope: "individual",
        iso6393: "bek"
    },
    {
        name: "Belarusian",
        type: "living",
        scope: "individual",
        iso6393: "bel",
        iso6392B: "bel",
        iso6392T: "bel",
        iso6391: "be"
    },
    {
        name: "Bemba (Zambia)",
        type: "living",
        scope: "individual",
        iso6393: "bem",
        iso6392B: "bem",
        iso6392T: "bem"
    },
    {
        name: "Bengali",
        type: "living",
        scope: "individual",
        iso6393: "ben",
        iso6392B: "ben",
        iso6392T: "ben",
        iso6391: "bn"
    },
    {
        name: "Beami",
        type: "living",
        scope: "individual",
        iso6393: "beo"
    },
    {
        name: "Besoa",
        type: "living",
        scope: "individual",
        iso6393: "bep"
    },
    {
        name: "Beembe",
        type: "living",
        scope: "individual",
        iso6393: "beq"
    },
    {
        name: "Besme",
        type: "living",
        scope: "individual",
        iso6393: "bes"
    },
    {
        name: "Guiberoua B\xe9te",
        type: "living",
        scope: "individual",
        iso6393: "bet"
    },
    {
        name: "Blagar",
        type: "living",
        scope: "individual",
        iso6393: "beu"
    },
    {
        name: "Daloa B\xe9t\xe9",
        type: "living",
        scope: "individual",
        iso6393: "bev"
    },
    {
        name: "Betawi",
        type: "living",
        scope: "individual",
        iso6393: "bew"
    },
    {
        name: "Jur Modo",
        type: "living",
        scope: "individual",
        iso6393: "bex"
    },
    {
        name: "Beli (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "bey"
    },
    {
        name: "Bena (Tanzania)",
        type: "living",
        scope: "individual",
        iso6393: "bez"
    },
    {
        name: "Bari",
        type: "living",
        scope: "individual",
        iso6393: "bfa"
    },
    {
        name: "Pauri Bareli",
        type: "living",
        scope: "individual",
        iso6393: "bfb"
    },
    {
        name: "Panyi Bai",
        type: "living",
        scope: "individual",
        iso6393: "bfc"
    },
    {
        name: "Bafut",
        type: "living",
        scope: "individual",
        iso6393: "bfd"
    },
    {
        name: "Betaf",
        type: "living",
        scope: "individual",
        iso6393: "bfe"
    },
    {
        name: "Bofi",
        type: "living",
        scope: "individual",
        iso6393: "bff"
    },
    {
        name: "Busang Kayan",
        type: "living",
        scope: "individual",
        iso6393: "bfg"
    },
    {
        name: "Blafe",
        type: "living",
        scope: "individual",
        iso6393: "bfh"
    },
    {
        name: "British Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "bfi"
    },
    {
        name: "Bafanji",
        type: "living",
        scope: "individual",
        iso6393: "bfj"
    },
    {
        name: "Ban Khor Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "bfk"
    },
    {
        name: "Banda-Nd\xe9l\xe9",
        type: "living",
        scope: "individual",
        iso6393: "bfl"
    },
    {
        name: "Mmen",
        type: "living",
        scope: "individual",
        iso6393: "bfm"
    },
    {
        name: "Bunak",
        type: "living",
        scope: "individual",
        iso6393: "bfn"
    },
    {
        name: "Malba Birifor",
        type: "living",
        scope: "individual",
        iso6393: "bfo"
    },
    {
        name: "Beba",
        type: "living",
        scope: "individual",
        iso6393: "bfp"
    },
    {
        name: "Badaga",
        type: "living",
        scope: "individual",
        iso6393: "bfq"
    },
    {
        name: "Bazigar",
        type: "living",
        scope: "individual",
        iso6393: "bfr"
    },
    {
        name: "Southern Bai",
        type: "living",
        scope: "individual",
        iso6393: "bfs"
    },
    {
        name: "Balti",
        type: "living",
        scope: "individual",
        iso6393: "bft"
    },
    {
        name: "Gahri",
        type: "living",
        scope: "individual",
        iso6393: "bfu"
    },
    {
        name: "Bondo",
        type: "living",
        scope: "individual",
        iso6393: "bfw"
    },
    {
        name: "Bantayanon",
        type: "living",
        scope: "individual",
        iso6393: "bfx"
    },
    {
        name: "Bagheli",
        type: "living",
        scope: "individual",
        iso6393: "bfy"
    },
    {
        name: "Mahasu Pahari",
        type: "living",
        scope: "individual",
        iso6393: "bfz"
    },
    {
        name: "Gwamhi-Wuri",
        type: "living",
        scope: "individual",
        iso6393: "bga"
    },
    {
        name: "Bobongko",
        type: "living",
        scope: "individual",
        iso6393: "bgb"
    },
    {
        name: "Haryanvi",
        type: "living",
        scope: "individual",
        iso6393: "bgc"
    },
    {
        name: "Rathwi Bareli",
        type: "living",
        scope: "individual",
        iso6393: "bgd"
    },
    {
        name: "Bauria",
        type: "living",
        scope: "individual",
        iso6393: "bge"
    },
    {
        name: "Bangandu",
        type: "living",
        scope: "individual",
        iso6393: "bgf"
    },
    {
        name: "Bugun",
        type: "living",
        scope: "individual",
        iso6393: "bgg"
    },
    {
        name: "Giangan",
        type: "living",
        scope: "individual",
        iso6393: "bgi"
    },
    {
        name: "Bangolan",
        type: "living",
        scope: "individual",
        iso6393: "bgj"
    },
    {
        name: "Bit",
        type: "living",
        scope: "individual",
        iso6393: "bgk"
    },
    {
        name: "Bo (Laos)",
        type: "living",
        scope: "individual",
        iso6393: "bgl"
    },
    {
        name: "Western Balochi",
        type: "living",
        scope: "individual",
        iso6393: "bgn"
    },
    {
        name: "Baga Koga",
        type: "living",
        scope: "individual",
        iso6393: "bgo"
    },
    {
        name: "Eastern Balochi",
        type: "living",
        scope: "individual",
        iso6393: "bgp"
    },
    {
        name: "Bagri",
        type: "living",
        scope: "individual",
        iso6393: "bgq"
    },
    {
        name: "Bawm Chin",
        type: "living",
        scope: "individual",
        iso6393: "bgr"
    },
    {
        name: "Tagabawa",
        type: "living",
        scope: "individual",
        iso6393: "bgs"
    },
    {
        name: "Bughotu",
        type: "living",
        scope: "individual",
        iso6393: "bgt"
    },
    {
        name: "Mbongno",
        type: "living",
        scope: "individual",
        iso6393: "bgu"
    },
    {
        name: "Warkay-Bipim",
        type: "living",
        scope: "individual",
        iso6393: "bgv"
    },
    {
        name: "Bhatri",
        type: "living",
        scope: "individual",
        iso6393: "bgw"
    },
    {
        name: "Balkan Gagauz Turkish",
        type: "living",
        scope: "individual",
        iso6393: "bgx"
    },
    {
        name: "Benggoi",
        type: "living",
        scope: "individual",
        iso6393: "bgy"
    },
    {
        name: "Banggai",
        type: "living",
        scope: "individual",
        iso6393: "bgz"
    },
    {
        name: "Bharia",
        type: "living",
        scope: "individual",
        iso6393: "bha"
    },
    {
        name: "Bhili",
        type: "living",
        scope: "individual",
        iso6393: "bhb"
    },
    {
        name: "Biga",
        type: "living",
        scope: "individual",
        iso6393: "bhc"
    },
    {
        name: "Bhadrawahi",
        type: "living",
        scope: "individual",
        iso6393: "bhd"
    },
    {
        name: "Bhaya",
        type: "living",
        scope: "individual",
        iso6393: "bhe"
    },
    {
        name: "Odiai",
        type: "living",
        scope: "individual",
        iso6393: "bhf"
    },
    {
        name: "Binandere",
        type: "living",
        scope: "individual",
        iso6393: "bhg"
    },
    {
        name: "Bukharic",
        type: "living",
        scope: "individual",
        iso6393: "bhh"
    },
    {
        name: "Bhilali",
        type: "living",
        scope: "individual",
        iso6393: "bhi"
    },
    {
        name: "Bahing",
        type: "living",
        scope: "individual",
        iso6393: "bhj"
    },
    {
        name: "Bimin",
        type: "living",
        scope: "individual",
        iso6393: "bhl"
    },
    {
        name: "Bathari",
        type: "living",
        scope: "individual",
        iso6393: "bhm"
    },
    {
        name: "Bohtan Neo-Aramaic",
        type: "living",
        scope: "individual",
        iso6393: "bhn"
    },
    {
        name: "Bhojpuri",
        type: "living",
        scope: "individual",
        iso6393: "bho",
        iso6392B: "bho",
        iso6392T: "bho"
    },
    {
        name: "Bima",
        type: "living",
        scope: "individual",
        iso6393: "bhp"
    },
    {
        name: "Tukang Besi South",
        type: "living",
        scope: "individual",
        iso6393: "bhq"
    },
    {
        name: "Bara Malagasy",
        type: "living",
        scope: "individual",
        iso6393: "bhr"
    },
    {
        name: "Buwal",
        type: "living",
        scope: "individual",
        iso6393: "bhs"
    },
    {
        name: "Bhattiyali",
        type: "living",
        scope: "individual",
        iso6393: "bht"
    },
    {
        name: "Bhunjia",
        type: "living",
        scope: "individual",
        iso6393: "bhu"
    },
    {
        name: "Bahau",
        type: "living",
        scope: "individual",
        iso6393: "bhv"
    },
    {
        name: "Biak",
        type: "living",
        scope: "individual",
        iso6393: "bhw"
    },
    {
        name: "Bhalay",
        type: "living",
        scope: "individual",
        iso6393: "bhx"
    },
    {
        name: "Bhele",
        type: "living",
        scope: "individual",
        iso6393: "bhy"
    },
    {
        name: "Bada (Indonesia)",
        type: "living",
        scope: "individual",
        iso6393: "bhz"
    },
    {
        name: "Badimaya",
        type: "living",
        scope: "individual",
        iso6393: "bia"
    },
    {
        name: "Bissa",
        type: "living",
        scope: "individual",
        iso6393: "bib"
    },
    {
        name: "Bikaru",
        type: "living",
        scope: "individual",
        iso6393: "bic"
    },
    {
        name: "Bidiyo",
        type: "living",
        scope: "individual",
        iso6393: "bid"
    },
    {
        name: "Bepour",
        type: "living",
        scope: "individual",
        iso6393: "bie"
    },
    {
        name: "Biafada",
        type: "living",
        scope: "individual",
        iso6393: "bif"
    },
    {
        name: "Biangai",
        type: "living",
        scope: "individual",
        iso6393: "big"
    },
    {
        name: "Vaghat-Ya-Bijim-Legeri",
        type: "living",
        scope: "individual",
        iso6393: "bij"
    },
    {
        name: "Bikol",
        type: "living",
        scope: "macrolanguage",
        iso6393: "bik",
        iso6392B: "bik",
        iso6392T: "bik"
    },
    {
        name: "Bile",
        type: "living",
        scope: "individual",
        iso6393: "bil"
    },
    {
        name: "Bimoba",
        type: "living",
        scope: "individual",
        iso6393: "bim"
    },
    {
        name: "Bini",
        type: "living",
        scope: "individual",
        iso6393: "bin",
        iso6392B: "bin",
        iso6392T: "bin"
    },
    {
        name: "Nai",
        type: "living",
        scope: "individual",
        iso6393: "bio"
    },
    {
        name: "Bila",
        type: "living",
        scope: "individual",
        iso6393: "bip"
    },
    {
        name: "Bipi",
        type: "living",
        scope: "individual",
        iso6393: "biq"
    },
    {
        name: "Bisorio",
        type: "living",
        scope: "individual",
        iso6393: "bir"
    },
    {
        name: "Bislama",
        type: "living",
        scope: "individual",
        iso6393: "bis",
        iso6392B: "bis",
        iso6392T: "bis",
        iso6391: "bi"
    },
    {
        name: "Berinomo",
        type: "living",
        scope: "individual",
        iso6393: "bit"
    },
    {
        name: "Biete",
        type: "living",
        scope: "individual",
        iso6393: "biu"
    },
    {
        name: "Southern Birifor",
        type: "living",
        scope: "individual",
        iso6393: "biv"
    },
    {
        name: "Kol (Cameroon)",
        type: "living",
        scope: "individual",
        iso6393: "biw"
    },
    {
        name: "Bijori",
        type: "living",
        scope: "individual",
        iso6393: "bix"
    },
    {
        name: "Birhor",
        type: "living",
        scope: "individual",
        iso6393: "biy"
    },
    {
        name: "Baloi",
        type: "living",
        scope: "individual",
        iso6393: "biz"
    },
    {
        name: "Budza",
        type: "living",
        scope: "individual",
        iso6393: "bja"
    },
    {
        name: "Banggarla",
        type: "extinct",
        scope: "individual",
        iso6393: "bjb"
    },
    {
        name: "Bariji",
        type: "living",
        scope: "individual",
        iso6393: "bjc"
    },
    {
        name: "Biao-Jiao Mien",
        type: "living",
        scope: "individual",
        iso6393: "bje"
    },
    {
        name: "Barzani Jewish Neo-Aramaic",
        type: "living",
        scope: "individual",
        iso6393: "bjf"
    },
    {
        name: "Bidyogo",
        type: "living",
        scope: "individual",
        iso6393: "bjg"
    },
    {
        name: "Bahinemo",
        type: "living",
        scope: "individual",
        iso6393: "bjh"
    },
    {
        name: "Burji",
        type: "living",
        scope: "individual",
        iso6393: "bji"
    },
    {
        name: "Kanauji",
        type: "living",
        scope: "individual",
        iso6393: "bjj"
    },
    {
        name: "Barok",
        type: "living",
        scope: "individual",
        iso6393: "bjk"
    },
    {
        name: "Bulu (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "bjl"
    },
    {
        name: "Bajelani",
        type: "living",
        scope: "individual",
        iso6393: "bjm"
    },
    {
        name: "Banjar",
        type: "living",
        scope: "individual",
        iso6393: "bjn"
    },
    {
        name: "Mid-Southern Banda",
        type: "living",
        scope: "individual",
        iso6393: "bjo"
    },
    {
        name: "Fanamaket",
        type: "living",
        scope: "individual",
        iso6393: "bjp"
    },
    {
        name: "Binumarien",
        type: "living",
        scope: "individual",
        iso6393: "bjr"
    },
    {
        name: "Bajan",
        type: "living",
        scope: "individual",
        iso6393: "bjs"
    },
    {
        name: "Balanta-Ganja",
        type: "living",
        scope: "individual",
        iso6393: "bjt"
    },
    {
        name: "Busuu",
        type: "living",
        scope: "individual",
        iso6393: "bju"
    },
    {
        name: "Bedjond",
        type: "living",
        scope: "individual",
        iso6393: "bjv"
    },
    {
        name: "Bakw\xe9",
        type: "living",
        scope: "individual",
        iso6393: "bjw"
    },
    {
        name: "Banao Itneg",
        type: "living",
        scope: "individual",
        iso6393: "bjx"
    },
    {
        name: "Bayali",
        type: "extinct",
        scope: "individual",
        iso6393: "bjy"
    },
    {
        name: "Baruga",
        type: "living",
        scope: "individual",
        iso6393: "bjz"
    },
    {
        name: "Kyak",
        type: "living",
        scope: "individual",
        iso6393: "bka"
    },
    {
        name: "Baka (Cameroon)",
        type: "living",
        scope: "individual",
        iso6393: "bkc"
    },
    {
        name: "Binukid",
        type: "living",
        scope: "individual",
        iso6393: "bkd"
    },
    {
        name: "Beeke",
        type: "living",
        scope: "individual",
        iso6393: "bkf"
    },
    {
        name: "Buraka",
        type: "living",
        scope: "individual",
        iso6393: "bkg"
    },
    {
        name: "Bakoko",
        type: "living",
        scope: "individual",
        iso6393: "bkh"
    },
    {
        name: "Baki",
        type: "living",
        scope: "individual",
        iso6393: "bki"
    },
    {
        name: "Pande",
        type: "living",
        scope: "individual",
        iso6393: "bkj"
    },
    {
        name: "Brokskat",
        type: "living",
        scope: "individual",
        iso6393: "bkk"
    },
    {
        name: "Berik",
        type: "living",
        scope: "individual",
        iso6393: "bkl"
    },
    {
        name: "Kom (Cameroon)",
        type: "living",
        scope: "individual",
        iso6393: "bkm"
    },
    {
        name: "Bukitan",
        type: "living",
        scope: "individual",
        iso6393: "bkn"
    },
    {
        name: "Kwa'",
        type: "living",
        scope: "individual",
        iso6393: "bko"
    },
    {
        name: "Boko (Democratic Republic of Congo)",
        type: "living",
        scope: "individual",
        iso6393: "bkp"
    },
    {
        name: "Bakair\xed",
        type: "living",
        scope: "individual",
        iso6393: "bkq"
    },
    {
        name: "Bakumpai",
        type: "living",
        scope: "individual",
        iso6393: "bkr"
    },
    {
        name: "Northern Sorsoganon",
        type: "living",
        scope: "individual",
        iso6393: "bks"
    },
    {
        name: "Boloki",
        type: "living",
        scope: "individual",
        iso6393: "bkt"
    },
    {
        name: "Buhid",
        type: "living",
        scope: "individual",
        iso6393: "bku"
    },
    {
        name: "Bekwarra",
        type: "living",
        scope: "individual",
        iso6393: "bkv"
    },
    {
        name: "Bekwel",
        type: "living",
        scope: "individual",
        iso6393: "bkw"
    },
    {
        name: "Baikeno",
        type: "living",
        scope: "individual",
        iso6393: "bkx"
    },
    {
        name: "Bokyi",
        type: "living",
        scope: "individual",
        iso6393: "bky"
    },
    {
        name: "Bungku",
        type: "living",
        scope: "individual",
        iso6393: "bkz"
    },
    {
        name: "Siksika",
        type: "living",
        scope: "individual",
        iso6393: "bla",
        iso6392B: "bla",
        iso6392T: "bla"
    },
    {
        name: "Bilua",
        type: "living",
        scope: "individual",
        iso6393: "blb"
    },
    {
        name: "Bella Coola",
        type: "living",
        scope: "individual",
        iso6393: "blc"
    },
    {
        name: "Bolango",
        type: "living",
        scope: "individual",
        iso6393: "bld"
    },
    {
        name: "Balanta-Kentohe",
        type: "living",
        scope: "individual",
        iso6393: "ble"
    },
    {
        name: "Buol",
        type: "living",
        scope: "individual",
        iso6393: "blf"
    },
    {
        name: "Balau",
        type: "living",
        scope: "individual",
        iso6393: "blg"
    },
    {
        name: "Kuwaa",
        type: "living",
        scope: "individual",
        iso6393: "blh"
    },
    {
        name: "Bolia",
        type: "living",
        scope: "individual",
        iso6393: "bli"
    },
    {
        name: "Bolongan",
        type: "living",
        scope: "individual",
        iso6393: "blj"
    },
    {
        name: "Pa'o Karen",
        type: "living",
        scope: "individual",
        iso6393: "blk"
    },
    {
        name: "Biloxi",
        type: "extinct",
        scope: "individual",
        iso6393: "bll"
    },
    {
        name: "Beli (South Sudan)",
        type: "living",
        scope: "individual",
        iso6393: "blm"
    },
    {
        name: "Southern Catanduanes Bikol",
        type: "living",
        scope: "individual",
        iso6393: "bln"
    },
    {
        name: "Anii",
        type: "living",
        scope: "individual",
        iso6393: "blo"
    },
    {
        name: "Blablanga",
        type: "living",
        scope: "individual",
        iso6393: "blp"
    },
    {
        name: "Baluan-Pam",
        type: "living",
        scope: "individual",
        iso6393: "blq"
    },
    {
        name: "Blang",
        type: "living",
        scope: "individual",
        iso6393: "blr"
    },
    {
        name: "Balaesang",
        type: "living",
        scope: "individual",
        iso6393: "bls"
    },
    {
        name: "Tai Dam",
        type: "living",
        scope: "individual",
        iso6393: "blt"
    },
    {
        name: "Kibala",
        type: "living",
        scope: "individual",
        iso6393: "blv"
    },
    {
        name: "Balangao",
        type: "living",
        scope: "individual",
        iso6393: "blw"
    },
    {
        name: "Mag-Indi Ayta",
        type: "living",
        scope: "individual",
        iso6393: "blx"
    },
    {
        name: "Notre",
        type: "living",
        scope: "individual",
        iso6393: "bly"
    },
    {
        name: "Balantak",
        type: "living",
        scope: "individual",
        iso6393: "blz"
    },
    {
        name: "Lame",
        type: "living",
        scope: "individual",
        iso6393: "bma"
    },
    {
        name: "Bembe",
        type: "living",
        scope: "individual",
        iso6393: "bmb"
    },
    {
        name: "Biem",
        type: "living",
        scope: "individual",
        iso6393: "bmc"
    },
    {
        name: "Baga Manduri",
        type: "living",
        scope: "individual",
        iso6393: "bmd"
    },
    {
        name: "Limassa",
        type: "living",
        scope: "individual",
        iso6393: "bme"
    },
    {
        name: "Bom-Kim",
        type: "living",
        scope: "individual",
        iso6393: "bmf"
    },
    {
        name: "Bamwe",
        type: "living",
        scope: "individual",
        iso6393: "bmg"
    },
    {
        name: "Kein",
        type: "living",
        scope: "individual",
        iso6393: "bmh"
    },
    {
        name: "Bagirmi",
        type: "living",
        scope: "individual",
        iso6393: "bmi"
    },
    {
        name: "Bote-Majhi",
        type: "living",
        scope: "individual",
        iso6393: "bmj"
    },
    {
        name: "Ghayavi",
        type: "living",
        scope: "individual",
        iso6393: "bmk"
    },
    {
        name: "Bomboli",
        type: "living",
        scope: "individual",
        iso6393: "bml"
    },
    {
        name: "Northern Betsimisaraka Malagasy",
        type: "living",
        scope: "individual",
        iso6393: "bmm"
    },
    {
        name: "Bina (Papua New Guinea)",
        type: "extinct",
        scope: "individual",
        iso6393: "bmn"
    },
    {
        name: "Bambalang",
        type: "living",
        scope: "individual",
        iso6393: "bmo"
    },
    {
        name: "Bulgebi",
        type: "living",
        scope: "individual",
        iso6393: "bmp"
    },
    {
        name: "Bomu",
        type: "living",
        scope: "individual",
        iso6393: "bmq"
    },
    {
        name: "Muinane",
        type: "living",
        scope: "individual",
        iso6393: "bmr"
    },
    {
        name: "Bilma Kanuri",
        type: "living",
        scope: "individual",
        iso6393: "bms"
    },
    {
        name: "Biao Mon",
        type: "living",
        scope: "individual",
        iso6393: "bmt"
    },
    {
        name: "Somba-Siawari",
        type: "living",
        scope: "individual",
        iso6393: "bmu"
    },
    {
        name: "Bum",
        type: "living",
        scope: "individual",
        iso6393: "bmv"
    },
    {
        name: "Bomwali",
        type: "living",
        scope: "individual",
        iso6393: "bmw"
    },
    {
        name: "Baimak",
        type: "living",
        scope: "individual",
        iso6393: "bmx"
    },
    {
        name: "Baramu",
        type: "living",
        scope: "individual",
        iso6393: "bmz"
    },
    {
        name: "Bonerate",
        type: "living",
        scope: "individual",
        iso6393: "bna"
    },
    {
        name: "Bookan",
        type: "living",
        scope: "individual",
        iso6393: "bnb"
    },
    {
        name: "Bontok",
        type: "living",
        scope: "macrolanguage",
        iso6393: "bnc"
    },
    {
        name: "Banda (Indonesia)",
        type: "living",
        scope: "individual",
        iso6393: "bnd"
    },
    {
        name: "Bintauna",
        type: "living",
        scope: "individual",
        iso6393: "bne"
    },
    {
        name: "Masiwang",
        type: "living",
        scope: "individual",
        iso6393: "bnf"
    },
    {
        name: "Benga",
        type: "living",
        scope: "individual",
        iso6393: "bng"
    },
    {
        name: "Bangi",
        type: "living",
        scope: "individual",
        iso6393: "bni"
    },
    {
        name: "Eastern Tawbuid",
        type: "living",
        scope: "individual",
        iso6393: "bnj"
    },
    {
        name: "Bierebo",
        type: "living",
        scope: "individual",
        iso6393: "bnk"
    },
    {
        name: "Boon",
        type: "living",
        scope: "individual",
        iso6393: "bnl"
    },
    {
        name: "Batanga",
        type: "living",
        scope: "individual",
        iso6393: "bnm"
    },
    {
        name: "Bunun",
        type: "living",
        scope: "individual",
        iso6393: "bnn"
    },
    {
        name: "Bantoanon",
        type: "living",
        scope: "individual",
        iso6393: "bno"
    },
    {
        name: "Bola",
        type: "living",
        scope: "individual",
        iso6393: "bnp"
    },
    {
        name: "Bantik",
        type: "living",
        scope: "individual",
        iso6393: "bnq"
    },
    {
        name: "Butmas-Tur",
        type: "living",
        scope: "individual",
        iso6393: "bnr"
    },
    {
        name: "Bundeli",
        type: "living",
        scope: "individual",
        iso6393: "bns"
    },
    {
        name: "Bentong",
        type: "living",
        scope: "individual",
        iso6393: "bnu"
    },
    {
        name: "Bonerif",
        type: "living",
        scope: "individual",
        iso6393: "bnv"
    },
    {
        name: "Bisis",
        type: "living",
        scope: "individual",
        iso6393: "bnw"
    },
    {
        name: "Bangubangu",
        type: "living",
        scope: "individual",
        iso6393: "bnx"
    },
    {
        name: "Bintulu",
        type: "living",
        scope: "individual",
        iso6393: "bny"
    },
    {
        name: "Beezen",
        type: "living",
        scope: "individual",
        iso6393: "bnz"
    },
    {
        name: "Bora",
        type: "living",
        scope: "individual",
        iso6393: "boa"
    },
    {
        name: "Aweer",
        type: "living",
        scope: "individual",
        iso6393: "bob"
    },
    {
        name: "Tibetan",
        type: "living",
        scope: "individual",
        iso6393: "bod",
        iso6392B: "tib",
        iso6392T: "bod",
        iso6391: "bo"
    },
    {
        name: "Mundabli",
        type: "living",
        scope: "individual",
        iso6393: "boe"
    },
    {
        name: "Bolon",
        type: "living",
        scope: "individual",
        iso6393: "bof"
    },
    {
        name: "Bamako Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "bog"
    },
    {
        name: "Boma",
        type: "living",
        scope: "individual",
        iso6393: "boh"
    },
    {
        name: "Barbare\xf1o",
        type: "extinct",
        scope: "individual",
        iso6393: "boi"
    },
    {
        name: "Anjam",
        type: "living",
        scope: "individual",
        iso6393: "boj"
    },
    {
        name: "Bonjo",
        type: "living",
        scope: "individual",
        iso6393: "bok"
    },
    {
        name: "Bole",
        type: "living",
        scope: "individual",
        iso6393: "bol"
    },
    {
        name: "Berom",
        type: "living",
        scope: "individual",
        iso6393: "bom"
    },
    {
        name: "Bine",
        type: "living",
        scope: "individual",
        iso6393: "bon"
    },
    {
        name: "Tiemac\xe8w\xe8 Bozo",
        type: "living",
        scope: "individual",
        iso6393: "boo"
    },
    {
        name: "Bonkiman",
        type: "living",
        scope: "individual",
        iso6393: "bop"
    },
    {
        name: "Bogaya",
        type: "living",
        scope: "individual",
        iso6393: "boq"
    },
    {
        name: "Bor\xf4ro",
        type: "living",
        scope: "individual",
        iso6393: "bor"
    },
    {
        name: "Bosnian",
        type: "living",
        scope: "individual",
        iso6393: "bos",
        iso6392B: "bos",
        iso6392T: "bos",
        iso6391: "bs"
    },
    {
        name: "Bongo",
        type: "living",
        scope: "individual",
        iso6393: "bot"
    },
    {
        name: "Bondei",
        type: "living",
        scope: "individual",
        iso6393: "bou"
    },
    {
        name: "Tuwuli",
        type: "living",
        scope: "individual",
        iso6393: "bov"
    },
    {
        name: "Rema",
        type: "extinct",
        scope: "individual",
        iso6393: "bow"
    },
    {
        name: "Buamu",
        type: "living",
        scope: "individual",
        iso6393: "box"
    },
    {
        name: "Bodo (Central African Republic)",
        type: "living",
        scope: "individual",
        iso6393: "boy"
    },
    {
        name: "Ti\xe9yaxo Bozo",
        type: "living",
        scope: "individual",
        iso6393: "boz"
    },
    {
        name: "Daakaka",
        type: "living",
        scope: "individual",
        iso6393: "bpa"
    },
    {
        name: "Banda-Banda",
        type: "living",
        scope: "individual",
        iso6393: "bpd"
    },
    {
        name: "Bonggo",
        type: "living",
        scope: "individual",
        iso6393: "bpg"
    },
    {
        name: "Botlikh",
        type: "living",
        scope: "individual",
        iso6393: "bph"
    },
    {
        name: "Bagupi",
        type: "living",
        scope: "individual",
        iso6393: "bpi"
    },
    {
        name: "Binji",
        type: "living",
        scope: "individual",
        iso6393: "bpj"
    },
    {
        name: "Orowe",
        type: "living",
        scope: "individual",
        iso6393: "bpk"
    },
    {
        name: "Broome Pearling Lugger Pidgin",
        type: "living",
        scope: "individual",
        iso6393: "bpl"
    },
    {
        name: "Biyom",
        type: "living",
        scope: "individual",
        iso6393: "bpm"
    },
    {
        name: "Dzao Min",
        type: "living",
        scope: "individual",
        iso6393: "bpn"
    },
    {
        name: "Anasi",
        type: "living",
        scope: "individual",
        iso6393: "bpo"
    },
    {
        name: "Kaure",
        type: "living",
        scope: "individual",
        iso6393: "bpp"
    },
    {
        name: "Banda Malay",
        type: "living",
        scope: "individual",
        iso6393: "bpq"
    },
    {
        name: "Koronadal Blaan",
        type: "living",
        scope: "individual",
        iso6393: "bpr"
    },
    {
        name: "Sarangani Blaan",
        type: "living",
        scope: "individual",
        iso6393: "bps"
    },
    {
        name: "Barrow Point",
        type: "extinct",
        scope: "individual",
        iso6393: "bpt"
    },
    {
        name: "Bongu",
        type: "living",
        scope: "individual",
        iso6393: "bpu"
    },
    {
        name: "Bian Marind",
        type: "living",
        scope: "individual",
        iso6393: "bpv"
    },
    {
        name: "Bo (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "bpw"
    },
    {
        name: "Palya Bareli",
        type: "living",
        scope: "individual",
        iso6393: "bpx"
    },
    {
        name: "Bishnupriya",
        type: "living",
        scope: "individual",
        iso6393: "bpy"
    },
    {
        name: "Bilba",
        type: "living",
        scope: "individual",
        iso6393: "bpz"
    },
    {
        name: "Tchumbuli",
        type: "living",
        scope: "individual",
        iso6393: "bqa"
    },
    {
        name: "Bagusa",
        type: "living",
        scope: "individual",
        iso6393: "bqb"
    },
    {
        name: "Boko (Benin)",
        type: "living",
        scope: "individual",
        iso6393: "bqc"
    },
    {
        name: "Bung",
        type: "living",
        scope: "individual",
        iso6393: "bqd"
    },
    {
        name: "Baga Kaloum",
        type: "extinct",
        scope: "individual",
        iso6393: "bqf"
    },
    {
        name: "Bago-Kusuntu",
        type: "living",
        scope: "individual",
        iso6393: "bqg"
    },
    {
        name: "Baima",
        type: "living",
        scope: "individual",
        iso6393: "bqh"
    },
    {
        name: "Bakhtiari",
        type: "living",
        scope: "individual",
        iso6393: "bqi"
    },
    {
        name: "Bandial",
        type: "living",
        scope: "individual",
        iso6393: "bqj"
    },
    {
        name: "Banda-Mbr\xe8s",
        type: "living",
        scope: "individual",
        iso6393: "bqk"
    },
    {
        name: "Bilakura",
        type: "living",
        scope: "individual",
        iso6393: "bql"
    },
    {
        name: "Wumboko",
        type: "living",
        scope: "individual",
        iso6393: "bqm"
    },
    {
        name: "Bulgarian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "bqn"
    },
    {
        name: "Balo",
        type: "living",
        scope: "individual",
        iso6393: "bqo"
    },
    {
        name: "Busa",
        type: "living",
        scope: "individual",
        iso6393: "bqp"
    },
    {
        name: "Biritai",
        type: "living",
        scope: "individual",
        iso6393: "bqq"
    },
    {
        name: "Burusu",
        type: "living",
        scope: "individual",
        iso6393: "bqr"
    },
    {
        name: "Bosngun",
        type: "living",
        scope: "individual",
        iso6393: "bqs"
    },
    {
        name: "Bamukumbit",
        type: "living",
        scope: "individual",
        iso6393: "bqt"
    },
    {
        name: "Boguru",
        type: "living",
        scope: "individual",
        iso6393: "bqu"
    },
    {
        name: "Koro Wachi",
        type: "living",
        scope: "individual",
        iso6393: "bqv"
    },
    {
        name: "Buru (Nigeria)",
        type: "living",
        scope: "individual",
        iso6393: "bqw"
    },
    {
        name: "Baangi",
        type: "living",
        scope: "individual",
        iso6393: "bqx"
    },
    {
        name: "Bengkala Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "bqy"
    },
    {
        name: "Bakaka",
        type: "living",
        scope: "individual",
        iso6393: "bqz"
    },
    {
        name: "Braj",
        type: "living",
        scope: "individual",
        iso6393: "bra",
        iso6392B: "bra",
        iso6392T: "bra"
    },
    {
        name: "Lave",
        type: "living",
        scope: "individual",
        iso6393: "brb"
    },
    {
        name: "Berbice Creole Dutch",
        type: "extinct",
        scope: "individual",
        iso6393: "brc"
    },
    {
        name: "Baraamu",
        type: "living",
        scope: "individual",
        iso6393: "brd"
    },
    {
        name: "Breton",
        type: "living",
        scope: "individual",
        iso6393: "bre",
        iso6392B: "bre",
        iso6392T: "bre",
        iso6391: "br"
    },
    {
        name: "Bira",
        type: "living",
        scope: "individual",
        iso6393: "brf"
    },
    {
        name: "Baure",
        type: "living",
        scope: "individual",
        iso6393: "brg"
    },
    {
        name: "Brahui",
        type: "living",
        scope: "individual",
        iso6393: "brh"
    },
    {
        name: "Mokpwe",
        type: "living",
        scope: "individual",
        iso6393: "bri"
    },
    {
        name: "Bieria",
        type: "living",
        scope: "individual",
        iso6393: "brj"
    },
    {
        name: "Birked",
        type: "extinct",
        scope: "individual",
        iso6393: "brk"
    },
    {
        name: "Birwa",
        type: "living",
        scope: "individual",
        iso6393: "brl"
    },
    {
        name: "Barambu",
        type: "living",
        scope: "individual",
        iso6393: "brm"
    },
    {
        name: "Boruca",
        type: "living",
        scope: "individual",
        iso6393: "brn"
    },
    {
        name: "Brokkat",
        type: "living",
        scope: "individual",
        iso6393: "bro"
    },
    {
        name: "Barapasi",
        type: "living",
        scope: "individual",
        iso6393: "brp"
    },
    {
        name: "Breri",
        type: "living",
        scope: "individual",
        iso6393: "brq"
    },
    {
        name: "Birao",
        type: "living",
        scope: "individual",
        iso6393: "brr"
    },
    {
        name: "Baras",
        type: "living",
        scope: "individual",
        iso6393: "brs"
    },
    {
        name: "Bitare",
        type: "living",
        scope: "individual",
        iso6393: "brt"
    },
    {
        name: "Eastern Bru",
        type: "living",
        scope: "individual",
        iso6393: "bru"
    },
    {
        name: "Western Bru",
        type: "living",
        scope: "individual",
        iso6393: "brv"
    },
    {
        name: "Bellari",
        type: "living",
        scope: "individual",
        iso6393: "brw"
    },
    {
        name: "Bodo (India)",
        type: "living",
        scope: "individual",
        iso6393: "brx"
    },
    {
        name: "Burui",
        type: "living",
        scope: "individual",
        iso6393: "bry"
    },
    {
        name: "Bilbil",
        type: "living",
        scope: "individual",
        iso6393: "brz"
    },
    {
        name: "Abinomn",
        type: "living",
        scope: "individual",
        iso6393: "bsa"
    },
    {
        name: "Brunei Bisaya",
        type: "living",
        scope: "individual",
        iso6393: "bsb"
    },
    {
        name: "Bassari",
        type: "living",
        scope: "individual",
        iso6393: "bsc"
    },
    {
        name: "Wushi",
        type: "living",
        scope: "individual",
        iso6393: "bse"
    },
    {
        name: "Bauchi",
        type: "living",
        scope: "individual",
        iso6393: "bsf"
    },
    {
        name: "Bashkardi",
        type: "living",
        scope: "individual",
        iso6393: "bsg"
    },
    {
        name: "Kati",
        type: "living",
        scope: "individual",
        iso6393: "bsh"
    },
    {
        name: "Bassossi",
        type: "living",
        scope: "individual",
        iso6393: "bsi"
    },
    {
        name: "Bangwinji",
        type: "living",
        scope: "individual",
        iso6393: "bsj"
    },
    {
        name: "Burushaski",
        type: "living",
        scope: "individual",
        iso6393: "bsk"
    },
    {
        name: "Basa-Gumna",
        type: "extinct",
        scope: "individual",
        iso6393: "bsl"
    },
    {
        name: "Busami",
        type: "living",
        scope: "individual",
        iso6393: "bsm"
    },
    {
        name: "Barasana-Eduria",
        type: "living",
        scope: "individual",
        iso6393: "bsn"
    },
    {
        name: "Buso",
        type: "living",
        scope: "individual",
        iso6393: "bso"
    },
    {
        name: "Baga Sitemu",
        type: "living",
        scope: "individual",
        iso6393: "bsp"
    },
    {
        name: "Bassa",
        type: "living",
        scope: "individual",
        iso6393: "bsq"
    },
    {
        name: "Bassa-Kontagora",
        type: "living",
        scope: "individual",
        iso6393: "bsr"
    },
    {
        name: "Akoose",
        type: "living",
        scope: "individual",
        iso6393: "bss"
    },
    {
        name: "Basketo",
        type: "living",
        scope: "individual",
        iso6393: "bst"
    },
    {
        name: "Bahonsuai",
        type: "living",
        scope: "individual",
        iso6393: "bsu"
    },
    {
        name: "Baga Soban\xe9",
        type: "extinct",
        scope: "individual",
        iso6393: "bsv"
    },
    {
        name: "Baiso",
        type: "living",
        scope: "individual",
        iso6393: "bsw"
    },
    {
        name: "Yangkam",
        type: "living",
        scope: "individual",
        iso6393: "bsx"
    },
    {
        name: "Sabah Bisaya",
        type: "living",
        scope: "individual",
        iso6393: "bsy"
    },
    {
        name: "Bata",
        type: "living",
        scope: "individual",
        iso6393: "bta"
    },
    {
        name: "Bati (Cameroon)",
        type: "living",
        scope: "individual",
        iso6393: "btc"
    },
    {
        name: "Batak Dairi",
        type: "living",
        scope: "individual",
        iso6393: "btd"
    },
    {
        name: "Gamo-Ningi",
        type: "extinct",
        scope: "individual",
        iso6393: "bte"
    },
    {
        name: "Birgit",
        type: "living",
        scope: "individual",
        iso6393: "btf"
    },
    {
        name: "Gagnoa B\xe9t\xe9",
        type: "living",
        scope: "individual",
        iso6393: "btg"
    },
    {
        name: "Biatah Bidayuh",
        type: "living",
        scope: "individual",
        iso6393: "bth"
    },
    {
        name: "Burate",
        type: "living",
        scope: "individual",
        iso6393: "bti"
    },
    {
        name: "Bacanese Malay",
        type: "living",
        scope: "individual",
        iso6393: "btj"
    },
    {
        name: "Batak Mandailing",
        type: "living",
        scope: "individual",
        iso6393: "btm"
    },
    {
        name: "Ratagnon",
        type: "living",
        scope: "individual",
        iso6393: "btn"
    },
    {
        name: "Rinconada Bikol",
        type: "living",
        scope: "individual",
        iso6393: "bto"
    },
    {
        name: "Budibud",
        type: "living",
        scope: "individual",
        iso6393: "btp"
    },
    {
        name: "Batek",
        type: "living",
        scope: "individual",
        iso6393: "btq"
    },
    {
        name: "Baetora",
        type: "living",
        scope: "individual",
        iso6393: "btr"
    },
    {
        name: "Batak Simalungun",
        type: "living",
        scope: "individual",
        iso6393: "bts"
    },
    {
        name: "Bete-Bendi",
        type: "living",
        scope: "individual",
        iso6393: "btt"
    },
    {
        name: "Batu",
        type: "living",
        scope: "individual",
        iso6393: "btu"
    },
    {
        name: "Bateri",
        type: "living",
        scope: "individual",
        iso6393: "btv"
    },
    {
        name: "Butuanon",
        type: "living",
        scope: "individual",
        iso6393: "btw"
    },
    {
        name: "Batak Karo",
        type: "living",
        scope: "individual",
        iso6393: "btx"
    },
    {
        name: "Bobot",
        type: "living",
        scope: "individual",
        iso6393: "bty"
    },
    {
        name: "Batak Alas-Kluet",
        type: "living",
        scope: "individual",
        iso6393: "btz"
    },
    {
        name: "Buriat",
        type: "living",
        scope: "macrolanguage",
        iso6393: "bua",
        iso6392B: "bua",
        iso6392T: "bua"
    },
    {
        name: "Bua",
        type: "living",
        scope: "individual",
        iso6393: "bub"
    },
    {
        name: "Bushi",
        type: "living",
        scope: "individual",
        iso6393: "buc"
    },
    {
        name: "Ntcham",
        type: "living",
        scope: "individual",
        iso6393: "bud"
    },
    {
        name: "Beothuk",
        type: "extinct",
        scope: "individual",
        iso6393: "bue"
    },
    {
        name: "Bushoong",
        type: "living",
        scope: "individual",
        iso6393: "buf"
    },
    {
        name: "Buginese",
        type: "living",
        scope: "individual",
        iso6393: "bug",
        iso6392B: "bug",
        iso6392T: "bug"
    },
    {
        name: "Younuo Bunu",
        type: "living",
        scope: "individual",
        iso6393: "buh"
    },
    {
        name: "Bongili",
        type: "living",
        scope: "individual",
        iso6393: "bui"
    },
    {
        name: "Basa-Gurmana",
        type: "living",
        scope: "individual",
        iso6393: "buj"
    },
    {
        name: "Bugawac",
        type: "living",
        scope: "individual",
        iso6393: "buk"
    },
    {
        name: "Bulgarian",
        type: "living",
        scope: "individual",
        iso6393: "bul",
        iso6392B: "bul",
        iso6392T: "bul",
        iso6391: "bg"
    },
    {
        name: "Bulu (Cameroon)",
        type: "living",
        scope: "individual",
        iso6393: "bum"
    },
    {
        name: "Sherbro",
        type: "living",
        scope: "individual",
        iso6393: "bun"
    },
    {
        name: "Terei",
        type: "living",
        scope: "individual",
        iso6393: "buo"
    },
    {
        name: "Busoa",
        type: "living",
        scope: "individual",
        iso6393: "bup"
    },
    {
        name: "Brem",
        type: "living",
        scope: "individual",
        iso6393: "buq"
    },
    {
        name: "Bokobaru",
        type: "living",
        scope: "individual",
        iso6393: "bus"
    },
    {
        name: "Bungain",
        type: "living",
        scope: "individual",
        iso6393: "but"
    },
    {
        name: "Budu",
        type: "living",
        scope: "individual",
        iso6393: "buu"
    },
    {
        name: "Bun",
        type: "living",
        scope: "individual",
        iso6393: "buv"
    },
    {
        name: "Bubi",
        type: "living",
        scope: "individual",
        iso6393: "buw"
    },
    {
        name: "Boghom",
        type: "living",
        scope: "individual",
        iso6393: "bux"
    },
    {
        name: "Bullom So",
        type: "living",
        scope: "individual",
        iso6393: "buy"
    },
    {
        name: "Bukwen",
        type: "living",
        scope: "individual",
        iso6393: "buz"
    },
    {
        name: "Barein",
        type: "living",
        scope: "individual",
        iso6393: "bva"
    },
    {
        name: "Bube",
        type: "living",
        scope: "individual",
        iso6393: "bvb"
    },
    {
        name: "Baelelea",
        type: "living",
        scope: "individual",
        iso6393: "bvc"
    },
    {
        name: "Baeggu",
        type: "living",
        scope: "individual",
        iso6393: "bvd"
    },
    {
        name: "Berau Malay",
        type: "living",
        scope: "individual",
        iso6393: "bve"
    },
    {
        name: "Boor",
        type: "living",
        scope: "individual",
        iso6393: "bvf"
    },
    {
        name: "Bonkeng",
        type: "living",
        scope: "individual",
        iso6393: "bvg"
    },
    {
        name: "Bure",
        type: "living",
        scope: "individual",
        iso6393: "bvh"
    },
    {
        name: "Belanda Viri",
        type: "living",
        scope: "individual",
        iso6393: "bvi"
    },
    {
        name: "Baan",
        type: "living",
        scope: "individual",
        iso6393: "bvj"
    },
    {
        name: "Bukat",
        type: "living",
        scope: "individual",
        iso6393: "bvk"
    },
    {
        name: "Bolivian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "bvl"
    },
    {
        name: "Bamunka",
        type: "living",
        scope: "individual",
        iso6393: "bvm"
    },
    {
        name: "Buna",
        type: "living",
        scope: "individual",
        iso6393: "bvn"
    },
    {
        name: "Bolgo",
        type: "living",
        scope: "individual",
        iso6393: "bvo"
    },
    {
        name: "Bumang",
        type: "living",
        scope: "individual",
        iso6393: "bvp"
    },
    {
        name: "Birri",
        type: "living",
        scope: "individual",
        iso6393: "bvq"
    },
    {
        name: "Burarra",
        type: "living",
        scope: "individual",
        iso6393: "bvr"
    },
    {
        name: "Bati (Indonesia)",
        type: "living",
        scope: "individual",
        iso6393: "bvt"
    },
    {
        name: "Bukit Malay",
        type: "living",
        scope: "individual",
        iso6393: "bvu"
    },
    {
        name: "Baniva",
        type: "extinct",
        scope: "individual",
        iso6393: "bvv"
    },
    {
        name: "Boga",
        type: "living",
        scope: "individual",
        iso6393: "bvw"
    },
    {
        name: "Dibole",
        type: "living",
        scope: "individual",
        iso6393: "bvx"
    },
    {
        name: "Baybayanon",
        type: "living",
        scope: "individual",
        iso6393: "bvy"
    },
    {
        name: "Bauzi",
        type: "living",
        scope: "individual",
        iso6393: "bvz"
    },
    {
        name: "Bwatoo",
        type: "living",
        scope: "individual",
        iso6393: "bwa"
    },
    {
        name: "Namosi-Naitasiri-Serua",
        type: "living",
        scope: "individual",
        iso6393: "bwb"
    },
    {
        name: "Bwile",
        type: "living",
        scope: "individual",
        iso6393: "bwc"
    },
    {
        name: "Bwaidoka",
        type: "living",
        scope: "individual",
        iso6393: "bwd"
    },
    {
        name: "Bwe Karen",
        type: "living",
        scope: "individual",
        iso6393: "bwe"
    },
    {
        name: "Boselewa",
        type: "living",
        scope: "individual",
        iso6393: "bwf"
    },
    {
        name: "Barwe",
        type: "living",
        scope: "individual",
        iso6393: "bwg"
    },
    {
        name: "Bishuo",
        type: "living",
        scope: "individual",
        iso6393: "bwh"
    },
    {
        name: "Baniwa",
        type: "living",
        scope: "individual",
        iso6393: "bwi"
    },
    {
        name: "L\xe1\xe1 L\xe1\xe1 Bwamu",
        type: "living",
        scope: "individual",
        iso6393: "bwj"
    },
    {
        name: "Bauwaki",
        type: "living",
        scope: "individual",
        iso6393: "bwk"
    },
    {
        name: "Bwela",
        type: "living",
        scope: "individual",
        iso6393: "bwl"
    },
    {
        name: "Biwat",
        type: "living",
        scope: "individual",
        iso6393: "bwm"
    },
    {
        name: "Wunai Bunu",
        type: "living",
        scope: "individual",
        iso6393: "bwn"
    },
    {
        name: "Boro (Ethiopia)",
        type: "living",
        scope: "individual",
        iso6393: "bwo"
    },
    {
        name: "Mandobo Bawah",
        type: "living",
        scope: "individual",
        iso6393: "bwp"
    },
    {
        name: "Southern Bobo Madar\xe9",
        type: "living",
        scope: "individual",
        iso6393: "bwq"
    },
    {
        name: "Bura-Pabir",
        type: "living",
        scope: "individual",
        iso6393: "bwr"
    },
    {
        name: "Bomboma",
        type: "living",
        scope: "individual",
        iso6393: "bws"
    },
    {
        name: "Bafaw-Balong",
        type: "living",
        scope: "individual",
        iso6393: "bwt"
    },
    {
        name: "Buli (Ghana)",
        type: "living",
        scope: "individual",
        iso6393: "bwu"
    },
    {
        name: "Bwa",
        type: "living",
        scope: "individual",
        iso6393: "bww"
    },
    {
        name: "Bu-Nao Bunu",
        type: "living",
        scope: "individual",
        iso6393: "bwx"
    },
    {
        name: "Cwi Bwamu",
        type: "living",
        scope: "individual",
        iso6393: "bwy"
    },
    {
        name: "Bwisi",
        type: "living",
        scope: "individual",
        iso6393: "bwz"
    },
    {
        name: "Tairaha",
        type: "living",
        scope: "individual",
        iso6393: "bxa"
    },
    {
        name: "Belanda Bor",
        type: "living",
        scope: "individual",
        iso6393: "bxb"
    },
    {
        name: "Molengue",
        type: "living",
        scope: "individual",
        iso6393: "bxc"
    },
    {
        name: "Pela",
        type: "living",
        scope: "individual",
        iso6393: "bxd"
    },
    {
        name: "Birale",
        type: "living",
        scope: "individual",
        iso6393: "bxe"
    },
    {
        name: "Bilur",
        type: "living",
        scope: "individual",
        iso6393: "bxf"
    },
    {
        name: "Bangala",
        type: "living",
        scope: "individual",
        iso6393: "bxg"
    },
    {
        name: "Buhutu",
        type: "living",
        scope: "individual",
        iso6393: "bxh"
    },
    {
        name: "Pirlatapa",
        type: "extinct",
        scope: "individual",
        iso6393: "bxi"
    },
    {
        name: "Bayungu",
        type: "living",
        scope: "individual",
        iso6393: "bxj"
    },
    {
        name: "Bukusu",
        type: "living",
        scope: "individual",
        iso6393: "bxk"
    },
    {
        name: "Jalkunan",
        type: "living",
        scope: "individual",
        iso6393: "bxl"
    },
    {
        name: "Mongolia Buriat",
        type: "living",
        scope: "individual",
        iso6393: "bxm"
    },
    {
        name: "Burduna",
        type: "living",
        scope: "individual",
        iso6393: "bxn"
    },
    {
        name: "Barikanchi",
        type: "living",
        scope: "individual",
        iso6393: "bxo"
    },
    {
        name: "Bebil",
        type: "living",
        scope: "individual",
        iso6393: "bxp"
    },
    {
        name: "Beele",
        type: "living",
        scope: "individual",
        iso6393: "bxq"
    },
    {
        name: "Russia Buriat",
        type: "living",
        scope: "individual",
        iso6393: "bxr"
    },
    {
        name: "Busam",
        type: "living",
        scope: "individual",
        iso6393: "bxs"
    },
    {
        name: "China Buriat",
        type: "living",
        scope: "individual",
        iso6393: "bxu"
    },
    {
        name: "Berakou",
        type: "living",
        scope: "individual",
        iso6393: "bxv"
    },
    {
        name: "Bankagooma",
        type: "living",
        scope: "individual",
        iso6393: "bxw"
    },
    {
        name: "Binahari",
        type: "living",
        scope: "individual",
        iso6393: "bxz"
    },
    {
        name: "Batak",
        type: "living",
        scope: "individual",
        iso6393: "bya"
    },
    {
        name: "Bikya",
        type: "living",
        scope: "individual",
        iso6393: "byb"
    },
    {
        name: "Ubaghara",
        type: "living",
        scope: "individual",
        iso6393: "byc"
    },
    {
        name: "Benyadu'",
        type: "living",
        scope: "individual",
        iso6393: "byd"
    },
    {
        name: "Pouye",
        type: "living",
        scope: "individual",
        iso6393: "bye"
    },
    {
        name: "Bete",
        type: "living",
        scope: "individual",
        iso6393: "byf"
    },
    {
        name: "Baygo",
        type: "extinct",
        scope: "individual",
        iso6393: "byg"
    },
    {
        name: "Bhujel",
        type: "living",
        scope: "individual",
        iso6393: "byh"
    },
    {
        name: "Buyu",
        type: "living",
        scope: "individual",
        iso6393: "byi"
    },
    {
        name: "Bina (Nigeria)",
        type: "living",
        scope: "individual",
        iso6393: "byj"
    },
    {
        name: "Biao",
        type: "living",
        scope: "individual",
        iso6393: "byk"
    },
    {
        name: "Bayono",
        type: "living",
        scope: "individual",
        iso6393: "byl"
    },
    {
        name: "Bidjara",
        type: "living",
        scope: "individual",
        iso6393: "bym"
    },
    {
        name: "Bilin",
        type: "living",
        scope: "individual",
        iso6393: "byn",
        iso6392B: "byn",
        iso6392T: "byn"
    },
    {
        name: "Biyo",
        type: "living",
        scope: "individual",
        iso6393: "byo"
    },
    {
        name: "Bumaji",
        type: "living",
        scope: "individual",
        iso6393: "byp"
    },
    {
        name: "Basay",
        type: "extinct",
        scope: "individual",
        iso6393: "byq"
    },
    {
        name: "Baruya",
        type: "living",
        scope: "individual",
        iso6393: "byr"
    },
    {
        name: "Burak",
        type: "living",
        scope: "individual",
        iso6393: "bys"
    },
    {
        name: "Berti",
        type: "extinct",
        scope: "individual",
        iso6393: "byt"
    },
    {
        name: "Medumba",
        type: "living",
        scope: "individual",
        iso6393: "byv"
    },
    {
        name: "Belhariya",
        type: "living",
        scope: "individual",
        iso6393: "byw"
    },
    {
        name: "Qaqet",
        type: "living",
        scope: "individual",
        iso6393: "byx"
    },
    {
        name: "Banaro",
        type: "living",
        scope: "individual",
        iso6393: "byz"
    },
    {
        name: "Bandi",
        type: "living",
        scope: "individual",
        iso6393: "bza"
    },
    {
        name: "Andio",
        type: "living",
        scope: "individual",
        iso6393: "bzb"
    },
    {
        name: "Southern Betsimisaraka Malagasy",
        type: "living",
        scope: "individual",
        iso6393: "bzc"
    },
    {
        name: "Bribri",
        type: "living",
        scope: "individual",
        iso6393: "bzd"
    },
    {
        name: "Jenaama Bozo",
        type: "living",
        scope: "individual",
        iso6393: "bze"
    },
    {
        name: "Boikin",
        type: "living",
        scope: "individual",
        iso6393: "bzf"
    },
    {
        name: "Babuza",
        type: "living",
        scope: "individual",
        iso6393: "bzg"
    },
    {
        name: "Mapos Buang",
        type: "living",
        scope: "individual",
        iso6393: "bzh"
    },
    {
        name: "Bisu",
        type: "living",
        scope: "individual",
        iso6393: "bzi"
    },
    {
        name: "Belize Kriol English",
        type: "living",
        scope: "individual",
        iso6393: "bzj"
    },
    {
        name: "Nicaragua Creole English",
        type: "living",
        scope: "individual",
        iso6393: "bzk"
    },
    {
        name: "Boano (Sulawesi)",
        type: "living",
        scope: "individual",
        iso6393: "bzl"
    },
    {
        name: "Bolondo",
        type: "living",
        scope: "individual",
        iso6393: "bzm"
    },
    {
        name: "Boano (Maluku)",
        type: "living",
        scope: "individual",
        iso6393: "bzn"
    },
    {
        name: "Bozaba",
        type: "living",
        scope: "individual",
        iso6393: "bzo"
    },
    {
        name: "Kemberano",
        type: "living",
        scope: "individual",
        iso6393: "bzp"
    },
    {
        name: "Buli (Indonesia)",
        type: "living",
        scope: "individual",
        iso6393: "bzq"
    },
    {
        name: "Biri",
        type: "extinct",
        scope: "individual",
        iso6393: "bzr"
    },
    {
        name: "Brazilian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "bzs"
    },
    {
        name: "Brithenig",
        type: "constructed",
        scope: "individual",
        iso6393: "bzt"
    },
    {
        name: "Burmeso",
        type: "living",
        scope: "individual",
        iso6393: "bzu"
    },
    {
        name: "Naami",
        type: "living",
        scope: "individual",
        iso6393: "bzv"
    },
    {
        name: "Basa (Nigeria)",
        type: "living",
        scope: "individual",
        iso6393: "bzw"
    },
    {
        name: "Kɛlɛngaxo Bozo",
        type: "living",
        scope: "individual",
        iso6393: "bzx"
    },
    {
        name: "Obanliku",
        type: "living",
        scope: "individual",
        iso6393: "bzy"
    },
    {
        name: "Evant",
        type: "living",
        scope: "individual",
        iso6393: "bzz"
    },
    {
        name: "Chort\xed",
        type: "living",
        scope: "individual",
        iso6393: "caa"
    },
    {
        name: "Garifuna",
        type: "living",
        scope: "individual",
        iso6393: "cab"
    },
    {
        name: "Chuj",
        type: "living",
        scope: "individual",
        iso6393: "cac"
    },
    {
        name: "Caddo",
        type: "living",
        scope: "individual",
        iso6393: "cad",
        iso6392B: "cad",
        iso6392T: "cad"
    },
    {
        name: "Lehar",
        type: "living",
        scope: "individual",
        iso6393: "cae"
    },
    {
        name: "Southern Carrier",
        type: "living",
        scope: "individual",
        iso6393: "caf"
    },
    {
        name: "Nivacl\xe9",
        type: "living",
        scope: "individual",
        iso6393: "cag"
    },
    {
        name: "Cahuarano",
        type: "living",
        scope: "individual",
        iso6393: "cah"
    },
    {
        name: "Chan\xe9",
        type: "extinct",
        scope: "individual",
        iso6393: "caj"
    },
    {
        name: "Kaqchikel",
        type: "living",
        scope: "individual",
        iso6393: "cak"
    },
    {
        name: "Carolinian",
        type: "living",
        scope: "individual",
        iso6393: "cal"
    },
    {
        name: "Cemuh\xee",
        type: "living",
        scope: "individual",
        iso6393: "cam"
    },
    {
        name: "Chambri",
        type: "living",
        scope: "individual",
        iso6393: "can"
    },
    {
        name: "Ch\xe1cobo",
        type: "living",
        scope: "individual",
        iso6393: "cao"
    },
    {
        name: "Chipaya",
        type: "living",
        scope: "individual",
        iso6393: "cap"
    },
    {
        name: "Car Nicobarese",
        type: "living",
        scope: "individual",
        iso6393: "caq"
    },
    {
        name: "Galibi Carib",
        type: "living",
        scope: "individual",
        iso6393: "car",
        iso6392B: "car",
        iso6392T: "car"
    },
    {
        name: "Tsiman\xe9",
        type: "living",
        scope: "individual",
        iso6393: "cas"
    },
    {
        name: "Catalan",
        type: "living",
        scope: "individual",
        iso6393: "cat",
        iso6392B: "cat",
        iso6392T: "cat",
        iso6391: "ca"
    },
    {
        name: "Cavine\xf1a",
        type: "living",
        scope: "individual",
        iso6393: "cav"
    },
    {
        name: "Callawalla",
        type: "living",
        scope: "individual",
        iso6393: "caw"
    },
    {
        name: "Chiquitano",
        type: "living",
        scope: "individual",
        iso6393: "cax"
    },
    {
        name: "Cayuga",
        type: "living",
        scope: "individual",
        iso6393: "cay"
    },
    {
        name: "Canichana",
        type: "extinct",
        scope: "individual",
        iso6393: "caz"
    },
    {
        name: "Cabiyar\xed",
        type: "living",
        scope: "individual",
        iso6393: "cbb"
    },
    {
        name: "Carapana",
        type: "living",
        scope: "individual",
        iso6393: "cbc"
    },
    {
        name: "Carijona",
        type: "living",
        scope: "individual",
        iso6393: "cbd"
    },
    {
        name: "Chimila",
        type: "living",
        scope: "individual",
        iso6393: "cbg"
    },
    {
        name: "Chachi",
        type: "living",
        scope: "individual",
        iso6393: "cbi"
    },
    {
        name: "Ede Cabe",
        type: "living",
        scope: "individual",
        iso6393: "cbj"
    },
    {
        name: "Chavacano",
        type: "living",
        scope: "individual",
        iso6393: "cbk"
    },
    {
        name: "Bualkhaw Chin",
        type: "living",
        scope: "individual",
        iso6393: "cbl"
    },
    {
        name: "Nyahkur",
        type: "living",
        scope: "individual",
        iso6393: "cbn"
    },
    {
        name: "Izora",
        type: "living",
        scope: "individual",
        iso6393: "cbo"
    },
    {
        name: "Tsucuba",
        type: "living",
        scope: "individual",
        iso6393: "cbq"
    },
    {
        name: "Cashibo-Cacataibo",
        type: "living",
        scope: "individual",
        iso6393: "cbr"
    },
    {
        name: "Cashinahua",
        type: "living",
        scope: "individual",
        iso6393: "cbs"
    },
    {
        name: "Chayahuita",
        type: "living",
        scope: "individual",
        iso6393: "cbt"
    },
    {
        name: "Candoshi-Shapra",
        type: "living",
        scope: "individual",
        iso6393: "cbu"
    },
    {
        name: "Cacua",
        type: "living",
        scope: "individual",
        iso6393: "cbv"
    },
    {
        name: "Kinabalian",
        type: "living",
        scope: "individual",
        iso6393: "cbw"
    },
    {
        name: "Carabayo",
        type: "living",
        scope: "individual",
        iso6393: "cby"
    },
    {
        name: "Chamicuro",
        type: "living",
        scope: "individual",
        iso6393: "ccc"
    },
    {
        name: "Cafundo Creole",
        type: "living",
        scope: "individual",
        iso6393: "ccd"
    },
    {
        name: "Chopi",
        type: "living",
        scope: "individual",
        iso6393: "cce"
    },
    {
        name: "Samba Daka",
        type: "living",
        scope: "individual",
        iso6393: "ccg"
    },
    {
        name: "Atsam",
        type: "living",
        scope: "individual",
        iso6393: "cch"
    },
    {
        name: "Kasanga",
        type: "living",
        scope: "individual",
        iso6393: "ccj"
    },
    {
        name: "Cutchi-Swahili",
        type: "living",
        scope: "individual",
        iso6393: "ccl"
    },
    {
        name: "Malaccan Creole Malay",
        type: "living",
        scope: "individual",
        iso6393: "ccm"
    },
    {
        name: "Comaltepec Chinantec",
        type: "living",
        scope: "individual",
        iso6393: "cco"
    },
    {
        name: "Chakma",
        type: "living",
        scope: "individual",
        iso6393: "ccp"
    },
    {
        name: "Cacaopera",
        type: "extinct",
        scope: "individual",
        iso6393: "ccr"
    },
    {
        name: "Choni",
        type: "living",
        scope: "individual",
        iso6393: "cda"
    },
    {
        name: "Chenchu",
        type: "living",
        scope: "individual",
        iso6393: "cde"
    },
    {
        name: "Chiru",
        type: "living",
        scope: "individual",
        iso6393: "cdf"
    },
    {
        name: "Chambeali",
        type: "living",
        scope: "individual",
        iso6393: "cdh"
    },
    {
        name: "Chodri",
        type: "living",
        scope: "individual",
        iso6393: "cdi"
    },
    {
        name: "Churahi",
        type: "living",
        scope: "individual",
        iso6393: "cdj"
    },
    {
        name: "Chepang",
        type: "living",
        scope: "individual",
        iso6393: "cdm"
    },
    {
        name: "Chaudangsi",
        type: "living",
        scope: "individual",
        iso6393: "cdn"
    },
    {
        name: "Min Dong Chinese",
        type: "living",
        scope: "individual",
        iso6393: "cdo"
    },
    {
        name: "Cinda-Regi-Tiyal",
        type: "living",
        scope: "individual",
        iso6393: "cdr"
    },
    {
        name: "Chadian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "cds"
    },
    {
        name: "Chadong",
        type: "living",
        scope: "individual",
        iso6393: "cdy"
    },
    {
        name: "Koda",
        type: "living",
        scope: "individual",
        iso6393: "cdz"
    },
    {
        name: "Lower Chehalis",
        type: "extinct",
        scope: "individual",
        iso6393: "cea"
    },
    {
        name: "Cebuano",
        type: "living",
        scope: "individual",
        iso6393: "ceb",
        iso6392B: "ceb",
        iso6392T: "ceb"
    },
    {
        name: "Chamacoco",
        type: "living",
        scope: "individual",
        iso6393: "ceg"
    },
    {
        name: "Eastern Khumi Chin",
        type: "living",
        scope: "individual",
        iso6393: "cek"
    },
    {
        name: "Cen",
        type: "living",
        scope: "individual",
        iso6393: "cen"
    },
    {
        name: "Czech",
        type: "living",
        scope: "individual",
        iso6393: "ces",
        iso6392B: "cze",
        iso6392T: "ces",
        iso6391: "cs"
    },
    {
        name: "Cent\xfa\xfam",
        type: "living",
        scope: "individual",
        iso6393: "cet"
    },
    {
        name: "Ekai Chin",
        type: "living",
        scope: "individual",
        iso6393: "cey"
    },
    {
        name: "Dijim-Bwilim",
        type: "living",
        scope: "individual",
        iso6393: "cfa"
    },
    {
        name: "Cara",
        type: "living",
        scope: "individual",
        iso6393: "cfd"
    },
    {
        name: "Como Karim",
        type: "living",
        scope: "individual",
        iso6393: "cfg"
    },
    {
        name: "Falam Chin",
        type: "living",
        scope: "individual",
        iso6393: "cfm"
    },
    {
        name: "Changriwa",
        type: "living",
        scope: "individual",
        iso6393: "cga"
    },
    {
        name: "Kagayanen",
        type: "living",
        scope: "individual",
        iso6393: "cgc"
    },
    {
        name: "Chiga",
        type: "living",
        scope: "individual",
        iso6393: "cgg"
    },
    {
        name: "Chocangacakha",
        type: "living",
        scope: "individual",
        iso6393: "cgk"
    },
    {
        name: "Chamorro",
        type: "living",
        scope: "individual",
        iso6393: "cha",
        iso6392B: "cha",
        iso6392T: "cha",
        iso6391: "ch"
    },
    {
        name: "Chibcha",
        type: "extinct",
        scope: "individual",
        iso6393: "chb",
        iso6392B: "chb",
        iso6392T: "chb"
    },
    {
        name: "Catawba",
        type: "extinct",
        scope: "individual",
        iso6393: "chc"
    },
    {
        name: "Highland Oaxaca Chontal",
        type: "living",
        scope: "individual",
        iso6393: "chd"
    },
    {
        name: "Chechen",
        type: "living",
        scope: "individual",
        iso6393: "che",
        iso6392B: "che",
        iso6392T: "che",
        iso6391: "ce"
    },
    {
        name: "Tabasco Chontal",
        type: "living",
        scope: "individual",
        iso6393: "chf"
    },
    {
        name: "Chagatai",
        type: "extinct",
        scope: "individual",
        iso6393: "chg",
        iso6392B: "chg",
        iso6392T: "chg"
    },
    {
        name: "Chinook",
        type: "extinct",
        scope: "individual",
        iso6393: "chh"
    },
    {
        name: "Ojitl\xe1n Chinantec",
        type: "living",
        scope: "individual",
        iso6393: "chj"
    },
    {
        name: "Chuukese",
        type: "living",
        scope: "individual",
        iso6393: "chk",
        iso6392B: "chk",
        iso6392T: "chk"
    },
    {
        name: "Cahuilla",
        type: "living",
        scope: "individual",
        iso6393: "chl"
    },
    {
        name: "Mari (Russia)",
        type: "living",
        scope: "macrolanguage",
        iso6393: "chm",
        iso6392B: "chm",
        iso6392T: "chm"
    },
    {
        name: "Chinook jargon",
        type: "living",
        scope: "individual",
        iso6393: "chn",
        iso6392B: "chn",
        iso6392T: "chn"
    },
    {
        name: "Choctaw",
        type: "living",
        scope: "individual",
        iso6393: "cho",
        iso6392B: "cho",
        iso6392T: "cho"
    },
    {
        name: "Chipewyan",
        type: "living",
        scope: "individual",
        iso6393: "chp",
        iso6392B: "chp",
        iso6392T: "chp"
    },
    {
        name: "Quiotepec Chinantec",
        type: "living",
        scope: "individual",
        iso6393: "chq"
    },
    {
        name: "Cherokee",
        type: "living",
        scope: "individual",
        iso6393: "chr",
        iso6392B: "chr",
        iso6392T: "chr"
    },
    {
        name: "Chol\xf3n",
        type: "extinct",
        scope: "individual",
        iso6393: "cht"
    },
    {
        name: "Church Slavic",
        type: "ancient",
        scope: "individual",
        iso6393: "chu",
        iso6392B: "chu",
        iso6392T: "chu",
        iso6391: "cu"
    },
    {
        name: "Chuvash",
        type: "living",
        scope: "individual",
        iso6393: "chv",
        iso6392B: "chv",
        iso6392T: "chv",
        iso6391: "cv"
    },
    {
        name: "Chuwabu",
        type: "living",
        scope: "individual",
        iso6393: "chw"
    },
    {
        name: "Chantyal",
        type: "living",
        scope: "individual",
        iso6393: "chx"
    },
    {
        name: "Cheyenne",
        type: "living",
        scope: "individual",
        iso6393: "chy",
        iso6392B: "chy",
        iso6392T: "chy"
    },
    {
        name: "Ozumac\xedn Chinantec",
        type: "living",
        scope: "individual",
        iso6393: "chz"
    },
    {
        name: "Cia-Cia",
        type: "living",
        scope: "individual",
        iso6393: "cia"
    },
    {
        name: "Ci Gbe",
        type: "living",
        scope: "individual",
        iso6393: "cib"
    },
    {
        name: "Chickasaw",
        type: "living",
        scope: "individual",
        iso6393: "cic"
    },
    {
        name: "Chimariko",
        type: "extinct",
        scope: "individual",
        iso6393: "cid"
    },
    {
        name: "Cineni",
        type: "living",
        scope: "individual",
        iso6393: "cie"
    },
    {
        name: "Chinali",
        type: "living",
        scope: "individual",
        iso6393: "cih"
    },
    {
        name: "Chitkuli Kinnauri",
        type: "living",
        scope: "individual",
        iso6393: "cik"
    },
    {
        name: "Cimbrian",
        type: "living",
        scope: "individual",
        iso6393: "cim"
    },
    {
        name: "Cinta Larga",
        type: "living",
        scope: "individual",
        iso6393: "cin"
    },
    {
        name: "Chiapanec",
        type: "living",
        scope: "individual",
        iso6393: "cip"
    },
    {
        name: "Tiri",
        type: "living",
        scope: "individual",
        iso6393: "cir"
    },
    {
        name: "Chippewa",
        type: "living",
        scope: "individual",
        iso6393: "ciw"
    },
    {
        name: "Chaima",
        type: "living",
        scope: "individual",
        iso6393: "ciy"
    },
    {
        name: "Western Cham",
        type: "living",
        scope: "individual",
        iso6393: "cja"
    },
    {
        name: "Chru",
        type: "living",
        scope: "individual",
        iso6393: "cje"
    },
    {
        name: "Upper Chehalis",
        type: "extinct",
        scope: "individual",
        iso6393: "cjh"
    },
    {
        name: "Chamalal",
        type: "living",
        scope: "individual",
        iso6393: "cji"
    },
    {
        name: "Chokwe",
        type: "living",
        scope: "individual",
        iso6393: "cjk"
    },
    {
        name: "Eastern Cham",
        type: "living",
        scope: "individual",
        iso6393: "cjm"
    },
    {
        name: "Chenapian",
        type: "living",
        scope: "individual",
        iso6393: "cjn"
    },
    {
        name: "Ash\xe9ninka Pajonal",
        type: "living",
        scope: "individual",
        iso6393: "cjo"
    },
    {
        name: "Cab\xe9car",
        type: "living",
        scope: "individual",
        iso6393: "cjp"
    },
    {
        name: "Shor",
        type: "living",
        scope: "individual",
        iso6393: "cjs"
    },
    {
        name: "Chuave",
        type: "living",
        scope: "individual",
        iso6393: "cjv"
    },
    {
        name: "Jinyu Chinese",
        type: "living",
        scope: "individual",
        iso6393: "cjy"
    },
    {
        name: "Central Kurdish",
        type: "living",
        scope: "individual",
        iso6393: "ckb"
    },
    {
        name: "Chak",
        type: "living",
        scope: "individual",
        iso6393: "ckh"
    },
    {
        name: "Cibak",
        type: "living",
        scope: "individual",
        iso6393: "ckl"
    },
    {
        name: "Chakavian",
        type: "living",
        scope: "individual",
        iso6393: "ckm"
    },
    {
        name: "Kaang Chin",
        type: "living",
        scope: "individual",
        iso6393: "ckn"
    },
    {
        name: "Anufo",
        type: "living",
        scope: "individual",
        iso6393: "cko"
    },
    {
        name: "Kajakse",
        type: "living",
        scope: "individual",
        iso6393: "ckq"
    },
    {
        name: "Kairak",
        type: "living",
        scope: "individual",
        iso6393: "ckr"
    },
    {
        name: "Tayo",
        type: "living",
        scope: "individual",
        iso6393: "cks"
    },
    {
        name: "Chukot",
        type: "living",
        scope: "individual",
        iso6393: "ckt"
    },
    {
        name: "Koasati",
        type: "living",
        scope: "individual",
        iso6393: "cku"
    },
    {
        name: "Kavalan",
        type: "living",
        scope: "individual",
        iso6393: "ckv"
    },
    {
        name: "Caka",
        type: "living",
        scope: "individual",
        iso6393: "ckx"
    },
    {
        name: "Cakfem-Mushere",
        type: "living",
        scope: "individual",
        iso6393: "cky"
    },
    {
        name: "Cakchiquel-Quich\xe9 Mixed Language",
        type: "living",
        scope: "individual",
        iso6393: "ckz"
    },
    {
        name: "Ron",
        type: "living",
        scope: "individual",
        iso6393: "cla"
    },
    {
        name: "Chilcotin",
        type: "living",
        scope: "individual",
        iso6393: "clc"
    },
    {
        name: "Chaldean Neo-Aramaic",
        type: "living",
        scope: "individual",
        iso6393: "cld"
    },
    {
        name: "Lealao Chinantec",
        type: "living",
        scope: "individual",
        iso6393: "cle"
    },
    {
        name: "Chilisso",
        type: "living",
        scope: "individual",
        iso6393: "clh"
    },
    {
        name: "Chakali",
        type: "living",
        scope: "individual",
        iso6393: "cli"
    },
    {
        name: "Laitu Chin",
        type: "living",
        scope: "individual",
        iso6393: "clj"
    },
    {
        name: "Idu-Mishmi",
        type: "living",
        scope: "individual",
        iso6393: "clk"
    },
    {
        name: "Chala",
        type: "living",
        scope: "individual",
        iso6393: "cll"
    },
    {
        name: "Clallam",
        type: "living",
        scope: "individual",
        iso6393: "clm"
    },
    {
        name: "Lowland Oaxaca Chontal",
        type: "living",
        scope: "individual",
        iso6393: "clo"
    },
    {
        name: "Lautu Chin",
        type: "living",
        scope: "individual",
        iso6393: "clt"
    },
    {
        name: "Caluyanun",
        type: "living",
        scope: "individual",
        iso6393: "clu"
    },
    {
        name: "Chulym",
        type: "living",
        scope: "individual",
        iso6393: "clw"
    },
    {
        name: "Eastern Highland Chatino",
        type: "living",
        scope: "individual",
        iso6393: "cly"
    },
    {
        name: "Maa",
        type: "living",
        scope: "individual",
        iso6393: "cma"
    },
    {
        name: "Cerma",
        type: "living",
        scope: "individual",
        iso6393: "cme"
    },
    {
        name: "Classical Mongolian",
        type: "historical",
        scope: "individual",
        iso6393: "cmg"
    },
    {
        name: "Ember\xe1-Cham\xed",
        type: "living",
        scope: "individual",
        iso6393: "cmi"
    },
    {
        name: "Campalagian",
        type: "living",
        scope: "individual",
        iso6393: "cml"
    },
    {
        name: "Michigamea",
        type: "extinct",
        scope: "individual",
        iso6393: "cmm"
    },
    {
        name: "Mandarin Chinese",
        type: "living",
        scope: "individual",
        iso6393: "cmn"
    },
    {
        name: "Central Mnong",
        type: "living",
        scope: "individual",
        iso6393: "cmo"
    },
    {
        name: "Mro-Khimi Chin",
        type: "living",
        scope: "individual",
        iso6393: "cmr"
    },
    {
        name: "Messapic",
        type: "ancient",
        scope: "individual",
        iso6393: "cms"
    },
    {
        name: "Camtho",
        type: "living",
        scope: "individual",
        iso6393: "cmt"
    },
    {
        name: "Changthang",
        type: "living",
        scope: "individual",
        iso6393: "cna"
    },
    {
        name: "Chinbon Chin",
        type: "living",
        scope: "individual",
        iso6393: "cnb"
    },
    {
        name: "C\xf4\xf4ng",
        type: "living",
        scope: "individual",
        iso6393: "cnc"
    },
    {
        name: "Northern Qiang",
        type: "living",
        scope: "individual",
        iso6393: "cng"
    },
    {
        name: "Hakha Chin",
        type: "living",
        scope: "individual",
        iso6393: "cnh"
    },
    {
        name: "Ash\xe1ninka",
        type: "living",
        scope: "individual",
        iso6393: "cni"
    },
    {
        name: "Khumi Chin",
        type: "living",
        scope: "individual",
        iso6393: "cnk"
    },
    {
        name: "Lalana Chinantec",
        type: "living",
        scope: "individual",
        iso6393: "cnl"
    },
    {
        name: "Con",
        type: "living",
        scope: "individual",
        iso6393: "cno"
    },
    {
        name: "Northern Ping Chinese",
        type: "living",
        scope: "individual",
        iso6393: "cnp"
    },
    {
        name: "Montenegrin",
        type: "living",
        scope: "individual",
        iso6393: "cnr",
        iso6392B: "cnr",
        iso6392T: "cnr"
    },
    {
        name: "Central Asmat",
        type: "living",
        scope: "individual",
        iso6393: "cns"
    },
    {
        name: "Tepetotutla Chinantec",
        type: "living",
        scope: "individual",
        iso6393: "cnt"
    },
    {
        name: "Chenoua",
        type: "living",
        scope: "individual",
        iso6393: "cnu"
    },
    {
        name: "Ngawn Chin",
        type: "living",
        scope: "individual",
        iso6393: "cnw"
    },
    {
        name: "Middle Cornish",
        type: "historical",
        scope: "individual",
        iso6393: "cnx"
    },
    {
        name: "Cocos Islands Malay",
        type: "living",
        scope: "individual",
        iso6393: "coa"
    },
    {
        name: "Chicomuceltec",
        type: "extinct",
        scope: "individual",
        iso6393: "cob"
    },
    {
        name: "Cocopa",
        type: "living",
        scope: "individual",
        iso6393: "coc"
    },
    {
        name: "Cocama-Cocamilla",
        type: "living",
        scope: "individual",
        iso6393: "cod"
    },
    {
        name: "Koreguaje",
        type: "living",
        scope: "individual",
        iso6393: "coe"
    },
    {
        name: "Colorado",
        type: "living",
        scope: "individual",
        iso6393: "cof"
    },
    {
        name: "Chong",
        type: "living",
        scope: "individual",
        iso6393: "cog"
    },
    {
        name: "Chonyi-Dzihana-Kauma",
        type: "living",
        scope: "individual",
        iso6393: "coh"
    },
    {
        name: "Cochimi",
        type: "extinct",
        scope: "individual",
        iso6393: "coj"
    },
    {
        name: "Santa Teresa Cora",
        type: "living",
        scope: "individual",
        iso6393: "cok"
    },
    {
        name: "Columbia-Wenatchi",
        type: "living",
        scope: "individual",
        iso6393: "col"
    },
    {
        name: "Comanche",
        type: "living",
        scope: "individual",
        iso6393: "com"
    },
    {
        name: "Cof\xe1n",
        type: "living",
        scope: "individual",
        iso6393: "con"
    },
    {
        name: "Comox",
        type: "living",
        scope: "individual",
        iso6393: "coo"
    },
    {
        name: "Coptic",
        type: "extinct",
        scope: "individual",
        iso6393: "cop",
        iso6392B: "cop",
        iso6392T: "cop"
    },
    {
        name: "Coquille",
        type: "extinct",
        scope: "individual",
        iso6393: "coq"
    },
    {
        name: "Cornish",
        type: "living",
        scope: "individual",
        iso6393: "cor",
        iso6392B: "cor",
        iso6392T: "cor",
        iso6391: "kw"
    },
    {
        name: "Corsican",
        type: "living",
        scope: "individual",
        iso6393: "cos",
        iso6392B: "cos",
        iso6392T: "cos",
        iso6391: "co"
    },
    {
        name: "Caquinte",
        type: "living",
        scope: "individual",
        iso6393: "cot"
    },
    {
        name: "Wamey",
        type: "living",
        scope: "individual",
        iso6393: "cou"
    },
    {
        name: "Cao Miao",
        type: "living",
        scope: "individual",
        iso6393: "cov"
    },
    {
        name: "Cowlitz",
        type: "extinct",
        scope: "individual",
        iso6393: "cow"
    },
    {
        name: "Nanti",
        type: "living",
        scope: "individual",
        iso6393: "cox"
    },
    {
        name: "Chochotec",
        type: "living",
        scope: "individual",
        iso6393: "coz"
    },
    {
        name: "Palantla Chinantec",
        type: "living",
        scope: "individual",
        iso6393: "cpa"
    },
    {
        name: "Ucayali-Yur\xfaa Ash\xe9ninka",
        type: "living",
        scope: "individual",
        iso6393: "cpb"
    },
    {
        name: "Ajy\xedninka Apurucayali",
        type: "living",
        scope: "individual",
        iso6393: "cpc"
    },
    {
        name: "Cappadocian Greek",
        type: "extinct",
        scope: "individual",
        iso6393: "cpg"
    },
    {
        name: "Chinese Pidgin English",
        type: "living",
        scope: "individual",
        iso6393: "cpi"
    },
    {
        name: "Cherepon",
        type: "living",
        scope: "individual",
        iso6393: "cpn"
    },
    {
        name: "Kpeego",
        type: "living",
        scope: "individual",
        iso6393: "cpo"
    },
    {
        name: "Capiznon",
        type: "living",
        scope: "individual",
        iso6393: "cps"
    },
    {
        name: "Pichis Ash\xe9ninka",
        type: "living",
        scope: "individual",
        iso6393: "cpu"
    },
    {
        name: "Pu-Xian Chinese",
        type: "living",
        scope: "individual",
        iso6393: "cpx"
    },
    {
        name: "South Ucayali Ash\xe9ninka",
        type: "living",
        scope: "individual",
        iso6393: "cpy"
    },
    {
        name: "Chuanqiandian Cluster Miao",
        type: "living",
        scope: "individual",
        iso6393: "cqd"
    },
    {
        name: "Chara",
        type: "living",
        scope: "individual",
        iso6393: "cra"
    },
    {
        name: "Island Carib",
        type: "extinct",
        scope: "individual",
        iso6393: "crb"
    },
    {
        name: "Lonwolwol",
        type: "living",
        scope: "individual",
        iso6393: "crc"
    },
    {
        name: "Coeur d'Alene",
        type: "living",
        scope: "individual",
        iso6393: "crd"
    },
    {
        name: "Cree",
        type: "living",
        scope: "macrolanguage",
        iso6393: "cre",
        iso6392B: "cre",
        iso6392T: "cre",
        iso6391: "cr"
    },
    {
        name: "Caramanta",
        type: "extinct",
        scope: "individual",
        iso6393: "crf"
    },
    {
        name: "Michif",
        type: "living",
        scope: "individual",
        iso6393: "crg"
    },
    {
        name: "Crimean Tatar",
        type: "living",
        scope: "individual",
        iso6393: "crh",
        iso6392B: "crh",
        iso6392T: "crh"
    },
    {
        name: "S\xe3otomense",
        type: "living",
        scope: "individual",
        iso6393: "cri"
    },
    {
        name: "Southern East Cree",
        type: "living",
        scope: "individual",
        iso6393: "crj"
    },
    {
        name: "Plains Cree",
        type: "living",
        scope: "individual",
        iso6393: "crk"
    },
    {
        name: "Northern East Cree",
        type: "living",
        scope: "individual",
        iso6393: "crl"
    },
    {
        name: "Moose Cree",
        type: "living",
        scope: "individual",
        iso6393: "crm"
    },
    {
        name: "El Nayar Cora",
        type: "living",
        scope: "individual",
        iso6393: "crn"
    },
    {
        name: "Crow",
        type: "living",
        scope: "individual",
        iso6393: "cro"
    },
    {
        name: "Iyo'wujwa Chorote",
        type: "living",
        scope: "individual",
        iso6393: "crq"
    },
    {
        name: "Carolina Algonquian",
        type: "extinct",
        scope: "individual",
        iso6393: "crr"
    },
    {
        name: "Seselwa Creole French",
        type: "living",
        scope: "individual",
        iso6393: "crs"
    },
    {
        name: "Iyojwa'ja Chorote",
        type: "living",
        scope: "individual",
        iso6393: "crt"
    },
    {
        name: "Chaura",
        type: "living",
        scope: "individual",
        iso6393: "crv"
    },
    {
        name: "Chrau",
        type: "living",
        scope: "individual",
        iso6393: "crw"
    },
    {
        name: "Carrier",
        type: "living",
        scope: "individual",
        iso6393: "crx"
    },
    {
        name: "Cori",
        type: "living",
        scope: "individual",
        iso6393: "cry"
    },
    {
        name: "Cruze\xf1o",
        type: "extinct",
        scope: "individual",
        iso6393: "crz"
    },
    {
        name: "Chiltepec Chinantec",
        type: "living",
        scope: "individual",
        iso6393: "csa"
    },
    {
        name: "Kashubian",
        type: "living",
        scope: "individual",
        iso6393: "csb",
        iso6392B: "csb",
        iso6392T: "csb"
    },
    {
        name: "Catalan Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "csc"
    },
    {
        name: "Chiangmai Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "csd"
    },
    {
        name: "Czech Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "cse"
    },
    {
        name: "Cuba Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "csf"
    },
    {
        name: "Chilean Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "csg"
    },
    {
        name: "Asho Chin",
        type: "living",
        scope: "individual",
        iso6393: "csh"
    },
    {
        name: "Coast Miwok",
        type: "extinct",
        scope: "individual",
        iso6393: "csi"
    },
    {
        name: "Songlai Chin",
        type: "living",
        scope: "individual",
        iso6393: "csj"
    },
    {
        name: "Jola-Kasa",
        type: "living",
        scope: "individual",
        iso6393: "csk"
    },
    {
        name: "Chinese Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "csl"
    },
    {
        name: "Central Sierra Miwok",
        type: "living",
        scope: "individual",
        iso6393: "csm"
    },
    {
        name: "Colombian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "csn"
    },
    {
        name: "Sochiapam Chinantec",
        type: "living",
        scope: "individual",
        iso6393: "cso"
    },
    {
        name: "Southern Ping Chinese",
        type: "living",
        scope: "individual",
        iso6393: "csp"
    },
    {
        name: "Croatia Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "csq"
    },
    {
        name: "Costa Rican Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "csr"
    },
    {
        name: "Southern Ohlone",
        type: "extinct",
        scope: "individual",
        iso6393: "css"
    },
    {
        name: "Northern Ohlone",
        type: "living",
        scope: "individual",
        iso6393: "cst"
    },
    {
        name: "Sumtu Chin",
        type: "living",
        scope: "individual",
        iso6393: "csv"
    },
    {
        name: "Swampy Cree",
        type: "living",
        scope: "individual",
        iso6393: "csw"
    },
    {
        name: "Siyin Chin",
        type: "living",
        scope: "individual",
        iso6393: "csy"
    },
    {
        name: "Coos",
        type: "living",
        scope: "individual",
        iso6393: "csz"
    },
    {
        name: "Tataltepec Chatino",
        type: "living",
        scope: "individual",
        iso6393: "cta"
    },
    {
        name: "Chetco",
        type: "extinct",
        scope: "individual",
        iso6393: "ctc"
    },
    {
        name: "Tedim Chin",
        type: "living",
        scope: "individual",
        iso6393: "ctd"
    },
    {
        name: "Tepinapa Chinantec",
        type: "living",
        scope: "individual",
        iso6393: "cte"
    },
    {
        name: "Chittagonian",
        type: "living",
        scope: "individual",
        iso6393: "ctg"
    },
    {
        name: "Thaiphum Chin",
        type: "living",
        scope: "individual",
        iso6393: "cth"
    },
    {
        name: "Tlacoatzintepec Chinantec",
        type: "living",
        scope: "individual",
        iso6393: "ctl"
    },
    {
        name: "Chitimacha",
        type: "extinct",
        scope: "individual",
        iso6393: "ctm"
    },
    {
        name: "Chhintange",
        type: "living",
        scope: "individual",
        iso6393: "ctn"
    },
    {
        name: "Ember\xe1-Cat\xedo",
        type: "living",
        scope: "individual",
        iso6393: "cto"
    },
    {
        name: "Western Highland Chatino",
        type: "living",
        scope: "individual",
        iso6393: "ctp"
    },
    {
        name: "Northern Catanduanes Bikol",
        type: "living",
        scope: "individual",
        iso6393: "cts"
    },
    {
        name: "Wayanad Chetti",
        type: "living",
        scope: "individual",
        iso6393: "ctt"
    },
    {
        name: "Chol",
        type: "living",
        scope: "individual",
        iso6393: "ctu"
    },
    {
        name: "Zacatepec Chatino",
        type: "living",
        scope: "individual",
        iso6393: "ctz"
    },
    {
        name: "Cua",
        type: "living",
        scope: "individual",
        iso6393: "cua"
    },
    {
        name: "Cubeo",
        type: "living",
        scope: "individual",
        iso6393: "cub"
    },
    {
        name: "Usila Chinantec",
        type: "living",
        scope: "individual",
        iso6393: "cuc"
    },
    {
        name: "Chungmboko",
        type: "living",
        scope: "individual",
        iso6393: "cug"
    },
    {
        name: "Chuka",
        type: "living",
        scope: "individual",
        iso6393: "cuh"
    },
    {
        name: "Cuiba",
        type: "living",
        scope: "individual",
        iso6393: "cui"
    },
    {
        name: "Mashco Piro",
        type: "living",
        scope: "individual",
        iso6393: "cuj"
    },
    {
        name: "San Blas Kuna",
        type: "living",
        scope: "individual",
        iso6393: "cuk"
    },
    {
        name: "Culina",
        type: "living",
        scope: "individual",
        iso6393: "cul"
    },
    {
        name: "Cumanagoto",
        type: "extinct",
        scope: "individual",
        iso6393: "cuo"
    },
    {
        name: "Cupe\xf1o",
        type: "extinct",
        scope: "individual",
        iso6393: "cup"
    },
    {
        name: "Cun",
        type: "living",
        scope: "individual",
        iso6393: "cuq"
    },
    {
        name: "Chhulung",
        type: "living",
        scope: "individual",
        iso6393: "cur"
    },
    {
        name: "Teutila Cuicatec",
        type: "living",
        scope: "individual",
        iso6393: "cut"
    },
    {
        name: "Tai Ya",
        type: "living",
        scope: "individual",
        iso6393: "cuu"
    },
    {
        name: "Cuvok",
        type: "living",
        scope: "individual",
        iso6393: "cuv"
    },
    {
        name: "Chukwa",
        type: "living",
        scope: "individual",
        iso6393: "cuw"
    },
    {
        name: "Tepeuxila Cuicatec",
        type: "living",
        scope: "individual",
        iso6393: "cux"
    },
    {
        name: "Cuitlatec",
        type: "living",
        scope: "individual",
        iso6393: "cuy"
    },
    {
        name: "Chug",
        type: "living",
        scope: "individual",
        iso6393: "cvg"
    },
    {
        name: "Valle Nacional Chinantec",
        type: "living",
        scope: "individual",
        iso6393: "cvn"
    },
    {
        name: "Kabwa",
        type: "living",
        scope: "individual",
        iso6393: "cwa"
    },
    {
        name: "Maindo",
        type: "living",
        scope: "individual",
        iso6393: "cwb"
    },
    {
        name: "Woods Cree",
        type: "living",
        scope: "individual",
        iso6393: "cwd"
    },
    {
        name: "Kwere",
        type: "living",
        scope: "individual",
        iso6393: "cwe"
    },
    {
        name: "Chewong",
        type: "living",
        scope: "individual",
        iso6393: "cwg"
    },
    {
        name: "Kuwaataay",
        type: "living",
        scope: "individual",
        iso6393: "cwt"
    },
    {
        name: "Nopala Chatino",
        type: "living",
        scope: "individual",
        iso6393: "cya"
    },
    {
        name: "Cayubaba",
        type: "extinct",
        scope: "individual",
        iso6393: "cyb"
    },
    {
        name: "Welsh",
        type: "living",
        scope: "individual",
        iso6393: "cym",
        iso6392B: "wel",
        iso6392T: "cym",
        iso6391: "cy"
    },
    {
        name: "Cuyonon",
        type: "living",
        scope: "individual",
        iso6393: "cyo"
    },
    {
        name: "Huizhou Chinese",
        type: "living",
        scope: "individual",
        iso6393: "czh"
    },
    {
        name: "Knaanic",
        type: "extinct",
        scope: "individual",
        iso6393: "czk"
    },
    {
        name: "Zenzontepec Chatino",
        type: "living",
        scope: "individual",
        iso6393: "czn"
    },
    {
        name: "Min Zhong Chinese",
        type: "living",
        scope: "individual",
        iso6393: "czo"
    },
    {
        name: "Zotung Chin",
        type: "living",
        scope: "individual",
        iso6393: "czt"
    },
    {
        name: "Dangal\xe9at",
        type: "living",
        scope: "individual",
        iso6393: "daa"
    },
    {
        name: "Dambi",
        type: "living",
        scope: "individual",
        iso6393: "dac"
    },
    {
        name: "Marik",
        type: "living",
        scope: "individual",
        iso6393: "dad"
    },
    {
        name: "Duupa",
        type: "living",
        scope: "individual",
        iso6393: "dae"
    },
    {
        name: "Dagbani",
        type: "living",
        scope: "individual",
        iso6393: "dag"
    },
    {
        name: "Gwahatike",
        type: "living",
        scope: "individual",
        iso6393: "dah"
    },
    {
        name: "Day",
        type: "living",
        scope: "individual",
        iso6393: "dai"
    },
    {
        name: "Dar Fur Daju",
        type: "living",
        scope: "individual",
        iso6393: "daj"
    },
    {
        name: "Dakota",
        type: "living",
        scope: "individual",
        iso6393: "dak",
        iso6392B: "dak",
        iso6392T: "dak"
    },
    {
        name: "Dahalo",
        type: "living",
        scope: "individual",
        iso6393: "dal"
    },
    {
        name: "Damakawa",
        type: "living",
        scope: "individual",
        iso6393: "dam"
    },
    {
        name: "Danish",
        type: "living",
        scope: "individual",
        iso6393: "dan",
        iso6392B: "dan",
        iso6392T: "dan",
        iso6391: "da"
    },
    {
        name: "Daai Chin",
        type: "living",
        scope: "individual",
        iso6393: "dao"
    },
    {
        name: "Dandami Maria",
        type: "living",
        scope: "individual",
        iso6393: "daq"
    },
    {
        name: "Dargwa",
        type: "living",
        scope: "individual",
        iso6393: "dar",
        iso6392B: "dar",
        iso6392T: "dar"
    },
    {
        name: "Daho-Doo",
        type: "living",
        scope: "individual",
        iso6393: "das"
    },
    {
        name: "Dar Sila Daju",
        type: "living",
        scope: "individual",
        iso6393: "dau"
    },
    {
        name: "Taita",
        type: "living",
        scope: "individual",
        iso6393: "dav"
    },
    {
        name: "Davawenyo",
        type: "living",
        scope: "individual",
        iso6393: "daw"
    },
    {
        name: "Dayi",
        type: "living",
        scope: "individual",
        iso6393: "dax"
    },
    {
        name: "Dao",
        type: "living",
        scope: "individual",
        iso6393: "daz"
    },
    {
        name: "Bangime",
        type: "living",
        scope: "individual",
        iso6393: "dba"
    },
    {
        name: "Deno",
        type: "living",
        scope: "individual",
        iso6393: "dbb"
    },
    {
        name: "Dadiya",
        type: "living",
        scope: "individual",
        iso6393: "dbd"
    },
    {
        name: "Dabe",
        type: "living",
        scope: "individual",
        iso6393: "dbe"
    },
    {
        name: "Edopi",
        type: "living",
        scope: "individual",
        iso6393: "dbf"
    },
    {
        name: "Dogul Dom Dogon",
        type: "living",
        scope: "individual",
        iso6393: "dbg"
    },
    {
        name: "Doka",
        type: "living",
        scope: "individual",
        iso6393: "dbi"
    },
    {
        name: "Ida'an",
        type: "living",
        scope: "individual",
        iso6393: "dbj"
    },
    {
        name: "Dyirbal",
        type: "living",
        scope: "individual",
        iso6393: "dbl"
    },
    {
        name: "Duguri",
        type: "living",
        scope: "individual",
        iso6393: "dbm"
    },
    {
        name: "Duriankere",
        type: "living",
        scope: "individual",
        iso6393: "dbn"
    },
    {
        name: "Dulbu",
        type: "living",
        scope: "individual",
        iso6393: "dbo"
    },
    {
        name: "Duwai",
        type: "living",
        scope: "individual",
        iso6393: "dbp"
    },
    {
        name: "Daba",
        type: "living",
        scope: "individual",
        iso6393: "dbq"
    },
    {
        name: "Dabarre",
        type: "living",
        scope: "individual",
        iso6393: "dbr"
    },
    {
        name: "Ben Tey Dogon",
        type: "living",
        scope: "individual",
        iso6393: "dbt"
    },
    {
        name: "Bondum Dom Dogon",
        type: "living",
        scope: "individual",
        iso6393: "dbu"
    },
    {
        name: "Dungu",
        type: "living",
        scope: "individual",
        iso6393: "dbv"
    },
    {
        name: "Bankan Tey Dogon",
        type: "living",
        scope: "individual",
        iso6393: "dbw"
    },
    {
        name: "Dibiyaso",
        type: "living",
        scope: "individual",
        iso6393: "dby"
    },
    {
        name: "Deccan",
        type: "living",
        scope: "individual",
        iso6393: "dcc"
    },
    {
        name: "Negerhollands",
        type: "extinct",
        scope: "individual",
        iso6393: "dcr"
    },
    {
        name: "Dadi Dadi",
        type: "extinct",
        scope: "individual",
        iso6393: "dda"
    },
    {
        name: "Dongotono",
        type: "living",
        scope: "individual",
        iso6393: "ddd"
    },
    {
        name: "Doondo",
        type: "living",
        scope: "individual",
        iso6393: "dde"
    },
    {
        name: "Fataluku",
        type: "living",
        scope: "individual",
        iso6393: "ddg"
    },
    {
        name: "West Goodenough",
        type: "living",
        scope: "individual",
        iso6393: "ddi"
    },
    {
        name: "Jaru",
        type: "living",
        scope: "individual",
        iso6393: "ddj"
    },
    {
        name: "Dendi (Benin)",
        type: "living",
        scope: "individual",
        iso6393: "ddn"
    },
    {
        name: "Dido",
        type: "living",
        scope: "individual",
        iso6393: "ddo"
    },
    {
        name: "Dhudhuroa",
        type: "extinct",
        scope: "individual",
        iso6393: "ddr"
    },
    {
        name: "Donno So Dogon",
        type: "living",
        scope: "individual",
        iso6393: "dds"
    },
    {
        name: "Dawera-Daweloor",
        type: "living",
        scope: "individual",
        iso6393: "ddw"
    },
    {
        name: "Dagik",
        type: "living",
        scope: "individual",
        iso6393: "dec"
    },
    {
        name: "Dedua",
        type: "living",
        scope: "individual",
        iso6393: "ded"
    },
    {
        name: "Dewoin",
        type: "living",
        scope: "individual",
        iso6393: "dee"
    },
    {
        name: "Dezfuli",
        type: "living",
        scope: "individual",
        iso6393: "def"
    },
    {
        name: "Degema",
        type: "living",
        scope: "individual",
        iso6393: "deg"
    },
    {
        name: "Dehwari",
        type: "living",
        scope: "individual",
        iso6393: "deh"
    },
    {
        name: "Demisa",
        type: "living",
        scope: "individual",
        iso6393: "dei"
    },
    {
        name: "Dek",
        type: "living",
        scope: "individual",
        iso6393: "dek"
    },
    {
        name: "Delaware",
        type: "living",
        scope: "macrolanguage",
        iso6393: "del",
        iso6392B: "del",
        iso6392T: "del"
    },
    {
        name: "Dem",
        type: "living",
        scope: "individual",
        iso6393: "dem"
    },
    {
        name: "Slave (Athapascan)",
        type: "living",
        scope: "macrolanguage",
        iso6393: "den",
        iso6392B: "den",
        iso6392T: "den"
    },
    {
        name: "Pidgin Delaware",
        type: "extinct",
        scope: "individual",
        iso6393: "dep"
    },
    {
        name: "Dendi (Central African Republic)",
        type: "living",
        scope: "individual",
        iso6393: "deq"
    },
    {
        name: "Deori",
        type: "living",
        scope: "individual",
        iso6393: "der"
    },
    {
        name: "Desano",
        type: "living",
        scope: "individual",
        iso6393: "des"
    },
    {
        name: "German",
        type: "living",
        scope: "individual",
        iso6393: "deu",
        iso6392B: "ger",
        iso6392T: "deu",
        iso6391: "de"
    },
    {
        name: "Domung",
        type: "living",
        scope: "individual",
        iso6393: "dev"
    },
    {
        name: "Dengese",
        type: "living",
        scope: "individual",
        iso6393: "dez"
    },
    {
        name: "Southern Dagaare",
        type: "living",
        scope: "individual",
        iso6393: "dga"
    },
    {
        name: "Bunoge Dogon",
        type: "living",
        scope: "individual",
        iso6393: "dgb"
    },
    {
        name: "Casiguran Dumagat Agta",
        type: "living",
        scope: "individual",
        iso6393: "dgc"
    },
    {
        name: "Dagaari Dioula",
        type: "living",
        scope: "individual",
        iso6393: "dgd"
    },
    {
        name: "Degenan",
        type: "living",
        scope: "individual",
        iso6393: "dge"
    },
    {
        name: "Doga",
        type: "living",
        scope: "individual",
        iso6393: "dgg"
    },
    {
        name: "Dghwede",
        type: "living",
        scope: "individual",
        iso6393: "dgh"
    },
    {
        name: "Northern Dagara",
        type: "living",
        scope: "individual",
        iso6393: "dgi"
    },
    {
        name: "Dagba",
        type: "living",
        scope: "individual",
        iso6393: "dgk"
    },
    {
        name: "Andaandi",
        type: "living",
        scope: "individual",
        iso6393: "dgl"
    },
    {
        name: "Dagoman",
        type: "extinct",
        scope: "individual",
        iso6393: "dgn"
    },
    {
        name: "Dogri (individual language)",
        type: "living",
        scope: "individual",
        iso6393: "dgo"
    },
    {
        name: "Dogrib",
        type: "living",
        scope: "individual",
        iso6393: "dgr",
        iso6392B: "dgr",
        iso6392T: "dgr"
    },
    {
        name: "Dogoso",
        type: "living",
        scope: "individual",
        iso6393: "dgs"
    },
    {
        name: "Ndra'ngith",
        type: "extinct",
        scope: "individual",
        iso6393: "dgt"
    },
    {
        name: "Daungwurrung",
        type: "extinct",
        scope: "individual",
        iso6393: "dgw"
    },
    {
        name: "Doghoro",
        type: "living",
        scope: "individual",
        iso6393: "dgx"
    },
    {
        name: "Daga",
        type: "living",
        scope: "individual",
        iso6393: "dgz"
    },
    {
        name: "Dhundari",
        type: "living",
        scope: "individual",
        iso6393: "dhd"
    },
    {
        name: "Dhangu-Djangu",
        type: "living",
        scope: "individual",
        iso6393: "dhg"
    },
    {
        name: "Dhimal",
        type: "living",
        scope: "individual",
        iso6393: "dhi"
    },
    {
        name: "Dhalandji",
        type: "living",
        scope: "individual",
        iso6393: "dhl"
    },
    {
        name: "Zemba",
        type: "living",
        scope: "individual",
        iso6393: "dhm"
    },
    {
        name: "Dhanki",
        type: "living",
        scope: "individual",
        iso6393: "dhn"
    },
    {
        name: "Dhodia",
        type: "living",
        scope: "individual",
        iso6393: "dho"
    },
    {
        name: "Dhargari",
        type: "living",
        scope: "individual",
        iso6393: "dhr"
    },
    {
        name: "Dhaiso",
        type: "living",
        scope: "individual",
        iso6393: "dhs"
    },
    {
        name: "Dhurga",
        type: "extinct",
        scope: "individual",
        iso6393: "dhu"
    },
    {
        name: "Dehu",
        type: "living",
        scope: "individual",
        iso6393: "dhv"
    },
    {
        name: "Dhanwar (Nepal)",
        type: "living",
        scope: "individual",
        iso6393: "dhw"
    },
    {
        name: "Dhungaloo",
        type: "living",
        scope: "individual",
        iso6393: "dhx"
    },
    {
        name: "Dia",
        type: "living",
        scope: "individual",
        iso6393: "dia"
    },
    {
        name: "South Central Dinka",
        type: "living",
        scope: "individual",
        iso6393: "dib"
    },
    {
        name: "Lakota Dida",
        type: "living",
        scope: "individual",
        iso6393: "dic"
    },
    {
        name: "Didinga",
        type: "living",
        scope: "individual",
        iso6393: "did"
    },
    {
        name: "Dieri",
        type: "extinct",
        scope: "individual",
        iso6393: "dif"
    },
    {
        name: "Digo",
        type: "living",
        scope: "individual",
        iso6393: "dig"
    },
    {
        name: "Kumiai",
        type: "living",
        scope: "individual",
        iso6393: "dih"
    },
    {
        name: "Dimbong",
        type: "living",
        scope: "individual",
        iso6393: "dii"
    },
    {
        name: "Dai",
        type: "living",
        scope: "individual",
        iso6393: "dij"
    },
    {
        name: "Southwestern Dinka",
        type: "living",
        scope: "individual",
        iso6393: "dik"
    },
    {
        name: "Dilling",
        type: "living",
        scope: "individual",
        iso6393: "dil"
    },
    {
        name: "Dime",
        type: "living",
        scope: "individual",
        iso6393: "dim"
    },
    {
        name: "Dinka",
        type: "living",
        scope: "macrolanguage",
        iso6393: "din",
        iso6392B: "din",
        iso6392T: "din"
    },
    {
        name: "Dibo",
        type: "living",
        scope: "individual",
        iso6393: "dio"
    },
    {
        name: "Northeastern Dinka",
        type: "living",
        scope: "individual",
        iso6393: "dip"
    },
    {
        name: "Dimli (individual language)",
        type: "living",
        scope: "individual",
        iso6393: "diq"
    },
    {
        name: "Dirim",
        type: "living",
        scope: "individual",
        iso6393: "dir"
    },
    {
        name: "Dimasa",
        type: "living",
        scope: "individual",
        iso6393: "dis"
    },
    {
        name: "Diriku",
        type: "living",
        scope: "individual",
        iso6393: "diu"
    },
    {
        name: "Dhivehi",
        type: "living",
        scope: "individual",
        iso6393: "div",
        iso6392B: "div",
        iso6392T: "div",
        iso6391: "dv"
    },
    {
        name: "Northwestern Dinka",
        type: "living",
        scope: "individual",
        iso6393: "diw"
    },
    {
        name: "Dixon Reef",
        type: "living",
        scope: "individual",
        iso6393: "dix"
    },
    {
        name: "Diuwe",
        type: "living",
        scope: "individual",
        iso6393: "diy"
    },
    {
        name: "Ding",
        type: "living",
        scope: "individual",
        iso6393: "diz"
    },
    {
        name: "Djadjawurrung",
        type: "extinct",
        scope: "individual",
        iso6393: "dja"
    },
    {
        name: "Djinba",
        type: "living",
        scope: "individual",
        iso6393: "djb"
    },
    {
        name: "Dar Daju Daju",
        type: "living",
        scope: "individual",
        iso6393: "djc"
    },
    {
        name: "Djamindjung",
        type: "living",
        scope: "individual",
        iso6393: "djd"
    },
    {
        name: "Zarma",
        type: "living",
        scope: "individual",
        iso6393: "dje"
    },
    {
        name: "Djangun",
        type: "extinct",
        scope: "individual",
        iso6393: "djf"
    },
    {
        name: "Djinang",
        type: "living",
        scope: "individual",
        iso6393: "dji"
    },
    {
        name: "Djeebbana",
        type: "living",
        scope: "individual",
        iso6393: "djj"
    },
    {
        name: "Eastern Maroon Creole",
        type: "living",
        scope: "individual",
        iso6393: "djk"
    },
    {
        name: "Jamsay Dogon",
        type: "living",
        scope: "individual",
        iso6393: "djm"
    },
    {
        name: "Jawoyn",
        type: "living",
        scope: "individual",
        iso6393: "djn"
    },
    {
        name: "Jangkang",
        type: "living",
        scope: "individual",
        iso6393: "djo"
    },
    {
        name: "Djambarrpuyngu",
        type: "living",
        scope: "individual",
        iso6393: "djr"
    },
    {
        name: "Kapriman",
        type: "living",
        scope: "individual",
        iso6393: "dju"
    },
    {
        name: "Djawi",
        type: "extinct",
        scope: "individual",
        iso6393: "djw"
    },
    {
        name: "Dakpakha",
        type: "living",
        scope: "individual",
        iso6393: "dka"
    },
    {
        name: "Dakka",
        type: "living",
        scope: "individual",
        iso6393: "dkk"
    },
    {
        name: "Kuijau",
        type: "living",
        scope: "individual",
        iso6393: "dkr"
    },
    {
        name: "Southeastern Dinka",
        type: "living",
        scope: "individual",
        iso6393: "dks"
    },
    {
        name: "Mazagway",
        type: "living",
        scope: "individual",
        iso6393: "dkx"
    },
    {
        name: "Dolgan",
        type: "living",
        scope: "individual",
        iso6393: "dlg"
    },
    {
        name: "Dahalik",
        type: "living",
        scope: "individual",
        iso6393: "dlk"
    },
    {
        name: "Dalmatian",
        type: "extinct",
        scope: "individual",
        iso6393: "dlm"
    },
    {
        name: "Darlong",
        type: "living",
        scope: "individual",
        iso6393: "dln"
    },
    {
        name: "Duma",
        type: "living",
        scope: "individual",
        iso6393: "dma"
    },
    {
        name: "Mombo Dogon",
        type: "living",
        scope: "individual",
        iso6393: "dmb"
    },
    {
        name: "Gavak",
        type: "living",
        scope: "individual",
        iso6393: "dmc"
    },
    {
        name: "Madhi Madhi",
        type: "extinct",
        scope: "individual",
        iso6393: "dmd"
    },
    {
        name: "Dugwor",
        type: "living",
        scope: "individual",
        iso6393: "dme"
    },
    {
        name: "Medefaidrin",
        type: "extinct",
        scope: "individual",
        iso6393: "dmf"
    },
    {
        name: "Upper Kinabatangan",
        type: "living",
        scope: "individual",
        iso6393: "dmg"
    },
    {
        name: "Domaaki",
        type: "living",
        scope: "individual",
        iso6393: "dmk"
    },
    {
        name: "Dameli",
        type: "living",
        scope: "individual",
        iso6393: "dml"
    },
    {
        name: "Dama",
        type: "living",
        scope: "individual",
        iso6393: "dmm"
    },
    {
        name: "Kemedzung",
        type: "living",
        scope: "individual",
        iso6393: "dmo"
    },
    {
        name: "East Damar",
        type: "living",
        scope: "individual",
        iso6393: "dmr"
    },
    {
        name: "Dampelas",
        type: "living",
        scope: "individual",
        iso6393: "dms"
    },
    {
        name: "Dubu",
        type: "living",
        scope: "individual",
        iso6393: "dmu"
    },
    {
        name: "Dumpas",
        type: "living",
        scope: "individual",
        iso6393: "dmv"
    },
    {
        name: "Mudburra",
        type: "living",
        scope: "individual",
        iso6393: "dmw"
    },
    {
        name: "Dema",
        type: "living",
        scope: "individual",
        iso6393: "dmx"
    },
    {
        name: "Demta",
        type: "living",
        scope: "individual",
        iso6393: "dmy"
    },
    {
        name: "Upper Grand Valley Dani",
        type: "living",
        scope: "individual",
        iso6393: "dna"
    },
    {
        name: "Daonda",
        type: "living",
        scope: "individual",
        iso6393: "dnd"
    },
    {
        name: "Ndendeule",
        type: "living",
        scope: "individual",
        iso6393: "dne"
    },
    {
        name: "Dungan",
        type: "living",
        scope: "individual",
        iso6393: "dng"
    },
    {
        name: "Lower Grand Valley Dani",
        type: "living",
        scope: "individual",
        iso6393: "dni"
    },
    {
        name: "Dan",
        type: "living",
        scope: "individual",
        iso6393: "dnj"
    },
    {
        name: "Dengka",
        type: "living",
        scope: "individual",
        iso6393: "dnk"
    },
    {
        name: "Dz\xf9\xf9ngoo",
        type: "living",
        scope: "individual",
        iso6393: "dnn"
    },
    {
        name: "Ndrulo",
        type: "living",
        scope: "individual",
        iso6393: "dno"
    },
    {
        name: "Danaru",
        type: "living",
        scope: "individual",
        iso6393: "dnr"
    },
    {
        name: "Mid Grand Valley Dani",
        type: "living",
        scope: "individual",
        iso6393: "dnt"
    },
    {
        name: "Danau",
        type: "living",
        scope: "individual",
        iso6393: "dnu"
    },
    {
        name: "Danu",
        type: "living",
        scope: "individual",
        iso6393: "dnv"
    },
    {
        name: "Western Dani",
        type: "living",
        scope: "individual",
        iso6393: "dnw"
    },
    {
        name: "Den\xed",
        type: "living",
        scope: "individual",
        iso6393: "dny"
    },
    {
        name: "Dom",
        type: "living",
        scope: "individual",
        iso6393: "doa"
    },
    {
        name: "Dobu",
        type: "living",
        scope: "individual",
        iso6393: "dob"
    },
    {
        name: "Northern Dong",
        type: "living",
        scope: "individual",
        iso6393: "doc"
    },
    {
        name: "Doe",
        type: "living",
        scope: "individual",
        iso6393: "doe"
    },
    {
        name: "Domu",
        type: "living",
        scope: "individual",
        iso6393: "dof"
    },
    {
        name: "Dong",
        type: "living",
        scope: "individual",
        iso6393: "doh"
    },
    {
        name: "Dogri (macrolanguage)",
        type: "living",
        scope: "macrolanguage",
        iso6393: "doi",
        iso6392B: "doi",
        iso6392T: "doi"
    },
    {
        name: "Dondo",
        type: "living",
        scope: "individual",
        iso6393: "dok"
    },
    {
        name: "Doso",
        type: "living",
        scope: "individual",
        iso6393: "dol"
    },
    {
        name: "Toura (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "don"
    },
    {
        name: "Dongo",
        type: "living",
        scope: "individual",
        iso6393: "doo"
    },
    {
        name: "Lukpa",
        type: "living",
        scope: "individual",
        iso6393: "dop"
    },
    {
        name: "Dominican Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "doq"
    },
    {
        name: "Dori'o",
        type: "living",
        scope: "individual",
        iso6393: "dor"
    },
    {
        name: "Dogos\xe9",
        type: "living",
        scope: "individual",
        iso6393: "dos"
    },
    {
        name: "Dass",
        type: "living",
        scope: "individual",
        iso6393: "dot"
    },
    {
        name: "Dombe",
        type: "living",
        scope: "individual",
        iso6393: "dov"
    },
    {
        name: "Doyayo",
        type: "living",
        scope: "individual",
        iso6393: "dow"
    },
    {
        name: "Bussa",
        type: "living",
        scope: "individual",
        iso6393: "dox"
    },
    {
        name: "Dompo",
        type: "living",
        scope: "individual",
        iso6393: "doy"
    },
    {
        name: "Dorze",
        type: "living",
        scope: "individual",
        iso6393: "doz"
    },
    {
        name: "Papar",
        type: "living",
        scope: "individual",
        iso6393: "dpp"
    },
    {
        name: "Dair",
        type: "living",
        scope: "individual",
        iso6393: "drb"
    },
    {
        name: "Minderico",
        type: "living",
        scope: "individual",
        iso6393: "drc"
    },
    {
        name: "Darmiya",
        type: "living",
        scope: "individual",
        iso6393: "drd"
    },
    {
        name: "Dolpo",
        type: "living",
        scope: "individual",
        iso6393: "dre"
    },
    {
        name: "Rungus",
        type: "living",
        scope: "individual",
        iso6393: "drg"
    },
    {
        name: "C'Lela",
        type: "living",
        scope: "individual",
        iso6393: "dri"
    },
    {
        name: "Paakantyi",
        type: "living",
        scope: "individual",
        iso6393: "drl"
    },
    {
        name: "West Damar",
        type: "living",
        scope: "individual",
        iso6393: "drn"
    },
    {
        name: "Daro-Matu Melanau",
        type: "living",
        scope: "individual",
        iso6393: "dro"
    },
    {
        name: "Dura",
        type: "extinct",
        scope: "individual",
        iso6393: "drq"
    },
    {
        name: "Gedeo",
        type: "living",
        scope: "individual",
        iso6393: "drs"
    },
    {
        name: "Drents",
        type: "living",
        scope: "individual",
        iso6393: "drt"
    },
    {
        name: "Rukai",
        type: "living",
        scope: "individual",
        iso6393: "dru"
    },
    {
        name: "Darai",
        type: "living",
        scope: "individual",
        iso6393: "dry"
    },
    {
        name: "Lower Sorbian",
        type: "living",
        scope: "individual",
        iso6393: "dsb",
        iso6392B: "dsb",
        iso6392T: "dsb"
    },
    {
        name: "Dutch Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "dse"
    },
    {
        name: "Daasanach",
        type: "living",
        scope: "individual",
        iso6393: "dsh"
    },
    {
        name: "Disa",
        type: "living",
        scope: "individual",
        iso6393: "dsi"
    },
    {
        name: "Danish Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "dsl"
    },
    {
        name: "Dusner",
        type: "extinct",
        scope: "individual",
        iso6393: "dsn"
    },
    {
        name: "Desiya",
        type: "living",
        scope: "individual",
        iso6393: "dso"
    },
    {
        name: "Tadaksahak",
        type: "living",
        scope: "individual",
        iso6393: "dsq"
    },
    {
        name: "Daur",
        type: "living",
        scope: "individual",
        iso6393: "dta"
    },
    {
        name: "Labuk-Kinabatangan Kadazan",
        type: "living",
        scope: "individual",
        iso6393: "dtb"
    },
    {
        name: "Ditidaht",
        type: "living",
        scope: "individual",
        iso6393: "dtd"
    },
    {
        name: "Adithinngithigh",
        type: "extinct",
        scope: "individual",
        iso6393: "dth"
    },
    {
        name: "Ana Tinga Dogon",
        type: "living",
        scope: "individual",
        iso6393: "dti"
    },
    {
        name: "Tene Kan Dogon",
        type: "living",
        scope: "individual",
        iso6393: "dtk"
    },
    {
        name: "Tomo Kan Dogon",
        type: "living",
        scope: "individual",
        iso6393: "dtm"
    },
    {
        name: "Daatsʼíin",
        type: "living",
        scope: "individual",
        iso6393: "dtn"
    },
    {
        name: "Tommo So Dogon",
        type: "living",
        scope: "individual",
        iso6393: "dto"
    },
    {
        name: "Kadazan Dusun",
        type: "living",
        scope: "individual",
        iso6393: "dtp"
    },
    {
        name: "Lotud",
        type: "living",
        scope: "individual",
        iso6393: "dtr"
    },
    {
        name: "Toro So Dogon",
        type: "living",
        scope: "individual",
        iso6393: "dts"
    },
    {
        name: "Toro Tegu Dogon",
        type: "living",
        scope: "individual",
        iso6393: "dtt"
    },
    {
        name: "Tebul Ure Dogon",
        type: "living",
        scope: "individual",
        iso6393: "dtu"
    },
    {
        name: "Dotyali",
        type: "living",
        scope: "individual",
        iso6393: "dty"
    },
    {
        name: "Duala",
        type: "living",
        scope: "individual",
        iso6393: "dua",
        iso6392B: "dua",
        iso6392T: "dua"
    },
    {
        name: "Dubli",
        type: "living",
        scope: "individual",
        iso6393: "dub"
    },
    {
        name: "Duna",
        type: "living",
        scope: "individual",
        iso6393: "duc"
    },
    {
        name: "Umiray Dumaget Agta",
        type: "living",
        scope: "individual",
        iso6393: "due"
    },
    {
        name: "Dumbea",
        type: "living",
        scope: "individual",
        iso6393: "duf"
    },
    {
        name: "Duruma",
        type: "living",
        scope: "individual",
        iso6393: "dug"
    },
    {
        name: "Dungra Bhil",
        type: "living",
        scope: "individual",
        iso6393: "duh"
    },
    {
        name: "Dumun",
        type: "living",
        scope: "individual",
        iso6393: "dui"
    },
    {
        name: "Uyajitaya",
        type: "living",
        scope: "individual",
        iso6393: "duk"
    },
    {
        name: "Alabat Island Agta",
        type: "living",
        scope: "individual",
        iso6393: "dul"
    },
    {
        name: "Middle Dutch (ca. 1050-1350)",
        type: "historical",
        scope: "individual",
        iso6393: "dum",
        iso6392B: "dum",
        iso6392T: "dum"
    },
    {
        name: "Dusun Deyah",
        type: "living",
        scope: "individual",
        iso6393: "dun"
    },
    {
        name: "Dupaninan Agta",
        type: "living",
        scope: "individual",
        iso6393: "duo"
    },
    {
        name: "Duano",
        type: "living",
        scope: "individual",
        iso6393: "dup"
    },
    {
        name: "Dusun Malang",
        type: "living",
        scope: "individual",
        iso6393: "duq"
    },
    {
        name: "Dii",
        type: "living",
        scope: "individual",
        iso6393: "dur"
    },
    {
        name: "Dumi",
        type: "living",
        scope: "individual",
        iso6393: "dus"
    },
    {
        name: "Drung",
        type: "living",
        scope: "individual",
        iso6393: "duu"
    },
    {
        name: "Duvle",
        type: "living",
        scope: "individual",
        iso6393: "duv"
    },
    {
        name: "Dusun Witu",
        type: "living",
        scope: "individual",
        iso6393: "duw"
    },
    {
        name: "Duungooma",
        type: "living",
        scope: "individual",
        iso6393: "dux"
    },
    {
        name: "Dicamay Agta",
        type: "extinct",
        scope: "individual",
        iso6393: "duy"
    },
    {
        name: "Duli-Gey",
        type: "extinct",
        scope: "individual",
        iso6393: "duz"
    },
    {
        name: "Duau",
        type: "living",
        scope: "individual",
        iso6393: "dva"
    },
    {
        name: "Diri",
        type: "living",
        scope: "individual",
        iso6393: "dwa"
    },
    {
        name: "Dawik Kui",
        type: "living",
        scope: "individual",
        iso6393: "dwk"
    },
    {
        name: "Dawro",
        type: "living",
        scope: "individual",
        iso6393: "dwr"
    },
    {
        name: "Dutton World Speedwords",
        type: "constructed",
        scope: "individual",
        iso6393: "dws"
    },
    {
        name: "Dhuwal",
        type: "living",
        scope: "individual",
        iso6393: "dwu"
    },
    {
        name: "Dawawa",
        type: "living",
        scope: "individual",
        iso6393: "dww"
    },
    {
        name: "Dhuwaya",
        type: "living",
        scope: "individual",
        iso6393: "dwy"
    },
    {
        name: "Dewas Rai",
        type: "living",
        scope: "individual",
        iso6393: "dwz"
    },
    {
        name: "Dyan",
        type: "living",
        scope: "individual",
        iso6393: "dya"
    },
    {
        name: "Dyaberdyaber",
        type: "extinct",
        scope: "individual",
        iso6393: "dyb"
    },
    {
        name: "Dyugun",
        type: "extinct",
        scope: "individual",
        iso6393: "dyd"
    },
    {
        name: "Villa Viciosa Agta",
        type: "extinct",
        scope: "individual",
        iso6393: "dyg"
    },
    {
        name: "Djimini Senoufo",
        type: "living",
        scope: "individual",
        iso6393: "dyi"
    },
    {
        name: "Yanda Dom Dogon",
        type: "living",
        scope: "individual",
        iso6393: "dym"
    },
    {
        name: "Dyangadi",
        type: "living",
        scope: "individual",
        iso6393: "dyn"
    },
    {
        name: "Jola-Fonyi",
        type: "living",
        scope: "individual",
        iso6393: "dyo"
    },
    {
        name: "Dyula",
        type: "living",
        scope: "individual",
        iso6393: "dyu",
        iso6392B: "dyu",
        iso6392T: "dyu"
    },
    {
        name: "Djabugay",
        type: "living",
        scope: "individual",
        iso6393: "dyy"
    },
    {
        name: "Tunzu",
        type: "living",
        scope: "individual",
        iso6393: "dza"
    },
    {
        name: "Djiwarli",
        type: "extinct",
        scope: "individual",
        iso6393: "dze"
    },
    {
        name: "Dazaga",
        type: "living",
        scope: "individual",
        iso6393: "dzg"
    },
    {
        name: "Dzalakha",
        type: "living",
        scope: "individual",
        iso6393: "dzl"
    },
    {
        name: "Dzando",
        type: "living",
        scope: "individual",
        iso6393: "dzn"
    },
    {
        name: "Dzongkha",
        type: "living",
        scope: "individual",
        iso6393: "dzo",
        iso6392B: "dzo",
        iso6392T: "dzo",
        iso6391: "dz"
    },
    {
        name: "Karenggapa",
        type: "extinct",
        scope: "individual",
        iso6393: "eaa"
    },
    {
        name: "Beginci",
        type: "living",
        scope: "individual",
        iso6393: "ebc"
    },
    {
        name: "Ebughu",
        type: "living",
        scope: "individual",
        iso6393: "ebg"
    },
    {
        name: "Eastern Bontok",
        type: "living",
        scope: "individual",
        iso6393: "ebk"
    },
    {
        name: "Teke-Ebo",
        type: "living",
        scope: "individual",
        iso6393: "ebo"
    },
    {
        name: "Ebri\xe9",
        type: "living",
        scope: "individual",
        iso6393: "ebr"
    },
    {
        name: "Embu",
        type: "living",
        scope: "individual",
        iso6393: "ebu"
    },
    {
        name: "Eteocretan",
        type: "ancient",
        scope: "individual",
        iso6393: "ecr"
    },
    {
        name: "Ecuadorian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "ecs"
    },
    {
        name: "Eteocypriot",
        type: "ancient",
        scope: "individual",
        iso6393: "ecy"
    },
    {
        name: "E",
        type: "living",
        scope: "individual",
        iso6393: "eee"
    },
    {
        name: "Efai",
        type: "living",
        scope: "individual",
        iso6393: "efa"
    },
    {
        name: "Efe",
        type: "living",
        scope: "individual",
        iso6393: "efe"
    },
    {
        name: "Efik",
        type: "living",
        scope: "individual",
        iso6393: "efi",
        iso6392B: "efi",
        iso6392T: "efi"
    },
    {
        name: "Ega",
        type: "living",
        scope: "individual",
        iso6393: "ega"
    },
    {
        name: "Emilian",
        type: "living",
        scope: "individual",
        iso6393: "egl"
    },
    {
        name: "Eggon",
        type: "living",
        scope: "individual",
        iso6393: "ego"
    },
    {
        name: "Egyptian (Ancient)",
        type: "ancient",
        scope: "individual",
        iso6393: "egy",
        iso6392B: "egy",
        iso6392T: "egy"
    },
    {
        name: "Ehueun",
        type: "living",
        scope: "individual",
        iso6393: "ehu"
    },
    {
        name: "Eipomek",
        type: "living",
        scope: "individual",
        iso6393: "eip"
    },
    {
        name: "Eitiep",
        type: "living",
        scope: "individual",
        iso6393: "eit"
    },
    {
        name: "Askopan",
        type: "living",
        scope: "individual",
        iso6393: "eiv"
    },
    {
        name: "Ejamat",
        type: "living",
        scope: "individual",
        iso6393: "eja"
    },
    {
        name: "Ekajuk",
        type: "living",
        scope: "individual",
        iso6393: "eka",
        iso6392B: "eka",
        iso6392T: "eka"
    },
    {
        name: "Ekit",
        type: "living",
        scope: "individual",
        iso6393: "eke"
    },
    {
        name: "Ekari",
        type: "living",
        scope: "individual",
        iso6393: "ekg"
    },
    {
        name: "Eki",
        type: "living",
        scope: "individual",
        iso6393: "eki"
    },
    {
        name: "Standard Estonian",
        type: "living",
        scope: "individual",
        iso6393: "ekk"
    },
    {
        name: "Kol (Bangladesh)",
        type: "living",
        scope: "individual",
        iso6393: "ekl"
    },
    {
        name: "Elip",
        type: "living",
        scope: "individual",
        iso6393: "ekm"
    },
    {
        name: "Koti",
        type: "living",
        scope: "individual",
        iso6393: "eko"
    },
    {
        name: "Ekpeye",
        type: "living",
        scope: "individual",
        iso6393: "ekp"
    },
    {
        name: "Yace",
        type: "living",
        scope: "individual",
        iso6393: "ekr"
    },
    {
        name: "Eastern Kayah",
        type: "living",
        scope: "individual",
        iso6393: "eky"
    },
    {
        name: "Elepi",
        type: "living",
        scope: "individual",
        iso6393: "ele"
    },
    {
        name: "El Hugeirat",
        type: "living",
        scope: "individual",
        iso6393: "elh"
    },
    {
        name: "Nding",
        type: "extinct",
        scope: "individual",
        iso6393: "eli"
    },
    {
        name: "Elkei",
        type: "living",
        scope: "individual",
        iso6393: "elk"
    },
    {
        name: "Modern Greek (1453-)",
        type: "living",
        scope: "individual",
        iso6393: "ell",
        iso6392B: "gre",
        iso6392T: "ell",
        iso6391: "el"
    },
    {
        name: "Eleme",
        type: "living",
        scope: "individual",
        iso6393: "elm"
    },
    {
        name: "El Molo",
        type: "living",
        scope: "individual",
        iso6393: "elo"
    },
    {
        name: "Elu",
        type: "living",
        scope: "individual",
        iso6393: "elu"
    },
    {
        name: "Elamite",
        type: "ancient",
        scope: "individual",
        iso6393: "elx",
        iso6392B: "elx",
        iso6392T: "elx"
    },
    {
        name: "Emai-Iuleha-Ora",
        type: "living",
        scope: "individual",
        iso6393: "ema"
    },
    {
        name: "Embaloh",
        type: "living",
        scope: "individual",
        iso6393: "emb"
    },
    {
        name: "Emerillon",
        type: "living",
        scope: "individual",
        iso6393: "eme"
    },
    {
        name: "Eastern Meohang",
        type: "living",
        scope: "individual",
        iso6393: "emg"
    },
    {
        name: "Mussau-Emira",
        type: "living",
        scope: "individual",
        iso6393: "emi"
    },
    {
        name: "Eastern Maninkakan",
        type: "living",
        scope: "individual",
        iso6393: "emk"
    },
    {
        name: "Mamulique",
        type: "extinct",
        scope: "individual",
        iso6393: "emm"
    },
    {
        name: "Eman",
        type: "living",
        scope: "individual",
        iso6393: "emn"
    },
    {
        name: "Northern Ember\xe1",
        type: "living",
        scope: "individual",
        iso6393: "emp"
    },
    {
        name: "Pacific Gulf Yupik",
        type: "living",
        scope: "individual",
        iso6393: "ems"
    },
    {
        name: "Eastern Muria",
        type: "living",
        scope: "individual",
        iso6393: "emu"
    },
    {
        name: "Emplawas",
        type: "living",
        scope: "individual",
        iso6393: "emw"
    },
    {
        name: "Erromintxela",
        type: "living",
        scope: "individual",
        iso6393: "emx"
    },
    {
        name: "Epigraphic Mayan",
        type: "ancient",
        scope: "individual",
        iso6393: "emy"
    },
    {
        name: "Apali",
        type: "living",
        scope: "individual",
        iso6393: "ena"
    },
    {
        name: "Markweeta",
        type: "living",
        scope: "individual",
        iso6393: "enb"
    },
    {
        name: "En",
        type: "living",
        scope: "individual",
        iso6393: "enc"
    },
    {
        name: "Ende",
        type: "living",
        scope: "individual",
        iso6393: "end"
    },
    {
        name: "Forest Enets",
        type: "living",
        scope: "individual",
        iso6393: "enf"
    },
    {
        name: "English",
        type: "living",
        scope: "individual",
        iso6393: "eng",
        iso6392B: "eng",
        iso6392T: "eng",
        iso6391: "en"
    },
    {
        name: "Tundra Enets",
        type: "living",
        scope: "individual",
        iso6393: "enh"
    },
    {
        name: "Enlhet",
        type: "living",
        scope: "individual",
        iso6393: "enl"
    },
    {
        name: "Middle English (1100-1500)",
        type: "historical",
        scope: "individual",
        iso6393: "enm",
        iso6392B: "enm",
        iso6392T: "enm"
    },
    {
        name: "Engenni",
        type: "living",
        scope: "individual",
        iso6393: "enn"
    },
    {
        name: "Enggano",
        type: "living",
        scope: "individual",
        iso6393: "eno"
    },
    {
        name: "Enga",
        type: "living",
        scope: "individual",
        iso6393: "enq"
    },
    {
        name: "Emumu",
        type: "living",
        scope: "individual",
        iso6393: "enr"
    },
    {
        name: "Enu",
        type: "living",
        scope: "individual",
        iso6393: "enu"
    },
    {
        name: "Enwan (Edu State)",
        type: "living",
        scope: "individual",
        iso6393: "env"
    },
    {
        name: "Enwan (Akwa Ibom State)",
        type: "living",
        scope: "individual",
        iso6393: "enw"
    },
    {
        name: "Enxet",
        type: "living",
        scope: "individual",
        iso6393: "enx"
    },
    {
        name: "Beti (C\xf4te d'Ivoire)",
        type: "living",
        scope: "individual",
        iso6393: "eot"
    },
    {
        name: "Epie",
        type: "living",
        scope: "individual",
        iso6393: "epi"
    },
    {
        name: "Esperanto",
        type: "constructed",
        scope: "individual",
        iso6393: "epo",
        iso6392B: "epo",
        iso6392T: "epo",
        iso6391: "eo"
    },
    {
        name: "Eravallan",
        type: "living",
        scope: "individual",
        iso6393: "era"
    },
    {
        name: "Sie",
        type: "living",
        scope: "individual",
        iso6393: "erg"
    },
    {
        name: "Eruwa",
        type: "living",
        scope: "individual",
        iso6393: "erh"
    },
    {
        name: "Ogea",
        type: "living",
        scope: "individual",
        iso6393: "eri"
    },
    {
        name: "South Efate",
        type: "living",
        scope: "individual",
        iso6393: "erk"
    },
    {
        name: "Horpa",
        type: "living",
        scope: "individual",
        iso6393: "ero"
    },
    {
        name: "Erre",
        type: "extinct",
        scope: "individual",
        iso6393: "err"
    },
    {
        name: "Ersu",
        type: "living",
        scope: "individual",
        iso6393: "ers"
    },
    {
        name: "Eritai",
        type: "living",
        scope: "individual",
        iso6393: "ert"
    },
    {
        name: "Erokwanas",
        type: "living",
        scope: "individual",
        iso6393: "erw"
    },
    {
        name: "Ese Ejja",
        type: "living",
        scope: "individual",
        iso6393: "ese"
    },
    {
        name: "Aheri Gondi",
        type: "living",
        scope: "individual",
        iso6393: "esg"
    },
    {
        name: "Eshtehardi",
        type: "living",
        scope: "individual",
        iso6393: "esh"
    },
    {
        name: "North Alaskan Inupiatun",
        type: "living",
        scope: "individual",
        iso6393: "esi"
    },
    {
        name: "Northwest Alaska Inupiatun",
        type: "living",
        scope: "individual",
        iso6393: "esk"
    },
    {
        name: "Egypt Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "esl"
    },
    {
        name: "Esuma",
        type: "extinct",
        scope: "individual",
        iso6393: "esm"
    },
    {
        name: "Salvadoran Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "esn"
    },
    {
        name: "Estonian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "eso"
    },
    {
        name: "Esselen",
        type: "extinct",
        scope: "individual",
        iso6393: "esq"
    },
    {
        name: "Central Siberian Yupik",
        type: "living",
        scope: "individual",
        iso6393: "ess"
    },
    {
        name: "Estonian",
        type: "living",
        scope: "macrolanguage",
        iso6393: "est",
        iso6392B: "est",
        iso6392T: "est",
        iso6391: "et"
    },
    {
        name: "Central Yupik",
        type: "living",
        scope: "individual",
        iso6393: "esu"
    },
    {
        name: "Eskayan",
        type: "living",
        scope: "individual",
        iso6393: "esy"
    },
    {
        name: "Etebi",
        type: "living",
        scope: "individual",
        iso6393: "etb"
    },
    {
        name: "Etchemin",
        type: "extinct",
        scope: "individual",
        iso6393: "etc"
    },
    {
        name: "Ethiopian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "eth"
    },
    {
        name: "Eton (Vanuatu)",
        type: "living",
        scope: "individual",
        iso6393: "etn"
    },
    {
        name: "Eton (Cameroon)",
        type: "living",
        scope: "individual",
        iso6393: "eto"
    },
    {
        name: "Edolo",
        type: "living",
        scope: "individual",
        iso6393: "etr"
    },
    {
        name: "Yekhee",
        type: "living",
        scope: "individual",
        iso6393: "ets"
    },
    {
        name: "Etruscan",
        type: "ancient",
        scope: "individual",
        iso6393: "ett"
    },
    {
        name: "Ejagham",
        type: "living",
        scope: "individual",
        iso6393: "etu"
    },
    {
        name: "Eten",
        type: "living",
        scope: "individual",
        iso6393: "etx"
    },
    {
        name: "Semimi",
        type: "living",
        scope: "individual",
        iso6393: "etz"
    },
    {
        name: "Basque",
        type: "living",
        scope: "individual",
        iso6393: "eus",
        iso6392B: "baq",
        iso6392T: "eus",
        iso6391: "eu"
    },
    {
        name: "Even",
        type: "living",
        scope: "individual",
        iso6393: "eve"
    },
    {
        name: "Uvbie",
        type: "living",
        scope: "individual",
        iso6393: "evh"
    },
    {
        name: "Evenki",
        type: "living",
        scope: "individual",
        iso6393: "evn"
    },
    {
        name: "Ewe",
        type: "living",
        scope: "individual",
        iso6393: "ewe",
        iso6392B: "ewe",
        iso6392T: "ewe",
        iso6391: "ee"
    },
    {
        name: "Ewondo",
        type: "living",
        scope: "individual",
        iso6393: "ewo",
        iso6392B: "ewo",
        iso6392T: "ewo"
    },
    {
        name: "Extremaduran",
        type: "living",
        scope: "individual",
        iso6393: "ext"
    },
    {
        name: "Eyak",
        type: "extinct",
        scope: "individual",
        iso6393: "eya"
    },
    {
        name: "Keiyo",
        type: "living",
        scope: "individual",
        iso6393: "eyo"
    },
    {
        name: "Ezaa",
        type: "living",
        scope: "individual",
        iso6393: "eza"
    },
    {
        name: "Uzekwe",
        type: "living",
        scope: "individual",
        iso6393: "eze"
    },
    {
        name: "Fasu",
        type: "living",
        scope: "individual",
        iso6393: "faa"
    },
    {
        name: "Fa d'Ambu",
        type: "living",
        scope: "individual",
        iso6393: "fab"
    },
    {
        name: "Wagi",
        type: "living",
        scope: "individual",
        iso6393: "fad"
    },
    {
        name: "Fagani",
        type: "living",
        scope: "individual",
        iso6393: "faf"
    },
    {
        name: "Finongan",
        type: "living",
        scope: "individual",
        iso6393: "fag"
    },
    {
        name: "Baissa Fali",
        type: "living",
        scope: "individual",
        iso6393: "fah"
    },
    {
        name: "Faiwol",
        type: "living",
        scope: "individual",
        iso6393: "fai"
    },
    {
        name: "Faita",
        type: "living",
        scope: "individual",
        iso6393: "faj"
    },
    {
        name: "Fang (Cameroon)",
        type: "living",
        scope: "individual",
        iso6393: "fak"
    },
    {
        name: "South Fali",
        type: "living",
        scope: "individual",
        iso6393: "fal"
    },
    {
        name: "Fam",
        type: "living",
        scope: "individual",
        iso6393: "fam"
    },
    {
        name: "Fang (Equatorial Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "fan",
        iso6392B: "fan",
        iso6392T: "fan"
    },
    {
        name: "Faroese",
        type: "living",
        scope: "individual",
        iso6393: "fao",
        iso6392B: "fao",
        iso6392T: "fao",
        iso6391: "fo"
    },
    {
        name: "Paloor",
        type: "living",
        scope: "individual",
        iso6393: "fap"
    },
    {
        name: "Fataleka",
        type: "living",
        scope: "individual",
        iso6393: "far"
    },
    {
        name: "Persian",
        type: "living",
        scope: "macrolanguage",
        iso6393: "fas",
        iso6392B: "per",
        iso6392T: "fas",
        iso6391: "fa"
    },
    {
        name: "Fanti",
        type: "living",
        scope: "individual",
        iso6393: "fat",
        iso6392B: "fat",
        iso6392T: "fat"
    },
    {
        name: "Fayu",
        type: "living",
        scope: "individual",
        iso6393: "fau"
    },
    {
        name: "Fala",
        type: "living",
        scope: "individual",
        iso6393: "fax"
    },
    {
        name: "Southwestern Fars",
        type: "living",
        scope: "individual",
        iso6393: "fay"
    },
    {
        name: "Northwestern Fars",
        type: "living",
        scope: "individual",
        iso6393: "faz"
    },
    {
        name: "West Albay Bikol",
        type: "living",
        scope: "individual",
        iso6393: "fbl"
    },
    {
        name: "Quebec Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "fcs"
    },
    {
        name: "Feroge",
        type: "living",
        scope: "individual",
        iso6393: "fer"
    },
    {
        name: "Foia Foia",
        type: "living",
        scope: "individual",
        iso6393: "ffi"
    },
    {
        name: "Maasina Fulfulde",
        type: "living",
        scope: "individual",
        iso6393: "ffm"
    },
    {
        name: "Fongoro",
        type: "living",
        scope: "individual",
        iso6393: "fgr"
    },
    {
        name: "Nobiin",
        type: "living",
        scope: "individual",
        iso6393: "fia"
    },
    {
        name: "Fyer",
        type: "living",
        scope: "individual",
        iso6393: "fie"
    },
    {
        name: "Faifi",
        type: "living",
        scope: "individual",
        iso6393: "fif"
    },
    {
        name: "Fijian",
        type: "living",
        scope: "individual",
        iso6393: "fij",
        iso6392B: "fij",
        iso6392T: "fij",
        iso6391: "fj"
    },
    {
        name: "Filipino",
        type: "living",
        scope: "individual",
        iso6393: "fil",
        iso6392B: "fil",
        iso6392T: "fil"
    },
    {
        name: "Finnish",
        type: "living",
        scope: "individual",
        iso6393: "fin",
        iso6392B: "fin",
        iso6392T: "fin",
        iso6391: "fi"
    },
    {
        name: "Fipa",
        type: "living",
        scope: "individual",
        iso6393: "fip"
    },
    {
        name: "Firan",
        type: "living",
        scope: "individual",
        iso6393: "fir"
    },
    {
        name: "Tornedalen Finnish",
        type: "living",
        scope: "individual",
        iso6393: "fit"
    },
    {
        name: "Fiwaga",
        type: "living",
        scope: "individual",
        iso6393: "fiw"
    },
    {
        name: "Kirya-Konzəl",
        type: "living",
        scope: "individual",
        iso6393: "fkk"
    },
    {
        name: "Kven Finnish",
        type: "living",
        scope: "individual",
        iso6393: "fkv"
    },
    {
        name: "Kalispel-Pend d'Oreille",
        type: "living",
        scope: "individual",
        iso6393: "fla"
    },
    {
        name: "Foau",
        type: "living",
        scope: "individual",
        iso6393: "flh"
    },
    {
        name: "Fali",
        type: "living",
        scope: "individual",
        iso6393: "fli"
    },
    {
        name: "North Fali",
        type: "living",
        scope: "individual",
        iso6393: "fll"
    },
    {
        name: "Flinders Island",
        type: "extinct",
        scope: "individual",
        iso6393: "fln"
    },
    {
        name: "Fuliiru",
        type: "living",
        scope: "individual",
        iso6393: "flr"
    },
    {
        name: "Flaaitaal",
        type: "living",
        scope: "individual",
        iso6393: "fly"
    },
    {
        name: "Fe'fe'",
        type: "living",
        scope: "individual",
        iso6393: "fmp"
    },
    {
        name: "Far Western Muria",
        type: "living",
        scope: "individual",
        iso6393: "fmu"
    },
    {
        name: "Fanbak",
        type: "living",
        scope: "individual",
        iso6393: "fnb"
    },
    {
        name: "Fanagalo",
        type: "living",
        scope: "individual",
        iso6393: "fng"
    },
    {
        name: "Fania",
        type: "living",
        scope: "individual",
        iso6393: "fni"
    },
    {
        name: "Foodo",
        type: "living",
        scope: "individual",
        iso6393: "fod"
    },
    {
        name: "Foi",
        type: "living",
        scope: "individual",
        iso6393: "foi"
    },
    {
        name: "Foma",
        type: "living",
        scope: "individual",
        iso6393: "fom"
    },
    {
        name: "Fon",
        type: "living",
        scope: "individual",
        iso6393: "fon",
        iso6392B: "fon",
        iso6392T: "fon"
    },
    {
        name: "Fore",
        type: "living",
        scope: "individual",
        iso6393: "for"
    },
    {
        name: "Siraya",
        type: "extinct",
        scope: "individual",
        iso6393: "fos"
    },
    {
        name: "Fernando Po Creole English",
        type: "living",
        scope: "individual",
        iso6393: "fpe"
    },
    {
        name: "Fas",
        type: "living",
        scope: "individual",
        iso6393: "fqs"
    },
    {
        name: "French",
        type: "living",
        scope: "individual",
        iso6393: "fra",
        iso6392B: "fre",
        iso6392T: "fra",
        iso6391: "fr"
    },
    {
        name: "Cajun French",
        type: "living",
        scope: "individual",
        iso6393: "frc"
    },
    {
        name: "Fordata",
        type: "living",
        scope: "individual",
        iso6393: "frd"
    },
    {
        name: "Frankish",
        type: "historical",
        scope: "individual",
        iso6393: "frk"
    },
    {
        name: "Middle French (ca. 1400-1600)",
        type: "historical",
        scope: "individual",
        iso6393: "frm",
        iso6392B: "frm",
        iso6392T: "frm"
    },
    {
        name: "Old French (842-ca. 1400)",
        type: "historical",
        scope: "individual",
        iso6393: "fro",
        iso6392B: "fro",
        iso6392T: "fro"
    },
    {
        name: "Arpitan",
        type: "living",
        scope: "individual",
        iso6393: "frp"
    },
    {
        name: "Forak",
        type: "living",
        scope: "individual",
        iso6393: "frq"
    },
    {
        name: "Northern Frisian",
        type: "living",
        scope: "individual",
        iso6393: "frr",
        iso6392B: "frr",
        iso6392T: "frr"
    },
    {
        name: "Eastern Frisian",
        type: "living",
        scope: "individual",
        iso6393: "frs",
        iso6392B: "frs",
        iso6392T: "frs"
    },
    {
        name: "Fortsenal",
        type: "living",
        scope: "individual",
        iso6393: "frt"
    },
    {
        name: "Western Frisian",
        type: "living",
        scope: "individual",
        iso6393: "fry",
        iso6392B: "fry",
        iso6392T: "fry",
        iso6391: "fy"
    },
    {
        name: "Finnish Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "fse"
    },
    {
        name: "French Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "fsl"
    },
    {
        name: "Finland-Swedish Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "fss"
    },
    {
        name: "Adamawa Fulfulde",
        type: "living",
        scope: "individual",
        iso6393: "fub"
    },
    {
        name: "Pulaar",
        type: "living",
        scope: "individual",
        iso6393: "fuc"
    },
    {
        name: "East Futuna",
        type: "living",
        scope: "individual",
        iso6393: "fud"
    },
    {
        name: "Borgu Fulfulde",
        type: "living",
        scope: "individual",
        iso6393: "fue"
    },
    {
        name: "Pular",
        type: "living",
        scope: "individual",
        iso6393: "fuf"
    },
    {
        name: "Western Niger Fulfulde",
        type: "living",
        scope: "individual",
        iso6393: "fuh"
    },
    {
        name: "Bagirmi Fulfulde",
        type: "living",
        scope: "individual",
        iso6393: "fui"
    },
    {
        name: "Ko",
        type: "living",
        scope: "individual",
        iso6393: "fuj"
    },
    {
        name: "Fulah",
        type: "living",
        scope: "macrolanguage",
        iso6393: "ful",
        iso6392B: "ful",
        iso6392T: "ful",
        iso6391: "ff"
    },
    {
        name: "Fum",
        type: "living",
        scope: "individual",
        iso6393: "fum"
    },
    {
        name: "Fulni\xf4",
        type: "living",
        scope: "individual",
        iso6393: "fun"
    },
    {
        name: "Central-Eastern Niger Fulfulde",
        type: "living",
        scope: "individual",
        iso6393: "fuq"
    },
    {
        name: "Friulian",
        type: "living",
        scope: "individual",
        iso6393: "fur",
        iso6392B: "fur",
        iso6392T: "fur"
    },
    {
        name: "Futuna-Aniwa",
        type: "living",
        scope: "individual",
        iso6393: "fut"
    },
    {
        name: "Furu",
        type: "living",
        scope: "individual",
        iso6393: "fuu"
    },
    {
        name: "Nigerian Fulfulde",
        type: "living",
        scope: "individual",
        iso6393: "fuv"
    },
    {
        name: "Fuyug",
        type: "living",
        scope: "individual",
        iso6393: "fuy"
    },
    {
        name: "Fur",
        type: "living",
        scope: "individual",
        iso6393: "fvr"
    },
    {
        name: "Fw\xe2i",
        type: "living",
        scope: "individual",
        iso6393: "fwa"
    },
    {
        name: "Fwe",
        type: "living",
        scope: "individual",
        iso6393: "fwe"
    },
    {
        name: "Ga",
        type: "living",
        scope: "individual",
        iso6393: "gaa",
        iso6392B: "gaa",
        iso6392T: "gaa"
    },
    {
        name: "Gabri",
        type: "living",
        scope: "individual",
        iso6393: "gab"
    },
    {
        name: "Mixed Great Andamanese",
        type: "living",
        scope: "individual",
        iso6393: "gac"
    },
    {
        name: "Gaddang",
        type: "living",
        scope: "individual",
        iso6393: "gad"
    },
    {
        name: "Guarequena",
        type: "living",
        scope: "individual",
        iso6393: "gae"
    },
    {
        name: "Gende",
        type: "living",
        scope: "individual",
        iso6393: "gaf"
    },
    {
        name: "Gagauz",
        type: "living",
        scope: "individual",
        iso6393: "gag"
    },
    {
        name: "Alekano",
        type: "living",
        scope: "individual",
        iso6393: "gah"
    },
    {
        name: "Borei",
        type: "living",
        scope: "individual",
        iso6393: "gai"
    },
    {
        name: "Gadsup",
        type: "living",
        scope: "individual",
        iso6393: "gaj"
    },
    {
        name: "Gamkonora",
        type: "living",
        scope: "individual",
        iso6393: "gak"
    },
    {
        name: "Galolen",
        type: "living",
        scope: "individual",
        iso6393: "gal"
    },
    {
        name: "Kandawo",
        type: "living",
        scope: "individual",
        iso6393: "gam"
    },
    {
        name: "Gan Chinese",
        type: "living",
        scope: "individual",
        iso6393: "gan"
    },
    {
        name: "Gants",
        type: "living",
        scope: "individual",
        iso6393: "gao"
    },
    {
        name: "Gal",
        type: "living",
        scope: "individual",
        iso6393: "gap"
    },
    {
        name: "Gata'",
        type: "living",
        scope: "individual",
        iso6393: "gaq"
    },
    {
        name: "Galeya",
        type: "living",
        scope: "individual",
        iso6393: "gar"
    },
    {
        name: "Adiwasi Garasia",
        type: "living",
        scope: "individual",
        iso6393: "gas"
    },
    {
        name: "Kenati",
        type: "living",
        scope: "individual",
        iso6393: "gat"
    },
    {
        name: "Mudhili Gadaba",
        type: "living",
        scope: "individual",
        iso6393: "gau"
    },
    {
        name: "Nobonob",
        type: "living",
        scope: "individual",
        iso6393: "gaw"
    },
    {
        name: "Borana-Arsi-Guji Oromo",
        type: "living",
        scope: "individual",
        iso6393: "gax"
    },
    {
        name: "Gayo",
        type: "living",
        scope: "individual",
        iso6393: "gay",
        iso6392B: "gay",
        iso6392T: "gay"
    },
    {
        name: "West Central Oromo",
        type: "living",
        scope: "individual",
        iso6393: "gaz"
    },
    {
        name: "Gbaya (Central African Republic)",
        type: "living",
        scope: "macrolanguage",
        iso6393: "gba",
        iso6392B: "gba",
        iso6392T: "gba"
    },
    {
        name: "Kaytetye",
        type: "living",
        scope: "individual",
        iso6393: "gbb"
    },
    {
        name: "Karajarri",
        type: "living",
        scope: "individual",
        iso6393: "gbd"
    },
    {
        name: "Niksek",
        type: "living",
        scope: "individual",
        iso6393: "gbe"
    },
    {
        name: "Gaikundi",
        type: "living",
        scope: "individual",
        iso6393: "gbf"
    },
    {
        name: "Gbanziri",
        type: "living",
        scope: "individual",
        iso6393: "gbg"
    },
    {
        name: "Defi Gbe",
        type: "living",
        scope: "individual",
        iso6393: "gbh"
    },
    {
        name: "Galela",
        type: "living",
        scope: "individual",
        iso6393: "gbi"
    },
    {
        name: "Bodo Gadaba",
        type: "living",
        scope: "individual",
        iso6393: "gbj"
    },
    {
        name: "Gaddi",
        type: "living",
        scope: "individual",
        iso6393: "gbk"
    },
    {
        name: "Gamit",
        type: "living",
        scope: "individual",
        iso6393: "gbl"
    },
    {
        name: "Garhwali",
        type: "living",
        scope: "individual",
        iso6393: "gbm"
    },
    {
        name: "Mo'da",
        type: "living",
        scope: "individual",
        iso6393: "gbn"
    },
    {
        name: "Northern Grebo",
        type: "living",
        scope: "individual",
        iso6393: "gbo"
    },
    {
        name: "Gbaya-Bossangoa",
        type: "living",
        scope: "individual",
        iso6393: "gbp"
    },
    {
        name: "Gbaya-Bozoum",
        type: "living",
        scope: "individual",
        iso6393: "gbq"
    },
    {
        name: "Gbagyi",
        type: "living",
        scope: "individual",
        iso6393: "gbr"
    },
    {
        name: "Gbesi Gbe",
        type: "living",
        scope: "individual",
        iso6393: "gbs"
    },
    {
        name: "Gagadu",
        type: "living",
        scope: "individual",
        iso6393: "gbu"
    },
    {
        name: "Gbanu",
        type: "living",
        scope: "individual",
        iso6393: "gbv"
    },
    {
        name: "Gabi-Gabi",
        type: "living",
        scope: "individual",
        iso6393: "gbw"
    },
    {
        name: "Eastern Xwla Gbe",
        type: "living",
        scope: "individual",
        iso6393: "gbx"
    },
    {
        name: "Gbari",
        type: "living",
        scope: "individual",
        iso6393: "gby"
    },
    {
        name: "Zoroastrian Dari",
        type: "living",
        scope: "individual",
        iso6393: "gbz"
    },
    {
        name: "Mali",
        type: "living",
        scope: "individual",
        iso6393: "gcc"
    },
    {
        name: "Ganggalida",
        type: "extinct",
        scope: "individual",
        iso6393: "gcd"
    },
    {
        name: "Galice",
        type: "extinct",
        scope: "individual",
        iso6393: "gce"
    },
    {
        name: "Guadeloupean Creole French",
        type: "living",
        scope: "individual",
        iso6393: "gcf"
    },
    {
        name: "Grenadian Creole English",
        type: "living",
        scope: "individual",
        iso6393: "gcl"
    },
    {
        name: "Gaina",
        type: "living",
        scope: "individual",
        iso6393: "gcn"
    },
    {
        name: "Guianese Creole French",
        type: "living",
        scope: "individual",
        iso6393: "gcr"
    },
    {
        name: "Colonia Tovar German",
        type: "living",
        scope: "individual",
        iso6393: "gct"
    },
    {
        name: "Gade Lohar",
        type: "living",
        scope: "individual",
        iso6393: "gda"
    },
    {
        name: "Pottangi Ollar Gadaba",
        type: "living",
        scope: "individual",
        iso6393: "gdb"
    },
    {
        name: "Gugu Badhun",
        type: "extinct",
        scope: "individual",
        iso6393: "gdc"
    },
    {
        name: "Gedaged",
        type: "living",
        scope: "individual",
        iso6393: "gdd"
    },
    {
        name: "Gude",
        type: "living",
        scope: "individual",
        iso6393: "gde"
    },
    {
        name: "Guduf-Gava",
        type: "living",
        scope: "individual",
        iso6393: "gdf"
    },
    {
        name: "Ga'dang",
        type: "living",
        scope: "individual",
        iso6393: "gdg"
    },
    {
        name: "Gadjerawang",
        type: "living",
        scope: "individual",
        iso6393: "gdh"
    },
    {
        name: "Gundi",
        type: "living",
        scope: "individual",
        iso6393: "gdi"
    },
    {
        name: "Gurdjar",
        type: "living",
        scope: "individual",
        iso6393: "gdj"
    },
    {
        name: "Gadang",
        type: "living",
        scope: "individual",
        iso6393: "gdk"
    },
    {
        name: "Dirasha",
        type: "living",
        scope: "individual",
        iso6393: "gdl"
    },
    {
        name: "Laal",
        type: "living",
        scope: "individual",
        iso6393: "gdm"
    },
    {
        name: "Umanakaina",
        type: "living",
        scope: "individual",
        iso6393: "gdn"
    },
    {
        name: "Ghodoberi",
        type: "living",
        scope: "individual",
        iso6393: "gdo"
    },
    {
        name: "Mehri",
        type: "living",
        scope: "individual",
        iso6393: "gdq"
    },
    {
        name: "Wipi",
        type: "living",
        scope: "individual",
        iso6393: "gdr"
    },
    {
        name: "Ghandruk Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "gds"
    },
    {
        name: "Kungardutyi",
        type: "extinct",
        scope: "individual",
        iso6393: "gdt"
    },
    {
        name: "Gudu",
        type: "living",
        scope: "individual",
        iso6393: "gdu"
    },
    {
        name: "Godwari",
        type: "living",
        scope: "individual",
        iso6393: "gdx"
    },
    {
        name: "Geruma",
        type: "living",
        scope: "individual",
        iso6393: "gea"
    },
    {
        name: "Kire",
        type: "living",
        scope: "individual",
        iso6393: "geb"
    },
    {
        name: "Gboloo Grebo",
        type: "living",
        scope: "individual",
        iso6393: "gec"
    },
    {
        name: "Gade",
        type: "living",
        scope: "individual",
        iso6393: "ged"
    },
    {
        name: "Gerai",
        type: "living",
        scope: "individual",
        iso6393: "gef"
    },
    {
        name: "Gengle",
        type: "living",
        scope: "individual",
        iso6393: "geg"
    },
    {
        name: "Hutterite German",
        type: "living",
        scope: "individual",
        iso6393: "geh"
    },
    {
        name: "Gebe",
        type: "living",
        scope: "individual",
        iso6393: "gei"
    },
    {
        name: "Gen",
        type: "living",
        scope: "individual",
        iso6393: "gej"
    },
    {
        name: "Ywom",
        type: "living",
        scope: "individual",
        iso6393: "gek"
    },
    {
        name: "ut-Ma'in",
        type: "living",
        scope: "individual",
        iso6393: "gel"
    },
    {
        name: "Geme",
        type: "living",
        scope: "individual",
        iso6393: "geq"
    },
    {
        name: "Geser-Gorom",
        type: "living",
        scope: "individual",
        iso6393: "ges"
    },
    {
        name: "Eviya",
        type: "living",
        scope: "individual",
        iso6393: "gev"
    },
    {
        name: "Gera",
        type: "living",
        scope: "individual",
        iso6393: "gew"
    },
    {
        name: "Garre",
        type: "living",
        scope: "individual",
        iso6393: "gex"
    },
    {
        name: "Enya",
        type: "living",
        scope: "individual",
        iso6393: "gey"
    },
    {
        name: "Geez",
        type: "ancient",
        scope: "individual",
        iso6393: "gez",
        iso6392B: "gez",
        iso6392T: "gez"
    },
    {
        name: "Patpatar",
        type: "living",
        scope: "individual",
        iso6393: "gfk"
    },
    {
        name: "Gafat",
        type: "extinct",
        scope: "individual",
        iso6393: "gft"
    },
    {
        name: "Gao",
        type: "living",
        scope: "individual",
        iso6393: "gga"
    },
    {
        name: "Gbii",
        type: "living",
        scope: "individual",
        iso6393: "ggb"
    },
    {
        name: "Gugadj",
        type: "extinct",
        scope: "individual",
        iso6393: "ggd"
    },
    {
        name: "Gurr-goni",
        type: "living",
        scope: "individual",
        iso6393: "gge"
    },
    {
        name: "Gurgula",
        type: "living",
        scope: "individual",
        iso6393: "ggg"
    },
    {
        name: "Kungarakany",
        type: "extinct",
        scope: "individual",
        iso6393: "ggk"
    },
    {
        name: "Ganglau",
        type: "living",
        scope: "individual",
        iso6393: "ggl"
    },
    {
        name: "Gitua",
        type: "living",
        scope: "individual",
        iso6393: "ggt"
    },
    {
        name: "Gagu",
        type: "living",
        scope: "individual",
        iso6393: "ggu"
    },
    {
        name: "Gogodala",
        type: "living",
        scope: "individual",
        iso6393: "ggw"
    },
    {
        name: "Ghadam\xe8s",
        type: "living",
        scope: "individual",
        iso6393: "gha"
    },
    {
        name: "Hiberno-Scottish Gaelic",
        type: "historical",
        scope: "individual",
        iso6393: "ghc"
    },
    {
        name: "Southern Ghale",
        type: "living",
        scope: "individual",
        iso6393: "ghe"
    },
    {
        name: "Northern Ghale",
        type: "living",
        scope: "individual",
        iso6393: "ghh"
    },
    {
        name: "Geko Karen",
        type: "living",
        scope: "individual",
        iso6393: "ghk"
    },
    {
        name: "Ghulfan",
        type: "living",
        scope: "individual",
        iso6393: "ghl"
    },
    {
        name: "Ghanongga",
        type: "living",
        scope: "individual",
        iso6393: "ghn"
    },
    {
        name: "Ghomara",
        type: "extinct",
        scope: "individual",
        iso6393: "gho"
    },
    {
        name: "Ghera",
        type: "living",
        scope: "individual",
        iso6393: "ghr"
    },
    {
        name: "Guhu-Samane",
        type: "living",
        scope: "individual",
        iso6393: "ghs"
    },
    {
        name: "Kuke",
        type: "living",
        scope: "individual",
        iso6393: "ght"
    },
    {
        name: "Kija",
        type: "living",
        scope: "individual",
        iso6393: "gia"
    },
    {
        name: "Gibanawa",
        type: "living",
        scope: "individual",
        iso6393: "gib"
    },
    {
        name: "Gail",
        type: "living",
        scope: "individual",
        iso6393: "gic"
    },
    {
        name: "Gidar",
        type: "living",
        scope: "individual",
        iso6393: "gid"
    },
    {
        name: "Gaɓogbo",
        type: "living",
        scope: "individual",
        iso6393: "gie"
    },
    {
        name: "Goaria",
        type: "living",
        scope: "individual",
        iso6393: "gig"
    },
    {
        name: "Githabul",
        type: "living",
        scope: "individual",
        iso6393: "gih"
    },
    {
        name: "Gilbertese",
        type: "living",
        scope: "individual",
        iso6393: "gil",
        iso6392B: "gil",
        iso6392T: "gil"
    },
    {
        name: "Gimi (Eastern Highlands)",
        type: "living",
        scope: "individual",
        iso6393: "gim"
    },
    {
        name: "Hinukh",
        type: "living",
        scope: "individual",
        iso6393: "gin"
    },
    {
        name: "Gimi (West New Britain)",
        type: "living",
        scope: "individual",
        iso6393: "gip"
    },
    {
        name: "Green Gelao",
        type: "living",
        scope: "individual",
        iso6393: "giq"
    },
    {
        name: "Red Gelao",
        type: "living",
        scope: "individual",
        iso6393: "gir"
    },
    {
        name: "North Giziga",
        type: "living",
        scope: "individual",
        iso6393: "gis"
    },
    {
        name: "Gitxsan",
        type: "living",
        scope: "individual",
        iso6393: "git"
    },
    {
        name: "Mulao",
        type: "living",
        scope: "individual",
        iso6393: "giu"
    },
    {
        name: "White Gelao",
        type: "living",
        scope: "individual",
        iso6393: "giw"
    },
    {
        name: "Gilima",
        type: "living",
        scope: "individual",
        iso6393: "gix"
    },
    {
        name: "Giyug",
        type: "living",
        scope: "individual",
        iso6393: "giy"
    },
    {
        name: "South Giziga",
        type: "living",
        scope: "individual",
        iso6393: "giz"
    },
    {
        name: "Geji",
        type: "living",
        scope: "individual",
        iso6393: "gji"
    },
    {
        name: "Kachi Koli",
        type: "living",
        scope: "individual",
        iso6393: "gjk"
    },
    {
        name: "Gunditjmara",
        type: "extinct",
        scope: "individual",
        iso6393: "gjm"
    },
    {
        name: "Gonja",
        type: "living",
        scope: "individual",
        iso6393: "gjn"
    },
    {
        name: "Gurindji Kriol",
        type: "living",
        scope: "individual",
        iso6393: "gjr"
    },
    {
        name: "Gujari",
        type: "living",
        scope: "individual",
        iso6393: "gju"
    },
    {
        name: "Guya",
        type: "living",
        scope: "individual",
        iso6393: "gka"
    },
    {
        name: "Magɨ (Madang Province)",
        type: "living",
        scope: "individual",
        iso6393: "gkd"
    },
    {
        name: "Ndai",
        type: "living",
        scope: "individual",
        iso6393: "gke"
    },
    {
        name: "Gokana",
        type: "living",
        scope: "individual",
        iso6393: "gkn"
    },
    {
        name: "Kok-Nar",
        type: "extinct",
        scope: "individual",
        iso6393: "gko"
    },
    {
        name: "Guinea Kpelle",
        type: "living",
        scope: "individual",
        iso6393: "gkp"
    },
    {
        name: "ǂUngkue",
        type: "extinct",
        scope: "individual",
        iso6393: "gku"
    },
    {
        name: "Scottish Gaelic",
        type: "living",
        scope: "individual",
        iso6393: "gla",
        iso6392B: "gla",
        iso6392T: "gla",
        iso6391: "gd"
    },
    {
        name: "Bon Gula",
        type: "living",
        scope: "individual",
        iso6393: "glc"
    },
    {
        name: "Nanai",
        type: "living",
        scope: "individual",
        iso6393: "gld"
    },
    {
        name: "Irish",
        type: "living",
        scope: "individual",
        iso6393: "gle",
        iso6392B: "gle",
        iso6392T: "gle",
        iso6391: "ga"
    },
    {
        name: "Galician",
        type: "living",
        scope: "individual",
        iso6393: "glg",
        iso6392B: "glg",
        iso6392T: "glg",
        iso6391: "gl"
    },
    {
        name: "Northwest Pashai",
        type: "living",
        scope: "individual",
        iso6393: "glh"
    },
    {
        name: "Gula Iro",
        type: "living",
        scope: "individual",
        iso6393: "glj"
    },
    {
        name: "Gilaki",
        type: "living",
        scope: "individual",
        iso6393: "glk"
    },
    {
        name: "Garlali",
        type: "extinct",
        scope: "individual",
        iso6393: "gll"
    },
    {
        name: "Galambu",
        type: "living",
        scope: "individual",
        iso6393: "glo"
    },
    {
        name: "Glaro-Twabo",
        type: "living",
        scope: "individual",
        iso6393: "glr"
    },
    {
        name: "Gula (Chad)",
        type: "living",
        scope: "individual",
        iso6393: "glu"
    },
    {
        name: "Manx",
        type: "living",
        scope: "individual",
        iso6393: "glv",
        iso6392B: "glv",
        iso6392T: "glv",
        iso6391: "gv"
    },
    {
        name: "Glavda",
        type: "living",
        scope: "individual",
        iso6393: "glw"
    },
    {
        name: "Gule",
        type: "extinct",
        scope: "individual",
        iso6393: "gly"
    },
    {
        name: "Gambera",
        type: "extinct",
        scope: "individual",
        iso6393: "gma"
    },
    {
        name: "Gula'alaa",
        type: "living",
        scope: "individual",
        iso6393: "gmb"
    },
    {
        name: "M\xe1ghd\xec",
        type: "living",
        scope: "individual",
        iso6393: "gmd"
    },
    {
        name: "Magɨyi",
        type: "living",
        scope: "individual",
        iso6393: "gmg"
    },
    {
        name: "Middle High German (ca. 1050-1500)",
        type: "historical",
        scope: "individual",
        iso6393: "gmh",
        iso6392B: "gmh",
        iso6392T: "gmh"
    },
    {
        name: "Middle Low German",
        type: "historical",
        scope: "individual",
        iso6393: "gml"
    },
    {
        name: "Gbaya-Mbodomo",
        type: "living",
        scope: "individual",
        iso6393: "gmm"
    },
    {
        name: "Gimnime",
        type: "living",
        scope: "individual",
        iso6393: "gmn"
    },
    {
        name: "Mirning",
        type: "living",
        scope: "individual",
        iso6393: "gmr"
    },
    {
        name: "Gumalu",
        type: "living",
        scope: "individual",
        iso6393: "gmu"
    },
    {
        name: "Gamo",
        type: "living",
        scope: "individual",
        iso6393: "gmv"
    },
    {
        name: "Magoma",
        type: "living",
        scope: "individual",
        iso6393: "gmx"
    },
    {
        name: "Mycenaean Greek",
        type: "ancient",
        scope: "individual",
        iso6393: "gmy"
    },
    {
        name: "Mgbolizhia",
        type: "living",
        scope: "individual",
        iso6393: "gmz"
    },
    {
        name: "Kaansa",
        type: "living",
        scope: "individual",
        iso6393: "gna"
    },
    {
        name: "Gangte",
        type: "living",
        scope: "individual",
        iso6393: "gnb"
    },
    {
        name: "Guanche",
        type: "extinct",
        scope: "individual",
        iso6393: "gnc"
    },
    {
        name: "Zulgo-Gemzek",
        type: "living",
        scope: "individual",
        iso6393: "gnd"
    },
    {
        name: "Ganang",
        type: "living",
        scope: "individual",
        iso6393: "gne"
    },
    {
        name: "Ngangam",
        type: "living",
        scope: "individual",
        iso6393: "gng"
    },
    {
        name: "Lere",
        type: "living",
        scope: "individual",
        iso6393: "gnh"
    },
    {
        name: "Gooniyandi",
        type: "living",
        scope: "individual",
        iso6393: "gni"
    },
    {
        name: "Ngen",
        type: "living",
        scope: "individual",
        iso6393: "gnj"
    },
    {
        name: "ǁGana",
        type: "living",
        scope: "individual",
        iso6393: "gnk"
    },
    {
        name: "Gangulu",
        type: "extinct",
        scope: "individual",
        iso6393: "gnl"
    },
    {
        name: "Ginuman",
        type: "living",
        scope: "individual",
        iso6393: "gnm"
    },
    {
        name: "Gumatj",
        type: "living",
        scope: "individual",
        iso6393: "gnn"
    },
    {
        name: "Northern Gondi",
        type: "living",
        scope: "individual",
        iso6393: "gno"
    },
    {
        name: "Gana",
        type: "living",
        scope: "individual",
        iso6393: "gnq"
    },
    {
        name: "Gureng Gureng",
        type: "extinct",
        scope: "individual",
        iso6393: "gnr"
    },
    {
        name: "Guntai",
        type: "living",
        scope: "individual",
        iso6393: "gnt"
    },
    {
        name: "Gnau",
        type: "living",
        scope: "individual",
        iso6393: "gnu"
    },
    {
        name: "Western Bolivian Guaran\xed",
        type: "living",
        scope: "individual",
        iso6393: "gnw"
    },
    {
        name: "Ganzi",
        type: "living",
        scope: "individual",
        iso6393: "gnz"
    },
    {
        name: "Guro",
        type: "living",
        scope: "individual",
        iso6393: "goa"
    },
    {
        name: "Playero",
        type: "living",
        scope: "individual",
        iso6393: "gob"
    },
    {
        name: "Gorakor",
        type: "living",
        scope: "individual",
        iso6393: "goc"
    },
    {
        name: "Godi\xe9",
        type: "living",
        scope: "individual",
        iso6393: "god"
    },
    {
        name: "Gongduk",
        type: "living",
        scope: "individual",
        iso6393: "goe"
    },
    {
        name: "Gofa",
        type: "living",
        scope: "individual",
        iso6393: "gof"
    },
    {
        name: "Gogo",
        type: "living",
        scope: "individual",
        iso6393: "gog"
    },
    {
        name: "Old High German (ca. 750-1050)",
        type: "historical",
        scope: "individual",
        iso6393: "goh",
        iso6392B: "goh",
        iso6392T: "goh"
    },
    {
        name: "Gobasi",
        type: "living",
        scope: "individual",
        iso6393: "goi"
    },
    {
        name: "Gowlan",
        type: "living",
        scope: "individual",
        iso6393: "goj"
    },
    {
        name: "Gowli",
        type: "living",
        scope: "individual",
        iso6393: "gok"
    },
    {
        name: "Gola",
        type: "living",
        scope: "individual",
        iso6393: "gol"
    },
    {
        name: "Goan Konkani",
        type: "living",
        scope: "individual",
        iso6393: "gom"
    },
    {
        name: "Gondi",
        type: "living",
        scope: "macrolanguage",
        iso6393: "gon",
        iso6392B: "gon",
        iso6392T: "gon"
    },
    {
        name: "Gone Dau",
        type: "living",
        scope: "individual",
        iso6393: "goo"
    },
    {
        name: "Yeretuar",
        type: "living",
        scope: "individual",
        iso6393: "gop"
    },
    {
        name: "Gorap",
        type: "living",
        scope: "individual",
        iso6393: "goq"
    },
    {
        name: "Gorontalo",
        type: "living",
        scope: "individual",
        iso6393: "gor",
        iso6392B: "gor",
        iso6392T: "gor"
    },
    {
        name: "Gronings",
        type: "living",
        scope: "individual",
        iso6393: "gos"
    },
    {
        name: "Gothic",
        type: "ancient",
        scope: "individual",
        iso6393: "got",
        iso6392B: "got",
        iso6392T: "got"
    },
    {
        name: "Gavar",
        type: "living",
        scope: "individual",
        iso6393: "gou"
    },
    {
        name: "Gorowa",
        type: "living",
        scope: "individual",
        iso6393: "gow"
    },
    {
        name: "Gobu",
        type: "living",
        scope: "individual",
        iso6393: "gox"
    },
    {
        name: "Goundo",
        type: "living",
        scope: "individual",
        iso6393: "goy"
    },
    {
        name: "Gozarkhani",
        type: "living",
        scope: "individual",
        iso6393: "goz"
    },
    {
        name: "Gupa-Abawa",
        type: "living",
        scope: "individual",
        iso6393: "gpa"
    },
    {
        name: "Ghanaian Pidgin English",
        type: "living",
        scope: "individual",
        iso6393: "gpe"
    },
    {
        name: "Taiap",
        type: "living",
        scope: "individual",
        iso6393: "gpn"
    },
    {
        name: "Ga'anda",
        type: "living",
        scope: "individual",
        iso6393: "gqa"
    },
    {
        name: "Guiqiong",
        type: "living",
        scope: "individual",
        iso6393: "gqi"
    },
    {
        name: "Guana (Brazil)",
        type: "extinct",
        scope: "individual",
        iso6393: "gqn"
    },
    {
        name: "Gor",
        type: "living",
        scope: "individual",
        iso6393: "gqr"
    },
    {
        name: "Qau",
        type: "living",
        scope: "individual",
        iso6393: "gqu"
    },
    {
        name: "Rajput Garasia",
        type: "living",
        scope: "individual",
        iso6393: "gra"
    },
    {
        name: "Grebo",
        type: "living",
        scope: "macrolanguage",
        iso6393: "grb",
        iso6392B: "grb",
        iso6392T: "grb"
    },
    {
        name: "Ancient Greek (to 1453)",
        type: "historical",
        scope: "individual",
        iso6393: "grc",
        iso6392B: "grc",
        iso6392T: "grc"
    },
    {
        name: "Guruntum-Mbaaru",
        type: "living",
        scope: "individual",
        iso6393: "grd"
    },
    {
        name: "Madi",
        type: "living",
        scope: "individual",
        iso6393: "grg"
    },
    {
        name: "Gbiri-Niragu",
        type: "living",
        scope: "individual",
        iso6393: "grh"
    },
    {
        name: "Ghari",
        type: "living",
        scope: "individual",
        iso6393: "gri"
    },
    {
        name: "Southern Grebo",
        type: "living",
        scope: "individual",
        iso6393: "grj"
    },
    {
        name: "Kota Marudu Talantang",
        type: "living",
        scope: "individual",
        iso6393: "grm"
    },
    {
        name: "Guarani",
        type: "living",
        scope: "macrolanguage",
        iso6393: "grn",
        iso6392B: "grn",
        iso6392T: "grn",
        iso6391: "gn"
    },
    {
        name: "Groma",
        type: "living",
        scope: "individual",
        iso6393: "gro"
    },
    {
        name: "Gorovu",
        type: "living",
        scope: "individual",
        iso6393: "grq"
    },
    {
        name: "Taznatit",
        type: "living",
        scope: "individual",
        iso6393: "grr"
    },
    {
        name: "Gresi",
        type: "living",
        scope: "individual",
        iso6393: "grs"
    },
    {
        name: "Garo",
        type: "living",
        scope: "individual",
        iso6393: "grt"
    },
    {
        name: "Kistane",
        type: "living",
        scope: "individual",
        iso6393: "gru"
    },
    {
        name: "Central Grebo",
        type: "living",
        scope: "individual",
        iso6393: "grv"
    },
    {
        name: "Gweda",
        type: "living",
        scope: "individual",
        iso6393: "grw"
    },
    {
        name: "Guriaso",
        type: "living",
        scope: "individual",
        iso6393: "grx"
    },
    {
        name: "Barclayville Grebo",
        type: "living",
        scope: "individual",
        iso6393: "gry"
    },
    {
        name: "Guramalum",
        type: "living",
        scope: "individual",
        iso6393: "grz"
    },
    {
        name: "Ghanaian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "gse"
    },
    {
        name: "German Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "gsg"
    },
    {
        name: "Gusilay",
        type: "living",
        scope: "individual",
        iso6393: "gsl"
    },
    {
        name: "Guatemalan Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "gsm"
    },
    {
        name: "Nema",
        type: "living",
        scope: "individual",
        iso6393: "gsn"
    },
    {
        name: "Southwest Gbaya",
        type: "living",
        scope: "individual",
        iso6393: "gso"
    },
    {
        name: "Wasembo",
        type: "living",
        scope: "individual",
        iso6393: "gsp"
    },
    {
        name: "Greek Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "gss"
    },
    {
        name: "Swiss German",
        type: "living",
        scope: "individual",
        iso6393: "gsw",
        iso6392B: "gsw",
        iso6392T: "gsw"
    },
    {
        name: "Guat\xf3",
        type: "living",
        scope: "individual",
        iso6393: "gta"
    },
    {
        name: "Aghu-Tharnggala",
        type: "extinct",
        scope: "individual",
        iso6393: "gtu"
    },
    {
        name: "Shiki",
        type: "living",
        scope: "individual",
        iso6393: "gua"
    },
    {
        name: "Guajaj\xe1ra",
        type: "living",
        scope: "individual",
        iso6393: "gub"
    },
    {
        name: "Wayuu",
        type: "living",
        scope: "individual",
        iso6393: "guc"
    },
    {
        name: "Yocobou\xe9 Dida",
        type: "living",
        scope: "individual",
        iso6393: "gud"
    },
    {
        name: "Gurindji",
        type: "living",
        scope: "individual",
        iso6393: "gue"
    },
    {
        name: "Gupapuyngu",
        type: "living",
        scope: "individual",
        iso6393: "guf"
    },
    {
        name: "Paraguayan Guaran\xed",
        type: "living",
        scope: "individual",
        iso6393: "gug"
    },
    {
        name: "Guahibo",
        type: "living",
        scope: "individual",
        iso6393: "guh"
    },
    {
        name: "Eastern Bolivian Guaran\xed",
        type: "living",
        scope: "individual",
        iso6393: "gui"
    },
    {
        name: "Gujarati",
        type: "living",
        scope: "individual",
        iso6393: "guj",
        iso6392B: "guj",
        iso6392T: "guj",
        iso6391: "gu"
    },
    {
        name: "Gumuz",
        type: "living",
        scope: "individual",
        iso6393: "guk"
    },
    {
        name: "Sea Island Creole English",
        type: "living",
        scope: "individual",
        iso6393: "gul"
    },
    {
        name: "Guambiano",
        type: "living",
        scope: "individual",
        iso6393: "gum"
    },
    {
        name: "Mby\xe1 Guaran\xed",
        type: "living",
        scope: "individual",
        iso6393: "gun"
    },
    {
        name: "Guayabero",
        type: "living",
        scope: "individual",
        iso6393: "guo"
    },
    {
        name: "Gunwinggu",
        type: "living",
        scope: "individual",
        iso6393: "gup"
    },
    {
        name: "Ach\xe9",
        type: "living",
        scope: "individual",
        iso6393: "guq"
    },
    {
        name: "Farefare",
        type: "living",
        scope: "individual",
        iso6393: "gur"
    },
    {
        name: "Guinean Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "gus"
    },
    {
        name: "Mal\xe9ku Ja\xedka",
        type: "living",
        scope: "individual",
        iso6393: "gut"
    },
    {
        name: "Yanomam\xf6",
        type: "living",
        scope: "individual",
        iso6393: "guu"
    },
    {
        name: "Gun",
        type: "living",
        scope: "individual",
        iso6393: "guw"
    },
    {
        name: "Gourmanch\xe9ma",
        type: "living",
        scope: "individual",
        iso6393: "gux"
    },
    {
        name: "Gusii",
        type: "living",
        scope: "individual",
        iso6393: "guz"
    },
    {
        name: "Guana (Paraguay)",
        type: "living",
        scope: "individual",
        iso6393: "gva"
    },
    {
        name: "Guanano",
        type: "living",
        scope: "individual",
        iso6393: "gvc"
    },
    {
        name: "Duwet",
        type: "living",
        scope: "individual",
        iso6393: "gve"
    },
    {
        name: "Golin",
        type: "living",
        scope: "individual",
        iso6393: "gvf"
    },
    {
        name: "Guaj\xe1",
        type: "living",
        scope: "individual",
        iso6393: "gvj"
    },
    {
        name: "Gulay",
        type: "living",
        scope: "individual",
        iso6393: "gvl"
    },
    {
        name: "Gurmana",
        type: "living",
        scope: "individual",
        iso6393: "gvm"
    },
    {
        name: "Kuku-Yalanji",
        type: "living",
        scope: "individual",
        iso6393: "gvn"
    },
    {
        name: "Gavi\xe3o Do Jiparan\xe1",
        type: "living",
        scope: "individual",
        iso6393: "gvo"
    },
    {
        name: "Par\xe1 Gavi\xe3o",
        type: "living",
        scope: "individual",
        iso6393: "gvp"
    },
    {
        name: "Gurung",
        type: "living",
        scope: "individual",
        iso6393: "gvr"
    },
    {
        name: "Gumawana",
        type: "living",
        scope: "individual",
        iso6393: "gvs"
    },
    {
        name: "Guyani",
        type: "extinct",
        scope: "individual",
        iso6393: "gvy"
    },
    {
        name: "Mbato",
        type: "living",
        scope: "individual",
        iso6393: "gwa"
    },
    {
        name: "Gwa",
        type: "living",
        scope: "individual",
        iso6393: "gwb"
    },
    {
        name: "Gawri",
        type: "living",
        scope: "individual",
        iso6393: "gwc"
    },
    {
        name: "Gawwada",
        type: "living",
        scope: "individual",
        iso6393: "gwd"
    },
    {
        name: "Gweno",
        type: "living",
        scope: "individual",
        iso6393: "gwe"
    },
    {
        name: "Gowro",
        type: "living",
        scope: "individual",
        iso6393: "gwf"
    },
    {
        name: "Moo",
        type: "living",
        scope: "individual",
        iso6393: "gwg"
    },
    {
        name: "Gwichʼin",
        type: "living",
        scope: "individual",
        iso6393: "gwi",
        iso6392B: "gwi",
        iso6392T: "gwi"
    },
    {
        name: "ǀGwi",
        type: "living",
        scope: "individual",
        iso6393: "gwj"
    },
    {
        name: "Awngthim",
        type: "extinct",
        scope: "individual",
        iso6393: "gwm"
    },
    {
        name: "Gwandara",
        type: "living",
        scope: "individual",
        iso6393: "gwn"
    },
    {
        name: "Gwere",
        type: "living",
        scope: "individual",
        iso6393: "gwr"
    },
    {
        name: "Gawar-Bati",
        type: "living",
        scope: "individual",
        iso6393: "gwt"
    },
    {
        name: "Guwamu",
        type: "extinct",
        scope: "individual",
        iso6393: "gwu"
    },
    {
        name: "Kwini",
        type: "living",
        scope: "individual",
        iso6393: "gww"
    },
    {
        name: "Gua",
        type: "living",
        scope: "individual",
        iso6393: "gwx"
    },
    {
        name: "W\xe8 Southern",
        type: "living",
        scope: "individual",
        iso6393: "gxx"
    },
    {
        name: "Northwest Gbaya",
        type: "living",
        scope: "individual",
        iso6393: "gya"
    },
    {
        name: "Garus",
        type: "living",
        scope: "individual",
        iso6393: "gyb"
    },
    {
        name: "Kayardild",
        type: "living",
        scope: "individual",
        iso6393: "gyd"
    },
    {
        name: "Gyem",
        type: "living",
        scope: "individual",
        iso6393: "gye"
    },
    {
        name: "Gungabula",
        type: "extinct",
        scope: "individual",
        iso6393: "gyf"
    },
    {
        name: "Gbayi",
        type: "living",
        scope: "individual",
        iso6393: "gyg"
    },
    {
        name: "Gyele",
        type: "living",
        scope: "individual",
        iso6393: "gyi"
    },
    {
        name: "Gayil",
        type: "living",
        scope: "individual",
        iso6393: "gyl"
    },
    {
        name: "Ng\xe4bere",
        type: "living",
        scope: "individual",
        iso6393: "gym"
    },
    {
        name: "Guyanese Creole English",
        type: "living",
        scope: "individual",
        iso6393: "gyn"
    },
    {
        name: "Gyalsumdo",
        type: "living",
        scope: "individual",
        iso6393: "gyo"
    },
    {
        name: "Guarayu",
        type: "living",
        scope: "individual",
        iso6393: "gyr"
    },
    {
        name: "Gunya",
        type: "extinct",
        scope: "individual",
        iso6393: "gyy"
    },
    {
        name: "Ganza",
        type: "living",
        scope: "individual",
        iso6393: "gza"
    },
    {
        name: "Gazi",
        type: "living",
        scope: "individual",
        iso6393: "gzi"
    },
    {
        name: "Gane",
        type: "living",
        scope: "individual",
        iso6393: "gzn"
    },
    {
        name: "Han",
        type: "living",
        scope: "individual",
        iso6393: "haa"
    },
    {
        name: "Hanoi Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "hab"
    },
    {
        name: "Gurani",
        type: "living",
        scope: "individual",
        iso6393: "hac"
    },
    {
        name: "Hatam",
        type: "living",
        scope: "individual",
        iso6393: "had"
    },
    {
        name: "Eastern Oromo",
        type: "living",
        scope: "individual",
        iso6393: "hae"
    },
    {
        name: "Haiphong Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "haf"
    },
    {
        name: "Hanga",
        type: "living",
        scope: "individual",
        iso6393: "hag"
    },
    {
        name: "Hahon",
        type: "living",
        scope: "individual",
        iso6393: "hah"
    },
    {
        name: "Haida",
        type: "living",
        scope: "macrolanguage",
        iso6393: "hai",
        iso6392B: "hai",
        iso6392T: "hai"
    },
    {
        name: "Hajong",
        type: "living",
        scope: "individual",
        iso6393: "haj"
    },
    {
        name: "Hakka Chinese",
        type: "living",
        scope: "individual",
        iso6393: "hak"
    },
    {
        name: "Halang",
        type: "living",
        scope: "individual",
        iso6393: "hal"
    },
    {
        name: "Hewa",
        type: "living",
        scope: "individual",
        iso6393: "ham"
    },
    {
        name: "Hangaza",
        type: "living",
        scope: "individual",
        iso6393: "han"
    },
    {
        name: "Hak\xf6",
        type: "living",
        scope: "individual",
        iso6393: "hao"
    },
    {
        name: "Hupla",
        type: "living",
        scope: "individual",
        iso6393: "hap"
    },
    {
        name: "Ha",
        type: "living",
        scope: "individual",
        iso6393: "haq"
    },
    {
        name: "Harari",
        type: "living",
        scope: "individual",
        iso6393: "har"
    },
    {
        name: "Haisla",
        type: "living",
        scope: "individual",
        iso6393: "has"
    },
    {
        name: "Haitian",
        type: "living",
        scope: "individual",
        iso6393: "hat",
        iso6392B: "hat",
        iso6392T: "hat",
        iso6391: "ht"
    },
    {
        name: "Hausa",
        type: "living",
        scope: "individual",
        iso6393: "hau",
        iso6392B: "hau",
        iso6392T: "hau",
        iso6391: "ha"
    },
    {
        name: "Havu",
        type: "living",
        scope: "individual",
        iso6393: "hav"
    },
    {
        name: "Hawaiian",
        type: "living",
        scope: "individual",
        iso6393: "haw",
        iso6392B: "haw",
        iso6392T: "haw"
    },
    {
        name: "Southern Haida",
        type: "living",
        scope: "individual",
        iso6393: "hax"
    },
    {
        name: "Haya",
        type: "living",
        scope: "individual",
        iso6393: "hay"
    },
    {
        name: "Hazaragi",
        type: "living",
        scope: "individual",
        iso6393: "haz"
    },
    {
        name: "Hamba",
        type: "living",
        scope: "individual",
        iso6393: "hba"
    },
    {
        name: "Huba",
        type: "living",
        scope: "individual",
        iso6393: "hbb"
    },
    {
        name: "Heiban",
        type: "living",
        scope: "individual",
        iso6393: "hbn"
    },
    {
        name: "Ancient Hebrew",
        type: "historical",
        scope: "individual",
        iso6393: "hbo"
    },
    {
        name: "Serbo-Croatian",
        type: "living",
        scope: "macrolanguage",
        iso6393: "hbs",
        iso6391: "sh"
    },
    {
        name: "Habu",
        type: "living",
        scope: "individual",
        iso6393: "hbu"
    },
    {
        name: "Andaman Creole Hindi",
        type: "living",
        scope: "individual",
        iso6393: "hca"
    },
    {
        name: "Huichol",
        type: "living",
        scope: "individual",
        iso6393: "hch"
    },
    {
        name: "Northern Haida",
        type: "living",
        scope: "individual",
        iso6393: "hdn"
    },
    {
        name: "Honduras Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "hds"
    },
    {
        name: "Hadiyya",
        type: "living",
        scope: "individual",
        iso6393: "hdy"
    },
    {
        name: "Northern Qiandong Miao",
        type: "living",
        scope: "individual",
        iso6393: "hea"
    },
    {
        name: "Hebrew",
        type: "living",
        scope: "individual",
        iso6393: "heb",
        iso6392B: "heb",
        iso6392T: "heb",
        iso6391: "he"
    },
    {
        name: "Herd\xe9",
        type: "living",
        scope: "individual",
        iso6393: "hed"
    },
    {
        name: "Helong",
        type: "living",
        scope: "individual",
        iso6393: "heg"
    },
    {
        name: "Hehe",
        type: "living",
        scope: "individual",
        iso6393: "heh"
    },
    {
        name: "Heiltsuk",
        type: "living",
        scope: "individual",
        iso6393: "hei"
    },
    {
        name: "Hemba",
        type: "living",
        scope: "individual",
        iso6393: "hem"
    },
    {
        name: "Herero",
        type: "living",
        scope: "individual",
        iso6393: "her",
        iso6392B: "her",
        iso6392T: "her",
        iso6391: "hz"
    },
    {
        name: "Haiǁom",
        type: "living",
        scope: "individual",
        iso6393: "hgm"
    },
    {
        name: "Haigwai",
        type: "living",
        scope: "individual",
        iso6393: "hgw"
    },
    {
        name: "Hoia Hoia",
        type: "living",
        scope: "individual",
        iso6393: "hhi"
    },
    {
        name: "Kerak",
        type: "living",
        scope: "individual",
        iso6393: "hhr"
    },
    {
        name: "Hoyahoya",
        type: "living",
        scope: "individual",
        iso6393: "hhy"
    },
    {
        name: "Lamang",
        type: "living",
        scope: "individual",
        iso6393: "hia"
    },
    {
        name: "Hibito",
        type: "extinct",
        scope: "individual",
        iso6393: "hib"
    },
    {
        name: "Hidatsa",
        type: "living",
        scope: "individual",
        iso6393: "hid"
    },
    {
        name: "Fiji Hindi",
        type: "living",
        scope: "individual",
        iso6393: "hif"
    },
    {
        name: "Kamwe",
        type: "living",
        scope: "individual",
        iso6393: "hig"
    },
    {
        name: "Pamosu",
        type: "living",
        scope: "individual",
        iso6393: "hih"
    },
    {
        name: "Hinduri",
        type: "living",
        scope: "individual",
        iso6393: "hii"
    },
    {
        name: "Hijuk",
        type: "living",
        scope: "individual",
        iso6393: "hij"
    },
    {
        name: "Seit-Kaitetu",
        type: "living",
        scope: "individual",
        iso6393: "hik"
    },
    {
        name: "Hiligaynon",
        type: "living",
        scope: "individual",
        iso6393: "hil",
        iso6392B: "hil",
        iso6392T: "hil"
    },
    {
        name: "Hindi",
        type: "living",
        scope: "individual",
        iso6393: "hin",
        iso6392B: "hin",
        iso6392T: "hin",
        iso6391: "hi"
    },
    {
        name: "Tsoa",
        type: "living",
        scope: "individual",
        iso6393: "hio"
    },
    {
        name: "Himarim\xe3",
        type: "living",
        scope: "individual",
        iso6393: "hir"
    },
    {
        name: "Hittite",
        type: "ancient",
        scope: "individual",
        iso6393: "hit",
        iso6392B: "hit",
        iso6392T: "hit"
    },
    {
        name: "Hiw",
        type: "living",
        scope: "individual",
        iso6393: "hiw"
    },
    {
        name: "Hixkary\xe1na",
        type: "living",
        scope: "individual",
        iso6393: "hix"
    },
    {
        name: "Haji",
        type: "living",
        scope: "individual",
        iso6393: "hji"
    },
    {
        name: "Kahe",
        type: "living",
        scope: "individual",
        iso6393: "hka"
    },
    {
        name: "Hunde",
        type: "living",
        scope: "individual",
        iso6393: "hke"
    },
    {
        name: "Hunjara-Kaina Ke",
        type: "living",
        scope: "individual",
        iso6393: "hkk"
    },
    {
        name: "Mel-Khaonh",
        type: "living",
        scope: "individual",
        iso6393: "hkn"
    },
    {
        name: "Hong Kong Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "hks"
    },
    {
        name: "Halia",
        type: "living",
        scope: "individual",
        iso6393: "hla"
    },
    {
        name: "Halbi",
        type: "living",
        scope: "individual",
        iso6393: "hlb"
    },
    {
        name: "Halang Doan",
        type: "living",
        scope: "individual",
        iso6393: "hld"
    },
    {
        name: "Hlersu",
        type: "living",
        scope: "individual",
        iso6393: "hle"
    },
    {
        name: "Matu Chin",
        type: "living",
        scope: "individual",
        iso6393: "hlt"
    },
    {
        name: "Hieroglyphic Luwian",
        type: "ancient",
        scope: "individual",
        iso6393: "hlu"
    },
    {
        name: "Southern Mashan Hmong",
        type: "living",
        scope: "individual",
        iso6393: "hma"
    },
    {
        name: "Humburi Senni Songhay",
        type: "living",
        scope: "individual",
        iso6393: "hmb"
    },
    {
        name: "Central Huishui Hmong",
        type: "living",
        scope: "individual",
        iso6393: "hmc"
    },
    {
        name: "Large Flowery Miao",
        type: "living",
        scope: "individual",
        iso6393: "hmd"
    },
    {
        name: "Eastern Huishui Hmong",
        type: "living",
        scope: "individual",
        iso6393: "hme"
    },
    {
        name: "Hmong Don",
        type: "living",
        scope: "individual",
        iso6393: "hmf"
    },
    {
        name: "Southwestern Guiyang Hmong",
        type: "living",
        scope: "individual",
        iso6393: "hmg"
    },
    {
        name: "Southwestern Huishui Hmong",
        type: "living",
        scope: "individual",
        iso6393: "hmh"
    },
    {
        name: "Northern Huishui Hmong",
        type: "living",
        scope: "individual",
        iso6393: "hmi"
    },
    {
        name: "Ge",
        type: "living",
        scope: "individual",
        iso6393: "hmj"
    },
    {
        name: "Maek",
        type: "ancient",
        scope: "individual",
        iso6393: "hmk"
    },
    {
        name: "Luopohe Hmong",
        type: "living",
        scope: "individual",
        iso6393: "hml"
    },
    {
        name: "Central Mashan Hmong",
        type: "living",
        scope: "individual",
        iso6393: "hmm"
    },
    {
        name: "Hmong",
        type: "living",
        scope: "macrolanguage",
        iso6393: "hmn",
        iso6392B: "hmn",
        iso6392T: "hmn"
    },
    {
        name: "Hiri Motu",
        type: "living",
        scope: "individual",
        iso6393: "hmo",
        iso6392B: "hmo",
        iso6392T: "hmo",
        iso6391: "ho"
    },
    {
        name: "Northern Mashan Hmong",
        type: "living",
        scope: "individual",
        iso6393: "hmp"
    },
    {
        name: "Eastern Qiandong Miao",
        type: "living",
        scope: "individual",
        iso6393: "hmq"
    },
    {
        name: "Hmar",
        type: "living",
        scope: "individual",
        iso6393: "hmr"
    },
    {
        name: "Southern Qiandong Miao",
        type: "living",
        scope: "individual",
        iso6393: "hms"
    },
    {
        name: "Hamtai",
        type: "living",
        scope: "individual",
        iso6393: "hmt"
    },
    {
        name: "Hamap",
        type: "living",
        scope: "individual",
        iso6393: "hmu"
    },
    {
        name: "Hmong D\xf4",
        type: "living",
        scope: "individual",
        iso6393: "hmv"
    },
    {
        name: "Western Mashan Hmong",
        type: "living",
        scope: "individual",
        iso6393: "hmw"
    },
    {
        name: "Southern Guiyang Hmong",
        type: "living",
        scope: "individual",
        iso6393: "hmy"
    },
    {
        name: "Hmong Shua",
        type: "living",
        scope: "individual",
        iso6393: "hmz"
    },
    {
        name: "Mina (Cameroon)",
        type: "living",
        scope: "individual",
        iso6393: "hna"
    },
    {
        name: "Southern Hindko",
        type: "living",
        scope: "individual",
        iso6393: "hnd"
    },
    {
        name: "Chhattisgarhi",
        type: "living",
        scope: "individual",
        iso6393: "hne"
    },
    {
        name: "Hungu",
        type: "living",
        scope: "individual",
        iso6393: "hng"
    },
    {
        name: "ǁAni",
        type: "living",
        scope: "individual",
        iso6393: "hnh"
    },
    {
        name: "Hani",
        type: "living",
        scope: "individual",
        iso6393: "hni"
    },
    {
        name: "Hmong Njua",
        type: "living",
        scope: "individual",
        iso6393: "hnj"
    },
    {
        name: "Hanunoo",
        type: "living",
        scope: "individual",
        iso6393: "hnn"
    },
    {
        name: "Northern Hindko",
        type: "living",
        scope: "individual",
        iso6393: "hno"
    },
    {
        name: "Caribbean Hindustani",
        type: "living",
        scope: "individual",
        iso6393: "hns"
    },
    {
        name: "Hung",
        type: "living",
        scope: "individual",
        iso6393: "hnu"
    },
    {
        name: "Hoava",
        type: "living",
        scope: "individual",
        iso6393: "hoa"
    },
    {
        name: "Mari (Madang Province)",
        type: "living",
        scope: "individual",
        iso6393: "hob"
    },
    {
        name: "Ho",
        type: "living",
        scope: "individual",
        iso6393: "hoc"
    },
    {
        name: "Holma",
        type: "extinct",
        scope: "individual",
        iso6393: "hod"
    },
    {
        name: "Horom",
        type: "living",
        scope: "individual",
        iso6393: "hoe"
    },
    {
        name: "Hoby\xf3t",
        type: "living",
        scope: "individual",
        iso6393: "hoh"
    },
    {
        name: "Holikachuk",
        type: "living",
        scope: "individual",
        iso6393: "hoi"
    },
    {
        name: "Hadothi",
        type: "living",
        scope: "individual",
        iso6393: "hoj"
    },
    {
        name: "Holu",
        type: "living",
        scope: "individual",
        iso6393: "hol"
    },
    {
        name: "Homa",
        type: "extinct",
        scope: "individual",
        iso6393: "hom"
    },
    {
        name: "Holoholo",
        type: "living",
        scope: "individual",
        iso6393: "hoo"
    },
    {
        name: "Hopi",
        type: "living",
        scope: "individual",
        iso6393: "hop"
    },
    {
        name: "Horo",
        type: "extinct",
        scope: "individual",
        iso6393: "hor"
    },
    {
        name: "Ho Chi Minh City Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "hos"
    },
    {
        name: "Hote",
        type: "living",
        scope: "individual",
        iso6393: "hot"
    },
    {
        name: "Hovongan",
        type: "living",
        scope: "individual",
        iso6393: "hov"
    },
    {
        name: "Honi",
        type: "living",
        scope: "individual",
        iso6393: "how"
    },
    {
        name: "Holiya",
        type: "living",
        scope: "individual",
        iso6393: "hoy"
    },
    {
        name: "Hozo",
        type: "living",
        scope: "individual",
        iso6393: "hoz"
    },
    {
        name: "Hpon",
        type: "extinct",
        scope: "individual",
        iso6393: "hpo"
    },
    {
        name: "Hawai'i Sign Language (HSL)",
        type: "living",
        scope: "individual",
        iso6393: "hps"
    },
    {
        name: "Hrangkhol",
        type: "living",
        scope: "individual",
        iso6393: "hra"
    },
    {
        name: "Niwer Mil",
        type: "living",
        scope: "individual",
        iso6393: "hrc"
    },
    {
        name: "Hre",
        type: "living",
        scope: "individual",
        iso6393: "hre"
    },
    {
        name: "Haruku",
        type: "living",
        scope: "individual",
        iso6393: "hrk"
    },
    {
        name: "Horned Miao",
        type: "living",
        scope: "individual",
        iso6393: "hrm"
    },
    {
        name: "Haroi",
        type: "living",
        scope: "individual",
        iso6393: "hro"
    },
    {
        name: "Nhirrpi",
        type: "extinct",
        scope: "individual",
        iso6393: "hrp"
    },
    {
        name: "H\xe9rtevin",
        type: "living",
        scope: "individual",
        iso6393: "hrt"
    },
    {
        name: "Hruso",
        type: "living",
        scope: "individual",
        iso6393: "hru"
    },
    {
        name: "Croatian",
        type: "living",
        scope: "individual",
        iso6393: "hrv",
        iso6392B: "hrv",
        iso6392T: "hrv",
        iso6391: "hr"
    },
    {
        name: "Warwar Feni",
        type: "living",
        scope: "individual",
        iso6393: "hrw"
    },
    {
        name: "Hunsrik",
        type: "living",
        scope: "individual",
        iso6393: "hrx"
    },
    {
        name: "Harzani",
        type: "living",
        scope: "individual",
        iso6393: "hrz"
    },
    {
        name: "Upper Sorbian",
        type: "living",
        scope: "individual",
        iso6393: "hsb",
        iso6392B: "hsb",
        iso6392T: "hsb"
    },
    {
        name: "Hungarian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "hsh"
    },
    {
        name: "Hausa Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "hsl"
    },
    {
        name: "Xiang Chinese",
        type: "living",
        scope: "individual",
        iso6393: "hsn"
    },
    {
        name: "Harsusi",
        type: "living",
        scope: "individual",
        iso6393: "hss"
    },
    {
        name: "Hoti",
        type: "extinct",
        scope: "individual",
        iso6393: "hti"
    },
    {
        name: "Minica Huitoto",
        type: "living",
        scope: "individual",
        iso6393: "hto"
    },
    {
        name: "Hadza",
        type: "living",
        scope: "individual",
        iso6393: "hts"
    },
    {
        name: "Hitu",
        type: "living",
        scope: "individual",
        iso6393: "htu"
    },
    {
        name: "Middle Hittite",
        type: "ancient",
        scope: "individual",
        iso6393: "htx"
    },
    {
        name: "Huambisa",
        type: "living",
        scope: "individual",
        iso6393: "hub"
    },
    {
        name: "ǂHua",
        type: "living",
        scope: "individual",
        iso6393: "huc"
    },
    {
        name: "Huaulu",
        type: "living",
        scope: "individual",
        iso6393: "hud"
    },
    {
        name: "San Francisco Del Mar Huave",
        type: "living",
        scope: "individual",
        iso6393: "hue"
    },
    {
        name: "Humene",
        type: "living",
        scope: "individual",
        iso6393: "huf"
    },
    {
        name: "Huachipaeri",
        type: "living",
        scope: "individual",
        iso6393: "hug"
    },
    {
        name: "Huilliche",
        type: "living",
        scope: "individual",
        iso6393: "huh"
    },
    {
        name: "Huli",
        type: "living",
        scope: "individual",
        iso6393: "hui"
    },
    {
        name: "Northern Guiyang Hmong",
        type: "living",
        scope: "individual",
        iso6393: "huj"
    },
    {
        name: "Hulung",
        type: "extinct",
        scope: "individual",
        iso6393: "huk"
    },
    {
        name: "Hula",
        type: "living",
        scope: "individual",
        iso6393: "hul"
    },
    {
        name: "Hungana",
        type: "living",
        scope: "individual",
        iso6393: "hum"
    },
    {
        name: "Hungarian",
        type: "living",
        scope: "individual",
        iso6393: "hun",
        iso6392B: "hun",
        iso6392T: "hun",
        iso6391: "hu"
    },
    {
        name: "Hu",
        type: "living",
        scope: "individual",
        iso6393: "huo"
    },
    {
        name: "Hupa",
        type: "living",
        scope: "individual",
        iso6393: "hup",
        iso6392B: "hup",
        iso6392T: "hup"
    },
    {
        name: "Tsat",
        type: "living",
        scope: "individual",
        iso6393: "huq"
    },
    {
        name: "Halkomelem",
        type: "living",
        scope: "individual",
        iso6393: "hur"
    },
    {
        name: "Huastec",
        type: "living",
        scope: "individual",
        iso6393: "hus"
    },
    {
        name: "Humla",
        type: "living",
        scope: "individual",
        iso6393: "hut"
    },
    {
        name: "Murui Huitoto",
        type: "living",
        scope: "individual",
        iso6393: "huu"
    },
    {
        name: "San Mateo Del Mar Huave",
        type: "living",
        scope: "individual",
        iso6393: "huv"
    },
    {
        name: "Hukumina",
        type: "extinct",
        scope: "individual",
        iso6393: "huw"
    },
    {
        name: "N\xfcpode Huitoto",
        type: "living",
        scope: "individual",
        iso6393: "hux"
    },
    {
        name: "Hulaul\xe1",
        type: "living",
        scope: "individual",
        iso6393: "huy"
    },
    {
        name: "Hunzib",
        type: "living",
        scope: "individual",
        iso6393: "huz"
    },
    {
        name: "Haitian Vodoun Culture Language",
        type: "living",
        scope: "individual",
        iso6393: "hvc"
    },
    {
        name: "San Dionisio Del Mar Huave",
        type: "living",
        scope: "individual",
        iso6393: "hve"
    },
    {
        name: "Haveke",
        type: "living",
        scope: "individual",
        iso6393: "hvk"
    },
    {
        name: "Sabu",
        type: "living",
        scope: "individual",
        iso6393: "hvn"
    },
    {
        name: "Santa Mar\xeda Del Mar Huave",
        type: "living",
        scope: "individual",
        iso6393: "hvv"
    },
    {
        name: "Wan\xe9",
        type: "living",
        scope: "individual",
        iso6393: "hwa"
    },
    {
        name: "Hawai'i Creole English",
        type: "living",
        scope: "individual",
        iso6393: "hwc"
    },
    {
        name: "Hwana",
        type: "living",
        scope: "individual",
        iso6393: "hwo"
    },
    {
        name: "Hya",
        type: "living",
        scope: "individual",
        iso6393: "hya"
    },
    {
        name: "Armenian",
        type: "living",
        scope: "individual",
        iso6393: "hye",
        iso6392B: "arm",
        iso6392T: "hye",
        iso6391: "hy"
    },
    {
        name: "Western Armenian",
        type: "living",
        scope: "individual",
        iso6393: "hyw"
    },
    {
        name: "Iaai",
        type: "living",
        scope: "individual",
        iso6393: "iai"
    },
    {
        name: "Iatmul",
        type: "living",
        scope: "individual",
        iso6393: "ian"
    },
    {
        name: "Purari",
        type: "living",
        scope: "individual",
        iso6393: "iar"
    },
    {
        name: "Iban",
        type: "living",
        scope: "individual",
        iso6393: "iba",
        iso6392B: "iba",
        iso6392T: "iba"
    },
    {
        name: "Ibibio",
        type: "living",
        scope: "individual",
        iso6393: "ibb"
    },
    {
        name: "Iwaidja",
        type: "living",
        scope: "individual",
        iso6393: "ibd"
    },
    {
        name: "Akpes",
        type: "living",
        scope: "individual",
        iso6393: "ibe"
    },
    {
        name: "Ibanag",
        type: "living",
        scope: "individual",
        iso6393: "ibg"
    },
    {
        name: "Bih",
        type: "living",
        scope: "individual",
        iso6393: "ibh"
    },
    {
        name: "Ibaloi",
        type: "living",
        scope: "individual",
        iso6393: "ibl"
    },
    {
        name: "Agoi",
        type: "living",
        scope: "individual",
        iso6393: "ibm"
    },
    {
        name: "Ibino",
        type: "living",
        scope: "individual",
        iso6393: "ibn"
    },
    {
        name: "Igbo",
        type: "living",
        scope: "individual",
        iso6393: "ibo",
        iso6392B: "ibo",
        iso6392T: "ibo",
        iso6391: "ig"
    },
    {
        name: "Ibuoro",
        type: "living",
        scope: "individual",
        iso6393: "ibr"
    },
    {
        name: "Ibu",
        type: "living",
        scope: "individual",
        iso6393: "ibu"
    },
    {
        name: "Ibani",
        type: "living",
        scope: "individual",
        iso6393: "iby"
    },
    {
        name: "Ede Ica",
        type: "living",
        scope: "individual",
        iso6393: "ica"
    },
    {
        name: "Etkywan",
        type: "living",
        scope: "individual",
        iso6393: "ich"
    },
    {
        name: "Icelandic Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "icl"
    },
    {
        name: "Islander Creole English",
        type: "living",
        scope: "individual",
        iso6393: "icr"
    },
    {
        name: "Idakho-Isukha-Tiriki",
        type: "living",
        scope: "individual",
        iso6393: "ida"
    },
    {
        name: "Indo-Portuguese",
        type: "living",
        scope: "individual",
        iso6393: "idb"
    },
    {
        name: "Idon",
        type: "living",
        scope: "individual",
        iso6393: "idc"
    },
    {
        name: "Ede Idaca",
        type: "living",
        scope: "individual",
        iso6393: "idd"
    },
    {
        name: "Idere",
        type: "living",
        scope: "individual",
        iso6393: "ide"
    },
    {
        name: "Idi",
        type: "living",
        scope: "individual",
        iso6393: "idi"
    },
    {
        name: "Ido",
        type: "constructed",
        scope: "individual",
        iso6393: "ido",
        iso6392B: "ido",
        iso6392T: "ido",
        iso6391: "io"
    },
    {
        name: "Indri",
        type: "living",
        scope: "individual",
        iso6393: "idr"
    },
    {
        name: "Idesa",
        type: "living",
        scope: "individual",
        iso6393: "ids"
    },
    {
        name: "Idat\xe9",
        type: "living",
        scope: "individual",
        iso6393: "idt"
    },
    {
        name: "Idoma",
        type: "living",
        scope: "individual",
        iso6393: "idu"
    },
    {
        name: "Amganad Ifugao",
        type: "living",
        scope: "individual",
        iso6393: "ifa"
    },
    {
        name: "Batad Ifugao",
        type: "living",
        scope: "individual",
        iso6393: "ifb"
    },
    {
        name: "If\xe8",
        type: "living",
        scope: "individual",
        iso6393: "ife"
    },
    {
        name: "Ifo",
        type: "extinct",
        scope: "individual",
        iso6393: "iff"
    },
    {
        name: "Tuwali Ifugao",
        type: "living",
        scope: "individual",
        iso6393: "ifk"
    },
    {
        name: "Teke-Fuumu",
        type: "living",
        scope: "individual",
        iso6393: "ifm"
    },
    {
        name: "Mayoyao Ifugao",
        type: "living",
        scope: "individual",
        iso6393: "ifu"
    },
    {
        name: "Keley-I Kallahan",
        type: "living",
        scope: "individual",
        iso6393: "ify"
    },
    {
        name: "Ebira",
        type: "living",
        scope: "individual",
        iso6393: "igb"
    },
    {
        name: "Igede",
        type: "living",
        scope: "individual",
        iso6393: "ige"
    },
    {
        name: "Igana",
        type: "living",
        scope: "individual",
        iso6393: "igg"
    },
    {
        name: "Igala",
        type: "living",
        scope: "individual",
        iso6393: "igl"
    },
    {
        name: "Kanggape",
        type: "living",
        scope: "individual",
        iso6393: "igm"
    },
    {
        name: "Ignaciano",
        type: "living",
        scope: "individual",
        iso6393: "ign"
    },
    {
        name: "Isebe",
        type: "living",
        scope: "individual",
        iso6393: "igo"
    },
    {
        name: "Interglossa",
        type: "constructed",
        scope: "individual",
        iso6393: "igs"
    },
    {
        name: "Igwe",
        type: "living",
        scope: "individual",
        iso6393: "igw"
    },
    {
        name: "Iha Based Pidgin",
        type: "living",
        scope: "individual",
        iso6393: "ihb"
    },
    {
        name: "Ihievbe",
        type: "living",
        scope: "individual",
        iso6393: "ihi"
    },
    {
        name: "Iha",
        type: "living",
        scope: "individual",
        iso6393: "ihp"
    },
    {
        name: "Bidhawal",
        type: "extinct",
        scope: "individual",
        iso6393: "ihw"
    },
    {
        name: "Sichuan Yi",
        type: "living",
        scope: "individual",
        iso6393: "iii",
        iso6392B: "iii",
        iso6392T: "iii",
        iso6391: "ii"
    },
    {
        name: "Thiin",
        type: "extinct",
        scope: "individual",
        iso6393: "iin"
    },
    {
        name: "Izon",
        type: "living",
        scope: "individual",
        iso6393: "ijc"
    },
    {
        name: "Biseni",
        type: "living",
        scope: "individual",
        iso6393: "ije"
    },
    {
        name: "Ede Ije",
        type: "living",
        scope: "individual",
        iso6393: "ijj"
    },
    {
        name: "Kalabari",
        type: "living",
        scope: "individual",
        iso6393: "ijn"
    },
    {
        name: "Southeast Ijo",
        type: "living",
        scope: "individual",
        iso6393: "ijs"
    },
    {
        name: "Eastern Canadian Inuktitut",
        type: "living",
        scope: "individual",
        iso6393: "ike"
    },
    {
        name: "Iko",
        type: "living",
        scope: "individual",
        iso6393: "iki"
    },
    {
        name: "Ika",
        type: "living",
        scope: "individual",
        iso6393: "ikk"
    },
    {
        name: "Ikulu",
        type: "living",
        scope: "individual",
        iso6393: "ikl"
    },
    {
        name: "Olulumo-Ikom",
        type: "living",
        scope: "individual",
        iso6393: "iko"
    },
    {
        name: "Ikpeshi",
        type: "living",
        scope: "individual",
        iso6393: "ikp"
    },
    {
        name: "Ikaranggal",
        type: "extinct",
        scope: "individual",
        iso6393: "ikr"
    },
    {
        name: "Inuit Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "iks"
    },
    {
        name: "Inuinnaqtun",
        type: "living",
        scope: "individual",
        iso6393: "ikt"
    },
    {
        name: "Inuktitut",
        type: "living",
        scope: "macrolanguage",
        iso6393: "iku",
        iso6392B: "iku",
        iso6392T: "iku",
        iso6391: "iu"
    },
    {
        name: "Iku-Gora-Ankwa",
        type: "living",
        scope: "individual",
        iso6393: "ikv"
    },
    {
        name: "Ikwere",
        type: "living",
        scope: "individual",
        iso6393: "ikw"
    },
    {
        name: "Ik",
        type: "living",
        scope: "individual",
        iso6393: "ikx"
    },
    {
        name: "Ikizu",
        type: "living",
        scope: "individual",
        iso6393: "ikz"
    },
    {
        name: "Ile Ape",
        type: "living",
        scope: "individual",
        iso6393: "ila"
    },
    {
        name: "Ila",
        type: "living",
        scope: "individual",
        iso6393: "ilb"
    },
    {
        name: "Interlingue",
        type: "constructed",
        scope: "individual",
        iso6393: "ile",
        iso6392B: "ile",
        iso6392T: "ile",
        iso6391: "ie"
    },
    {
        name: "Garig-Ilgar",
        type: "extinct",
        scope: "individual",
        iso6393: "ilg"
    },
    {
        name: "Ili Turki",
        type: "living",
        scope: "individual",
        iso6393: "ili"
    },
    {
        name: "Ilongot",
        type: "living",
        scope: "individual",
        iso6393: "ilk"
    },
    {
        name: "Iranun (Malaysia)",
        type: "living",
        scope: "individual",
        iso6393: "ilm"
    },
    {
        name: "Iloko",
        type: "living",
        scope: "individual",
        iso6393: "ilo",
        iso6392B: "ilo",
        iso6392T: "ilo"
    },
    {
        name: "Iranun (Philippines)",
        type: "living",
        scope: "individual",
        iso6393: "ilp"
    },
    {
        name: "International Sign",
        type: "living",
        scope: "individual",
        iso6393: "ils"
    },
    {
        name: "Ili'uun",
        type: "living",
        scope: "individual",
        iso6393: "ilu"
    },
    {
        name: "Ilue",
        type: "living",
        scope: "individual",
        iso6393: "ilv"
    },
    {
        name: "Mala Malasar",
        type: "living",
        scope: "individual",
        iso6393: "ima"
    },
    {
        name: "Anamgura",
        type: "living",
        scope: "individual",
        iso6393: "imi"
    },
    {
        name: "Miluk",
        type: "extinct",
        scope: "individual",
        iso6393: "iml"
    },
    {
        name: "Imonda",
        type: "living",
        scope: "individual",
        iso6393: "imn"
    },
    {
        name: "Imbongu",
        type: "living",
        scope: "individual",
        iso6393: "imo"
    },
    {
        name: "Imroing",
        type: "living",
        scope: "individual",
        iso6393: "imr"
    },
    {
        name: "Marsian",
        type: "ancient",
        scope: "individual",
        iso6393: "ims"
    },
    {
        name: "Milyan",
        type: "ancient",
        scope: "individual",
        iso6393: "imy"
    },
    {
        name: "Interlingua (International Auxiliary Language Association)",
        type: "constructed",
        scope: "individual",
        iso6393: "ina",
        iso6392B: "ina",
        iso6392T: "ina",
        iso6391: "ia"
    },
    {
        name: "Inga",
        type: "living",
        scope: "individual",
        iso6393: "inb"
    },
    {
        name: "Indonesian",
        type: "living",
        scope: "individual",
        iso6393: "ind",
        iso6392B: "ind",
        iso6392T: "ind",
        iso6391: "id"
    },
    {
        name: "Degexit'an",
        type: "living",
        scope: "individual",
        iso6393: "ing"
    },
    {
        name: "Ingush",
        type: "living",
        scope: "individual",
        iso6393: "inh",
        iso6392B: "inh",
        iso6392T: "inh"
    },
    {
        name: "Jungle Inga",
        type: "living",
        scope: "individual",
        iso6393: "inj"
    },
    {
        name: "Indonesian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "inl"
    },
    {
        name: "Minaean",
        type: "ancient",
        scope: "individual",
        iso6393: "inm"
    },
    {
        name: "Isinai",
        type: "living",
        scope: "individual",
        iso6393: "inn"
    },
    {
        name: "Inoke-Yate",
        type: "living",
        scope: "individual",
        iso6393: "ino"
    },
    {
        name: "I\xf1apari",
        type: "living",
        scope: "individual",
        iso6393: "inp"
    },
    {
        name: "Indian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "ins"
    },
    {
        name: "Intha",
        type: "living",
        scope: "individual",
        iso6393: "int"
    },
    {
        name: "Inese\xf1o",
        type: "extinct",
        scope: "individual",
        iso6393: "inz"
    },
    {
        name: "Inor",
        type: "living",
        scope: "individual",
        iso6393: "ior"
    },
    {
        name: "Tuma-Irumu",
        type: "living",
        scope: "individual",
        iso6393: "iou"
    },
    {
        name: "Iowa-Oto",
        type: "extinct",
        scope: "individual",
        iso6393: "iow"
    },
    {
        name: "Ipili",
        type: "living",
        scope: "individual",
        iso6393: "ipi"
    },
    {
        name: "Inupiaq",
        type: "living",
        scope: "macrolanguage",
        iso6393: "ipk",
        iso6392B: "ipk",
        iso6392T: "ipk",
        iso6391: "ik"
    },
    {
        name: "Ipiko",
        type: "living",
        scope: "individual",
        iso6393: "ipo"
    },
    {
        name: "Iquito",
        type: "living",
        scope: "individual",
        iso6393: "iqu"
    },
    {
        name: "Ikwo",
        type: "living",
        scope: "individual",
        iso6393: "iqw"
    },
    {
        name: "Iresim",
        type: "living",
        scope: "individual",
        iso6393: "ire"
    },
    {
        name: "Irarutu",
        type: "living",
        scope: "individual",
        iso6393: "irh"
    },
    {
        name: "Rigwe",
        type: "living",
        scope: "individual",
        iso6393: "iri"
    },
    {
        name: "Iraqw",
        type: "living",
        scope: "individual",
        iso6393: "irk"
    },
    {
        name: "Ir\xe1ntxe",
        type: "living",
        scope: "individual",
        iso6393: "irn"
    },
    {
        name: "Ir",
        type: "living",
        scope: "individual",
        iso6393: "irr"
    },
    {
        name: "Irula",
        type: "living",
        scope: "individual",
        iso6393: "iru"
    },
    {
        name: "Kamberau",
        type: "living",
        scope: "individual",
        iso6393: "irx"
    },
    {
        name: "Iraya",
        type: "living",
        scope: "individual",
        iso6393: "iry"
    },
    {
        name: "Isabi",
        type: "living",
        scope: "individual",
        iso6393: "isa"
    },
    {
        name: "Isconahua",
        type: "living",
        scope: "individual",
        iso6393: "isc"
    },
    {
        name: "Isnag",
        type: "living",
        scope: "individual",
        iso6393: "isd"
    },
    {
        name: "Italian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "ise"
    },
    {
        name: "Irish Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "isg"
    },
    {
        name: "Esan",
        type: "living",
        scope: "individual",
        iso6393: "ish"
    },
    {
        name: "Nkem-Nkum",
        type: "living",
        scope: "individual",
        iso6393: "isi"
    },
    {
        name: "Ishkashimi",
        type: "living",
        scope: "individual",
        iso6393: "isk"
    },
    {
        name: "Icelandic",
        type: "living",
        scope: "individual",
        iso6393: "isl",
        iso6392B: "ice",
        iso6392T: "isl",
        iso6391: "is"
    },
    {
        name: "Masimasi",
        type: "living",
        scope: "individual",
        iso6393: "ism"
    },
    {
        name: "Isanzu",
        type: "living",
        scope: "individual",
        iso6393: "isn"
    },
    {
        name: "Isoko",
        type: "living",
        scope: "individual",
        iso6393: "iso"
    },
    {
        name: "Israeli Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "isr"
    },
    {
        name: "Istriot",
        type: "living",
        scope: "individual",
        iso6393: "ist"
    },
    {
        name: "Isu (Menchum Division)",
        type: "living",
        scope: "individual",
        iso6393: "isu"
    },
    {
        name: "Italian",
        type: "living",
        scope: "individual",
        iso6393: "ita",
        iso6392B: "ita",
        iso6392T: "ita",
        iso6391: "it"
    },
    {
        name: "Binongan Itneg",
        type: "living",
        scope: "individual",
        iso6393: "itb"
    },
    {
        name: "Southern Tidung",
        type: "living",
        scope: "individual",
        iso6393: "itd"
    },
    {
        name: "Itene",
        type: "extinct",
        scope: "individual",
        iso6393: "ite"
    },
    {
        name: "Inlaod Itneg",
        type: "living",
        scope: "individual",
        iso6393: "iti"
    },
    {
        name: "Judeo-Italian",
        type: "living",
        scope: "individual",
        iso6393: "itk"
    },
    {
        name: "Itelmen",
        type: "living",
        scope: "individual",
        iso6393: "itl"
    },
    {
        name: "Itu Mbon Uzo",
        type: "living",
        scope: "individual",
        iso6393: "itm"
    },
    {
        name: "Itonama",
        type: "living",
        scope: "individual",
        iso6393: "ito"
    },
    {
        name: "Iteri",
        type: "living",
        scope: "individual",
        iso6393: "itr"
    },
    {
        name: "Isekiri",
        type: "living",
        scope: "individual",
        iso6393: "its"
    },
    {
        name: "Maeng Itneg",
        type: "living",
        scope: "individual",
        iso6393: "itt"
    },
    {
        name: "Itawit",
        type: "living",
        scope: "individual",
        iso6393: "itv"
    },
    {
        name: "Ito",
        type: "living",
        scope: "individual",
        iso6393: "itw"
    },
    {
        name: "Itik",
        type: "living",
        scope: "individual",
        iso6393: "itx"
    },
    {
        name: "Moyadan Itneg",
        type: "living",
        scope: "individual",
        iso6393: "ity"
    },
    {
        name: "Itz\xe1",
        type: "living",
        scope: "individual",
        iso6393: "itz"
    },
    {
        name: "Iu Mien",
        type: "living",
        scope: "individual",
        iso6393: "ium"
    },
    {
        name: "Ibatan",
        type: "living",
        scope: "individual",
        iso6393: "ivb"
    },
    {
        name: "Ivatan",
        type: "living",
        scope: "individual",
        iso6393: "ivv"
    },
    {
        name: "I-Wak",
        type: "living",
        scope: "individual",
        iso6393: "iwk"
    },
    {
        name: "Iwam",
        type: "living",
        scope: "individual",
        iso6393: "iwm"
    },
    {
        name: "Iwur",
        type: "living",
        scope: "individual",
        iso6393: "iwo"
    },
    {
        name: "Sepik Iwam",
        type: "living",
        scope: "individual",
        iso6393: "iws"
    },
    {
        name: "Ixcatec",
        type: "living",
        scope: "individual",
        iso6393: "ixc"
    },
    {
        name: "Ixil",
        type: "living",
        scope: "individual",
        iso6393: "ixl"
    },
    {
        name: "Iyayu",
        type: "living",
        scope: "individual",
        iso6393: "iya"
    },
    {
        name: "Mesaka",
        type: "living",
        scope: "individual",
        iso6393: "iyo"
    },
    {
        name: "Yaka (Congo)",
        type: "living",
        scope: "individual",
        iso6393: "iyx"
    },
    {
        name: "Ingrian",
        type: "living",
        scope: "individual",
        iso6393: "izh"
    },
    {
        name: "Izere",
        type: "living",
        scope: "individual",
        iso6393: "izr"
    },
    {
        name: "Izii",
        type: "living",
        scope: "individual",
        iso6393: "izz"
    },
    {
        name: "Jamamad\xed",
        type: "living",
        scope: "individual",
        iso6393: "jaa"
    },
    {
        name: "Hyam",
        type: "living",
        scope: "individual",
        iso6393: "jab"
    },
    {
        name: "Popti'",
        type: "living",
        scope: "individual",
        iso6393: "jac"
    },
    {
        name: "Jahanka",
        type: "living",
        scope: "individual",
        iso6393: "jad"
    },
    {
        name: "Yabem",
        type: "living",
        scope: "individual",
        iso6393: "jae"
    },
    {
        name: "Jara",
        type: "living",
        scope: "individual",
        iso6393: "jaf"
    },
    {
        name: "Jah Hut",
        type: "living",
        scope: "individual",
        iso6393: "jah"
    },
    {
        name: "Zazao",
        type: "living",
        scope: "individual",
        iso6393: "jaj"
    },
    {
        name: "Jakun",
        type: "living",
        scope: "individual",
        iso6393: "jak"
    },
    {
        name: "Yalahatan",
        type: "living",
        scope: "individual",
        iso6393: "jal"
    },
    {
        name: "Jamaican Creole English",
        type: "living",
        scope: "individual",
        iso6393: "jam"
    },
    {
        name: "Jandai",
        type: "extinct",
        scope: "individual",
        iso6393: "jan"
    },
    {
        name: "Yanyuwa",
        type: "living",
        scope: "individual",
        iso6393: "jao"
    },
    {
        name: "Yaqay",
        type: "living",
        scope: "individual",
        iso6393: "jaq"
    },
    {
        name: "New Caledonian Javanese",
        type: "living",
        scope: "individual",
        iso6393: "jas"
    },
    {
        name: "Jakati",
        type: "living",
        scope: "individual",
        iso6393: "jat"
    },
    {
        name: "Yaur",
        type: "living",
        scope: "individual",
        iso6393: "jau"
    },
    {
        name: "Javanese",
        type: "living",
        scope: "individual",
        iso6393: "jav",
        iso6392B: "jav",
        iso6392T: "jav",
        iso6391: "jv"
    },
    {
        name: "Jambi Malay",
        type: "living",
        scope: "individual",
        iso6393: "jax"
    },
    {
        name: "Yan-nhangu",
        type: "living",
        scope: "individual",
        iso6393: "jay"
    },
    {
        name: "Jawe",
        type: "living",
        scope: "individual",
        iso6393: "jaz"
    },
    {
        name: "Judeo-Berber",
        type: "living",
        scope: "individual",
        iso6393: "jbe"
    },
    {
        name: "Badjiri",
        type: "extinct",
        scope: "individual",
        iso6393: "jbi"
    },
    {
        name: "Arandai",
        type: "living",
        scope: "individual",
        iso6393: "jbj"
    },
    {
        name: "Barikewa",
        type: "living",
        scope: "individual",
        iso6393: "jbk"
    },
    {
        name: "Nafusi",
        type: "living",
        scope: "individual",
        iso6393: "jbn"
    },
    {
        name: "Lojban",
        type: "constructed",
        scope: "individual",
        iso6393: "jbo",
        iso6392B: "jbo",
        iso6392T: "jbo"
    },
    {
        name: "Jofotek-Bromnya",
        type: "living",
        scope: "individual",
        iso6393: "jbr"
    },
    {
        name: "Jabut\xed",
        type: "living",
        scope: "individual",
        iso6393: "jbt"
    },
    {
        name: "Jukun Takum",
        type: "living",
        scope: "individual",
        iso6393: "jbu"
    },
    {
        name: "Yawijibaya",
        type: "extinct",
        scope: "individual",
        iso6393: "jbw"
    },
    {
        name: "Jamaican Country Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "jcs"
    },
    {
        name: "Krymchak",
        type: "living",
        scope: "individual",
        iso6393: "jct"
    },
    {
        name: "Jad",
        type: "living",
        scope: "individual",
        iso6393: "jda"
    },
    {
        name: "Jadgali",
        type: "living",
        scope: "individual",
        iso6393: "jdg"
    },
    {
        name: "Judeo-Tat",
        type: "living",
        scope: "individual",
        iso6393: "jdt"
    },
    {
        name: "Jebero",
        type: "living",
        scope: "individual",
        iso6393: "jeb"
    },
    {
        name: "Jerung",
        type: "living",
        scope: "individual",
        iso6393: "jee"
    },
    {
        name: "Jeh",
        type: "living",
        scope: "individual",
        iso6393: "jeh"
    },
    {
        name: "Yei",
        type: "living",
        scope: "individual",
        iso6393: "jei"
    },
    {
        name: "Jeri Kuo",
        type: "living",
        scope: "individual",
        iso6393: "jek"
    },
    {
        name: "Yelmek",
        type: "living",
        scope: "individual",
        iso6393: "jel"
    },
    {
        name: "Dza",
        type: "living",
        scope: "individual",
        iso6393: "jen"
    },
    {
        name: "Jere",
        type: "living",
        scope: "individual",
        iso6393: "jer"
    },
    {
        name: "Manem",
        type: "living",
        scope: "individual",
        iso6393: "jet"
    },
    {
        name: "Jonkor Bourmataguil",
        type: "living",
        scope: "individual",
        iso6393: "jeu"
    },
    {
        name: "Ngbee",
        type: "extinct",
        scope: "individual",
        iso6393: "jgb"
    },
    {
        name: "Judeo-Georgian",
        type: "living",
        scope: "individual",
        iso6393: "jge"
    },
    {
        name: "Gwak",
        type: "living",
        scope: "individual",
        iso6393: "jgk"
    },
    {
        name: "Ngomba",
        type: "living",
        scope: "individual",
        iso6393: "jgo"
    },
    {
        name: "Jehai",
        type: "living",
        scope: "individual",
        iso6393: "jhi"
    },
    {
        name: "Jhankot Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "jhs"
    },
    {
        name: "Jina",
        type: "living",
        scope: "individual",
        iso6393: "jia"
    },
    {
        name: "Jibu",
        type: "living",
        scope: "individual",
        iso6393: "jib"
    },
    {
        name: "Tol",
        type: "living",
        scope: "individual",
        iso6393: "jic"
    },
    {
        name: "Bu",
        type: "living",
        scope: "individual",
        iso6393: "jid"
    },
    {
        name: "Jilbe",
        type: "living",
        scope: "individual",
        iso6393: "jie"
    },
    {
        name: "Jingulu",
        type: "living",
        scope: "individual",
        iso6393: "jig"
    },
    {
        name: "sTodsde",
        type: "living",
        scope: "individual",
        iso6393: "jih"
    },
    {
        name: "Jiiddu",
        type: "living",
        scope: "individual",
        iso6393: "jii"
    },
    {
        name: "Jilim",
        type: "living",
        scope: "individual",
        iso6393: "jil"
    },
    {
        name: "Jimi (Cameroon)",
        type: "living",
        scope: "individual",
        iso6393: "jim"
    },
    {
        name: "Jiamao",
        type: "living",
        scope: "individual",
        iso6393: "jio"
    },
    {
        name: "Guanyinqiao",
        type: "living",
        scope: "individual",
        iso6393: "jiq"
    },
    {
        name: "Jita",
        type: "living",
        scope: "individual",
        iso6393: "jit"
    },
    {
        name: "Youle Jinuo",
        type: "living",
        scope: "individual",
        iso6393: "jiu"
    },
    {
        name: "Shuar",
        type: "living",
        scope: "individual",
        iso6393: "jiv"
    },
    {
        name: "Buyuan Jinuo",
        type: "living",
        scope: "individual",
        iso6393: "jiy"
    },
    {
        name: "Jejueo",
        type: "living",
        scope: "individual",
        iso6393: "jje"
    },
    {
        name: "Bankal",
        type: "living",
        scope: "individual",
        iso6393: "jjr"
    },
    {
        name: "Kaera",
        type: "living",
        scope: "individual",
        iso6393: "jka"
    },
    {
        name: "Mobwa Karen",
        type: "living",
        scope: "individual",
        iso6393: "jkm"
    },
    {
        name: "Kubo",
        type: "living",
        scope: "individual",
        iso6393: "jko"
    },
    {
        name: "Paku Karen",
        type: "living",
        scope: "individual",
        iso6393: "jkp"
    },
    {
        name: "Koro (India)",
        type: "living",
        scope: "individual",
        iso6393: "jkr"
    },
    {
        name: "Labir",
        type: "living",
        scope: "individual",
        iso6393: "jku"
    },
    {
        name: "Ngile",
        type: "living",
        scope: "individual",
        iso6393: "jle"
    },
    {
        name: "Jamaican Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "jls"
    },
    {
        name: "Dima",
        type: "living",
        scope: "individual",
        iso6393: "jma"
    },
    {
        name: "Zumbun",
        type: "living",
        scope: "individual",
        iso6393: "jmb"
    },
    {
        name: "Machame",
        type: "living",
        scope: "individual",
        iso6393: "jmc"
    },
    {
        name: "Yamdena",
        type: "living",
        scope: "individual",
        iso6393: "jmd"
    },
    {
        name: "Jimi (Nigeria)",
        type: "living",
        scope: "individual",
        iso6393: "jmi"
    },
    {
        name: "Jumli",
        type: "living",
        scope: "individual",
        iso6393: "jml"
    },
    {
        name: "Makuri Naga",
        type: "living",
        scope: "individual",
        iso6393: "jmn"
    },
    {
        name: "Kamara",
        type: "living",
        scope: "individual",
        iso6393: "jmr"
    },
    {
        name: "Mashi (Nigeria)",
        type: "living",
        scope: "individual",
        iso6393: "jms"
    },
    {
        name: "Mouwase",
        type: "living",
        scope: "individual",
        iso6393: "jmw"
    },
    {
        name: "Western Juxtlahuaca Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "jmx"
    },
    {
        name: "Jangshung",
        type: "living",
        scope: "individual",
        iso6393: "jna"
    },
    {
        name: "Jandavra",
        type: "living",
        scope: "individual",
        iso6393: "jnd"
    },
    {
        name: "Yangman",
        type: "extinct",
        scope: "individual",
        iso6393: "jng"
    },
    {
        name: "Janji",
        type: "living",
        scope: "individual",
        iso6393: "jni"
    },
    {
        name: "Yemsa",
        type: "living",
        scope: "individual",
        iso6393: "jnj"
    },
    {
        name: "Rawat",
        type: "living",
        scope: "individual",
        iso6393: "jnl"
    },
    {
        name: "Jaunsari",
        type: "living",
        scope: "individual",
        iso6393: "jns"
    },
    {
        name: "Joba",
        type: "living",
        scope: "individual",
        iso6393: "job"
    },
    {
        name: "Wojenaka",
        type: "living",
        scope: "individual",
        iso6393: "jod"
    },
    {
        name: "Jogi",
        type: "living",
        scope: "individual",
        iso6393: "jog"
    },
    {
        name: "Jor\xe1",
        type: "extinct",
        scope: "individual",
        iso6393: "jor"
    },
    {
        name: "Jordanian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "jos"
    },
    {
        name: "Jowulu",
        type: "living",
        scope: "individual",
        iso6393: "jow"
    },
    {
        name: "Jewish Palestinian Aramaic",
        type: "historical",
        scope: "individual",
        iso6393: "jpa"
    },
    {
        name: "Japanese",
        type: "living",
        scope: "individual",
        iso6393: "jpn",
        iso6392B: "jpn",
        iso6392T: "jpn",
        iso6391: "ja"
    },
    {
        name: "Judeo-Persian",
        type: "living",
        scope: "individual",
        iso6393: "jpr",
        iso6392B: "jpr",
        iso6392T: "jpr"
    },
    {
        name: "Jaqaru",
        type: "living",
        scope: "individual",
        iso6393: "jqr"
    },
    {
        name: "Jarai",
        type: "living",
        scope: "individual",
        iso6393: "jra"
    },
    {
        name: "Judeo-Arabic",
        type: "living",
        scope: "macrolanguage",
        iso6393: "jrb",
        iso6392B: "jrb",
        iso6392T: "jrb"
    },
    {
        name: "Jiru",
        type: "living",
        scope: "individual",
        iso6393: "jrr"
    },
    {
        name: "Jorto",
        type: "living",
        scope: "individual",
        iso6393: "jrt"
    },
    {
        name: "Japrer\xeda",
        type: "living",
        scope: "individual",
        iso6393: "jru"
    },
    {
        name: "Japanese Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "jsl"
    },
    {
        name: "J\xfama",
        type: "living",
        scope: "individual",
        iso6393: "jua"
    },
    {
        name: "Wannu",
        type: "living",
        scope: "individual",
        iso6393: "jub"
    },
    {
        name: "Jurchen",
        type: "extinct",
        scope: "individual",
        iso6393: "juc"
    },
    {
        name: "Worodougou",
        type: "living",
        scope: "individual",
        iso6393: "jud"
    },
    {
        name: "H\xf5ne",
        type: "living",
        scope: "individual",
        iso6393: "juh"
    },
    {
        name: "Ngadjuri",
        type: "extinct",
        scope: "individual",
        iso6393: "jui"
    },
    {
        name: "Wapan",
        type: "living",
        scope: "individual",
        iso6393: "juk"
    },
    {
        name: "Jirel",
        type: "living",
        scope: "individual",
        iso6393: "jul"
    },
    {
        name: "Jumjum",
        type: "living",
        scope: "individual",
        iso6393: "jum"
    },
    {
        name: "Juang",
        type: "living",
        scope: "individual",
        iso6393: "jun"
    },
    {
        name: "Jiba",
        type: "living",
        scope: "individual",
        iso6393: "juo"
    },
    {
        name: "Hupd\xeb",
        type: "living",
        scope: "individual",
        iso6393: "jup"
    },
    {
        name: "Jur\xfana",
        type: "living",
        scope: "individual",
        iso6393: "jur"
    },
    {
        name: "Jumla Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "jus"
    },
    {
        name: "Jutish",
        type: "historical",
        scope: "individual",
        iso6393: "jut"
    },
    {
        name: "Ju",
        type: "living",
        scope: "individual",
        iso6393: "juu"
    },
    {
        name: "W\xe3pha",
        type: "living",
        scope: "individual",
        iso6393: "juw"
    },
    {
        name: "Juray",
        type: "living",
        scope: "individual",
        iso6393: "juy"
    },
    {
        name: "Javindo",
        type: "living",
        scope: "individual",
        iso6393: "jvd"
    },
    {
        name: "Caribbean Javanese",
        type: "living",
        scope: "individual",
        iso6393: "jvn"
    },
    {
        name: "Jwira-Pepesa",
        type: "living",
        scope: "individual",
        iso6393: "jwi"
    },
    {
        name: "Jiarong",
        type: "living",
        scope: "individual",
        iso6393: "jya"
    },
    {
        name: "Judeo-Yemeni Arabic",
        type: "living",
        scope: "individual",
        iso6393: "jye"
    },
    {
        name: "Jaya",
        type: "living",
        scope: "individual",
        iso6393: "jyy"
    },
    {
        name: "Kara-Kalpak",
        type: "living",
        scope: "individual",
        iso6393: "kaa",
        iso6392B: "kaa",
        iso6392T: "kaa"
    },
    {
        name: "Kabyle",
        type: "living",
        scope: "individual",
        iso6393: "kab",
        iso6392B: "kab",
        iso6392T: "kab"
    },
    {
        name: "Kachin",
        type: "living",
        scope: "individual",
        iso6393: "kac",
        iso6392B: "kac",
        iso6392T: "kac"
    },
    {
        name: "Adara",
        type: "living",
        scope: "individual",
        iso6393: "kad"
    },
    {
        name: "Ketangalan",
        type: "extinct",
        scope: "individual",
        iso6393: "kae"
    },
    {
        name: "Katso",
        type: "living",
        scope: "individual",
        iso6393: "kaf"
    },
    {
        name: "Kajaman",
        type: "living",
        scope: "individual",
        iso6393: "kag"
    },
    {
        name: "Kara (Central African Republic)",
        type: "living",
        scope: "individual",
        iso6393: "kah"
    },
    {
        name: "Karekare",
        type: "living",
        scope: "individual",
        iso6393: "kai"
    },
    {
        name: "Jju",
        type: "living",
        scope: "individual",
        iso6393: "kaj"
    },
    {
        name: "Kalanguya",
        type: "living",
        scope: "individual",
        iso6393: "kak"
    },
    {
        name: "Kalaallisut",
        type: "living",
        scope: "individual",
        iso6393: "kal",
        iso6392B: "kal",
        iso6392T: "kal",
        iso6391: "kl"
    },
    {
        name: "Kamba (Kenya)",
        type: "living",
        scope: "individual",
        iso6393: "kam",
        iso6392B: "kam",
        iso6392T: "kam"
    },
    {
        name: "Kannada",
        type: "living",
        scope: "individual",
        iso6393: "kan",
        iso6392B: "kan",
        iso6392T: "kan",
        iso6391: "kn"
    },
    {
        name: "Xaasongaxango",
        type: "living",
        scope: "individual",
        iso6393: "kao"
    },
    {
        name: "Bezhta",
        type: "living",
        scope: "individual",
        iso6393: "kap"
    },
    {
        name: "Capanahua",
        type: "living",
        scope: "individual",
        iso6393: "kaq"
    },
    {
        name: "Kashmiri",
        type: "living",
        scope: "individual",
        iso6393: "kas",
        iso6392B: "kas",
        iso6392T: "kas",
        iso6391: "ks"
    },
    {
        name: "Georgian",
        type: "living",
        scope: "individual",
        iso6393: "kat",
        iso6392B: "geo",
        iso6392T: "kat",
        iso6391: "ka"
    },
    {
        name: "Kanuri",
        type: "living",
        scope: "macrolanguage",
        iso6393: "kau",
        iso6392B: "kau",
        iso6392T: "kau",
        iso6391: "kr"
    },
    {
        name: "Katuk\xedna",
        type: "living",
        scope: "individual",
        iso6393: "kav"
    },
    {
        name: "Kawi",
        type: "ancient",
        scope: "individual",
        iso6393: "kaw",
        iso6392B: "kaw",
        iso6392T: "kaw"
    },
    {
        name: "Kao",
        type: "living",
        scope: "individual",
        iso6393: "kax"
    },
    {
        name: "Kamayur\xe1",
        type: "living",
        scope: "individual",
        iso6393: "kay"
    },
    {
        name: "Kazakh",
        type: "living",
        scope: "individual",
        iso6393: "kaz",
        iso6392B: "kaz",
        iso6392T: "kaz",
        iso6391: "kk"
    },
    {
        name: "Kalarko",
        type: "extinct",
        scope: "individual",
        iso6393: "kba"
    },
    {
        name: "Kaxui\xe2na",
        type: "extinct",
        scope: "individual",
        iso6393: "kbb"
    },
    {
        name: "Kadiw\xe9u",
        type: "living",
        scope: "individual",
        iso6393: "kbc"
    },
    {
        name: "Kabardian",
        type: "living",
        scope: "individual",
        iso6393: "kbd",
        iso6392B: "kbd",
        iso6392T: "kbd"
    },
    {
        name: "Kanju",
        type: "living",
        scope: "individual",
        iso6393: "kbe"
    },
    {
        name: "Khamba",
        type: "living",
        scope: "individual",
        iso6393: "kbg"
    },
    {
        name: "Cams\xe1",
        type: "living",
        scope: "individual",
        iso6393: "kbh"
    },
    {
        name: "Kaptiau",
        type: "living",
        scope: "individual",
        iso6393: "kbi"
    },
    {
        name: "Kari",
        type: "living",
        scope: "individual",
        iso6393: "kbj"
    },
    {
        name: "Grass Koiari",
        type: "living",
        scope: "individual",
        iso6393: "kbk"
    },
    {
        name: "Kanembu",
        type: "living",
        scope: "individual",
        iso6393: "kbl"
    },
    {
        name: "Iwal",
        type: "living",
        scope: "individual",
        iso6393: "kbm"
    },
    {
        name: "Kare (Central African Republic)",
        type: "living",
        scope: "individual",
        iso6393: "kbn"
    },
    {
        name: "Keliko",
        type: "living",
        scope: "individual",
        iso6393: "kbo"
    },
    {
        name: "Kabiy\xe8",
        type: "living",
        scope: "individual",
        iso6393: "kbp"
    },
    {
        name: "Kamano",
        type: "living",
        scope: "individual",
        iso6393: "kbq"
    },
    {
        name: "Kafa",
        type: "living",
        scope: "individual",
        iso6393: "kbr"
    },
    {
        name: "Kande",
        type: "living",
        scope: "individual",
        iso6393: "kbs"
    },
    {
        name: "Abadi",
        type: "living",
        scope: "individual",
        iso6393: "kbt"
    },
    {
        name: "Kabutra",
        type: "living",
        scope: "individual",
        iso6393: "kbu"
    },
    {
        name: "Dera (Indonesia)",
        type: "living",
        scope: "individual",
        iso6393: "kbv"
    },
    {
        name: "Kaiep",
        type: "living",
        scope: "individual",
        iso6393: "kbw"
    },
    {
        name: "Ap Ma",
        type: "living",
        scope: "individual",
        iso6393: "kbx"
    },
    {
        name: "Manga Kanuri",
        type: "living",
        scope: "individual",
        iso6393: "kby"
    },
    {
        name: "Duhwa",
        type: "living",
        scope: "individual",
        iso6393: "kbz"
    },
    {
        name: "Khanty",
        type: "living",
        scope: "individual",
        iso6393: "kca"
    },
    {
        name: "Kawacha",
        type: "living",
        scope: "individual",
        iso6393: "kcb"
    },
    {
        name: "Lubila",
        type: "living",
        scope: "individual",
        iso6393: "kcc"
    },
    {
        name: "Ngk\xe2lmpw Kanum",
        type: "living",
        scope: "individual",
        iso6393: "kcd"
    },
    {
        name: "Kaivi",
        type: "living",
        scope: "individual",
        iso6393: "kce"
    },
    {
        name: "Ukaan",
        type: "living",
        scope: "individual",
        iso6393: "kcf"
    },
    {
        name: "Tyap",
        type: "living",
        scope: "individual",
        iso6393: "kcg"
    },
    {
        name: "Vono",
        type: "living",
        scope: "individual",
        iso6393: "kch"
    },
    {
        name: "Kamantan",
        type: "living",
        scope: "individual",
        iso6393: "kci"
    },
    {
        name: "Kobiana",
        type: "living",
        scope: "individual",
        iso6393: "kcj"
    },
    {
        name: "Kalanga",
        type: "living",
        scope: "individual",
        iso6393: "kck"
    },
    {
        name: "Kela (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "kcl"
    },
    {
        name: "Gula (Central African Republic)",
        type: "living",
        scope: "individual",
        iso6393: "kcm"
    },
    {
        name: "Nubi",
        type: "living",
        scope: "individual",
        iso6393: "kcn"
    },
    {
        name: "Kinalakna",
        type: "living",
        scope: "individual",
        iso6393: "kco"
    },
    {
        name: "Kanga",
        type: "living",
        scope: "individual",
        iso6393: "kcp"
    },
    {
        name: "Kamo",
        type: "living",
        scope: "individual",
        iso6393: "kcq"
    },
    {
        name: "Katla",
        type: "living",
        scope: "individual",
        iso6393: "kcr"
    },
    {
        name: "Koenoem",
        type: "living",
        scope: "individual",
        iso6393: "kcs"
    },
    {
        name: "Kaian",
        type: "living",
        scope: "individual",
        iso6393: "kct"
    },
    {
        name: "Kami (Tanzania)",
        type: "living",
        scope: "individual",
        iso6393: "kcu"
    },
    {
        name: "Kete",
        type: "living",
        scope: "individual",
        iso6393: "kcv"
    },
    {
        name: "Kabwari",
        type: "living",
        scope: "individual",
        iso6393: "kcw"
    },
    {
        name: "Kachama-Ganjule",
        type: "living",
        scope: "individual",
        iso6393: "kcx"
    },
    {
        name: "Korandje",
        type: "living",
        scope: "individual",
        iso6393: "kcy"
    },
    {
        name: "Konongo",
        type: "living",
        scope: "individual",
        iso6393: "kcz"
    },
    {
        name: "Worimi",
        type: "extinct",
        scope: "individual",
        iso6393: "kda"
    },
    {
        name: "Kutu",
        type: "living",
        scope: "individual",
        iso6393: "kdc"
    },
    {
        name: "Yankunytjatjara",
        type: "living",
        scope: "individual",
        iso6393: "kdd"
    },
    {
        name: "Makonde",
        type: "living",
        scope: "individual",
        iso6393: "kde"
    },
    {
        name: "Mamusi",
        type: "living",
        scope: "individual",
        iso6393: "kdf"
    },
    {
        name: "Seba",
        type: "living",
        scope: "individual",
        iso6393: "kdg"
    },
    {
        name: "Tem",
        type: "living",
        scope: "individual",
        iso6393: "kdh"
    },
    {
        name: "Kumam",
        type: "living",
        scope: "individual",
        iso6393: "kdi"
    },
    {
        name: "Karamojong",
        type: "living",
        scope: "individual",
        iso6393: "kdj"
    },
    {
        name: "Num\xe8\xe8",
        type: "living",
        scope: "individual",
        iso6393: "kdk"
    },
    {
        name: "Tsikimba",
        type: "living",
        scope: "individual",
        iso6393: "kdl"
    },
    {
        name: "Kagoma",
        type: "living",
        scope: "individual",
        iso6393: "kdm"
    },
    {
        name: "Kunda",
        type: "living",
        scope: "individual",
        iso6393: "kdn"
    },
    {
        name: "Kaningdon-Nindem",
        type: "living",
        scope: "individual",
        iso6393: "kdp"
    },
    {
        name: "Koch",
        type: "living",
        scope: "individual",
        iso6393: "kdq"
    },
    {
        name: "Karaim",
        type: "living",
        scope: "individual",
        iso6393: "kdr"
    },
    {
        name: "Kuy",
        type: "living",
        scope: "individual",
        iso6393: "kdt"
    },
    {
        name: "Kadaru",
        type: "living",
        scope: "individual",
        iso6393: "kdu"
    },
    {
        name: "Koneraw",
        type: "living",
        scope: "individual",
        iso6393: "kdw"
    },
    {
        name: "Kam",
        type: "living",
        scope: "individual",
        iso6393: "kdx"
    },
    {
        name: "Keder",
        type: "living",
        scope: "individual",
        iso6393: "kdy"
    },
    {
        name: "Kwaja",
        type: "living",
        scope: "individual",
        iso6393: "kdz"
    },
    {
        name: "Kabuverdianu",
        type: "living",
        scope: "individual",
        iso6393: "kea"
    },
    {
        name: "K\xe9l\xe9",
        type: "living",
        scope: "individual",
        iso6393: "keb"
    },
    {
        name: "Keiga",
        type: "living",
        scope: "individual",
        iso6393: "kec"
    },
    {
        name: "Kerewe",
        type: "living",
        scope: "individual",
        iso6393: "ked"
    },
    {
        name: "Eastern Keres",
        type: "living",
        scope: "individual",
        iso6393: "kee"
    },
    {
        name: "Kpessi",
        type: "living",
        scope: "individual",
        iso6393: "kef"
    },
    {
        name: "Tese",
        type: "living",
        scope: "individual",
        iso6393: "keg"
    },
    {
        name: "Keak",
        type: "living",
        scope: "individual",
        iso6393: "keh"
    },
    {
        name: "Kei",
        type: "living",
        scope: "individual",
        iso6393: "kei"
    },
    {
        name: "Kadar",
        type: "living",
        scope: "individual",
        iso6393: "kej"
    },
    {
        name: "Kekch\xed",
        type: "living",
        scope: "individual",
        iso6393: "kek"
    },
    {
        name: "Kela (Democratic Republic of Congo)",
        type: "living",
        scope: "individual",
        iso6393: "kel"
    },
    {
        name: "Kemak",
        type: "living",
        scope: "individual",
        iso6393: "kem"
    },
    {
        name: "Kenyang",
        type: "living",
        scope: "individual",
        iso6393: "ken"
    },
    {
        name: "Kakwa",
        type: "living",
        scope: "individual",
        iso6393: "keo"
    },
    {
        name: "Kaikadi",
        type: "living",
        scope: "individual",
        iso6393: "kep"
    },
    {
        name: "Kamar",
        type: "living",
        scope: "individual",
        iso6393: "keq"
    },
    {
        name: "Kera",
        type: "living",
        scope: "individual",
        iso6393: "ker"
    },
    {
        name: "Kugbo",
        type: "living",
        scope: "individual",
        iso6393: "kes"
    },
    {
        name: "Ket",
        type: "living",
        scope: "individual",
        iso6393: "ket"
    },
    {
        name: "Akebu",
        type: "living",
        scope: "individual",
        iso6393: "keu"
    },
    {
        name: "Kanikkaran",
        type: "living",
        scope: "individual",
        iso6393: "kev"
    },
    {
        name: "West Kewa",
        type: "living",
        scope: "individual",
        iso6393: "kew"
    },
    {
        name: "Kukna",
        type: "living",
        scope: "individual",
        iso6393: "kex"
    },
    {
        name: "Kupia",
        type: "living",
        scope: "individual",
        iso6393: "key"
    },
    {
        name: "Kukele",
        type: "living",
        scope: "individual",
        iso6393: "kez"
    },
    {
        name: "Kodava",
        type: "living",
        scope: "individual",
        iso6393: "kfa"
    },
    {
        name: "Northwestern Kolami",
        type: "living",
        scope: "individual",
        iso6393: "kfb"
    },
    {
        name: "Konda-Dora",
        type: "living",
        scope: "individual",
        iso6393: "kfc"
    },
    {
        name: "Korra Koraga",
        type: "living",
        scope: "individual",
        iso6393: "kfd"
    },
    {
        name: "Kota (India)",
        type: "living",
        scope: "individual",
        iso6393: "kfe"
    },
    {
        name: "Koya",
        type: "living",
        scope: "individual",
        iso6393: "kff"
    },
    {
        name: "Kudiya",
        type: "living",
        scope: "individual",
        iso6393: "kfg"
    },
    {
        name: "Kurichiya",
        type: "living",
        scope: "individual",
        iso6393: "kfh"
    },
    {
        name: "Kannada Kurumba",
        type: "living",
        scope: "individual",
        iso6393: "kfi"
    },
    {
        name: "Kemiehua",
        type: "living",
        scope: "individual",
        iso6393: "kfj"
    },
    {
        name: "Kinnauri",
        type: "living",
        scope: "individual",
        iso6393: "kfk"
    },
    {
        name: "Kung",
        type: "living",
        scope: "individual",
        iso6393: "kfl"
    },
    {
        name: "Khunsari",
        type: "living",
        scope: "individual",
        iso6393: "kfm"
    },
    {
        name: "Kuk",
        type: "living",
        scope: "individual",
        iso6393: "kfn"
    },
    {
        name: "Koro (C\xf4te d'Ivoire)",
        type: "living",
        scope: "individual",
        iso6393: "kfo"
    },
    {
        name: "Korwa",
        type: "living",
        scope: "individual",
        iso6393: "kfp"
    },
    {
        name: "Korku",
        type: "living",
        scope: "individual",
        iso6393: "kfq"
    },
    {
        name: "Kachhi",
        type: "living",
        scope: "individual",
        iso6393: "kfr"
    },
    {
        name: "Bilaspuri",
        type: "living",
        scope: "individual",
        iso6393: "kfs"
    },
    {
        name: "Kanjari",
        type: "living",
        scope: "individual",
        iso6393: "kft"
    },
    {
        name: "Katkari",
        type: "living",
        scope: "individual",
        iso6393: "kfu"
    },
    {
        name: "Kurmukar",
        type: "living",
        scope: "individual",
        iso6393: "kfv"
    },
    {
        name: "Kharam Naga",
        type: "living",
        scope: "individual",
        iso6393: "kfw"
    },
    {
        name: "Kullu Pahari",
        type: "living",
        scope: "individual",
        iso6393: "kfx"
    },
    {
        name: "Kumaoni",
        type: "living",
        scope: "individual",
        iso6393: "kfy"
    },
    {
        name: "Koromf\xe9",
        type: "living",
        scope: "individual",
        iso6393: "kfz"
    },
    {
        name: "Koyaga",
        type: "living",
        scope: "individual",
        iso6393: "kga"
    },
    {
        name: "Kawe",
        type: "living",
        scope: "individual",
        iso6393: "kgb"
    },
    {
        name: "Komering",
        type: "living",
        scope: "individual",
        iso6393: "kge"
    },
    {
        name: "Kube",
        type: "living",
        scope: "individual",
        iso6393: "kgf"
    },
    {
        name: "Kusunda",
        type: "living",
        scope: "individual",
        iso6393: "kgg"
    },
    {
        name: "Selangor Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "kgi"
    },
    {
        name: "Gamale Kham",
        type: "living",
        scope: "individual",
        iso6393: "kgj"
    },
    {
        name: "Kaiw\xe1",
        type: "living",
        scope: "individual",
        iso6393: "kgk"
    },
    {
        name: "Kunggari",
        type: "extinct",
        scope: "individual",
        iso6393: "kgl"
    },
    {
        name: "Karip\xfana",
        type: "extinct",
        scope: "individual",
        iso6393: "kgm"
    },
    {
        name: "Karingani",
        type: "living",
        scope: "individual",
        iso6393: "kgn"
    },
    {
        name: "Krongo",
        type: "living",
        scope: "individual",
        iso6393: "kgo"
    },
    {
        name: "Kaingang",
        type: "living",
        scope: "individual",
        iso6393: "kgp"
    },
    {
        name: "Kamoro",
        type: "living",
        scope: "individual",
        iso6393: "kgq"
    },
    {
        name: "Abun",
        type: "living",
        scope: "individual",
        iso6393: "kgr"
    },
    {
        name: "Kumbainggar",
        type: "living",
        scope: "individual",
        iso6393: "kgs"
    },
    {
        name: "Somyev",
        type: "living",
        scope: "individual",
        iso6393: "kgt"
    },
    {
        name: "Kobol",
        type: "living",
        scope: "individual",
        iso6393: "kgu"
    },
    {
        name: "Karas",
        type: "living",
        scope: "individual",
        iso6393: "kgv"
    },
    {
        name: "Karon Dori",
        type: "living",
        scope: "individual",
        iso6393: "kgw"
    },
    {
        name: "Kamaru",
        type: "living",
        scope: "individual",
        iso6393: "kgx"
    },
    {
        name: "Kyerung",
        type: "living",
        scope: "individual",
        iso6393: "kgy"
    },
    {
        name: "Khasi",
        type: "living",
        scope: "individual",
        iso6393: "kha",
        iso6392B: "kha",
        iso6392T: "kha"
    },
    {
        name: "L\xfc",
        type: "living",
        scope: "individual",
        iso6393: "khb"
    },
    {
        name: "Tukang Besi North",
        type: "living",
        scope: "individual",
        iso6393: "khc"
    },
    {
        name: "B\xe4di Kanum",
        type: "living",
        scope: "individual",
        iso6393: "khd"
    },
    {
        name: "Korowai",
        type: "living",
        scope: "individual",
        iso6393: "khe"
    },
    {
        name: "Khuen",
        type: "living",
        scope: "individual",
        iso6393: "khf"
    },
    {
        name: "Khams Tibetan",
        type: "living",
        scope: "individual",
        iso6393: "khg"
    },
    {
        name: "Kehu",
        type: "living",
        scope: "individual",
        iso6393: "khh"
    },
    {
        name: "Kuturmi",
        type: "living",
        scope: "individual",
        iso6393: "khj"
    },
    {
        name: "Halh Mongolian",
        type: "living",
        scope: "individual",
        iso6393: "khk"
    },
    {
        name: "Lusi",
        type: "living",
        scope: "individual",
        iso6393: "khl"
    },
    {
        name: "Khmer",
        type: "living",
        scope: "individual",
        iso6393: "khm",
        iso6392B: "khm",
        iso6392T: "khm",
        iso6391: "km"
    },
    {
        name: "Khandesi",
        type: "living",
        scope: "individual",
        iso6393: "khn"
    },
    {
        name: "Khotanese",
        type: "ancient",
        scope: "individual",
        iso6393: "kho",
        iso6392B: "kho",
        iso6392T: "kho"
    },
    {
        name: "Kapori",
        type: "living",
        scope: "individual",
        iso6393: "khp"
    },
    {
        name: "Koyra Chiini Songhay",
        type: "living",
        scope: "individual",
        iso6393: "khq"
    },
    {
        name: "Kharia",
        type: "living",
        scope: "individual",
        iso6393: "khr"
    },
    {
        name: "Kasua",
        type: "living",
        scope: "individual",
        iso6393: "khs"
    },
    {
        name: "Khamti",
        type: "living",
        scope: "individual",
        iso6393: "kht"
    },
    {
        name: "Nkhumbi",
        type: "living",
        scope: "individual",
        iso6393: "khu"
    },
    {
        name: "Khvarshi",
        type: "living",
        scope: "individual",
        iso6393: "khv"
    },
    {
        name: "Khowar",
        type: "living",
        scope: "individual",
        iso6393: "khw"
    },
    {
        name: "Kanu",
        type: "living",
        scope: "individual",
        iso6393: "khx"
    },
    {
        name: "Kele (Democratic Republic of Congo)",
        type: "living",
        scope: "individual",
        iso6393: "khy"
    },
    {
        name: "Keapara",
        type: "living",
        scope: "individual",
        iso6393: "khz"
    },
    {
        name: "Kim",
        type: "living",
        scope: "individual",
        iso6393: "kia"
    },
    {
        name: "Koalib",
        type: "living",
        scope: "individual",
        iso6393: "kib"
    },
    {
        name: "Kickapoo",
        type: "living",
        scope: "individual",
        iso6393: "kic"
    },
    {
        name: "Koshin",
        type: "living",
        scope: "individual",
        iso6393: "kid"
    },
    {
        name: "Kibet",
        type: "living",
        scope: "individual",
        iso6393: "kie"
    },
    {
        name: "Eastern Parbate Kham",
        type: "living",
        scope: "individual",
        iso6393: "kif"
    },
    {
        name: "Kimaama",
        type: "living",
        scope: "individual",
        iso6393: "kig"
    },
    {
        name: "Kilmeri",
        type: "living",
        scope: "individual",
        iso6393: "kih"
    },
    {
        name: "Kitsai",
        type: "extinct",
        scope: "individual",
        iso6393: "kii"
    },
    {
        name: "Kilivila",
        type: "living",
        scope: "individual",
        iso6393: "kij"
    },
    {
        name: "Kikuyu",
        type: "living",
        scope: "individual",
        iso6393: "kik",
        iso6392B: "kik",
        iso6392T: "kik",
        iso6391: "ki"
    },
    {
        name: "Kariya",
        type: "living",
        scope: "individual",
        iso6393: "kil"
    },
    {
        name: "Karagas",
        type: "living",
        scope: "individual",
        iso6393: "kim"
    },
    {
        name: "Kinyarwanda",
        type: "living",
        scope: "individual",
        iso6393: "kin",
        iso6392B: "kin",
        iso6392T: "kin",
        iso6391: "rw"
    },
    {
        name: "Kiowa",
        type: "living",
        scope: "individual",
        iso6393: "kio"
    },
    {
        name: "Sheshi Kham",
        type: "living",
        scope: "individual",
        iso6393: "kip"
    },
    {
        name: "Kosadle",
        type: "living",
        scope: "individual",
        iso6393: "kiq"
    },
    {
        name: "Kirghiz",
        type: "living",
        scope: "individual",
        iso6393: "kir",
        iso6392B: "kir",
        iso6392T: "kir",
        iso6391: "ky"
    },
    {
        name: "Kis",
        type: "living",
        scope: "individual",
        iso6393: "kis"
    },
    {
        name: "Agob",
        type: "living",
        scope: "individual",
        iso6393: "kit"
    },
    {
        name: "Kirmanjki (individual language)",
        type: "living",
        scope: "individual",
        iso6393: "kiu"
    },
    {
        name: "Kimbu",
        type: "living",
        scope: "individual",
        iso6393: "kiv"
    },
    {
        name: "Northeast Kiwai",
        type: "living",
        scope: "individual",
        iso6393: "kiw"
    },
    {
        name: "Khiamniungan Naga",
        type: "living",
        scope: "individual",
        iso6393: "kix"
    },
    {
        name: "Kirikiri",
        type: "living",
        scope: "individual",
        iso6393: "kiy"
    },
    {
        name: "Kisi",
        type: "living",
        scope: "individual",
        iso6393: "kiz"
    },
    {
        name: "Mlap",
        type: "living",
        scope: "individual",
        iso6393: "kja"
    },
    {
        name: "Q'anjob'al",
        type: "living",
        scope: "individual",
        iso6393: "kjb"
    },
    {
        name: "Coastal Konjo",
        type: "living",
        scope: "individual",
        iso6393: "kjc"
    },
    {
        name: "Southern Kiwai",
        type: "living",
        scope: "individual",
        iso6393: "kjd"
    },
    {
        name: "Kisar",
        type: "living",
        scope: "individual",
        iso6393: "kje"
    },
    {
        name: "Khmu",
        type: "living",
        scope: "individual",
        iso6393: "kjg"
    },
    {
        name: "Khakas",
        type: "living",
        scope: "individual",
        iso6393: "kjh"
    },
    {
        name: "Zabana",
        type: "living",
        scope: "individual",
        iso6393: "kji"
    },
    {
        name: "Khinalugh",
        type: "living",
        scope: "individual",
        iso6393: "kjj"
    },
    {
        name: "Highland Konjo",
        type: "living",
        scope: "individual",
        iso6393: "kjk"
    },
    {
        name: "Western Parbate Kham",
        type: "living",
        scope: "individual",
        iso6393: "kjl"
    },
    {
        name: "Kh\xe1ng",
        type: "living",
        scope: "individual",
        iso6393: "kjm"
    },
    {
        name: "Kunjen",
        type: "living",
        scope: "individual",
        iso6393: "kjn"
    },
    {
        name: "Harijan Kinnauri",
        type: "living",
        scope: "individual",
        iso6393: "kjo"
    },
    {
        name: "Pwo Eastern Karen",
        type: "living",
        scope: "individual",
        iso6393: "kjp"
    },
    {
        name: "Western Keres",
        type: "living",
        scope: "individual",
        iso6393: "kjq"
    },
    {
        name: "Kurudu",
        type: "living",
        scope: "individual",
        iso6393: "kjr"
    },
    {
        name: "East Kewa",
        type: "living",
        scope: "individual",
        iso6393: "kjs"
    },
    {
        name: "Phrae Pwo Karen",
        type: "living",
        scope: "individual",
        iso6393: "kjt"
    },
    {
        name: "Kashaya",
        type: "living",
        scope: "individual",
        iso6393: "kju"
    },
    {
        name: "Kaikavian Literary Language",
        type: "historical",
        scope: "individual",
        iso6393: "kjv"
    },
    {
        name: "Ramopa",
        type: "living",
        scope: "individual",
        iso6393: "kjx"
    },
    {
        name: "Erave",
        type: "living",
        scope: "individual",
        iso6393: "kjy"
    },
    {
        name: "Bumthangkha",
        type: "living",
        scope: "individual",
        iso6393: "kjz"
    },
    {
        name: "Kakanda",
        type: "living",
        scope: "individual",
        iso6393: "kka"
    },
    {
        name: "Kwerisa",
        type: "living",
        scope: "individual",
        iso6393: "kkb"
    },
    {
        name: "Odoodee",
        type: "living",
        scope: "individual",
        iso6393: "kkc"
    },
    {
        name: "Kinuku",
        type: "living",
        scope: "individual",
        iso6393: "kkd"
    },
    {
        name: "Kakabe",
        type: "living",
        scope: "individual",
        iso6393: "kke"
    },
    {
        name: "Kalaktang Monpa",
        type: "living",
        scope: "individual",
        iso6393: "kkf"
    },
    {
        name: "Mabaka Valley Kalinga",
        type: "living",
        scope: "individual",
        iso6393: "kkg"
    },
    {
        name: "Kh\xfcn",
        type: "living",
        scope: "individual",
        iso6393: "kkh"
    },
    {
        name: "Kagulu",
        type: "living",
        scope: "individual",
        iso6393: "kki"
    },
    {
        name: "Kako",
        type: "living",
        scope: "individual",
        iso6393: "kkj"
    },
    {
        name: "Kokota",
        type: "living",
        scope: "individual",
        iso6393: "kkk"
    },
    {
        name: "Kosarek Yale",
        type: "living",
        scope: "individual",
        iso6393: "kkl"
    },
    {
        name: "Kiong",
        type: "living",
        scope: "individual",
        iso6393: "kkm"
    },
    {
        name: "Kon Keu",
        type: "living",
        scope: "individual",
        iso6393: "kkn"
    },
    {
        name: "Karko",
        type: "living",
        scope: "individual",
        iso6393: "kko"
    },
    {
        name: "Gugubera",
        type: "living",
        scope: "individual",
        iso6393: "kkp"
    },
    {
        name: "Kaeku",
        type: "living",
        scope: "individual",
        iso6393: "kkq"
    },
    {
        name: "Kir-Balar",
        type: "living",
        scope: "individual",
        iso6393: "kkr"
    },
    {
        name: "Giiwo",
        type: "living",
        scope: "individual",
        iso6393: "kks"
    },
    {
        name: "Koi",
        type: "living",
        scope: "individual",
        iso6393: "kkt"
    },
    {
        name: "Tumi",
        type: "living",
        scope: "individual",
        iso6393: "kku"
    },
    {
        name: "Kangean",
        type: "living",
        scope: "individual",
        iso6393: "kkv"
    },
    {
        name: "Teke-Kukuya",
        type: "living",
        scope: "individual",
        iso6393: "kkw"
    },
    {
        name: "Kohin",
        type: "living",
        scope: "individual",
        iso6393: "kkx"
    },
    {
        name: "Guugu Yimidhirr",
        type: "living",
        scope: "individual",
        iso6393: "kky"
    },
    {
        name: "Kaska",
        type: "living",
        scope: "individual",
        iso6393: "kkz"
    },
    {
        name: "Klamath-Modoc",
        type: "extinct",
        scope: "individual",
        iso6393: "kla"
    },
    {
        name: "Kiliwa",
        type: "living",
        scope: "individual",
        iso6393: "klb"
    },
    {
        name: "Kolbila",
        type: "living",
        scope: "individual",
        iso6393: "klc"
    },
    {
        name: "Gamilaraay",
        type: "living",
        scope: "individual",
        iso6393: "kld"
    },
    {
        name: "Kulung (Nepal)",
        type: "living",
        scope: "individual",
        iso6393: "kle"
    },
    {
        name: "Kendeje",
        type: "living",
        scope: "individual",
        iso6393: "klf"
    },
    {
        name: "Tagakaulo",
        type: "living",
        scope: "individual",
        iso6393: "klg"
    },
    {
        name: "Weliki",
        type: "living",
        scope: "individual",
        iso6393: "klh"
    },
    {
        name: "Kalumpang",
        type: "living",
        scope: "individual",
        iso6393: "kli"
    },
    {
        name: "Khalaj",
        type: "living",
        scope: "individual",
        iso6393: "klj"
    },
    {
        name: "Kono (Nigeria)",
        type: "living",
        scope: "individual",
        iso6393: "klk"
    },
    {
        name: "Kagan Kalagan",
        type: "living",
        scope: "individual",
        iso6393: "kll"
    },
    {
        name: "Migum",
        type: "living",
        scope: "individual",
        iso6393: "klm"
    },
    {
        name: "Kalenjin",
        type: "living",
        scope: "macrolanguage",
        iso6393: "kln"
    },
    {
        name: "Kapya",
        type: "living",
        scope: "individual",
        iso6393: "klo"
    },
    {
        name: "Kamasa",
        type: "living",
        scope: "individual",
        iso6393: "klp"
    },
    {
        name: "Rumu",
        type: "living",
        scope: "individual",
        iso6393: "klq"
    },
    {
        name: "Khaling",
        type: "living",
        scope: "individual",
        iso6393: "klr"
    },
    {
        name: "Kalasha",
        type: "living",
        scope: "individual",
        iso6393: "kls"
    },
    {
        name: "Nukna",
        type: "living",
        scope: "individual",
        iso6393: "klt"
    },
    {
        name: "Klao",
        type: "living",
        scope: "individual",
        iso6393: "klu"
    },
    {
        name: "Maskelynes",
        type: "living",
        scope: "individual",
        iso6393: "klv"
    },
    {
        name: "Tado",
        type: "living",
        scope: "individual",
        iso6393: "klw"
    },
    {
        name: "Koluwawa",
        type: "living",
        scope: "individual",
        iso6393: "klx"
    },
    {
        name: "Kalao",
        type: "living",
        scope: "individual",
        iso6393: "kly"
    },
    {
        name: "Kabola",
        type: "living",
        scope: "individual",
        iso6393: "klz"
    },
    {
        name: "Konni",
        type: "living",
        scope: "individual",
        iso6393: "kma"
    },
    {
        name: "Kimbundu",
        type: "living",
        scope: "individual",
        iso6393: "kmb",
        iso6392B: "kmb",
        iso6392T: "kmb"
    },
    {
        name: "Southern Dong",
        type: "living",
        scope: "individual",
        iso6393: "kmc"
    },
    {
        name: "Majukayang Kalinga",
        type: "living",
        scope: "individual",
        iso6393: "kmd"
    },
    {
        name: "Bakole",
        type: "living",
        scope: "individual",
        iso6393: "kme"
    },
    {
        name: "Kare (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "kmf"
    },
    {
        name: "K\xe2te",
        type: "living",
        scope: "individual",
        iso6393: "kmg"
    },
    {
        name: "Kalam",
        type: "living",
        scope: "individual",
        iso6393: "kmh"
    },
    {
        name: "Kami (Nigeria)",
        type: "living",
        scope: "individual",
        iso6393: "kmi"
    },
    {
        name: "Kumarbhag Paharia",
        type: "living",
        scope: "individual",
        iso6393: "kmj"
    },
    {
        name: "Limos Kalinga",
        type: "living",
        scope: "individual",
        iso6393: "kmk"
    },
    {
        name: "Tanudan Kalinga",
        type: "living",
        scope: "individual",
        iso6393: "kml"
    },
    {
        name: "Kom (India)",
        type: "living",
        scope: "individual",
        iso6393: "kmm"
    },
    {
        name: "Awtuw",
        type: "living",
        scope: "individual",
        iso6393: "kmn"
    },
    {
        name: "Kwoma",
        type: "living",
        scope: "individual",
        iso6393: "kmo"
    },
    {
        name: "Gimme",
        type: "living",
        scope: "individual",
        iso6393: "kmp"
    },
    {
        name: "Kwama",
        type: "living",
        scope: "individual",
        iso6393: "kmq"
    },
    {
        name: "Northern Kurdish",
        type: "living",
        scope: "individual",
        iso6393: "kmr"
    },
    {
        name: "Kamasau",
        type: "living",
        scope: "individual",
        iso6393: "kms"
    },
    {
        name: "Kemtuik",
        type: "living",
        scope: "individual",
        iso6393: "kmt"
    },
    {
        name: "Kanite",
        type: "living",
        scope: "individual",
        iso6393: "kmu"
    },
    {
        name: "Karip\xfana Creole French",
        type: "living",
        scope: "individual",
        iso6393: "kmv"
    },
    {
        name: "Komo (Democratic Republic of Congo)",
        type: "living",
        scope: "individual",
        iso6393: "kmw"
    },
    {
        name: "Waboda",
        type: "living",
        scope: "individual",
        iso6393: "kmx"
    },
    {
        name: "Koma",
        type: "living",
        scope: "individual",
        iso6393: "kmy"
    },
    {
        name: "Khorasani Turkish",
        type: "living",
        scope: "individual",
        iso6393: "kmz"
    },
    {
        name: "Dera (Nigeria)",
        type: "living",
        scope: "individual",
        iso6393: "kna"
    },
    {
        name: "Lubuagan Kalinga",
        type: "living",
        scope: "individual",
        iso6393: "knb"
    },
    {
        name: "Central Kanuri",
        type: "living",
        scope: "individual",
        iso6393: "knc"
    },
    {
        name: "Konda",
        type: "living",
        scope: "individual",
        iso6393: "knd"
    },
    {
        name: "Kankanaey",
        type: "living",
        scope: "individual",
        iso6393: "kne"
    },
    {
        name: "Mankanya",
        type: "living",
        scope: "individual",
        iso6393: "knf"
    },
    {
        name: "Koongo",
        type: "living",
        scope: "individual",
        iso6393: "kng"
    },
    {
        name: "Kanufi",
        type: "living",
        scope: "individual",
        iso6393: "kni"
    },
    {
        name: "Western Kanjobal",
        type: "living",
        scope: "individual",
        iso6393: "knj"
    },
    {
        name: "Kuranko",
        type: "living",
        scope: "individual",
        iso6393: "knk"
    },
    {
        name: "Keninjal",
        type: "living",
        scope: "individual",
        iso6393: "knl"
    },
    {
        name: "Kanamar\xed",
        type: "living",
        scope: "individual",
        iso6393: "knm"
    },
    {
        name: "Konkani (individual language)",
        type: "living",
        scope: "individual",
        iso6393: "knn"
    },
    {
        name: "Kono (Sierra Leone)",
        type: "living",
        scope: "individual",
        iso6393: "kno"
    },
    {
        name: "Kwanja",
        type: "living",
        scope: "individual",
        iso6393: "knp"
    },
    {
        name: "Kintaq",
        type: "living",
        scope: "individual",
        iso6393: "knq"
    },
    {
        name: "Kaningra",
        type: "living",
        scope: "individual",
        iso6393: "knr"
    },
    {
        name: "Kensiu",
        type: "living",
        scope: "individual",
        iso6393: "kns"
    },
    {
        name: "Panoan Katuk\xedna",
        type: "living",
        scope: "individual",
        iso6393: "knt"
    },
    {
        name: "Kono (Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "knu"
    },
    {
        name: "Tabo",
        type: "living",
        scope: "individual",
        iso6393: "knv"
    },
    {
        name: "Kung-Ekoka",
        type: "living",
        scope: "individual",
        iso6393: "knw"
    },
    {
        name: "Kendayan",
        type: "living",
        scope: "individual",
        iso6393: "knx"
    },
    {
        name: "Kanyok",
        type: "living",
        scope: "individual",
        iso6393: "kny"
    },
    {
        name: "Kalams\xe9",
        type: "living",
        scope: "individual",
        iso6393: "knz"
    },
    {
        name: "Konomala",
        type: "living",
        scope: "individual",
        iso6393: "koa"
    },
    {
        name: "Kpati",
        type: "extinct",
        scope: "individual",
        iso6393: "koc"
    },
    {
        name: "Kodi",
        type: "living",
        scope: "individual",
        iso6393: "kod"
    },
    {
        name: "Kacipo-Balesi",
        type: "living",
        scope: "individual",
        iso6393: "koe"
    },
    {
        name: "Kubi",
        type: "extinct",
        scope: "individual",
        iso6393: "kof"
    },
    {
        name: "Cogui",
        type: "living",
        scope: "individual",
        iso6393: "kog"
    },
    {
        name: "Koyo",
        type: "living",
        scope: "individual",
        iso6393: "koh"
    },
    {
        name: "Komi-Permyak",
        type: "living",
        scope: "individual",
        iso6393: "koi"
    },
    {
        name: "Konkani (macrolanguage)",
        type: "living",
        scope: "macrolanguage",
        iso6393: "kok",
        iso6392B: "kok",
        iso6392T: "kok"
    },
    {
        name: "Kol (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "kol"
    },
    {
        name: "Komi",
        type: "living",
        scope: "macrolanguage",
        iso6393: "kom",
        iso6392B: "kom",
        iso6392T: "kom",
        iso6391: "kv"
    },
    {
        name: "Kongo",
        type: "living",
        scope: "macrolanguage",
        iso6393: "kon",
        iso6392B: "kon",
        iso6392T: "kon",
        iso6391: "kg"
    },
    {
        name: "Konzo",
        type: "living",
        scope: "individual",
        iso6393: "koo"
    },
    {
        name: "Waube",
        type: "living",
        scope: "individual",
        iso6393: "kop"
    },
    {
        name: "Kota (Gabon)",
        type: "living",
        scope: "individual",
        iso6393: "koq"
    },
    {
        name: "Korean",
        type: "living",
        scope: "individual",
        iso6393: "kor",
        iso6392B: "kor",
        iso6392T: "kor",
        iso6391: "ko"
    },
    {
        name: "Kosraean",
        type: "living",
        scope: "individual",
        iso6393: "kos",
        iso6392B: "kos",
        iso6392T: "kos"
    },
    {
        name: "Lagwan",
        type: "living",
        scope: "individual",
        iso6393: "kot"
    },
    {
        name: "Koke",
        type: "living",
        scope: "individual",
        iso6393: "kou"
    },
    {
        name: "Kudu-Camo",
        type: "living",
        scope: "individual",
        iso6393: "kov"
    },
    {
        name: "Kugama",
        type: "living",
        scope: "individual",
        iso6393: "kow"
    },
    {
        name: "Koyukon",
        type: "living",
        scope: "individual",
        iso6393: "koy"
    },
    {
        name: "Korak",
        type: "living",
        scope: "individual",
        iso6393: "koz"
    },
    {
        name: "Kutto",
        type: "living",
        scope: "individual",
        iso6393: "kpa"
    },
    {
        name: "Mullu Kurumba",
        type: "living",
        scope: "individual",
        iso6393: "kpb"
    },
    {
        name: "Curripaco",
        type: "living",
        scope: "individual",
        iso6393: "kpc"
    },
    {
        name: "Koba",
        type: "living",
        scope: "individual",
        iso6393: "kpd"
    },
    {
        name: "Kpelle",
        type: "living",
        scope: "macrolanguage",
        iso6393: "kpe",
        iso6392B: "kpe",
        iso6392T: "kpe"
    },
    {
        name: "Komba",
        type: "living",
        scope: "individual",
        iso6393: "kpf"
    },
    {
        name: "Kapingamarangi",
        type: "living",
        scope: "individual",
        iso6393: "kpg"
    },
    {
        name: "Kplang",
        type: "living",
        scope: "individual",
        iso6393: "kph"
    },
    {
        name: "Kofei",
        type: "living",
        scope: "individual",
        iso6393: "kpi"
    },
    {
        name: "Karaj\xe1",
        type: "living",
        scope: "individual",
        iso6393: "kpj"
    },
    {
        name: "Kpan",
        type: "living",
        scope: "individual",
        iso6393: "kpk"
    },
    {
        name: "Kpala",
        type: "living",
        scope: "individual",
        iso6393: "kpl"
    },
    {
        name: "Koho",
        type: "living",
        scope: "individual",
        iso6393: "kpm"
    },
    {
        name: "Kepkiriw\xe1t",
        type: "extinct",
        scope: "individual",
        iso6393: "kpn"
    },
    {
        name: "Ikposo",
        type: "living",
        scope: "individual",
        iso6393: "kpo"
    },
    {
        name: "Korupun-Sela",
        type: "living",
        scope: "individual",
        iso6393: "kpq"
    },
    {
        name: "Korafe-Yegha",
        type: "living",
        scope: "individual",
        iso6393: "kpr"
    },
    {
        name: "Tehit",
        type: "living",
        scope: "individual",
        iso6393: "kps"
    },
    {
        name: "Karata",
        type: "living",
        scope: "individual",
        iso6393: "kpt"
    },
    {
        name: "Kafoa",
        type: "living",
        scope: "individual",
        iso6393: "kpu"
    },
    {
        name: "Komi-Zyrian",
        type: "living",
        scope: "individual",
        iso6393: "kpv"
    },
    {
        name: "Kobon",
        type: "living",
        scope: "individual",
        iso6393: "kpw"
    },
    {
        name: "Mountain Koiali",
        type: "living",
        scope: "individual",
        iso6393: "kpx"
    },
    {
        name: "Koryak",
        type: "living",
        scope: "individual",
        iso6393: "kpy"
    },
    {
        name: "Kupsabiny",
        type: "living",
        scope: "individual",
        iso6393: "kpz"
    },
    {
        name: "Mum",
        type: "living",
        scope: "individual",
        iso6393: "kqa"
    },
    {
        name: "Kovai",
        type: "living",
        scope: "individual",
        iso6393: "kqb"
    },
    {
        name: "Doromu-Koki",
        type: "living",
        scope: "individual",
        iso6393: "kqc"
    },
    {
        name: "Koy Sanjaq Surat",
        type: "living",
        scope: "individual",
        iso6393: "kqd"
    },
    {
        name: "Kalagan",
        type: "living",
        scope: "individual",
        iso6393: "kqe"
    },
    {
        name: "Kakabai",
        type: "living",
        scope: "individual",
        iso6393: "kqf"
    },
    {
        name: "Khe",
        type: "living",
        scope: "individual",
        iso6393: "kqg"
    },
    {
        name: "Kisankasa",
        type: "living",
        scope: "individual",
        iso6393: "kqh"
    },
    {
        name: "Koitabu",
        type: "living",
        scope: "individual",
        iso6393: "kqi"
    },
    {
        name: "Koromira",
        type: "living",
        scope: "individual",
        iso6393: "kqj"
    },
    {
        name: "Kotafon Gbe",
        type: "living",
        scope: "individual",
        iso6393: "kqk"
    },
    {
        name: "Kyenele",
        type: "living",
        scope: "individual",
        iso6393: "kql"
    },
    {
        name: "Khisa",
        type: "living",
        scope: "individual",
        iso6393: "kqm"
    },
    {
        name: "Kaonde",
        type: "living",
        scope: "individual",
        iso6393: "kqn"
    },
    {
        name: "Eastern Krahn",
        type: "living",
        scope: "individual",
        iso6393: "kqo"
    },
    {
        name: "Kimr\xe9",
        type: "living",
        scope: "individual",
        iso6393: "kqp"
    },
    {
        name: "Krenak",
        type: "living",
        scope: "individual",
        iso6393: "kqq"
    },
    {
        name: "Kimaragang",
        type: "living",
        scope: "individual",
        iso6393: "kqr"
    },
    {
        name: "Northern Kissi",
        type: "living",
        scope: "individual",
        iso6393: "kqs"
    },
    {
        name: "Klias River Kadazan",
        type: "living",
        scope: "individual",
        iso6393: "kqt"
    },
    {
        name: "Seroa",
        type: "extinct",
        scope: "individual",
        iso6393: "kqu"
    },
    {
        name: "Okolod",
        type: "living",
        scope: "individual",
        iso6393: "kqv"
    },
    {
        name: "Kandas",
        type: "living",
        scope: "individual",
        iso6393: "kqw"
    },
    {
        name: "Mser",
        type: "living",
        scope: "individual",
        iso6393: "kqx"
    },
    {
        name: "Koorete",
        type: "living",
        scope: "individual",
        iso6393: "kqy"
    },
    {
        name: "Korana",
        type: "extinct",
        scope: "individual",
        iso6393: "kqz"
    },
    {
        name: "Kumhali",
        type: "living",
        scope: "individual",
        iso6393: "kra"
    },
    {
        name: "Karkin",
        type: "extinct",
        scope: "individual",
        iso6393: "krb"
    },
    {
        name: "Karachay-Balkar",
        type: "living",
        scope: "individual",
        iso6393: "krc",
        iso6392B: "krc",
        iso6392T: "krc"
    },
    {
        name: "Kairui-Midiki",
        type: "living",
        scope: "individual",
        iso6393: "krd"
    },
    {
        name: "Panar\xe1",
        type: "living",
        scope: "individual",
        iso6393: "kre"
    },
    {
        name: "Koro (Vanuatu)",
        type: "living",
        scope: "individual",
        iso6393: "krf"
    },
    {
        name: "Kurama",
        type: "living",
        scope: "individual",
        iso6393: "krh"
    },
    {
        name: "Krio",
        type: "living",
        scope: "individual",
        iso6393: "kri"
    },
    {
        name: "Kinaray-A",
        type: "living",
        scope: "individual",
        iso6393: "krj"
    },
    {
        name: "Kerek",
        type: "extinct",
        scope: "individual",
        iso6393: "krk"
    },
    {
        name: "Karelian",
        type: "living",
        scope: "individual",
        iso6393: "krl",
        iso6392B: "krl",
        iso6392T: "krl"
    },
    {
        name: "Sapo",
        type: "living",
        scope: "individual",
        iso6393: "krn"
    },
    {
        name: "Korop",
        type: "living",
        scope: "individual",
        iso6393: "krp"
    },
    {
        name: "Krung",
        type: "living",
        scope: "individual",
        iso6393: "krr"
    },
    {
        name: "Gbaya (Sudan)",
        type: "living",
        scope: "individual",
        iso6393: "krs"
    },
    {
        name: "Tumari Kanuri",
        type: "living",
        scope: "individual",
        iso6393: "krt"
    },
    {
        name: "Kurukh",
        type: "living",
        scope: "individual",
        iso6393: "kru",
        iso6392B: "kru",
        iso6392T: "kru"
    },
    {
        name: "Kavet",
        type: "living",
        scope: "individual",
        iso6393: "krv"
    },
    {
        name: "Western Krahn",
        type: "living",
        scope: "individual",
        iso6393: "krw"
    },
    {
        name: "Karon",
        type: "living",
        scope: "individual",
        iso6393: "krx"
    },
    {
        name: "Kryts",
        type: "living",
        scope: "individual",
        iso6393: "kry"
    },
    {
        name: "Sota Kanum",
        type: "living",
        scope: "individual",
        iso6393: "krz"
    },
    {
        name: "Shuwa-Zamani",
        type: "living",
        scope: "individual",
        iso6393: "ksa"
    },
    {
        name: "Shambala",
        type: "living",
        scope: "individual",
        iso6393: "ksb"
    },
    {
        name: "Southern Kalinga",
        type: "living",
        scope: "individual",
        iso6393: "ksc"
    },
    {
        name: "Kuanua",
        type: "living",
        scope: "individual",
        iso6393: "ksd"
    },
    {
        name: "Kuni",
        type: "living",
        scope: "individual",
        iso6393: "kse"
    },
    {
        name: "Bafia",
        type: "living",
        scope: "individual",
        iso6393: "ksf"
    },
    {
        name: "Kusaghe",
        type: "living",
        scope: "individual",
        iso6393: "ksg"
    },
    {
        name: "K\xf6lsch",
        type: "living",
        scope: "individual",
        iso6393: "ksh"
    },
    {
        name: "Krisa",
        type: "living",
        scope: "individual",
        iso6393: "ksi"
    },
    {
        name: "Uare",
        type: "living",
        scope: "individual",
        iso6393: "ksj"
    },
    {
        name: "Kansa",
        type: "living",
        scope: "individual",
        iso6393: "ksk"
    },
    {
        name: "Kumalu",
        type: "living",
        scope: "individual",
        iso6393: "ksl"
    },
    {
        name: "Kumba",
        type: "living",
        scope: "individual",
        iso6393: "ksm"
    },
    {
        name: "Kasiguranin",
        type: "living",
        scope: "individual",
        iso6393: "ksn"
    },
    {
        name: "Kofa",
        type: "living",
        scope: "individual",
        iso6393: "kso"
    },
    {
        name: "Kaba",
        type: "living",
        scope: "individual",
        iso6393: "ksp"
    },
    {
        name: "Kwaami",
        type: "living",
        scope: "individual",
        iso6393: "ksq"
    },
    {
        name: "Borong",
        type: "living",
        scope: "individual",
        iso6393: "ksr"
    },
    {
        name: "Southern Kisi",
        type: "living",
        scope: "individual",
        iso6393: "kss"
    },
    {
        name: "Winy\xe9",
        type: "living",
        scope: "individual",
        iso6393: "kst"
    },
    {
        name: "Khamyang",
        type: "living",
        scope: "individual",
        iso6393: "ksu"
    },
    {
        name: "Kusu",
        type: "living",
        scope: "individual",
        iso6393: "ksv"
    },
    {
        name: "S'gaw Karen",
        type: "living",
        scope: "individual",
        iso6393: "ksw"
    },
    {
        name: "Kedang",
        type: "living",
        scope: "individual",
        iso6393: "ksx"
    },
    {
        name: "Kharia Thar",
        type: "living",
        scope: "individual",
        iso6393: "ksy"
    },
    {
        name: "Kodaku",
        type: "living",
        scope: "individual",
        iso6393: "ksz"
    },
    {
        name: "Katua",
        type: "living",
        scope: "individual",
        iso6393: "kta"
    },
    {
        name: "Kambaata",
        type: "living",
        scope: "individual",
        iso6393: "ktb"
    },
    {
        name: "Kholok",
        type: "living",
        scope: "individual",
        iso6393: "ktc"
    },
    {
        name: "Kokata",
        type: "living",
        scope: "individual",
        iso6393: "ktd"
    },
    {
        name: "Nubri",
        type: "living",
        scope: "individual",
        iso6393: "kte"
    },
    {
        name: "Kwami",
        type: "living",
        scope: "individual",
        iso6393: "ktf"
    },
    {
        name: "Kalkutung",
        type: "extinct",
        scope: "individual",
        iso6393: "ktg"
    },
    {
        name: "Karanga",
        type: "living",
        scope: "individual",
        iso6393: "kth"
    },
    {
        name: "North Muyu",
        type: "living",
        scope: "individual",
        iso6393: "kti"
    },
    {
        name: "Plapo Krumen",
        type: "living",
        scope: "individual",
        iso6393: "ktj"
    },
    {
        name: "Kaniet",
        type: "extinct",
        scope: "individual",
        iso6393: "ktk"
    },
    {
        name: "Koroshi",
        type: "living",
        scope: "individual",
        iso6393: "ktl"
    },
    {
        name: "Kurti",
        type: "living",
        scope: "individual",
        iso6393: "ktm"
    },
    {
        name: "Kariti\xe2na",
        type: "living",
        scope: "individual",
        iso6393: "ktn"
    },
    {
        name: "Kuot",
        type: "living",
        scope: "individual",
        iso6393: "kto"
    },
    {
        name: "Kaduo",
        type: "living",
        scope: "individual",
        iso6393: "ktp"
    },
    {
        name: "Katabaga",
        type: "extinct",
        scope: "individual",
        iso6393: "ktq"
    },
    {
        name: "South Muyu",
        type: "living",
        scope: "individual",
        iso6393: "kts"
    },
    {
        name: "Ketum",
        type: "living",
        scope: "individual",
        iso6393: "ktt"
    },
    {
        name: "Kituba (Democratic Republic of Congo)",
        type: "living",
        scope: "individual",
        iso6393: "ktu"
    },
    {
        name: "Eastern Katu",
        type: "living",
        scope: "individual",
        iso6393: "ktv"
    },
    {
        name: "Kato",
        type: "extinct",
        scope: "individual",
        iso6393: "ktw"
    },
    {
        name: "Kaxarar\xed",
        type: "living",
        scope: "individual",
        iso6393: "ktx"
    },
    {
        name: "Kango (Bas-U\xe9l\xe9 District)",
        type: "living",
        scope: "individual",
        iso6393: "kty"
    },
    {
        name: "Juǀʼhoan",
        type: "living",
        scope: "individual",
        iso6393: "ktz"
    },
    {
        name: "Kuanyama",
        type: "living",
        scope: "individual",
        iso6393: "kua",
        iso6392B: "kua",
        iso6392T: "kua",
        iso6391: "kj"
    },
    {
        name: "Kutep",
        type: "living",
        scope: "individual",
        iso6393: "kub"
    },
    {
        name: "Kwinsu",
        type: "living",
        scope: "individual",
        iso6393: "kuc"
    },
    {
        name: "'Auhelawa",
        type: "living",
        scope: "individual",
        iso6393: "kud"
    },
    {
        name: "Kuman (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "kue"
    },
    {
        name: "Western Katu",
        type: "living",
        scope: "individual",
        iso6393: "kuf"
    },
    {
        name: "Kupa",
        type: "living",
        scope: "individual",
        iso6393: "kug"
    },
    {
        name: "Kushi",
        type: "living",
        scope: "individual",
        iso6393: "kuh"
    },
    {
        name: "Kuik\xfaro-Kalap\xe1lo",
        type: "living",
        scope: "individual",
        iso6393: "kui"
    },
    {
        name: "Kuria",
        type: "living",
        scope: "individual",
        iso6393: "kuj"
    },
    {
        name: "Kepo'",
        type: "living",
        scope: "individual",
        iso6393: "kuk"
    },
    {
        name: "Kulere",
        type: "living",
        scope: "individual",
        iso6393: "kul"
    },
    {
        name: "Kumyk",
        type: "living",
        scope: "individual",
        iso6393: "kum",
        iso6392B: "kum",
        iso6392T: "kum"
    },
    {
        name: "Kunama",
        type: "living",
        scope: "individual",
        iso6393: "kun"
    },
    {
        name: "Kumukio",
        type: "living",
        scope: "individual",
        iso6393: "kuo"
    },
    {
        name: "Kunimaipa",
        type: "living",
        scope: "individual",
        iso6393: "kup"
    },
    {
        name: "Karipuna",
        type: "living",
        scope: "individual",
        iso6393: "kuq"
    },
    {
        name: "Kurdish",
        type: "living",
        scope: "macrolanguage",
        iso6393: "kur",
        iso6392B: "kur",
        iso6392T: "kur",
        iso6391: "ku"
    },
    {
        name: "Kusaal",
        type: "living",
        scope: "individual",
        iso6393: "kus"
    },
    {
        name: "Kutenai",
        type: "living",
        scope: "individual",
        iso6393: "kut",
        iso6392B: "kut",
        iso6392T: "kut"
    },
    {
        name: "Upper Kuskokwim",
        type: "living",
        scope: "individual",
        iso6393: "kuu"
    },
    {
        name: "Kur",
        type: "living",
        scope: "individual",
        iso6393: "kuv"
    },
    {
        name: "Kpagua",
        type: "living",
        scope: "individual",
        iso6393: "kuw"
    },
    {
        name: "Kukatja",
        type: "living",
        scope: "individual",
        iso6393: "kux"
    },
    {
        name: "Kuuku-Ya'u",
        type: "living",
        scope: "individual",
        iso6393: "kuy"
    },
    {
        name: "Kunza",
        type: "extinct",
        scope: "individual",
        iso6393: "kuz"
    },
    {
        name: "Bagvalal",
        type: "living",
        scope: "individual",
        iso6393: "kva"
    },
    {
        name: "Kubu",
        type: "living",
        scope: "individual",
        iso6393: "kvb"
    },
    {
        name: "Kove",
        type: "living",
        scope: "individual",
        iso6393: "kvc"
    },
    {
        name: "Kui (Indonesia)",
        type: "living",
        scope: "individual",
        iso6393: "kvd"
    },
    {
        name: "Kalabakan",
        type: "living",
        scope: "individual",
        iso6393: "kve"
    },
    {
        name: "Kabalai",
        type: "living",
        scope: "individual",
        iso6393: "kvf"
    },
    {
        name: "Kuni-Boazi",
        type: "living",
        scope: "individual",
        iso6393: "kvg"
    },
    {
        name: "Komodo",
        type: "living",
        scope: "individual",
        iso6393: "kvh"
    },
    {
        name: "Kwang",
        type: "living",
        scope: "individual",
        iso6393: "kvi"
    },
    {
        name: "Psikye",
        type: "living",
        scope: "individual",
        iso6393: "kvj"
    },
    {
        name: "Korean Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "kvk"
    },
    {
        name: "Kayaw",
        type: "living",
        scope: "individual",
        iso6393: "kvl"
    },
    {
        name: "Kendem",
        type: "living",
        scope: "individual",
        iso6393: "kvm"
    },
    {
        name: "Border Kuna",
        type: "living",
        scope: "individual",
        iso6393: "kvn"
    },
    {
        name: "Dobel",
        type: "living",
        scope: "individual",
        iso6393: "kvo"
    },
    {
        name: "Kompane",
        type: "living",
        scope: "individual",
        iso6393: "kvp"
    },
    {
        name: "Geba Karen",
        type: "living",
        scope: "individual",
        iso6393: "kvq"
    },
    {
        name: "Kerinci",
        type: "living",
        scope: "individual",
        iso6393: "kvr"
    },
    {
        name: "Lahta Karen",
        type: "living",
        scope: "individual",
        iso6393: "kvt"
    },
    {
        name: "Yinbaw Karen",
        type: "living",
        scope: "individual",
        iso6393: "kvu"
    },
    {
        name: "Kola",
        type: "living",
        scope: "individual",
        iso6393: "kvv"
    },
    {
        name: "Wersing",
        type: "living",
        scope: "individual",
        iso6393: "kvw"
    },
    {
        name: "Parkari Koli",
        type: "living",
        scope: "individual",
        iso6393: "kvx"
    },
    {
        name: "Yintale Karen",
        type: "living",
        scope: "individual",
        iso6393: "kvy"
    },
    {
        name: "Tsakwambo",
        type: "living",
        scope: "individual",
        iso6393: "kvz"
    },
    {
        name: "D\xe2w",
        type: "living",
        scope: "individual",
        iso6393: "kwa"
    },
    {
        name: "Kwa",
        type: "living",
        scope: "individual",
        iso6393: "kwb"
    },
    {
        name: "Likwala",
        type: "living",
        scope: "individual",
        iso6393: "kwc"
    },
    {
        name: "Kwaio",
        type: "living",
        scope: "individual",
        iso6393: "kwd"
    },
    {
        name: "Kwerba",
        type: "living",
        scope: "individual",
        iso6393: "kwe"
    },
    {
        name: "Kwara'ae",
        type: "living",
        scope: "individual",
        iso6393: "kwf"
    },
    {
        name: "Sara Kaba Deme",
        type: "living",
        scope: "individual",
        iso6393: "kwg"
    },
    {
        name: "Kowiai",
        type: "living",
        scope: "individual",
        iso6393: "kwh"
    },
    {
        name: "Awa-Cuaiquer",
        type: "living",
        scope: "individual",
        iso6393: "kwi"
    },
    {
        name: "Kwanga",
        type: "living",
        scope: "individual",
        iso6393: "kwj"
    },
    {
        name: "Kwakiutl",
        type: "living",
        scope: "individual",
        iso6393: "kwk"
    },
    {
        name: "Kofyar",
        type: "living",
        scope: "individual",
        iso6393: "kwl"
    },
    {
        name: "Kwambi",
        type: "living",
        scope: "individual",
        iso6393: "kwm"
    },
    {
        name: "Kwangali",
        type: "living",
        scope: "individual",
        iso6393: "kwn"
    },
    {
        name: "Kwomtari",
        type: "living",
        scope: "individual",
        iso6393: "kwo"
    },
    {
        name: "Kodia",
        type: "living",
        scope: "individual",
        iso6393: "kwp"
    },
    {
        name: "Kwer",
        type: "living",
        scope: "individual",
        iso6393: "kwr"
    },
    {
        name: "Kwese",
        type: "living",
        scope: "individual",
        iso6393: "kws"
    },
    {
        name: "Kwesten",
        type: "living",
        scope: "individual",
        iso6393: "kwt"
    },
    {
        name: "Kwakum",
        type: "living",
        scope: "individual",
        iso6393: "kwu"
    },
    {
        name: "Sara Kaba N\xe1\xe0",
        type: "living",
        scope: "individual",
        iso6393: "kwv"
    },
    {
        name: "Kwinti",
        type: "living",
        scope: "individual",
        iso6393: "kww"
    },
    {
        name: "Khirwar",
        type: "living",
        scope: "individual",
        iso6393: "kwx"
    },
    {
        name: "San Salvador Kongo",
        type: "living",
        scope: "individual",
        iso6393: "kwy"
    },
    {
        name: "Kwadi",
        type: "extinct",
        scope: "individual",
        iso6393: "kwz"
    },
    {
        name: "Kairiru",
        type: "living",
        scope: "individual",
        iso6393: "kxa"
    },
    {
        name: "Krobu",
        type: "living",
        scope: "individual",
        iso6393: "kxb"
    },
    {
        name: "Konso",
        type: "living",
        scope: "individual",
        iso6393: "kxc"
    },
    {
        name: "Brunei",
        type: "living",
        scope: "individual",
        iso6393: "kxd"
    },
    {
        name: "Manumanaw Karen",
        type: "living",
        scope: "individual",
        iso6393: "kxf"
    },
    {
        name: "Karo (Ethiopia)",
        type: "living",
        scope: "individual",
        iso6393: "kxh"
    },
    {
        name: "Keningau Murut",
        type: "living",
        scope: "individual",
        iso6393: "kxi"
    },
    {
        name: "Kulfa",
        type: "living",
        scope: "individual",
        iso6393: "kxj"
    },
    {
        name: "Zayein Karen",
        type: "living",
        scope: "individual",
        iso6393: "kxk"
    },
    {
        name: "Northern Khmer",
        type: "living",
        scope: "individual",
        iso6393: "kxm"
    },
    {
        name: "Kanowit-Tanjong Melanau",
        type: "living",
        scope: "individual",
        iso6393: "kxn"
    },
    {
        name: "Kano\xe9",
        type: "extinct",
        scope: "individual",
        iso6393: "kxo"
    },
    {
        name: "Wadiyara Koli",
        type: "living",
        scope: "individual",
        iso6393: "kxp"
    },
    {
        name: "Sm\xe4rky Kanum",
        type: "living",
        scope: "individual",
        iso6393: "kxq"
    },
    {
        name: "Koro (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "kxr"
    },
    {
        name: "Kangjia",
        type: "living",
        scope: "individual",
        iso6393: "kxs"
    },
    {
        name: "Koiwat",
        type: "living",
        scope: "individual",
        iso6393: "kxt"
    },
    {
        name: "Kuvi",
        type: "living",
        scope: "individual",
        iso6393: "kxv"
    },
    {
        name: "Konai",
        type: "living",
        scope: "individual",
        iso6393: "kxw"
    },
    {
        name: "Likuba",
        type: "living",
        scope: "individual",
        iso6393: "kxx"
    },
    {
        name: "Kayong",
        type: "living",
        scope: "individual",
        iso6393: "kxy"
    },
    {
        name: "Kerewo",
        type: "living",
        scope: "individual",
        iso6393: "kxz"
    },
    {
        name: "Kwaya",
        type: "living",
        scope: "individual",
        iso6393: "kya"
    },
    {
        name: "Butbut Kalinga",
        type: "living",
        scope: "individual",
        iso6393: "kyb"
    },
    {
        name: "Kyaka",
        type: "living",
        scope: "individual",
        iso6393: "kyc"
    },
    {
        name: "Karey",
        type: "living",
        scope: "individual",
        iso6393: "kyd"
    },
    {
        name: "Krache",
        type: "living",
        scope: "individual",
        iso6393: "kye"
    },
    {
        name: "Kouya",
        type: "living",
        scope: "individual",
        iso6393: "kyf"
    },
    {
        name: "Keyagana",
        type: "living",
        scope: "individual",
        iso6393: "kyg"
    },
    {
        name: "Karok",
        type: "living",
        scope: "individual",
        iso6393: "kyh"
    },
    {
        name: "Kiput",
        type: "living",
        scope: "individual",
        iso6393: "kyi"
    },
    {
        name: "Karao",
        type: "living",
        scope: "individual",
        iso6393: "kyj"
    },
    {
        name: "Kamayo",
        type: "living",
        scope: "individual",
        iso6393: "kyk"
    },
    {
        name: "Kalapuya",
        type: "living",
        scope: "individual",
        iso6393: "kyl"
    },
    {
        name: "Kpatili",
        type: "living",
        scope: "individual",
        iso6393: "kym"
    },
    {
        name: "Northern Binukidnon",
        type: "living",
        scope: "individual",
        iso6393: "kyn"
    },
    {
        name: "Kelon",
        type: "living",
        scope: "individual",
        iso6393: "kyo"
    },
    {
        name: "Kang",
        type: "living",
        scope: "individual",
        iso6393: "kyp"
    },
    {
        name: "Kenga",
        type: "living",
        scope: "individual",
        iso6393: "kyq"
    },
    {
        name: "Kuru\xe1ya",
        type: "living",
        scope: "individual",
        iso6393: "kyr"
    },
    {
        name: "Baram Kayan",
        type: "living",
        scope: "individual",
        iso6393: "kys"
    },
    {
        name: "Kayagar",
        type: "living",
        scope: "individual",
        iso6393: "kyt"
    },
    {
        name: "Western Kayah",
        type: "living",
        scope: "individual",
        iso6393: "kyu"
    },
    {
        name: "Kayort",
        type: "living",
        scope: "individual",
        iso6393: "kyv"
    },
    {
        name: "Kudmali",
        type: "living",
        scope: "individual",
        iso6393: "kyw"
    },
    {
        name: "Rapoisi",
        type: "living",
        scope: "individual",
        iso6393: "kyx"
    },
    {
        name: "Kambaira",
        type: "living",
        scope: "individual",
        iso6393: "kyy"
    },
    {
        name: "Kayab\xed",
        type: "living",
        scope: "individual",
        iso6393: "kyz"
    },
    {
        name: "Western Karaboro",
        type: "living",
        scope: "individual",
        iso6393: "kza"
    },
    {
        name: "Kaibobo",
        type: "living",
        scope: "individual",
        iso6393: "kzb"
    },
    {
        name: "Bondoukou Kulango",
        type: "living",
        scope: "individual",
        iso6393: "kzc"
    },
    {
        name: "Kadai",
        type: "living",
        scope: "individual",
        iso6393: "kzd"
    },
    {
        name: "Kosena",
        type: "living",
        scope: "individual",
        iso6393: "kze"
    },
    {
        name: "Da'a Kaili",
        type: "living",
        scope: "individual",
        iso6393: "kzf"
    },
    {
        name: "Kikai",
        type: "living",
        scope: "individual",
        iso6393: "kzg"
    },
    {
        name: "Kelabit",
        type: "living",
        scope: "individual",
        iso6393: "kzi"
    },
    {
        name: "Kazukuru",
        type: "extinct",
        scope: "individual",
        iso6393: "kzk"
    },
    {
        name: "Kayeli",
        type: "living",
        scope: "individual",
        iso6393: "kzl"
    },
    {
        name: "Kais",
        type: "living",
        scope: "individual",
        iso6393: "kzm"
    },
    {
        name: "Kokola",
        type: "living",
        scope: "individual",
        iso6393: "kzn"
    },
    {
        name: "Kaningi",
        type: "living",
        scope: "individual",
        iso6393: "kzo"
    },
    {
        name: "Kaidipang",
        type: "living",
        scope: "individual",
        iso6393: "kzp"
    },
    {
        name: "Kaike",
        type: "living",
        scope: "individual",
        iso6393: "kzq"
    },
    {
        name: "Karang",
        type: "living",
        scope: "individual",
        iso6393: "kzr"
    },
    {
        name: "Sugut Dusun",
        type: "living",
        scope: "individual",
        iso6393: "kzs"
    },
    {
        name: "Kayupulau",
        type: "living",
        scope: "individual",
        iso6393: "kzu"
    },
    {
        name: "Komyandaret",
        type: "living",
        scope: "individual",
        iso6393: "kzv"
    },
    {
        name: "Karir\xed-Xoc\xf3",
        type: "extinct",
        scope: "individual",
        iso6393: "kzw"
    },
    {
        name: "Kamarian",
        type: "extinct",
        scope: "individual",
        iso6393: "kzx"
    },
    {
        name: "Kango (Tshopo District)",
        type: "living",
        scope: "individual",
        iso6393: "kzy"
    },
    {
        name: "Kalabra",
        type: "living",
        scope: "individual",
        iso6393: "kzz"
    },
    {
        name: "Southern Subanen",
        type: "living",
        scope: "individual",
        iso6393: "laa"
    },
    {
        name: "Linear A",
        type: "ancient",
        scope: "individual",
        iso6393: "lab"
    },
    {
        name: "Lacandon",
        type: "living",
        scope: "individual",
        iso6393: "lac"
    },
    {
        name: "Ladino",
        type: "living",
        scope: "individual",
        iso6393: "lad",
        iso6392B: "lad",
        iso6392T: "lad"
    },
    {
        name: "Pattani",
        type: "living",
        scope: "individual",
        iso6393: "lae"
    },
    {
        name: "Lafofa",
        type: "living",
        scope: "individual",
        iso6393: "laf"
    },
    {
        name: "Langi",
        type: "living",
        scope: "individual",
        iso6393: "lag"
    },
    {
        name: "Lahnda",
        type: "living",
        scope: "macrolanguage",
        iso6393: "lah",
        iso6392B: "lah",
        iso6392T: "lah"
    },
    {
        name: "Lambya",
        type: "living",
        scope: "individual",
        iso6393: "lai"
    },
    {
        name: "Lango (Uganda)",
        type: "living",
        scope: "individual",
        iso6393: "laj"
    },
    {
        name: "Laka (Nigeria)",
        type: "living",
        scope: "individual",
        iso6393: "lak"
    },
    {
        name: "Lalia",
        type: "living",
        scope: "individual",
        iso6393: "lal"
    },
    {
        name: "Lamba",
        type: "living",
        scope: "individual",
        iso6393: "lam",
        iso6392B: "lam",
        iso6392T: "lam"
    },
    {
        name: "Laru",
        type: "living",
        scope: "individual",
        iso6393: "lan"
    },
    {
        name: "Lao",
        type: "living",
        scope: "individual",
        iso6393: "lao",
        iso6392B: "lao",
        iso6392T: "lao",
        iso6391: "lo"
    },
    {
        name: "Laka (Chad)",
        type: "living",
        scope: "individual",
        iso6393: "lap"
    },
    {
        name: "Qabiao",
        type: "living",
        scope: "individual",
        iso6393: "laq"
    },
    {
        name: "Larteh",
        type: "living",
        scope: "individual",
        iso6393: "lar"
    },
    {
        name: "Lama (Togo)",
        type: "living",
        scope: "individual",
        iso6393: "las"
    },
    {
        name: "Latin",
        type: "ancient",
        scope: "individual",
        iso6393: "lat",
        iso6392B: "lat",
        iso6392T: "lat",
        iso6391: "la"
    },
    {
        name: "Laba",
        type: "living",
        scope: "individual",
        iso6393: "lau"
    },
    {
        name: "Latvian",
        type: "living",
        scope: "macrolanguage",
        iso6393: "lav",
        iso6392B: "lav",
        iso6392T: "lav",
        iso6391: "lv"
    },
    {
        name: "Lauje",
        type: "living",
        scope: "individual",
        iso6393: "law"
    },
    {
        name: "Tiwa",
        type: "living",
        scope: "individual",
        iso6393: "lax"
    },
    {
        name: "Lama Bai",
        type: "living",
        scope: "individual",
        iso6393: "lay"
    },
    {
        name: "Aribwatsa",
        type: "extinct",
        scope: "individual",
        iso6393: "laz"
    },
    {
        name: "Label",
        type: "living",
        scope: "individual",
        iso6393: "lbb"
    },
    {
        name: "Lakkia",
        type: "living",
        scope: "individual",
        iso6393: "lbc"
    },
    {
        name: "Lak",
        type: "living",
        scope: "individual",
        iso6393: "lbe"
    },
    {
        name: "Tinani",
        type: "living",
        scope: "individual",
        iso6393: "lbf"
    },
    {
        name: "Laopang",
        type: "living",
        scope: "individual",
        iso6393: "lbg"
    },
    {
        name: "La'bi",
        type: "living",
        scope: "individual",
        iso6393: "lbi"
    },
    {
        name: "Ladakhi",
        type: "living",
        scope: "individual",
        iso6393: "lbj"
    },
    {
        name: "Central Bontok",
        type: "living",
        scope: "individual",
        iso6393: "lbk"
    },
    {
        name: "Libon Bikol",
        type: "living",
        scope: "individual",
        iso6393: "lbl"
    },
    {
        name: "Lodhi",
        type: "living",
        scope: "individual",
        iso6393: "lbm"
    },
    {
        name: "Rmeet",
        type: "living",
        scope: "individual",
        iso6393: "lbn"
    },
    {
        name: "Laven",
        type: "living",
        scope: "individual",
        iso6393: "lbo"
    },
    {
        name: "Wampar",
        type: "living",
        scope: "individual",
        iso6393: "lbq"
    },
    {
        name: "Lohorung",
        type: "living",
        scope: "individual",
        iso6393: "lbr"
    },
    {
        name: "Libyan Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "lbs"
    },
    {
        name: "Lachi",
        type: "living",
        scope: "individual",
        iso6393: "lbt"
    },
    {
        name: "Labu",
        type: "living",
        scope: "individual",
        iso6393: "lbu"
    },
    {
        name: "Lavatbura-Lamusong",
        type: "living",
        scope: "individual",
        iso6393: "lbv"
    },
    {
        name: "Tolaki",
        type: "living",
        scope: "individual",
        iso6393: "lbw"
    },
    {
        name: "Lawangan",
        type: "living",
        scope: "individual",
        iso6393: "lbx"
    },
    {
        name: "Lamalama",
        type: "extinct",
        scope: "individual",
        iso6393: "lby"
    },
    {
        name: "Lardil",
        type: "living",
        scope: "individual",
        iso6393: "lbz"
    },
    {
        name: "Legenyem",
        type: "living",
        scope: "individual",
        iso6393: "lcc"
    },
    {
        name: "Lola",
        type: "living",
        scope: "individual",
        iso6393: "lcd"
    },
    {
        name: "Loncong",
        type: "living",
        scope: "individual",
        iso6393: "lce"
    },
    {
        name: "Lubu",
        type: "living",
        scope: "individual",
        iso6393: "lcf"
    },
    {
        name: "Luchazi",
        type: "living",
        scope: "individual",
        iso6393: "lch"
    },
    {
        name: "Lisela",
        type: "living",
        scope: "individual",
        iso6393: "lcl"
    },
    {
        name: "Tungag",
        type: "living",
        scope: "individual",
        iso6393: "lcm"
    },
    {
        name: "Western Lawa",
        type: "living",
        scope: "individual",
        iso6393: "lcp"
    },
    {
        name: "Luhu",
        type: "living",
        scope: "individual",
        iso6393: "lcq"
    },
    {
        name: "Lisabata-Nuniali",
        type: "living",
        scope: "individual",
        iso6393: "lcs"
    },
    {
        name: "Kla-Dan",
        type: "living",
        scope: "individual",
        iso6393: "lda"
    },
    {
        name: "Dũya",
        type: "living",
        scope: "individual",
        iso6393: "ldb"
    },
    {
        name: "Luri",
        type: "living",
        scope: "individual",
        iso6393: "ldd"
    },
    {
        name: "Lenyima",
        type: "living",
        scope: "individual",
        iso6393: "ldg"
    },
    {
        name: "Lamja-Dengsa-Tola",
        type: "living",
        scope: "individual",
        iso6393: "ldh"
    },
    {
        name: "Laari",
        type: "living",
        scope: "individual",
        iso6393: "ldi"
    },
    {
        name: "Lemoro",
        type: "living",
        scope: "individual",
        iso6393: "ldj"
    },
    {
        name: "Leelau",
        type: "living",
        scope: "individual",
        iso6393: "ldk"
    },
    {
        name: "Kaan",
        type: "living",
        scope: "individual",
        iso6393: "ldl"
    },
    {
        name: "Landoma",
        type: "living",
        scope: "individual",
        iso6393: "ldm"
    },
    {
        name: "L\xe1adan",
        type: "constructed",
        scope: "individual",
        iso6393: "ldn"
    },
    {
        name: "Loo",
        type: "living",
        scope: "individual",
        iso6393: "ldo"
    },
    {
        name: "Tso",
        type: "living",
        scope: "individual",
        iso6393: "ldp"
    },
    {
        name: "Lufu",
        type: "living",
        scope: "individual",
        iso6393: "ldq"
    },
    {
        name: "Lega-Shabunda",
        type: "living",
        scope: "individual",
        iso6393: "lea"
    },
    {
        name: "Lala-Bisa",
        type: "living",
        scope: "individual",
        iso6393: "leb"
    },
    {
        name: "Leco",
        type: "living",
        scope: "individual",
        iso6393: "lec"
    },
    {
        name: "Lendu",
        type: "living",
        scope: "individual",
        iso6393: "led"
    },
    {
        name: "Ly\xe9l\xe9",
        type: "living",
        scope: "individual",
        iso6393: "lee"
    },
    {
        name: "Lelemi",
        type: "living",
        scope: "individual",
        iso6393: "lef"
    },
    {
        name: "Lenje",
        type: "living",
        scope: "individual",
        iso6393: "leh"
    },
    {
        name: "Lemio",
        type: "living",
        scope: "individual",
        iso6393: "lei"
    },
    {
        name: "Lengola",
        type: "living",
        scope: "individual",
        iso6393: "lej"
    },
    {
        name: "Leipon",
        type: "living",
        scope: "individual",
        iso6393: "lek"
    },
    {
        name: "Lele (Democratic Republic of Congo)",
        type: "living",
        scope: "individual",
        iso6393: "lel"
    },
    {
        name: "Nomaande",
        type: "living",
        scope: "individual",
        iso6393: "lem"
    },
    {
        name: "Lenca",
        type: "extinct",
        scope: "individual",
        iso6393: "len"
    },
    {
        name: "Leti (Cameroon)",
        type: "living",
        scope: "individual",
        iso6393: "leo"
    },
    {
        name: "Lepcha",
        type: "living",
        scope: "individual",
        iso6393: "lep"
    },
    {
        name: "Lembena",
        type: "living",
        scope: "individual",
        iso6393: "leq"
    },
    {
        name: "Lenkau",
        type: "living",
        scope: "individual",
        iso6393: "ler"
    },
    {
        name: "Lese",
        type: "living",
        scope: "individual",
        iso6393: "les"
    },
    {
        name: "Lesing-Gelimi",
        type: "living",
        scope: "individual",
        iso6393: "let"
    },
    {
        name: "Kara (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "leu"
    },
    {
        name: "Lamma",
        type: "living",
        scope: "individual",
        iso6393: "lev"
    },
    {
        name: "Ledo Kaili",
        type: "living",
        scope: "individual",
        iso6393: "lew"
    },
    {
        name: "Luang",
        type: "living",
        scope: "individual",
        iso6393: "lex"
    },
    {
        name: "Lemolang",
        type: "living",
        scope: "individual",
        iso6393: "ley"
    },
    {
        name: "Lezghian",
        type: "living",
        scope: "individual",
        iso6393: "lez",
        iso6392B: "lez",
        iso6392T: "lez"
    },
    {
        name: "Lefa",
        type: "living",
        scope: "individual",
        iso6393: "lfa"
    },
    {
        name: "Lingua Franca Nova",
        type: "constructed",
        scope: "individual",
        iso6393: "lfn"
    },
    {
        name: "Lungga",
        type: "living",
        scope: "individual",
        iso6393: "lga"
    },
    {
        name: "Laghu",
        type: "living",
        scope: "individual",
        iso6393: "lgb"
    },
    {
        name: "Lugbara",
        type: "living",
        scope: "individual",
        iso6393: "lgg"
    },
    {
        name: "Laghuu",
        type: "living",
        scope: "individual",
        iso6393: "lgh"
    },
    {
        name: "Lengilu",
        type: "living",
        scope: "individual",
        iso6393: "lgi"
    },
    {
        name: "Lingarak",
        type: "living",
        scope: "individual",
        iso6393: "lgk"
    },
    {
        name: "Wala",
        type: "living",
        scope: "individual",
        iso6393: "lgl"
    },
    {
        name: "Lega-Mwenga",
        type: "living",
        scope: "individual",
        iso6393: "lgm"
    },
    {
        name: "T'apo",
        type: "living",
        scope: "individual",
        iso6393: "lgn"
    },
    {
        name: "Logba",
        type: "living",
        scope: "individual",
        iso6393: "lgq"
    },
    {
        name: "Lengo",
        type: "living",
        scope: "individual",
        iso6393: "lgr"
    },
    {
        name: "Pahi",
        type: "living",
        scope: "individual",
        iso6393: "lgt"
    },
    {
        name: "Longgu",
        type: "living",
        scope: "individual",
        iso6393: "lgu"
    },
    {
        name: "Ligenza",
        type: "living",
        scope: "individual",
        iso6393: "lgz"
    },
    {
        name: "Laha (Viet Nam)",
        type: "living",
        scope: "individual",
        iso6393: "lha"
    },
    {
        name: "Laha (Indonesia)",
        type: "living",
        scope: "individual",
        iso6393: "lhh"
    },
    {
        name: "Lahu Shi",
        type: "living",
        scope: "individual",
        iso6393: "lhi"
    },
    {
        name: "Lahul Lohar",
        type: "living",
        scope: "individual",
        iso6393: "lhl"
    },
    {
        name: "Lhomi",
        type: "living",
        scope: "individual",
        iso6393: "lhm"
    },
    {
        name: "Lahanan",
        type: "living",
        scope: "individual",
        iso6393: "lhn"
    },
    {
        name: "Lhokpu",
        type: "living",
        scope: "individual",
        iso6393: "lhp"
    },
    {
        name: "Mlahs\xf6",
        type: "extinct",
        scope: "individual",
        iso6393: "lhs"
    },
    {
        name: "Lo-Toga",
        type: "living",
        scope: "individual",
        iso6393: "lht"
    },
    {
        name: "Lahu",
        type: "living",
        scope: "individual",
        iso6393: "lhu"
    },
    {
        name: "West-Central Limba",
        type: "living",
        scope: "individual",
        iso6393: "lia"
    },
    {
        name: "Likum",
        type: "living",
        scope: "individual",
        iso6393: "lib"
    },
    {
        name: "Hlai",
        type: "living",
        scope: "individual",
        iso6393: "lic"
    },
    {
        name: "Nyindrou",
        type: "living",
        scope: "individual",
        iso6393: "lid"
    },
    {
        name: "Likila",
        type: "living",
        scope: "individual",
        iso6393: "lie"
    },
    {
        name: "Limbu",
        type: "living",
        scope: "individual",
        iso6393: "lif"
    },
    {
        name: "Ligbi",
        type: "living",
        scope: "individual",
        iso6393: "lig"
    },
    {
        name: "Lihir",
        type: "living",
        scope: "individual",
        iso6393: "lih"
    },
    {
        name: "Ligurian",
        type: "living",
        scope: "individual",
        iso6393: "lij"
    },
    {
        name: "Lika",
        type: "living",
        scope: "individual",
        iso6393: "lik"
    },
    {
        name: "Lillooet",
        type: "living",
        scope: "individual",
        iso6393: "lil"
    },
    {
        name: "Limburgan",
        type: "living",
        scope: "individual",
        iso6393: "lim",
        iso6392B: "lim",
        iso6392T: "lim",
        iso6391: "li"
    },
    {
        name: "Lingala",
        type: "living",
        scope: "individual",
        iso6393: "lin",
        iso6392B: "lin",
        iso6392T: "lin",
        iso6391: "ln"
    },
    {
        name: "Liki",
        type: "living",
        scope: "individual",
        iso6393: "lio"
    },
    {
        name: "Sekpele",
        type: "living",
        scope: "individual",
        iso6393: "lip"
    },
    {
        name: "Libido",
        type: "living",
        scope: "individual",
        iso6393: "liq"
    },
    {
        name: "Liberian English",
        type: "living",
        scope: "individual",
        iso6393: "lir"
    },
    {
        name: "Lisu",
        type: "living",
        scope: "individual",
        iso6393: "lis"
    },
    {
        name: "Lithuanian",
        type: "living",
        scope: "individual",
        iso6393: "lit",
        iso6392B: "lit",
        iso6392T: "lit",
        iso6391: "lt"
    },
    {
        name: "Logorik",
        type: "living",
        scope: "individual",
        iso6393: "liu"
    },
    {
        name: "Liv",
        type: "living",
        scope: "individual",
        iso6393: "liv"
    },
    {
        name: "Col",
        type: "living",
        scope: "individual",
        iso6393: "liw"
    },
    {
        name: "Liabuku",
        type: "living",
        scope: "individual",
        iso6393: "lix"
    },
    {
        name: "Banda-Bambari",
        type: "living",
        scope: "individual",
        iso6393: "liy"
    },
    {
        name: "Libinza",
        type: "living",
        scope: "individual",
        iso6393: "liz"
    },
    {
        name: "Golpa",
        type: "extinct",
        scope: "individual",
        iso6393: "lja"
    },
    {
        name: "Rampi",
        type: "living",
        scope: "individual",
        iso6393: "lje"
    },
    {
        name: "Laiyolo",
        type: "living",
        scope: "individual",
        iso6393: "lji"
    },
    {
        name: "Li'o",
        type: "living",
        scope: "individual",
        iso6393: "ljl"
    },
    {
        name: "Lampung Api",
        type: "living",
        scope: "individual",
        iso6393: "ljp"
    },
    {
        name: "Yirandali",
        type: "living",
        scope: "individual",
        iso6393: "ljw"
    },
    {
        name: "Yuru",
        type: "extinct",
        scope: "individual",
        iso6393: "ljx"
    },
    {
        name: "Lakalei",
        type: "living",
        scope: "individual",
        iso6393: "lka"
    },
    {
        name: "Kabras",
        type: "living",
        scope: "individual",
        iso6393: "lkb"
    },
    {
        name: "Kucong",
        type: "living",
        scope: "individual",
        iso6393: "lkc"
    },
    {
        name: "Lakond\xea",
        type: "living",
        scope: "individual",
        iso6393: "lkd"
    },
    {
        name: "Kenyi",
        type: "living",
        scope: "individual",
        iso6393: "lke"
    },
    {
        name: "Lakha",
        type: "living",
        scope: "individual",
        iso6393: "lkh"
    },
    {
        name: "Laki",
        type: "living",
        scope: "individual",
        iso6393: "lki"
    },
    {
        name: "Remun",
        type: "living",
        scope: "individual",
        iso6393: "lkj"
    },
    {
        name: "Laeko-Libuat",
        type: "living",
        scope: "individual",
        iso6393: "lkl"
    },
    {
        name: "Kalaamaya",
        type: "extinct",
        scope: "individual",
        iso6393: "lkm"
    },
    {
        name: "Lakon",
        type: "living",
        scope: "individual",
        iso6393: "lkn"
    },
    {
        name: "Khayo",
        type: "living",
        scope: "individual",
        iso6393: "lko"
    },
    {
        name: "P\xe4ri",
        type: "living",
        scope: "individual",
        iso6393: "lkr"
    },
    {
        name: "Kisa",
        type: "living",
        scope: "individual",
        iso6393: "lks"
    },
    {
        name: "Lakota",
        type: "living",
        scope: "individual",
        iso6393: "lkt"
    },
    {
        name: "Kungkari",
        type: "extinct",
        scope: "individual",
        iso6393: "lku"
    },
    {
        name: "Lokoya",
        type: "living",
        scope: "individual",
        iso6393: "lky"
    },
    {
        name: "Lala-Roba",
        type: "living",
        scope: "individual",
        iso6393: "lla"
    },
    {
        name: "Lolo",
        type: "living",
        scope: "individual",
        iso6393: "llb"
    },
    {
        name: "Lele (Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "llc"
    },
    {
        name: "Ladin",
        type: "living",
        scope: "individual",
        iso6393: "lld"
    },
    {
        name: "Lele (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "lle"
    },
    {
        name: "Hermit",
        type: "extinct",
        scope: "individual",
        iso6393: "llf"
    },
    {
        name: "Lole",
        type: "living",
        scope: "individual",
        iso6393: "llg"
    },
    {
        name: "Lamu",
        type: "living",
        scope: "individual",
        iso6393: "llh"
    },
    {
        name: "Teke-Laali",
        type: "living",
        scope: "individual",
        iso6393: "lli"
    },
    {
        name: "Ladji Ladji",
        type: "extinct",
        scope: "individual",
        iso6393: "llj"
    },
    {
        name: "Lelak",
        type: "extinct",
        scope: "individual",
        iso6393: "llk"
    },
    {
        name: "Lilau",
        type: "living",
        scope: "individual",
        iso6393: "lll"
    },
    {
        name: "Lasalimu",
        type: "living",
        scope: "individual",
        iso6393: "llm"
    },
    {
        name: "Lele (Chad)",
        type: "living",
        scope: "individual",
        iso6393: "lln"
    },
    {
        name: "North Efate",
        type: "living",
        scope: "individual",
        iso6393: "llp"
    },
    {
        name: "Lolak",
        type: "living",
        scope: "individual",
        iso6393: "llq"
    },
    {
        name: "Lithuanian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "lls"
    },
    {
        name: "Lau",
        type: "living",
        scope: "individual",
        iso6393: "llu"
    },
    {
        name: "Lauan",
        type: "living",
        scope: "individual",
        iso6393: "llx"
    },
    {
        name: "East Limba",
        type: "living",
        scope: "individual",
        iso6393: "lma"
    },
    {
        name: "Merei",
        type: "living",
        scope: "individual",
        iso6393: "lmb"
    },
    {
        name: "Limilngan",
        type: "extinct",
        scope: "individual",
        iso6393: "lmc"
    },
    {
        name: "Lumun",
        type: "living",
        scope: "individual",
        iso6393: "lmd"
    },
    {
        name: "P\xe9v\xe9",
        type: "living",
        scope: "individual",
        iso6393: "lme"
    },
    {
        name: "South Lembata",
        type: "living",
        scope: "individual",
        iso6393: "lmf"
    },
    {
        name: "Lamogai",
        type: "living",
        scope: "individual",
        iso6393: "lmg"
    },
    {
        name: "Lambichhong",
        type: "living",
        scope: "individual",
        iso6393: "lmh"
    },
    {
        name: "Lombi",
        type: "living",
        scope: "individual",
        iso6393: "lmi"
    },
    {
        name: "West Lembata",
        type: "living",
        scope: "individual",
        iso6393: "lmj"
    },
    {
        name: "Lamkang",
        type: "living",
        scope: "individual",
        iso6393: "lmk"
    },
    {
        name: "Hano",
        type: "living",
        scope: "individual",
        iso6393: "lml"
    },
    {
        name: "Lambadi",
        type: "living",
        scope: "individual",
        iso6393: "lmn"
    },
    {
        name: "Lombard",
        type: "living",
        scope: "individual",
        iso6393: "lmo"
    },
    {
        name: "Limbum",
        type: "living",
        scope: "individual",
        iso6393: "lmp"
    },
    {
        name: "Lamatuka",
        type: "living",
        scope: "individual",
        iso6393: "lmq"
    },
    {
        name: "Lamalera",
        type: "living",
        scope: "individual",
        iso6393: "lmr"
    },
    {
        name: "Lamenu",
        type: "living",
        scope: "individual",
        iso6393: "lmu"
    },
    {
        name: "Lomaiviti",
        type: "living",
        scope: "individual",
        iso6393: "lmv"
    },
    {
        name: "Lake Miwok",
        type: "living",
        scope: "individual",
        iso6393: "lmw"
    },
    {
        name: "Laimbue",
        type: "living",
        scope: "individual",
        iso6393: "lmx"
    },
    {
        name: "Lamboya",
        type: "living",
        scope: "individual",
        iso6393: "lmy"
    },
    {
        name: "Langbashe",
        type: "living",
        scope: "individual",
        iso6393: "lna"
    },
    {
        name: "Mbalanhu",
        type: "living",
        scope: "individual",
        iso6393: "lnb"
    },
    {
        name: "Lundayeh",
        type: "living",
        scope: "individual",
        iso6393: "lnd"
    },
    {
        name: "Langobardic",
        type: "ancient",
        scope: "individual",
        iso6393: "lng"
    },
    {
        name: "Lanoh",
        type: "living",
        scope: "individual",
        iso6393: "lnh"
    },
    {
        name: "Daantanai'",
        type: "living",
        scope: "individual",
        iso6393: "lni"
    },
    {
        name: "Leningitij",
        type: "extinct",
        scope: "individual",
        iso6393: "lnj"
    },
    {
        name: "South Central Banda",
        type: "living",
        scope: "individual",
        iso6393: "lnl"
    },
    {
        name: "Langam",
        type: "living",
        scope: "individual",
        iso6393: "lnm"
    },
    {
        name: "Lorediakarkar",
        type: "living",
        scope: "individual",
        iso6393: "lnn"
    },
    {
        name: "Lango (South Sudan)",
        type: "living",
        scope: "individual",
        iso6393: "lno"
    },
    {
        name: "Lamnso'",
        type: "living",
        scope: "individual",
        iso6393: "lns"
    },
    {
        name: "Longuda",
        type: "living",
        scope: "individual",
        iso6393: "lnu"
    },
    {
        name: "Lanima",
        type: "extinct",
        scope: "individual",
        iso6393: "lnw"
    },
    {
        name: "Lonzo",
        type: "living",
        scope: "individual",
        iso6393: "lnz"
    },
    {
        name: "Loloda",
        type: "living",
        scope: "individual",
        iso6393: "loa"
    },
    {
        name: "Lobi",
        type: "living",
        scope: "individual",
        iso6393: "lob"
    },
    {
        name: "Inonhan",
        type: "living",
        scope: "individual",
        iso6393: "loc"
    },
    {
        name: "Saluan",
        type: "living",
        scope: "individual",
        iso6393: "loe"
    },
    {
        name: "Logol",
        type: "living",
        scope: "individual",
        iso6393: "lof"
    },
    {
        name: "Logo",
        type: "living",
        scope: "individual",
        iso6393: "log"
    },
    {
        name: "Narim",
        type: "living",
        scope: "individual",
        iso6393: "loh"
    },
    {
        name: "Loma (C\xf4te d'Ivoire)",
        type: "living",
        scope: "individual",
        iso6393: "loi"
    },
    {
        name: "Lou",
        type: "living",
        scope: "individual",
        iso6393: "loj"
    },
    {
        name: "Loko",
        type: "living",
        scope: "individual",
        iso6393: "lok"
    },
    {
        name: "Mongo",
        type: "living",
        scope: "individual",
        iso6393: "lol",
        iso6392B: "lol",
        iso6392T: "lol"
    },
    {
        name: "Loma (Liberia)",
        type: "living",
        scope: "individual",
        iso6393: "lom"
    },
    {
        name: "Malawi Lomwe",
        type: "living",
        scope: "individual",
        iso6393: "lon"
    },
    {
        name: "Lombo",
        type: "living",
        scope: "individual",
        iso6393: "loo"
    },
    {
        name: "Lopa",
        type: "living",
        scope: "individual",
        iso6393: "lop"
    },
    {
        name: "Lobala",
        type: "living",
        scope: "individual",
        iso6393: "loq"
    },
    {
        name: "T\xe9\xe9n",
        type: "living",
        scope: "individual",
        iso6393: "lor"
    },
    {
        name: "Loniu",
        type: "living",
        scope: "individual",
        iso6393: "los"
    },
    {
        name: "Otuho",
        type: "living",
        scope: "individual",
        iso6393: "lot"
    },
    {
        name: "Louisiana Creole",
        type: "living",
        scope: "individual",
        iso6393: "lou"
    },
    {
        name: "Lopi",
        type: "living",
        scope: "individual",
        iso6393: "lov"
    },
    {
        name: "Tampias Lobu",
        type: "living",
        scope: "individual",
        iso6393: "low"
    },
    {
        name: "Loun",
        type: "living",
        scope: "individual",
        iso6393: "lox"
    },
    {
        name: "Loke",
        type: "living",
        scope: "individual",
        iso6393: "loy"
    },
    {
        name: "Lozi",
        type: "living",
        scope: "individual",
        iso6393: "loz",
        iso6392B: "loz",
        iso6392T: "loz"
    },
    {
        name: "Lelepa",
        type: "living",
        scope: "individual",
        iso6393: "lpa"
    },
    {
        name: "Lepki",
        type: "living",
        scope: "individual",
        iso6393: "lpe"
    },
    {
        name: "Long Phuri Naga",
        type: "living",
        scope: "individual",
        iso6393: "lpn"
    },
    {
        name: "Lipo",
        type: "living",
        scope: "individual",
        iso6393: "lpo"
    },
    {
        name: "Lopit",
        type: "living",
        scope: "individual",
        iso6393: "lpx"
    },
    {
        name: "Rara Bakati'",
        type: "living",
        scope: "individual",
        iso6393: "lra"
    },
    {
        name: "Northern Luri",
        type: "living",
        scope: "individual",
        iso6393: "lrc"
    },
    {
        name: "Laurentian",
        type: "extinct",
        scope: "individual",
        iso6393: "lre"
    },
    {
        name: "Laragia",
        type: "extinct",
        scope: "individual",
        iso6393: "lrg"
    },
    {
        name: "Marachi",
        type: "living",
        scope: "individual",
        iso6393: "lri"
    },
    {
        name: "Loarki",
        type: "living",
        scope: "individual",
        iso6393: "lrk"
    },
    {
        name: "Lari",
        type: "living",
        scope: "individual",
        iso6393: "lrl"
    },
    {
        name: "Marama",
        type: "living",
        scope: "individual",
        iso6393: "lrm"
    },
    {
        name: "Lorang",
        type: "living",
        scope: "individual",
        iso6393: "lrn"
    },
    {
        name: "Laro",
        type: "living",
        scope: "individual",
        iso6393: "lro"
    },
    {
        name: "Southern Yamphu",
        type: "living",
        scope: "individual",
        iso6393: "lrr"
    },
    {
        name: "Larantuka Malay",
        type: "living",
        scope: "individual",
        iso6393: "lrt"
    },
    {
        name: "Larevat",
        type: "living",
        scope: "individual",
        iso6393: "lrv"
    },
    {
        name: "Lemerig",
        type: "living",
        scope: "individual",
        iso6393: "lrz"
    },
    {
        name: "Lasgerdi",
        type: "living",
        scope: "individual",
        iso6393: "lsa"
    },
    {
        name: "Lishana Deni",
        type: "living",
        scope: "individual",
        iso6393: "lsd"
    },
    {
        name: "Lusengo",
        type: "living",
        scope: "individual",
        iso6393: "lse"
    },
    {
        name: "Lish",
        type: "living",
        scope: "individual",
        iso6393: "lsh"
    },
    {
        name: "Lashi",
        type: "living",
        scope: "individual",
        iso6393: "lsi"
    },
    {
        name: "Latvian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "lsl"
    },
    {
        name: "Saamia",
        type: "living",
        scope: "individual",
        iso6393: "lsm"
    },
    {
        name: "Tibetan Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "lsn"
    },
    {
        name: "Laos Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "lso"
    },
    {
        name: "Panamanian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "lsp"
    },
    {
        name: "Aruop",
        type: "living",
        scope: "individual",
        iso6393: "lsr"
    },
    {
        name: "Lasi",
        type: "living",
        scope: "individual",
        iso6393: "lss"
    },
    {
        name: "Trinidad and Tobago Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "lst"
    },
    {
        name: "Sivia Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "lsv"
    },
    {
        name: "Mauritian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "lsy"
    },
    {
        name: "Late Middle Chinese",
        type: "historical",
        scope: "individual",
        iso6393: "ltc"
    },
    {
        name: "Latgalian",
        type: "living",
        scope: "individual",
        iso6393: "ltg"
    },
    {
        name: "Thur",
        type: "living",
        scope: "individual",
        iso6393: "lth"
    },
    {
        name: "Leti (Indonesia)",
        type: "living",
        scope: "individual",
        iso6393: "lti"
    },
    {
        name: "Latund\xea",
        type: "living",
        scope: "individual",
        iso6393: "ltn"
    },
    {
        name: "Tsotso",
        type: "living",
        scope: "individual",
        iso6393: "lto"
    },
    {
        name: "Tachoni",
        type: "living",
        scope: "individual",
        iso6393: "lts"
    },
    {
        name: "Latu",
        type: "living",
        scope: "individual",
        iso6393: "ltu"
    },
    {
        name: "Luxembourgish",
        type: "living",
        scope: "individual",
        iso6393: "ltz",
        iso6392B: "ltz",
        iso6392T: "ltz",
        iso6391: "lb"
    },
    {
        name: "Luba-Lulua",
        type: "living",
        scope: "individual",
        iso6393: "lua",
        iso6392B: "lua",
        iso6392T: "lua"
    },
    {
        name: "Luba-Katanga",
        type: "living",
        scope: "individual",
        iso6393: "lub",
        iso6392B: "lub",
        iso6392T: "lub",
        iso6391: "lu"
    },
    {
        name: "Aringa",
        type: "living",
        scope: "individual",
        iso6393: "luc"
    },
    {
        name: "Ludian",
        type: "living",
        scope: "individual",
        iso6393: "lud"
    },
    {
        name: "Luvale",
        type: "living",
        scope: "individual",
        iso6393: "lue"
    },
    {
        name: "Laua",
        type: "living",
        scope: "individual",
        iso6393: "luf"
    },
    {
        name: "Ganda",
        type: "living",
        scope: "individual",
        iso6393: "lug",
        iso6392B: "lug",
        iso6392T: "lug",
        iso6391: "lg"
    },
    {
        name: "Luiseno",
        type: "extinct",
        scope: "individual",
        iso6393: "lui",
        iso6392B: "lui",
        iso6392T: "lui"
    },
    {
        name: "Luna",
        type: "living",
        scope: "individual",
        iso6393: "luj"
    },
    {
        name: "Lunanakha",
        type: "living",
        scope: "individual",
        iso6393: "luk"
    },
    {
        name: "Olu'bo",
        type: "living",
        scope: "individual",
        iso6393: "lul"
    },
    {
        name: "Luimbi",
        type: "living",
        scope: "individual",
        iso6393: "lum"
    },
    {
        name: "Lunda",
        type: "living",
        scope: "individual",
        iso6393: "lun",
        iso6392B: "lun",
        iso6392T: "lun"
    },
    {
        name: "Luo (Kenya and Tanzania)",
        type: "living",
        scope: "individual",
        iso6393: "luo",
        iso6392B: "luo",
        iso6392T: "luo"
    },
    {
        name: "Lumbu",
        type: "living",
        scope: "individual",
        iso6393: "lup"
    },
    {
        name: "Lucumi",
        type: "living",
        scope: "individual",
        iso6393: "luq"
    },
    {
        name: "Laura",
        type: "living",
        scope: "individual",
        iso6393: "lur"
    },
    {
        name: "Lushai",
        type: "living",
        scope: "individual",
        iso6393: "lus",
        iso6392B: "lus",
        iso6392T: "lus"
    },
    {
        name: "Lushootseed",
        type: "living",
        scope: "individual",
        iso6393: "lut"
    },
    {
        name: "Lumba-Yakkha",
        type: "living",
        scope: "individual",
        iso6393: "luu"
    },
    {
        name: "Luwati",
        type: "living",
        scope: "individual",
        iso6393: "luv"
    },
    {
        name: "Luo (Cameroon)",
        type: "living",
        scope: "individual",
        iso6393: "luw"
    },
    {
        name: "Luyia",
        type: "living",
        scope: "macrolanguage",
        iso6393: "luy"
    },
    {
        name: "Southern Luri",
        type: "living",
        scope: "individual",
        iso6393: "luz"
    },
    {
        name: "Maku'a",
        type: "living",
        scope: "individual",
        iso6393: "lva"
    },
    {
        name: "Lavi",
        type: "living",
        scope: "individual",
        iso6393: "lvi"
    },
    {
        name: "Lavukaleve",
        type: "living",
        scope: "individual",
        iso6393: "lvk"
    },
    {
        name: "Standard Latvian",
        type: "living",
        scope: "individual",
        iso6393: "lvs"
    },
    {
        name: "Levuka",
        type: "living",
        scope: "individual",
        iso6393: "lvu"
    },
    {
        name: "Lwalu",
        type: "living",
        scope: "individual",
        iso6393: "lwa"
    },
    {
        name: "Lewo Eleng",
        type: "living",
        scope: "individual",
        iso6393: "lwe"
    },
    {
        name: "Wanga",
        type: "living",
        scope: "individual",
        iso6393: "lwg"
    },
    {
        name: "White Lachi",
        type: "living",
        scope: "individual",
        iso6393: "lwh"
    },
    {
        name: "Eastern Lawa",
        type: "living",
        scope: "individual",
        iso6393: "lwl"
    },
    {
        name: "Laomian",
        type: "living",
        scope: "individual",
        iso6393: "lwm"
    },
    {
        name: "Luwo",
        type: "living",
        scope: "individual",
        iso6393: "lwo"
    },
    {
        name: "Malawian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "lws"
    },
    {
        name: "Lewotobi",
        type: "living",
        scope: "individual",
        iso6393: "lwt"
    },
    {
        name: "Lawu",
        type: "living",
        scope: "individual",
        iso6393: "lwu"
    },
    {
        name: "Lewo",
        type: "living",
        scope: "individual",
        iso6393: "lww"
    },
    {
        name: "Layakha",
        type: "living",
        scope: "individual",
        iso6393: "lya"
    },
    {
        name: "Lyngngam",
        type: "living",
        scope: "individual",
        iso6393: "lyg"
    },
    {
        name: "Luyana",
        type: "living",
        scope: "individual",
        iso6393: "lyn"
    },
    {
        name: "Literary Chinese",
        type: "historical",
        scope: "individual",
        iso6393: "lzh"
    },
    {
        name: "Litzlitz",
        type: "living",
        scope: "individual",
        iso6393: "lzl"
    },
    {
        name: "Leinong Naga",
        type: "living",
        scope: "individual",
        iso6393: "lzn"
    },
    {
        name: "Laz",
        type: "living",
        scope: "individual",
        iso6393: "lzz"
    },
    {
        name: "San Jer\xf3nimo Tec\xf3atl Mazatec",
        type: "living",
        scope: "individual",
        iso6393: "maa"
    },
    {
        name: "Yutanduchi Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mab"
    },
    {
        name: "Madurese",
        type: "living",
        scope: "individual",
        iso6393: "mad",
        iso6392B: "mad",
        iso6392T: "mad"
    },
    {
        name: "Bo-Rukul",
        type: "living",
        scope: "individual",
        iso6393: "mae"
    },
    {
        name: "Mafa",
        type: "living",
        scope: "individual",
        iso6393: "maf"
    },
    {
        name: "Magahi",
        type: "living",
        scope: "individual",
        iso6393: "mag",
        iso6392B: "mag",
        iso6392T: "mag"
    },
    {
        name: "Marshallese",
        type: "living",
        scope: "individual",
        iso6393: "mah",
        iso6392B: "mah",
        iso6392T: "mah",
        iso6391: "mh"
    },
    {
        name: "Maithili",
        type: "living",
        scope: "individual",
        iso6393: "mai",
        iso6392B: "mai",
        iso6392T: "mai"
    },
    {
        name: "Jalapa De D\xedaz Mazatec",
        type: "living",
        scope: "individual",
        iso6393: "maj"
    },
    {
        name: "Makasar",
        type: "living",
        scope: "individual",
        iso6393: "mak",
        iso6392B: "mak",
        iso6392T: "mak"
    },
    {
        name: "Malayalam",
        type: "living",
        scope: "individual",
        iso6393: "mal",
        iso6392B: "mal",
        iso6392T: "mal",
        iso6391: "ml"
    },
    {
        name: "Mam",
        type: "living",
        scope: "individual",
        iso6393: "mam"
    },
    {
        name: "Mandingo",
        type: "living",
        scope: "macrolanguage",
        iso6393: "man",
        iso6392B: "man",
        iso6392T: "man"
    },
    {
        name: "Chiquihuitl\xe1n Mazatec",
        type: "living",
        scope: "individual",
        iso6393: "maq"
    },
    {
        name: "Marathi",
        type: "living",
        scope: "individual",
        iso6393: "mar",
        iso6392B: "mar",
        iso6392T: "mar",
        iso6391: "mr"
    },
    {
        name: "Masai",
        type: "living",
        scope: "individual",
        iso6393: "mas",
        iso6392B: "mas",
        iso6392T: "mas"
    },
    {
        name: "San Francisco Matlatzinca",
        type: "living",
        scope: "individual",
        iso6393: "mat"
    },
    {
        name: "Huautla Mazatec",
        type: "living",
        scope: "individual",
        iso6393: "mau"
    },
    {
        name: "Sater\xe9-Maw\xe9",
        type: "living",
        scope: "individual",
        iso6393: "mav"
    },
    {
        name: "Mampruli",
        type: "living",
        scope: "individual",
        iso6393: "maw"
    },
    {
        name: "North Moluccan Malay",
        type: "living",
        scope: "individual",
        iso6393: "max"
    },
    {
        name: "Central Mazahua",
        type: "living",
        scope: "individual",
        iso6393: "maz"
    },
    {
        name: "Higaonon",
        type: "living",
        scope: "individual",
        iso6393: "mba"
    },
    {
        name: "Western Bukidnon Manobo",
        type: "living",
        scope: "individual",
        iso6393: "mbb"
    },
    {
        name: "Macushi",
        type: "living",
        scope: "individual",
        iso6393: "mbc"
    },
    {
        name: "Dibabawon Manobo",
        type: "living",
        scope: "individual",
        iso6393: "mbd"
    },
    {
        name: "Molale",
        type: "extinct",
        scope: "individual",
        iso6393: "mbe"
    },
    {
        name: "Baba Malay",
        type: "living",
        scope: "individual",
        iso6393: "mbf"
    },
    {
        name: "Mangseng",
        type: "living",
        scope: "individual",
        iso6393: "mbh"
    },
    {
        name: "Ilianen Manobo",
        type: "living",
        scope: "individual",
        iso6393: "mbi"
    },
    {
        name: "Nad\xebb",
        type: "living",
        scope: "individual",
        iso6393: "mbj"
    },
    {
        name: "Malol",
        type: "living",
        scope: "individual",
        iso6393: "mbk"
    },
    {
        name: "Maxakal\xed",
        type: "living",
        scope: "individual",
        iso6393: "mbl"
    },
    {
        name: "Ombamba",
        type: "living",
        scope: "individual",
        iso6393: "mbm"
    },
    {
        name: "Macagu\xe1n",
        type: "living",
        scope: "individual",
        iso6393: "mbn"
    },
    {
        name: "Mbo (Cameroon)",
        type: "living",
        scope: "individual",
        iso6393: "mbo"
    },
    {
        name: "Malayo",
        type: "living",
        scope: "individual",
        iso6393: "mbp"
    },
    {
        name: "Maisin",
        type: "living",
        scope: "individual",
        iso6393: "mbq"
    },
    {
        name: "Nukak Mak\xfa",
        type: "living",
        scope: "individual",
        iso6393: "mbr"
    },
    {
        name: "Sarangani Manobo",
        type: "living",
        scope: "individual",
        iso6393: "mbs"
    },
    {
        name: "Matigsalug Manobo",
        type: "living",
        scope: "individual",
        iso6393: "mbt"
    },
    {
        name: "Mbula-Bwazza",
        type: "living",
        scope: "individual",
        iso6393: "mbu"
    },
    {
        name: "Mbulungish",
        type: "living",
        scope: "individual",
        iso6393: "mbv"
    },
    {
        name: "Maring",
        type: "living",
        scope: "individual",
        iso6393: "mbw"
    },
    {
        name: "Mari (East Sepik Province)",
        type: "living",
        scope: "individual",
        iso6393: "mbx"
    },
    {
        name: "Memoni",
        type: "living",
        scope: "individual",
        iso6393: "mby"
    },
    {
        name: "Amoltepec Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mbz"
    },
    {
        name: "Maca",
        type: "living",
        scope: "individual",
        iso6393: "mca"
    },
    {
        name: "Machiguenga",
        type: "living",
        scope: "individual",
        iso6393: "mcb"
    },
    {
        name: "Bitur",
        type: "living",
        scope: "individual",
        iso6393: "mcc"
    },
    {
        name: "Sharanahua",
        type: "living",
        scope: "individual",
        iso6393: "mcd"
    },
    {
        name: "Itundujia Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mce"
    },
    {
        name: "Mats\xe9s",
        type: "living",
        scope: "individual",
        iso6393: "mcf"
    },
    {
        name: "Mapoyo",
        type: "living",
        scope: "individual",
        iso6393: "mcg"
    },
    {
        name: "Maquiritari",
        type: "living",
        scope: "individual",
        iso6393: "mch"
    },
    {
        name: "Mese",
        type: "living",
        scope: "individual",
        iso6393: "mci"
    },
    {
        name: "Mvanip",
        type: "living",
        scope: "individual",
        iso6393: "mcj"
    },
    {
        name: "Mbunda",
        type: "living",
        scope: "individual",
        iso6393: "mck"
    },
    {
        name: "Macaguaje",
        type: "extinct",
        scope: "individual",
        iso6393: "mcl"
    },
    {
        name: "Malaccan Creole Portuguese",
        type: "living",
        scope: "individual",
        iso6393: "mcm"
    },
    {
        name: "Masana",
        type: "living",
        scope: "individual",
        iso6393: "mcn"
    },
    {
        name: "Coatl\xe1n Mixe",
        type: "living",
        scope: "individual",
        iso6393: "mco"
    },
    {
        name: "Makaa",
        type: "living",
        scope: "individual",
        iso6393: "mcp"
    },
    {
        name: "Ese",
        type: "living",
        scope: "individual",
        iso6393: "mcq"
    },
    {
        name: "Menya",
        type: "living",
        scope: "individual",
        iso6393: "mcr"
    },
    {
        name: "Mambai",
        type: "living",
        scope: "individual",
        iso6393: "mcs"
    },
    {
        name: "Mengisa",
        type: "living",
        scope: "individual",
        iso6393: "mct"
    },
    {
        name: "Cameroon Mambila",
        type: "living",
        scope: "individual",
        iso6393: "mcu"
    },
    {
        name: "Minanibai",
        type: "living",
        scope: "individual",
        iso6393: "mcv"
    },
    {
        name: "Mawa (Chad)",
        type: "living",
        scope: "individual",
        iso6393: "mcw"
    },
    {
        name: "Mpiemo",
        type: "living",
        scope: "individual",
        iso6393: "mcx"
    },
    {
        name: "South Watut",
        type: "living",
        scope: "individual",
        iso6393: "mcy"
    },
    {
        name: "Mawan",
        type: "living",
        scope: "individual",
        iso6393: "mcz"
    },
    {
        name: "Mada (Nigeria)",
        type: "living",
        scope: "individual",
        iso6393: "mda"
    },
    {
        name: "Morigi",
        type: "living",
        scope: "individual",
        iso6393: "mdb"
    },
    {
        name: "Male (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "mdc"
    },
    {
        name: "Mbum",
        type: "living",
        scope: "individual",
        iso6393: "mdd"
    },
    {
        name: "Maba (Chad)",
        type: "living",
        scope: "individual",
        iso6393: "mde"
    },
    {
        name: "Moksha",
        type: "living",
        scope: "individual",
        iso6393: "mdf",
        iso6392B: "mdf",
        iso6392T: "mdf"
    },
    {
        name: "Massalat",
        type: "living",
        scope: "individual",
        iso6393: "mdg"
    },
    {
        name: "Maguindanaon",
        type: "living",
        scope: "individual",
        iso6393: "mdh"
    },
    {
        name: "Mamvu",
        type: "living",
        scope: "individual",
        iso6393: "mdi"
    },
    {
        name: "Mangbetu",
        type: "living",
        scope: "individual",
        iso6393: "mdj"
    },
    {
        name: "Mangbutu",
        type: "living",
        scope: "individual",
        iso6393: "mdk"
    },
    {
        name: "Maltese Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "mdl"
    },
    {
        name: "Mayogo",
        type: "living",
        scope: "individual",
        iso6393: "mdm"
    },
    {
        name: "Mbati",
        type: "living",
        scope: "individual",
        iso6393: "mdn"
    },
    {
        name: "Mbala",
        type: "living",
        scope: "individual",
        iso6393: "mdp"
    },
    {
        name: "Mbole",
        type: "living",
        scope: "individual",
        iso6393: "mdq"
    },
    {
        name: "Mandar",
        type: "living",
        scope: "individual",
        iso6393: "mdr",
        iso6392B: "mdr",
        iso6392T: "mdr"
    },
    {
        name: "Maria (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "mds"
    },
    {
        name: "Mbere",
        type: "living",
        scope: "individual",
        iso6393: "mdt"
    },
    {
        name: "Mboko",
        type: "living",
        scope: "individual",
        iso6393: "mdu"
    },
    {
        name: "Santa Luc\xeda Monteverde Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mdv"
    },
    {
        name: "Mbosi",
        type: "living",
        scope: "individual",
        iso6393: "mdw"
    },
    {
        name: "Dizin",
        type: "living",
        scope: "individual",
        iso6393: "mdx"
    },
    {
        name: "Male (Ethiopia)",
        type: "living",
        scope: "individual",
        iso6393: "mdy"
    },
    {
        name: "Suru\xed Do Par\xe1",
        type: "living",
        scope: "individual",
        iso6393: "mdz"
    },
    {
        name: "Menka",
        type: "living",
        scope: "individual",
        iso6393: "mea"
    },
    {
        name: "Ikobi",
        type: "living",
        scope: "individual",
        iso6393: "meb"
    },
    {
        name: "Marra",
        type: "living",
        scope: "individual",
        iso6393: "mec"
    },
    {
        name: "Melpa",
        type: "living",
        scope: "individual",
        iso6393: "med"
    },
    {
        name: "Mengen",
        type: "living",
        scope: "individual",
        iso6393: "mee"
    },
    {
        name: "Megam",
        type: "living",
        scope: "individual",
        iso6393: "mef"
    },
    {
        name: "Southwestern Tlaxiaco Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "meh"
    },
    {
        name: "Midob",
        type: "living",
        scope: "individual",
        iso6393: "mei"
    },
    {
        name: "Meyah",
        type: "living",
        scope: "individual",
        iso6393: "mej"
    },
    {
        name: "Mekeo",
        type: "living",
        scope: "individual",
        iso6393: "mek"
    },
    {
        name: "Central Melanau",
        type: "living",
        scope: "individual",
        iso6393: "mel"
    },
    {
        name: "Mangala",
        type: "extinct",
        scope: "individual",
        iso6393: "mem"
    },
    {
        name: "Mende (Sierra Leone)",
        type: "living",
        scope: "individual",
        iso6393: "men",
        iso6392B: "men",
        iso6392T: "men"
    },
    {
        name: "Kedah Malay",
        type: "living",
        scope: "individual",
        iso6393: "meo"
    },
    {
        name: "Miriwoong",
        type: "living",
        scope: "individual",
        iso6393: "mep"
    },
    {
        name: "Merey",
        type: "living",
        scope: "individual",
        iso6393: "meq"
    },
    {
        name: "Meru",
        type: "living",
        scope: "individual",
        iso6393: "mer"
    },
    {
        name: "Masmaje",
        type: "living",
        scope: "individual",
        iso6393: "mes"
    },
    {
        name: "Mato",
        type: "living",
        scope: "individual",
        iso6393: "met"
    },
    {
        name: "Motu",
        type: "living",
        scope: "individual",
        iso6393: "meu"
    },
    {
        name: "Mano",
        type: "living",
        scope: "individual",
        iso6393: "mev"
    },
    {
        name: "Maaka",
        type: "living",
        scope: "individual",
        iso6393: "mew"
    },
    {
        name: "Hassaniyya",
        type: "living",
        scope: "individual",
        iso6393: "mey"
    },
    {
        name: "Menominee",
        type: "living",
        scope: "individual",
        iso6393: "mez"
    },
    {
        name: "Pattani Malay",
        type: "living",
        scope: "individual",
        iso6393: "mfa"
    },
    {
        name: "Bangka",
        type: "living",
        scope: "individual",
        iso6393: "mfb"
    },
    {
        name: "Mba",
        type: "living",
        scope: "individual",
        iso6393: "mfc"
    },
    {
        name: "Mendankwe-Nkwen",
        type: "living",
        scope: "individual",
        iso6393: "mfd"
    },
    {
        name: "Morisyen",
        type: "living",
        scope: "individual",
        iso6393: "mfe"
    },
    {
        name: "Naki",
        type: "living",
        scope: "individual",
        iso6393: "mff"
    },
    {
        name: "Mogofin",
        type: "living",
        scope: "individual",
        iso6393: "mfg"
    },
    {
        name: "Matal",
        type: "living",
        scope: "individual",
        iso6393: "mfh"
    },
    {
        name: "Wandala",
        type: "living",
        scope: "individual",
        iso6393: "mfi"
    },
    {
        name: "Mefele",
        type: "living",
        scope: "individual",
        iso6393: "mfj"
    },
    {
        name: "North Mofu",
        type: "living",
        scope: "individual",
        iso6393: "mfk"
    },
    {
        name: "Putai",
        type: "living",
        scope: "individual",
        iso6393: "mfl"
    },
    {
        name: "Marghi South",
        type: "living",
        scope: "individual",
        iso6393: "mfm"
    },
    {
        name: "Cross River Mbembe",
        type: "living",
        scope: "individual",
        iso6393: "mfn"
    },
    {
        name: "Mbe",
        type: "living",
        scope: "individual",
        iso6393: "mfo"
    },
    {
        name: "Makassar Malay",
        type: "living",
        scope: "individual",
        iso6393: "mfp"
    },
    {
        name: "Moba",
        type: "living",
        scope: "individual",
        iso6393: "mfq"
    },
    {
        name: "Marrithiyel",
        type: "living",
        scope: "individual",
        iso6393: "mfr"
    },
    {
        name: "Mexican Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "mfs"
    },
    {
        name: "Mokerang",
        type: "living",
        scope: "individual",
        iso6393: "mft"
    },
    {
        name: "Mbwela",
        type: "living",
        scope: "individual",
        iso6393: "mfu"
    },
    {
        name: "Mandjak",
        type: "living",
        scope: "individual",
        iso6393: "mfv"
    },
    {
        name: "Mulaha",
        type: "extinct",
        scope: "individual",
        iso6393: "mfw"
    },
    {
        name: "Melo",
        type: "living",
        scope: "individual",
        iso6393: "mfx"
    },
    {
        name: "Mayo",
        type: "living",
        scope: "individual",
        iso6393: "mfy"
    },
    {
        name: "Mabaan",
        type: "living",
        scope: "individual",
        iso6393: "mfz"
    },
    {
        name: "Middle Irish (900-1200)",
        type: "historical",
        scope: "individual",
        iso6393: "mga",
        iso6392B: "mga",
        iso6392T: "mga"
    },
    {
        name: "Mararit",
        type: "living",
        scope: "individual",
        iso6393: "mgb"
    },
    {
        name: "Morokodo",
        type: "living",
        scope: "individual",
        iso6393: "mgc"
    },
    {
        name: "Moru",
        type: "living",
        scope: "individual",
        iso6393: "mgd"
    },
    {
        name: "Mango",
        type: "living",
        scope: "individual",
        iso6393: "mge"
    },
    {
        name: "Maklew",
        type: "living",
        scope: "individual",
        iso6393: "mgf"
    },
    {
        name: "Mpumpong",
        type: "living",
        scope: "individual",
        iso6393: "mgg"
    },
    {
        name: "Makhuwa-Meetto",
        type: "living",
        scope: "individual",
        iso6393: "mgh"
    },
    {
        name: "Lijili",
        type: "living",
        scope: "individual",
        iso6393: "mgi"
    },
    {
        name: "Abureni",
        type: "living",
        scope: "individual",
        iso6393: "mgj"
    },
    {
        name: "Mawes",
        type: "living",
        scope: "individual",
        iso6393: "mgk"
    },
    {
        name: "Maleu-Kilenge",
        type: "living",
        scope: "individual",
        iso6393: "mgl"
    },
    {
        name: "Mambae",
        type: "living",
        scope: "individual",
        iso6393: "mgm"
    },
    {
        name: "Mbangi",
        type: "living",
        scope: "individual",
        iso6393: "mgn"
    },
    {
        name: "Meta'",
        type: "living",
        scope: "individual",
        iso6393: "mgo"
    },
    {
        name: "Eastern Magar",
        type: "living",
        scope: "individual",
        iso6393: "mgp"
    },
    {
        name: "Malila",
        type: "living",
        scope: "individual",
        iso6393: "mgq"
    },
    {
        name: "Mambwe-Lungu",
        type: "living",
        scope: "individual",
        iso6393: "mgr"
    },
    {
        name: "Manda (Tanzania)",
        type: "living",
        scope: "individual",
        iso6393: "mgs"
    },
    {
        name: "Mongol",
        type: "living",
        scope: "individual",
        iso6393: "mgt"
    },
    {
        name: "Mailu",
        type: "living",
        scope: "individual",
        iso6393: "mgu"
    },
    {
        name: "Matengo",
        type: "living",
        scope: "individual",
        iso6393: "mgv"
    },
    {
        name: "Matumbi",
        type: "living",
        scope: "individual",
        iso6393: "mgw"
    },
    {
        name: "Mbunga",
        type: "living",
        scope: "individual",
        iso6393: "mgy"
    },
    {
        name: "Mbugwe",
        type: "living",
        scope: "individual",
        iso6393: "mgz"
    },
    {
        name: "Manda (India)",
        type: "living",
        scope: "individual",
        iso6393: "mha"
    },
    {
        name: "Mahongwe",
        type: "living",
        scope: "individual",
        iso6393: "mhb"
    },
    {
        name: "Mocho",
        type: "living",
        scope: "individual",
        iso6393: "mhc"
    },
    {
        name: "Mbugu",
        type: "living",
        scope: "individual",
        iso6393: "mhd"
    },
    {
        name: "Besisi",
        type: "living",
        scope: "individual",
        iso6393: "mhe"
    },
    {
        name: "Mamaa",
        type: "living",
        scope: "individual",
        iso6393: "mhf"
    },
    {
        name: "Margu",
        type: "living",
        scope: "individual",
        iso6393: "mhg"
    },
    {
        name: "Ma'di",
        type: "living",
        scope: "individual",
        iso6393: "mhi"
    },
    {
        name: "Mogholi",
        type: "living",
        scope: "individual",
        iso6393: "mhj"
    },
    {
        name: "Mungaka",
        type: "living",
        scope: "individual",
        iso6393: "mhk"
    },
    {
        name: "Mauwake",
        type: "living",
        scope: "individual",
        iso6393: "mhl"
    },
    {
        name: "Makhuwa-Moniga",
        type: "living",
        scope: "individual",
        iso6393: "mhm"
    },
    {
        name: "M\xf3cheno",
        type: "living",
        scope: "individual",
        iso6393: "mhn"
    },
    {
        name: "Mashi (Zambia)",
        type: "living",
        scope: "individual",
        iso6393: "mho"
    },
    {
        name: "Balinese Malay",
        type: "living",
        scope: "individual",
        iso6393: "mhp"
    },
    {
        name: "Mandan",
        type: "living",
        scope: "individual",
        iso6393: "mhq"
    },
    {
        name: "Eastern Mari",
        type: "living",
        scope: "individual",
        iso6393: "mhr"
    },
    {
        name: "Buru (Indonesia)",
        type: "living",
        scope: "individual",
        iso6393: "mhs"
    },
    {
        name: "Mandahuaca",
        type: "living",
        scope: "individual",
        iso6393: "mht"
    },
    {
        name: "Digaro-Mishmi",
        type: "living",
        scope: "individual",
        iso6393: "mhu"
    },
    {
        name: "Mbukushu",
        type: "living",
        scope: "individual",
        iso6393: "mhw"
    },
    {
        name: "Maru",
        type: "living",
        scope: "individual",
        iso6393: "mhx"
    },
    {
        name: "Ma'anyan",
        type: "living",
        scope: "individual",
        iso6393: "mhy"
    },
    {
        name: "Mor (Mor Islands)",
        type: "living",
        scope: "individual",
        iso6393: "mhz"
    },
    {
        name: "Miami",
        type: "living",
        scope: "individual",
        iso6393: "mia"
    },
    {
        name: "Atatl\xe1huca Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mib"
    },
    {
        name: "Mi'kmaq",
        type: "living",
        scope: "individual",
        iso6393: "mic",
        iso6392B: "mic",
        iso6392T: "mic"
    },
    {
        name: "Mandaic",
        type: "living",
        scope: "individual",
        iso6393: "mid"
    },
    {
        name: "Ocotepec Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mie"
    },
    {
        name: "Mofu-Gudur",
        type: "living",
        scope: "individual",
        iso6393: "mif"
    },
    {
        name: "San Miguel El Grande Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mig"
    },
    {
        name: "Chayuco Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mih"
    },
    {
        name: "Chigmecatitl\xe1n Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mii"
    },
    {
        name: "Abar",
        type: "living",
        scope: "individual",
        iso6393: "mij"
    },
    {
        name: "Mikasuki",
        type: "living",
        scope: "individual",
        iso6393: "mik"
    },
    {
        name: "Pe\xf1oles Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mil"
    },
    {
        name: "Alacatlatzala Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mim"
    },
    {
        name: "Minangkabau",
        type: "living",
        scope: "individual",
        iso6393: "min",
        iso6392B: "min",
        iso6392T: "min"
    },
    {
        name: "Pinotepa Nacional Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mio"
    },
    {
        name: "Apasco-Apoala Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mip"
    },
    {
        name: "M\xedskito",
        type: "living",
        scope: "individual",
        iso6393: "miq"
    },
    {
        name: "Isthmus Mixe",
        type: "living",
        scope: "individual",
        iso6393: "mir"
    },
    {
        name: "Uncoded languages",
        type: "special",
        scope: "special",
        iso6393: "mis",
        iso6392B: "mis",
        iso6392T: "mis"
    },
    {
        name: "Southern Puebla Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mit"
    },
    {
        name: "Cacaloxtepec Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "miu"
    },
    {
        name: "Akoye",
        type: "living",
        scope: "individual",
        iso6393: "miw"
    },
    {
        name: "Mixtepec Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mix"
    },
    {
        name: "Ayutla Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "miy"
    },
    {
        name: "Coatzospan Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "miz"
    },
    {
        name: "Makalero",
        type: "living",
        scope: "individual",
        iso6393: "mjb"
    },
    {
        name: "San Juan Colorado Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mjc"
    },
    {
        name: "Northwest Maidu",
        type: "living",
        scope: "individual",
        iso6393: "mjd"
    },
    {
        name: "Muskum",
        type: "extinct",
        scope: "individual",
        iso6393: "mje"
    },
    {
        name: "Tu",
        type: "living",
        scope: "individual",
        iso6393: "mjg"
    },
    {
        name: "Mwera (Nyasa)",
        type: "living",
        scope: "individual",
        iso6393: "mjh"
    },
    {
        name: "Kim Mun",
        type: "living",
        scope: "individual",
        iso6393: "mji"
    },
    {
        name: "Mawak",
        type: "living",
        scope: "individual",
        iso6393: "mjj"
    },
    {
        name: "Matukar",
        type: "living",
        scope: "individual",
        iso6393: "mjk"
    },
    {
        name: "Mandeali",
        type: "living",
        scope: "individual",
        iso6393: "mjl"
    },
    {
        name: "Medebur",
        type: "living",
        scope: "individual",
        iso6393: "mjm"
    },
    {
        name: "Ma (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "mjn"
    },
    {
        name: "Malankuravan",
        type: "living",
        scope: "individual",
        iso6393: "mjo"
    },
    {
        name: "Malapandaram",
        type: "living",
        scope: "individual",
        iso6393: "mjp"
    },
    {
        name: "Malaryan",
        type: "extinct",
        scope: "individual",
        iso6393: "mjq"
    },
    {
        name: "Malavedan",
        type: "living",
        scope: "individual",
        iso6393: "mjr"
    },
    {
        name: "Miship",
        type: "living",
        scope: "individual",
        iso6393: "mjs"
    },
    {
        name: "Sauria Paharia",
        type: "living",
        scope: "individual",
        iso6393: "mjt"
    },
    {
        name: "Manna-Dora",
        type: "living",
        scope: "individual",
        iso6393: "mju"
    },
    {
        name: "Mannan",
        type: "living",
        scope: "individual",
        iso6393: "mjv"
    },
    {
        name: "Karbi",
        type: "living",
        scope: "individual",
        iso6393: "mjw"
    },
    {
        name: "Mahali",
        type: "living",
        scope: "individual",
        iso6393: "mjx"
    },
    {
        name: "Mahican",
        type: "extinct",
        scope: "individual",
        iso6393: "mjy"
    },
    {
        name: "Majhi",
        type: "living",
        scope: "individual",
        iso6393: "mjz"
    },
    {
        name: "Mbre",
        type: "living",
        scope: "individual",
        iso6393: "mka"
    },
    {
        name: "Mal Paharia",
        type: "living",
        scope: "individual",
        iso6393: "mkb"
    },
    {
        name: "Siliput",
        type: "living",
        scope: "individual",
        iso6393: "mkc"
    },
    {
        name: "Macedonian",
        type: "living",
        scope: "individual",
        iso6393: "mkd",
        iso6392B: "mac",
        iso6392T: "mkd",
        iso6391: "mk"
    },
    {
        name: "Mawchi",
        type: "living",
        scope: "individual",
        iso6393: "mke"
    },
    {
        name: "Miya",
        type: "living",
        scope: "individual",
        iso6393: "mkf"
    },
    {
        name: "Mak (China)",
        type: "living",
        scope: "individual",
        iso6393: "mkg"
    },
    {
        name: "Dhatki",
        type: "living",
        scope: "individual",
        iso6393: "mki"
    },
    {
        name: "Mokilese",
        type: "living",
        scope: "individual",
        iso6393: "mkj"
    },
    {
        name: "Byep",
        type: "living",
        scope: "individual",
        iso6393: "mkk"
    },
    {
        name: "Mokole",
        type: "living",
        scope: "individual",
        iso6393: "mkl"
    },
    {
        name: "Moklen",
        type: "living",
        scope: "individual",
        iso6393: "mkm"
    },
    {
        name: "Kupang Malay",
        type: "living",
        scope: "individual",
        iso6393: "mkn"
    },
    {
        name: "Mingang Doso",
        type: "living",
        scope: "individual",
        iso6393: "mko"
    },
    {
        name: "Moikodi",
        type: "living",
        scope: "individual",
        iso6393: "mkp"
    },
    {
        name: "Bay Miwok",
        type: "extinct",
        scope: "individual",
        iso6393: "mkq"
    },
    {
        name: "Malas",
        type: "living",
        scope: "individual",
        iso6393: "mkr"
    },
    {
        name: "Silacayoapan Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mks"
    },
    {
        name: "Vamale",
        type: "living",
        scope: "individual",
        iso6393: "mkt"
    },
    {
        name: "Konyanka Maninka",
        type: "living",
        scope: "individual",
        iso6393: "mku"
    },
    {
        name: "Mafea",
        type: "living",
        scope: "individual",
        iso6393: "mkv"
    },
    {
        name: "Kituba (Congo)",
        type: "living",
        scope: "individual",
        iso6393: "mkw"
    },
    {
        name: "Kinamiging Manobo",
        type: "living",
        scope: "individual",
        iso6393: "mkx"
    },
    {
        name: "East Makian",
        type: "living",
        scope: "individual",
        iso6393: "mky"
    },
    {
        name: "Makasae",
        type: "living",
        scope: "individual",
        iso6393: "mkz"
    },
    {
        name: "Malo",
        type: "living",
        scope: "individual",
        iso6393: "mla"
    },
    {
        name: "Mbule",
        type: "living",
        scope: "individual",
        iso6393: "mlb"
    },
    {
        name: "Cao Lan",
        type: "living",
        scope: "individual",
        iso6393: "mlc"
    },
    {
        name: "Manambu",
        type: "living",
        scope: "individual",
        iso6393: "mle"
    },
    {
        name: "Mal",
        type: "living",
        scope: "individual",
        iso6393: "mlf"
    },
    {
        name: "Malagasy",
        type: "living",
        scope: "macrolanguage",
        iso6393: "mlg",
        iso6392B: "mlg",
        iso6392T: "mlg",
        iso6391: "mg"
    },
    {
        name: "Mape",
        type: "living",
        scope: "individual",
        iso6393: "mlh"
    },
    {
        name: "Malimpung",
        type: "living",
        scope: "individual",
        iso6393: "mli"
    },
    {
        name: "Miltu",
        type: "living",
        scope: "individual",
        iso6393: "mlj"
    },
    {
        name: "Ilwana",
        type: "living",
        scope: "individual",
        iso6393: "mlk"
    },
    {
        name: "Malua Bay",
        type: "living",
        scope: "individual",
        iso6393: "mll"
    },
    {
        name: "Mulam",
        type: "living",
        scope: "individual",
        iso6393: "mlm"
    },
    {
        name: "Malango",
        type: "living",
        scope: "individual",
        iso6393: "mln"
    },
    {
        name: "Mlomp",
        type: "living",
        scope: "individual",
        iso6393: "mlo"
    },
    {
        name: "Bargam",
        type: "living",
        scope: "individual",
        iso6393: "mlp"
    },
    {
        name: "Western Maninkakan",
        type: "living",
        scope: "individual",
        iso6393: "mlq"
    },
    {
        name: "Vame",
        type: "living",
        scope: "individual",
        iso6393: "mlr"
    },
    {
        name: "Masalit",
        type: "living",
        scope: "individual",
        iso6393: "mls"
    },
    {
        name: "Maltese",
        type: "living",
        scope: "individual",
        iso6393: "mlt",
        iso6392B: "mlt",
        iso6392T: "mlt",
        iso6391: "mt"
    },
    {
        name: "To'abaita",
        type: "living",
        scope: "individual",
        iso6393: "mlu"
    },
    {
        name: "Motlav",
        type: "living",
        scope: "individual",
        iso6393: "mlv"
    },
    {
        name: "Moloko",
        type: "living",
        scope: "individual",
        iso6393: "mlw"
    },
    {
        name: "Malfaxal",
        type: "living",
        scope: "individual",
        iso6393: "mlx"
    },
    {
        name: "Malaynon",
        type: "living",
        scope: "individual",
        iso6393: "mlz"
    },
    {
        name: "Mama",
        type: "living",
        scope: "individual",
        iso6393: "mma"
    },
    {
        name: "Momina",
        type: "living",
        scope: "individual",
        iso6393: "mmb"
    },
    {
        name: "Michoac\xe1n Mazahua",
        type: "living",
        scope: "individual",
        iso6393: "mmc"
    },
    {
        name: "Maonan",
        type: "living",
        scope: "individual",
        iso6393: "mmd"
    },
    {
        name: "Mae",
        type: "living",
        scope: "individual",
        iso6393: "mme"
    },
    {
        name: "Mundat",
        type: "living",
        scope: "individual",
        iso6393: "mmf"
    },
    {
        name: "North Ambrym",
        type: "living",
        scope: "individual",
        iso6393: "mmg"
    },
    {
        name: "Mehin\xe1ku",
        type: "living",
        scope: "individual",
        iso6393: "mmh"
    },
    {
        name: "Musar",
        type: "living",
        scope: "individual",
        iso6393: "mmi"
    },
    {
        name: "Majhwar",
        type: "living",
        scope: "individual",
        iso6393: "mmj"
    },
    {
        name: "Mukha-Dora",
        type: "living",
        scope: "individual",
        iso6393: "mmk"
    },
    {
        name: "Man Met",
        type: "living",
        scope: "individual",
        iso6393: "mml"
    },
    {
        name: "Maii",
        type: "living",
        scope: "individual",
        iso6393: "mmm"
    },
    {
        name: "Mamanwa",
        type: "living",
        scope: "individual",
        iso6393: "mmn"
    },
    {
        name: "Mangga Buang",
        type: "living",
        scope: "individual",
        iso6393: "mmo"
    },
    {
        name: "Siawi",
        type: "living",
        scope: "individual",
        iso6393: "mmp"
    },
    {
        name: "Musak",
        type: "living",
        scope: "individual",
        iso6393: "mmq"
    },
    {
        name: "Western Xiangxi Miao",
        type: "living",
        scope: "individual",
        iso6393: "mmr"
    },
    {
        name: "Malalamai",
        type: "living",
        scope: "individual",
        iso6393: "mmt"
    },
    {
        name: "Mmaala",
        type: "living",
        scope: "individual",
        iso6393: "mmu"
    },
    {
        name: "Miriti",
        type: "extinct",
        scope: "individual",
        iso6393: "mmv"
    },
    {
        name: "Emae",
        type: "living",
        scope: "individual",
        iso6393: "mmw"
    },
    {
        name: "Madak",
        type: "living",
        scope: "individual",
        iso6393: "mmx"
    },
    {
        name: "Migaama",
        type: "living",
        scope: "individual",
        iso6393: "mmy"
    },
    {
        name: "Mabaale",
        type: "living",
        scope: "individual",
        iso6393: "mmz"
    },
    {
        name: "Mbula",
        type: "living",
        scope: "individual",
        iso6393: "mna"
    },
    {
        name: "Muna",
        type: "living",
        scope: "individual",
        iso6393: "mnb"
    },
    {
        name: "Manchu",
        type: "living",
        scope: "individual",
        iso6393: "mnc",
        iso6392B: "mnc",
        iso6392T: "mnc"
    },
    {
        name: "Mond\xe9",
        type: "living",
        scope: "individual",
        iso6393: "mnd"
    },
    {
        name: "Naba",
        type: "living",
        scope: "individual",
        iso6393: "mne"
    },
    {
        name: "Mundani",
        type: "living",
        scope: "individual",
        iso6393: "mnf"
    },
    {
        name: "Eastern Mnong",
        type: "living",
        scope: "individual",
        iso6393: "mng"
    },
    {
        name: "Mono (Democratic Republic of Congo)",
        type: "living",
        scope: "individual",
        iso6393: "mnh"
    },
    {
        name: "Manipuri",
        type: "living",
        scope: "individual",
        iso6393: "mni",
        iso6392B: "mni",
        iso6392T: "mni"
    },
    {
        name: "Munji",
        type: "living",
        scope: "individual",
        iso6393: "mnj"
    },
    {
        name: "Mandinka",
        type: "living",
        scope: "individual",
        iso6393: "mnk"
    },
    {
        name: "Tiale",
        type: "living",
        scope: "individual",
        iso6393: "mnl"
    },
    {
        name: "Mapena",
        type: "living",
        scope: "individual",
        iso6393: "mnm"
    },
    {
        name: "Southern Mnong",
        type: "living",
        scope: "individual",
        iso6393: "mnn"
    },
    {
        name: "Min Bei Chinese",
        type: "living",
        scope: "individual",
        iso6393: "mnp"
    },
    {
        name: "Minriq",
        type: "living",
        scope: "individual",
        iso6393: "mnq"
    },
    {
        name: "Mono (USA)",
        type: "living",
        scope: "individual",
        iso6393: "mnr"
    },
    {
        name: "Mansi",
        type: "living",
        scope: "individual",
        iso6393: "mns"
    },
    {
        name: "Mer",
        type: "living",
        scope: "individual",
        iso6393: "mnu"
    },
    {
        name: "Rennell-Bellona",
        type: "living",
        scope: "individual",
        iso6393: "mnv"
    },
    {
        name: "Mon",
        type: "living",
        scope: "individual",
        iso6393: "mnw"
    },
    {
        name: "Manikion",
        type: "living",
        scope: "individual",
        iso6393: "mnx"
    },
    {
        name: "Manyawa",
        type: "living",
        scope: "individual",
        iso6393: "mny"
    },
    {
        name: "Moni",
        type: "living",
        scope: "individual",
        iso6393: "mnz"
    },
    {
        name: "Mwan",
        type: "living",
        scope: "individual",
        iso6393: "moa"
    },
    {
        name: "Mocov\xed",
        type: "living",
        scope: "individual",
        iso6393: "moc"
    },
    {
        name: "Mobilian",
        type: "extinct",
        scope: "individual",
        iso6393: "mod"
    },
    {
        name: "Innu",
        type: "living",
        scope: "individual",
        iso6393: "moe"
    },
    {
        name: "Mongondow",
        type: "living",
        scope: "individual",
        iso6393: "mog"
    },
    {
        name: "Mohawk",
        type: "living",
        scope: "individual",
        iso6393: "moh",
        iso6392B: "moh",
        iso6392T: "moh"
    },
    {
        name: "Mboi",
        type: "living",
        scope: "individual",
        iso6393: "moi"
    },
    {
        name: "Monzombo",
        type: "living",
        scope: "individual",
        iso6393: "moj"
    },
    {
        name: "Morori",
        type: "living",
        scope: "individual",
        iso6393: "mok"
    },
    {
        name: "Mangue",
        type: "extinct",
        scope: "individual",
        iso6393: "mom"
    },
    {
        name: "Mongolian",
        type: "living",
        scope: "macrolanguage",
        iso6393: "mon",
        iso6392B: "mon",
        iso6392T: "mon",
        iso6391: "mn"
    },
    {
        name: "Monom",
        type: "living",
        scope: "individual",
        iso6393: "moo"
    },
    {
        name: "Mop\xe1n Maya",
        type: "living",
        scope: "individual",
        iso6393: "mop"
    },
    {
        name: "Mor (Bomberai Peninsula)",
        type: "living",
        scope: "individual",
        iso6393: "moq"
    },
    {
        name: "Moro",
        type: "living",
        scope: "individual",
        iso6393: "mor"
    },
    {
        name: "Mossi",
        type: "living",
        scope: "individual",
        iso6393: "mos",
        iso6392B: "mos",
        iso6392T: "mos"
    },
    {
        name: "Bar\xed",
        type: "living",
        scope: "individual",
        iso6393: "mot"
    },
    {
        name: "Mogum",
        type: "living",
        scope: "individual",
        iso6393: "mou"
    },
    {
        name: "Mohave",
        type: "living",
        scope: "individual",
        iso6393: "mov"
    },
    {
        name: "Moi (Congo)",
        type: "living",
        scope: "individual",
        iso6393: "mow"
    },
    {
        name: "Molima",
        type: "living",
        scope: "individual",
        iso6393: "mox"
    },
    {
        name: "Shekkacho",
        type: "living",
        scope: "individual",
        iso6393: "moy"
    },
    {
        name: "Mukulu",
        type: "living",
        scope: "individual",
        iso6393: "moz"
    },
    {
        name: "Mpoto",
        type: "living",
        scope: "individual",
        iso6393: "mpa"
    },
    {
        name: "Malak Malak",
        type: "living",
        scope: "individual",
        iso6393: "mpb"
    },
    {
        name: "Mangarrayi",
        type: "living",
        scope: "individual",
        iso6393: "mpc"
    },
    {
        name: "Machinere",
        type: "living",
        scope: "individual",
        iso6393: "mpd"
    },
    {
        name: "Majang",
        type: "living",
        scope: "individual",
        iso6393: "mpe"
    },
    {
        name: "Marba",
        type: "living",
        scope: "individual",
        iso6393: "mpg"
    },
    {
        name: "Maung",
        type: "living",
        scope: "individual",
        iso6393: "mph"
    },
    {
        name: "Mpade",
        type: "living",
        scope: "individual",
        iso6393: "mpi"
    },
    {
        name: "Martu Wangka",
        type: "living",
        scope: "individual",
        iso6393: "mpj"
    },
    {
        name: "Mbara (Chad)",
        type: "living",
        scope: "individual",
        iso6393: "mpk"
    },
    {
        name: "Middle Watut",
        type: "living",
        scope: "individual",
        iso6393: "mpl"
    },
    {
        name: "Yosond\xfaa Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mpm"
    },
    {
        name: "Mindiri",
        type: "living",
        scope: "individual",
        iso6393: "mpn"
    },
    {
        name: "Miu",
        type: "living",
        scope: "individual",
        iso6393: "mpo"
    },
    {
        name: "Migabac",
        type: "living",
        scope: "individual",
        iso6393: "mpp"
    },
    {
        name: "Mat\xeds",
        type: "living",
        scope: "individual",
        iso6393: "mpq"
    },
    {
        name: "Vangunu",
        type: "living",
        scope: "individual",
        iso6393: "mpr"
    },
    {
        name: "Dadibi",
        type: "living",
        scope: "individual",
        iso6393: "mps"
    },
    {
        name: "Mian",
        type: "living",
        scope: "individual",
        iso6393: "mpt"
    },
    {
        name: "Makur\xe1p",
        type: "living",
        scope: "individual",
        iso6393: "mpu"
    },
    {
        name: "Mungkip",
        type: "living",
        scope: "individual",
        iso6393: "mpv"
    },
    {
        name: "Mapidian",
        type: "living",
        scope: "individual",
        iso6393: "mpw"
    },
    {
        name: "Misima-Panaeati",
        type: "living",
        scope: "individual",
        iso6393: "mpx"
    },
    {
        name: "Mapia",
        type: "living",
        scope: "individual",
        iso6393: "mpy"
    },
    {
        name: "Mpi",
        type: "living",
        scope: "individual",
        iso6393: "mpz"
    },
    {
        name: "Maba (Indonesia)",
        type: "living",
        scope: "individual",
        iso6393: "mqa"
    },
    {
        name: "Mbuko",
        type: "living",
        scope: "individual",
        iso6393: "mqb"
    },
    {
        name: "Mangole",
        type: "living",
        scope: "individual",
        iso6393: "mqc"
    },
    {
        name: "Matepi",
        type: "living",
        scope: "individual",
        iso6393: "mqe"
    },
    {
        name: "Momuna",
        type: "living",
        scope: "individual",
        iso6393: "mqf"
    },
    {
        name: "Kota Bangun Kutai Malay",
        type: "living",
        scope: "individual",
        iso6393: "mqg"
    },
    {
        name: "Tlazoyaltepec Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mqh"
    },
    {
        name: "Mariri",
        type: "living",
        scope: "individual",
        iso6393: "mqi"
    },
    {
        name: "Mamasa",
        type: "living",
        scope: "individual",
        iso6393: "mqj"
    },
    {
        name: "Rajah Kabunsuwan Manobo",
        type: "living",
        scope: "individual",
        iso6393: "mqk"
    },
    {
        name: "Mbelime",
        type: "living",
        scope: "individual",
        iso6393: "mql"
    },
    {
        name: "South Marquesan",
        type: "living",
        scope: "individual",
        iso6393: "mqm"
    },
    {
        name: "Moronene",
        type: "living",
        scope: "individual",
        iso6393: "mqn"
    },
    {
        name: "Modole",
        type: "living",
        scope: "individual",
        iso6393: "mqo"
    },
    {
        name: "Manipa",
        type: "living",
        scope: "individual",
        iso6393: "mqp"
    },
    {
        name: "Minokok",
        type: "living",
        scope: "individual",
        iso6393: "mqq"
    },
    {
        name: "Mander",
        type: "living",
        scope: "individual",
        iso6393: "mqr"
    },
    {
        name: "West Makian",
        type: "living",
        scope: "individual",
        iso6393: "mqs"
    },
    {
        name: "Mok",
        type: "living",
        scope: "individual",
        iso6393: "mqt"
    },
    {
        name: "Mandari",
        type: "living",
        scope: "individual",
        iso6393: "mqu"
    },
    {
        name: "Mosimo",
        type: "living",
        scope: "individual",
        iso6393: "mqv"
    },
    {
        name: "Murupi",
        type: "living",
        scope: "individual",
        iso6393: "mqw"
    },
    {
        name: "Mamuju",
        type: "living",
        scope: "individual",
        iso6393: "mqx"
    },
    {
        name: "Manggarai",
        type: "living",
        scope: "individual",
        iso6393: "mqy"
    },
    {
        name: "Pano",
        type: "living",
        scope: "individual",
        iso6393: "mqz"
    },
    {
        name: "Mlabri",
        type: "living",
        scope: "individual",
        iso6393: "mra"
    },
    {
        name: "Marino",
        type: "living",
        scope: "individual",
        iso6393: "mrb"
    },
    {
        name: "Maricopa",
        type: "living",
        scope: "individual",
        iso6393: "mrc"
    },
    {
        name: "Western Magar",
        type: "living",
        scope: "individual",
        iso6393: "mrd"
    },
    {
        name: "Martha's Vineyard Sign Language",
        type: "extinct",
        scope: "individual",
        iso6393: "mre"
    },
    {
        name: "Elseng",
        type: "living",
        scope: "individual",
        iso6393: "mrf"
    },
    {
        name: "Mising",
        type: "living",
        scope: "individual",
        iso6393: "mrg"
    },
    {
        name: "Mara Chin",
        type: "living",
        scope: "individual",
        iso6393: "mrh"
    },
    {
        name: "Maori",
        type: "living",
        scope: "individual",
        iso6393: "mri",
        iso6392B: "mao",
        iso6392T: "mri",
        iso6391: "mi"
    },
    {
        name: "Western Mari",
        type: "living",
        scope: "individual",
        iso6393: "mrj"
    },
    {
        name: "Hmwaveke",
        type: "living",
        scope: "individual",
        iso6393: "mrk"
    },
    {
        name: "Mortlockese",
        type: "living",
        scope: "individual",
        iso6393: "mrl"
    },
    {
        name: "Merlav",
        type: "living",
        scope: "individual",
        iso6393: "mrm"
    },
    {
        name: "Cheke Holo",
        type: "living",
        scope: "individual",
        iso6393: "mrn"
    },
    {
        name: "Mru",
        type: "living",
        scope: "individual",
        iso6393: "mro"
    },
    {
        name: "Morouas",
        type: "living",
        scope: "individual",
        iso6393: "mrp"
    },
    {
        name: "North Marquesan",
        type: "living",
        scope: "individual",
        iso6393: "mrq"
    },
    {
        name: "Maria (India)",
        type: "living",
        scope: "individual",
        iso6393: "mrr"
    },
    {
        name: "Maragus",
        type: "living",
        scope: "individual",
        iso6393: "mrs"
    },
    {
        name: "Marghi Central",
        type: "living",
        scope: "individual",
        iso6393: "mrt"
    },
    {
        name: "Mono (Cameroon)",
        type: "living",
        scope: "individual",
        iso6393: "mru"
    },
    {
        name: "Mangareva",
        type: "living",
        scope: "individual",
        iso6393: "mrv"
    },
    {
        name: "Maranao",
        type: "living",
        scope: "individual",
        iso6393: "mrw"
    },
    {
        name: "Maremgi",
        type: "living",
        scope: "individual",
        iso6393: "mrx"
    },
    {
        name: "Mandaya",
        type: "living",
        scope: "individual",
        iso6393: "mry"
    },
    {
        name: "Marind",
        type: "living",
        scope: "individual",
        iso6393: "mrz"
    },
    {
        name: "Malay (macrolanguage)",
        type: "living",
        scope: "macrolanguage",
        iso6393: "msa",
        iso6392B: "may",
        iso6392T: "msa",
        iso6391: "ms"
    },
    {
        name: "Masbatenyo",
        type: "living",
        scope: "individual",
        iso6393: "msb"
    },
    {
        name: "Sankaran Maninka",
        type: "living",
        scope: "individual",
        iso6393: "msc"
    },
    {
        name: "Yucatec Maya Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "msd"
    },
    {
        name: "Musey",
        type: "living",
        scope: "individual",
        iso6393: "mse"
    },
    {
        name: "Mekwei",
        type: "living",
        scope: "individual",
        iso6393: "msf"
    },
    {
        name: "Moraid",
        type: "living",
        scope: "individual",
        iso6393: "msg"
    },
    {
        name: "Masikoro Malagasy",
        type: "living",
        scope: "individual",
        iso6393: "msh"
    },
    {
        name: "Sabah Malay",
        type: "living",
        scope: "individual",
        iso6393: "msi"
    },
    {
        name: "Ma (Democratic Republic of Congo)",
        type: "living",
        scope: "individual",
        iso6393: "msj"
    },
    {
        name: "Mansaka",
        type: "living",
        scope: "individual",
        iso6393: "msk"
    },
    {
        name: "Molof",
        type: "living",
        scope: "individual",
        iso6393: "msl"
    },
    {
        name: "Agusan Manobo",
        type: "living",
        scope: "individual",
        iso6393: "msm"
    },
    {
        name: "Vur\xebs",
        type: "living",
        scope: "individual",
        iso6393: "msn"
    },
    {
        name: "Mombum",
        type: "living",
        scope: "individual",
        iso6393: "mso"
    },
    {
        name: "Maritsau\xe1",
        type: "extinct",
        scope: "individual",
        iso6393: "msp"
    },
    {
        name: "Caac",
        type: "living",
        scope: "individual",
        iso6393: "msq"
    },
    {
        name: "Mongolian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "msr"
    },
    {
        name: "West Masela",
        type: "living",
        scope: "individual",
        iso6393: "mss"
    },
    {
        name: "Musom",
        type: "living",
        scope: "individual",
        iso6393: "msu"
    },
    {
        name: "Maslam",
        type: "living",
        scope: "individual",
        iso6393: "msv"
    },
    {
        name: "Mansoanka",
        type: "living",
        scope: "individual",
        iso6393: "msw"
    },
    {
        name: "Moresada",
        type: "living",
        scope: "individual",
        iso6393: "msx"
    },
    {
        name: "Aruamu",
        type: "living",
        scope: "individual",
        iso6393: "msy"
    },
    {
        name: "Momare",
        type: "living",
        scope: "individual",
        iso6393: "msz"
    },
    {
        name: "Cotabato Manobo",
        type: "living",
        scope: "individual",
        iso6393: "mta"
    },
    {
        name: "Anyin Morofo",
        type: "living",
        scope: "individual",
        iso6393: "mtb"
    },
    {
        name: "Munit",
        type: "living",
        scope: "individual",
        iso6393: "mtc"
    },
    {
        name: "Mualang",
        type: "living",
        scope: "individual",
        iso6393: "mtd"
    },
    {
        name: "Mono (Solomon Islands)",
        type: "living",
        scope: "individual",
        iso6393: "mte"
    },
    {
        name: "Murik (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "mtf"
    },
    {
        name: "Una",
        type: "living",
        scope: "individual",
        iso6393: "mtg"
    },
    {
        name: "Munggui",
        type: "living",
        scope: "individual",
        iso6393: "mth"
    },
    {
        name: "Maiwa (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "mti"
    },
    {
        name: "Moskona",
        type: "living",
        scope: "individual",
        iso6393: "mtj"
    },
    {
        name: "Mbe'",
        type: "living",
        scope: "individual",
        iso6393: "mtk"
    },
    {
        name: "Montol",
        type: "living",
        scope: "individual",
        iso6393: "mtl"
    },
    {
        name: "Mator",
        type: "extinct",
        scope: "individual",
        iso6393: "mtm"
    },
    {
        name: "Matagalpa",
        type: "extinct",
        scope: "individual",
        iso6393: "mtn"
    },
    {
        name: "Totontepec Mixe",
        type: "living",
        scope: "individual",
        iso6393: "mto"
    },
    {
        name: "Wich\xed Lhamt\xe9s Nocten",
        type: "living",
        scope: "individual",
        iso6393: "mtp"
    },
    {
        name: "Muong",
        type: "living",
        scope: "individual",
        iso6393: "mtq"
    },
    {
        name: "Mewari",
        type: "living",
        scope: "individual",
        iso6393: "mtr"
    },
    {
        name: "Yora",
        type: "living",
        scope: "individual",
        iso6393: "mts"
    },
    {
        name: "Mota",
        type: "living",
        scope: "individual",
        iso6393: "mtt"
    },
    {
        name: "Tututepec Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mtu"
    },
    {
        name: "Asaro'o",
        type: "living",
        scope: "individual",
        iso6393: "mtv"
    },
    {
        name: "Southern Binukidnon",
        type: "living",
        scope: "individual",
        iso6393: "mtw"
    },
    {
        name: "Tida\xe1 Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mtx"
    },
    {
        name: "Nabi",
        type: "living",
        scope: "individual",
        iso6393: "mty"
    },
    {
        name: "Mundang",
        type: "living",
        scope: "individual",
        iso6393: "mua"
    },
    {
        name: "Mubi",
        type: "living",
        scope: "individual",
        iso6393: "mub"
    },
    {
        name: "Ajumbu",
        type: "living",
        scope: "individual",
        iso6393: "muc"
    },
    {
        name: "Mednyj Aleut",
        type: "living",
        scope: "individual",
        iso6393: "mud"
    },
    {
        name: "Media Lengua",
        type: "living",
        scope: "individual",
        iso6393: "mue"
    },
    {
        name: "Musgu",
        type: "living",
        scope: "individual",
        iso6393: "mug"
    },
    {
        name: "M\xfcnd\xfc",
        type: "living",
        scope: "individual",
        iso6393: "muh"
    },
    {
        name: "Musi",
        type: "living",
        scope: "individual",
        iso6393: "mui"
    },
    {
        name: "Mabire",
        type: "living",
        scope: "individual",
        iso6393: "muj"
    },
    {
        name: "Mugom",
        type: "living",
        scope: "individual",
        iso6393: "muk"
    },
    {
        name: "Multiple languages",
        type: "special",
        scope: "special",
        iso6393: "mul",
        iso6392B: "mul",
        iso6392T: "mul"
    },
    {
        name: "Maiwala",
        type: "living",
        scope: "individual",
        iso6393: "mum"
    },
    {
        name: "Nyong",
        type: "living",
        scope: "individual",
        iso6393: "muo"
    },
    {
        name: "Malvi",
        type: "living",
        scope: "individual",
        iso6393: "mup"
    },
    {
        name: "Eastern Xiangxi Miao",
        type: "living",
        scope: "individual",
        iso6393: "muq"
    },
    {
        name: "Murle",
        type: "living",
        scope: "individual",
        iso6393: "mur"
    },
    {
        name: "Creek",
        type: "living",
        scope: "individual",
        iso6393: "mus",
        iso6392B: "mus",
        iso6392T: "mus"
    },
    {
        name: "Western Muria",
        type: "living",
        scope: "individual",
        iso6393: "mut"
    },
    {
        name: "Yaaku",
        type: "living",
        scope: "individual",
        iso6393: "muu"
    },
    {
        name: "Muthuvan",
        type: "living",
        scope: "individual",
        iso6393: "muv"
    },
    {
        name: "Bo-Ung",
        type: "living",
        scope: "individual",
        iso6393: "mux"
    },
    {
        name: "Muyang",
        type: "living",
        scope: "individual",
        iso6393: "muy"
    },
    {
        name: "Mursi",
        type: "living",
        scope: "individual",
        iso6393: "muz"
    },
    {
        name: "Manam",
        type: "living",
        scope: "individual",
        iso6393: "mva"
    },
    {
        name: "Mattole",
        type: "extinct",
        scope: "individual",
        iso6393: "mvb"
    },
    {
        name: "Mamboru",
        type: "living",
        scope: "individual",
        iso6393: "mvd"
    },
    {
        name: "Marwari (Pakistan)",
        type: "living",
        scope: "individual",
        iso6393: "mve"
    },
    {
        name: "Peripheral Mongolian",
        type: "living",
        scope: "individual",
        iso6393: "mvf"
    },
    {
        name: "Yucua\xf1e Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mvg"
    },
    {
        name: "Mulgi",
        type: "living",
        scope: "individual",
        iso6393: "mvh"
    },
    {
        name: "Miyako",
        type: "living",
        scope: "individual",
        iso6393: "mvi"
    },
    {
        name: "Mekmek",
        type: "living",
        scope: "individual",
        iso6393: "mvk"
    },
    {
        name: "Mbara (Australia)",
        type: "extinct",
        scope: "individual",
        iso6393: "mvl"
    },
    {
        name: "Muya",
        type: "living",
        scope: "individual",
        iso6393: "mvm"
    },
    {
        name: "Minaveha",
        type: "living",
        scope: "individual",
        iso6393: "mvn"
    },
    {
        name: "Marovo",
        type: "living",
        scope: "individual",
        iso6393: "mvo"
    },
    {
        name: "Duri",
        type: "living",
        scope: "individual",
        iso6393: "mvp"
    },
    {
        name: "Moere",
        type: "living",
        scope: "individual",
        iso6393: "mvq"
    },
    {
        name: "Marau",
        type: "living",
        scope: "individual",
        iso6393: "mvr"
    },
    {
        name: "Massep",
        type: "living",
        scope: "individual",
        iso6393: "mvs"
    },
    {
        name: "Mpotovoro",
        type: "living",
        scope: "individual",
        iso6393: "mvt"
    },
    {
        name: "Marfa",
        type: "living",
        scope: "individual",
        iso6393: "mvu"
    },
    {
        name: "Tagal Murut",
        type: "living",
        scope: "individual",
        iso6393: "mvv"
    },
    {
        name: "Machinga",
        type: "living",
        scope: "individual",
        iso6393: "mvw"
    },
    {
        name: "Meoswar",
        type: "living",
        scope: "individual",
        iso6393: "mvx"
    },
    {
        name: "Indus Kohistani",
        type: "living",
        scope: "individual",
        iso6393: "mvy"
    },
    {
        name: "Mesqan",
        type: "living",
        scope: "individual",
        iso6393: "mvz"
    },
    {
        name: "Mwatebu",
        type: "living",
        scope: "individual",
        iso6393: "mwa"
    },
    {
        name: "Juwal",
        type: "living",
        scope: "individual",
        iso6393: "mwb"
    },
    {
        name: "Are",
        type: "living",
        scope: "individual",
        iso6393: "mwc"
    },
    {
        name: "Mwera (Chimwera)",
        type: "living",
        scope: "individual",
        iso6393: "mwe"
    },
    {
        name: "Murrinh-Patha",
        type: "living",
        scope: "individual",
        iso6393: "mwf"
    },
    {
        name: "Aiklep",
        type: "living",
        scope: "individual",
        iso6393: "mwg"
    },
    {
        name: "Mouk-Aria",
        type: "living",
        scope: "individual",
        iso6393: "mwh"
    },
    {
        name: "Labo",
        type: "living",
        scope: "individual",
        iso6393: "mwi"
    },
    {
        name: "Kita Maninkakan",
        type: "living",
        scope: "individual",
        iso6393: "mwk"
    },
    {
        name: "Mirandese",
        type: "living",
        scope: "individual",
        iso6393: "mwl",
        iso6392B: "mwl",
        iso6392T: "mwl"
    },
    {
        name: "Sar",
        type: "living",
        scope: "individual",
        iso6393: "mwm"
    },
    {
        name: "Nyamwanga",
        type: "living",
        scope: "individual",
        iso6393: "mwn"
    },
    {
        name: "Central Maewo",
        type: "living",
        scope: "individual",
        iso6393: "mwo"
    },
    {
        name: "Kala Lagaw Ya",
        type: "living",
        scope: "individual",
        iso6393: "mwp"
    },
    {
        name: "M\xfcn Chin",
        type: "living",
        scope: "individual",
        iso6393: "mwq"
    },
    {
        name: "Marwari",
        type: "living",
        scope: "macrolanguage",
        iso6393: "mwr",
        iso6392B: "mwr",
        iso6392T: "mwr"
    },
    {
        name: "Mwimbi-Muthambi",
        type: "living",
        scope: "individual",
        iso6393: "mws"
    },
    {
        name: "Moken",
        type: "living",
        scope: "individual",
        iso6393: "mwt"
    },
    {
        name: "Mittu",
        type: "extinct",
        scope: "individual",
        iso6393: "mwu"
    },
    {
        name: "Mentawai",
        type: "living",
        scope: "individual",
        iso6393: "mwv"
    },
    {
        name: "Hmong Daw",
        type: "living",
        scope: "individual",
        iso6393: "mww"
    },
    {
        name: "Moingi",
        type: "living",
        scope: "individual",
        iso6393: "mwz"
    },
    {
        name: "Northwest Oaxaca Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mxa"
    },
    {
        name: "Tezoatl\xe1n Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mxb"
    },
    {
        name: "Manyika",
        type: "living",
        scope: "individual",
        iso6393: "mxc"
    },
    {
        name: "Modang",
        type: "living",
        scope: "individual",
        iso6393: "mxd"
    },
    {
        name: "Mele-Fila",
        type: "living",
        scope: "individual",
        iso6393: "mxe"
    },
    {
        name: "Malgbe",
        type: "living",
        scope: "individual",
        iso6393: "mxf"
    },
    {
        name: "Mbangala",
        type: "living",
        scope: "individual",
        iso6393: "mxg"
    },
    {
        name: "Mvuba",
        type: "living",
        scope: "individual",
        iso6393: "mxh"
    },
    {
        name: "Mozarabic",
        type: "historical",
        scope: "individual",
        iso6393: "mxi"
    },
    {
        name: "Miju-Mishmi",
        type: "living",
        scope: "individual",
        iso6393: "mxj"
    },
    {
        name: "Monumbo",
        type: "living",
        scope: "individual",
        iso6393: "mxk"
    },
    {
        name: "Maxi Gbe",
        type: "living",
        scope: "individual",
        iso6393: "mxl"
    },
    {
        name: "Meramera",
        type: "living",
        scope: "individual",
        iso6393: "mxm"
    },
    {
        name: "Moi (Indonesia)",
        type: "living",
        scope: "individual",
        iso6393: "mxn"
    },
    {
        name: "Mbowe",
        type: "living",
        scope: "individual",
        iso6393: "mxo"
    },
    {
        name: "Tlahuitoltepec Mixe",
        type: "living",
        scope: "individual",
        iso6393: "mxp"
    },
    {
        name: "Juquila Mixe",
        type: "living",
        scope: "individual",
        iso6393: "mxq"
    },
    {
        name: "Murik (Malaysia)",
        type: "living",
        scope: "individual",
        iso6393: "mxr"
    },
    {
        name: "Huitepec Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mxs"
    },
    {
        name: "Jamiltepec Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mxt"
    },
    {
        name: "Mada (Cameroon)",
        type: "living",
        scope: "individual",
        iso6393: "mxu"
    },
    {
        name: "Metlat\xf3noc Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mxv"
    },
    {
        name: "Namo",
        type: "living",
        scope: "individual",
        iso6393: "mxw"
    },
    {
        name: "Mahou",
        type: "living",
        scope: "individual",
        iso6393: "mxx"
    },
    {
        name: "Southeastern Nochixtl\xe1n Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mxy"
    },
    {
        name: "Central Masela",
        type: "living",
        scope: "individual",
        iso6393: "mxz"
    },
    {
        name: "Burmese",
        type: "living",
        scope: "individual",
        iso6393: "mya",
        iso6392B: "bur",
        iso6392T: "mya",
        iso6391: "my"
    },
    {
        name: "Mbay",
        type: "living",
        scope: "individual",
        iso6393: "myb"
    },
    {
        name: "Mayeka",
        type: "living",
        scope: "individual",
        iso6393: "myc"
    },
    {
        name: "Myene",
        type: "living",
        scope: "individual",
        iso6393: "mye"
    },
    {
        name: "Bambassi",
        type: "living",
        scope: "individual",
        iso6393: "myf"
    },
    {
        name: "Manta",
        type: "living",
        scope: "individual",
        iso6393: "myg"
    },
    {
        name: "Makah",
        type: "living",
        scope: "individual",
        iso6393: "myh"
    },
    {
        name: "Mangayat",
        type: "living",
        scope: "individual",
        iso6393: "myj"
    },
    {
        name: "Mamara Senoufo",
        type: "living",
        scope: "individual",
        iso6393: "myk"
    },
    {
        name: "Moma",
        type: "living",
        scope: "individual",
        iso6393: "myl"
    },
    {
        name: "Me'en",
        type: "living",
        scope: "individual",
        iso6393: "mym"
    },
    {
        name: "Anfillo",
        type: "living",
        scope: "individual",
        iso6393: "myo"
    },
    {
        name: "Pirah\xe3",
        type: "living",
        scope: "individual",
        iso6393: "myp"
    },
    {
        name: "Muniche",
        type: "living",
        scope: "individual",
        iso6393: "myr"
    },
    {
        name: "Mesmes",
        type: "extinct",
        scope: "individual",
        iso6393: "mys"
    },
    {
        name: "Munduruk\xfa",
        type: "living",
        scope: "individual",
        iso6393: "myu"
    },
    {
        name: "Erzya",
        type: "living",
        scope: "individual",
        iso6393: "myv",
        iso6392B: "myv",
        iso6392T: "myv"
    },
    {
        name: "Muyuw",
        type: "living",
        scope: "individual",
        iso6393: "myw"
    },
    {
        name: "Masaaba",
        type: "living",
        scope: "individual",
        iso6393: "myx"
    },
    {
        name: "Macuna",
        type: "living",
        scope: "individual",
        iso6393: "myy"
    },
    {
        name: "Classical Mandaic",
        type: "historical",
        scope: "individual",
        iso6393: "myz"
    },
    {
        name: "Santa Mar\xeda Zacatepec Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "mza"
    },
    {
        name: "Tumzabt",
        type: "living",
        scope: "individual",
        iso6393: "mzb"
    },
    {
        name: "Madagascar Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "mzc"
    },
    {
        name: "Malimba",
        type: "living",
        scope: "individual",
        iso6393: "mzd"
    },
    {
        name: "Morawa",
        type: "living",
        scope: "individual",
        iso6393: "mze"
    },
    {
        name: "Monastic Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "mzg"
    },
    {
        name: "Wich\xed Lhamt\xe9s G\xfcisnay",
        type: "living",
        scope: "individual",
        iso6393: "mzh"
    },
    {
        name: "Ixcatl\xe1n Mazatec",
        type: "living",
        scope: "individual",
        iso6393: "mzi"
    },
    {
        name: "Manya",
        type: "living",
        scope: "individual",
        iso6393: "mzj"
    },
    {
        name: "Nigeria Mambila",
        type: "living",
        scope: "individual",
        iso6393: "mzk"
    },
    {
        name: "Mazatl\xe1n Mixe",
        type: "living",
        scope: "individual",
        iso6393: "mzl"
    },
    {
        name: "Mumuye",
        type: "living",
        scope: "individual",
        iso6393: "mzm"
    },
    {
        name: "Mazanderani",
        type: "living",
        scope: "individual",
        iso6393: "mzn"
    },
    {
        name: "Matipuhy",
        type: "extinct",
        scope: "individual",
        iso6393: "mzo"
    },
    {
        name: "Movima",
        type: "living",
        scope: "individual",
        iso6393: "mzp"
    },
    {
        name: "Mori Atas",
        type: "living",
        scope: "individual",
        iso6393: "mzq"
    },
    {
        name: "Mar\xfabo",
        type: "living",
        scope: "individual",
        iso6393: "mzr"
    },
    {
        name: "Macanese",
        type: "living",
        scope: "individual",
        iso6393: "mzs"
    },
    {
        name: "Mintil",
        type: "living",
        scope: "individual",
        iso6393: "mzt"
    },
    {
        name: "Inapang",
        type: "living",
        scope: "individual",
        iso6393: "mzu"
    },
    {
        name: "Manza",
        type: "living",
        scope: "individual",
        iso6393: "mzv"
    },
    {
        name: "Deg",
        type: "living",
        scope: "individual",
        iso6393: "mzw"
    },
    {
        name: "Mawayana",
        type: "living",
        scope: "individual",
        iso6393: "mzx"
    },
    {
        name: "Mozambican Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "mzy"
    },
    {
        name: "Maiadomu",
        type: "living",
        scope: "individual",
        iso6393: "mzz"
    },
    {
        name: "Namla",
        type: "living",
        scope: "individual",
        iso6393: "naa"
    },
    {
        name: "Southern Nambiku\xe1ra",
        type: "living",
        scope: "individual",
        iso6393: "nab"
    },
    {
        name: "Narak",
        type: "living",
        scope: "individual",
        iso6393: "nac"
    },
    {
        name: "Naka'ela",
        type: "extinct",
        scope: "individual",
        iso6393: "nae"
    },
    {
        name: "Nabak",
        type: "living",
        scope: "individual",
        iso6393: "naf"
    },
    {
        name: "Naga Pidgin",
        type: "living",
        scope: "individual",
        iso6393: "nag"
    },
    {
        name: "Nalu",
        type: "living",
        scope: "individual",
        iso6393: "naj"
    },
    {
        name: "Nakanai",
        type: "living",
        scope: "individual",
        iso6393: "nak"
    },
    {
        name: "Nalik",
        type: "living",
        scope: "individual",
        iso6393: "nal"
    },
    {
        name: "Ngan'gityemerri",
        type: "living",
        scope: "individual",
        iso6393: "nam"
    },
    {
        name: "Min Nan Chinese",
        type: "living",
        scope: "individual",
        iso6393: "nan"
    },
    {
        name: "Naaba",
        type: "living",
        scope: "individual",
        iso6393: "nao"
    },
    {
        name: "Neapolitan",
        type: "living",
        scope: "individual",
        iso6393: "nap",
        iso6392B: "nap",
        iso6392T: "nap"
    },
    {
        name: "Khoekhoe",
        type: "living",
        scope: "individual",
        iso6393: "naq"
    },
    {
        name: "Iguta",
        type: "living",
        scope: "individual",
        iso6393: "nar"
    },
    {
        name: "Naasioi",
        type: "living",
        scope: "individual",
        iso6393: "nas"
    },
    {
        name: "Ca̱hungwa̱rya̱",
        type: "living",
        scope: "individual",
        iso6393: "nat"
    },
    {
        name: "Nauru",
        type: "living",
        scope: "individual",
        iso6393: "nau",
        iso6392B: "nau",
        iso6392T: "nau",
        iso6391: "na"
    },
    {
        name: "Navajo",
        type: "living",
        scope: "individual",
        iso6393: "nav",
        iso6392B: "nav",
        iso6392T: "nav",
        iso6391: "nv"
    },
    {
        name: "Nawuri",
        type: "living",
        scope: "individual",
        iso6393: "naw"
    },
    {
        name: "Nakwi",
        type: "living",
        scope: "individual",
        iso6393: "nax"
    },
    {
        name: "Ngarrindjeri",
        type: "extinct",
        scope: "individual",
        iso6393: "nay"
    },
    {
        name: "Coatepec Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "naz"
    },
    {
        name: "Nyemba",
        type: "living",
        scope: "individual",
        iso6393: "nba"
    },
    {
        name: "Ndoe",
        type: "living",
        scope: "individual",
        iso6393: "nbb"
    },
    {
        name: "Chang Naga",
        type: "living",
        scope: "individual",
        iso6393: "nbc"
    },
    {
        name: "Ngbinda",
        type: "living",
        scope: "individual",
        iso6393: "nbd"
    },
    {
        name: "Konyak Naga",
        type: "living",
        scope: "individual",
        iso6393: "nbe"
    },
    {
        name: "Nagarchal",
        type: "living",
        scope: "individual",
        iso6393: "nbg"
    },
    {
        name: "Ngamo",
        type: "living",
        scope: "individual",
        iso6393: "nbh"
    },
    {
        name: "Mao Naga",
        type: "living",
        scope: "individual",
        iso6393: "nbi"
    },
    {
        name: "Ngarinyman",
        type: "living",
        scope: "individual",
        iso6393: "nbj"
    },
    {
        name: "Nake",
        type: "living",
        scope: "individual",
        iso6393: "nbk"
    },
    {
        name: "South Ndebele",
        type: "living",
        scope: "individual",
        iso6393: "nbl",
        iso6392B: "nbl",
        iso6392T: "nbl",
        iso6391: "nr"
    },
    {
        name: "Ngbaka Ma'bo",
        type: "living",
        scope: "individual",
        iso6393: "nbm"
    },
    {
        name: "Kuri",
        type: "living",
        scope: "individual",
        iso6393: "nbn"
    },
    {
        name: "Nkukoli",
        type: "living",
        scope: "individual",
        iso6393: "nbo"
    },
    {
        name: "Nnam",
        type: "living",
        scope: "individual",
        iso6393: "nbp"
    },
    {
        name: "Nggem",
        type: "living",
        scope: "individual",
        iso6393: "nbq"
    },
    {
        name: "Numana",
        type: "living",
        scope: "individual",
        iso6393: "nbr"
    },
    {
        name: "Namibian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "nbs"
    },
    {
        name: "Na",
        type: "living",
        scope: "individual",
        iso6393: "nbt"
    },
    {
        name: "Rongmei Naga",
        type: "living",
        scope: "individual",
        iso6393: "nbu"
    },
    {
        name: "Ngamambo",
        type: "living",
        scope: "individual",
        iso6393: "nbv"
    },
    {
        name: "Southern Ngbandi",
        type: "living",
        scope: "individual",
        iso6393: "nbw"
    },
    {
        name: "Ningera",
        type: "living",
        scope: "individual",
        iso6393: "nby"
    },
    {
        name: "Iyo",
        type: "living",
        scope: "individual",
        iso6393: "nca"
    },
    {
        name: "Central Nicobarese",
        type: "living",
        scope: "individual",
        iso6393: "ncb"
    },
    {
        name: "Ponam",
        type: "living",
        scope: "individual",
        iso6393: "ncc"
    },
    {
        name: "Nachering",
        type: "living",
        scope: "individual",
        iso6393: "ncd"
    },
    {
        name: "Yale",
        type: "living",
        scope: "individual",
        iso6393: "nce"
    },
    {
        name: "Notsi",
        type: "living",
        scope: "individual",
        iso6393: "ncf"
    },
    {
        name: "Nisga'a",
        type: "living",
        scope: "individual",
        iso6393: "ncg"
    },
    {
        name: "Central Huasteca Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "nch"
    },
    {
        name: "Classical Nahuatl",
        type: "historical",
        scope: "individual",
        iso6393: "nci"
    },
    {
        name: "Northern Puebla Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "ncj"
    },
    {
        name: "Na-kara",
        type: "living",
        scope: "individual",
        iso6393: "nck"
    },
    {
        name: "Michoac\xe1n Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "ncl"
    },
    {
        name: "Nambo",
        type: "living",
        scope: "individual",
        iso6393: "ncm"
    },
    {
        name: "Nauna",
        type: "living",
        scope: "individual",
        iso6393: "ncn"
    },
    {
        name: "Sibe",
        type: "living",
        scope: "individual",
        iso6393: "nco"
    },
    {
        name: "Northern Katang",
        type: "living",
        scope: "individual",
        iso6393: "ncq"
    },
    {
        name: "Ncane",
        type: "living",
        scope: "individual",
        iso6393: "ncr"
    },
    {
        name: "Nicaraguan Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "ncs"
    },
    {
        name: "Chothe Naga",
        type: "living",
        scope: "individual",
        iso6393: "nct"
    },
    {
        name: "Chumburung",
        type: "living",
        scope: "individual",
        iso6393: "ncu"
    },
    {
        name: "Central Puebla Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "ncx"
    },
    {
        name: "Natchez",
        type: "extinct",
        scope: "individual",
        iso6393: "ncz"
    },
    {
        name: "Ndasa",
        type: "living",
        scope: "individual",
        iso6393: "nda"
    },
    {
        name: "Kenswei Nsei",
        type: "living",
        scope: "individual",
        iso6393: "ndb"
    },
    {
        name: "Ndau",
        type: "living",
        scope: "individual",
        iso6393: "ndc"
    },
    {
        name: "Nde-Nsele-Nta",
        type: "living",
        scope: "individual",
        iso6393: "ndd"
    },
    {
        name: "North Ndebele",
        type: "living",
        scope: "individual",
        iso6393: "nde",
        iso6392B: "nde",
        iso6392T: "nde",
        iso6391: "nd"
    },
    {
        name: "Nadruvian",
        type: "historical",
        scope: "individual",
        iso6393: "ndf"
    },
    {
        name: "Ndengereko",
        type: "living",
        scope: "individual",
        iso6393: "ndg"
    },
    {
        name: "Ndali",
        type: "living",
        scope: "individual",
        iso6393: "ndh"
    },
    {
        name: "Samba Leko",
        type: "living",
        scope: "individual",
        iso6393: "ndi"
    },
    {
        name: "Ndamba",
        type: "living",
        scope: "individual",
        iso6393: "ndj"
    },
    {
        name: "Ndaka",
        type: "living",
        scope: "individual",
        iso6393: "ndk"
    },
    {
        name: "Ndolo",
        type: "living",
        scope: "individual",
        iso6393: "ndl"
    },
    {
        name: "Ndam",
        type: "living",
        scope: "individual",
        iso6393: "ndm"
    },
    {
        name: "Ngundi",
        type: "living",
        scope: "individual",
        iso6393: "ndn"
    },
    {
        name: "Ndonga",
        type: "living",
        scope: "individual",
        iso6393: "ndo",
        iso6392B: "ndo",
        iso6392T: "ndo",
        iso6391: "ng"
    },
    {
        name: "Ndo",
        type: "living",
        scope: "individual",
        iso6393: "ndp"
    },
    {
        name: "Ndombe",
        type: "living",
        scope: "individual",
        iso6393: "ndq"
    },
    {
        name: "Ndoola",
        type: "living",
        scope: "individual",
        iso6393: "ndr"
    },
    {
        name: "Low German",
        type: "living",
        scope: "individual",
        iso6393: "nds",
        iso6392B: "nds",
        iso6392T: "nds"
    },
    {
        name: "Ndunga",
        type: "living",
        scope: "individual",
        iso6393: "ndt"
    },
    {
        name: "Dugun",
        type: "living",
        scope: "individual",
        iso6393: "ndu"
    },
    {
        name: "Ndut",
        type: "living",
        scope: "individual",
        iso6393: "ndv"
    },
    {
        name: "Ndobo",
        type: "living",
        scope: "individual",
        iso6393: "ndw"
    },
    {
        name: "Nduga",
        type: "living",
        scope: "individual",
        iso6393: "ndx"
    },
    {
        name: "Lutos",
        type: "living",
        scope: "individual",
        iso6393: "ndy"
    },
    {
        name: "Ndogo",
        type: "living",
        scope: "individual",
        iso6393: "ndz"
    },
    {
        name: "Eastern Ngad'a",
        type: "living",
        scope: "individual",
        iso6393: "nea"
    },
    {
        name: "Toura (C\xf4te d'Ivoire)",
        type: "living",
        scope: "individual",
        iso6393: "neb"
    },
    {
        name: "Nedebang",
        type: "living",
        scope: "individual",
        iso6393: "nec"
    },
    {
        name: "Nde-Gbite",
        type: "living",
        scope: "individual",
        iso6393: "ned"
    },
    {
        name: "N\xeal\xeamwa-Nixumwak",
        type: "living",
        scope: "individual",
        iso6393: "nee"
    },
    {
        name: "Nefamese",
        type: "living",
        scope: "individual",
        iso6393: "nef"
    },
    {
        name: "Negidal",
        type: "living",
        scope: "individual",
        iso6393: "neg"
    },
    {
        name: "Nyenkha",
        type: "living",
        scope: "individual",
        iso6393: "neh"
    },
    {
        name: "Neo-Hittite",
        type: "ancient",
        scope: "individual",
        iso6393: "nei"
    },
    {
        name: "Neko",
        type: "living",
        scope: "individual",
        iso6393: "nej"
    },
    {
        name: "Neku",
        type: "living",
        scope: "individual",
        iso6393: "nek"
    },
    {
        name: "Nemi",
        type: "living",
        scope: "individual",
        iso6393: "nem"
    },
    {
        name: "Nengone",
        type: "living",
        scope: "individual",
        iso6393: "nen"
    },
    {
        name: "N\xe1-Meo",
        type: "living",
        scope: "individual",
        iso6393: "neo"
    },
    {
        name: "Nepali (macrolanguage)",
        type: "living",
        scope: "macrolanguage",
        iso6393: "nep",
        iso6392B: "nep",
        iso6392T: "nep",
        iso6391: "ne"
    },
    {
        name: "North Central Mixe",
        type: "living",
        scope: "individual",
        iso6393: "neq"
    },
    {
        name: "Yahadian",
        type: "living",
        scope: "individual",
        iso6393: "ner"
    },
    {
        name: "Bhoti Kinnauri",
        type: "living",
        scope: "individual",
        iso6393: "nes"
    },
    {
        name: "Nete",
        type: "living",
        scope: "individual",
        iso6393: "net"
    },
    {
        name: "Neo",
        type: "constructed",
        scope: "individual",
        iso6393: "neu"
    },
    {
        name: "Nyaheun",
        type: "living",
        scope: "individual",
        iso6393: "nev"
    },
    {
        name: "Newari",
        type: "living",
        scope: "individual",
        iso6393: "new",
        iso6392B: "new",
        iso6392T: "new"
    },
    {
        name: "Neme",
        type: "living",
        scope: "individual",
        iso6393: "nex"
    },
    {
        name: "Neyo",
        type: "living",
        scope: "individual",
        iso6393: "ney"
    },
    {
        name: "Nez Perce",
        type: "living",
        scope: "individual",
        iso6393: "nez"
    },
    {
        name: "Dhao",
        type: "living",
        scope: "individual",
        iso6393: "nfa"
    },
    {
        name: "Ahwai",
        type: "living",
        scope: "individual",
        iso6393: "nfd"
    },
    {
        name: "Ayiwo",
        type: "living",
        scope: "individual",
        iso6393: "nfl"
    },
    {
        name: "Nafaanra",
        type: "living",
        scope: "individual",
        iso6393: "nfr"
    },
    {
        name: "Mfumte",
        type: "living",
        scope: "individual",
        iso6393: "nfu"
    },
    {
        name: "Ngbaka",
        type: "living",
        scope: "individual",
        iso6393: "nga"
    },
    {
        name: "Northern Ngbandi",
        type: "living",
        scope: "individual",
        iso6393: "ngb"
    },
    {
        name: "Ngombe (Democratic Republic of Congo)",
        type: "living",
        scope: "individual",
        iso6393: "ngc"
    },
    {
        name: "Ngando (Central African Republic)",
        type: "living",
        scope: "individual",
        iso6393: "ngd"
    },
    {
        name: "Ngemba",
        type: "living",
        scope: "individual",
        iso6393: "nge"
    },
    {
        name: "Ngbaka Manza",
        type: "living",
        scope: "individual",
        iso6393: "ngg"
    },
    {
        name: "Nǁng",
        type: "living",
        scope: "individual",
        iso6393: "ngh"
    },
    {
        name: "Ngizim",
        type: "living",
        scope: "individual",
        iso6393: "ngi"
    },
    {
        name: "Ngie",
        type: "living",
        scope: "individual",
        iso6393: "ngj"
    },
    {
        name: "Dalabon",
        type: "living",
        scope: "individual",
        iso6393: "ngk"
    },
    {
        name: "Lomwe",
        type: "living",
        scope: "individual",
        iso6393: "ngl"
    },
    {
        name: "Ngatik Men's Creole",
        type: "living",
        scope: "individual",
        iso6393: "ngm"
    },
    {
        name: "Ngwo",
        type: "living",
        scope: "individual",
        iso6393: "ngn"
    },
    {
        name: "Ngoni",
        type: "living",
        scope: "individual",
        iso6393: "ngo"
    },
    {
        name: "Ngulu",
        type: "living",
        scope: "individual",
        iso6393: "ngp"
    },
    {
        name: "Ngurimi",
        type: "living",
        scope: "individual",
        iso6393: "ngq"
    },
    {
        name: "Engdewu",
        type: "living",
        scope: "individual",
        iso6393: "ngr"
    },
    {
        name: "Gvoko",
        type: "living",
        scope: "individual",
        iso6393: "ngs"
    },
    {
        name: "Kriang",
        type: "living",
        scope: "individual",
        iso6393: "ngt"
    },
    {
        name: "Guerrero Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "ngu"
    },
    {
        name: "Nagumi",
        type: "extinct",
        scope: "individual",
        iso6393: "ngv"
    },
    {
        name: "Ngwaba",
        type: "living",
        scope: "individual",
        iso6393: "ngw"
    },
    {
        name: "Nggwahyi",
        type: "living",
        scope: "individual",
        iso6393: "ngx"
    },
    {
        name: "Tibea",
        type: "living",
        scope: "individual",
        iso6393: "ngy"
    },
    {
        name: "Ngungwel",
        type: "living",
        scope: "individual",
        iso6393: "ngz"
    },
    {
        name: "Nhanda",
        type: "living",
        scope: "individual",
        iso6393: "nha"
    },
    {
        name: "Beng",
        type: "living",
        scope: "individual",
        iso6393: "nhb"
    },
    {
        name: "Tabasco Nahuatl",
        type: "extinct",
        scope: "individual",
        iso6393: "nhc"
    },
    {
        name: "Chirip\xe1",
        type: "living",
        scope: "individual",
        iso6393: "nhd"
    },
    {
        name: "Eastern Huasteca Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "nhe"
    },
    {
        name: "Nhuwala",
        type: "living",
        scope: "individual",
        iso6393: "nhf"
    },
    {
        name: "Tetelcingo Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "nhg"
    },
    {
        name: "Nahari",
        type: "living",
        scope: "individual",
        iso6393: "nhh"
    },
    {
        name: "Zacatl\xe1n-Ahuacatl\xe1n-Tepetzintla Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "nhi"
    },
    {
        name: "Isthmus-Cosoleacaque Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "nhk"
    },
    {
        name: "Morelos Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "nhm"
    },
    {
        name: "Central Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "nhn"
    },
    {
        name: "Takuu",
        type: "living",
        scope: "individual",
        iso6393: "nho"
    },
    {
        name: "Isthmus-Pajapan Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "nhp"
    },
    {
        name: "Huaxcaleca Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "nhq"
    },
    {
        name: "Naro",
        type: "living",
        scope: "individual",
        iso6393: "nhr"
    },
    {
        name: "Ometepec Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "nht"
    },
    {
        name: "Noone",
        type: "living",
        scope: "individual",
        iso6393: "nhu"
    },
    {
        name: "Temascaltepec Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "nhv"
    },
    {
        name: "Western Huasteca Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "nhw"
    },
    {
        name: "Isthmus-Mecayapan Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "nhx"
    },
    {
        name: "Northern Oaxaca Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "nhy"
    },
    {
        name: "Santa Mar\xeda La Alta Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "nhz"
    },
    {
        name: "Nias",
        type: "living",
        scope: "individual",
        iso6393: "nia",
        iso6392B: "nia",
        iso6392T: "nia"
    },
    {
        name: "Nakame",
        type: "living",
        scope: "individual",
        iso6393: "nib"
    },
    {
        name: "Ngandi",
        type: "extinct",
        scope: "individual",
        iso6393: "nid"
    },
    {
        name: "Niellim",
        type: "living",
        scope: "individual",
        iso6393: "nie"
    },
    {
        name: "Nek",
        type: "living",
        scope: "individual",
        iso6393: "nif"
    },
    {
        name: "Ngalakgan",
        type: "extinct",
        scope: "individual",
        iso6393: "nig"
    },
    {
        name: "Nyiha (Tanzania)",
        type: "living",
        scope: "individual",
        iso6393: "nih"
    },
    {
        name: "Nii",
        type: "living",
        scope: "individual",
        iso6393: "nii"
    },
    {
        name: "Ngaju",
        type: "living",
        scope: "individual",
        iso6393: "nij"
    },
    {
        name: "Southern Nicobarese",
        type: "living",
        scope: "individual",
        iso6393: "nik"
    },
    {
        name: "Nila",
        type: "living",
        scope: "individual",
        iso6393: "nil"
    },
    {
        name: "Nilamba",
        type: "living",
        scope: "individual",
        iso6393: "nim"
    },
    {
        name: "Ninzo",
        type: "living",
        scope: "individual",
        iso6393: "nin"
    },
    {
        name: "Nganasan",
        type: "living",
        scope: "individual",
        iso6393: "nio"
    },
    {
        name: "Nandi",
        type: "living",
        scope: "individual",
        iso6393: "niq"
    },
    {
        name: "Nimboran",
        type: "living",
        scope: "individual",
        iso6393: "nir"
    },
    {
        name: "Nimi",
        type: "living",
        scope: "individual",
        iso6393: "nis"
    },
    {
        name: "Southeastern Kolami",
        type: "living",
        scope: "individual",
        iso6393: "nit"
    },
    {
        name: "Niuean",
        type: "living",
        scope: "individual",
        iso6393: "niu",
        iso6392B: "niu",
        iso6392T: "niu"
    },
    {
        name: "Gilyak",
        type: "living",
        scope: "individual",
        iso6393: "niv"
    },
    {
        name: "Nimo",
        type: "living",
        scope: "individual",
        iso6393: "niw"
    },
    {
        name: "Hema",
        type: "living",
        scope: "individual",
        iso6393: "nix"
    },
    {
        name: "Ngiti",
        type: "living",
        scope: "individual",
        iso6393: "niy"
    },
    {
        name: "Ningil",
        type: "living",
        scope: "individual",
        iso6393: "niz"
    },
    {
        name: "Nzanyi",
        type: "living",
        scope: "individual",
        iso6393: "nja"
    },
    {
        name: "Nocte Naga",
        type: "living",
        scope: "individual",
        iso6393: "njb"
    },
    {
        name: "Ndonde Hamba",
        type: "living",
        scope: "individual",
        iso6393: "njd"
    },
    {
        name: "Lotha Naga",
        type: "living",
        scope: "individual",
        iso6393: "njh"
    },
    {
        name: "Gudanji",
        type: "living",
        scope: "individual",
        iso6393: "nji"
    },
    {
        name: "Njen",
        type: "living",
        scope: "individual",
        iso6393: "njj"
    },
    {
        name: "Njalgulgule",
        type: "living",
        scope: "individual",
        iso6393: "njl"
    },
    {
        name: "Angami Naga",
        type: "living",
        scope: "individual",
        iso6393: "njm"
    },
    {
        name: "Liangmai Naga",
        type: "living",
        scope: "individual",
        iso6393: "njn"
    },
    {
        name: "Ao Naga",
        type: "living",
        scope: "individual",
        iso6393: "njo"
    },
    {
        name: "Njerep",
        type: "living",
        scope: "individual",
        iso6393: "njr"
    },
    {
        name: "Nisa",
        type: "living",
        scope: "individual",
        iso6393: "njs"
    },
    {
        name: "Ndyuka-Trio Pidgin",
        type: "living",
        scope: "individual",
        iso6393: "njt"
    },
    {
        name: "Ngadjunmaya",
        type: "living",
        scope: "individual",
        iso6393: "nju"
    },
    {
        name: "Kunyi",
        type: "living",
        scope: "individual",
        iso6393: "njx"
    },
    {
        name: "Njyem",
        type: "living",
        scope: "individual",
        iso6393: "njy"
    },
    {
        name: "Nyishi",
        type: "living",
        scope: "individual",
        iso6393: "njz"
    },
    {
        name: "Nkoya",
        type: "living",
        scope: "individual",
        iso6393: "nka"
    },
    {
        name: "Khoibu Naga",
        type: "living",
        scope: "individual",
        iso6393: "nkb"
    },
    {
        name: "Nkongho",
        type: "living",
        scope: "individual",
        iso6393: "nkc"
    },
    {
        name: "Koireng",
        type: "living",
        scope: "individual",
        iso6393: "nkd"
    },
    {
        name: "Duke",
        type: "living",
        scope: "individual",
        iso6393: "nke"
    },
    {
        name: "Inpui Naga",
        type: "living",
        scope: "individual",
        iso6393: "nkf"
    },
    {
        name: "Nekgini",
        type: "living",
        scope: "individual",
        iso6393: "nkg"
    },
    {
        name: "Khezha Naga",
        type: "living",
        scope: "individual",
        iso6393: "nkh"
    },
    {
        name: "Thangal Naga",
        type: "living",
        scope: "individual",
        iso6393: "nki"
    },
    {
        name: "Nakai",
        type: "living",
        scope: "individual",
        iso6393: "nkj"
    },
    {
        name: "Nokuku",
        type: "living",
        scope: "individual",
        iso6393: "nkk"
    },
    {
        name: "Namat",
        type: "living",
        scope: "individual",
        iso6393: "nkm"
    },
    {
        name: "Nkangala",
        type: "living",
        scope: "individual",
        iso6393: "nkn"
    },
    {
        name: "Nkonya",
        type: "living",
        scope: "individual",
        iso6393: "nko"
    },
    {
        name: "Niuatoputapu",
        type: "extinct",
        scope: "individual",
        iso6393: "nkp"
    },
    {
        name: "Nkami",
        type: "living",
        scope: "individual",
        iso6393: "nkq"
    },
    {
        name: "Nukuoro",
        type: "living",
        scope: "individual",
        iso6393: "nkr"
    },
    {
        name: "North Asmat",
        type: "living",
        scope: "individual",
        iso6393: "nks"
    },
    {
        name: "Nyika (Tanzania)",
        type: "living",
        scope: "individual",
        iso6393: "nkt"
    },
    {
        name: "Bouna Kulango",
        type: "living",
        scope: "individual",
        iso6393: "nku"
    },
    {
        name: "Nyika (Malawi and Zambia)",
        type: "living",
        scope: "individual",
        iso6393: "nkv"
    },
    {
        name: "Nkutu",
        type: "living",
        scope: "individual",
        iso6393: "nkw"
    },
    {
        name: "Nkoroo",
        type: "living",
        scope: "individual",
        iso6393: "nkx"
    },
    {
        name: "Nkari",
        type: "living",
        scope: "individual",
        iso6393: "nkz"
    },
    {
        name: "Ngombale",
        type: "living",
        scope: "individual",
        iso6393: "nla"
    },
    {
        name: "Nalca",
        type: "living",
        scope: "individual",
        iso6393: "nlc"
    },
    {
        name: "Dutch",
        type: "living",
        scope: "individual",
        iso6393: "nld",
        iso6392B: "dut",
        iso6392T: "nld",
        iso6391: "nl"
    },
    {
        name: "East Nyala",
        type: "living",
        scope: "individual",
        iso6393: "nle"
    },
    {
        name: "Gela",
        type: "living",
        scope: "individual",
        iso6393: "nlg"
    },
    {
        name: "Grangali",
        type: "living",
        scope: "individual",
        iso6393: "nli"
    },
    {
        name: "Nyali",
        type: "living",
        scope: "individual",
        iso6393: "nlj"
    },
    {
        name: "Ninia Yali",
        type: "living",
        scope: "individual",
        iso6393: "nlk"
    },
    {
        name: "Nihali",
        type: "living",
        scope: "individual",
        iso6393: "nll"
    },
    {
        name: "Mankiyali",
        type: "living",
        scope: "individual",
        iso6393: "nlm"
    },
    {
        name: "Ngul",
        type: "living",
        scope: "individual",
        iso6393: "nlo"
    },
    {
        name: "Lao Naga",
        type: "living",
        scope: "individual",
        iso6393: "nlq"
    },
    {
        name: "Nchumbulu",
        type: "living",
        scope: "individual",
        iso6393: "nlu"
    },
    {
        name: "Orizaba Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "nlv"
    },
    {
        name: "Walangama",
        type: "extinct",
        scope: "individual",
        iso6393: "nlw"
    },
    {
        name: "Nahali",
        type: "living",
        scope: "individual",
        iso6393: "nlx"
    },
    {
        name: "Nyamal",
        type: "living",
        scope: "individual",
        iso6393: "nly"
    },
    {
        name: "Nal\xf6go",
        type: "living",
        scope: "individual",
        iso6393: "nlz"
    },
    {
        name: "Maram Naga",
        type: "living",
        scope: "individual",
        iso6393: "nma"
    },
    {
        name: "Big Nambas",
        type: "living",
        scope: "individual",
        iso6393: "nmb"
    },
    {
        name: "Ngam",
        type: "living",
        scope: "individual",
        iso6393: "nmc"
    },
    {
        name: "Ndumu",
        type: "living",
        scope: "individual",
        iso6393: "nmd"
    },
    {
        name: "Mzieme Naga",
        type: "living",
        scope: "individual",
        iso6393: "nme"
    },
    {
        name: "Tangkhul Naga (India)",
        type: "living",
        scope: "individual",
        iso6393: "nmf"
    },
    {
        name: "Kwasio",
        type: "living",
        scope: "individual",
        iso6393: "nmg"
    },
    {
        name: "Monsang Naga",
        type: "living",
        scope: "individual",
        iso6393: "nmh"
    },
    {
        name: "Nyam",
        type: "living",
        scope: "individual",
        iso6393: "nmi"
    },
    {
        name: "Ngombe (Central African Republic)",
        type: "living",
        scope: "individual",
        iso6393: "nmj"
    },
    {
        name: "Namakura",
        type: "living",
        scope: "individual",
        iso6393: "nmk"
    },
    {
        name: "Ndemli",
        type: "living",
        scope: "individual",
        iso6393: "nml"
    },
    {
        name: "Manangba",
        type: "living",
        scope: "individual",
        iso6393: "nmm"
    },
    {
        name: "ǃX\xf3\xf5",
        type: "living",
        scope: "individual",
        iso6393: "nmn"
    },
    {
        name: "Moyon Naga",
        type: "living",
        scope: "individual",
        iso6393: "nmo"
    },
    {
        name: "Nimanbur",
        type: "extinct",
        scope: "individual",
        iso6393: "nmp"
    },
    {
        name: "Nambya",
        type: "living",
        scope: "individual",
        iso6393: "nmq"
    },
    {
        name: "Nimbari",
        type: "extinct",
        scope: "individual",
        iso6393: "nmr"
    },
    {
        name: "Letemboi",
        type: "living",
        scope: "individual",
        iso6393: "nms"
    },
    {
        name: "Namonuito",
        type: "living",
        scope: "individual",
        iso6393: "nmt"
    },
    {
        name: "Northeast Maidu",
        type: "living",
        scope: "individual",
        iso6393: "nmu"
    },
    {
        name: "Ngamini",
        type: "extinct",
        scope: "individual",
        iso6393: "nmv"
    },
    {
        name: "Nimoa",
        type: "living",
        scope: "individual",
        iso6393: "nmw"
    },
    {
        name: "Nama (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "nmx"
    },
    {
        name: "Namuyi",
        type: "living",
        scope: "individual",
        iso6393: "nmy"
    },
    {
        name: "Nawdm",
        type: "living",
        scope: "individual",
        iso6393: "nmz"
    },
    {
        name: "Nyangumarta",
        type: "living",
        scope: "individual",
        iso6393: "nna"
    },
    {
        name: "Nande",
        type: "living",
        scope: "individual",
        iso6393: "nnb"
    },
    {
        name: "Nancere",
        type: "living",
        scope: "individual",
        iso6393: "nnc"
    },
    {
        name: "West Ambae",
        type: "living",
        scope: "individual",
        iso6393: "nnd"
    },
    {
        name: "Ngandyera",
        type: "living",
        scope: "individual",
        iso6393: "nne"
    },
    {
        name: "Ngaing",
        type: "living",
        scope: "individual",
        iso6393: "nnf"
    },
    {
        name: "Maring Naga",
        type: "living",
        scope: "individual",
        iso6393: "nng"
    },
    {
        name: "Ngiemboon",
        type: "living",
        scope: "individual",
        iso6393: "nnh"
    },
    {
        name: "North Nuaulu",
        type: "living",
        scope: "individual",
        iso6393: "nni"
    },
    {
        name: "Nyangatom",
        type: "living",
        scope: "individual",
        iso6393: "nnj"
    },
    {
        name: "Nankina",
        type: "living",
        scope: "individual",
        iso6393: "nnk"
    },
    {
        name: "Northern Rengma Naga",
        type: "living",
        scope: "individual",
        iso6393: "nnl"
    },
    {
        name: "Namia",
        type: "living",
        scope: "individual",
        iso6393: "nnm"
    },
    {
        name: "Ngete",
        type: "living",
        scope: "individual",
        iso6393: "nnn"
    },
    {
        name: "Norwegian Nynorsk",
        type: "living",
        scope: "individual",
        iso6393: "nno",
        iso6392B: "nno",
        iso6392T: "nno",
        iso6391: "nn"
    },
    {
        name: "Wancho Naga",
        type: "living",
        scope: "individual",
        iso6393: "nnp"
    },
    {
        name: "Ngindo",
        type: "living",
        scope: "individual",
        iso6393: "nnq"
    },
    {
        name: "Narungga",
        type: "extinct",
        scope: "individual",
        iso6393: "nnr"
    },
    {
        name: "Nanticoke",
        type: "extinct",
        scope: "individual",
        iso6393: "nnt"
    },
    {
        name: "Dwang",
        type: "living",
        scope: "individual",
        iso6393: "nnu"
    },
    {
        name: "Nugunu (Australia)",
        type: "extinct",
        scope: "individual",
        iso6393: "nnv"
    },
    {
        name: "Southern Nuni",
        type: "living",
        scope: "individual",
        iso6393: "nnw"
    },
    {
        name: "Nyangga",
        type: "extinct",
        scope: "individual",
        iso6393: "nny"
    },
    {
        name: "Nda'nda'",
        type: "living",
        scope: "individual",
        iso6393: "nnz"
    },
    {
        name: "Woun Meu",
        type: "living",
        scope: "individual",
        iso6393: "noa"
    },
    {
        name: "Norwegian Bokm\xe5l",
        type: "living",
        scope: "individual",
        iso6393: "nob",
        iso6392B: "nob",
        iso6392T: "nob",
        iso6391: "nb"
    },
    {
        name: "Nuk",
        type: "living",
        scope: "individual",
        iso6393: "noc"
    },
    {
        name: "Northern Thai",
        type: "living",
        scope: "individual",
        iso6393: "nod"
    },
    {
        name: "Nimadi",
        type: "living",
        scope: "individual",
        iso6393: "noe"
    },
    {
        name: "Nomane",
        type: "living",
        scope: "individual",
        iso6393: "nof"
    },
    {
        name: "Nogai",
        type: "living",
        scope: "individual",
        iso6393: "nog",
        iso6392B: "nog",
        iso6392T: "nog"
    },
    {
        name: "Nomu",
        type: "living",
        scope: "individual",
        iso6393: "noh"
    },
    {
        name: "Noiri",
        type: "living",
        scope: "individual",
        iso6393: "noi"
    },
    {
        name: "Nonuya",
        type: "living",
        scope: "individual",
        iso6393: "noj"
    },
    {
        name: "Nooksack",
        type: "extinct",
        scope: "individual",
        iso6393: "nok"
    },
    {
        name: "Nomlaki",
        type: "extinct",
        scope: "individual",
        iso6393: "nol"
    },
    {
        name: "Nocam\xe1n",
        type: "extinct",
        scope: "individual",
        iso6393: "nom"
    },
    {
        name: "Old Norse",
        type: "historical",
        scope: "individual",
        iso6393: "non",
        iso6392B: "non",
        iso6392T: "non"
    },
    {
        name: "Numanggang",
        type: "living",
        scope: "individual",
        iso6393: "nop"
    },
    {
        name: "Ngongo",
        type: "living",
        scope: "individual",
        iso6393: "noq"
    },
    {
        name: "Norwegian",
        type: "living",
        scope: "macrolanguage",
        iso6393: "nor",
        iso6392B: "nor",
        iso6392T: "nor",
        iso6391: "no"
    },
    {
        name: "Eastern Nisu",
        type: "living",
        scope: "individual",
        iso6393: "nos"
    },
    {
        name: "Nomatsiguenga",
        type: "living",
        scope: "individual",
        iso6393: "not"
    },
    {
        name: "Ewage-Notu",
        type: "living",
        scope: "individual",
        iso6393: "nou"
    },
    {
        name: "Novial",
        type: "constructed",
        scope: "individual",
        iso6393: "nov"
    },
    {
        name: "Nyambo",
        type: "living",
        scope: "individual",
        iso6393: "now"
    },
    {
        name: "Noy",
        type: "living",
        scope: "individual",
        iso6393: "noy"
    },
    {
        name: "Nayi",
        type: "living",
        scope: "individual",
        iso6393: "noz"
    },
    {
        name: "Nar Phu",
        type: "living",
        scope: "individual",
        iso6393: "npa"
    },
    {
        name: "Nupbikha",
        type: "living",
        scope: "individual",
        iso6393: "npb"
    },
    {
        name: "Ponyo-Gongwang Naga",
        type: "living",
        scope: "individual",
        iso6393: "npg"
    },
    {
        name: "Phom Naga",
        type: "living",
        scope: "individual",
        iso6393: "nph"
    },
    {
        name: "Nepali (individual language)",
        type: "living",
        scope: "individual",
        iso6393: "npi"
    },
    {
        name: "Southeastern Puebla Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "npl"
    },
    {
        name: "Mondropolon",
        type: "living",
        scope: "individual",
        iso6393: "npn"
    },
    {
        name: "Pochuri Naga",
        type: "living",
        scope: "individual",
        iso6393: "npo"
    },
    {
        name: "Nipsan",
        type: "living",
        scope: "individual",
        iso6393: "nps"
    },
    {
        name: "Puimei Naga",
        type: "living",
        scope: "individual",
        iso6393: "npu"
    },
    {
        name: "Noipx",
        type: "living",
        scope: "individual",
        iso6393: "npx"
    },
    {
        name: "Napu",
        type: "living",
        scope: "individual",
        iso6393: "npy"
    },
    {
        name: "Southern Nago",
        type: "living",
        scope: "individual",
        iso6393: "nqg"
    },
    {
        name: "Kura Ede Nago",
        type: "living",
        scope: "individual",
        iso6393: "nqk"
    },
    {
        name: "Ngendelengo",
        type: "living",
        scope: "individual",
        iso6393: "nql"
    },
    {
        name: "Ndom",
        type: "living",
        scope: "individual",
        iso6393: "nqm"
    },
    {
        name: "Nen",
        type: "living",
        scope: "individual",
        iso6393: "nqn"
    },
    {
        name: "N'Ko",
        type: "living",
        scope: "individual",
        iso6393: "nqo",
        iso6392B: "nqo",
        iso6392T: "nqo"
    },
    {
        name: "Kyan-Karyaw Naga",
        type: "living",
        scope: "individual",
        iso6393: "nqq"
    },
    {
        name: "Akyaung Ari Naga",
        type: "living",
        scope: "individual",
        iso6393: "nqy"
    },
    {
        name: "Ngom",
        type: "living",
        scope: "individual",
        iso6393: "nra"
    },
    {
        name: "Nara",
        type: "living",
        scope: "individual",
        iso6393: "nrb"
    },
    {
        name: "Noric",
        type: "ancient",
        scope: "individual",
        iso6393: "nrc"
    },
    {
        name: "Southern Rengma Naga",
        type: "living",
        scope: "individual",
        iso6393: "nre"
    },
    {
        name: "J\xe8rriais",
        type: "living",
        scope: "individual",
        iso6393: "nrf"
    },
    {
        name: "Narango",
        type: "living",
        scope: "individual",
        iso6393: "nrg"
    },
    {
        name: "Chokri Naga",
        type: "living",
        scope: "individual",
        iso6393: "nri"
    },
    {
        name: "Ngarla",
        type: "living",
        scope: "individual",
        iso6393: "nrk"
    },
    {
        name: "Ngarluma",
        type: "living",
        scope: "individual",
        iso6393: "nrl"
    },
    {
        name: "Narom",
        type: "living",
        scope: "individual",
        iso6393: "nrm"
    },
    {
        name: "Norn",
        type: "extinct",
        scope: "individual",
        iso6393: "nrn"
    },
    {
        name: "North Picene",
        type: "ancient",
        scope: "individual",
        iso6393: "nrp"
    },
    {
        name: "Norra",
        type: "extinct",
        scope: "individual",
        iso6393: "nrr"
    },
    {
        name: "Northern Kalapuya",
        type: "extinct",
        scope: "individual",
        iso6393: "nrt"
    },
    {
        name: "Narua",
        type: "living",
        scope: "individual",
        iso6393: "nru"
    },
    {
        name: "Ngurmbur",
        type: "extinct",
        scope: "individual",
        iso6393: "nrx"
    },
    {
        name: "Lala",
        type: "living",
        scope: "individual",
        iso6393: "nrz"
    },
    {
        name: "Sangtam Naga",
        type: "living",
        scope: "individual",
        iso6393: "nsa"
    },
    {
        name: "Lower Nossob",
        type: "extinct",
        scope: "individual",
        iso6393: "nsb"
    },
    {
        name: "Nshi",
        type: "living",
        scope: "individual",
        iso6393: "nsc"
    },
    {
        name: "Southern Nisu",
        type: "living",
        scope: "individual",
        iso6393: "nsd"
    },
    {
        name: "Nsenga",
        type: "living",
        scope: "individual",
        iso6393: "nse"
    },
    {
        name: "Northwestern Nisu",
        type: "living",
        scope: "individual",
        iso6393: "nsf"
    },
    {
        name: "Ngasa",
        type: "living",
        scope: "individual",
        iso6393: "nsg"
    },
    {
        name: "Ngoshie",
        type: "living",
        scope: "individual",
        iso6393: "nsh"
    },
    {
        name: "Nigerian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "nsi"
    },
    {
        name: "Naskapi",
        type: "living",
        scope: "individual",
        iso6393: "nsk"
    },
    {
        name: "Norwegian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "nsl"
    },
    {
        name: "Sumi Naga",
        type: "living",
        scope: "individual",
        iso6393: "nsm"
    },
    {
        name: "Nehan",
        type: "living",
        scope: "individual",
        iso6393: "nsn"
    },
    {
        name: "Pedi",
        type: "living",
        scope: "individual",
        iso6393: "nso",
        iso6392B: "nso",
        iso6392T: "nso"
    },
    {
        name: "Nepalese Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "nsp"
    },
    {
        name: "Northern Sierra Miwok",
        type: "living",
        scope: "individual",
        iso6393: "nsq"
    },
    {
        name: "Maritime Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "nsr"
    },
    {
        name: "Nali",
        type: "living",
        scope: "individual",
        iso6393: "nss"
    },
    {
        name: "Tase Naga",
        type: "living",
        scope: "individual",
        iso6393: "nst"
    },
    {
        name: "Sierra Negra Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "nsu"
    },
    {
        name: "Southwestern Nisu",
        type: "living",
        scope: "individual",
        iso6393: "nsv"
    },
    {
        name: "Navut",
        type: "living",
        scope: "individual",
        iso6393: "nsw"
    },
    {
        name: "Nsongo",
        type: "living",
        scope: "individual",
        iso6393: "nsx"
    },
    {
        name: "Nasal",
        type: "living",
        scope: "individual",
        iso6393: "nsy"
    },
    {
        name: "Nisenan",
        type: "living",
        scope: "individual",
        iso6393: "nsz"
    },
    {
        name: "Northern Tidung",
        type: "living",
        scope: "individual",
        iso6393: "ntd"
    },
    {
        name: "Nathembo",
        type: "living",
        scope: "individual",
        iso6393: "nte"
    },
    {
        name: "Ngantangarra",
        type: "extinct",
        scope: "individual",
        iso6393: "ntg"
    },
    {
        name: "Natioro",
        type: "living",
        scope: "individual",
        iso6393: "nti"
    },
    {
        name: "Ngaanyatjarra",
        type: "living",
        scope: "individual",
        iso6393: "ntj"
    },
    {
        name: "Ikoma-Nata-Isenye",
        type: "living",
        scope: "individual",
        iso6393: "ntk"
    },
    {
        name: "Nateni",
        type: "living",
        scope: "individual",
        iso6393: "ntm"
    },
    {
        name: "Ntomba",
        type: "living",
        scope: "individual",
        iso6393: "nto"
    },
    {
        name: "Northern Tepehuan",
        type: "living",
        scope: "individual",
        iso6393: "ntp"
    },
    {
        name: "Delo",
        type: "living",
        scope: "individual",
        iso6393: "ntr"
    },
    {
        name: "Nat\xfcgu",
        type: "living",
        scope: "individual",
        iso6393: "ntu"
    },
    {
        name: "Nottoway",
        type: "extinct",
        scope: "individual",
        iso6393: "ntw"
    },
    {
        name: "Tangkhul Naga (Myanmar)",
        type: "living",
        scope: "individual",
        iso6393: "ntx"
    },
    {
        name: "Mantsi",
        type: "living",
        scope: "individual",
        iso6393: "nty"
    },
    {
        name: "Natanzi",
        type: "living",
        scope: "individual",
        iso6393: "ntz"
    },
    {
        name: "Yuanga",
        type: "living",
        scope: "individual",
        iso6393: "nua"
    },
    {
        name: "Nukuini",
        type: "extinct",
        scope: "individual",
        iso6393: "nuc"
    },
    {
        name: "Ngala",
        type: "living",
        scope: "individual",
        iso6393: "nud"
    },
    {
        name: "Ngundu",
        type: "living",
        scope: "individual",
        iso6393: "nue"
    },
    {
        name: "Nusu",
        type: "living",
        scope: "individual",
        iso6393: "nuf"
    },
    {
        name: "Nungali",
        type: "extinct",
        scope: "individual",
        iso6393: "nug"
    },
    {
        name: "Ndunda",
        type: "living",
        scope: "individual",
        iso6393: "nuh"
    },
    {
        name: "Ngumbi",
        type: "living",
        scope: "individual",
        iso6393: "nui"
    },
    {
        name: "Nyole",
        type: "living",
        scope: "individual",
        iso6393: "nuj"
    },
    {
        name: "Nuu-chah-nulth",
        type: "living",
        scope: "individual",
        iso6393: "nuk"
    },
    {
        name: "Nusa Laut",
        type: "extinct",
        scope: "individual",
        iso6393: "nul"
    },
    {
        name: "Niuafo'ou",
        type: "living",
        scope: "individual",
        iso6393: "num"
    },
    {
        name: "Anong",
        type: "living",
        scope: "individual",
        iso6393: "nun"
    },
    {
        name: "Ngu\xf4n",
        type: "living",
        scope: "individual",
        iso6393: "nuo"
    },
    {
        name: "Nupe-Nupe-Tako",
        type: "living",
        scope: "individual",
        iso6393: "nup"
    },
    {
        name: "Nukumanu",
        type: "living",
        scope: "individual",
        iso6393: "nuq"
    },
    {
        name: "Nukuria",
        type: "living",
        scope: "individual",
        iso6393: "nur"
    },
    {
        name: "Nuer",
        type: "living",
        scope: "individual",
        iso6393: "nus"
    },
    {
        name: "Nung (Viet Nam)",
        type: "living",
        scope: "individual",
        iso6393: "nut"
    },
    {
        name: "Ngbundu",
        type: "living",
        scope: "individual",
        iso6393: "nuu"
    },
    {
        name: "Northern Nuni",
        type: "living",
        scope: "individual",
        iso6393: "nuv"
    },
    {
        name: "Nguluwan",
        type: "living",
        scope: "individual",
        iso6393: "nuw"
    },
    {
        name: "Mehek",
        type: "living",
        scope: "individual",
        iso6393: "nux"
    },
    {
        name: "Nunggubuyu",
        type: "living",
        scope: "individual",
        iso6393: "nuy"
    },
    {
        name: "Tlamacazapa Nahuatl",
        type: "living",
        scope: "individual",
        iso6393: "nuz"
    },
    {
        name: "Nasarian",
        type: "living",
        scope: "individual",
        iso6393: "nvh"
    },
    {
        name: "Namiae",
        type: "living",
        scope: "individual",
        iso6393: "nvm"
    },
    {
        name: "Nyokon",
        type: "living",
        scope: "individual",
        iso6393: "nvo"
    },
    {
        name: "Nawathinehena",
        type: "extinct",
        scope: "individual",
        iso6393: "nwa"
    },
    {
        name: "Nyabwa",
        type: "living",
        scope: "individual",
        iso6393: "nwb"
    },
    {
        name: "Classical Newari",
        type: "historical",
        scope: "individual",
        iso6393: "nwc",
        iso6392B: "nwc",
        iso6392T: "nwc"
    },
    {
        name: "Ngwe",
        type: "living",
        scope: "individual",
        iso6393: "nwe"
    },
    {
        name: "Ngayawung",
        type: "extinct",
        scope: "individual",
        iso6393: "nwg"
    },
    {
        name: "Southwest Tanna",
        type: "living",
        scope: "individual",
        iso6393: "nwi"
    },
    {
        name: "Nyamusa-Molo",
        type: "living",
        scope: "individual",
        iso6393: "nwm"
    },
    {
        name: "Nauo",
        type: "extinct",
        scope: "individual",
        iso6393: "nwo"
    },
    {
        name: "Nawaru",
        type: "living",
        scope: "individual",
        iso6393: "nwr"
    },
    {
        name: "Middle Newar",
        type: "historical",
        scope: "individual",
        iso6393: "nwx"
    },
    {
        name: "Nottoway-Meherrin",
        type: "extinct",
        scope: "individual",
        iso6393: "nwy"
    },
    {
        name: "Nauete",
        type: "living",
        scope: "individual",
        iso6393: "nxa"
    },
    {
        name: "Ngando (Democratic Republic of Congo)",
        type: "living",
        scope: "individual",
        iso6393: "nxd"
    },
    {
        name: "Nage",
        type: "living",
        scope: "individual",
        iso6393: "nxe"
    },
    {
        name: "Ngad'a",
        type: "living",
        scope: "individual",
        iso6393: "nxg"
    },
    {
        name: "Nindi",
        type: "living",
        scope: "individual",
        iso6393: "nxi"
    },
    {
        name: "Koki Naga",
        type: "living",
        scope: "individual",
        iso6393: "nxk"
    },
    {
        name: "South Nuaulu",
        type: "living",
        scope: "individual",
        iso6393: "nxl"
    },
    {
        name: "Numidian",
        type: "ancient",
        scope: "individual",
        iso6393: "nxm"
    },
    {
        name: "Ngawun",
        type: "extinct",
        scope: "individual",
        iso6393: "nxn"
    },
    {
        name: "Ndambomo",
        type: "living",
        scope: "individual",
        iso6393: "nxo"
    },
    {
        name: "Naxi",
        type: "living",
        scope: "individual",
        iso6393: "nxq"
    },
    {
        name: "Ninggerum",
        type: "living",
        scope: "individual",
        iso6393: "nxr"
    },
    {
        name: "Nafri",
        type: "living",
        scope: "individual",
        iso6393: "nxx"
    },
    {
        name: "Nyanja",
        type: "living",
        scope: "individual",
        iso6393: "nya",
        iso6392B: "nya",
        iso6392T: "nya",
        iso6391: "ny"
    },
    {
        name: "Nyangbo",
        type: "living",
        scope: "individual",
        iso6393: "nyb"
    },
    {
        name: "Nyanga-li",
        type: "living",
        scope: "individual",
        iso6393: "nyc"
    },
    {
        name: "Nyore",
        type: "living",
        scope: "individual",
        iso6393: "nyd"
    },
    {
        name: "Nyengo",
        type: "living",
        scope: "individual",
        iso6393: "nye"
    },
    {
        name: "Giryama",
        type: "living",
        scope: "individual",
        iso6393: "nyf"
    },
    {
        name: "Nyindu",
        type: "living",
        scope: "individual",
        iso6393: "nyg"
    },
    {
        name: "Nyikina",
        type: "living",
        scope: "individual",
        iso6393: "nyh"
    },
    {
        name: "Ama (Sudan)",
        type: "living",
        scope: "individual",
        iso6393: "nyi"
    },
    {
        name: "Nyanga",
        type: "living",
        scope: "individual",
        iso6393: "nyj"
    },
    {
        name: "Nyaneka",
        type: "living",
        scope: "individual",
        iso6393: "nyk"
    },
    {
        name: "Nyeu",
        type: "living",
        scope: "individual",
        iso6393: "nyl"
    },
    {
        name: "Nyamwezi",
        type: "living",
        scope: "individual",
        iso6393: "nym",
        iso6392B: "nym",
        iso6392T: "nym"
    },
    {
        name: "Nyankole",
        type: "living",
        scope: "individual",
        iso6393: "nyn",
        iso6392B: "nyn",
        iso6392T: "nyn"
    },
    {
        name: "Nyoro",
        type: "living",
        scope: "individual",
        iso6393: "nyo",
        iso6392B: "nyo",
        iso6392T: "nyo"
    },
    {
        name: "Nyang'i",
        type: "extinct",
        scope: "individual",
        iso6393: "nyp"
    },
    {
        name: "Nayini",
        type: "living",
        scope: "individual",
        iso6393: "nyq"
    },
    {
        name: "Nyiha (Malawi)",
        type: "living",
        scope: "individual",
        iso6393: "nyr"
    },
    {
        name: "Nyungar",
        type: "living",
        scope: "individual",
        iso6393: "nys"
    },
    {
        name: "Nyawaygi",
        type: "extinct",
        scope: "individual",
        iso6393: "nyt"
    },
    {
        name: "Nyungwe",
        type: "living",
        scope: "individual",
        iso6393: "nyu"
    },
    {
        name: "Nyulnyul",
        type: "extinct",
        scope: "individual",
        iso6393: "nyv"
    },
    {
        name: "Nyaw",
        type: "living",
        scope: "individual",
        iso6393: "nyw"
    },
    {
        name: "Nganyaywana",
        type: "extinct",
        scope: "individual",
        iso6393: "nyx"
    },
    {
        name: "Nyakyusa-Ngonde",
        type: "living",
        scope: "individual",
        iso6393: "nyy"
    },
    {
        name: "Tigon Mbembe",
        type: "living",
        scope: "individual",
        iso6393: "nza"
    },
    {
        name: "Njebi",
        type: "living",
        scope: "individual",
        iso6393: "nzb"
    },
    {
        name: "Nzadi",
        type: "living",
        scope: "individual",
        iso6393: "nzd"
    },
    {
        name: "Nzima",
        type: "living",
        scope: "individual",
        iso6393: "nzi",
        iso6392B: "nzi",
        iso6392T: "nzi"
    },
    {
        name: "Nzakara",
        type: "living",
        scope: "individual",
        iso6393: "nzk"
    },
    {
        name: "Zeme Naga",
        type: "living",
        scope: "individual",
        iso6393: "nzm"
    },
    {
        name: "New Zealand Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "nzs"
    },
    {
        name: "Teke-Nzikou",
        type: "living",
        scope: "individual",
        iso6393: "nzu"
    },
    {
        name: "Nzakambay",
        type: "living",
        scope: "individual",
        iso6393: "nzy"
    },
    {
        name: "Nanga Dama Dogon",
        type: "living",
        scope: "individual",
        iso6393: "nzz"
    },
    {
        name: "Orok",
        type: "living",
        scope: "individual",
        iso6393: "oaa"
    },
    {
        name: "Oroch",
        type: "living",
        scope: "individual",
        iso6393: "oac"
    },
    {
        name: "Old Aramaic (up to 700 BCE)",
        type: "ancient",
        scope: "individual",
        iso6393: "oar"
    },
    {
        name: "Old Avar",
        type: "historical",
        scope: "individual",
        iso6393: "oav"
    },
    {
        name: "Obispe\xf1o",
        type: "extinct",
        scope: "individual",
        iso6393: "obi"
    },
    {
        name: "Southern Bontok",
        type: "living",
        scope: "individual",
        iso6393: "obk"
    },
    {
        name: "Oblo",
        type: "living",
        scope: "individual",
        iso6393: "obl"
    },
    {
        name: "Moabite",
        type: "ancient",
        scope: "individual",
        iso6393: "obm"
    },
    {
        name: "Obo Manobo",
        type: "living",
        scope: "individual",
        iso6393: "obo"
    },
    {
        name: "Old Burmese",
        type: "historical",
        scope: "individual",
        iso6393: "obr"
    },
    {
        name: "Old Breton",
        type: "historical",
        scope: "individual",
        iso6393: "obt"
    },
    {
        name: "Obulom",
        type: "living",
        scope: "individual",
        iso6393: "obu"
    },
    {
        name: "Ocaina",
        type: "living",
        scope: "individual",
        iso6393: "oca"
    },
    {
        name: "Old Chinese",
        type: "ancient",
        scope: "individual",
        iso6393: "och"
    },
    {
        name: "Occitan (post 1500)",
        type: "living",
        scope: "individual",
        iso6393: "oci",
        iso6392B: "oci",
        iso6392T: "oci",
        iso6391: "oc"
    },
    {
        name: "Old Cornish",
        type: "historical",
        scope: "individual",
        iso6393: "oco"
    },
    {
        name: "Atzingo Matlatzinca",
        type: "living",
        scope: "individual",
        iso6393: "ocu"
    },
    {
        name: "Odut",
        type: "living",
        scope: "individual",
        iso6393: "oda"
    },
    {
        name: "Od",
        type: "living",
        scope: "individual",
        iso6393: "odk"
    },
    {
        name: "Old Dutch",
        type: "historical",
        scope: "individual",
        iso6393: "odt"
    },
    {
        name: "Odual",
        type: "living",
        scope: "individual",
        iso6393: "odu"
    },
    {
        name: "Ofo",
        type: "extinct",
        scope: "individual",
        iso6393: "ofo"
    },
    {
        name: "Old Frisian",
        type: "historical",
        scope: "individual",
        iso6393: "ofs"
    },
    {
        name: "Efutop",
        type: "living",
        scope: "individual",
        iso6393: "ofu"
    },
    {
        name: "Ogbia",
        type: "living",
        scope: "individual",
        iso6393: "ogb"
    },
    {
        name: "Ogbah",
        type: "living",
        scope: "individual",
        iso6393: "ogc"
    },
    {
        name: "Old Georgian",
        type: "historical",
        scope: "individual",
        iso6393: "oge"
    },
    {
        name: "Ogbogolo",
        type: "living",
        scope: "individual",
        iso6393: "ogg"
    },
    {
        name: "Khana",
        type: "living",
        scope: "individual",
        iso6393: "ogo"
    },
    {
        name: "Ogbronuagum",
        type: "living",
        scope: "individual",
        iso6393: "ogu"
    },
    {
        name: "Old Hittite",
        type: "ancient",
        scope: "individual",
        iso6393: "oht"
    },
    {
        name: "Old Hungarian",
        type: "historical",
        scope: "individual",
        iso6393: "ohu"
    },
    {
        name: "Oirata",
        type: "living",
        scope: "individual",
        iso6393: "oia"
    },
    {
        name: "Inebu One",
        type: "living",
        scope: "individual",
        iso6393: "oin"
    },
    {
        name: "Northwestern Ojibwa",
        type: "living",
        scope: "individual",
        iso6393: "ojb"
    },
    {
        name: "Central Ojibwa",
        type: "living",
        scope: "individual",
        iso6393: "ojc"
    },
    {
        name: "Eastern Ojibwa",
        type: "living",
        scope: "individual",
        iso6393: "ojg"
    },
    {
        name: "Ojibwa",
        type: "living",
        scope: "macrolanguage",
        iso6393: "oji",
        iso6392B: "oji",
        iso6392T: "oji",
        iso6391: "oj"
    },
    {
        name: "Old Japanese",
        type: "historical",
        scope: "individual",
        iso6393: "ojp"
    },
    {
        name: "Severn Ojibwa",
        type: "living",
        scope: "individual",
        iso6393: "ojs"
    },
    {
        name: "Ontong Java",
        type: "living",
        scope: "individual",
        iso6393: "ojv"
    },
    {
        name: "Western Ojibwa",
        type: "living",
        scope: "individual",
        iso6393: "ojw"
    },
    {
        name: "Okanagan",
        type: "living",
        scope: "individual",
        iso6393: "oka"
    },
    {
        name: "Okobo",
        type: "living",
        scope: "individual",
        iso6393: "okb"
    },
    {
        name: "Okodia",
        type: "living",
        scope: "individual",
        iso6393: "okd"
    },
    {
        name: "Okpe (Southwestern Edo)",
        type: "living",
        scope: "individual",
        iso6393: "oke"
    },
    {
        name: "Koko Babangk",
        type: "extinct",
        scope: "individual",
        iso6393: "okg"
    },
    {
        name: "Koresh-e Rostam",
        type: "living",
        scope: "individual",
        iso6393: "okh"
    },
    {
        name: "Okiek",
        type: "living",
        scope: "individual",
        iso6393: "oki"
    },
    {
        name: "Oko-Juwoi",
        type: "extinct",
        scope: "individual",
        iso6393: "okj"
    },
    {
        name: "Kwamtim One",
        type: "living",
        scope: "individual",
        iso6393: "okk"
    },
    {
        name: "Old Kentish Sign Language",
        type: "extinct",
        scope: "individual",
        iso6393: "okl"
    },
    {
        name: "Middle Korean (10th-16th cent.)",
        type: "historical",
        scope: "individual",
        iso6393: "okm"
    },
    {
        name: "Oki-No-Erabu",
        type: "living",
        scope: "individual",
        iso6393: "okn"
    },
    {
        name: "Old Korean (3rd-9th cent.)",
        type: "historical",
        scope: "individual",
        iso6393: "oko"
    },
    {
        name: "Kirike",
        type: "living",
        scope: "individual",
        iso6393: "okr"
    },
    {
        name: "Oko-Eni-Osayen",
        type: "living",
        scope: "individual",
        iso6393: "oks"
    },
    {
        name: "Oku",
        type: "living",
        scope: "individual",
        iso6393: "oku"
    },
    {
        name: "Orokaiva",
        type: "living",
        scope: "individual",
        iso6393: "okv"
    },
    {
        name: "Okpe (Northwestern Edo)",
        type: "living",
        scope: "individual",
        iso6393: "okx"
    },
    {
        name: "Walungge",
        type: "living",
        scope: "individual",
        iso6393: "ola"
    },
    {
        name: "Mochi",
        type: "living",
        scope: "individual",
        iso6393: "old"
    },
    {
        name: "Olekha",
        type: "living",
        scope: "individual",
        iso6393: "ole"
    },
    {
        name: "Olkol",
        type: "extinct",
        scope: "individual",
        iso6393: "olk"
    },
    {
        name: "Oloma",
        type: "living",
        scope: "individual",
        iso6393: "olm"
    },
    {
        name: "Livvi",
        type: "living",
        scope: "individual",
        iso6393: "olo"
    },
    {
        name: "Olrat",
        type: "living",
        scope: "individual",
        iso6393: "olr"
    },
    {
        name: "Old Lithuanian",
        type: "historical",
        scope: "individual",
        iso6393: "olt"
    },
    {
        name: "Kuvale",
        type: "living",
        scope: "individual",
        iso6393: "olu"
    },
    {
        name: "Omaha-Ponca",
        type: "living",
        scope: "individual",
        iso6393: "oma"
    },
    {
        name: "East Ambae",
        type: "living",
        scope: "individual",
        iso6393: "omb"
    },
    {
        name: "Mochica",
        type: "extinct",
        scope: "individual",
        iso6393: "omc"
    },
    {
        name: "Omagua",
        type: "living",
        scope: "individual",
        iso6393: "omg"
    },
    {
        name: "Omi",
        type: "living",
        scope: "individual",
        iso6393: "omi"
    },
    {
        name: "Omok",
        type: "extinct",
        scope: "individual",
        iso6393: "omk"
    },
    {
        name: "Ombo",
        type: "living",
        scope: "individual",
        iso6393: "oml"
    },
    {
        name: "Minoan",
        type: "ancient",
        scope: "individual",
        iso6393: "omn"
    },
    {
        name: "Utarmbung",
        type: "living",
        scope: "individual",
        iso6393: "omo"
    },
    {
        name: "Old Manipuri",
        type: "historical",
        scope: "individual",
        iso6393: "omp"
    },
    {
        name: "Old Marathi",
        type: "historical",
        scope: "individual",
        iso6393: "omr"
    },
    {
        name: "Omotik",
        type: "living",
        scope: "individual",
        iso6393: "omt"
    },
    {
        name: "Omurano",
        type: "extinct",
        scope: "individual",
        iso6393: "omu"
    },
    {
        name: "South Tairora",
        type: "living",
        scope: "individual",
        iso6393: "omw"
    },
    {
        name: "Old Mon",
        type: "historical",
        scope: "individual",
        iso6393: "omx"
    },
    {
        name: "Ona",
        type: "living",
        scope: "individual",
        iso6393: "ona"
    },
    {
        name: "Lingao",
        type: "living",
        scope: "individual",
        iso6393: "onb"
    },
    {
        name: "Oneida",
        type: "living",
        scope: "individual",
        iso6393: "one"
    },
    {
        name: "Olo",
        type: "living",
        scope: "individual",
        iso6393: "ong"
    },
    {
        name: "Onin",
        type: "living",
        scope: "individual",
        iso6393: "oni"
    },
    {
        name: "Onjob",
        type: "living",
        scope: "individual",
        iso6393: "onj"
    },
    {
        name: "Kabore One",
        type: "living",
        scope: "individual",
        iso6393: "onk"
    },
    {
        name: "Onobasulu",
        type: "living",
        scope: "individual",
        iso6393: "onn"
    },
    {
        name: "Onondaga",
        type: "living",
        scope: "individual",
        iso6393: "ono"
    },
    {
        name: "Sartang",
        type: "living",
        scope: "individual",
        iso6393: "onp"
    },
    {
        name: "Northern One",
        type: "living",
        scope: "individual",
        iso6393: "onr"
    },
    {
        name: "Ono",
        type: "living",
        scope: "individual",
        iso6393: "ons"
    },
    {
        name: "Ontenu",
        type: "living",
        scope: "individual",
        iso6393: "ont"
    },
    {
        name: "Unua",
        type: "living",
        scope: "individual",
        iso6393: "onu"
    },
    {
        name: "Old Nubian",
        type: "historical",
        scope: "individual",
        iso6393: "onw"
    },
    {
        name: "Onin Based Pidgin",
        type: "living",
        scope: "individual",
        iso6393: "onx"
    },
    {
        name: "Tohono O'odham",
        type: "living",
        scope: "individual",
        iso6393: "ood"
    },
    {
        name: "Ong",
        type: "living",
        scope: "individual",
        iso6393: "oog"
    },
    {
        name: "\xd6nge",
        type: "living",
        scope: "individual",
        iso6393: "oon"
    },
    {
        name: "Oorlams",
        type: "living",
        scope: "individual",
        iso6393: "oor"
    },
    {
        name: "Old Ossetic",
        type: "ancient",
        scope: "individual",
        iso6393: "oos"
    },
    {
        name: "Okpamheri",
        type: "living",
        scope: "individual",
        iso6393: "opa"
    },
    {
        name: "Kopkaka",
        type: "living",
        scope: "individual",
        iso6393: "opk"
    },
    {
        name: "Oksapmin",
        type: "living",
        scope: "individual",
        iso6393: "opm"
    },
    {
        name: "Opao",
        type: "living",
        scope: "individual",
        iso6393: "opo"
    },
    {
        name: "Opata",
        type: "extinct",
        scope: "individual",
        iso6393: "opt"
    },
    {
        name: "Ofay\xe9",
        type: "living",
        scope: "individual",
        iso6393: "opy"
    },
    {
        name: "Oroha",
        type: "living",
        scope: "individual",
        iso6393: "ora"
    },
    {
        name: "Orma",
        type: "living",
        scope: "individual",
        iso6393: "orc"
    },
    {
        name: "Orej\xf3n",
        type: "living",
        scope: "individual",
        iso6393: "ore"
    },
    {
        name: "Oring",
        type: "living",
        scope: "individual",
        iso6393: "org"
    },
    {
        name: "Oroqen",
        type: "living",
        scope: "individual",
        iso6393: "orh"
    },
    {
        name: "Oriya (macrolanguage)",
        type: "living",
        scope: "macrolanguage",
        iso6393: "ori",
        iso6392B: "ori",
        iso6392T: "ori",
        iso6391: "or"
    },
    {
        name: "Oromo",
        type: "living",
        scope: "macrolanguage",
        iso6393: "orm",
        iso6392B: "orm",
        iso6392T: "orm",
        iso6391: "om"
    },
    {
        name: "Orang Kanaq",
        type: "living",
        scope: "individual",
        iso6393: "orn"
    },
    {
        name: "Orokolo",
        type: "living",
        scope: "individual",
        iso6393: "oro"
    },
    {
        name: "Oruma",
        type: "living",
        scope: "individual",
        iso6393: "orr"
    },
    {
        name: "Orang Seletar",
        type: "living",
        scope: "individual",
        iso6393: "ors"
    },
    {
        name: "Adivasi Oriya",
        type: "living",
        scope: "individual",
        iso6393: "ort"
    },
    {
        name: "Ormuri",
        type: "living",
        scope: "individual",
        iso6393: "oru"
    },
    {
        name: "Old Russian",
        type: "historical",
        scope: "individual",
        iso6393: "orv"
    },
    {
        name: "Oro Win",
        type: "living",
        scope: "individual",
        iso6393: "orw"
    },
    {
        name: "Oro",
        type: "living",
        scope: "individual",
        iso6393: "orx"
    },
    {
        name: "Odia",
        type: "living",
        scope: "individual",
        iso6393: "ory"
    },
    {
        name: "Ormu",
        type: "living",
        scope: "individual",
        iso6393: "orz"
    },
    {
        name: "Osage",
        type: "living",
        scope: "individual",
        iso6393: "osa",
        iso6392B: "osa",
        iso6392T: "osa"
    },
    {
        name: "Oscan",
        type: "ancient",
        scope: "individual",
        iso6393: "osc"
    },
    {
        name: "Osing",
        type: "living",
        scope: "individual",
        iso6393: "osi"
    },
    {
        name: "Ososo",
        type: "living",
        scope: "individual",
        iso6393: "oso"
    },
    {
        name: "Old Spanish",
        type: "historical",
        scope: "individual",
        iso6393: "osp"
    },
    {
        name: "Ossetian",
        type: "living",
        scope: "individual",
        iso6393: "oss",
        iso6392B: "oss",
        iso6392T: "oss",
        iso6391: "os"
    },
    {
        name: "Osatu",
        type: "living",
        scope: "individual",
        iso6393: "ost"
    },
    {
        name: "Southern One",
        type: "living",
        scope: "individual",
        iso6393: "osu"
    },
    {
        name: "Old Saxon",
        type: "historical",
        scope: "individual",
        iso6393: "osx"
    },
    {
        name: "Ottoman Turkish (1500-1928)",
        type: "historical",
        scope: "individual",
        iso6393: "ota",
        iso6392B: "ota",
        iso6392T: "ota"
    },
    {
        name: "Old Tibetan",
        type: "historical",
        scope: "individual",
        iso6393: "otb"
    },
    {
        name: "Ot Danum",
        type: "living",
        scope: "individual",
        iso6393: "otd"
    },
    {
        name: "Mezquital Otomi",
        type: "living",
        scope: "individual",
        iso6393: "ote"
    },
    {
        name: "Oti",
        type: "extinct",
        scope: "individual",
        iso6393: "oti"
    },
    {
        name: "Old Turkish",
        type: "historical",
        scope: "individual",
        iso6393: "otk"
    },
    {
        name: "Tilapa Otomi",
        type: "living",
        scope: "individual",
        iso6393: "otl"
    },
    {
        name: "Eastern Highland Otomi",
        type: "living",
        scope: "individual",
        iso6393: "otm"
    },
    {
        name: "Tenango Otomi",
        type: "living",
        scope: "individual",
        iso6393: "otn"
    },
    {
        name: "Quer\xe9taro Otomi",
        type: "living",
        scope: "individual",
        iso6393: "otq"
    },
    {
        name: "Otoro",
        type: "living",
        scope: "individual",
        iso6393: "otr"
    },
    {
        name: "Estado de M\xe9xico Otomi",
        type: "living",
        scope: "individual",
        iso6393: "ots"
    },
    {
        name: "Temoaya Otomi",
        type: "living",
        scope: "individual",
        iso6393: "ott"
    },
    {
        name: "Otuke",
        type: "extinct",
        scope: "individual",
        iso6393: "otu"
    },
    {
        name: "Ottawa",
        type: "living",
        scope: "individual",
        iso6393: "otw"
    },
    {
        name: "Texcatepec Otomi",
        type: "living",
        scope: "individual",
        iso6393: "otx"
    },
    {
        name: "Old Tamil",
        type: "ancient",
        scope: "individual",
        iso6393: "oty"
    },
    {
        name: "Ixtenco Otomi",
        type: "living",
        scope: "individual",
        iso6393: "otz"
    },
    {
        name: "Tagargrent",
        type: "living",
        scope: "individual",
        iso6393: "oua"
    },
    {
        name: "Glio-Oubi",
        type: "living",
        scope: "individual",
        iso6393: "oub"
    },
    {
        name: "Oune",
        type: "living",
        scope: "individual",
        iso6393: "oue"
    },
    {
        name: "Old Uighur",
        type: "historical",
        scope: "individual",
        iso6393: "oui"
    },
    {
        name: "Ouma",
        type: "extinct",
        scope: "individual",
        iso6393: "oum"
    },
    {
        name: "Elfdalian",
        type: "living",
        scope: "individual",
        iso6393: "ovd"
    },
    {
        name: "Owiniga",
        type: "living",
        scope: "individual",
        iso6393: "owi"
    },
    {
        name: "Old Welsh",
        type: "historical",
        scope: "individual",
        iso6393: "owl"
    },
    {
        name: "Oy",
        type: "living",
        scope: "individual",
        iso6393: "oyb"
    },
    {
        name: "Oyda",
        type: "living",
        scope: "individual",
        iso6393: "oyd"
    },
    {
        name: "Wayampi",
        type: "living",
        scope: "individual",
        iso6393: "oym"
    },
    {
        name: "Oya'oya",
        type: "living",
        scope: "individual",
        iso6393: "oyy"
    },
    {
        name: "Koonzime",
        type: "living",
        scope: "individual",
        iso6393: "ozm"
    },
    {
        name: "Parec\xeds",
        type: "living",
        scope: "individual",
        iso6393: "pab"
    },
    {
        name: "Pacoh",
        type: "living",
        scope: "individual",
        iso6393: "pac"
    },
    {
        name: "Paumar\xed",
        type: "living",
        scope: "individual",
        iso6393: "pad"
    },
    {
        name: "Pagibete",
        type: "living",
        scope: "individual",
        iso6393: "pae"
    },
    {
        name: "Paranaw\xe1t",
        type: "extinct",
        scope: "individual",
        iso6393: "paf"
    },
    {
        name: "Pangasinan",
        type: "living",
        scope: "individual",
        iso6393: "pag",
        iso6392B: "pag",
        iso6392T: "pag"
    },
    {
        name: "Tenharim",
        type: "living",
        scope: "individual",
        iso6393: "pah"
    },
    {
        name: "Pe",
        type: "living",
        scope: "individual",
        iso6393: "pai"
    },
    {
        name: "Parakan\xe3",
        type: "living",
        scope: "individual",
        iso6393: "pak"
    },
    {
        name: "Pahlavi",
        type: "ancient",
        scope: "individual",
        iso6393: "pal",
        iso6392B: "pal",
        iso6392T: "pal"
    },
    {
        name: "Pampanga",
        type: "living",
        scope: "individual",
        iso6393: "pam",
        iso6392B: "pam",
        iso6392T: "pam"
    },
    {
        name: "Panjabi",
        type: "living",
        scope: "individual",
        iso6393: "pan",
        iso6392B: "pan",
        iso6392T: "pan",
        iso6391: "pa"
    },
    {
        name: "Northern Paiute",
        type: "living",
        scope: "individual",
        iso6393: "pao"
    },
    {
        name: "Papiamento",
        type: "living",
        scope: "individual",
        iso6393: "pap",
        iso6392B: "pap",
        iso6392T: "pap"
    },
    {
        name: "Parya",
        type: "living",
        scope: "individual",
        iso6393: "paq"
    },
    {
        name: "Panamint",
        type: "living",
        scope: "individual",
        iso6393: "par"
    },
    {
        name: "Papasena",
        type: "living",
        scope: "individual",
        iso6393: "pas"
    },
    {
        name: "Papitalai",
        type: "living",
        scope: "individual",
        iso6393: "pat"
    },
    {
        name: "Palauan",
        type: "living",
        scope: "individual",
        iso6393: "pau",
        iso6392B: "pau",
        iso6392T: "pau"
    },
    {
        name: "Paka\xe1snovos",
        type: "living",
        scope: "individual",
        iso6393: "pav"
    },
    {
        name: "Pawnee",
        type: "living",
        scope: "individual",
        iso6393: "paw"
    },
    {
        name: "Pankarar\xe9",
        type: "extinct",
        scope: "individual",
        iso6393: "pax"
    },
    {
        name: "Pech",
        type: "living",
        scope: "individual",
        iso6393: "pay"
    },
    {
        name: "Pankarar\xfa",
        type: "extinct",
        scope: "individual",
        iso6393: "paz"
    },
    {
        name: "P\xe1ez",
        type: "living",
        scope: "individual",
        iso6393: "pbb"
    },
    {
        name: "Patamona",
        type: "living",
        scope: "individual",
        iso6393: "pbc"
    },
    {
        name: "Mezontla Popoloca",
        type: "living",
        scope: "individual",
        iso6393: "pbe"
    },
    {
        name: "Coyotepec Popoloca",
        type: "living",
        scope: "individual",
        iso6393: "pbf"
    },
    {
        name: "Paraujano",
        type: "extinct",
        scope: "individual",
        iso6393: "pbg"
    },
    {
        name: "E'\xf1apa Woromaipu",
        type: "living",
        scope: "individual",
        iso6393: "pbh"
    },
    {
        name: "Parkwa",
        type: "living",
        scope: "individual",
        iso6393: "pbi"
    },
    {
        name: "Mak (Nigeria)",
        type: "living",
        scope: "individual",
        iso6393: "pbl"
    },
    {
        name: "Puebla Mazatec",
        type: "living",
        scope: "individual",
        iso6393: "pbm"
    },
    {
        name: "Kpasam",
        type: "living",
        scope: "individual",
        iso6393: "pbn"
    },
    {
        name: "Papel",
        type: "living",
        scope: "individual",
        iso6393: "pbo"
    },
    {
        name: "Badyara",
        type: "living",
        scope: "individual",
        iso6393: "pbp"
    },
    {
        name: "Pangwa",
        type: "living",
        scope: "individual",
        iso6393: "pbr"
    },
    {
        name: "Central Pame",
        type: "living",
        scope: "individual",
        iso6393: "pbs"
    },
    {
        name: "Southern Pashto",
        type: "living",
        scope: "individual",
        iso6393: "pbt"
    },
    {
        name: "Northern Pashto",
        type: "living",
        scope: "individual",
        iso6393: "pbu"
    },
    {
        name: "Pnar",
        type: "living",
        scope: "individual",
        iso6393: "pbv"
    },
    {
        name: "Pyu (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "pby"
    },
    {
        name: "Santa In\xe9s Ahuatempan Popoloca",
        type: "living",
        scope: "individual",
        iso6393: "pca"
    },
    {
        name: "Pear",
        type: "living",
        scope: "individual",
        iso6393: "pcb"
    },
    {
        name: "Bouyei",
        type: "living",
        scope: "individual",
        iso6393: "pcc"
    },
    {
        name: "Picard",
        type: "living",
        scope: "individual",
        iso6393: "pcd"
    },
    {
        name: "Ruching Palaung",
        type: "living",
        scope: "individual",
        iso6393: "pce"
    },
    {
        name: "Paliyan",
        type: "living",
        scope: "individual",
        iso6393: "pcf"
    },
    {
        name: "Paniya",
        type: "living",
        scope: "individual",
        iso6393: "pcg"
    },
    {
        name: "Pardhan",
        type: "living",
        scope: "individual",
        iso6393: "pch"
    },
    {
        name: "Duruwa",
        type: "living",
        scope: "individual",
        iso6393: "pci"
    },
    {
        name: "Parenga",
        type: "living",
        scope: "individual",
        iso6393: "pcj"
    },
    {
        name: "Paite Chin",
        type: "living",
        scope: "individual",
        iso6393: "pck"
    },
    {
        name: "Pardhi",
        type: "living",
        scope: "individual",
        iso6393: "pcl"
    },
    {
        name: "Nigerian Pidgin",
        type: "living",
        scope: "individual",
        iso6393: "pcm"
    },
    {
        name: "Piti",
        type: "living",
        scope: "individual",
        iso6393: "pcn"
    },
    {
        name: "Pacahuara",
        type: "living",
        scope: "individual",
        iso6393: "pcp"
    },
    {
        name: "Pyapun",
        type: "living",
        scope: "individual",
        iso6393: "pcw"
    },
    {
        name: "Anam",
        type: "living",
        scope: "individual",
        iso6393: "pda"
    },
    {
        name: "Pennsylvania German",
        type: "living",
        scope: "individual",
        iso6393: "pdc"
    },
    {
        name: "Pa Di",
        type: "living",
        scope: "individual",
        iso6393: "pdi"
    },
    {
        name: "Podena",
        type: "living",
        scope: "individual",
        iso6393: "pdn"
    },
    {
        name: "Padoe",
        type: "living",
        scope: "individual",
        iso6393: "pdo"
    },
    {
        name: "Plautdietsch",
        type: "living",
        scope: "individual",
        iso6393: "pdt"
    },
    {
        name: "Kayan",
        type: "living",
        scope: "individual",
        iso6393: "pdu"
    },
    {
        name: "Peranakan Indonesian",
        type: "living",
        scope: "individual",
        iso6393: "pea"
    },
    {
        name: "Eastern Pomo",
        type: "extinct",
        scope: "individual",
        iso6393: "peb"
    },
    {
        name: "Mala (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "ped"
    },
    {
        name: "Taje",
        type: "living",
        scope: "individual",
        iso6393: "pee"
    },
    {
        name: "Northeastern Pomo",
        type: "extinct",
        scope: "individual",
        iso6393: "pef"
    },
    {
        name: "Pengo",
        type: "living",
        scope: "individual",
        iso6393: "peg"
    },
    {
        name: "Bonan",
        type: "living",
        scope: "individual",
        iso6393: "peh"
    },
    {
        name: "Chichimeca-Jonaz",
        type: "living",
        scope: "individual",
        iso6393: "pei"
    },
    {
        name: "Northern Pomo",
        type: "extinct",
        scope: "individual",
        iso6393: "pej"
    },
    {
        name: "Penchal",
        type: "living",
        scope: "individual",
        iso6393: "pek"
    },
    {
        name: "Pekal",
        type: "living",
        scope: "individual",
        iso6393: "pel"
    },
    {
        name: "Phende",
        type: "living",
        scope: "individual",
        iso6393: "pem"
    },
    {
        name: "Old Persian (ca. 600-400 B.C.)",
        type: "historical",
        scope: "individual",
        iso6393: "peo",
        iso6392B: "peo",
        iso6392T: "peo"
    },
    {
        name: "Kunja",
        type: "living",
        scope: "individual",
        iso6393: "pep"
    },
    {
        name: "Southern Pomo",
        type: "living",
        scope: "individual",
        iso6393: "peq"
    },
    {
        name: "Iranian Persian",
        type: "living",
        scope: "individual",
        iso6393: "pes"
    },
    {
        name: "P\xe9mono",
        type: "living",
        scope: "individual",
        iso6393: "pev"
    },
    {
        name: "Petats",
        type: "living",
        scope: "individual",
        iso6393: "pex"
    },
    {
        name: "Petjo",
        type: "living",
        scope: "individual",
        iso6393: "pey"
    },
    {
        name: "Eastern Penan",
        type: "living",
        scope: "individual",
        iso6393: "pez"
    },
    {
        name: "P\xe1\xe1fang",
        type: "living",
        scope: "individual",
        iso6393: "pfa"
    },
    {
        name: "Pere",
        type: "living",
        scope: "individual",
        iso6393: "pfe"
    },
    {
        name: "Pfaelzisch",
        type: "living",
        scope: "individual",
        iso6393: "pfl"
    },
    {
        name: "Sudanese Creole Arabic",
        type: "living",
        scope: "individual",
        iso6393: "pga"
    },
    {
        name: "Gāndhārī",
        type: "historical",
        scope: "individual",
        iso6393: "pgd"
    },
    {
        name: "Pangwali",
        type: "living",
        scope: "individual",
        iso6393: "pgg"
    },
    {
        name: "Pagi",
        type: "living",
        scope: "individual",
        iso6393: "pgi"
    },
    {
        name: "Rerep",
        type: "living",
        scope: "individual",
        iso6393: "pgk"
    },
    {
        name: "Primitive Irish",
        type: "ancient",
        scope: "individual",
        iso6393: "pgl"
    },
    {
        name: "Paelignian",
        type: "ancient",
        scope: "individual",
        iso6393: "pgn"
    },
    {
        name: "Pangseng",
        type: "living",
        scope: "individual",
        iso6393: "pgs"
    },
    {
        name: "Pagu",
        type: "living",
        scope: "individual",
        iso6393: "pgu"
    },
    {
        name: "Papua New Guinean Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "pgz"
    },
    {
        name: "Pa-Hng",
        type: "living",
        scope: "individual",
        iso6393: "pha"
    },
    {
        name: "Phudagi",
        type: "living",
        scope: "individual",
        iso6393: "phd"
    },
    {
        name: "Phuong",
        type: "living",
        scope: "individual",
        iso6393: "phg"
    },
    {
        name: "Phukha",
        type: "living",
        scope: "individual",
        iso6393: "phh"
    },
    {
        name: "Phake",
        type: "living",
        scope: "individual",
        iso6393: "phk"
    },
    {
        name: "Phalura",
        type: "living",
        scope: "individual",
        iso6393: "phl"
    },
    {
        name: "Phimbi",
        type: "living",
        scope: "individual",
        iso6393: "phm"
    },
    {
        name: "Phoenician",
        type: "ancient",
        scope: "individual",
        iso6393: "phn",
        iso6392B: "phn",
        iso6392T: "phn"
    },
    {
        name: "Phunoi",
        type: "living",
        scope: "individual",
        iso6393: "pho"
    },
    {
        name: "Phana'",
        type: "living",
        scope: "individual",
        iso6393: "phq"
    },
    {
        name: "Pahari-Potwari",
        type: "living",
        scope: "individual",
        iso6393: "phr"
    },
    {
        name: "Phu Thai",
        type: "living",
        scope: "individual",
        iso6393: "pht"
    },
    {
        name: "Phuan",
        type: "living",
        scope: "individual",
        iso6393: "phu"
    },
    {
        name: "Pahlavani",
        type: "living",
        scope: "individual",
        iso6393: "phv"
    },
    {
        name: "Phangduwali",
        type: "living",
        scope: "individual",
        iso6393: "phw"
    },
    {
        name: "Pima Bajo",
        type: "living",
        scope: "individual",
        iso6393: "pia"
    },
    {
        name: "Yine",
        type: "living",
        scope: "individual",
        iso6393: "pib"
    },
    {
        name: "Pinji",
        type: "living",
        scope: "individual",
        iso6393: "pic"
    },
    {
        name: "Piaroa",
        type: "living",
        scope: "individual",
        iso6393: "pid"
    },
    {
        name: "Piro",
        type: "extinct",
        scope: "individual",
        iso6393: "pie"
    },
    {
        name: "Pingelapese",
        type: "living",
        scope: "individual",
        iso6393: "pif"
    },
    {
        name: "Pisabo",
        type: "living",
        scope: "individual",
        iso6393: "pig"
    },
    {
        name: "Pitcairn-Norfolk",
        type: "living",
        scope: "individual",
        iso6393: "pih"
    },
    {
        name: "Pini",
        type: "living",
        scope: "individual",
        iso6393: "pii"
    },
    {
        name: "Pijao",
        type: "extinct",
        scope: "individual",
        iso6393: "pij"
    },
    {
        name: "Yom",
        type: "living",
        scope: "individual",
        iso6393: "pil"
    },
    {
        name: "Powhatan",
        type: "extinct",
        scope: "individual",
        iso6393: "pim"
    },
    {
        name: "Piame",
        type: "living",
        scope: "individual",
        iso6393: "pin"
    },
    {
        name: "Piapoco",
        type: "living",
        scope: "individual",
        iso6393: "pio"
    },
    {
        name: "Pero",
        type: "living",
        scope: "individual",
        iso6393: "pip"
    },
    {
        name: "Piratapuyo",
        type: "living",
        scope: "individual",
        iso6393: "pir"
    },
    {
        name: "Pijin",
        type: "living",
        scope: "individual",
        iso6393: "pis"
    },
    {
        name: "Pitta Pitta",
        type: "extinct",
        scope: "individual",
        iso6393: "pit"
    },
    {
        name: "Pintupi-Luritja",
        type: "living",
        scope: "individual",
        iso6393: "piu"
    },
    {
        name: "Pileni",
        type: "living",
        scope: "individual",
        iso6393: "piv"
    },
    {
        name: "Pimbwe",
        type: "living",
        scope: "individual",
        iso6393: "piw"
    },
    {
        name: "Piu",
        type: "living",
        scope: "individual",
        iso6393: "pix"
    },
    {
        name: "Piya-Kwonci",
        type: "living",
        scope: "individual",
        iso6393: "piy"
    },
    {
        name: "Pije",
        type: "living",
        scope: "individual",
        iso6393: "piz"
    },
    {
        name: "Pitjantjatjara",
        type: "living",
        scope: "individual",
        iso6393: "pjt"
    },
    {
        name: "Ardhamāgadhī Prākrit",
        type: "historical",
        scope: "individual",
        iso6393: "pka"
    },
    {
        name: "Pokomo",
        type: "living",
        scope: "individual",
        iso6393: "pkb"
    },
    {
        name: "Paekche",
        type: "ancient",
        scope: "individual",
        iso6393: "pkc"
    },
    {
        name: "Pak-Tong",
        type: "living",
        scope: "individual",
        iso6393: "pkg"
    },
    {
        name: "Pankhu",
        type: "living",
        scope: "individual",
        iso6393: "pkh"
    },
    {
        name: "Pakanha",
        type: "living",
        scope: "individual",
        iso6393: "pkn"
    },
    {
        name: "P\xf6koot",
        type: "living",
        scope: "individual",
        iso6393: "pko"
    },
    {
        name: "Pukapuka",
        type: "living",
        scope: "individual",
        iso6393: "pkp"
    },
    {
        name: "Attapady Kurumba",
        type: "living",
        scope: "individual",
        iso6393: "pkr"
    },
    {
        name: "Pakistan Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "pks"
    },
    {
        name: "Maleng",
        type: "living",
        scope: "individual",
        iso6393: "pkt"
    },
    {
        name: "Paku",
        type: "living",
        scope: "individual",
        iso6393: "pku"
    },
    {
        name: "Miani",
        type: "living",
        scope: "individual",
        iso6393: "pla"
    },
    {
        name: "Polonombauk",
        type: "living",
        scope: "individual",
        iso6393: "plb"
    },
    {
        name: "Central Palawano",
        type: "living",
        scope: "individual",
        iso6393: "plc"
    },
    {
        name: "Polari",
        type: "living",
        scope: "individual",
        iso6393: "pld"
    },
    {
        name: "Palu'e",
        type: "living",
        scope: "individual",
        iso6393: "ple"
    },
    {
        name: "Pilag\xe1",
        type: "living",
        scope: "individual",
        iso6393: "plg"
    },
    {
        name: "Paulohi",
        type: "living",
        scope: "individual",
        iso6393: "plh"
    },
    {
        name: "Pali",
        type: "ancient",
        scope: "individual",
        iso6393: "pli",
        iso6392B: "pli",
        iso6392T: "pli",
        iso6391: "pi"
    },
    {
        name: "Polci",
        type: "living",
        scope: "individual",
        iso6393: "plj"
    },
    {
        name: "Kohistani Shina",
        type: "living",
        scope: "individual",
        iso6393: "plk"
    },
    {
        name: "Shwe Palaung",
        type: "living",
        scope: "individual",
        iso6393: "pll"
    },
    {
        name: "Palenquero",
        type: "living",
        scope: "individual",
        iso6393: "pln"
    },
    {
        name: "Oluta Popoluca",
        type: "living",
        scope: "individual",
        iso6393: "plo"
    },
    {
        name: "Palaic",
        type: "ancient",
        scope: "individual",
        iso6393: "plq"
    },
    {
        name: "Palaka Senoufo",
        type: "living",
        scope: "individual",
        iso6393: "plr"
    },
    {
        name: "San Marcos Tlacoyalco Popoloca",
        type: "living",
        scope: "individual",
        iso6393: "pls"
    },
    {
        name: "Plateau Malagasy",
        type: "living",
        scope: "individual",
        iso6393: "plt"
    },
    {
        name: "Palik\xfar",
        type: "living",
        scope: "individual",
        iso6393: "plu"
    },
    {
        name: "Southwest Palawano",
        type: "living",
        scope: "individual",
        iso6393: "plv"
    },
    {
        name: "Brooke's Point Palawano",
        type: "living",
        scope: "individual",
        iso6393: "plw"
    },
    {
        name: "Bolyu",
        type: "living",
        scope: "individual",
        iso6393: "ply"
    },
    {
        name: "Paluan",
        type: "living",
        scope: "individual",
        iso6393: "plz"
    },
    {
        name: "Paama",
        type: "living",
        scope: "individual",
        iso6393: "pma"
    },
    {
        name: "Pambia",
        type: "living",
        scope: "individual",
        iso6393: "pmb"
    },
    {
        name: "Pallanganmiddang",
        type: "extinct",
        scope: "individual",
        iso6393: "pmd"
    },
    {
        name: "Pwaamei",
        type: "living",
        scope: "individual",
        iso6393: "pme"
    },
    {
        name: "Pamona",
        type: "living",
        scope: "individual",
        iso6393: "pmf"
    },
    {
        name: "Māhārāṣṭri Prākrit",
        type: "historical",
        scope: "individual",
        iso6393: "pmh"
    },
    {
        name: "Northern Pumi",
        type: "living",
        scope: "individual",
        iso6393: "pmi"
    },
    {
        name: "Southern Pumi",
        type: "living",
        scope: "individual",
        iso6393: "pmj"
    },
    {
        name: "Pamlico",
        type: "extinct",
        scope: "individual",
        iso6393: "pmk"
    },
    {
        name: "Lingua Franca",
        type: "extinct",
        scope: "individual",
        iso6393: "pml"
    },
    {
        name: "Pomo",
        type: "living",
        scope: "individual",
        iso6393: "pmm"
    },
    {
        name: "Pam",
        type: "living",
        scope: "individual",
        iso6393: "pmn"
    },
    {
        name: "Pom",
        type: "living",
        scope: "individual",
        iso6393: "pmo"
    },
    {
        name: "Northern Pame",
        type: "living",
        scope: "individual",
        iso6393: "pmq"
    },
    {
        name: "Paynamar",
        type: "living",
        scope: "individual",
        iso6393: "pmr"
    },
    {
        name: "Piemontese",
        type: "living",
        scope: "individual",
        iso6393: "pms"
    },
    {
        name: "Tuamotuan",
        type: "living",
        scope: "individual",
        iso6393: "pmt"
    },
    {
        name: "Plains Miwok",
        type: "living",
        scope: "individual",
        iso6393: "pmw"
    },
    {
        name: "Poumei Naga",
        type: "living",
        scope: "individual",
        iso6393: "pmx"
    },
    {
        name: "Papuan Malay",
        type: "living",
        scope: "individual",
        iso6393: "pmy"
    },
    {
        name: "Southern Pame",
        type: "extinct",
        scope: "individual",
        iso6393: "pmz"
    },
    {
        name: "Punan Bah-Biau",
        type: "living",
        scope: "individual",
        iso6393: "pna"
    },
    {
        name: "Western Panjabi",
        type: "living",
        scope: "individual",
        iso6393: "pnb"
    },
    {
        name: "Pannei",
        type: "living",
        scope: "individual",
        iso6393: "pnc"
    },
    {
        name: "Mpinda",
        type: "living",
        scope: "individual",
        iso6393: "pnd"
    },
    {
        name: "Western Penan",
        type: "living",
        scope: "individual",
        iso6393: "pne"
    },
    {
        name: "Pongu",
        type: "living",
        scope: "individual",
        iso6393: "png"
    },
    {
        name: "Penrhyn",
        type: "living",
        scope: "individual",
        iso6393: "pnh"
    },
    {
        name: "Aoheng",
        type: "living",
        scope: "individual",
        iso6393: "pni"
    },
    {
        name: "Pinjarup",
        type: "extinct",
        scope: "individual",
        iso6393: "pnj"
    },
    {
        name: "Paunaka",
        type: "living",
        scope: "individual",
        iso6393: "pnk"
    },
    {
        name: "Paleni",
        type: "living",
        scope: "individual",
        iso6393: "pnl"
    },
    {
        name: "Punan Batu 1",
        type: "living",
        scope: "individual",
        iso6393: "pnm"
    },
    {
        name: "Pinai-Hagahai",
        type: "living",
        scope: "individual",
        iso6393: "pnn"
    },
    {
        name: "Panobo",
        type: "extinct",
        scope: "individual",
        iso6393: "pno"
    },
    {
        name: "Pancana",
        type: "living",
        scope: "individual",
        iso6393: "pnp"
    },
    {
        name: "Pana (Burkina Faso)",
        type: "living",
        scope: "individual",
        iso6393: "pnq"
    },
    {
        name: "Panim",
        type: "living",
        scope: "individual",
        iso6393: "pnr"
    },
    {
        name: "Ponosakan",
        type: "living",
        scope: "individual",
        iso6393: "pns"
    },
    {
        name: "Pontic",
        type: "living",
        scope: "individual",
        iso6393: "pnt"
    },
    {
        name: "Jiongnai Bunu",
        type: "living",
        scope: "individual",
        iso6393: "pnu"
    },
    {
        name: "Pinigura",
        type: "living",
        scope: "individual",
        iso6393: "pnv"
    },
    {
        name: "Banyjima",
        type: "living",
        scope: "individual",
        iso6393: "pnw"
    },
    {
        name: "Phong-Kniang",
        type: "living",
        scope: "individual",
        iso6393: "pnx"
    },
    {
        name: "Pinyin",
        type: "living",
        scope: "individual",
        iso6393: "pny"
    },
    {
        name: "Pana (Central African Republic)",
        type: "living",
        scope: "individual",
        iso6393: "pnz"
    },
    {
        name: "Poqomam",
        type: "living",
        scope: "individual",
        iso6393: "poc"
    },
    {
        name: "San Juan Atzingo Popoloca",
        type: "living",
        scope: "individual",
        iso6393: "poe"
    },
    {
        name: "Poke",
        type: "living",
        scope: "individual",
        iso6393: "pof"
    },
    {
        name: "Potigu\xe1ra",
        type: "extinct",
        scope: "individual",
        iso6393: "pog"
    },
    {
        name: "Poqomchi'",
        type: "living",
        scope: "individual",
        iso6393: "poh"
    },
    {
        name: "Highland Popoluca",
        type: "living",
        scope: "individual",
        iso6393: "poi"
    },
    {
        name: "Pokang\xe1",
        type: "living",
        scope: "individual",
        iso6393: "pok"
    },
    {
        name: "Polish",
        type: "living",
        scope: "individual",
        iso6393: "pol",
        iso6392B: "pol",
        iso6392T: "pol",
        iso6391: "pl"
    },
    {
        name: "Southeastern Pomo",
        type: "living",
        scope: "individual",
        iso6393: "pom"
    },
    {
        name: "Pohnpeian",
        type: "living",
        scope: "individual",
        iso6393: "pon",
        iso6392B: "pon",
        iso6392T: "pon"
    },
    {
        name: "Central Pomo",
        type: "extinct",
        scope: "individual",
        iso6393: "poo"
    },
    {
        name: "Pwapw\xe2",
        type: "living",
        scope: "individual",
        iso6393: "pop"
    },
    {
        name: "Texistepec Popoluca",
        type: "living",
        scope: "individual",
        iso6393: "poq"
    },
    {
        name: "Portuguese",
        type: "living",
        scope: "individual",
        iso6393: "por",
        iso6392B: "por",
        iso6392T: "por",
        iso6391: "pt"
    },
    {
        name: "Sayula Popoluca",
        type: "living",
        scope: "individual",
        iso6393: "pos"
    },
    {
        name: "Potawatomi",
        type: "living",
        scope: "individual",
        iso6393: "pot"
    },
    {
        name: "Upper Guinea Crioulo",
        type: "living",
        scope: "individual",
        iso6393: "pov"
    },
    {
        name: "San Felipe Otlaltepec Popoloca",
        type: "living",
        scope: "individual",
        iso6393: "pow"
    },
    {
        name: "Polabian",
        type: "extinct",
        scope: "individual",
        iso6393: "pox"
    },
    {
        name: "Pogolo",
        type: "living",
        scope: "individual",
        iso6393: "poy"
    },
    {
        name: "Papi",
        type: "living",
        scope: "individual",
        iso6393: "ppe"
    },
    {
        name: "Paipai",
        type: "living",
        scope: "individual",
        iso6393: "ppi"
    },
    {
        name: "Uma",
        type: "living",
        scope: "individual",
        iso6393: "ppk"
    },
    {
        name: "Pipil",
        type: "living",
        scope: "individual",
        iso6393: "ppl"
    },
    {
        name: "Papuma",
        type: "living",
        scope: "individual",
        iso6393: "ppm"
    },
    {
        name: "Papapana",
        type: "living",
        scope: "individual",
        iso6393: "ppn"
    },
    {
        name: "Folopa",
        type: "living",
        scope: "individual",
        iso6393: "ppo"
    },
    {
        name: "Pelende",
        type: "living",
        scope: "individual",
        iso6393: "ppp"
    },
    {
        name: "Pei",
        type: "living",
        scope: "individual",
        iso6393: "ppq"
    },
    {
        name: "San Lu\xeds Temalacayuca Popoloca",
        type: "living",
        scope: "individual",
        iso6393: "pps"
    },
    {
        name: "Pare",
        type: "living",
        scope: "individual",
        iso6393: "ppt"
    },
    {
        name: "Papora",
        type: "extinct",
        scope: "individual",
        iso6393: "ppu"
    },
    {
        name: "Pa'a",
        type: "living",
        scope: "individual",
        iso6393: "pqa"
    },
    {
        name: "Malecite-Passamaquoddy",
        type: "living",
        scope: "individual",
        iso6393: "pqm"
    },
    {
        name: "Parachi",
        type: "living",
        scope: "individual",
        iso6393: "prc"
    },
    {
        name: "Parsi-Dari",
        type: "living",
        scope: "individual",
        iso6393: "prd"
    },
    {
        name: "Principense",
        type: "living",
        scope: "individual",
        iso6393: "pre"
    },
    {
        name: "Paranan",
        type: "living",
        scope: "individual",
        iso6393: "prf"
    },
    {
        name: "Prussian",
        type: "living",
        scope: "individual",
        iso6393: "prg"
    },
    {
        name: "Porohanon",
        type: "living",
        scope: "individual",
        iso6393: "prh"
    },
    {
        name: "Paic\xee",
        type: "living",
        scope: "individual",
        iso6393: "pri"
    },
    {
        name: "Parauk",
        type: "living",
        scope: "individual",
        iso6393: "prk"
    },
    {
        name: "Peruvian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "prl"
    },
    {
        name: "Kibiri",
        type: "living",
        scope: "individual",
        iso6393: "prm"
    },
    {
        name: "Prasuni",
        type: "living",
        scope: "individual",
        iso6393: "prn"
    },
    {
        name: "Old Proven\xe7al (to 1500)",
        type: "historical",
        scope: "individual",
        iso6393: "pro",
        iso6392B: "pro",
        iso6392T: "pro"
    },
    {
        name: "Parsi",
        type: "living",
        scope: "individual",
        iso6393: "prp"
    },
    {
        name: "Ash\xe9ninka Peren\xe9",
        type: "living",
        scope: "individual",
        iso6393: "prq"
    },
    {
        name: "Puri",
        type: "extinct",
        scope: "individual",
        iso6393: "prr"
    },
    {
        name: "Dari",
        type: "living",
        scope: "individual",
        iso6393: "prs"
    },
    {
        name: "Phai",
        type: "living",
        scope: "individual",
        iso6393: "prt"
    },
    {
        name: "Puragi",
        type: "living",
        scope: "individual",
        iso6393: "pru"
    },
    {
        name: "Parawen",
        type: "living",
        scope: "individual",
        iso6393: "prw"
    },
    {
        name: "Purik",
        type: "living",
        scope: "individual",
        iso6393: "prx"
    },
    {
        name: "Providencia Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "prz"
    },
    {
        name: "Asue Awyu",
        type: "living",
        scope: "individual",
        iso6393: "psa"
    },
    {
        name: "Persian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "psc"
    },
    {
        name: "Plains Indian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "psd"
    },
    {
        name: "Central Malay",
        type: "living",
        scope: "individual",
        iso6393: "pse"
    },
    {
        name: "Penang Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "psg"
    },
    {
        name: "Southwest Pashai",
        type: "living",
        scope: "individual",
        iso6393: "psh"
    },
    {
        name: "Southeast Pashai",
        type: "living",
        scope: "individual",
        iso6393: "psi"
    },
    {
        name: "Puerto Rican Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "psl"
    },
    {
        name: "Pauserna",
        type: "extinct",
        scope: "individual",
        iso6393: "psm"
    },
    {
        name: "Panasuan",
        type: "living",
        scope: "individual",
        iso6393: "psn"
    },
    {
        name: "Polish Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "pso"
    },
    {
        name: "Philippine Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "psp"
    },
    {
        name: "Pasi",
        type: "living",
        scope: "individual",
        iso6393: "psq"
    },
    {
        name: "Portuguese Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "psr"
    },
    {
        name: "Kaulong",
        type: "living",
        scope: "individual",
        iso6393: "pss"
    },
    {
        name: "Central Pashto",
        type: "living",
        scope: "individual",
        iso6393: "pst"
    },
    {
        name: "Sauraseni Prākrit",
        type: "historical",
        scope: "individual",
        iso6393: "psu"
    },
    {
        name: "Port Sandwich",
        type: "living",
        scope: "individual",
        iso6393: "psw"
    },
    {
        name: "Piscataway",
        type: "extinct",
        scope: "individual",
        iso6393: "psy"
    },
    {
        name: "Pai Tavytera",
        type: "living",
        scope: "individual",
        iso6393: "pta"
    },
    {
        name: "Patax\xf3 H\xe3-Ha-H\xe3e",
        type: "extinct",
        scope: "individual",
        iso6393: "pth"
    },
    {
        name: "Pindiini",
        type: "living",
        scope: "individual",
        iso6393: "pti"
    },
    {
        name: "Patani",
        type: "living",
        scope: "individual",
        iso6393: "ptn"
    },
    {
        name: "Zo'\xe9",
        type: "living",
        scope: "individual",
        iso6393: "pto"
    },
    {
        name: "Patep",
        type: "living",
        scope: "individual",
        iso6393: "ptp"
    },
    {
        name: "Pattapu",
        type: "living",
        scope: "individual",
        iso6393: "ptq"
    },
    {
        name: "Piamatsina",
        type: "living",
        scope: "individual",
        iso6393: "ptr"
    },
    {
        name: "Enrekang",
        type: "living",
        scope: "individual",
        iso6393: "ptt"
    },
    {
        name: "Bambam",
        type: "living",
        scope: "individual",
        iso6393: "ptu"
    },
    {
        name: "Port Vato",
        type: "living",
        scope: "individual",
        iso6393: "ptv"
    },
    {
        name: "Pentlatch",
        type: "extinct",
        scope: "individual",
        iso6393: "ptw"
    },
    {
        name: "Pathiya",
        type: "living",
        scope: "individual",
        iso6393: "pty"
    },
    {
        name: "Western Highland Purepecha",
        type: "living",
        scope: "individual",
        iso6393: "pua"
    },
    {
        name: "Purum",
        type: "living",
        scope: "individual",
        iso6393: "pub"
    },
    {
        name: "Punan Merap",
        type: "living",
        scope: "individual",
        iso6393: "puc"
    },
    {
        name: "Punan Aput",
        type: "living",
        scope: "individual",
        iso6393: "pud"
    },
    {
        name: "Puelche",
        type: "extinct",
        scope: "individual",
        iso6393: "pue"
    },
    {
        name: "Punan Merah",
        type: "living",
        scope: "individual",
        iso6393: "puf"
    },
    {
        name: "Phuie",
        type: "living",
        scope: "individual",
        iso6393: "pug"
    },
    {
        name: "Puinave",
        type: "living",
        scope: "individual",
        iso6393: "pui"
    },
    {
        name: "Punan Tubu",
        type: "living",
        scope: "individual",
        iso6393: "puj"
    },
    {
        name: "Puma",
        type: "living",
        scope: "individual",
        iso6393: "pum"
    },
    {
        name: "Puoc",
        type: "living",
        scope: "individual",
        iso6393: "puo"
    },
    {
        name: "Pulabu",
        type: "living",
        scope: "individual",
        iso6393: "pup"
    },
    {
        name: "Puquina",
        type: "extinct",
        scope: "individual",
        iso6393: "puq"
    },
    {
        name: "Purubor\xe1",
        type: "living",
        scope: "individual",
        iso6393: "pur"
    },
    {
        name: "Pushto",
        type: "living",
        scope: "macrolanguage",
        iso6393: "pus",
        iso6392B: "pus",
        iso6392T: "pus",
        iso6391: "ps"
    },
    {
        name: "Putoh",
        type: "living",
        scope: "individual",
        iso6393: "put"
    },
    {
        name: "Punu",
        type: "living",
        scope: "individual",
        iso6393: "puu"
    },
    {
        name: "Puluwatese",
        type: "living",
        scope: "individual",
        iso6393: "puw"
    },
    {
        name: "Puare",
        type: "living",
        scope: "individual",
        iso6393: "pux"
    },
    {
        name: "Purisime\xf1o",
        type: "extinct",
        scope: "individual",
        iso6393: "puy"
    },
    {
        name: "Pawaia",
        type: "living",
        scope: "individual",
        iso6393: "pwa"
    },
    {
        name: "Panawa",
        type: "living",
        scope: "individual",
        iso6393: "pwb"
    },
    {
        name: "Gapapaiwa",
        type: "living",
        scope: "individual",
        iso6393: "pwg"
    },
    {
        name: "Patwin",
        type: "extinct",
        scope: "individual",
        iso6393: "pwi"
    },
    {
        name: "Molbog",
        type: "living",
        scope: "individual",
        iso6393: "pwm"
    },
    {
        name: "Paiwan",
        type: "living",
        scope: "individual",
        iso6393: "pwn"
    },
    {
        name: "Pwo Western Karen",
        type: "living",
        scope: "individual",
        iso6393: "pwo"
    },
    {
        name: "Powari",
        type: "living",
        scope: "individual",
        iso6393: "pwr"
    },
    {
        name: "Pwo Northern Karen",
        type: "living",
        scope: "individual",
        iso6393: "pww"
    },
    {
        name: "Quetzaltepec Mixe",
        type: "living",
        scope: "individual",
        iso6393: "pxm"
    },
    {
        name: "Pye Krumen",
        type: "living",
        scope: "individual",
        iso6393: "pye"
    },
    {
        name: "Fyam",
        type: "living",
        scope: "individual",
        iso6393: "pym"
    },
    {
        name: "Poyan\xe1wa",
        type: "living",
        scope: "individual",
        iso6393: "pyn"
    },
    {
        name: "Paraguayan Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "pys"
    },
    {
        name: "Puyuma",
        type: "living",
        scope: "individual",
        iso6393: "pyu"
    },
    {
        name: "Pyu (Myanmar)",
        type: "ancient",
        scope: "individual",
        iso6393: "pyx"
    },
    {
        name: "Pyen",
        type: "living",
        scope: "individual",
        iso6393: "pyy"
    },
    {
        name: "Para Naga",
        type: "living",
        scope: "individual",
        iso6393: "pzn"
    },
    {
        name: "Quapaw",
        type: "living",
        scope: "individual",
        iso6393: "qua"
    },
    {
        name: "Huallaga Hu\xe1nuco Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qub"
    },
    {
        name: "K'iche'",
        type: "living",
        scope: "individual",
        iso6393: "quc"
    },
    {
        name: "Calder\xf3n Highland Quichua",
        type: "living",
        scope: "individual",
        iso6393: "qud"
    },
    {
        name: "Quechua",
        type: "living",
        scope: "macrolanguage",
        iso6393: "que",
        iso6392B: "que",
        iso6392T: "que",
        iso6391: "qu"
    },
    {
        name: "Lambayeque Quechua",
        type: "living",
        scope: "individual",
        iso6393: "quf"
    },
    {
        name: "Chimborazo Highland Quichua",
        type: "living",
        scope: "individual",
        iso6393: "qug"
    },
    {
        name: "South Bolivian Quechua",
        type: "living",
        scope: "individual",
        iso6393: "quh"
    },
    {
        name: "Quileute",
        type: "living",
        scope: "individual",
        iso6393: "qui"
    },
    {
        name: "Chachapoyas Quechua",
        type: "living",
        scope: "individual",
        iso6393: "quk"
    },
    {
        name: "North Bolivian Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qul"
    },
    {
        name: "Sipacapense",
        type: "living",
        scope: "individual",
        iso6393: "qum"
    },
    {
        name: "Quinault",
        type: "extinct",
        scope: "individual",
        iso6393: "qun"
    },
    {
        name: "Southern Pastaza Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qup"
    },
    {
        name: "Quinqui",
        type: "living",
        scope: "individual",
        iso6393: "quq"
    },
    {
        name: "Yanahuanca Pasco Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qur"
    },
    {
        name: "Santiago del Estero Quichua",
        type: "living",
        scope: "individual",
        iso6393: "qus"
    },
    {
        name: "Sacapulteco",
        type: "living",
        scope: "individual",
        iso6393: "quv"
    },
    {
        name: "Tena Lowland Quichua",
        type: "living",
        scope: "individual",
        iso6393: "quw"
    },
    {
        name: "Yauyos Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qux"
    },
    {
        name: "Ayacucho Quechua",
        type: "living",
        scope: "individual",
        iso6393: "quy"
    },
    {
        name: "Cusco Quechua",
        type: "living",
        scope: "individual",
        iso6393: "quz"
    },
    {
        name: "Ambo-Pasco Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qva"
    },
    {
        name: "Cajamarca Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qvc"
    },
    {
        name: "Eastern Apur\xedmac Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qve"
    },
    {
        name: "Huamal\xedes-Dos de Mayo Hu\xe1nuco Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qvh"
    },
    {
        name: "Imbabura Highland Quichua",
        type: "living",
        scope: "individual",
        iso6393: "qvi"
    },
    {
        name: "Loja Highland Quichua",
        type: "living",
        scope: "individual",
        iso6393: "qvj"
    },
    {
        name: "Cajatambo North Lima Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qvl"
    },
    {
        name: "Margos-Yarowilca-Lauricocha Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qvm"
    },
    {
        name: "North Jun\xedn Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qvn"
    },
    {
        name: "Napo Lowland Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qvo"
    },
    {
        name: "Pacaraos Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qvp"
    },
    {
        name: "San Mart\xedn Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qvs"
    },
    {
        name: "Huaylla Wanca Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qvw"
    },
    {
        name: "Queyu",
        type: "living",
        scope: "individual",
        iso6393: "qvy"
    },
    {
        name: "Northern Pastaza Quichua",
        type: "living",
        scope: "individual",
        iso6393: "qvz"
    },
    {
        name: "Corongo Ancash Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qwa"
    },
    {
        name: "Classical Quechua",
        type: "historical",
        scope: "individual",
        iso6393: "qwc"
    },
    {
        name: "Huaylas Ancash Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qwh"
    },
    {
        name: "Kuman (Russia)",
        type: "extinct",
        scope: "individual",
        iso6393: "qwm"
    },
    {
        name: "Sihuas Ancash Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qws"
    },
    {
        name: "Kwalhioqua-Tlatskanai",
        type: "extinct",
        scope: "individual",
        iso6393: "qwt"
    },
    {
        name: "Chiqui\xe1n Ancash Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qxa"
    },
    {
        name: "Chincha Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qxc"
    },
    {
        name: "Panao Hu\xe1nuco Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qxh"
    },
    {
        name: "Salasaca Highland Quichua",
        type: "living",
        scope: "individual",
        iso6393: "qxl"
    },
    {
        name: "Northern Conchucos Ancash Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qxn"
    },
    {
        name: "Southern Conchucos Ancash Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qxo"
    },
    {
        name: "Puno Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qxp"
    },
    {
        name: "Qashqa'i",
        type: "living",
        scope: "individual",
        iso6393: "qxq"
    },
    {
        name: "Ca\xf1ar Highland Quichua",
        type: "living",
        scope: "individual",
        iso6393: "qxr"
    },
    {
        name: "Southern Qiang",
        type: "living",
        scope: "individual",
        iso6393: "qxs"
    },
    {
        name: "Santa Ana de Tusi Pasco Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qxt"
    },
    {
        name: "Arequipa-La Uni\xf3n Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qxu"
    },
    {
        name: "Jauja Wanca Quechua",
        type: "living",
        scope: "individual",
        iso6393: "qxw"
    },
    {
        name: "Quenya",
        type: "constructed",
        scope: "individual",
        iso6393: "qya"
    },
    {
        name: "Quiripi",
        type: "extinct",
        scope: "individual",
        iso6393: "qyp"
    },
    {
        name: "Dungmali",
        type: "living",
        scope: "individual",
        iso6393: "raa"
    },
    {
        name: "Camling",
        type: "living",
        scope: "individual",
        iso6393: "rab"
    },
    {
        name: "Rasawa",
        type: "living",
        scope: "individual",
        iso6393: "rac"
    },
    {
        name: "Rade",
        type: "living",
        scope: "individual",
        iso6393: "rad"
    },
    {
        name: "Western Meohang",
        type: "living",
        scope: "individual",
        iso6393: "raf"
    },
    {
        name: "Logooli",
        type: "living",
        scope: "individual",
        iso6393: "rag"
    },
    {
        name: "Rabha",
        type: "living",
        scope: "individual",
        iso6393: "rah"
    },
    {
        name: "Ramoaaina",
        type: "living",
        scope: "individual",
        iso6393: "rai"
    },
    {
        name: "Rajasthani",
        type: "living",
        scope: "macrolanguage",
        iso6393: "raj",
        iso6392B: "raj",
        iso6392T: "raj"
    },
    {
        name: "Tulu-Bohuai",
        type: "living",
        scope: "individual",
        iso6393: "rak"
    },
    {
        name: "Ralte",
        type: "living",
        scope: "individual",
        iso6393: "ral"
    },
    {
        name: "Canela",
        type: "living",
        scope: "individual",
        iso6393: "ram"
    },
    {
        name: "Riantana",
        type: "living",
        scope: "individual",
        iso6393: "ran"
    },
    {
        name: "Rao",
        type: "living",
        scope: "individual",
        iso6393: "rao"
    },
    {
        name: "Rapanui",
        type: "living",
        scope: "individual",
        iso6393: "rap",
        iso6392B: "rap",
        iso6392T: "rap"
    },
    {
        name: "Saam",
        type: "living",
        scope: "individual",
        iso6393: "raq"
    },
    {
        name: "Rarotongan",
        type: "living",
        scope: "individual",
        iso6393: "rar",
        iso6392B: "rar",
        iso6392T: "rar"
    },
    {
        name: "Tegali",
        type: "living",
        scope: "individual",
        iso6393: "ras"
    },
    {
        name: "Razajerdi",
        type: "living",
        scope: "individual",
        iso6393: "rat"
    },
    {
        name: "Raute",
        type: "living",
        scope: "individual",
        iso6393: "rau"
    },
    {
        name: "Sampang",
        type: "living",
        scope: "individual",
        iso6393: "rav"
    },
    {
        name: "Rawang",
        type: "living",
        scope: "individual",
        iso6393: "raw"
    },
    {
        name: "Rang",
        type: "living",
        scope: "individual",
        iso6393: "rax"
    },
    {
        name: "Rapa",
        type: "living",
        scope: "individual",
        iso6393: "ray"
    },
    {
        name: "Rahambuu",
        type: "living",
        scope: "individual",
        iso6393: "raz"
    },
    {
        name: "Rumai Palaung",
        type: "living",
        scope: "individual",
        iso6393: "rbb"
    },
    {
        name: "Northern Bontok",
        type: "living",
        scope: "individual",
        iso6393: "rbk"
    },
    {
        name: "Miraya Bikol",
        type: "living",
        scope: "individual",
        iso6393: "rbl"
    },
    {
        name: "Barababaraba",
        type: "extinct",
        scope: "individual",
        iso6393: "rbp"
    },
    {
        name: "R\xe9union Creole French",
        type: "living",
        scope: "individual",
        iso6393: "rcf"
    },
    {
        name: "Rudbari",
        type: "living",
        scope: "individual",
        iso6393: "rdb"
    },
    {
        name: "Rerau",
        type: "living",
        scope: "individual",
        iso6393: "rea"
    },
    {
        name: "Rembong",
        type: "living",
        scope: "individual",
        iso6393: "reb"
    },
    {
        name: "Rejang Kayan",
        type: "living",
        scope: "individual",
        iso6393: "ree"
    },
    {
        name: "Kara (Tanzania)",
        type: "living",
        scope: "individual",
        iso6393: "reg"
    },
    {
        name: "Reli",
        type: "living",
        scope: "individual",
        iso6393: "rei"
    },
    {
        name: "Rejang",
        type: "living",
        scope: "individual",
        iso6393: "rej"
    },
    {
        name: "Rendille",
        type: "living",
        scope: "individual",
        iso6393: "rel"
    },
    {
        name: "Remo",
        type: "extinct",
        scope: "individual",
        iso6393: "rem"
    },
    {
        name: "Rengao",
        type: "living",
        scope: "individual",
        iso6393: "ren"
    },
    {
        name: "Rer Bare",
        type: "extinct",
        scope: "individual",
        iso6393: "rer"
    },
    {
        name: "Reshe",
        type: "living",
        scope: "individual",
        iso6393: "res"
    },
    {
        name: "Retta",
        type: "living",
        scope: "individual",
        iso6393: "ret"
    },
    {
        name: "Reyesano",
        type: "living",
        scope: "individual",
        iso6393: "rey"
    },
    {
        name: "Roria",
        type: "living",
        scope: "individual",
        iso6393: "rga"
    },
    {
        name: "Romano-Greek",
        type: "living",
        scope: "individual",
        iso6393: "rge"
    },
    {
        name: "Rangkas",
        type: "extinct",
        scope: "individual",
        iso6393: "rgk"
    },
    {
        name: "Romagnol",
        type: "living",
        scope: "individual",
        iso6393: "rgn"
    },
    {
        name: "Res\xedgaro",
        type: "living",
        scope: "individual",
        iso6393: "rgr"
    },
    {
        name: "Southern Roglai",
        type: "living",
        scope: "individual",
        iso6393: "rgs"
    },
    {
        name: "Ringgou",
        type: "living",
        scope: "individual",
        iso6393: "rgu"
    },
    {
        name: "Rohingya",
        type: "living",
        scope: "individual",
        iso6393: "rhg"
    },
    {
        name: "Yahang",
        type: "living",
        scope: "individual",
        iso6393: "rhp"
    },
    {
        name: "Riang (India)",
        type: "living",
        scope: "individual",
        iso6393: "ria"
    },
    {
        name: "Tarifit",
        type: "living",
        scope: "individual",
        iso6393: "rif"
    },
    {
        name: "Riang Lang",
        type: "living",
        scope: "individual",
        iso6393: "ril"
    },
    {
        name: "Nyaturu",
        type: "living",
        scope: "individual",
        iso6393: "rim"
    },
    {
        name: "Nungu",
        type: "living",
        scope: "individual",
        iso6393: "rin"
    },
    {
        name: "Ribun",
        type: "living",
        scope: "individual",
        iso6393: "rir"
    },
    {
        name: "Ritharrngu",
        type: "living",
        scope: "individual",
        iso6393: "rit"
    },
    {
        name: "Riung",
        type: "living",
        scope: "individual",
        iso6393: "riu"
    },
    {
        name: "Rajong",
        type: "living",
        scope: "individual",
        iso6393: "rjg"
    },
    {
        name: "Raji",
        type: "living",
        scope: "individual",
        iso6393: "rji"
    },
    {
        name: "Rajbanshi",
        type: "living",
        scope: "individual",
        iso6393: "rjs"
    },
    {
        name: "Kraol",
        type: "living",
        scope: "individual",
        iso6393: "rka"
    },
    {
        name: "Rikbaktsa",
        type: "living",
        scope: "individual",
        iso6393: "rkb"
    },
    {
        name: "Rakahanga-Manihiki",
        type: "living",
        scope: "individual",
        iso6393: "rkh"
    },
    {
        name: "Rakhine",
        type: "living",
        scope: "individual",
        iso6393: "rki"
    },
    {
        name: "Marka",
        type: "living",
        scope: "individual",
        iso6393: "rkm"
    },
    {
        name: "Rangpuri",
        type: "living",
        scope: "individual",
        iso6393: "rkt"
    },
    {
        name: "Arakwal",
        type: "extinct",
        scope: "individual",
        iso6393: "rkw"
    },
    {
        name: "Rama",
        type: "living",
        scope: "individual",
        iso6393: "rma"
    },
    {
        name: "Rembarrnga",
        type: "living",
        scope: "individual",
        iso6393: "rmb"
    },
    {
        name: "Carpathian Romani",
        type: "living",
        scope: "individual",
        iso6393: "rmc"
    },
    {
        name: "Traveller Danish",
        type: "extinct",
        scope: "individual",
        iso6393: "rmd"
    },
    {
        name: "Angloromani",
        type: "living",
        scope: "individual",
        iso6393: "rme"
    },
    {
        name: "Kalo Finnish Romani",
        type: "living",
        scope: "individual",
        iso6393: "rmf"
    },
    {
        name: "Traveller Norwegian",
        type: "living",
        scope: "individual",
        iso6393: "rmg"
    },
    {
        name: "Murkim",
        type: "living",
        scope: "individual",
        iso6393: "rmh"
    },
    {
        name: "Lomavren",
        type: "living",
        scope: "individual",
        iso6393: "rmi"
    },
    {
        name: "Romkun",
        type: "living",
        scope: "individual",
        iso6393: "rmk"
    },
    {
        name: "Baltic Romani",
        type: "living",
        scope: "individual",
        iso6393: "rml"
    },
    {
        name: "Roma",
        type: "living",
        scope: "individual",
        iso6393: "rmm"
    },
    {
        name: "Balkan Romani",
        type: "living",
        scope: "individual",
        iso6393: "rmn"
    },
    {
        name: "Sinte Romani",
        type: "living",
        scope: "individual",
        iso6393: "rmo"
    },
    {
        name: "Rempi",
        type: "living",
        scope: "individual",
        iso6393: "rmp"
    },
    {
        name: "Cal\xf3",
        type: "living",
        scope: "individual",
        iso6393: "rmq"
    },
    {
        name: "Romanian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "rms"
    },
    {
        name: "Domari",
        type: "living",
        scope: "individual",
        iso6393: "rmt"
    },
    {
        name: "Tavringer Romani",
        type: "living",
        scope: "individual",
        iso6393: "rmu"
    },
    {
        name: "Romanova",
        type: "constructed",
        scope: "individual",
        iso6393: "rmv"
    },
    {
        name: "Welsh Romani",
        type: "living",
        scope: "individual",
        iso6393: "rmw"
    },
    {
        name: "Romam",
        type: "living",
        scope: "individual",
        iso6393: "rmx"
    },
    {
        name: "Vlax Romani",
        type: "living",
        scope: "individual",
        iso6393: "rmy"
    },
    {
        name: "Marma",
        type: "living",
        scope: "individual",
        iso6393: "rmz"
    },
    {
        name: "Ruund",
        type: "living",
        scope: "individual",
        iso6393: "rnd"
    },
    {
        name: "Ronga",
        type: "living",
        scope: "individual",
        iso6393: "rng"
    },
    {
        name: "Ranglong",
        type: "living",
        scope: "individual",
        iso6393: "rnl"
    },
    {
        name: "Roon",
        type: "living",
        scope: "individual",
        iso6393: "rnn"
    },
    {
        name: "Rongpo",
        type: "living",
        scope: "individual",
        iso6393: "rnp"
    },
    {
        name: "Nari Nari",
        type: "extinct",
        scope: "individual",
        iso6393: "rnr"
    },
    {
        name: "Rungwa",
        type: "living",
        scope: "individual",
        iso6393: "rnw"
    },
    {
        name: "Tae'",
        type: "living",
        scope: "individual",
        iso6393: "rob"
    },
    {
        name: "Cacgia Roglai",
        type: "living",
        scope: "individual",
        iso6393: "roc"
    },
    {
        name: "Rogo",
        type: "living",
        scope: "individual",
        iso6393: "rod"
    },
    {
        name: "Ronji",
        type: "living",
        scope: "individual",
        iso6393: "roe"
    },
    {
        name: "Rombo",
        type: "living",
        scope: "individual",
        iso6393: "rof"
    },
    {
        name: "Northern Roglai",
        type: "living",
        scope: "individual",
        iso6393: "rog"
    },
    {
        name: "Romansh",
        type: "living",
        scope: "individual",
        iso6393: "roh",
        iso6392B: "roh",
        iso6392T: "roh",
        iso6391: "rm"
    },
    {
        name: "Romblomanon",
        type: "living",
        scope: "individual",
        iso6393: "rol"
    },
    {
        name: "Romany",
        type: "living",
        scope: "macrolanguage",
        iso6393: "rom",
        iso6392B: "rom",
        iso6392T: "rom"
    },
    {
        name: "Romanian",
        type: "living",
        scope: "individual",
        iso6393: "ron",
        iso6392B: "rum",
        iso6392T: "ron",
        iso6391: "ro"
    },
    {
        name: "Rotokas",
        type: "living",
        scope: "individual",
        iso6393: "roo"
    },
    {
        name: "Kriol",
        type: "living",
        scope: "individual",
        iso6393: "rop"
    },
    {
        name: "Rongga",
        type: "living",
        scope: "individual",
        iso6393: "ror"
    },
    {
        name: "Runga",
        type: "living",
        scope: "individual",
        iso6393: "rou"
    },
    {
        name: "Dela-Oenale",
        type: "living",
        scope: "individual",
        iso6393: "row"
    },
    {
        name: "Repanbitip",
        type: "living",
        scope: "individual",
        iso6393: "rpn"
    },
    {
        name: "Rapting",
        type: "living",
        scope: "individual",
        iso6393: "rpt"
    },
    {
        name: "Ririo",
        type: "living",
        scope: "individual",
        iso6393: "rri"
    },
    {
        name: "Waima",
        type: "living",
        scope: "individual",
        iso6393: "rro"
    },
    {
        name: "Arritinngithigh",
        type: "extinct",
        scope: "individual",
        iso6393: "rrt"
    },
    {
        name: "Romano-Serbian",
        type: "living",
        scope: "individual",
        iso6393: "rsb"
    },
    {
        name: "Russian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "rsl"
    },
    {
        name: "Miriwoong Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "rsm"
    },
    {
        name: "Rungtu Chin",
        type: "living",
        scope: "individual",
        iso6393: "rtc"
    },
    {
        name: "Ratahan",
        type: "living",
        scope: "individual",
        iso6393: "rth"
    },
    {
        name: "Rotuman",
        type: "living",
        scope: "individual",
        iso6393: "rtm"
    },
    {
        name: "Yurats",
        type: "extinct",
        scope: "individual",
        iso6393: "rts"
    },
    {
        name: "Rathawi",
        type: "living",
        scope: "individual",
        iso6393: "rtw"
    },
    {
        name: "Gungu",
        type: "living",
        scope: "individual",
        iso6393: "rub"
    },
    {
        name: "Ruuli",
        type: "living",
        scope: "individual",
        iso6393: "ruc"
    },
    {
        name: "Rusyn",
        type: "living",
        scope: "individual",
        iso6393: "rue"
    },
    {
        name: "Luguru",
        type: "living",
        scope: "individual",
        iso6393: "ruf"
    },
    {
        name: "Roviana",
        type: "living",
        scope: "individual",
        iso6393: "rug"
    },
    {
        name: "Ruga",
        type: "living",
        scope: "individual",
        iso6393: "ruh"
    },
    {
        name: "Rufiji",
        type: "living",
        scope: "individual",
        iso6393: "rui"
    },
    {
        name: "Che",
        type: "living",
        scope: "individual",
        iso6393: "ruk"
    },
    {
        name: "Rundi",
        type: "living",
        scope: "individual",
        iso6393: "run",
        iso6392B: "run",
        iso6392T: "run",
        iso6391: "rn"
    },
    {
        name: "Istro Romanian",
        type: "living",
        scope: "individual",
        iso6393: "ruo"
    },
    {
        name: "Macedo-Romanian",
        type: "living",
        scope: "individual",
        iso6393: "rup",
        iso6392B: "rup",
        iso6392T: "rup"
    },
    {
        name: "Megleno Romanian",
        type: "living",
        scope: "individual",
        iso6393: "ruq"
    },
    {
        name: "Russian",
        type: "living",
        scope: "individual",
        iso6393: "rus",
        iso6392B: "rus",
        iso6392T: "rus",
        iso6391: "ru"
    },
    {
        name: "Rutul",
        type: "living",
        scope: "individual",
        iso6393: "rut"
    },
    {
        name: "Lanas Lobu",
        type: "living",
        scope: "individual",
        iso6393: "ruu"
    },
    {
        name: "Mala (Nigeria)",
        type: "living",
        scope: "individual",
        iso6393: "ruy"
    },
    {
        name: "Ruma",
        type: "living",
        scope: "individual",
        iso6393: "ruz"
    },
    {
        name: "Rawo",
        type: "living",
        scope: "individual",
        iso6393: "rwa"
    },
    {
        name: "Rwa",
        type: "living",
        scope: "individual",
        iso6393: "rwk"
    },
    {
        name: "Amba (Uganda)",
        type: "living",
        scope: "individual",
        iso6393: "rwm"
    },
    {
        name: "Rawa",
        type: "living",
        scope: "individual",
        iso6393: "rwo"
    },
    {
        name: "Marwari (India)",
        type: "living",
        scope: "individual",
        iso6393: "rwr"
    },
    {
        name: "Ngardi",
        type: "living",
        scope: "individual",
        iso6393: "rxd"
    },
    {
        name: "Karuwali",
        type: "extinct",
        scope: "individual",
        iso6393: "rxw"
    },
    {
        name: "Northern Amami-Oshima",
        type: "living",
        scope: "individual",
        iso6393: "ryn"
    },
    {
        name: "Yaeyama",
        type: "living",
        scope: "individual",
        iso6393: "rys"
    },
    {
        name: "Central Okinawan",
        type: "living",
        scope: "individual",
        iso6393: "ryu"
    },
    {
        name: "Rāziḥī",
        type: "living",
        scope: "individual",
        iso6393: "rzh"
    },
    {
        name: "Saba",
        type: "living",
        scope: "individual",
        iso6393: "saa"
    },
    {
        name: "Buglere",
        type: "living",
        scope: "individual",
        iso6393: "sab"
    },
    {
        name: "Meskwaki",
        type: "living",
        scope: "individual",
        iso6393: "sac"
    },
    {
        name: "Sandawe",
        type: "living",
        scope: "individual",
        iso6393: "sad",
        iso6392B: "sad",
        iso6392T: "sad"
    },
    {
        name: "Saban\xea",
        type: "living",
        scope: "individual",
        iso6393: "sae"
    },
    {
        name: "Safaliba",
        type: "living",
        scope: "individual",
        iso6393: "saf"
    },
    {
        name: "Sango",
        type: "living",
        scope: "individual",
        iso6393: "sag",
        iso6392B: "sag",
        iso6392T: "sag",
        iso6391: "sg"
    },
    {
        name: "Yakut",
        type: "living",
        scope: "individual",
        iso6393: "sah",
        iso6392B: "sah",
        iso6392T: "sah"
    },
    {
        name: "Sahu",
        type: "living",
        scope: "individual",
        iso6393: "saj"
    },
    {
        name: "Sake",
        type: "living",
        scope: "individual",
        iso6393: "sak"
    },
    {
        name: "Samaritan Aramaic",
        type: "extinct",
        scope: "individual",
        iso6393: "sam",
        iso6392B: "sam",
        iso6392T: "sam"
    },
    {
        name: "Sanskrit",
        type: "ancient",
        scope: "individual",
        iso6393: "san",
        iso6392B: "san",
        iso6392T: "san",
        iso6391: "sa"
    },
    {
        name: "Sause",
        type: "living",
        scope: "individual",
        iso6393: "sao"
    },
    {
        name: "Samburu",
        type: "living",
        scope: "individual",
        iso6393: "saq"
    },
    {
        name: "Saraveca",
        type: "extinct",
        scope: "individual",
        iso6393: "sar"
    },
    {
        name: "Sasak",
        type: "living",
        scope: "individual",
        iso6393: "sas",
        iso6392B: "sas",
        iso6392T: "sas"
    },
    {
        name: "Santali",
        type: "living",
        scope: "individual",
        iso6393: "sat",
        iso6392B: "sat",
        iso6392T: "sat"
    },
    {
        name: "Saleman",
        type: "living",
        scope: "individual",
        iso6393: "sau"
    },
    {
        name: "Saafi-Saafi",
        type: "living",
        scope: "individual",
        iso6393: "sav"
    },
    {
        name: "Sawi",
        type: "living",
        scope: "individual",
        iso6393: "saw"
    },
    {
        name: "Sa",
        type: "living",
        scope: "individual",
        iso6393: "sax"
    },
    {
        name: "Saya",
        type: "living",
        scope: "individual",
        iso6393: "say"
    },
    {
        name: "Saurashtra",
        type: "living",
        scope: "individual",
        iso6393: "saz"
    },
    {
        name: "Ngambay",
        type: "living",
        scope: "individual",
        iso6393: "sba"
    },
    {
        name: "Simbo",
        type: "living",
        scope: "individual",
        iso6393: "sbb"
    },
    {
        name: "Kele (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "sbc"
    },
    {
        name: "Southern Samo",
        type: "living",
        scope: "individual",
        iso6393: "sbd"
    },
    {
        name: "Saliba",
        type: "living",
        scope: "individual",
        iso6393: "sbe"
    },
    {
        name: "Chabu",
        type: "living",
        scope: "individual",
        iso6393: "sbf"
    },
    {
        name: "Seget",
        type: "living",
        scope: "individual",
        iso6393: "sbg"
    },
    {
        name: "Sori-Harengan",
        type: "living",
        scope: "individual",
        iso6393: "sbh"
    },
    {
        name: "Seti",
        type: "living",
        scope: "individual",
        iso6393: "sbi"
    },
    {
        name: "Surbakhal",
        type: "living",
        scope: "individual",
        iso6393: "sbj"
    },
    {
        name: "Safwa",
        type: "living",
        scope: "individual",
        iso6393: "sbk"
    },
    {
        name: "Botolan Sambal",
        type: "living",
        scope: "individual",
        iso6393: "sbl"
    },
    {
        name: "Sagala",
        type: "living",
        scope: "individual",
        iso6393: "sbm"
    },
    {
        name: "Sindhi Bhil",
        type: "living",
        scope: "individual",
        iso6393: "sbn"
    },
    {
        name: "Sab\xfcm",
        type: "living",
        scope: "individual",
        iso6393: "sbo"
    },
    {
        name: "Sangu (Tanzania)",
        type: "living",
        scope: "individual",
        iso6393: "sbp"
    },
    {
        name: "Sileibi",
        type: "living",
        scope: "individual",
        iso6393: "sbq"
    },
    {
        name: "Sembakung Murut",
        type: "living",
        scope: "individual",
        iso6393: "sbr"
    },
    {
        name: "Subiya",
        type: "living",
        scope: "individual",
        iso6393: "sbs"
    },
    {
        name: "Kimki",
        type: "living",
        scope: "individual",
        iso6393: "sbt"
    },
    {
        name: "Stod Bhoti",
        type: "living",
        scope: "individual",
        iso6393: "sbu"
    },
    {
        name: "Sabine",
        type: "ancient",
        scope: "individual",
        iso6393: "sbv"
    },
    {
        name: "Simba",
        type: "living",
        scope: "individual",
        iso6393: "sbw"
    },
    {
        name: "Seberuang",
        type: "living",
        scope: "individual",
        iso6393: "sbx"
    },
    {
        name: "Soli",
        type: "living",
        scope: "individual",
        iso6393: "sby"
    },
    {
        name: "Sara Kaba",
        type: "living",
        scope: "individual",
        iso6393: "sbz"
    },
    {
        name: "Chut",
        type: "living",
        scope: "individual",
        iso6393: "scb"
    },
    {
        name: "Dongxiang",
        type: "living",
        scope: "individual",
        iso6393: "sce"
    },
    {
        name: "San Miguel Creole French",
        type: "living",
        scope: "individual",
        iso6393: "scf"
    },
    {
        name: "Sanggau",
        type: "living",
        scope: "individual",
        iso6393: "scg"
    },
    {
        name: "Sakachep",
        type: "living",
        scope: "individual",
        iso6393: "sch"
    },
    {
        name: "Sri Lankan Creole Malay",
        type: "living",
        scope: "individual",
        iso6393: "sci"
    },
    {
        name: "Sadri",
        type: "living",
        scope: "individual",
        iso6393: "sck"
    },
    {
        name: "Shina",
        type: "living",
        scope: "individual",
        iso6393: "scl"
    },
    {
        name: "Sicilian",
        type: "living",
        scope: "individual",
        iso6393: "scn",
        iso6392B: "scn",
        iso6392T: "scn"
    },
    {
        name: "Scots",
        type: "living",
        scope: "individual",
        iso6393: "sco",
        iso6392B: "sco",
        iso6392T: "sco"
    },
    {
        name: "Hyolmo",
        type: "living",
        scope: "individual",
        iso6393: "scp"
    },
    {
        name: "Sa'och",
        type: "living",
        scope: "individual",
        iso6393: "scq"
    },
    {
        name: "North Slavey",
        type: "living",
        scope: "individual",
        iso6393: "scs"
    },
    {
        name: "Southern Katang",
        type: "living",
        scope: "individual",
        iso6393: "sct"
    },
    {
        name: "Shumcho",
        type: "living",
        scope: "individual",
        iso6393: "scu"
    },
    {
        name: "Sheni",
        type: "living",
        scope: "individual",
        iso6393: "scv"
    },
    {
        name: "Sha",
        type: "living",
        scope: "individual",
        iso6393: "scw"
    },
    {
        name: "Sicel",
        type: "ancient",
        scope: "individual",
        iso6393: "scx"
    },
    {
        name: "Toraja-Sa'dan",
        type: "living",
        scope: "individual",
        iso6393: "sda"
    },
    {
        name: "Shabak",
        type: "living",
        scope: "individual",
        iso6393: "sdb"
    },
    {
        name: "Sassarese Sardinian",
        type: "living",
        scope: "individual",
        iso6393: "sdc"
    },
    {
        name: "Surubu",
        type: "living",
        scope: "individual",
        iso6393: "sde"
    },
    {
        name: "Sarli",
        type: "living",
        scope: "individual",
        iso6393: "sdf"
    },
    {
        name: "Savi",
        type: "living",
        scope: "individual",
        iso6393: "sdg"
    },
    {
        name: "Southern Kurdish",
        type: "living",
        scope: "individual",
        iso6393: "sdh"
    },
    {
        name: "Suundi",
        type: "living",
        scope: "individual",
        iso6393: "sdj"
    },
    {
        name: "Sos Kundi",
        type: "living",
        scope: "individual",
        iso6393: "sdk"
    },
    {
        name: "Saudi Arabian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "sdl"
    },
    {
        name: "Gallurese Sardinian",
        type: "living",
        scope: "individual",
        iso6393: "sdn"
    },
    {
        name: "Bukar-Sadung Bidayuh",
        type: "living",
        scope: "individual",
        iso6393: "sdo"
    },
    {
        name: "Sherdukpen",
        type: "living",
        scope: "individual",
        iso6393: "sdp"
    },
    {
        name: "Semandang",
        type: "living",
        scope: "individual",
        iso6393: "sdq"
    },
    {
        name: "Oraon Sadri",
        type: "living",
        scope: "individual",
        iso6393: "sdr"
    },
    {
        name: "Sened",
        type: "extinct",
        scope: "individual",
        iso6393: "sds"
    },
    {
        name: "Shuadit",
        type: "extinct",
        scope: "individual",
        iso6393: "sdt"
    },
    {
        name: "Sarudu",
        type: "living",
        scope: "individual",
        iso6393: "sdu"
    },
    {
        name: "Sibu Melanau",
        type: "living",
        scope: "individual",
        iso6393: "sdx"
    },
    {
        name: "Sallands",
        type: "living",
        scope: "individual",
        iso6393: "sdz"
    },
    {
        name: "Semai",
        type: "living",
        scope: "individual",
        iso6393: "sea"
    },
    {
        name: "Shempire Senoufo",
        type: "living",
        scope: "individual",
        iso6393: "seb"
    },
    {
        name: "Sechelt",
        type: "living",
        scope: "individual",
        iso6393: "sec"
    },
    {
        name: "Sedang",
        type: "living",
        scope: "individual",
        iso6393: "sed"
    },
    {
        name: "Seneca",
        type: "living",
        scope: "individual",
        iso6393: "see"
    },
    {
        name: "Cebaara Senoufo",
        type: "living",
        scope: "individual",
        iso6393: "sef"
    },
    {
        name: "Segeju",
        type: "living",
        scope: "individual",
        iso6393: "seg"
    },
    {
        name: "Sena",
        type: "living",
        scope: "individual",
        iso6393: "seh"
    },
    {
        name: "Seri",
        type: "living",
        scope: "individual",
        iso6393: "sei"
    },
    {
        name: "Sene",
        type: "living",
        scope: "individual",
        iso6393: "sej"
    },
    {
        name: "Sekani",
        type: "living",
        scope: "individual",
        iso6393: "sek"
    },
    {
        name: "Selkup",
        type: "living",
        scope: "individual",
        iso6393: "sel",
        iso6392B: "sel",
        iso6392T: "sel"
    },
    {
        name: "Nanerig\xe9 S\xe9noufo",
        type: "living",
        scope: "individual",
        iso6393: "sen"
    },
    {
        name: "Suarmin",
        type: "living",
        scope: "individual",
        iso6393: "seo"
    },
    {
        name: "S\xecc\xect\xe9 S\xe9noufo",
        type: "living",
        scope: "individual",
        iso6393: "sep"
    },
    {
        name: "Senara S\xe9noufo",
        type: "living",
        scope: "individual",
        iso6393: "seq"
    },
    {
        name: "Serrano",
        type: "living",
        scope: "individual",
        iso6393: "ser"
    },
    {
        name: "Koyraboro Senni Songhai",
        type: "living",
        scope: "individual",
        iso6393: "ses"
    },
    {
        name: "Sentani",
        type: "living",
        scope: "individual",
        iso6393: "set"
    },
    {
        name: "Serui-Laut",
        type: "living",
        scope: "individual",
        iso6393: "seu"
    },
    {
        name: "Nyarafolo Senoufo",
        type: "living",
        scope: "individual",
        iso6393: "sev"
    },
    {
        name: "Sewa Bay",
        type: "living",
        scope: "individual",
        iso6393: "sew"
    },
    {
        name: "Secoya",
        type: "living",
        scope: "individual",
        iso6393: "sey"
    },
    {
        name: "Senthang Chin",
        type: "living",
        scope: "individual",
        iso6393: "sez"
    },
    {
        name: "Langue des signes de Belgique Francophone",
        type: "living",
        scope: "individual",
        iso6393: "sfb"
    },
    {
        name: "Eastern Subanen",
        type: "living",
        scope: "individual",
        iso6393: "sfe"
    },
    {
        name: "Small Flowery Miao",
        type: "living",
        scope: "individual",
        iso6393: "sfm"
    },
    {
        name: "South African Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "sfs"
    },
    {
        name: "Sehwi",
        type: "living",
        scope: "individual",
        iso6393: "sfw"
    },
    {
        name: "Old Irish (to 900)",
        type: "historical",
        scope: "individual",
        iso6393: "sga",
        iso6392B: "sga",
        iso6392T: "sga"
    },
    {
        name: "Mag-antsi Ayta",
        type: "living",
        scope: "individual",
        iso6393: "sgb"
    },
    {
        name: "Kipsigis",
        type: "living",
        scope: "individual",
        iso6393: "sgc"
    },
    {
        name: "Surigaonon",
        type: "living",
        scope: "individual",
        iso6393: "sgd"
    },
    {
        name: "Segai",
        type: "living",
        scope: "individual",
        iso6393: "sge"
    },
    {
        name: "Swiss-German Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "sgg"
    },
    {
        name: "Shughni",
        type: "living",
        scope: "individual",
        iso6393: "sgh"
    },
    {
        name: "Suga",
        type: "living",
        scope: "individual",
        iso6393: "sgi"
    },
    {
        name: "Surgujia",
        type: "living",
        scope: "individual",
        iso6393: "sgj"
    },
    {
        name: "Sangkong",
        type: "living",
        scope: "individual",
        iso6393: "sgk"
    },
    {
        name: "Singa",
        type: "extinct",
        scope: "individual",
        iso6393: "sgm"
    },
    {
        name: "Singpho",
        type: "living",
        scope: "individual",
        iso6393: "sgp"
    },
    {
        name: "Sangisari",
        type: "living",
        scope: "individual",
        iso6393: "sgr"
    },
    {
        name: "Samogitian",
        type: "living",
        scope: "individual",
        iso6393: "sgs"
    },
    {
        name: "Brokpake",
        type: "living",
        scope: "individual",
        iso6393: "sgt"
    },
    {
        name: "Salas",
        type: "living",
        scope: "individual",
        iso6393: "sgu"
    },
    {
        name: "Sebat Bet Gurage",
        type: "living",
        scope: "individual",
        iso6393: "sgw"
    },
    {
        name: "Sierra Leone Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "sgx"
    },
    {
        name: "Sanglechi",
        type: "living",
        scope: "individual",
        iso6393: "sgy"
    },
    {
        name: "Sursurunga",
        type: "living",
        scope: "individual",
        iso6393: "sgz"
    },
    {
        name: "Shall-Zwall",
        type: "living",
        scope: "individual",
        iso6393: "sha"
    },
    {
        name: "Ninam",
        type: "living",
        scope: "individual",
        iso6393: "shb"
    },
    {
        name: "Sonde",
        type: "living",
        scope: "individual",
        iso6393: "shc"
    },
    {
        name: "Kundal Shahi",
        type: "living",
        scope: "individual",
        iso6393: "shd"
    },
    {
        name: "Sheko",
        type: "living",
        scope: "individual",
        iso6393: "she"
    },
    {
        name: "Shua",
        type: "living",
        scope: "individual",
        iso6393: "shg"
    },
    {
        name: "Shoshoni",
        type: "living",
        scope: "individual",
        iso6393: "shh"
    },
    {
        name: "Tachelhit",
        type: "living",
        scope: "individual",
        iso6393: "shi"
    },
    {
        name: "Shatt",
        type: "living",
        scope: "individual",
        iso6393: "shj"
    },
    {
        name: "Shilluk",
        type: "living",
        scope: "individual",
        iso6393: "shk"
    },
    {
        name: "Shendu",
        type: "living",
        scope: "individual",
        iso6393: "shl"
    },
    {
        name: "Shahrudi",
        type: "living",
        scope: "individual",
        iso6393: "shm"
    },
    {
        name: "Shan",
        type: "living",
        scope: "individual",
        iso6393: "shn",
        iso6392B: "shn",
        iso6392T: "shn"
    },
    {
        name: "Shanga",
        type: "living",
        scope: "individual",
        iso6393: "sho"
    },
    {
        name: "Shipibo-Conibo",
        type: "living",
        scope: "individual",
        iso6393: "shp"
    },
    {
        name: "Sala",
        type: "living",
        scope: "individual",
        iso6393: "shq"
    },
    {
        name: "Shi",
        type: "living",
        scope: "individual",
        iso6393: "shr"
    },
    {
        name: "Shuswap",
        type: "living",
        scope: "individual",
        iso6393: "shs"
    },
    {
        name: "Shasta",
        type: "extinct",
        scope: "individual",
        iso6393: "sht"
    },
    {
        name: "Chadian Arabic",
        type: "living",
        scope: "individual",
        iso6393: "shu"
    },
    {
        name: "Shehri",
        type: "living",
        scope: "individual",
        iso6393: "shv"
    },
    {
        name: "Shwai",
        type: "living",
        scope: "individual",
        iso6393: "shw"
    },
    {
        name: "She",
        type: "living",
        scope: "individual",
        iso6393: "shx"
    },
    {
        name: "Tachawit",
        type: "living",
        scope: "individual",
        iso6393: "shy"
    },
    {
        name: "Syenara Senoufo",
        type: "living",
        scope: "individual",
        iso6393: "shz"
    },
    {
        name: "Akkala Sami",
        type: "extinct",
        scope: "individual",
        iso6393: "sia"
    },
    {
        name: "Sebop",
        type: "living",
        scope: "individual",
        iso6393: "sib"
    },
    {
        name: "Sidamo",
        type: "living",
        scope: "individual",
        iso6393: "sid",
        iso6392B: "sid",
        iso6392T: "sid"
    },
    {
        name: "Simaa",
        type: "living",
        scope: "individual",
        iso6393: "sie"
    },
    {
        name: "Siamou",
        type: "living",
        scope: "individual",
        iso6393: "sif"
    },
    {
        name: "Paasaal",
        type: "living",
        scope: "individual",
        iso6393: "sig"
    },
    {
        name: "Zire",
        type: "living",
        scope: "individual",
        iso6393: "sih"
    },
    {
        name: "Shom Peng",
        type: "living",
        scope: "individual",
        iso6393: "sii"
    },
    {
        name: "Numbami",
        type: "living",
        scope: "individual",
        iso6393: "sij"
    },
    {
        name: "Sikiana",
        type: "living",
        scope: "individual",
        iso6393: "sik"
    },
    {
        name: "Tumulung Sisaala",
        type: "living",
        scope: "individual",
        iso6393: "sil"
    },
    {
        name: "Mende (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "sim"
    },
    {
        name: "Sinhala",
        type: "living",
        scope: "individual",
        iso6393: "sin",
        iso6392B: "sin",
        iso6392T: "sin",
        iso6391: "si"
    },
    {
        name: "Sikkimese",
        type: "living",
        scope: "individual",
        iso6393: "sip"
    },
    {
        name: "Sonia",
        type: "living",
        scope: "individual",
        iso6393: "siq"
    },
    {
        name: "Siri",
        type: "living",
        scope: "individual",
        iso6393: "sir"
    },
    {
        name: "Siuslaw",
        type: "extinct",
        scope: "individual",
        iso6393: "sis"
    },
    {
        name: "Sinagen",
        type: "living",
        scope: "individual",
        iso6393: "siu"
    },
    {
        name: "Sumariup",
        type: "living",
        scope: "individual",
        iso6393: "siv"
    },
    {
        name: "Siwai",
        type: "living",
        scope: "individual",
        iso6393: "siw"
    },
    {
        name: "Sumau",
        type: "living",
        scope: "individual",
        iso6393: "six"
    },
    {
        name: "Sivandi",
        type: "living",
        scope: "individual",
        iso6393: "siy"
    },
    {
        name: "Siwi",
        type: "living",
        scope: "individual",
        iso6393: "siz"
    },
    {
        name: "Epena",
        type: "living",
        scope: "individual",
        iso6393: "sja"
    },
    {
        name: "Sajau Basap",
        type: "living",
        scope: "individual",
        iso6393: "sjb"
    },
    {
        name: "Kildin Sami",
        type: "living",
        scope: "individual",
        iso6393: "sjd"
    },
    {
        name: "Pite Sami",
        type: "living",
        scope: "individual",
        iso6393: "sje"
    },
    {
        name: "Assangori",
        type: "living",
        scope: "individual",
        iso6393: "sjg"
    },
    {
        name: "Kemi Sami",
        type: "extinct",
        scope: "individual",
        iso6393: "sjk"
    },
    {
        name: "Sajalong",
        type: "living",
        scope: "individual",
        iso6393: "sjl"
    },
    {
        name: "Mapun",
        type: "living",
        scope: "individual",
        iso6393: "sjm"
    },
    {
        name: "Sindarin",
        type: "constructed",
        scope: "individual",
        iso6393: "sjn"
    },
    {
        name: "Xibe",
        type: "living",
        scope: "individual",
        iso6393: "sjo"
    },
    {
        name: "Surjapuri",
        type: "living",
        scope: "individual",
        iso6393: "sjp"
    },
    {
        name: "Siar-Lak",
        type: "living",
        scope: "individual",
        iso6393: "sjr"
    },
    {
        name: "Senhaja De Srair",
        type: "extinct",
        scope: "individual",
        iso6393: "sjs"
    },
    {
        name: "Ter Sami",
        type: "living",
        scope: "individual",
        iso6393: "sjt"
    },
    {
        name: "Ume Sami",
        type: "living",
        scope: "individual",
        iso6393: "sju"
    },
    {
        name: "Shawnee",
        type: "living",
        scope: "individual",
        iso6393: "sjw"
    },
    {
        name: "Skagit",
        type: "living",
        scope: "individual",
        iso6393: "ska"
    },
    {
        name: "Saek",
        type: "living",
        scope: "individual",
        iso6393: "skb"
    },
    {
        name: "Ma Manda",
        type: "living",
        scope: "individual",
        iso6393: "skc"
    },
    {
        name: "Southern Sierra Miwok",
        type: "living",
        scope: "individual",
        iso6393: "skd"
    },
    {
        name: "Seke (Vanuatu)",
        type: "living",
        scope: "individual",
        iso6393: "ske"
    },
    {
        name: "Sakirabi\xe1",
        type: "living",
        scope: "individual",
        iso6393: "skf"
    },
    {
        name: "Sakalava Malagasy",
        type: "living",
        scope: "individual",
        iso6393: "skg"
    },
    {
        name: "Sikule",
        type: "living",
        scope: "individual",
        iso6393: "skh"
    },
    {
        name: "Sika",
        type: "living",
        scope: "individual",
        iso6393: "ski"
    },
    {
        name: "Seke (Nepal)",
        type: "living",
        scope: "individual",
        iso6393: "skj"
    },
    {
        name: "Kutong",
        type: "living",
        scope: "individual",
        iso6393: "skm"
    },
    {
        name: "Kolibugan Subanon",
        type: "living",
        scope: "individual",
        iso6393: "skn"
    },
    {
        name: "Seko Tengah",
        type: "living",
        scope: "individual",
        iso6393: "sko"
    },
    {
        name: "Sekapan",
        type: "living",
        scope: "individual",
        iso6393: "skp"
    },
    {
        name: "Sininkere",
        type: "living",
        scope: "individual",
        iso6393: "skq"
    },
    {
        name: "Saraiki",
        type: "living",
        scope: "individual",
        iso6393: "skr"
    },
    {
        name: "Maia",
        type: "living",
        scope: "individual",
        iso6393: "sks"
    },
    {
        name: "Sakata",
        type: "living",
        scope: "individual",
        iso6393: "skt"
    },
    {
        name: "Sakao",
        type: "living",
        scope: "individual",
        iso6393: "sku"
    },
    {
        name: "Skou",
        type: "living",
        scope: "individual",
        iso6393: "skv"
    },
    {
        name: "Skepi Creole Dutch",
        type: "extinct",
        scope: "individual",
        iso6393: "skw"
    },
    {
        name: "Seko Padang",
        type: "living",
        scope: "individual",
        iso6393: "skx"
    },
    {
        name: "Sikaiana",
        type: "living",
        scope: "individual",
        iso6393: "sky"
    },
    {
        name: "Sekar",
        type: "living",
        scope: "individual",
        iso6393: "skz"
    },
    {
        name: "S\xe1liba",
        type: "living",
        scope: "individual",
        iso6393: "slc"
    },
    {
        name: "Sissala",
        type: "living",
        scope: "individual",
        iso6393: "sld"
    },
    {
        name: "Sholaga",
        type: "living",
        scope: "individual",
        iso6393: "sle"
    },
    {
        name: "Swiss-Italian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "slf"
    },
    {
        name: "Selungai Murut",
        type: "living",
        scope: "individual",
        iso6393: "slg"
    },
    {
        name: "Southern Puget Sound Salish",
        type: "living",
        scope: "individual",
        iso6393: "slh"
    },
    {
        name: "Lower Silesian",
        type: "living",
        scope: "individual",
        iso6393: "sli"
    },
    {
        name: "Salum\xe1",
        type: "living",
        scope: "individual",
        iso6393: "slj"
    },
    {
        name: "Slovak",
        type: "living",
        scope: "individual",
        iso6393: "slk",
        iso6392B: "slo",
        iso6392T: "slk",
        iso6391: "sk"
    },
    {
        name: "Salt-Yui",
        type: "living",
        scope: "individual",
        iso6393: "sll"
    },
    {
        name: "Pangutaran Sama",
        type: "living",
        scope: "individual",
        iso6393: "slm"
    },
    {
        name: "Salinan",
        type: "extinct",
        scope: "individual",
        iso6393: "sln"
    },
    {
        name: "Lamaholot",
        type: "living",
        scope: "individual",
        iso6393: "slp"
    },
    {
        name: "Salchuq",
        type: "extinct",
        scope: "individual",
        iso6393: "slq"
    },
    {
        name: "Salar",
        type: "living",
        scope: "individual",
        iso6393: "slr"
    },
    {
        name: "Singapore Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "sls"
    },
    {
        name: "Sila",
        type: "living",
        scope: "individual",
        iso6393: "slt"
    },
    {
        name: "Selaru",
        type: "living",
        scope: "individual",
        iso6393: "slu"
    },
    {
        name: "Slovenian",
        type: "living",
        scope: "individual",
        iso6393: "slv",
        iso6392B: "slv",
        iso6392T: "slv",
        iso6391: "sl"
    },
    {
        name: "Sialum",
        type: "living",
        scope: "individual",
        iso6393: "slw"
    },
    {
        name: "Salampasu",
        type: "living",
        scope: "individual",
        iso6393: "slx"
    },
    {
        name: "Selayar",
        type: "living",
        scope: "individual",
        iso6393: "sly"
    },
    {
        name: "Ma'ya",
        type: "living",
        scope: "individual",
        iso6393: "slz"
    },
    {
        name: "Southern Sami",
        type: "living",
        scope: "individual",
        iso6393: "sma",
        iso6392B: "sma",
        iso6392T: "sma"
    },
    {
        name: "Simbari",
        type: "living",
        scope: "individual",
        iso6393: "smb"
    },
    {
        name: "Som",
        type: "extinct",
        scope: "individual",
        iso6393: "smc"
    },
    {
        name: "Sama",
        type: "living",
        scope: "individual",
        iso6393: "smd"
    },
    {
        name: "Northern Sami",
        type: "living",
        scope: "individual",
        iso6393: "sme",
        iso6392B: "sme",
        iso6392T: "sme",
        iso6391: "se"
    },
    {
        name: "Auwe",
        type: "living",
        scope: "individual",
        iso6393: "smf"
    },
    {
        name: "Simbali",
        type: "living",
        scope: "individual",
        iso6393: "smg"
    },
    {
        name: "Samei",
        type: "living",
        scope: "individual",
        iso6393: "smh"
    },
    {
        name: "Lule Sami",
        type: "living",
        scope: "individual",
        iso6393: "smj",
        iso6392B: "smj",
        iso6392T: "smj"
    },
    {
        name: "Bolinao",
        type: "living",
        scope: "individual",
        iso6393: "smk"
    },
    {
        name: "Central Sama",
        type: "living",
        scope: "individual",
        iso6393: "sml"
    },
    {
        name: "Musasa",
        type: "living",
        scope: "individual",
        iso6393: "smm"
    },
    {
        name: "Inari Sami",
        type: "living",
        scope: "individual",
        iso6393: "smn",
        iso6392B: "smn",
        iso6392T: "smn"
    },
    {
        name: "Samoan",
        type: "living",
        scope: "individual",
        iso6393: "smo",
        iso6392B: "smo",
        iso6392T: "smo",
        iso6391: "sm"
    },
    {
        name: "Samaritan",
        type: "extinct",
        scope: "individual",
        iso6393: "smp"
    },
    {
        name: "Samo",
        type: "living",
        scope: "individual",
        iso6393: "smq"
    },
    {
        name: "Simeulue",
        type: "living",
        scope: "individual",
        iso6393: "smr"
    },
    {
        name: "Skolt Sami",
        type: "living",
        scope: "individual",
        iso6393: "sms",
        iso6392B: "sms",
        iso6392T: "sms"
    },
    {
        name: "Simte",
        type: "living",
        scope: "individual",
        iso6393: "smt"
    },
    {
        name: "Somray",
        type: "extinct",
        scope: "individual",
        iso6393: "smu"
    },
    {
        name: "Samvedi",
        type: "living",
        scope: "individual",
        iso6393: "smv"
    },
    {
        name: "Sumbawa",
        type: "living",
        scope: "individual",
        iso6393: "smw"
    },
    {
        name: "Samba",
        type: "living",
        scope: "individual",
        iso6393: "smx"
    },
    {
        name: "Semnani",
        type: "living",
        scope: "individual",
        iso6393: "smy"
    },
    {
        name: "Simeku",
        type: "living",
        scope: "individual",
        iso6393: "smz"
    },
    {
        name: "Shona",
        type: "living",
        scope: "individual",
        iso6393: "sna",
        iso6392B: "sna",
        iso6392T: "sna",
        iso6391: "sn"
    },
    {
        name: "Sebuyau",
        type: "living",
        scope: "individual",
        iso6393: "snb"
    },
    {
        name: "Sinaugoro",
        type: "living",
        scope: "individual",
        iso6393: "snc"
    },
    {
        name: "Sindhi",
        type: "living",
        scope: "individual",
        iso6393: "snd",
        iso6392B: "snd",
        iso6392T: "snd",
        iso6391: "sd"
    },
    {
        name: "Bau Bidayuh",
        type: "living",
        scope: "individual",
        iso6393: "sne"
    },
    {
        name: "Noon",
        type: "living",
        scope: "individual",
        iso6393: "snf"
    },
    {
        name: "Sanga (Democratic Republic of Congo)",
        type: "living",
        scope: "individual",
        iso6393: "sng"
    },
    {
        name: "Sensi",
        type: "extinct",
        scope: "individual",
        iso6393: "sni"
    },
    {
        name: "Riverain Sango",
        type: "living",
        scope: "individual",
        iso6393: "snj"
    },
    {
        name: "Soninke",
        type: "living",
        scope: "individual",
        iso6393: "snk",
        iso6392B: "snk",
        iso6392T: "snk"
    },
    {
        name: "Sangil",
        type: "living",
        scope: "individual",
        iso6393: "snl"
    },
    {
        name: "Southern Ma'di",
        type: "living",
        scope: "individual",
        iso6393: "snm"
    },
    {
        name: "Siona",
        type: "living",
        scope: "individual",
        iso6393: "snn"
    },
    {
        name: "Snohomish",
        type: "living",
        scope: "individual",
        iso6393: "sno"
    },
    {
        name: "Siane",
        type: "living",
        scope: "individual",
        iso6393: "snp"
    },
    {
        name: "Sangu (Gabon)",
        type: "living",
        scope: "individual",
        iso6393: "snq"
    },
    {
        name: "Sihan",
        type: "living",
        scope: "individual",
        iso6393: "snr"
    },
    {
        name: "South West Bay",
        type: "living",
        scope: "individual",
        iso6393: "sns"
    },
    {
        name: "Senggi",
        type: "living",
        scope: "individual",
        iso6393: "snu"
    },
    {
        name: "Sa'ban",
        type: "living",
        scope: "individual",
        iso6393: "snv"
    },
    {
        name: "Selee",
        type: "living",
        scope: "individual",
        iso6393: "snw"
    },
    {
        name: "Sam",
        type: "living",
        scope: "individual",
        iso6393: "snx"
    },
    {
        name: "Saniyo-Hiyewe",
        type: "living",
        scope: "individual",
        iso6393: "sny"
    },
    {
        name: "Kou",
        type: "living",
        scope: "individual",
        iso6393: "snz"
    },
    {
        name: "Thai Song",
        type: "living",
        scope: "individual",
        iso6393: "soa"
    },
    {
        name: "Sobei",
        type: "living",
        scope: "individual",
        iso6393: "sob"
    },
    {
        name: "So (Democratic Republic of Congo)",
        type: "living",
        scope: "individual",
        iso6393: "soc"
    },
    {
        name: "Songoora",
        type: "living",
        scope: "individual",
        iso6393: "sod"
    },
    {
        name: "Songomeno",
        type: "living",
        scope: "individual",
        iso6393: "soe"
    },
    {
        name: "Sogdian",
        type: "ancient",
        scope: "individual",
        iso6393: "sog",
        iso6392B: "sog",
        iso6392T: "sog"
    },
    {
        name: "Aka",
        type: "living",
        scope: "individual",
        iso6393: "soh"
    },
    {
        name: "Sonha",
        type: "living",
        scope: "individual",
        iso6393: "soi"
    },
    {
        name: "Soi",
        type: "living",
        scope: "individual",
        iso6393: "soj"
    },
    {
        name: "Sokoro",
        type: "living",
        scope: "individual",
        iso6393: "sok"
    },
    {
        name: "Solos",
        type: "living",
        scope: "individual",
        iso6393: "sol"
    },
    {
        name: "Somali",
        type: "living",
        scope: "individual",
        iso6393: "som",
        iso6392B: "som",
        iso6392T: "som",
        iso6391: "so"
    },
    {
        name: "Songo",
        type: "living",
        scope: "individual",
        iso6393: "soo"
    },
    {
        name: "Songe",
        type: "living",
        scope: "individual",
        iso6393: "sop"
    },
    {
        name: "Kanasi",
        type: "living",
        scope: "individual",
        iso6393: "soq"
    },
    {
        name: "Somrai",
        type: "living",
        scope: "individual",
        iso6393: "sor"
    },
    {
        name: "Seeku",
        type: "living",
        scope: "individual",
        iso6393: "sos"
    },
    {
        name: "Southern Sotho",
        type: "living",
        scope: "individual",
        iso6393: "sot",
        iso6392B: "sot",
        iso6392T: "sot",
        iso6391: "st"
    },
    {
        name: "Southern Thai",
        type: "living",
        scope: "individual",
        iso6393: "sou"
    },
    {
        name: "Sonsorol",
        type: "living",
        scope: "individual",
        iso6393: "sov"
    },
    {
        name: "Sowanda",
        type: "living",
        scope: "individual",
        iso6393: "sow"
    },
    {
        name: "Swo",
        type: "living",
        scope: "individual",
        iso6393: "sox"
    },
    {
        name: "Miyobe",
        type: "living",
        scope: "individual",
        iso6393: "soy"
    },
    {
        name: "Temi",
        type: "living",
        scope: "individual",
        iso6393: "soz"
    },
    {
        name: "Spanish",
        type: "living",
        scope: "individual",
        iso6393: "spa",
        iso6392B: "spa",
        iso6392T: "spa",
        iso6391: "es"
    },
    {
        name: "Sepa (Indonesia)",
        type: "living",
        scope: "individual",
        iso6393: "spb"
    },
    {
        name: "Sap\xe9",
        type: "living",
        scope: "individual",
        iso6393: "spc"
    },
    {
        name: "Saep",
        type: "living",
        scope: "individual",
        iso6393: "spd"
    },
    {
        name: "Sepa (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "spe"
    },
    {
        name: "Sian",
        type: "living",
        scope: "individual",
        iso6393: "spg"
    },
    {
        name: "Saponi",
        type: "living",
        scope: "individual",
        iso6393: "spi"
    },
    {
        name: "Sengo",
        type: "living",
        scope: "individual",
        iso6393: "spk"
    },
    {
        name: "Selepet",
        type: "living",
        scope: "individual",
        iso6393: "spl"
    },
    {
        name: "Akukem",
        type: "living",
        scope: "individual",
        iso6393: "spm"
    },
    {
        name: "Sanapan\xe1",
        type: "living",
        scope: "individual",
        iso6393: "spn"
    },
    {
        name: "Spokane",
        type: "living",
        scope: "individual",
        iso6393: "spo"
    },
    {
        name: "Supyire Senoufo",
        type: "living",
        scope: "individual",
        iso6393: "spp"
    },
    {
        name: "Loreto-Ucayali Spanish",
        type: "living",
        scope: "individual",
        iso6393: "spq"
    },
    {
        name: "Saparua",
        type: "living",
        scope: "individual",
        iso6393: "spr"
    },
    {
        name: "Saposa",
        type: "living",
        scope: "individual",
        iso6393: "sps"
    },
    {
        name: "Spiti Bhoti",
        type: "living",
        scope: "individual",
        iso6393: "spt"
    },
    {
        name: "Sapuan",
        type: "living",
        scope: "individual",
        iso6393: "spu"
    },
    {
        name: "Sambalpuri",
        type: "living",
        scope: "individual",
        iso6393: "spv"
    },
    {
        name: "South Picene",
        type: "ancient",
        scope: "individual",
        iso6393: "spx"
    },
    {
        name: "Sabaot",
        type: "living",
        scope: "individual",
        iso6393: "spy"
    },
    {
        name: "Shama-Sambuga",
        type: "living",
        scope: "individual",
        iso6393: "sqa"
    },
    {
        name: "Shau",
        type: "living",
        scope: "individual",
        iso6393: "sqh"
    },
    {
        name: "Albanian",
        type: "living",
        scope: "macrolanguage",
        iso6393: "sqi",
        iso6392B: "alb",
        iso6392T: "sqi",
        iso6391: "sq"
    },
    {
        name: "Albanian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "sqk"
    },
    {
        name: "Suma",
        type: "living",
        scope: "individual",
        iso6393: "sqm"
    },
    {
        name: "Susquehannock",
        type: "extinct",
        scope: "individual",
        iso6393: "sqn"
    },
    {
        name: "Sorkhei",
        type: "living",
        scope: "individual",
        iso6393: "sqo"
    },
    {
        name: "Sou",
        type: "living",
        scope: "individual",
        iso6393: "sqq"
    },
    {
        name: "Siculo Arabic",
        type: "historical",
        scope: "individual",
        iso6393: "sqr"
    },
    {
        name: "Sri Lankan Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "sqs"
    },
    {
        name: "Soqotri",
        type: "living",
        scope: "individual",
        iso6393: "sqt"
    },
    {
        name: "Squamish",
        type: "living",
        scope: "individual",
        iso6393: "squ"
    },
    {
        name: "Saruga",
        type: "living",
        scope: "individual",
        iso6393: "sra"
    },
    {
        name: "Sora",
        type: "living",
        scope: "individual",
        iso6393: "srb"
    },
    {
        name: "Logudorese Sardinian",
        type: "living",
        scope: "individual",
        iso6393: "src"
    },
    {
        name: "Sardinian",
        type: "living",
        scope: "macrolanguage",
        iso6393: "srd",
        iso6392B: "srd",
        iso6392T: "srd",
        iso6391: "sc"
    },
    {
        name: "Sara",
        type: "living",
        scope: "individual",
        iso6393: "sre"
    },
    {
        name: "Nafi",
        type: "living",
        scope: "individual",
        iso6393: "srf"
    },
    {
        name: "Sulod",
        type: "living",
        scope: "individual",
        iso6393: "srg"
    },
    {
        name: "Sarikoli",
        type: "living",
        scope: "individual",
        iso6393: "srh"
    },
    {
        name: "Siriano",
        type: "living",
        scope: "individual",
        iso6393: "sri"
    },
    {
        name: "Serudung Murut",
        type: "living",
        scope: "individual",
        iso6393: "srk"
    },
    {
        name: "Isirawa",
        type: "living",
        scope: "individual",
        iso6393: "srl"
    },
    {
        name: "Saramaccan",
        type: "living",
        scope: "individual",
        iso6393: "srm"
    },
    {
        name: "Sranan Tongo",
        type: "living",
        scope: "individual",
        iso6393: "srn",
        iso6392B: "srn",
        iso6392T: "srn"
    },
    {
        name: "Campidanese Sardinian",
        type: "living",
        scope: "individual",
        iso6393: "sro"
    },
    {
        name: "Serbian",
        type: "living",
        scope: "individual",
        iso6393: "srp",
        iso6392B: "srp",
        iso6392T: "srp",
        iso6391: "sr"
    },
    {
        name: "Sirion\xf3",
        type: "living",
        scope: "individual",
        iso6393: "srq"
    },
    {
        name: "Serer",
        type: "living",
        scope: "individual",
        iso6393: "srr",
        iso6392B: "srr",
        iso6392T: "srr"
    },
    {
        name: "Sarsi",
        type: "living",
        scope: "individual",
        iso6393: "srs"
    },
    {
        name: "Sauri",
        type: "living",
        scope: "individual",
        iso6393: "srt"
    },
    {
        name: "Suru\xed",
        type: "living",
        scope: "individual",
        iso6393: "sru"
    },
    {
        name: "Southern Sorsoganon",
        type: "living",
        scope: "individual",
        iso6393: "srv"
    },
    {
        name: "Serua",
        type: "living",
        scope: "individual",
        iso6393: "srw"
    },
    {
        name: "Sirmauri",
        type: "living",
        scope: "individual",
        iso6393: "srx"
    },
    {
        name: "Sera",
        type: "living",
        scope: "individual",
        iso6393: "sry"
    },
    {
        name: "Shahmirzadi",
        type: "living",
        scope: "individual",
        iso6393: "srz"
    },
    {
        name: "Southern Sama",
        type: "living",
        scope: "individual",
        iso6393: "ssb"
    },
    {
        name: "Suba-Simbiti",
        type: "living",
        scope: "individual",
        iso6393: "ssc"
    },
    {
        name: "Siroi",
        type: "living",
        scope: "individual",
        iso6393: "ssd"
    },
    {
        name: "Balangingi",
        type: "living",
        scope: "individual",
        iso6393: "sse"
    },
    {
        name: "Thao",
        type: "extinct",
        scope: "individual",
        iso6393: "ssf"
    },
    {
        name: "Seimat",
        type: "living",
        scope: "individual",
        iso6393: "ssg"
    },
    {
        name: "Shihhi Arabic",
        type: "living",
        scope: "individual",
        iso6393: "ssh"
    },
    {
        name: "Sansi",
        type: "living",
        scope: "individual",
        iso6393: "ssi"
    },
    {
        name: "Sausi",
        type: "living",
        scope: "individual",
        iso6393: "ssj"
    },
    {
        name: "Sunam",
        type: "living",
        scope: "individual",
        iso6393: "ssk"
    },
    {
        name: "Western Sisaala",
        type: "living",
        scope: "individual",
        iso6393: "ssl"
    },
    {
        name: "Semnam",
        type: "living",
        scope: "individual",
        iso6393: "ssm"
    },
    {
        name: "Waata",
        type: "living",
        scope: "individual",
        iso6393: "ssn"
    },
    {
        name: "Sissano",
        type: "living",
        scope: "individual",
        iso6393: "sso"
    },
    {
        name: "Spanish Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "ssp"
    },
    {
        name: "So'a",
        type: "living",
        scope: "individual",
        iso6393: "ssq"
    },
    {
        name: "Swiss-French Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "ssr"
    },
    {
        name: "S\xf4",
        type: "living",
        scope: "individual",
        iso6393: "sss"
    },
    {
        name: "Sinasina",
        type: "living",
        scope: "individual",
        iso6393: "sst"
    },
    {
        name: "Susuami",
        type: "living",
        scope: "individual",
        iso6393: "ssu"
    },
    {
        name: "Shark Bay",
        type: "living",
        scope: "individual",
        iso6393: "ssv"
    },
    {
        name: "Swati",
        type: "living",
        scope: "individual",
        iso6393: "ssw",
        iso6392B: "ssw",
        iso6392T: "ssw",
        iso6391: "ss"
    },
    {
        name: "Samberigi",
        type: "living",
        scope: "individual",
        iso6393: "ssx"
    },
    {
        name: "Saho",
        type: "living",
        scope: "individual",
        iso6393: "ssy"
    },
    {
        name: "Sengseng",
        type: "living",
        scope: "individual",
        iso6393: "ssz"
    },
    {
        name: "Settla",
        type: "living",
        scope: "individual",
        iso6393: "sta"
    },
    {
        name: "Northern Subanen",
        type: "living",
        scope: "individual",
        iso6393: "stb"
    },
    {
        name: "Sentinel",
        type: "living",
        scope: "individual",
        iso6393: "std"
    },
    {
        name: "Liana-Seti",
        type: "living",
        scope: "individual",
        iso6393: "ste"
    },
    {
        name: "Seta",
        type: "living",
        scope: "individual",
        iso6393: "stf"
    },
    {
        name: "Trieng",
        type: "living",
        scope: "individual",
        iso6393: "stg"
    },
    {
        name: "Shelta",
        type: "living",
        scope: "individual",
        iso6393: "sth"
    },
    {
        name: "Bulo Stieng",
        type: "living",
        scope: "individual",
        iso6393: "sti"
    },
    {
        name: "Matya Samo",
        type: "living",
        scope: "individual",
        iso6393: "stj"
    },
    {
        name: "Arammba",
        type: "living",
        scope: "individual",
        iso6393: "stk"
    },
    {
        name: "Stellingwerfs",
        type: "living",
        scope: "individual",
        iso6393: "stl"
    },
    {
        name: "Setaman",
        type: "living",
        scope: "individual",
        iso6393: "stm"
    },
    {
        name: "Owa",
        type: "living",
        scope: "individual",
        iso6393: "stn"
    },
    {
        name: "Stoney",
        type: "living",
        scope: "individual",
        iso6393: "sto"
    },
    {
        name: "Southeastern Tepehuan",
        type: "living",
        scope: "individual",
        iso6393: "stp"
    },
    {
        name: "Saterfriesisch",
        type: "living",
        scope: "individual",
        iso6393: "stq"
    },
    {
        name: "Straits Salish",
        type: "living",
        scope: "individual",
        iso6393: "str"
    },
    {
        name: "Shumashti",
        type: "living",
        scope: "individual",
        iso6393: "sts"
    },
    {
        name: "Budeh Stieng",
        type: "living",
        scope: "individual",
        iso6393: "stt"
    },
    {
        name: "Samtao",
        type: "living",
        scope: "individual",
        iso6393: "stu"
    },
    {
        name: "Silt'e",
        type: "living",
        scope: "individual",
        iso6393: "stv"
    },
    {
        name: "Satawalese",
        type: "living",
        scope: "individual",
        iso6393: "stw"
    },
    {
        name: "Siberian Tatar",
        type: "living",
        scope: "individual",
        iso6393: "sty"
    },
    {
        name: "Sulka",
        type: "living",
        scope: "individual",
        iso6393: "sua"
    },
    {
        name: "Suku",
        type: "living",
        scope: "individual",
        iso6393: "sub"
    },
    {
        name: "Western Subanon",
        type: "living",
        scope: "individual",
        iso6393: "suc"
    },
    {
        name: "Suena",
        type: "living",
        scope: "individual",
        iso6393: "sue"
    },
    {
        name: "Suganga",
        type: "living",
        scope: "individual",
        iso6393: "sug"
    },
    {
        name: "Suki",
        type: "living",
        scope: "individual",
        iso6393: "sui"
    },
    {
        name: "Shubi",
        type: "living",
        scope: "individual",
        iso6393: "suj"
    },
    {
        name: "Sukuma",
        type: "living",
        scope: "individual",
        iso6393: "suk",
        iso6392B: "suk",
        iso6392T: "suk"
    },
    {
        name: "Sundanese",
        type: "living",
        scope: "individual",
        iso6393: "sun",
        iso6392B: "sun",
        iso6392T: "sun",
        iso6391: "su"
    },
    {
        name: "Suri",
        type: "living",
        scope: "individual",
        iso6393: "suq"
    },
    {
        name: "Mwaghavul",
        type: "living",
        scope: "individual",
        iso6393: "sur"
    },
    {
        name: "Susu",
        type: "living",
        scope: "individual",
        iso6393: "sus",
        iso6392B: "sus",
        iso6392T: "sus"
    },
    {
        name: "Subtiaba",
        type: "extinct",
        scope: "individual",
        iso6393: "sut"
    },
    {
        name: "Puroik",
        type: "living",
        scope: "individual",
        iso6393: "suv"
    },
    {
        name: "Sumbwa",
        type: "living",
        scope: "individual",
        iso6393: "suw"
    },
    {
        name: "Sumerian",
        type: "ancient",
        scope: "individual",
        iso6393: "sux",
        iso6392B: "sux",
        iso6392T: "sux"
    },
    {
        name: "Suy\xe1",
        type: "living",
        scope: "individual",
        iso6393: "suy"
    },
    {
        name: "Sunwar",
        type: "living",
        scope: "individual",
        iso6393: "suz"
    },
    {
        name: "Svan",
        type: "living",
        scope: "individual",
        iso6393: "sva"
    },
    {
        name: "Ulau-Suain",
        type: "living",
        scope: "individual",
        iso6393: "svb"
    },
    {
        name: "Vincentian Creole English",
        type: "living",
        scope: "individual",
        iso6393: "svc"
    },
    {
        name: "Serili",
        type: "living",
        scope: "individual",
        iso6393: "sve"
    },
    {
        name: "Slovakian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "svk"
    },
    {
        name: "Slavomolisano",
        type: "living",
        scope: "individual",
        iso6393: "svm"
    },
    {
        name: "Savosavo",
        type: "living",
        scope: "individual",
        iso6393: "svs"
    },
    {
        name: "Skalvian",
        type: "historical",
        scope: "individual",
        iso6393: "svx"
    },
    {
        name: "Swahili (macrolanguage)",
        type: "living",
        scope: "macrolanguage",
        iso6393: "swa",
        iso6392B: "swa",
        iso6392T: "swa",
        iso6391: "sw"
    },
    {
        name: "Maore Comorian",
        type: "living",
        scope: "individual",
        iso6393: "swb"
    },
    {
        name: "Congo Swahili",
        type: "living",
        scope: "individual",
        iso6393: "swc"
    },
    {
        name: "Swedish",
        type: "living",
        scope: "individual",
        iso6393: "swe",
        iso6392B: "swe",
        iso6392T: "swe",
        iso6391: "sv"
    },
    {
        name: "Sere",
        type: "living",
        scope: "individual",
        iso6393: "swf"
    },
    {
        name: "Swabian",
        type: "living",
        scope: "individual",
        iso6393: "swg"
    },
    {
        name: "Swahili (individual language)",
        type: "living",
        scope: "individual",
        iso6393: "swh"
    },
    {
        name: "Sui",
        type: "living",
        scope: "individual",
        iso6393: "swi"
    },
    {
        name: "Sira",
        type: "living",
        scope: "individual",
        iso6393: "swj"
    },
    {
        name: "Malawi Sena",
        type: "living",
        scope: "individual",
        iso6393: "swk"
    },
    {
        name: "Swedish Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "swl"
    },
    {
        name: "Samosa",
        type: "living",
        scope: "individual",
        iso6393: "swm"
    },
    {
        name: "Sawknah",
        type: "living",
        scope: "individual",
        iso6393: "swn"
    },
    {
        name: "Shanenawa",
        type: "living",
        scope: "individual",
        iso6393: "swo"
    },
    {
        name: "Suau",
        type: "living",
        scope: "individual",
        iso6393: "swp"
    },
    {
        name: "Sharwa",
        type: "living",
        scope: "individual",
        iso6393: "swq"
    },
    {
        name: "Saweru",
        type: "living",
        scope: "individual",
        iso6393: "swr"
    },
    {
        name: "Seluwasan",
        type: "living",
        scope: "individual",
        iso6393: "sws"
    },
    {
        name: "Sawila",
        type: "living",
        scope: "individual",
        iso6393: "swt"
    },
    {
        name: "Suwawa",
        type: "living",
        scope: "individual",
        iso6393: "swu"
    },
    {
        name: "Shekhawati",
        type: "living",
        scope: "individual",
        iso6393: "swv"
    },
    {
        name: "Sowa",
        type: "extinct",
        scope: "individual",
        iso6393: "sww"
    },
    {
        name: "Suruah\xe1",
        type: "living",
        scope: "individual",
        iso6393: "swx"
    },
    {
        name: "Sarua",
        type: "living",
        scope: "individual",
        iso6393: "swy"
    },
    {
        name: "Suba",
        type: "living",
        scope: "individual",
        iso6393: "sxb"
    },
    {
        name: "Sicanian",
        type: "ancient",
        scope: "individual",
        iso6393: "sxc"
    },
    {
        name: "Sighu",
        type: "living",
        scope: "individual",
        iso6393: "sxe"
    },
    {
        name: "Shuhi",
        type: "living",
        scope: "individual",
        iso6393: "sxg"
    },
    {
        name: "Southern Kalapuya",
        type: "extinct",
        scope: "individual",
        iso6393: "sxk"
    },
    {
        name: "Selian",
        type: "extinct",
        scope: "individual",
        iso6393: "sxl"
    },
    {
        name: "Samre",
        type: "living",
        scope: "individual",
        iso6393: "sxm"
    },
    {
        name: "Sangir",
        type: "living",
        scope: "individual",
        iso6393: "sxn"
    },
    {
        name: "Sorothaptic",
        type: "ancient",
        scope: "individual",
        iso6393: "sxo"
    },
    {
        name: "Saaroa",
        type: "living",
        scope: "individual",
        iso6393: "sxr"
    },
    {
        name: "Sasaru",
        type: "living",
        scope: "individual",
        iso6393: "sxs"
    },
    {
        name: "Upper Saxon",
        type: "living",
        scope: "individual",
        iso6393: "sxu"
    },
    {
        name: "Saxwe Gbe",
        type: "living",
        scope: "individual",
        iso6393: "sxw"
    },
    {
        name: "Siang",
        type: "living",
        scope: "individual",
        iso6393: "sya"
    },
    {
        name: "Central Subanen",
        type: "living",
        scope: "individual",
        iso6393: "syb"
    },
    {
        name: "Classical Syriac",
        type: "historical",
        scope: "individual",
        iso6393: "syc",
        iso6392B: "syc",
        iso6392T: "syc"
    },
    {
        name: "Seki",
        type: "living",
        scope: "individual",
        iso6393: "syi"
    },
    {
        name: "Sukur",
        type: "living",
        scope: "individual",
        iso6393: "syk"
    },
    {
        name: "Sylheti",
        type: "living",
        scope: "individual",
        iso6393: "syl"
    },
    {
        name: "Maya Samo",
        type: "living",
        scope: "individual",
        iso6393: "sym"
    },
    {
        name: "Senaya",
        type: "living",
        scope: "individual",
        iso6393: "syn"
    },
    {
        name: "Suoy",
        type: "living",
        scope: "individual",
        iso6393: "syo"
    },
    {
        name: "Syriac",
        type: "living",
        scope: "macrolanguage",
        iso6393: "syr",
        iso6392B: "syr",
        iso6392T: "syr"
    },
    {
        name: "Sinyar",
        type: "living",
        scope: "individual",
        iso6393: "sys"
    },
    {
        name: "Kagate",
        type: "living",
        scope: "individual",
        iso6393: "syw"
    },
    {
        name: "Samay",
        type: "living",
        scope: "individual",
        iso6393: "syx"
    },
    {
        name: "Al-Sayyid Bedouin Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "syy"
    },
    {
        name: "Semelai",
        type: "living",
        scope: "individual",
        iso6393: "sza"
    },
    {
        name: "Ngalum",
        type: "living",
        scope: "individual",
        iso6393: "szb"
    },
    {
        name: "Semaq Beri",
        type: "living",
        scope: "individual",
        iso6393: "szc"
    },
    {
        name: "Seru",
        type: "extinct",
        scope: "individual",
        iso6393: "szd"
    },
    {
        name: "Seze",
        type: "living",
        scope: "individual",
        iso6393: "sze"
    },
    {
        name: "Sengele",
        type: "living",
        scope: "individual",
        iso6393: "szg"
    },
    {
        name: "Silesian",
        type: "living",
        scope: "individual",
        iso6393: "szl"
    },
    {
        name: "Sula",
        type: "living",
        scope: "individual",
        iso6393: "szn"
    },
    {
        name: "Suabo",
        type: "living",
        scope: "individual",
        iso6393: "szp"
    },
    {
        name: "Solomon Islands Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "szs"
    },
    {
        name: "Isu (Fako Division)",
        type: "living",
        scope: "individual",
        iso6393: "szv"
    },
    {
        name: "Sawai",
        type: "living",
        scope: "individual",
        iso6393: "szw"
    },
    {
        name: "Sakizaya",
        type: "living",
        scope: "individual",
        iso6393: "szy"
    },
    {
        name: "Lower Tanana",
        type: "living",
        scope: "individual",
        iso6393: "taa"
    },
    {
        name: "Tabassaran",
        type: "living",
        scope: "individual",
        iso6393: "tab"
    },
    {
        name: "Lowland Tarahumara",
        type: "living",
        scope: "individual",
        iso6393: "tac"
    },
    {
        name: "Tause",
        type: "living",
        scope: "individual",
        iso6393: "tad"
    },
    {
        name: "Tariana",
        type: "living",
        scope: "individual",
        iso6393: "tae"
    },
    {
        name: "Tapirap\xe9",
        type: "living",
        scope: "individual",
        iso6393: "taf"
    },
    {
        name: "Tagoi",
        type: "living",
        scope: "individual",
        iso6393: "tag"
    },
    {
        name: "Tahitian",
        type: "living",
        scope: "individual",
        iso6393: "tah",
        iso6392B: "tah",
        iso6392T: "tah",
        iso6391: "ty"
    },
    {
        name: "Eastern Tamang",
        type: "living",
        scope: "individual",
        iso6393: "taj"
    },
    {
        name: "Tala",
        type: "living",
        scope: "individual",
        iso6393: "tak"
    },
    {
        name: "Tal",
        type: "living",
        scope: "individual",
        iso6393: "tal"
    },
    {
        name: "Tamil",
        type: "living",
        scope: "individual",
        iso6393: "tam",
        iso6392B: "tam",
        iso6392T: "tam",
        iso6391: "ta"
    },
    {
        name: "Tangale",
        type: "living",
        scope: "individual",
        iso6393: "tan"
    },
    {
        name: "Yami",
        type: "living",
        scope: "individual",
        iso6393: "tao"
    },
    {
        name: "Taabwa",
        type: "living",
        scope: "individual",
        iso6393: "tap"
    },
    {
        name: "Tamasheq",
        type: "living",
        scope: "individual",
        iso6393: "taq"
    },
    {
        name: "Central Tarahumara",
        type: "living",
        scope: "individual",
        iso6393: "tar"
    },
    {
        name: "Tay Boi",
        type: "extinct",
        scope: "individual",
        iso6393: "tas"
    },
    {
        name: "Tatar",
        type: "living",
        scope: "individual",
        iso6393: "tat",
        iso6392B: "tat",
        iso6392T: "tat",
        iso6391: "tt"
    },
    {
        name: "Upper Tanana",
        type: "living",
        scope: "individual",
        iso6393: "tau"
    },
    {
        name: "Tatuyo",
        type: "living",
        scope: "individual",
        iso6393: "tav"
    },
    {
        name: "Tai",
        type: "living",
        scope: "individual",
        iso6393: "taw"
    },
    {
        name: "Tamki",
        type: "living",
        scope: "individual",
        iso6393: "tax"
    },
    {
        name: "Atayal",
        type: "living",
        scope: "individual",
        iso6393: "tay"
    },
    {
        name: "Tocho",
        type: "living",
        scope: "individual",
        iso6393: "taz"
    },
    {
        name: "Aikan\xe3",
        type: "living",
        scope: "individual",
        iso6393: "tba"
    },
    {
        name: "Takia",
        type: "living",
        scope: "individual",
        iso6393: "tbc"
    },
    {
        name: "Kaki Ae",
        type: "living",
        scope: "individual",
        iso6393: "tbd"
    },
    {
        name: "Tanimbili",
        type: "living",
        scope: "individual",
        iso6393: "tbe"
    },
    {
        name: "Mandara",
        type: "living",
        scope: "individual",
        iso6393: "tbf"
    },
    {
        name: "North Tairora",
        type: "living",
        scope: "individual",
        iso6393: "tbg"
    },
    {
        name: "Dharawal",
        type: "extinct",
        scope: "individual",
        iso6393: "tbh"
    },
    {
        name: "Gaam",
        type: "living",
        scope: "individual",
        iso6393: "tbi"
    },
    {
        name: "Tiang",
        type: "living",
        scope: "individual",
        iso6393: "tbj"
    },
    {
        name: "Calamian Tagbanwa",
        type: "living",
        scope: "individual",
        iso6393: "tbk"
    },
    {
        name: "Tboli",
        type: "living",
        scope: "individual",
        iso6393: "tbl"
    },
    {
        name: "Tagbu",
        type: "living",
        scope: "individual",
        iso6393: "tbm"
    },
    {
        name: "Barro Negro Tunebo",
        type: "living",
        scope: "individual",
        iso6393: "tbn"
    },
    {
        name: "Tawala",
        type: "living",
        scope: "individual",
        iso6393: "tbo"
    },
    {
        name: "Taworta",
        type: "living",
        scope: "individual",
        iso6393: "tbp"
    },
    {
        name: "Tumtum",
        type: "living",
        scope: "individual",
        iso6393: "tbr"
    },
    {
        name: "Tanguat",
        type: "living",
        scope: "individual",
        iso6393: "tbs"
    },
    {
        name: "Tembo (Kitembo)",
        type: "living",
        scope: "individual",
        iso6393: "tbt"
    },
    {
        name: "Tubar",
        type: "extinct",
        scope: "individual",
        iso6393: "tbu"
    },
    {
        name: "Tobo",
        type: "living",
        scope: "individual",
        iso6393: "tbv"
    },
    {
        name: "Tagbanwa",
        type: "living",
        scope: "individual",
        iso6393: "tbw"
    },
    {
        name: "Kapin",
        type: "living",
        scope: "individual",
        iso6393: "tbx"
    },
    {
        name: "Tabaru",
        type: "living",
        scope: "individual",
        iso6393: "tby"
    },
    {
        name: "Ditammari",
        type: "living",
        scope: "individual",
        iso6393: "tbz"
    },
    {
        name: "Ticuna",
        type: "living",
        scope: "individual",
        iso6393: "tca"
    },
    {
        name: "Tanacross",
        type: "living",
        scope: "individual",
        iso6393: "tcb"
    },
    {
        name: "Datooga",
        type: "living",
        scope: "individual",
        iso6393: "tcc"
    },
    {
        name: "Tafi",
        type: "living",
        scope: "individual",
        iso6393: "tcd"
    },
    {
        name: "Southern Tutchone",
        type: "living",
        scope: "individual",
        iso6393: "tce"
    },
    {
        name: "Malinaltepec Me'phaa",
        type: "living",
        scope: "individual",
        iso6393: "tcf"
    },
    {
        name: "Tamagario",
        type: "living",
        scope: "individual",
        iso6393: "tcg"
    },
    {
        name: "Turks And Caicos Creole English",
        type: "living",
        scope: "individual",
        iso6393: "tch"
    },
    {
        name: "W\xe1ra",
        type: "living",
        scope: "individual",
        iso6393: "tci"
    },
    {
        name: "Tchitchege",
        type: "living",
        scope: "individual",
        iso6393: "tck"
    },
    {
        name: "Taman (Myanmar)",
        type: "extinct",
        scope: "individual",
        iso6393: "tcl"
    },
    {
        name: "Tanahmerah",
        type: "living",
        scope: "individual",
        iso6393: "tcm"
    },
    {
        name: "Tichurong",
        type: "living",
        scope: "individual",
        iso6393: "tcn"
    },
    {
        name: "Taungyo",
        type: "living",
        scope: "individual",
        iso6393: "tco"
    },
    {
        name: "Tawr Chin",
        type: "living",
        scope: "individual",
        iso6393: "tcp"
    },
    {
        name: "Kaiy",
        type: "living",
        scope: "individual",
        iso6393: "tcq"
    },
    {
        name: "Torres Strait Creole",
        type: "living",
        scope: "individual",
        iso6393: "tcs"
    },
    {
        name: "T'en",
        type: "living",
        scope: "individual",
        iso6393: "tct"
    },
    {
        name: "Southeastern Tarahumara",
        type: "living",
        scope: "individual",
        iso6393: "tcu"
    },
    {
        name: "Tecpatl\xe1n Totonac",
        type: "living",
        scope: "individual",
        iso6393: "tcw"
    },
    {
        name: "Toda",
        type: "living",
        scope: "individual",
        iso6393: "tcx"
    },
    {
        name: "Tulu",
        type: "living",
        scope: "individual",
        iso6393: "tcy"
    },
    {
        name: "Thado Chin",
        type: "living",
        scope: "individual",
        iso6393: "tcz"
    },
    {
        name: "Tagdal",
        type: "living",
        scope: "individual",
        iso6393: "tda"
    },
    {
        name: "Panchpargania",
        type: "living",
        scope: "individual",
        iso6393: "tdb"
    },
    {
        name: "Ember\xe1-Tad\xf3",
        type: "living",
        scope: "individual",
        iso6393: "tdc"
    },
    {
        name: "Tai N\xfca",
        type: "living",
        scope: "individual",
        iso6393: "tdd"
    },
    {
        name: "Tiranige Diga Dogon",
        type: "living",
        scope: "individual",
        iso6393: "tde"
    },
    {
        name: "Talieng",
        type: "living",
        scope: "individual",
        iso6393: "tdf"
    },
    {
        name: "Western Tamang",
        type: "living",
        scope: "individual",
        iso6393: "tdg"
    },
    {
        name: "Thulung",
        type: "living",
        scope: "individual",
        iso6393: "tdh"
    },
    {
        name: "Tomadino",
        type: "living",
        scope: "individual",
        iso6393: "tdi"
    },
    {
        name: "Tajio",
        type: "living",
        scope: "individual",
        iso6393: "tdj"
    },
    {
        name: "Tambas",
        type: "living",
        scope: "individual",
        iso6393: "tdk"
    },
    {
        name: "Sur",
        type: "living",
        scope: "individual",
        iso6393: "tdl"
    },
    {
        name: "Taruma",
        type: "living",
        scope: "individual",
        iso6393: "tdm"
    },
    {
        name: "Tondano",
        type: "living",
        scope: "individual",
        iso6393: "tdn"
    },
    {
        name: "Teme",
        type: "living",
        scope: "individual",
        iso6393: "tdo"
    },
    {
        name: "Tita",
        type: "living",
        scope: "individual",
        iso6393: "tdq"
    },
    {
        name: "Todrah",
        type: "living",
        scope: "individual",
        iso6393: "tdr"
    },
    {
        name: "Doutai",
        type: "living",
        scope: "individual",
        iso6393: "tds"
    },
    {
        name: "Tetun Dili",
        type: "living",
        scope: "individual",
        iso6393: "tdt"
    },
    {
        name: "Toro",
        type: "living",
        scope: "individual",
        iso6393: "tdv"
    },
    {
        name: "Tandroy-Mahafaly Malagasy",
        type: "living",
        scope: "individual",
        iso6393: "tdx"
    },
    {
        name: "Tadyawan",
        type: "living",
        scope: "individual",
        iso6393: "tdy"
    },
    {
        name: "Temiar",
        type: "living",
        scope: "individual",
        iso6393: "tea"
    },
    {
        name: "Tetete",
        type: "extinct",
        scope: "individual",
        iso6393: "teb"
    },
    {
        name: "Terik",
        type: "living",
        scope: "individual",
        iso6393: "tec"
    },
    {
        name: "Tepo Krumen",
        type: "living",
        scope: "individual",
        iso6393: "ted"
    },
    {
        name: "Huehuetla Tepehua",
        type: "living",
        scope: "individual",
        iso6393: "tee"
    },
    {
        name: "Teressa",
        type: "living",
        scope: "individual",
        iso6393: "tef"
    },
    {
        name: "Teke-Tege",
        type: "living",
        scope: "individual",
        iso6393: "teg"
    },
    {
        name: "Tehuelche",
        type: "living",
        scope: "individual",
        iso6393: "teh"
    },
    {
        name: "Torricelli",
        type: "living",
        scope: "individual",
        iso6393: "tei"
    },
    {
        name: "Ibali Teke",
        type: "living",
        scope: "individual",
        iso6393: "tek"
    },
    {
        name: "Telugu",
        type: "living",
        scope: "individual",
        iso6393: "tel",
        iso6392B: "tel",
        iso6392T: "tel",
        iso6391: "te"
    },
    {
        name: "Timne",
        type: "living",
        scope: "individual",
        iso6393: "tem",
        iso6392B: "tem",
        iso6392T: "tem"
    },
    {
        name: "Tama (Colombia)",
        type: "extinct",
        scope: "individual",
        iso6393: "ten"
    },
    {
        name: "Teso",
        type: "living",
        scope: "individual",
        iso6393: "teo"
    },
    {
        name: "Tepecano",
        type: "extinct",
        scope: "individual",
        iso6393: "tep"
    },
    {
        name: "Temein",
        type: "living",
        scope: "individual",
        iso6393: "teq"
    },
    {
        name: "Tereno",
        type: "living",
        scope: "individual",
        iso6393: "ter",
        iso6392B: "ter",
        iso6392T: "ter"
    },
    {
        name: "Tengger",
        type: "living",
        scope: "individual",
        iso6393: "tes"
    },
    {
        name: "Tetum",
        type: "living",
        scope: "individual",
        iso6393: "tet",
        iso6392B: "tet",
        iso6392T: "tet"
    },
    {
        name: "Soo",
        type: "living",
        scope: "individual",
        iso6393: "teu"
    },
    {
        name: "Teor",
        type: "living",
        scope: "individual",
        iso6393: "tev"
    },
    {
        name: "Tewa (USA)",
        type: "living",
        scope: "individual",
        iso6393: "tew"
    },
    {
        name: "Tennet",
        type: "living",
        scope: "individual",
        iso6393: "tex"
    },
    {
        name: "Tulishi",
        type: "living",
        scope: "individual",
        iso6393: "tey"
    },
    {
        name: "Tetserret",
        type: "living",
        scope: "individual",
        iso6393: "tez"
    },
    {
        name: "Tofin Gbe",
        type: "living",
        scope: "individual",
        iso6393: "tfi"
    },
    {
        name: "Tanaina",
        type: "living",
        scope: "individual",
        iso6393: "tfn"
    },
    {
        name: "Tefaro",
        type: "living",
        scope: "individual",
        iso6393: "tfo"
    },
    {
        name: "Teribe",
        type: "living",
        scope: "individual",
        iso6393: "tfr"
    },
    {
        name: "Ternate",
        type: "living",
        scope: "individual",
        iso6393: "tft"
    },
    {
        name: "Sagalla",
        type: "living",
        scope: "individual",
        iso6393: "tga"
    },
    {
        name: "Tobilung",
        type: "living",
        scope: "individual",
        iso6393: "tgb"
    },
    {
        name: "Tigak",
        type: "living",
        scope: "individual",
        iso6393: "tgc"
    },
    {
        name: "Ciwogai",
        type: "living",
        scope: "individual",
        iso6393: "tgd"
    },
    {
        name: "Eastern Gorkha Tamang",
        type: "living",
        scope: "individual",
        iso6393: "tge"
    },
    {
        name: "Chalikha",
        type: "living",
        scope: "individual",
        iso6393: "tgf"
    },
    {
        name: "Tobagonian Creole English",
        type: "living",
        scope: "individual",
        iso6393: "tgh"
    },
    {
        name: "Lawunuia",
        type: "living",
        scope: "individual",
        iso6393: "tgi"
    },
    {
        name: "Tagin",
        type: "living",
        scope: "individual",
        iso6393: "tgj"
    },
    {
        name: "Tajik",
        type: "living",
        scope: "individual",
        iso6393: "tgk",
        iso6392B: "tgk",
        iso6392T: "tgk",
        iso6391: "tg"
    },
    {
        name: "Tagalog",
        type: "living",
        scope: "individual",
        iso6393: "tgl",
        iso6392B: "tgl",
        iso6392T: "tgl",
        iso6391: "tl"
    },
    {
        name: "Tandaganon",
        type: "living",
        scope: "individual",
        iso6393: "tgn"
    },
    {
        name: "Sudest",
        type: "living",
        scope: "individual",
        iso6393: "tgo"
    },
    {
        name: "Tangoa",
        type: "living",
        scope: "individual",
        iso6393: "tgp"
    },
    {
        name: "Tring",
        type: "living",
        scope: "individual",
        iso6393: "tgq"
    },
    {
        name: "Tareng",
        type: "living",
        scope: "individual",
        iso6393: "tgr"
    },
    {
        name: "Nume",
        type: "living",
        scope: "individual",
        iso6393: "tgs"
    },
    {
        name: "Central Tagbanwa",
        type: "living",
        scope: "individual",
        iso6393: "tgt"
    },
    {
        name: "Tanggu",
        type: "living",
        scope: "individual",
        iso6393: "tgu"
    },
    {
        name: "Tingui-Boto",
        type: "extinct",
        scope: "individual",
        iso6393: "tgv"
    },
    {
        name: "Tagwana Senoufo",
        type: "living",
        scope: "individual",
        iso6393: "tgw"
    },
    {
        name: "Tagish",
        type: "living",
        scope: "individual",
        iso6393: "tgx"
    },
    {
        name: "Togoyo",
        type: "extinct",
        scope: "individual",
        iso6393: "tgy"
    },
    {
        name: "Tagalaka",
        type: "extinct",
        scope: "individual",
        iso6393: "tgz"
    },
    {
        name: "Thai",
        type: "living",
        scope: "individual",
        iso6393: "tha",
        iso6392B: "tha",
        iso6392T: "tha",
        iso6391: "th"
    },
    {
        name: "Kuuk Thaayorre",
        type: "living",
        scope: "individual",
        iso6393: "thd"
    },
    {
        name: "Chitwania Tharu",
        type: "living",
        scope: "individual",
        iso6393: "the"
    },
    {
        name: "Thangmi",
        type: "living",
        scope: "individual",
        iso6393: "thf"
    },
    {
        name: "Northern Tarahumara",
        type: "living",
        scope: "individual",
        iso6393: "thh"
    },
    {
        name: "Tai Long",
        type: "living",
        scope: "individual",
        iso6393: "thi"
    },
    {
        name: "Tharaka",
        type: "living",
        scope: "individual",
        iso6393: "thk"
    },
    {
        name: "Dangaura Tharu",
        type: "living",
        scope: "individual",
        iso6393: "thl"
    },
    {
        name: "Aheu",
        type: "living",
        scope: "individual",
        iso6393: "thm"
    },
    {
        name: "Thachanadan",
        type: "living",
        scope: "individual",
        iso6393: "thn"
    },
    {
        name: "Thompson",
        type: "living",
        scope: "individual",
        iso6393: "thp"
    },
    {
        name: "Kochila Tharu",
        type: "living",
        scope: "individual",
        iso6393: "thq"
    },
    {
        name: "Rana Tharu",
        type: "living",
        scope: "individual",
        iso6393: "thr"
    },
    {
        name: "Thakali",
        type: "living",
        scope: "individual",
        iso6393: "ths"
    },
    {
        name: "Tahltan",
        type: "living",
        scope: "individual",
        iso6393: "tht"
    },
    {
        name: "Thuri",
        type: "living",
        scope: "individual",
        iso6393: "thu"
    },
    {
        name: "Tahaggart Tamahaq",
        type: "living",
        scope: "individual",
        iso6393: "thv"
    },
    {
        name: "Tha",
        type: "living",
        scope: "individual",
        iso6393: "thy"
    },
    {
        name: "Tayart Tamajeq",
        type: "living",
        scope: "individual",
        iso6393: "thz"
    },
    {
        name: "Tidikelt Tamazight",
        type: "living",
        scope: "individual",
        iso6393: "tia"
    },
    {
        name: "Tira",
        type: "living",
        scope: "individual",
        iso6393: "tic"
    },
    {
        name: "Tifal",
        type: "living",
        scope: "individual",
        iso6393: "tif"
    },
    {
        name: "Tigre",
        type: "living",
        scope: "individual",
        iso6393: "tig",
        iso6392B: "tig",
        iso6392T: "tig"
    },
    {
        name: "Timugon Murut",
        type: "living",
        scope: "individual",
        iso6393: "tih"
    },
    {
        name: "Tiene",
        type: "living",
        scope: "individual",
        iso6393: "tii"
    },
    {
        name: "Tilung",
        type: "living",
        scope: "individual",
        iso6393: "tij"
    },
    {
        name: "Tikar",
        type: "living",
        scope: "individual",
        iso6393: "tik"
    },
    {
        name: "Tillamook",
        type: "extinct",
        scope: "individual",
        iso6393: "til"
    },
    {
        name: "Timbe",
        type: "living",
        scope: "individual",
        iso6393: "tim"
    },
    {
        name: "Tindi",
        type: "living",
        scope: "individual",
        iso6393: "tin"
    },
    {
        name: "Teop",
        type: "living",
        scope: "individual",
        iso6393: "tio"
    },
    {
        name: "Trimuris",
        type: "living",
        scope: "individual",
        iso6393: "tip"
    },
    {
        name: "Ti\xe9fo",
        type: "living",
        scope: "individual",
        iso6393: "tiq"
    },
    {
        name: "Tigrinya",
        type: "living",
        scope: "individual",
        iso6393: "tir",
        iso6392B: "tir",
        iso6392T: "tir",
        iso6391: "ti"
    },
    {
        name: "Masadiit Itneg",
        type: "living",
        scope: "individual",
        iso6393: "tis"
    },
    {
        name: "Tinigua",
        type: "living",
        scope: "individual",
        iso6393: "tit"
    },
    {
        name: "Adasen",
        type: "living",
        scope: "individual",
        iso6393: "tiu"
    },
    {
        name: "Tiv",
        type: "living",
        scope: "individual",
        iso6393: "tiv",
        iso6392B: "tiv",
        iso6392T: "tiv"
    },
    {
        name: "Tiwi",
        type: "living",
        scope: "individual",
        iso6393: "tiw"
    },
    {
        name: "Southern Tiwa",
        type: "living",
        scope: "individual",
        iso6393: "tix"
    },
    {
        name: "Tiruray",
        type: "living",
        scope: "individual",
        iso6393: "tiy"
    },
    {
        name: "Tai Hongjin",
        type: "living",
        scope: "individual",
        iso6393: "tiz"
    },
    {
        name: "Tajuasohn",
        type: "living",
        scope: "individual",
        iso6393: "tja"
    },
    {
        name: "Tunjung",
        type: "living",
        scope: "individual",
        iso6393: "tjg"
    },
    {
        name: "Northern Tujia",
        type: "living",
        scope: "individual",
        iso6393: "tji"
    },
    {
        name: "Tjungundji",
        type: "living",
        scope: "individual",
        iso6393: "tjj"
    },
    {
        name: "Tai Laing",
        type: "living",
        scope: "individual",
        iso6393: "tjl"
    },
    {
        name: "Timucua",
        type: "extinct",
        scope: "individual",
        iso6393: "tjm"
    },
    {
        name: "Tonjon",
        type: "extinct",
        scope: "individual",
        iso6393: "tjn"
    },
    {
        name: "Temacine Tamazight",
        type: "living",
        scope: "individual",
        iso6393: "tjo"
    },
    {
        name: "Tjupany",
        type: "living",
        scope: "individual",
        iso6393: "tjp"
    },
    {
        name: "Southern Tujia",
        type: "living",
        scope: "individual",
        iso6393: "tjs"
    },
    {
        name: "Tjurruru",
        type: "extinct",
        scope: "individual",
        iso6393: "tju"
    },
    {
        name: "Djabwurrung",
        type: "living",
        scope: "individual",
        iso6393: "tjw"
    },
    {
        name: "Truk\xe1",
        type: "extinct",
        scope: "individual",
        iso6393: "tka"
    },
    {
        name: "Buksa",
        type: "living",
        scope: "individual",
        iso6393: "tkb"
    },
    {
        name: "Tukudede",
        type: "living",
        scope: "individual",
        iso6393: "tkd"
    },
    {
        name: "Takwane",
        type: "living",
        scope: "individual",
        iso6393: "tke"
    },
    {
        name: "Tukumanf\xe9d",
        type: "extinct",
        scope: "individual",
        iso6393: "tkf"
    },
    {
        name: "Tesaka Malagasy",
        type: "living",
        scope: "individual",
        iso6393: "tkg"
    },
    {
        name: "Tokelau",
        type: "living",
        scope: "individual",
        iso6393: "tkl",
        iso6392B: "tkl",
        iso6392T: "tkl"
    },
    {
        name: "Takelma",
        type: "extinct",
        scope: "individual",
        iso6393: "tkm"
    },
    {
        name: "Toku-No-Shima",
        type: "living",
        scope: "individual",
        iso6393: "tkn"
    },
    {
        name: "Tikopia",
        type: "living",
        scope: "individual",
        iso6393: "tkp"
    },
    {
        name: "Tee",
        type: "living",
        scope: "individual",
        iso6393: "tkq"
    },
    {
        name: "Tsakhur",
        type: "living",
        scope: "individual",
        iso6393: "tkr"
    },
    {
        name: "Takestani",
        type: "living",
        scope: "individual",
        iso6393: "tks"
    },
    {
        name: "Kathoriya Tharu",
        type: "living",
        scope: "individual",
        iso6393: "tkt"
    },
    {
        name: "Upper Necaxa Totonac",
        type: "living",
        scope: "individual",
        iso6393: "tku"
    },
    {
        name: "Mur Pano",
        type: "living",
        scope: "individual",
        iso6393: "tkv"
    },
    {
        name: "Teanu",
        type: "living",
        scope: "individual",
        iso6393: "tkw"
    },
    {
        name: "Tangko",
        type: "living",
        scope: "individual",
        iso6393: "tkx"
    },
    {
        name: "Takua",
        type: "living",
        scope: "individual",
        iso6393: "tkz"
    },
    {
        name: "Southwestern Tepehuan",
        type: "living",
        scope: "individual",
        iso6393: "tla"
    },
    {
        name: "Tobelo",
        type: "living",
        scope: "individual",
        iso6393: "tlb"
    },
    {
        name: "Yecuatla Totonac",
        type: "living",
        scope: "individual",
        iso6393: "tlc"
    },
    {
        name: "Talaud",
        type: "living",
        scope: "individual",
        iso6393: "tld"
    },
    {
        name: "Telefol",
        type: "living",
        scope: "individual",
        iso6393: "tlf"
    },
    {
        name: "Tofanma",
        type: "living",
        scope: "individual",
        iso6393: "tlg"
    },
    {
        name: "Klingon",
        type: "constructed",
        scope: "individual",
        iso6393: "tlh",
        iso6392B: "tlh",
        iso6392T: "tlh"
    },
    {
        name: "Tlingit",
        type: "living",
        scope: "individual",
        iso6393: "tli",
        iso6392B: "tli",
        iso6392T: "tli"
    },
    {
        name: "Talinga-Bwisi",
        type: "living",
        scope: "individual",
        iso6393: "tlj"
    },
    {
        name: "Taloki",
        type: "living",
        scope: "individual",
        iso6393: "tlk"
    },
    {
        name: "Tetela",
        type: "living",
        scope: "individual",
        iso6393: "tll"
    },
    {
        name: "Tolomako",
        type: "living",
        scope: "individual",
        iso6393: "tlm"
    },
    {
        name: "Talondo'",
        type: "living",
        scope: "individual",
        iso6393: "tln"
    },
    {
        name: "Talodi",
        type: "living",
        scope: "individual",
        iso6393: "tlo"
    },
    {
        name: "Filomena Mata-Coahuitl\xe1n Totonac",
        type: "living",
        scope: "individual",
        iso6393: "tlp"
    },
    {
        name: "Tai Loi",
        type: "living",
        scope: "individual",
        iso6393: "tlq"
    },
    {
        name: "Talise",
        type: "living",
        scope: "individual",
        iso6393: "tlr"
    },
    {
        name: "Tambotalo",
        type: "living",
        scope: "individual",
        iso6393: "tls"
    },
    {
        name: "Sou Nama",
        type: "living",
        scope: "individual",
        iso6393: "tlt"
    },
    {
        name: "Tulehu",
        type: "living",
        scope: "individual",
        iso6393: "tlu"
    },
    {
        name: "Taliabu",
        type: "living",
        scope: "individual",
        iso6393: "tlv"
    },
    {
        name: "Khehek",
        type: "living",
        scope: "individual",
        iso6393: "tlx"
    },
    {
        name: "Talysh",
        type: "living",
        scope: "individual",
        iso6393: "tly"
    },
    {
        name: "Tama (Chad)",
        type: "living",
        scope: "individual",
        iso6393: "tma"
    },
    {
        name: "Katbol",
        type: "living",
        scope: "individual",
        iso6393: "tmb"
    },
    {
        name: "Tumak",
        type: "living",
        scope: "individual",
        iso6393: "tmc"
    },
    {
        name: "Haruai",
        type: "living",
        scope: "individual",
        iso6393: "tmd"
    },
    {
        name: "Trememb\xe9",
        type: "extinct",
        scope: "individual",
        iso6393: "tme"
    },
    {
        name: "Toba-Maskoy",
        type: "living",
        scope: "individual",
        iso6393: "tmf"
    },
    {
        name: "Ternate\xf1o",
        type: "extinct",
        scope: "individual",
        iso6393: "tmg"
    },
    {
        name: "Tamashek",
        type: "living",
        scope: "macrolanguage",
        iso6393: "tmh",
        iso6392B: "tmh",
        iso6392T: "tmh"
    },
    {
        name: "Tutuba",
        type: "living",
        scope: "individual",
        iso6393: "tmi"
    },
    {
        name: "Samarokena",
        type: "living",
        scope: "individual",
        iso6393: "tmj"
    },
    {
        name: "Northwestern Tamang",
        type: "living",
        scope: "individual",
        iso6393: "tmk"
    },
    {
        name: "Tamnim Citak",
        type: "living",
        scope: "individual",
        iso6393: "tml"
    },
    {
        name: "Tai Thanh",
        type: "living",
        scope: "individual",
        iso6393: "tmm"
    },
    {
        name: "Taman (Indonesia)",
        type: "living",
        scope: "individual",
        iso6393: "tmn"
    },
    {
        name: "Temoq",
        type: "living",
        scope: "individual",
        iso6393: "tmo"
    },
    {
        name: "Tumleo",
        type: "living",
        scope: "individual",
        iso6393: "tmq"
    },
    {
        name: "Jewish Babylonian Aramaic (ca. 200-1200 CE)",
        type: "extinct",
        scope: "individual",
        iso6393: "tmr"
    },
    {
        name: "Tima",
        type: "living",
        scope: "individual",
        iso6393: "tms"
    },
    {
        name: "Tasmate",
        type: "living",
        scope: "individual",
        iso6393: "tmt"
    },
    {
        name: "Iau",
        type: "living",
        scope: "individual",
        iso6393: "tmu"
    },
    {
        name: "Tembo (Motembo)",
        type: "living",
        scope: "individual",
        iso6393: "tmv"
    },
    {
        name: "Temuan",
        type: "living",
        scope: "individual",
        iso6393: "tmw"
    },
    {
        name: "Tami",
        type: "living",
        scope: "individual",
        iso6393: "tmy"
    },
    {
        name: "Tamanaku",
        type: "extinct",
        scope: "individual",
        iso6393: "tmz"
    },
    {
        name: "Tacana",
        type: "living",
        scope: "individual",
        iso6393: "tna"
    },
    {
        name: "Western Tunebo",
        type: "living",
        scope: "individual",
        iso6393: "tnb"
    },
    {
        name: "Tanimuca-Retuar\xe3",
        type: "living",
        scope: "individual",
        iso6393: "tnc"
    },
    {
        name: "Angosturas Tunebo",
        type: "living",
        scope: "individual",
        iso6393: "tnd"
    },
    {
        name: "Tobanga",
        type: "living",
        scope: "individual",
        iso6393: "tng"
    },
    {
        name: "Maiani",
        type: "living",
        scope: "individual",
        iso6393: "tnh"
    },
    {
        name: "Tandia",
        type: "living",
        scope: "individual",
        iso6393: "tni"
    },
    {
        name: "Kwamera",
        type: "living",
        scope: "individual",
        iso6393: "tnk"
    },
    {
        name: "Lenakel",
        type: "living",
        scope: "individual",
        iso6393: "tnl"
    },
    {
        name: "Tabla",
        type: "living",
        scope: "individual",
        iso6393: "tnm"
    },
    {
        name: "North Tanna",
        type: "living",
        scope: "individual",
        iso6393: "tnn"
    },
    {
        name: "Toromono",
        type: "living",
        scope: "individual",
        iso6393: "tno"
    },
    {
        name: "Whitesands",
        type: "living",
        scope: "individual",
        iso6393: "tnp"
    },
    {
        name: "Taino",
        type: "extinct",
        scope: "individual",
        iso6393: "tnq"
    },
    {
        name: "M\xe9nik",
        type: "living",
        scope: "individual",
        iso6393: "tnr"
    },
    {
        name: "Tenis",
        type: "living",
        scope: "individual",
        iso6393: "tns"
    },
    {
        name: "Tontemboan",
        type: "living",
        scope: "individual",
        iso6393: "tnt"
    },
    {
        name: "Tay Khang",
        type: "living",
        scope: "individual",
        iso6393: "tnu"
    },
    {
        name: "Tangchangya",
        type: "living",
        scope: "individual",
        iso6393: "tnv"
    },
    {
        name: "Tonsawang",
        type: "living",
        scope: "individual",
        iso6393: "tnw"
    },
    {
        name: "Tanema",
        type: "living",
        scope: "individual",
        iso6393: "tnx"
    },
    {
        name: "Tongwe",
        type: "living",
        scope: "individual",
        iso6393: "tny"
    },
    {
        name: "Ten'edn",
        type: "living",
        scope: "individual",
        iso6393: "tnz"
    },
    {
        name: "Toba",
        type: "living",
        scope: "individual",
        iso6393: "tob"
    },
    {
        name: "Coyutla Totonac",
        type: "living",
        scope: "individual",
        iso6393: "toc"
    },
    {
        name: "Toma",
        type: "living",
        scope: "individual",
        iso6393: "tod"
    },
    {
        name: "Gizrra",
        type: "living",
        scope: "individual",
        iso6393: "tof"
    },
    {
        name: "Tonga (Nyasa)",
        type: "living",
        scope: "individual",
        iso6393: "tog",
        iso6392B: "tog",
        iso6392T: "tog"
    },
    {
        name: "Gitonga",
        type: "living",
        scope: "individual",
        iso6393: "toh"
    },
    {
        name: "Tonga (Zambia)",
        type: "living",
        scope: "individual",
        iso6393: "toi"
    },
    {
        name: "Tojolabal",
        type: "living",
        scope: "individual",
        iso6393: "toj"
    },
    {
        name: "Tolowa",
        type: "extinct",
        scope: "individual",
        iso6393: "tol"
    },
    {
        name: "Tombulu",
        type: "living",
        scope: "individual",
        iso6393: "tom"
    },
    {
        name: "Tonga (Tonga Islands)",
        type: "living",
        scope: "individual",
        iso6393: "ton",
        iso6392B: "ton",
        iso6392T: "ton",
        iso6391: "to"
    },
    {
        name: "Xicotepec De Ju\xe1rez Totonac",
        type: "living",
        scope: "individual",
        iso6393: "too"
    },
    {
        name: "Papantla Totonac",
        type: "living",
        scope: "individual",
        iso6393: "top"
    },
    {
        name: "Toposa",
        type: "living",
        scope: "individual",
        iso6393: "toq"
    },
    {
        name: "Togbo-Vara Banda",
        type: "living",
        scope: "individual",
        iso6393: "tor"
    },
    {
        name: "Highland Totonac",
        type: "living",
        scope: "individual",
        iso6393: "tos"
    },
    {
        name: "Tho",
        type: "living",
        scope: "individual",
        iso6393: "tou"
    },
    {
        name: "Upper Taromi",
        type: "living",
        scope: "individual",
        iso6393: "tov"
    },
    {
        name: "Jemez",
        type: "living",
        scope: "individual",
        iso6393: "tow"
    },
    {
        name: "Tobian",
        type: "living",
        scope: "individual",
        iso6393: "tox"
    },
    {
        name: "Topoiyo",
        type: "living",
        scope: "individual",
        iso6393: "toy"
    },
    {
        name: "To",
        type: "living",
        scope: "individual",
        iso6393: "toz"
    },
    {
        name: "Taupota",
        type: "living",
        scope: "individual",
        iso6393: "tpa"
    },
    {
        name: "Azoy\xfa Me'phaa",
        type: "living",
        scope: "individual",
        iso6393: "tpc"
    },
    {
        name: "Tippera",
        type: "living",
        scope: "individual",
        iso6393: "tpe"
    },
    {
        name: "Tarpia",
        type: "living",
        scope: "individual",
        iso6393: "tpf"
    },
    {
        name: "Kula",
        type: "living",
        scope: "individual",
        iso6393: "tpg"
    },
    {
        name: "Tok Pisin",
        type: "living",
        scope: "individual",
        iso6393: "tpi",
        iso6392B: "tpi",
        iso6392T: "tpi"
    },
    {
        name: "Tapiet\xe9",
        type: "living",
        scope: "individual",
        iso6393: "tpj"
    },
    {
        name: "Tupinikin",
        type: "extinct",
        scope: "individual",
        iso6393: "tpk"
    },
    {
        name: "Tlacoapa Me'phaa",
        type: "living",
        scope: "individual",
        iso6393: "tpl"
    },
    {
        name: "Tampulma",
        type: "living",
        scope: "individual",
        iso6393: "tpm"
    },
    {
        name: "Tupinamb\xe1",
        type: "extinct",
        scope: "individual",
        iso6393: "tpn"
    },
    {
        name: "Tai Pao",
        type: "living",
        scope: "individual",
        iso6393: "tpo"
    },
    {
        name: "Pisaflores Tepehua",
        type: "living",
        scope: "individual",
        iso6393: "tpp"
    },
    {
        name: "Tukpa",
        type: "living",
        scope: "individual",
        iso6393: "tpq"
    },
    {
        name: "Tupar\xed",
        type: "living",
        scope: "individual",
        iso6393: "tpr"
    },
    {
        name: "Tlachichilco Tepehua",
        type: "living",
        scope: "individual",
        iso6393: "tpt"
    },
    {
        name: "Tampuan",
        type: "living",
        scope: "individual",
        iso6393: "tpu"
    },
    {
        name: "Tanapag",
        type: "living",
        scope: "individual",
        iso6393: "tpv"
    },
    {
        name: "Tup\xed",
        type: "extinct",
        scope: "individual",
        iso6393: "tpw"
    },
    {
        name: "Acatepec Me'phaa",
        type: "living",
        scope: "individual",
        iso6393: "tpx"
    },
    {
        name: "Trumai",
        type: "living",
        scope: "individual",
        iso6393: "tpy"
    },
    {
        name: "Tinputz",
        type: "living",
        scope: "individual",
        iso6393: "tpz"
    },
    {
        name: "Temb\xe9",
        type: "living",
        scope: "individual",
        iso6393: "tqb"
    },
    {
        name: "Lehali",
        type: "living",
        scope: "individual",
        iso6393: "tql"
    },
    {
        name: "Turumsa",
        type: "living",
        scope: "individual",
        iso6393: "tqm"
    },
    {
        name: "Tenino",
        type: "living",
        scope: "individual",
        iso6393: "tqn"
    },
    {
        name: "Toaripi",
        type: "living",
        scope: "individual",
        iso6393: "tqo"
    },
    {
        name: "Tomoip",
        type: "living",
        scope: "individual",
        iso6393: "tqp"
    },
    {
        name: "Tunni",
        type: "living",
        scope: "individual",
        iso6393: "tqq"
    },
    {
        name: "Torona",
        type: "extinct",
        scope: "individual",
        iso6393: "tqr"
    },
    {
        name: "Western Totonac",
        type: "living",
        scope: "individual",
        iso6393: "tqt"
    },
    {
        name: "Touo",
        type: "living",
        scope: "individual",
        iso6393: "tqu"
    },
    {
        name: "Tonkawa",
        type: "extinct",
        scope: "individual",
        iso6393: "tqw"
    },
    {
        name: "Tirahi",
        type: "living",
        scope: "individual",
        iso6393: "tra"
    },
    {
        name: "Terebu",
        type: "living",
        scope: "individual",
        iso6393: "trb"
    },
    {
        name: "Copala Triqui",
        type: "living",
        scope: "individual",
        iso6393: "trc"
    },
    {
        name: "Turi",
        type: "living",
        scope: "individual",
        iso6393: "trd"
    },
    {
        name: "East Tarangan",
        type: "living",
        scope: "individual",
        iso6393: "tre"
    },
    {
        name: "Trinidadian Creole English",
        type: "living",
        scope: "individual",
        iso6393: "trf"
    },
    {
        name: "Lish\xe1n Did\xe1n",
        type: "living",
        scope: "individual",
        iso6393: "trg"
    },
    {
        name: "Turaka",
        type: "living",
        scope: "individual",
        iso6393: "trh"
    },
    {
        name: "Tri\xf3",
        type: "living",
        scope: "individual",
        iso6393: "tri"
    },
    {
        name: "Toram",
        type: "living",
        scope: "individual",
        iso6393: "trj"
    },
    {
        name: "Traveller Scottish",
        type: "living",
        scope: "individual",
        iso6393: "trl"
    },
    {
        name: "Tregami",
        type: "living",
        scope: "individual",
        iso6393: "trm"
    },
    {
        name: "Trinitario",
        type: "living",
        scope: "individual",
        iso6393: "trn"
    },
    {
        name: "Tarao Naga",
        type: "living",
        scope: "individual",
        iso6393: "tro"
    },
    {
        name: "Kok Borok",
        type: "living",
        scope: "individual",
        iso6393: "trp"
    },
    {
        name: "San Mart\xedn Itunyoso Triqui",
        type: "living",
        scope: "individual",
        iso6393: "trq"
    },
    {
        name: "Taushiro",
        type: "living",
        scope: "individual",
        iso6393: "trr"
    },
    {
        name: "Chicahuaxtla Triqui",
        type: "living",
        scope: "individual",
        iso6393: "trs"
    },
    {
        name: "Tunggare",
        type: "living",
        scope: "individual",
        iso6393: "trt"
    },
    {
        name: "Turoyo",
        type: "living",
        scope: "individual",
        iso6393: "tru"
    },
    {
        name: "Taroko",
        type: "living",
        scope: "individual",
        iso6393: "trv"
    },
    {
        name: "Torwali",
        type: "living",
        scope: "individual",
        iso6393: "trw"
    },
    {
        name: "Tringgus-Sembaan Bidayuh",
        type: "living",
        scope: "individual",
        iso6393: "trx"
    },
    {
        name: "Turung",
        type: "extinct",
        scope: "individual",
        iso6393: "try"
    },
    {
        name: "Tor\xe1",
        type: "extinct",
        scope: "individual",
        iso6393: "trz"
    },
    {
        name: "Tsaangi",
        type: "living",
        scope: "individual",
        iso6393: "tsa"
    },
    {
        name: "Tsamai",
        type: "living",
        scope: "individual",
        iso6393: "tsb"
    },
    {
        name: "Tswa",
        type: "living",
        scope: "individual",
        iso6393: "tsc"
    },
    {
        name: "Tsakonian",
        type: "living",
        scope: "individual",
        iso6393: "tsd"
    },
    {
        name: "Tunisian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "tse"
    },
    {
        name: "Tausug",
        type: "living",
        scope: "individual",
        iso6393: "tsg"
    },
    {
        name: "Tsuvan",
        type: "living",
        scope: "individual",
        iso6393: "tsh"
    },
    {
        name: "Tsimshian",
        type: "living",
        scope: "individual",
        iso6393: "tsi",
        iso6392B: "tsi",
        iso6392T: "tsi"
    },
    {
        name: "Tshangla",
        type: "living",
        scope: "individual",
        iso6393: "tsj"
    },
    {
        name: "Tseku",
        type: "living",
        scope: "individual",
        iso6393: "tsk"
    },
    {
        name: "Ts'\xfcn-Lao",
        type: "living",
        scope: "individual",
        iso6393: "tsl"
    },
    {
        name: "Turkish Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "tsm"
    },
    {
        name: "Tswana",
        type: "living",
        scope: "individual",
        iso6393: "tsn",
        iso6392B: "tsn",
        iso6392T: "tsn",
        iso6391: "tn"
    },
    {
        name: "Tsonga",
        type: "living",
        scope: "individual",
        iso6393: "tso",
        iso6392B: "tso",
        iso6392T: "tso",
        iso6391: "ts"
    },
    {
        name: "Northern Toussian",
        type: "living",
        scope: "individual",
        iso6393: "tsp"
    },
    {
        name: "Thai Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "tsq"
    },
    {
        name: "Akei",
        type: "living",
        scope: "individual",
        iso6393: "tsr"
    },
    {
        name: "Taiwan Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "tss"
    },
    {
        name: "Tondi Songway Kiini",
        type: "living",
        scope: "individual",
        iso6393: "tst"
    },
    {
        name: "Tsou",
        type: "living",
        scope: "individual",
        iso6393: "tsu"
    },
    {
        name: "Tsogo",
        type: "living",
        scope: "individual",
        iso6393: "tsv"
    },
    {
        name: "Tsishingini",
        type: "living",
        scope: "individual",
        iso6393: "tsw"
    },
    {
        name: "Mubami",
        type: "living",
        scope: "individual",
        iso6393: "tsx"
    },
    {
        name: "Tebul Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "tsy"
    },
    {
        name: "Purepecha",
        type: "living",
        scope: "individual",
        iso6393: "tsz"
    },
    {
        name: "Tutelo",
        type: "extinct",
        scope: "individual",
        iso6393: "tta"
    },
    {
        name: "Gaa",
        type: "living",
        scope: "individual",
        iso6393: "ttb"
    },
    {
        name: "Tektiteko",
        type: "living",
        scope: "individual",
        iso6393: "ttc"
    },
    {
        name: "Tauade",
        type: "living",
        scope: "individual",
        iso6393: "ttd"
    },
    {
        name: "Bwanabwana",
        type: "living",
        scope: "individual",
        iso6393: "tte"
    },
    {
        name: "Tuotomb",
        type: "living",
        scope: "individual",
        iso6393: "ttf"
    },
    {
        name: "Tutong",
        type: "living",
        scope: "individual",
        iso6393: "ttg"
    },
    {
        name: "Upper Ta'oih",
        type: "living",
        scope: "individual",
        iso6393: "tth"
    },
    {
        name: "Tobati",
        type: "living",
        scope: "individual",
        iso6393: "tti"
    },
    {
        name: "Tooro",
        type: "living",
        scope: "individual",
        iso6393: "ttj"
    },
    {
        name: "Totoro",
        type: "living",
        scope: "individual",
        iso6393: "ttk"
    },
    {
        name: "Totela",
        type: "living",
        scope: "individual",
        iso6393: "ttl"
    },
    {
        name: "Northern Tutchone",
        type: "living",
        scope: "individual",
        iso6393: "ttm"
    },
    {
        name: "Towei",
        type: "living",
        scope: "individual",
        iso6393: "ttn"
    },
    {
        name: "Lower Ta'oih",
        type: "living",
        scope: "individual",
        iso6393: "tto"
    },
    {
        name: "Tombelala",
        type: "living",
        scope: "individual",
        iso6393: "ttp"
    },
    {
        name: "Tawallammat Tamajaq",
        type: "living",
        scope: "individual",
        iso6393: "ttq"
    },
    {
        name: "Tera",
        type: "living",
        scope: "individual",
        iso6393: "ttr"
    },
    {
        name: "Northeastern Thai",
        type: "living",
        scope: "individual",
        iso6393: "tts"
    },
    {
        name: "Muslim Tat",
        type: "living",
        scope: "individual",
        iso6393: "ttt"
    },
    {
        name: "Torau",
        type: "living",
        scope: "individual",
        iso6393: "ttu"
    },
    {
        name: "Titan",
        type: "living",
        scope: "individual",
        iso6393: "ttv"
    },
    {
        name: "Long Wat",
        type: "living",
        scope: "individual",
        iso6393: "ttw"
    },
    {
        name: "Sikaritai",
        type: "living",
        scope: "individual",
        iso6393: "tty"
    },
    {
        name: "Tsum",
        type: "living",
        scope: "individual",
        iso6393: "ttz"
    },
    {
        name: "Wiarumus",
        type: "living",
        scope: "individual",
        iso6393: "tua"
    },
    {
        name: "T\xfcbatulabal",
        type: "extinct",
        scope: "individual",
        iso6393: "tub"
    },
    {
        name: "Mutu",
        type: "living",
        scope: "individual",
        iso6393: "tuc"
    },
    {
        name: "Tux\xe1",
        type: "extinct",
        scope: "individual",
        iso6393: "tud"
    },
    {
        name: "Tuyuca",
        type: "living",
        scope: "individual",
        iso6393: "tue"
    },
    {
        name: "Central Tunebo",
        type: "living",
        scope: "individual",
        iso6393: "tuf"
    },
    {
        name: "Tunia",
        type: "living",
        scope: "individual",
        iso6393: "tug"
    },
    {
        name: "Taulil",
        type: "living",
        scope: "individual",
        iso6393: "tuh"
    },
    {
        name: "Tupuri",
        type: "living",
        scope: "individual",
        iso6393: "tui"
    },
    {
        name: "Tugutil",
        type: "living",
        scope: "individual",
        iso6393: "tuj"
    },
    {
        name: "Turkmen",
        type: "living",
        scope: "individual",
        iso6393: "tuk",
        iso6392B: "tuk",
        iso6392T: "tuk",
        iso6391: "tk"
    },
    {
        name: "Tula",
        type: "living",
        scope: "individual",
        iso6393: "tul"
    },
    {
        name: "Tumbuka",
        type: "living",
        scope: "individual",
        iso6393: "tum",
        iso6392B: "tum",
        iso6392T: "tum"
    },
    {
        name: "Tunica",
        type: "living",
        scope: "individual",
        iso6393: "tun"
    },
    {
        name: "Tucano",
        type: "living",
        scope: "individual",
        iso6393: "tuo"
    },
    {
        name: "Tedaga",
        type: "living",
        scope: "individual",
        iso6393: "tuq"
    },
    {
        name: "Turkish",
        type: "living",
        scope: "individual",
        iso6393: "tur",
        iso6392B: "tur",
        iso6392T: "tur",
        iso6391: "tr"
    },
    {
        name: "Tuscarora",
        type: "living",
        scope: "individual",
        iso6393: "tus"
    },
    {
        name: "Tututni",
        type: "living",
        scope: "individual",
        iso6393: "tuu"
    },
    {
        name: "Turkana",
        type: "living",
        scope: "individual",
        iso6393: "tuv"
    },
    {
        name: "Tuxin\xe1wa",
        type: "extinct",
        scope: "individual",
        iso6393: "tux"
    },
    {
        name: "Tugen",
        type: "living",
        scope: "individual",
        iso6393: "tuy"
    },
    {
        name: "Turka",
        type: "living",
        scope: "individual",
        iso6393: "tuz"
    },
    {
        name: "Vaghua",
        type: "living",
        scope: "individual",
        iso6393: "tva"
    },
    {
        name: "Tsuvadi",
        type: "living",
        scope: "individual",
        iso6393: "tvd"
    },
    {
        name: "Te'un",
        type: "living",
        scope: "individual",
        iso6393: "tve"
    },
    {
        name: "Southeast Ambrym",
        type: "living",
        scope: "individual",
        iso6393: "tvk"
    },
    {
        name: "Tuvalu",
        type: "living",
        scope: "individual",
        iso6393: "tvl",
        iso6392B: "tvl",
        iso6392T: "tvl"
    },
    {
        name: "Tela-Masbuar",
        type: "living",
        scope: "individual",
        iso6393: "tvm"
    },
    {
        name: "Tavoyan",
        type: "living",
        scope: "individual",
        iso6393: "tvn"
    },
    {
        name: "Tidore",
        type: "living",
        scope: "individual",
        iso6393: "tvo"
    },
    {
        name: "Taveta",
        type: "living",
        scope: "individual",
        iso6393: "tvs"
    },
    {
        name: "Tutsa Naga",
        type: "living",
        scope: "individual",
        iso6393: "tvt"
    },
    {
        name: "Tunen",
        type: "living",
        scope: "individual",
        iso6393: "tvu"
    },
    {
        name: "Sedoa",
        type: "living",
        scope: "individual",
        iso6393: "tvw"
    },
    {
        name: "Taivoan",
        type: "extinct",
        scope: "individual",
        iso6393: "tvx"
    },
    {
        name: "Timor Pidgin",
        type: "extinct",
        scope: "individual",
        iso6393: "tvy"
    },
    {
        name: "Twana",
        type: "extinct",
        scope: "individual",
        iso6393: "twa"
    },
    {
        name: "Western Tawbuid",
        type: "living",
        scope: "individual",
        iso6393: "twb"
    },
    {
        name: "Teshenawa",
        type: "extinct",
        scope: "individual",
        iso6393: "twc"
    },
    {
        name: "Twents",
        type: "living",
        scope: "individual",
        iso6393: "twd"
    },
    {
        name: "Tewa (Indonesia)",
        type: "living",
        scope: "individual",
        iso6393: "twe"
    },
    {
        name: "Northern Tiwa",
        type: "living",
        scope: "individual",
        iso6393: "twf"
    },
    {
        name: "Tereweng",
        type: "living",
        scope: "individual",
        iso6393: "twg"
    },
    {
        name: "Tai D\xf3n",
        type: "living",
        scope: "individual",
        iso6393: "twh"
    },
    {
        name: "Twi",
        type: "living",
        scope: "individual",
        iso6393: "twi",
        iso6392B: "twi",
        iso6392T: "twi",
        iso6391: "tw"
    },
    {
        name: "Tawara",
        type: "living",
        scope: "individual",
        iso6393: "twl"
    },
    {
        name: "Tawang Monpa",
        type: "living",
        scope: "individual",
        iso6393: "twm"
    },
    {
        name: "Twendi",
        type: "living",
        scope: "individual",
        iso6393: "twn"
    },
    {
        name: "Tswapong",
        type: "living",
        scope: "individual",
        iso6393: "two"
    },
    {
        name: "Ere",
        type: "living",
        scope: "individual",
        iso6393: "twp"
    },
    {
        name: "Tasawaq",
        type: "living",
        scope: "individual",
        iso6393: "twq"
    },
    {
        name: "Southwestern Tarahumara",
        type: "living",
        scope: "individual",
        iso6393: "twr"
    },
    {
        name: "Turiw\xe1ra",
        type: "extinct",
        scope: "individual",
        iso6393: "twt"
    },
    {
        name: "Termanu",
        type: "living",
        scope: "individual",
        iso6393: "twu"
    },
    {
        name: "Tuwari",
        type: "living",
        scope: "individual",
        iso6393: "tww"
    },
    {
        name: "Tewe",
        type: "living",
        scope: "individual",
        iso6393: "twx"
    },
    {
        name: "Tawoyan",
        type: "living",
        scope: "individual",
        iso6393: "twy"
    },
    {
        name: "Tombonuo",
        type: "living",
        scope: "individual",
        iso6393: "txa"
    },
    {
        name: "Tokharian B",
        type: "ancient",
        scope: "individual",
        iso6393: "txb"
    },
    {
        name: "Tsetsaut",
        type: "extinct",
        scope: "individual",
        iso6393: "txc"
    },
    {
        name: "Totoli",
        type: "living",
        scope: "individual",
        iso6393: "txe"
    },
    {
        name: "Tangut",
        type: "ancient",
        scope: "individual",
        iso6393: "txg"
    },
    {
        name: "Thracian",
        type: "ancient",
        scope: "individual",
        iso6393: "txh"
    },
    {
        name: "Ikpeng",
        type: "living",
        scope: "individual",
        iso6393: "txi"
    },
    {
        name: "Tarjumo",
        type: "living",
        scope: "individual",
        iso6393: "txj"
    },
    {
        name: "Tomini",
        type: "living",
        scope: "individual",
        iso6393: "txm"
    },
    {
        name: "West Tarangan",
        type: "living",
        scope: "individual",
        iso6393: "txn"
    },
    {
        name: "Toto",
        type: "living",
        scope: "individual",
        iso6393: "txo"
    },
    {
        name: "Tii",
        type: "living",
        scope: "individual",
        iso6393: "txq"
    },
    {
        name: "Tartessian",
        type: "ancient",
        scope: "individual",
        iso6393: "txr"
    },
    {
        name: "Tonsea",
        type: "living",
        scope: "individual",
        iso6393: "txs"
    },
    {
        name: "Citak",
        type: "living",
        scope: "individual",
        iso6393: "txt"
    },
    {
        name: "Kayap\xf3",
        type: "living",
        scope: "individual",
        iso6393: "txu"
    },
    {
        name: "Tatana",
        type: "living",
        scope: "individual",
        iso6393: "txx"
    },
    {
        name: "Tanosy Malagasy",
        type: "living",
        scope: "individual",
        iso6393: "txy"
    },
    {
        name: "Tauya",
        type: "living",
        scope: "individual",
        iso6393: "tya"
    },
    {
        name: "Kyanga",
        type: "living",
        scope: "individual",
        iso6393: "tye"
    },
    {
        name: "O'du",
        type: "living",
        scope: "individual",
        iso6393: "tyh"
    },
    {
        name: "Teke-Tsaayi",
        type: "living",
        scope: "individual",
        iso6393: "tyi"
    },
    {
        name: "Tai Do",
        type: "living",
        scope: "individual",
        iso6393: "tyj"
    },
    {
        name: "Thu Lao",
        type: "living",
        scope: "individual",
        iso6393: "tyl"
    },
    {
        name: "Kombai",
        type: "living",
        scope: "individual",
        iso6393: "tyn"
    },
    {
        name: "Thaypan",
        type: "extinct",
        scope: "individual",
        iso6393: "typ"
    },
    {
        name: "Tai Daeng",
        type: "living",
        scope: "individual",
        iso6393: "tyr"
    },
    {
        name: "T\xe0y Sa Pa",
        type: "living",
        scope: "individual",
        iso6393: "tys"
    },
    {
        name: "T\xe0y Tac",
        type: "living",
        scope: "individual",
        iso6393: "tyt"
    },
    {
        name: "Kua",
        type: "living",
        scope: "individual",
        iso6393: "tyu"
    },
    {
        name: "Tuvinian",
        type: "living",
        scope: "individual",
        iso6393: "tyv",
        iso6392B: "tyv",
        iso6392T: "tyv"
    },
    {
        name: "Teke-Tyee",
        type: "living",
        scope: "individual",
        iso6393: "tyx"
    },
    {
        name: "T\xe0y",
        type: "living",
        scope: "individual",
        iso6393: "tyz"
    },
    {
        name: "Tanzanian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "tza"
    },
    {
        name: "Tzeltal",
        type: "living",
        scope: "individual",
        iso6393: "tzh"
    },
    {
        name: "Tz'utujil",
        type: "living",
        scope: "individual",
        iso6393: "tzj"
    },
    {
        name: "Talossan",
        type: "constructed",
        scope: "individual",
        iso6393: "tzl"
    },
    {
        name: "Central Atlas Tamazight",
        type: "living",
        scope: "individual",
        iso6393: "tzm"
    },
    {
        name: "Tugun",
        type: "living",
        scope: "individual",
        iso6393: "tzn"
    },
    {
        name: "Tzotzil",
        type: "living",
        scope: "individual",
        iso6393: "tzo"
    },
    {
        name: "Tabriak",
        type: "living",
        scope: "individual",
        iso6393: "tzx"
    },
    {
        name: "Uamu\xe9",
        type: "extinct",
        scope: "individual",
        iso6393: "uam"
    },
    {
        name: "Kuan",
        type: "living",
        scope: "individual",
        iso6393: "uan"
    },
    {
        name: "Tairuma",
        type: "living",
        scope: "individual",
        iso6393: "uar"
    },
    {
        name: "Ubang",
        type: "living",
        scope: "individual",
        iso6393: "uba"
    },
    {
        name: "Ubi",
        type: "living",
        scope: "individual",
        iso6393: "ubi"
    },
    {
        name: "Buhi'non Bikol",
        type: "living",
        scope: "individual",
        iso6393: "ubl"
    },
    {
        name: "Ubir",
        type: "living",
        scope: "individual",
        iso6393: "ubr"
    },
    {
        name: "Umbu-Ungu",
        type: "living",
        scope: "individual",
        iso6393: "ubu"
    },
    {
        name: "Ubykh",
        type: "extinct",
        scope: "individual",
        iso6393: "uby"
    },
    {
        name: "Uda",
        type: "living",
        scope: "individual",
        iso6393: "uda"
    },
    {
        name: "Udihe",
        type: "living",
        scope: "individual",
        iso6393: "ude"
    },
    {
        name: "Muduga",
        type: "living",
        scope: "individual",
        iso6393: "udg"
    },
    {
        name: "Udi",
        type: "living",
        scope: "individual",
        iso6393: "udi"
    },
    {
        name: "Ujir",
        type: "living",
        scope: "individual",
        iso6393: "udj"
    },
    {
        name: "Wuzlam",
        type: "living",
        scope: "individual",
        iso6393: "udl"
    },
    {
        name: "Udmurt",
        type: "living",
        scope: "individual",
        iso6393: "udm",
        iso6392B: "udm",
        iso6392T: "udm"
    },
    {
        name: "Uduk",
        type: "living",
        scope: "individual",
        iso6393: "udu"
    },
    {
        name: "Kioko",
        type: "living",
        scope: "individual",
        iso6393: "ues"
    },
    {
        name: "Ufim",
        type: "living",
        scope: "individual",
        iso6393: "ufi"
    },
    {
        name: "Ugaritic",
        type: "ancient",
        scope: "individual",
        iso6393: "uga",
        iso6392B: "uga",
        iso6392T: "uga"
    },
    {
        name: "Kuku-Ugbanh",
        type: "extinct",
        scope: "individual",
        iso6393: "ugb"
    },
    {
        name: "Ughele",
        type: "living",
        scope: "individual",
        iso6393: "uge"
    },
    {
        name: "Ugandan Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "ugn"
    },
    {
        name: "Ugong",
        type: "living",
        scope: "individual",
        iso6393: "ugo"
    },
    {
        name: "Uruguayan Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "ugy"
    },
    {
        name: "Uhami",
        type: "living",
        scope: "individual",
        iso6393: "uha"
    },
    {
        name: "Damal",
        type: "living",
        scope: "individual",
        iso6393: "uhn"
    },
    {
        name: "Uighur",
        type: "living",
        scope: "individual",
        iso6393: "uig",
        iso6392B: "uig",
        iso6392T: "uig",
        iso6391: "ug"
    },
    {
        name: "Uisai",
        type: "living",
        scope: "individual",
        iso6393: "uis"
    },
    {
        name: "Iyive",
        type: "living",
        scope: "individual",
        iso6393: "uiv"
    },
    {
        name: "Tanjijili",
        type: "living",
        scope: "individual",
        iso6393: "uji"
    },
    {
        name: "Kaburi",
        type: "living",
        scope: "individual",
        iso6393: "uka"
    },
    {
        name: "Ukuriguma",
        type: "living",
        scope: "individual",
        iso6393: "ukg"
    },
    {
        name: "Ukhwejo",
        type: "living",
        scope: "individual",
        iso6393: "ukh"
    },
    {
        name: "Kui (India)",
        type: "living",
        scope: "individual",
        iso6393: "uki"
    },
    {
        name: "Muak Sa-aak",
        type: "living",
        scope: "individual",
        iso6393: "ukk"
    },
    {
        name: "Ukrainian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "ukl"
    },
    {
        name: "Ukpe-Bayobiri",
        type: "living",
        scope: "individual",
        iso6393: "ukp"
    },
    {
        name: "Ukwa",
        type: "living",
        scope: "individual",
        iso6393: "ukq"
    },
    {
        name: "Ukrainian",
        type: "living",
        scope: "individual",
        iso6393: "ukr",
        iso6392B: "ukr",
        iso6392T: "ukr",
        iso6391: "uk"
    },
    {
        name: "Urub\xfa-Kaapor Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "uks"
    },
    {
        name: "Ukue",
        type: "living",
        scope: "individual",
        iso6393: "uku"
    },
    {
        name: "Kuku",
        type: "living",
        scope: "individual",
        iso6393: "ukv"
    },
    {
        name: "Ukwuani-Aboh-Ndoni",
        type: "living",
        scope: "individual",
        iso6393: "ukw"
    },
    {
        name: "Kuuk-Yak",
        type: "extinct",
        scope: "individual",
        iso6393: "uky"
    },
    {
        name: "Fungwa",
        type: "living",
        scope: "individual",
        iso6393: "ula"
    },
    {
        name: "Ulukwumi",
        type: "living",
        scope: "individual",
        iso6393: "ulb"
    },
    {
        name: "Ulch",
        type: "living",
        scope: "individual",
        iso6393: "ulc"
    },
    {
        name: "Lule",
        type: "extinct",
        scope: "individual",
        iso6393: "ule"
    },
    {
        name: "Usku",
        type: "living",
        scope: "individual",
        iso6393: "ulf"
    },
    {
        name: "Ulithian",
        type: "living",
        scope: "individual",
        iso6393: "uli"
    },
    {
        name: "Meriam Mir",
        type: "living",
        scope: "individual",
        iso6393: "ulk"
    },
    {
        name: "Ullatan",
        type: "living",
        scope: "individual",
        iso6393: "ull"
    },
    {
        name: "Ulumanda'",
        type: "living",
        scope: "individual",
        iso6393: "ulm"
    },
    {
        name: "Unserdeutsch",
        type: "living",
        scope: "individual",
        iso6393: "uln"
    },
    {
        name: "Uma' Lung",
        type: "living",
        scope: "individual",
        iso6393: "ulu"
    },
    {
        name: "Ulwa",
        type: "living",
        scope: "individual",
        iso6393: "ulw"
    },
    {
        name: "Umatilla",
        type: "living",
        scope: "individual",
        iso6393: "uma"
    },
    {
        name: "Umbundu",
        type: "living",
        scope: "individual",
        iso6393: "umb",
        iso6392B: "umb",
        iso6392T: "umb"
    },
    {
        name: "Marrucinian",
        type: "ancient",
        scope: "individual",
        iso6393: "umc"
    },
    {
        name: "Umbindhamu",
        type: "extinct",
        scope: "individual",
        iso6393: "umd"
    },
    {
        name: "Morrobalama",
        type: "extinct",
        scope: "individual",
        iso6393: "umg"
    },
    {
        name: "Ukit",
        type: "living",
        scope: "individual",
        iso6393: "umi"
    },
    {
        name: "Umon",
        type: "living",
        scope: "individual",
        iso6393: "umm"
    },
    {
        name: "Makyan Naga",
        type: "living",
        scope: "individual",
        iso6393: "umn"
    },
    {
        name: "Umot\xedna",
        type: "extinct",
        scope: "individual",
        iso6393: "umo"
    },
    {
        name: "Umpila",
        type: "living",
        scope: "individual",
        iso6393: "ump"
    },
    {
        name: "Umbugarla",
        type: "extinct",
        scope: "individual",
        iso6393: "umr"
    },
    {
        name: "Pendau",
        type: "living",
        scope: "individual",
        iso6393: "ums"
    },
    {
        name: "Munsee",
        type: "living",
        scope: "individual",
        iso6393: "umu"
    },
    {
        name: "North Watut",
        type: "living",
        scope: "individual",
        iso6393: "una"
    },
    {
        name: "Undetermined",
        type: "special",
        scope: "special",
        iso6393: "und",
        iso6392B: "und",
        iso6392T: "und"
    },
    {
        name: "Uneme",
        type: "living",
        scope: "individual",
        iso6393: "une"
    },
    {
        name: "Ngarinyin",
        type: "living",
        scope: "individual",
        iso6393: "ung"
    },
    {
        name: "Enawen\xe9-Naw\xe9",
        type: "living",
        scope: "individual",
        iso6393: "unk"
    },
    {
        name: "Unami",
        type: "extinct",
        scope: "individual",
        iso6393: "unm"
    },
    {
        name: "Kurnai",
        type: "living",
        scope: "individual",
        iso6393: "unn"
    },
    {
        name: "Mundari",
        type: "living",
        scope: "individual",
        iso6393: "unr"
    },
    {
        name: "Unubahe",
        type: "living",
        scope: "individual",
        iso6393: "unu"
    },
    {
        name: "Munda",
        type: "living",
        scope: "individual",
        iso6393: "unx"
    },
    {
        name: "Unde Kaili",
        type: "living",
        scope: "individual",
        iso6393: "unz"
    },
    {
        name: "Umeda",
        type: "living",
        scope: "individual",
        iso6393: "upi"
    },
    {
        name: "Uripiv-Wala-Rano-Atchin",
        type: "living",
        scope: "individual",
        iso6393: "upv"
    },
    {
        name: "Urarina",
        type: "living",
        scope: "individual",
        iso6393: "ura"
    },
    {
        name: "Urub\xfa-Kaapor",
        type: "living",
        scope: "individual",
        iso6393: "urb"
    },
    {
        name: "Urningangg",
        type: "extinct",
        scope: "individual",
        iso6393: "urc"
    },
    {
        name: "Urdu",
        type: "living",
        scope: "individual",
        iso6393: "urd",
        iso6392B: "urd",
        iso6392T: "urd",
        iso6391: "ur"
    },
    {
        name: "Uru",
        type: "living",
        scope: "individual",
        iso6393: "ure"
    },
    {
        name: "Uradhi",
        type: "extinct",
        scope: "individual",
        iso6393: "urf"
    },
    {
        name: "Urigina",
        type: "living",
        scope: "individual",
        iso6393: "urg"
    },
    {
        name: "Urhobo",
        type: "living",
        scope: "individual",
        iso6393: "urh"
    },
    {
        name: "Urim",
        type: "living",
        scope: "individual",
        iso6393: "uri"
    },
    {
        name: "Urak Lawoi'",
        type: "living",
        scope: "individual",
        iso6393: "urk"
    },
    {
        name: "Urali",
        type: "living",
        scope: "individual",
        iso6393: "url"
    },
    {
        name: "Urapmin",
        type: "living",
        scope: "individual",
        iso6393: "urm"
    },
    {
        name: "Uruangnirin",
        type: "living",
        scope: "individual",
        iso6393: "urn"
    },
    {
        name: "Ura (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "uro"
    },
    {
        name: "Uru-Pa-In",
        type: "living",
        scope: "individual",
        iso6393: "urp"
    },
    {
        name: "Lehalurup",
        type: "living",
        scope: "individual",
        iso6393: "urr"
    },
    {
        name: "Urat",
        type: "living",
        scope: "individual",
        iso6393: "urt"
    },
    {
        name: "Urumi",
        type: "extinct",
        scope: "individual",
        iso6393: "uru"
    },
    {
        name: "Uruava",
        type: "extinct",
        scope: "individual",
        iso6393: "urv"
    },
    {
        name: "Sop",
        type: "living",
        scope: "individual",
        iso6393: "urw"
    },
    {
        name: "Urimo",
        type: "living",
        scope: "individual",
        iso6393: "urx"
    },
    {
        name: "Orya",
        type: "living",
        scope: "individual",
        iso6393: "ury"
    },
    {
        name: "Uru-Eu-Wau-Wau",
        type: "living",
        scope: "individual",
        iso6393: "urz"
    },
    {
        name: "Usarufa",
        type: "living",
        scope: "individual",
        iso6393: "usa"
    },
    {
        name: "Ushojo",
        type: "living",
        scope: "individual",
        iso6393: "ush"
    },
    {
        name: "Usui",
        type: "living",
        scope: "individual",
        iso6393: "usi"
    },
    {
        name: "Usaghade",
        type: "living",
        scope: "individual",
        iso6393: "usk"
    },
    {
        name: "Uspanteco",
        type: "living",
        scope: "individual",
        iso6393: "usp"
    },
    {
        name: "us-Saare",
        type: "living",
        scope: "individual",
        iso6393: "uss"
    },
    {
        name: "Uya",
        type: "living",
        scope: "individual",
        iso6393: "usu"
    },
    {
        name: "Otank",
        type: "living",
        scope: "individual",
        iso6393: "uta"
    },
    {
        name: "Ute-Southern Paiute",
        type: "living",
        scope: "individual",
        iso6393: "ute"
    },
    {
        name: "ut-Hun",
        type: "living",
        scope: "individual",
        iso6393: "uth"
    },
    {
        name: "Amba (Solomon Islands)",
        type: "living",
        scope: "individual",
        iso6393: "utp"
    },
    {
        name: "Etulo",
        type: "living",
        scope: "individual",
        iso6393: "utr"
    },
    {
        name: "Utu",
        type: "living",
        scope: "individual",
        iso6393: "utu"
    },
    {
        name: "Urum",
        type: "living",
        scope: "individual",
        iso6393: "uum"
    },
    {
        name: "Kulon-Pazeh",
        type: "living",
        scope: "individual",
        iso6393: "uun"
    },
    {
        name: "Ura (Vanuatu)",
        type: "living",
        scope: "individual",
        iso6393: "uur"
    },
    {
        name: "U",
        type: "living",
        scope: "individual",
        iso6393: "uuu"
    },
    {
        name: "West Uvean",
        type: "living",
        scope: "individual",
        iso6393: "uve"
    },
    {
        name: "Uri",
        type: "living",
        scope: "individual",
        iso6393: "uvh"
    },
    {
        name: "Lote",
        type: "living",
        scope: "individual",
        iso6393: "uvl"
    },
    {
        name: "Kuku-Uwanh",
        type: "living",
        scope: "individual",
        iso6393: "uwa"
    },
    {
        name: "Doko-Uyanga",
        type: "living",
        scope: "individual",
        iso6393: "uya"
    },
    {
        name: "Uzbek",
        type: "living",
        scope: "macrolanguage",
        iso6393: "uzb",
        iso6392B: "uzb",
        iso6392T: "uzb",
        iso6391: "uz"
    },
    {
        name: "Northern Uzbek",
        type: "living",
        scope: "individual",
        iso6393: "uzn"
    },
    {
        name: "Southern Uzbek",
        type: "living",
        scope: "individual",
        iso6393: "uzs"
    },
    {
        name: "Vaagri Booli",
        type: "living",
        scope: "individual",
        iso6393: "vaa"
    },
    {
        name: "Vale",
        type: "living",
        scope: "individual",
        iso6393: "vae"
    },
    {
        name: "Vafsi",
        type: "living",
        scope: "individual",
        iso6393: "vaf"
    },
    {
        name: "Vagla",
        type: "living",
        scope: "individual",
        iso6393: "vag"
    },
    {
        name: "Varhadi-Nagpuri",
        type: "living",
        scope: "individual",
        iso6393: "vah"
    },
    {
        name: "Vai",
        type: "living",
        scope: "individual",
        iso6393: "vai",
        iso6392B: "vai",
        iso6392T: "vai"
    },
    {
        name: "Sekele",
        type: "living",
        scope: "individual",
        iso6393: "vaj"
    },
    {
        name: "Vehes",
        type: "living",
        scope: "individual",
        iso6393: "val"
    },
    {
        name: "Vanimo",
        type: "living",
        scope: "individual",
        iso6393: "vam"
    },
    {
        name: "Valman",
        type: "living",
        scope: "individual",
        iso6393: "van"
    },
    {
        name: "Vao",
        type: "living",
        scope: "individual",
        iso6393: "vao"
    },
    {
        name: "Vaiphei",
        type: "living",
        scope: "individual",
        iso6393: "vap"
    },
    {
        name: "Huarijio",
        type: "living",
        scope: "individual",
        iso6393: "var"
    },
    {
        name: "Vasavi",
        type: "living",
        scope: "individual",
        iso6393: "vas"
    },
    {
        name: "Vanuma",
        type: "living",
        scope: "individual",
        iso6393: "vau"
    },
    {
        name: "Varli",
        type: "living",
        scope: "individual",
        iso6393: "vav"
    },
    {
        name: "Wayu",
        type: "living",
        scope: "individual",
        iso6393: "vay"
    },
    {
        name: "Southeast Babar",
        type: "living",
        scope: "individual",
        iso6393: "vbb"
    },
    {
        name: "Southwestern Bontok",
        type: "living",
        scope: "individual",
        iso6393: "vbk"
    },
    {
        name: "Venetian",
        type: "living",
        scope: "individual",
        iso6393: "vec"
    },
    {
        name: "Veddah",
        type: "living",
        scope: "individual",
        iso6393: "ved"
    },
    {
        name: "Veluws",
        type: "living",
        scope: "individual",
        iso6393: "vel"
    },
    {
        name: "Vemgo-Mabas",
        type: "living",
        scope: "individual",
        iso6393: "vem"
    },
    {
        name: "Venda",
        type: "living",
        scope: "individual",
        iso6393: "ven",
        iso6392B: "ven",
        iso6392T: "ven",
        iso6391: "ve"
    },
    {
        name: "Venture\xf1o",
        type: "extinct",
        scope: "individual",
        iso6393: "veo"
    },
    {
        name: "Veps",
        type: "living",
        scope: "individual",
        iso6393: "vep"
    },
    {
        name: "Mom Jango",
        type: "living",
        scope: "individual",
        iso6393: "ver"
    },
    {
        name: "Vaghri",
        type: "living",
        scope: "individual",
        iso6393: "vgr"
    },
    {
        name: "Vlaamse Gebarentaal",
        type: "living",
        scope: "individual",
        iso6393: "vgt"
    },
    {
        name: "Virgin Islands Creole English",
        type: "living",
        scope: "individual",
        iso6393: "vic"
    },
    {
        name: "Vidunda",
        type: "living",
        scope: "individual",
        iso6393: "vid"
    },
    {
        name: "Vietnamese",
        type: "living",
        scope: "individual",
        iso6393: "vie",
        iso6392B: "vie",
        iso6392T: "vie",
        iso6391: "vi"
    },
    {
        name: "Vili",
        type: "living",
        scope: "individual",
        iso6393: "vif"
    },
    {
        name: "Viemo",
        type: "living",
        scope: "individual",
        iso6393: "vig"
    },
    {
        name: "Vilela",
        type: "living",
        scope: "individual",
        iso6393: "vil"
    },
    {
        name: "Vinza",
        type: "living",
        scope: "individual",
        iso6393: "vin"
    },
    {
        name: "Vishavan",
        type: "living",
        scope: "individual",
        iso6393: "vis"
    },
    {
        name: "Viti",
        type: "living",
        scope: "individual",
        iso6393: "vit"
    },
    {
        name: "Iduna",
        type: "living",
        scope: "individual",
        iso6393: "viv"
    },
    {
        name: "Kariyarra",
        type: "extinct",
        scope: "individual",
        iso6393: "vka"
    },
    {
        name: "Ija-Zuba",
        type: "living",
        scope: "individual",
        iso6393: "vki"
    },
    {
        name: "Kujarge",
        type: "living",
        scope: "individual",
        iso6393: "vkj"
    },
    {
        name: "Kaur",
        type: "living",
        scope: "individual",
        iso6393: "vkk"
    },
    {
        name: "Kulisusu",
        type: "living",
        scope: "individual",
        iso6393: "vkl"
    },
    {
        name: "Kamakan",
        type: "extinct",
        scope: "individual",
        iso6393: "vkm"
    },
    {
        name: "Kodeoha",
        type: "living",
        scope: "individual",
        iso6393: "vko"
    },
    {
        name: "Korlai Creole Portuguese",
        type: "living",
        scope: "individual",
        iso6393: "vkp"
    },
    {
        name: "Tenggarong Kutai Malay",
        type: "living",
        scope: "individual",
        iso6393: "vkt"
    },
    {
        name: "Kurrama",
        type: "living",
        scope: "individual",
        iso6393: "vku"
    },
    {
        name: "Valpei",
        type: "living",
        scope: "individual",
        iso6393: "vlp"
    },
    {
        name: "Vlaams",
        type: "living",
        scope: "individual",
        iso6393: "vls"
    },
    {
        name: "Martuyhunira",
        type: "living",
        scope: "individual",
        iso6393: "vma"
    },
    {
        name: "Barbaram",
        type: "extinct",
        scope: "individual",
        iso6393: "vmb"
    },
    {
        name: "Juxtlahuaca Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "vmc"
    },
    {
        name: "Mudu Koraga",
        type: "living",
        scope: "individual",
        iso6393: "vmd"
    },
    {
        name: "East Masela",
        type: "living",
        scope: "individual",
        iso6393: "vme"
    },
    {
        name: "Mainfr\xe4nkisch",
        type: "living",
        scope: "individual",
        iso6393: "vmf"
    },
    {
        name: "Lungalunga",
        type: "living",
        scope: "individual",
        iso6393: "vmg"
    },
    {
        name: "Maraghei",
        type: "living",
        scope: "individual",
        iso6393: "vmh"
    },
    {
        name: "Miwa",
        type: "extinct",
        scope: "individual",
        iso6393: "vmi"
    },
    {
        name: "Ixtayutla Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "vmj"
    },
    {
        name: "Makhuwa-Shirima",
        type: "living",
        scope: "individual",
        iso6393: "vmk"
    },
    {
        name: "Malgana",
        type: "extinct",
        scope: "individual",
        iso6393: "vml"
    },
    {
        name: "Mitlatongo Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "vmm"
    },
    {
        name: "Soyaltepec Mazatec",
        type: "living",
        scope: "individual",
        iso6393: "vmp"
    },
    {
        name: "Soyaltepec Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "vmq"
    },
    {
        name: "Marenje",
        type: "living",
        scope: "individual",
        iso6393: "vmr"
    },
    {
        name: "Moksela",
        type: "extinct",
        scope: "individual",
        iso6393: "vms"
    },
    {
        name: "Muluridyi",
        type: "extinct",
        scope: "individual",
        iso6393: "vmu"
    },
    {
        name: "Valley Maidu",
        type: "extinct",
        scope: "individual",
        iso6393: "vmv"
    },
    {
        name: "Makhuwa",
        type: "living",
        scope: "individual",
        iso6393: "vmw"
    },
    {
        name: "Tamazola Mixtec",
        type: "living",
        scope: "individual",
        iso6393: "vmx"
    },
    {
        name: "Ayautla Mazatec",
        type: "living",
        scope: "individual",
        iso6393: "vmy"
    },
    {
        name: "Mazatl\xe1n Mazatec",
        type: "living",
        scope: "individual",
        iso6393: "vmz"
    },
    {
        name: "Vano",
        type: "living",
        scope: "individual",
        iso6393: "vnk"
    },
    {
        name: "Vinmavis",
        type: "living",
        scope: "individual",
        iso6393: "vnm"
    },
    {
        name: "Vunapu",
        type: "living",
        scope: "individual",
        iso6393: "vnp"
    },
    {
        name: "Volap\xfck",
        type: "constructed",
        scope: "individual",
        iso6393: "vol",
        iso6392B: "vol",
        iso6392T: "vol",
        iso6391: "vo"
    },
    {
        name: "Voro",
        type: "living",
        scope: "individual",
        iso6393: "vor"
    },
    {
        name: "Votic",
        type: "living",
        scope: "individual",
        iso6393: "vot",
        iso6392B: "vot",
        iso6392T: "vot"
    },
    {
        name: "Vera'a",
        type: "living",
        scope: "individual",
        iso6393: "vra"
    },
    {
        name: "V\xf5ro",
        type: "living",
        scope: "individual",
        iso6393: "vro"
    },
    {
        name: "Varisi",
        type: "living",
        scope: "individual",
        iso6393: "vrs"
    },
    {
        name: "Burmbar",
        type: "living",
        scope: "individual",
        iso6393: "vrt"
    },
    {
        name: "Moldova Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "vsi"
    },
    {
        name: "Venezuelan Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "vsl"
    },
    {
        name: "Valencian Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "vsv"
    },
    {
        name: "Vitou",
        type: "living",
        scope: "individual",
        iso6393: "vto"
    },
    {
        name: "Vumbu",
        type: "living",
        scope: "individual",
        iso6393: "vum"
    },
    {
        name: "Vunjo",
        type: "living",
        scope: "individual",
        iso6393: "vun"
    },
    {
        name: "Vute",
        type: "living",
        scope: "individual",
        iso6393: "vut"
    },
    {
        name: "Awa (China)",
        type: "living",
        scope: "individual",
        iso6393: "vwa"
    },
    {
        name: "Walla Walla",
        type: "living",
        scope: "individual",
        iso6393: "waa"
    },
    {
        name: "Wab",
        type: "living",
        scope: "individual",
        iso6393: "wab"
    },
    {
        name: "Wasco-Wishram",
        type: "extinct",
        scope: "individual",
        iso6393: "wac"
    },
    {
        name: "Wandamen",
        type: "living",
        scope: "individual",
        iso6393: "wad"
    },
    {
        name: "Walser",
        type: "living",
        scope: "individual",
        iso6393: "wae"
    },
    {
        name: "Wakon\xe1",
        type: "extinct",
        scope: "individual",
        iso6393: "waf"
    },
    {
        name: "Wa'ema",
        type: "living",
        scope: "individual",
        iso6393: "wag"
    },
    {
        name: "Watubela",
        type: "living",
        scope: "individual",
        iso6393: "wah"
    },
    {
        name: "Wares",
        type: "living",
        scope: "individual",
        iso6393: "wai"
    },
    {
        name: "Waffa",
        type: "living",
        scope: "individual",
        iso6393: "waj"
    },
    {
        name: "Wolaytta",
        type: "living",
        scope: "individual",
        iso6393: "wal",
        iso6392B: "wal",
        iso6392T: "wal"
    },
    {
        name: "Wampanoag",
        type: "extinct",
        scope: "individual",
        iso6393: "wam"
    },
    {
        name: "Wan",
        type: "living",
        scope: "individual",
        iso6393: "wan"
    },
    {
        name: "Wappo",
        type: "extinct",
        scope: "individual",
        iso6393: "wao"
    },
    {
        name: "Wapishana",
        type: "living",
        scope: "individual",
        iso6393: "wap"
    },
    {
        name: "Wagiman",
        type: "living",
        scope: "individual",
        iso6393: "waq"
    },
    {
        name: "Waray (Philippines)",
        type: "living",
        scope: "individual",
        iso6393: "war",
        iso6392B: "war",
        iso6392T: "war"
    },
    {
        name: "Washo",
        type: "living",
        scope: "individual",
        iso6393: "was",
        iso6392B: "was",
        iso6392T: "was"
    },
    {
        name: "Kaninuwa",
        type: "living",
        scope: "individual",
        iso6393: "wat"
    },
    {
        name: "Waur\xe1",
        type: "living",
        scope: "individual",
        iso6393: "wau"
    },
    {
        name: "Waka",
        type: "living",
        scope: "individual",
        iso6393: "wav"
    },
    {
        name: "Waiwai",
        type: "living",
        scope: "individual",
        iso6393: "waw"
    },
    {
        name: "Watam",
        type: "living",
        scope: "individual",
        iso6393: "wax"
    },
    {
        name: "Wayana",
        type: "living",
        scope: "individual",
        iso6393: "way"
    },
    {
        name: "Wampur",
        type: "living",
        scope: "individual",
        iso6393: "waz"
    },
    {
        name: "Warao",
        type: "living",
        scope: "individual",
        iso6393: "wba"
    },
    {
        name: "Wabo",
        type: "living",
        scope: "individual",
        iso6393: "wbb"
    },
    {
        name: "Waritai",
        type: "living",
        scope: "individual",
        iso6393: "wbe"
    },
    {
        name: "Wara",
        type: "living",
        scope: "individual",
        iso6393: "wbf"
    },
    {
        name: "Wanda",
        type: "living",
        scope: "individual",
        iso6393: "wbh"
    },
    {
        name: "Vwanji",
        type: "living",
        scope: "individual",
        iso6393: "wbi"
    },
    {
        name: "Alagwa",
        type: "living",
        scope: "individual",
        iso6393: "wbj"
    },
    {
        name: "Waigali",
        type: "living",
        scope: "individual",
        iso6393: "wbk"
    },
    {
        name: "Wakhi",
        type: "living",
        scope: "individual",
        iso6393: "wbl"
    },
    {
        name: "Wa",
        type: "living",
        scope: "individual",
        iso6393: "wbm"
    },
    {
        name: "Warlpiri",
        type: "living",
        scope: "individual",
        iso6393: "wbp"
    },
    {
        name: "Waddar",
        type: "living",
        scope: "individual",
        iso6393: "wbq"
    },
    {
        name: "Wagdi",
        type: "living",
        scope: "individual",
        iso6393: "wbr"
    },
    {
        name: "West Bengal Sign Language",
        type: "living",
        scope: "individual",
        iso6393: "wbs"
    },
    {
        name: "Warnman",
        type: "living",
        scope: "individual",
        iso6393: "wbt"
    },
    {
        name: "Wajarri",
        type: "living",
        scope: "individual",
        iso6393: "wbv"
    },
    {
        name: "Woi",
        type: "living",
        scope: "individual",
        iso6393: "wbw"
    },
    {
        name: "Yanom\xe1mi",
        type: "living",
        scope: "individual",
        iso6393: "wca"
    },
    {
        name: "Waci Gbe",
        type: "living",
        scope: "individual",
        iso6393: "wci"
    },
    {
        name: "Wandji",
        type: "living",
        scope: "individual",
        iso6393: "wdd"
    },
    {
        name: "Wadaginam",
        type: "living",
        scope: "individual",
        iso6393: "wdg"
    },
    {
        name: "Wadjiginy",
        type: "living",
        scope: "individual",
        iso6393: "wdj"
    },
    {
        name: "Wadikali",
        type: "extinct",
        scope: "individual",
        iso6393: "wdk"
    },
    {
        name: "Wadjigu",
        type: "extinct",
        scope: "individual",
        iso6393: "wdu"
    },
    {
        name: "Wadjabangayi",
        type: "extinct",
        scope: "individual",
        iso6393: "wdy"
    },
    {
        name: "Wewaw",
        type: "extinct",
        scope: "individual",
        iso6393: "wea"
    },
    {
        name: "W\xe8 Western",
        type: "living",
        scope: "individual",
        iso6393: "wec"
    },
    {
        name: "Wedau",
        type: "living",
        scope: "individual",
        iso6393: "wed"
    },
    {
        name: "Wergaia",
        type: "living",
        scope: "individual",
        iso6393: "weg"
    },
    {
        name: "Weh",
        type: "living",
        scope: "individual",
        iso6393: "weh"
    },
    {
        name: "Kiunum",
        type: "living",
        scope: "individual",
        iso6393: "wei"
    },
    {
        name: "Weme Gbe",
        type: "living",
        scope: "individual",
        iso6393: "wem"
    },
    {
        name: "Wemale",
        type: "living",
        scope: "individual",
        iso6393: "weo"
    },
    {
        name: "Westphalien",
        type: "living",
        scope: "individual",
        iso6393: "wep"
    },
    {
        name: "Weri",
        type: "living",
        scope: "individual",
        iso6393: "wer"
    },
    {
        name: "Cameroon Pidgin",
        type: "living",
        scope: "individual",
        iso6393: "wes"
    },
    {
        name: "Perai",
        type: "living",
        scope: "individual",
        iso6393: "wet"
    },
    {
        name: "Rawngtu Chin",
        type: "living",
        scope: "individual",
        iso6393: "weu"
    },
    {
        name: "Wejewa",
        type: "living",
        scope: "individual",
        iso6393: "wew"
    },
    {
        name: "Yafi",
        type: "living",
        scope: "individual",
        iso6393: "wfg"
    },
    {
        name: "Wagaya",
        type: "extinct",
        scope: "individual",
        iso6393: "wga"
    },
    {
        name: "Wagawaga",
        type: "living",
        scope: "individual",
        iso6393: "wgb"
    },
    {
        name: "Wangkangurru",
        type: "extinct",
        scope: "individual",
        iso6393: "wgg"
    },
    {
        name: "Wahgi",
        type: "living",
        scope: "individual",
        iso6393: "wgi"
    },
    {
        name: "Waigeo",
        type: "living",
        scope: "individual",
        iso6393: "wgo"
    },
    {
        name: "Wirangu",
        type: "extinct",
        scope: "individual",
        iso6393: "wgu"
    },
    {
        name: "Warrgamay",
        type: "living",
        scope: "individual",
        iso6393: "wgy"
    },
    {
        name: "Sou Upaa",
        type: "living",
        scope: "individual",
        iso6393: "wha"
    },
    {
        name: "North Wahgi",
        type: "living",
        scope: "individual",
        iso6393: "whg"
    },
    {
        name: "Wahau Kenyah",
        type: "living",
        scope: "individual",
        iso6393: "whk"
    },
    {
        name: "Wahau Kayan",
        type: "living",
        scope: "individual",
        iso6393: "whu"
    },
    {
        name: "Southern Toussian",
        type: "living",
        scope: "individual",
        iso6393: "wib"
    },
    {
        name: "Wichita",
        type: "extinct",
        scope: "individual",
        iso6393: "wic"
    },
    {
        name: "Wik-Epa",
        type: "extinct",
        scope: "individual",
        iso6393: "wie"
    },
    {
        name: "Wik-Keyangan",
        type: "extinct",
        scope: "individual",
        iso6393: "wif"
    },
    {
        name: "Wik Ngathan",
        type: "living",
        scope: "individual",
        iso6393: "wig"
    },
    {
        name: "Wik-Me'anha",
        type: "living",
        scope: "individual",
        iso6393: "wih"
    },
    {
        name: "Minidien",
        type: "living",
        scope: "individual",
        iso6393: "wii"
    },
    {
        name: "Wik-Iiyanh",
        type: "living",
        scope: "individual",
        iso6393: "wij"
    },
    {
        name: "Wikalkan",
        type: "living",
        scope: "individual",
        iso6393: "wik"
    },
    {
        name: "Wilawila",
        type: "extinct",
        scope: "individual",
        iso6393: "wil"
    },
    {
        name: "Wik-Mungkan",
        type: "living",
        scope: "individual",
        iso6393: "wim"
    },
    {
        name: "Ho-Chunk",
        type: "living",
        scope: "individual",
        iso6393: "win"
    },
    {
        name: "Wiraf\xe9d",
        type: "extinct",
        scope: "individual",
        iso6393: "wir"
    },
    {
        name: "Wiru",
        type: "living",
        scope: "individual",
        iso6393: "wiu"
    },
    {
        name: "Vitu",
        type: "living",
        scope: "individual",
        iso6393: "wiv"
    },
    {
        name: "Wiyot",
        type: "extinct",
        scope: "individual",
        iso6393: "wiy"
    },
    {
        name: "Waja",
        type: "living",
        scope: "individual",
        iso6393: "wja"
    },
    {
        name: "Warji",
        type: "living",
        scope: "individual",
        iso6393: "wji"
    },
    {
        name: "Kw'adza",
        type: "extinct",
        scope: "individual",
        iso6393: "wka"
    },
    {
        name: "Kumbaran",
        type: "living",
        scope: "individual",
        iso6393: "wkb"
    },
    {
        name: "Wakde",
        type: "living",
        scope: "individual",
        iso6393: "wkd"
    },
    {
        name: "Kalanadi",
        type: "living",
        scope: "individual",
        iso6393: "wkl"
    },
    {
        name: "Keerray-Woorroong",
        type: "living",
        scope: "individual",
        iso6393: "wkr"
    },
    {
        name: "Kunduvadi",
        type: "living",
        scope: "individual",
        iso6393: "wku"
    },
    {
        name: "Wakawaka",
        type: "extinct",
        scope: "individual",
        iso6393: "wkw"
    },
    {
        name: "Wangkayutyuru",
        type: "extinct",
        scope: "individual",
        iso6393: "wky"
    },
    {
        name: "Walio",
        type: "living",
        scope: "individual",
        iso6393: "wla"
    },
    {
        name: "Mwali Comorian",
        type: "living",
        scope: "individual",
        iso6393: "wlc"
    },
    {
        name: "Wolane",
        type: "living",
        scope: "individual",
        iso6393: "wle"
    },
    {
        name: "Kunbarlang",
        type: "living",
        scope: "individual",
        iso6393: "wlg"
    },
    {
        name: "Welaun",
        type: "living",
        scope: "individual",
        iso6393: "wlh"
    },
    {
        name: "Waioli",
        type: "living",
        scope: "individual",
        iso6393: "wli"
    },
    {
        name: "Wailaki",
        type: "extinct",
        scope: "individual",
        iso6393: "wlk"
    },
    {
        name: "Wali (Sudan)",
        type: "living",
        scope: "individual",
        iso6393: "wll"
    },
    {
        name: "Middle Welsh",
        type: "historical",
        scope: "individual",
        iso6393: "wlm"
    },
    {
        name: "Walloon",
        type: "living",
        scope: "individual",
        iso6393: "wln",
        iso6392B: "wln",
        iso6392T: "wln",
        iso6391: "wa"
    },
    {
        name: "Wolio",
        type: "living",
        scope: "individual",
        iso6393: "wlo"
    },
    {
        name: "Wailapa",
        type: "living",
        scope: "individual",
        iso6393: "wlr"
    },
    {
        name: "Wallisian",
        type: "living",
        scope: "individual",
        iso6393: "wls"
    },
    {
        name: "Wuliwuli",
        type: "extinct",
        scope: "individual",
        iso6393: "wlu"
    },
    {
        name: "Wich\xed Lhamt\xe9s Vejoz",
        type: "living",
        scope: "individual",
        iso6393: "wlv"
    },
    {
        name: "Walak",
        type: "living",
        scope: "individual",
        iso6393: "wlw"
    },
    {
        name: "Wali (Ghana)",
        type: "living",
        scope: "individual",
        iso6393: "wlx"
    },
    {
        name: "Waling",
        type: "extinct",
        scope: "individual",
        iso6393: "wly"
    },
    {
        name: "Mawa (Nigeria)",
        type: "extinct",
        scope: "individual",
        iso6393: "wma"
    },
    {
        name: "Wambaya",
        type: "living",
        scope: "individual",
        iso6393: "wmb"
    },
    {
        name: "Wamas",
        type: "living",
        scope: "individual",
        iso6393: "wmc"
    },
    {
        name: "Mamaind\xe9",
        type: "living",
        scope: "individual",
        iso6393: "wmd"
    },
    {
        name: "Wambule",
        type: "living",
        scope: "individual",
        iso6393: "wme"
    },
    {
        name: "Waima'a",
        type: "living",
        scope: "individual",
        iso6393: "wmh"
    },
    {
        name: "Wamin",
        type: "extinct",
        scope: "individual",
        iso6393: "wmi"
    },
    {
        name: "Maiwa (Indonesia)",
        type: "living",
        scope: "individual",
        iso6393: "wmm"
    },
    {
        name: "Waamwang",
        type: "extinct",
        scope: "individual",
        iso6393: "wmn"
    },
    {
        name: "Wom (Papua New Guinea)",
        type: "living",
        scope: "individual",
        iso6393: "wmo"
    },
    {
        name: "Wambon",
        type: "living",
        scope: "individual",
        iso6393: "wms"
    },
    {
        name: "Walmajarri",
        type: "living",
        scope: "individual",
        iso6393: "wmt"
    },
    {
        name: "Mwani",
        type: "living",
        scope: "individual",
        iso6393: "wmw"
    },
    {
        name: "Womo",
        type: "living",
        scope: "individual",
        iso6393: "wmx"
    },
    {
        name: "Wanambre",
        type: "living",
        scope: "individual",
        iso6393: "wnb"
    },
    {
        name: "Wantoat",
        type: "living",
        scope: "individual",
        iso6393: "wnc"
    },
    {
        name: "Wandarang",
        type: "extinct",
        scope: "individual",
        iso6393: "wnd"
    },
    {
        name: "Waneci",
        type: "living",
        scope: "individual",
        iso6393: "wne"
    },
    {
        name: "Wanggom",
        type: "living",
        scope: "individual",
        iso6393: "wng"
    },
    {
        name: "Ndzwani Comorian",
        type: "living",
        scope: "individual",
        iso6393: "wni"
    },
    {
        name: "Wanukaka",
        type: "living",
        scope: "individual",
        iso6393: "wnk"
    },
    {
        name: "Wanggamala",
        type: "extinct",
        scope: "individual",
        iso6393: "wnm"
    },
    {
        name: "Wunumara",
        type: "extinct",
        scope: "individual",
        iso6393: "wnn"
    },
    {
        name: "Wano",
        type: "living",
        scope: "individual",
        iso6393: "wno"
    },
    {
        name: "Wanap",
        type: "living",
        scope: "individual",
        iso6393: "wnp"
    },
    {
        name: "Usan",
        type: "living",
        scope: "individual",
        iso6393: "wnu"
    },
    {
        name: "Wintu",
        type: "living",
        scope: "individual",
        iso6393: "wnw"
    },
    {
        name: "Wanyi",
        type: "living",
        scope: "individual",
        iso6393: "wny"
    },
    {
        name: "Kuwema",
        type: "living",
        scope: "individual",
        iso6393: "woa"
    },
    {
        name: "W\xe8 Northern",
        type: "living",
        scope: "individual",
        iso6393: "wob"
    },
    {
        name: "Wogeo",
        type: "living",
        scope: "individual",
        iso6393: "woc"
    },
    {
        name: "Wolani",
        type: "living",
        scope: "individual",
        iso6393: "wod"
    },
    {
        name: "Woleaian",
        type: "living",
        scope: "individual",
        iso6393: "woe"
    },
    {
        name: "Gambian Wolof",
        type: "living",
        scope: "individual",
        iso6393: "wof"
    },
    {
        name: "Wogamusin",
        type: "living",
        scope: "individual",
        iso6393: "wog"
    },
    {
        name: "Kamang",
        type: "living",
        scope: "individual",
        iso6393: "woi"
    },
    {
        name: "Longto",
        type: "living",
        scope: "individual",
        iso6393: "wok"
    },
    {
        name: "Wolof",
        type: "living",
        scope: "individual",
        iso6393: "wol",
        iso6392B: "wol",
        iso6392T: "wol",
        iso6391: "wo"
    },
    {
        name: "Wom (Nigeria)",
        type: "living",
        scope: "individual",
        iso6393: "wom"
    },
    {
        name: "Wongo",
        type: "living",
        scope: "individual",
        iso6393: "won"
    },
    {
        name: "Manombai",
        type: "living",
        scope: "individual",
        iso6393: "woo"
    },
    {
        name: "Woria",
        type: "living",
        scope: "individual",
        iso6393: "wor"
    },
    {
        name: "Hanga Hundi",
        type: "living",
        scope: "individual",
        iso6393: "wos"
    },
    {
        name: "Wawonii",
        type: "living",
        scope: "individual",
        iso6393: "wow"
    },
    {
        name: "Weyto",
        type: "extinct",
        scope: "individual",
        iso6393: "woy"
    },
    {
        name: "Maco",
        type: "living",
        scope: "individual",
        iso6393: "wpc"
    },
    {
        name: "Warapu",
        type: "living",
        scope: "individual",
        iso6393: "wra"
    },
    {
        name: "Waluwarra",
        type: "extinct",
        scope: "individual",
        iso6393: "wrb"
    },
    {
        name: "Warduji",
        type: "living",
        scope: "individual",
        iso6393: "wrd"
    },
    {
        name: "Warungu",
        type: "extinct",
        scope: "individual",
        iso6393: "wrg"
    },
    {
        name: "Wiradjuri",
        type: "extinct",
        scope: "individual",
        iso6393: "wrh"
    },
    {
        name: "Wariyangga",
        type: "extinct",
        scope: "individual",
        iso6393: "wri"
    },
    {
        name: "Garrwa",
        type: "living",
        scope: "individual",
        iso6393: "wrk"
    },
    {
        name: "Warlmanpa",
        type: "living",
        scope: "individual",
        iso6393: "wrl"
    },
    {
        name: "Warumungu",
        type: "living",
        scope: "individual",
        iso6393: "wrm"
    },
    {
        name: "Warnang",
        type: "living",
        scope: "individual",
        iso6393: "wrn"
    },
    {
        name: "Worrorra",
        type: "extinct",
        scope: "individual",
        iso6393: "wro"
    },
    {
        name: "Waropen",
        type: "living",
        scope: "individual",
        iso6393: "wrp"
    },
    {
        name: "Wardaman",
        type: "living",
        scope: "individual",
        iso6393: "wrr"
    },
    {
        name: "Waris",
        type: "living",
        scope: "individual",
        iso6393: "wrs"
    },
    {
        name: "Waru",
        type: "living",
        scope: "individual",
        iso6393: "wru"
    },
    {
        name: "Waruna",
        type: "living",
        scope: "individual",
        iso6393: "wrv"
    },
    {
        name: "Gugu Warra",
        type: "extinct",
        scope: "individual",
        iso6393: "wrw"
    },
    {
        name: "Wae Rana",
        type: "living",
        scope: "individual",
        iso6393: "wrx"
    },
    {
        name: "Merwari",
        type: "living",
        scope: "individual",
        iso6393: "wry"
    },
    {
        name: "Waray (Australia)",
        type: "extinct",
        scope: "individual",
        iso6393: "wrz"
    },
    {
        name: "Warembori",
        type: "living",
        scope: "individual",
        iso6393: "wsa"
    },
    {
        name: "Adilabad Gondi",
        type: "living",
        scope: "individual",
        iso6393: "wsg"
    },
    {
        name: "Wusi",
        type: "living",
        scope: "individual",
        iso6393: "wsi"
    },
    {
        name: "Waskia",
        type: "living",
        scope: "individual",
        iso6393: "wsk"
    },
    {
        name: "Owenia",
        type: "living",
        scope: "individual",
        iso6393: "wsr"
    },
    {
        name: "Wasa",
        type: "living",
        scope: "individual",
        iso6393: "wss"
    },
    {
        name: "Wasu",
        type: "extinct",
        scope: "individual",
        iso6393: "wsu"
    },
    {
        name: "Wotapuri-Katarqalai",
        type: "extinct",
        scope: "individual",
        iso6393: "wsv"
    },
    {
        name: "Watiwa",
        type: "living",
        scope: "individual",
        iso6393: "wtf"
    },
    {
        name: "Wathawurrung",
        type: "extinct",
        scope: "individual",
        iso6393: "wth"
    },
    {
        name: "Berta",
        type: "living",
        scope: "individual",
        iso6393: "wti"
    },
    {
        name: "Watakataui",
        type: "living",
        scope: "individual",
        iso6393: "wtk"
    },
    {
        name: "Mewati",
        type: "living",
        scope: "individual",
        iso6393: "wtm"
    },
    {
        name: "Wotu",
        type: "living",
        scope: "individual",
        iso6393: "wtw"
    },
    {
        name: "Wikngenchera",
        type: "living",
        scope: "individual",
        iso6393: "wua"
    },
    {
        name: "Wunambal",
        type: "living",
        scope: "individual",
        iso6393: "wub"
    },
    {
        name: "Wudu",
        type: "living",
        scope: "individual",
        iso6393: "wud"
    },
    {
        name: "Wutunhua",
        type: "living",
        scope: "individual",
        iso6393: "wuh"
    },
    {
        name: "Silimo",
        type: "living",
        scope: "individual",
        iso6393: "wul"
    },
    {
        name: "Wumbvu",
        type: "living",
        scope: "individual",
        iso6393: "wum"
    },
    {
        name: "Bungu",
        type: "living",
        scope: "individual",
        iso6393: "wun"
    },
    {
        name: "Wurrugu",
        type: "extinct",
        scope: "individual",
        iso6393: "wur"
    },
    {
        name: "Wutung",
        type: "living",
        scope: "individual",
        iso6393: "wut"
    },
    {
        name: "Wu Chinese",
        type: "living",
        scope: "individual",
        iso6393: "wuu"
    },
    {
        name: "Wuvulu-Aua",
        type: "living",
        scope: "individual",
        iso6393: "wuv"
    },
    {
        name: "Wulna",
        type: "living",
        scope: "individual",
        iso6393: "wux"
    },
    {
        name: "Wauyai",
        type: "living",
        scope: "individual",
        iso6393: "wuy"
    },
    {
        name: "Waama",
        type: "living",
        scope: "individual",
        iso6393: "wwa"
    },
    {
        name: "Wakabunga",
        type: "extinct",
        scope: "individual",
        iso6393: "wwb"
    },
    {
        name: "Wetamut",
        type: "living",
        scope: "individual",
        iso6393: "wwo"
    },
    {
        name: "Warrwa",
        type: "extinct",
        scope: "individual",
        iso6393: "wwr"
    },
    {
        name: "Wawa",
        type: "living",
        scope: "individual",
        iso6393: "www"
    },
    {
        name: "Waxianghua",
        type: "living",
        scope: "individual",
        iso6393: "wxa"
    },
    {
        name: "Wardandi",
        type: "extinct",
        scope: "individual",
        iso6393: "wxw"
    },
    {
        name: "Wyandot",
        type: "living",
        scope: "individual",
        iso6393: "wya"
    },
    {
        name: "Wangaaybuwan-Ngiyambaa",
        type: "living",
        scope: "individual",
        iso6393: "wyb"
    },
    {
        name: "Woiwurrung",
        type: "extinct",
        scope: "individual",
        iso6393: "wyi"
    },
    {
        name: "Wymysorys",
        type: "living",
        scope: "individual",
        iso6393: "wym"
    },
    {
        name: "Wayor\xf3",
        type: "living",
        scope: "individual",
        iso6393: "wyr"
    },
    {
        name: "Western Fijian",
        type: "living",
        scope: "individual",
        iso6393: "wyy"
    },
    {
        name: "Andalusian Arabic",
        type: "historical",
        scope: "individual",
        iso6393: "xaa"
    },
    {
        name: "Sambe",
        type: "living",
        scope: "individual",
        iso6393: "xab"
    },
    {
        name: "Kachari",
        type: "living",
        scope: "individual",
        iso6393: "xac"
    },
    {
        name: "Adai",
        type: "extinct",
        scope: "individual",
        iso6393: "xad"
    },
    {
        name: "Aequian",
        type: "ancient",
        scope: "individual",
        iso6393: "xae"
    },
    {
        name: "Aghwan",
        type: "ancient",
        scope: "individual",
        iso6393: "xag"
    },
    {
        name: "Kaimb\xe9",
        type: "extinct",
        scope: "individual",
        iso6393: "xai"
    },
    {
        name: "Ararandew\xe1ra",
        type: "extinct",
        scope: "individual",
        iso6393: "xaj"
    },
    {
        name: "M\xe1ku",
        type: "extinct",
        scope: "individual",
        iso6393: "xak"
    },
    {
        name: "Kalmyk",
        type: "living",
        scope: "individual",
        iso6393: "xal",
        iso6392B: "xal",
        iso6392T: "xal"
    },
    {
        name: "ǀXam",
        type: "extinct",
        scope: "individual",
        iso6393: "xam"
    },
    {
        name: "Xamtanga",
        type: "living",
        scope: "individual",
        iso6393: "xan"
    },
    {
        name: "Khao",
        type: "living",
        scope: "individual",
        iso6393: "xao"
    },
    {
        name: "Apalachee",
        type: "extinct",
        scope: "individual",
        iso6393: "xap"
    },
    {
        name: "Aquitanian",
        type: "ancient",
        scope: "individual",
        iso6393: "xaq"
    },
    {
        name: "Karami",
        type: "extinct",
        scope: "individual",
        iso6393: "xar"
    },
    {
        name: "Kamas",
        type: "extinct",
        scope: "individual",
        iso6393: "xas"
    },
    {
        name: "Katawixi",
        type: "living",
        scope: "individual",
        iso6393: "xat"
    },
    {
        name: "Kauwera",
        type: "living",
        scope: "individual",
        iso6393: "xau"
    },
    {
        name: "Xav\xe1nte",
        type: "living",
        scope: "individual",
        iso6393: "xav"
    },
    {
        name: "Kawaiisu",
        type: "living",
        scope: "individual",
        iso6393: "xaw"
    },
    {
        name: "Kayan Mahakam",
        type: "living",
        scope: "individual",
        iso6393: "xay"
    },
    {
        name: "Lower Burdekin",
        type: "extinct",
        scope: "individual",
        iso6393: "xbb"
    },
    {
        name: "Bactrian",
        type: "ancient",
        scope: "individual",
        iso6393: "xbc"
    },
    {
        name: "Bindal",
        type: "extinct",
        scope: "individual",
        iso6393: "xbd"
    },
    {
        name: "Bigambal",
        type: "extinct",
        scope: "individual",
        iso6393: "xbe"
    },
    {
        name: "Bunganditj",
        type: "extinct",
        scope: "individual",
        iso6393: "xbg"
    },
    {
        name: "Kombio",
        type: "living",
        scope: "individual",
        iso6393: "xbi"
    },
    {
        name: "Birrpayi",
        type: "extinct",
        scope: "individual",
        iso6393: "xbj"
    },
    {
        name: "Middle Breton",
        type: "historical",
        scope: "individual",
        iso6393: "xbm"
    },
    {
        name: "Kenaboi",
        type: "extinct",
        scope: "individual",
        iso6393: "xbn"
    },
    {
        name: "Bolgarian",
        type: "historical",
        scope: "individual",
        iso6393: "xbo"
    },
    {
        name: "Bibbulman",
        type: "extinct",
        scope: "individual",
        iso6393: "xbp"
    },
    {
        name: "Kambera",
        type: "living",
        scope: "individual",
        iso6393: "xbr"
    },
    {
        name: "Kambiw\xe1",
        type: "extinct",
        scope: "individual",
        iso6393: "xbw"
    },
    {
        name: "Batjala",
        type: "living",
        scope: "individual",
        iso6393: "xby"
    },
    {
        name: "Cumbric",
        type: "historical",
        scope: "individual",
        iso6393: "xcb"
    },
    {
        name: "Camunic",
        type: "ancient",
        scope: "individual",
        iso6393: "xcc"
    },
    {
        name: "Celtiberian",
        type: "ancient",
        scope: "individual",
        iso6393: "xce"
    },
    {
        name: "Cisalpine Gaulish",
        type: "ancient",
        scope: "individual",
        iso6393: "xcg"
    },
    {
        name: "Chemakum",
        type: "extinct",
        scope: "individual",
        iso6393: "xch"
    },
    {
        name: "Classical Armenian",
        type: "historical",
        scope: "individual",
        iso6393: "xcl"
    },
    {
        name: "Comecrudo",
        type: "extinct",
        scope: "individual",
        iso6393: "xcm"
    },
    {
        name: "Cotoname",
        type: "extinct",
        scope: "individual",
        iso6393: "xcn"
    },
    {
        name: "Chorasmian",
        type: "ancient",
        scope: "individual",
    },
];