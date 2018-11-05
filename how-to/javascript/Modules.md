# JavaScript Modules

## IIFE (Immediately Invoked Function Expression)

```javascript
(function(){
    // ...
})()
```

## UMD (Universal Module Definition)

```javascript
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.jQuery);
    }
}(this, function ($) {
    // methods
    function myFunc(){};
    // exposed public method
    return myFunc;
}));
```

## RequireJS/AMD (Asynchronous Module Definition)

Import

```javascript
define(["foo"], function(foo) {
    foo.doStuff();
})
```

## Node/CommonJS

```javascript
// foo.js
function foo() {};
module.exports = foo;
```

Import

```javascript
// index.js
var foo = require('foo');
foo.doStuff();
```

## ES6
