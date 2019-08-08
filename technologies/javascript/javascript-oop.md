# JavaScript Classes

## ES5

### ES5 new class

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

### ES5 class extends

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

## ES6

### ES6 new class

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
