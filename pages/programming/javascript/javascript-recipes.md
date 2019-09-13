# JavaScript Recipes

## Objects

### Filter object

```javascript
const raw = {
  item1: { key: 'sdfd', value:'sdfd' },
  item2: { key: 'sdfd', value:'sdfd' },
  item3: { key: 'sdfd', value:'sdfd' }
};

const allowed = ['item1', 'item3'];

const filtered = Object.keys(raw)
  .filter(key => allowed.includes(key))
  .reduce((obj, key) => {
    obj[key] = raw[key];
    return obj;
  }, {});

console.log(filtered);
```

## HTML-entities

### Decode HTML-entities

```javascript
function decodeHTMLEntities(text) {
  var textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}
```

### Decode HTML-entities (JQuery)

```javascript
function decodeHTMLEntities(text) {
  return $("<textarea/>")
    .html(text)
    .text();
}
```

### Encode HTML-entities

```javascript
function encodeHTMLEntities(text) {
  var textArea = document.createElement('textarea');
  textArea.innerText = text;
  return textArea.innerHTML;
}
```

### Encode HTML-entities (JQuery)

```javascript
function encodeHTMLEntities(text) {
  return $("<textarea/>")
    .text(text)
    .html();
}
```

## References

* [You don't (may not) need Lodash/Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore)
