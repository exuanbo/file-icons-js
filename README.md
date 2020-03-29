# File Icons

> File-specific icons extracted from [file-icons/atom](https://github.com/file-icons/atom)

<img alt="Icons preview" src="https://raw.githubusercontent.com/file-icons/atom/master/preview.png">

## Installation

```shell
npm install @exuanbo/file-icons-js
```

## Usage

### CSS

add link tag to head,

```html
<link rel="stylesheet" href="node_modules/@exuanbo/file-icons-js/dist/file-icons.min.css">
```

or `@import` in css file.

you can use this stylesheet directly without javascript

```html
<i class="icons css3-icon medium-blue"></i>
```

classes can be found in

- [`styles/icons.less`](./styles/icons.less)
- [`styles/colors.less`](./styles/colors.less)

### Javascript

in node.js

```javascript
const icons = require('@exuanbo/file-icons-js')
```

or in browser

```html
<script src="node_modules/@exuanbo/file-icons-js/dist/file-icons.min.js"></script>
<script>
  const icons = require('file-icons-js');
</script>
```

### Method

`getClass(string, options)`

#### String

accept file name as `'index.js'`, language name as `'Javascript'`, directory name as `'node_modules'`

#### Options

by default `{ color: true, array: false }`

### Example

```javascript
icons.getClass('index.js') // icons js-icon medium-yellow
icons.getClass('Javascript') // icons js-icon medium-yellow

icons.getClass('node_modules', {
  array: true
}) // [ 'icons', 'node-icon', 'medium-green' ]

icons.getClass('node_modules', {
  color: false,
  array: true
}) // [ 'icons', 'node-icon' ]
```

```html
<i id="css"></i>
<script src="node_modules/@exuanbo/file-icons-js/dist/file-icons.min.js"></script>
<script>
  const icons = require('file-icons-js')
  const cssIcon = document.getElementById('css');
  const classArray = icons.getClass('css', { array: true })
  for (const i in classArray) {
    cssIcon.classList.add(classArray[i])
  }
</script>
```

## Icon reference

- [File-Icons](https://github.com/file-icons/icons/blob/master/charmap.md)
- [FontAwesome 4.7.0](https://fontawesome.com/v4.7.0/cheatsheet/)
- [Mfizz](https://github.com/file-icons/MFixx/blob/master/charmap.md)
- [Devicons](https://github.com/file-icons/DevOpicons/blob/master/charmap.md)

## TODO

- [ ] CDN support
- [ ] demo site

## License

[MIT](https://github.com/exuanbo/file-icons-js/blob/master/LICENSE)
