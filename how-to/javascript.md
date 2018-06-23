# JavaScript

## Classes

### ES5

#### ES5 new class

```JavaScript
function Animal(name, x, y) {
  this.name = name;
  this.setLocation(x, y);
}

Animal.prototype.setLocation = function(x, y) {
    this.x = x;
    this.y = y;
};

Animal.prototype.getLocation = function() {
    return {
        x: this.x,
        y: this.y
    };
};

let myAnimal = new Animal('Beast', 50, 100);
console.log(myAnimal.getLocation());
```

#### ES5 class extends

```JavaScript
function Cat(name, x, y, speed) {
    Animal.call(this, name, x, y);
    this.speed = speed;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

var myCat = new Cat('Kitty', 100, 200, 50);
console.log(myCat.getLocation());
```

### ES6

#### ES6 new class

```JavaScript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);
console.log(square.area); // 100
```

## Import

### AMD import

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

### CommonJS import

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

### ES6 import

```JavaScript
// add.js
export default function add (a,b) {
    return a + b
};

// numbers.js
export const number1 = 3;1
export const number2 = 5;

// whatever.js
import add from './path/to/add.js';
import { number1, number2 } from './path/to/numbers.js';

const X = add(number1, number2);

export const X;
```
