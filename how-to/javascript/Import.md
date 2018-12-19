# JavaScript Import

## AMD import

```JavaScript
// add.js
define([] , function () {
    return {
        add: function(a, b) {
        return a + b
    }
});

// numbers.js
define([] , function () {
    return {
        number1: 3,
        number2: 5
});

// whatever.js
define([
    './path/to/add',
    './path/to/numbers'
] , function (math, numbers) {
    var X = math.add(numbers.number1, numbers.number2);
    return X;
});
```

## CommonJS import

```JavaScript
// add.js
module.exports = {
    add: function(a,b) {
        return a + b
    }
}

// numbers.js
module.exports = {
    number1: 3,
    number2: 5
};

// whatever.js
var math = require('./path/to/add.js');
var numbers = require('./path/to/numbers.js')

module.exports = {
    X: math.add(numbers.number1, numbers.number2);
};
```

## ES6 import

```JavaScript
// add.js
export default function add (a,b) {
    return a + b
};

// numbers.js
export const number1 = 3;
export const number2 = 5;

// whatever.js
import add from './path/to/add.js';
import { number1, number2 } from './path/to/numbers.js';

const X = add(number1, number2);

export const X;
```
