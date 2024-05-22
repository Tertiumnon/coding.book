# Variable naming

Название переменной должно быть таким, чтобы было понятно, что она содержит.

Лучше всего создать систему именования переменных, которой будет пользоваться вся команда. Эта система должна подразумевать чёткие и простые правила.

## Object variable naming

Object variable must be singular, if we're talking about object with properties.

Don't use special words to describe object type, because your IDE already knows the type.

```js
// BAD
const filters = {
  priceFrom: 0,
  priceTo: 99,
};

// BAD
const filterObj = {
  priceFrom: 0,
  priceTo: 99,
};

// GOOD
const filter = {
  priceFrom: 0,
  priceTo: 99,
};

// GOOD
const filters = [
  { name: "priceFrom", value: "0" },
  { name: "priceTo", value: "0" },
];
```
