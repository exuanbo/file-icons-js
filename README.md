# File Icons

> File-specific icons extracted from [file-icons/atom](https://github.com/file-icons/atom)

[![Travis (.com)](https://img.shields.io/travis/com/exuanbo/file-icons-js?style=flat-square)](https://travis-ci.com/github/exuanbo/file-icons-js)
[![NPM Version](https://img.shields.io/npm/v/@exuanbo/file-icons-js?style=flat-square)](https://www.npmjs.com/package/@exuanbo/file-icons-js)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/@exuanbo/file-icons-js/badge)](https://www.jsdelivr.com/package/npm/@exuanbo/file-icons-js)

<img alt="Icons preview" src="https://raw.githubusercontent.com/file-icons/atom/master/preview.png">

## Demo

<https://exuanbo.github.io/file-icons-js/>

## Installation

```shell
npm i @exuanbo/file-icons-js
```

## Usage

### CSS

![css gzip size](https://img.badgesize.io/https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/file-icons.min.css.svg?compression=gzip&style=flat-square)

Link to head,

```html
<!-- Local -->
<link rel="stylesheet" href="node_modules/@exuanbo/file-icons-js/dist/file-icons.min.css">

<!-- Using CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/file-icons.min.css">
```

or `@import` in css file.

Used directly in html

```html
<i class="icon css3-icon medium-blue"></i>
```

Full list of available classes can be found in

- [`styles/icons.less`](./styles/icons.less)
- [`styles/colors.less`](./styles/colors.less)

### Javascript

![js gzip size](https://img.badgesize.io/https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/file-icons.min.js.svg?compression=gzip&style=flat-square)

Require in node.js

```javascript
const icons = require('@exuanbo/file-icons-js')
```

or in browser

```html
<!-- Local -->
<script src="node_modules/@exuanbo/file-icons-js/dist/file-icons.min.js"></script>

<!-- Using CDN -->
<script src="https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/file-icons.min.js"></script>
```

```html
<script>
  const icons = require('file-icons-js')
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
icons.getClass('index.js') // 'icon js-icon medium-yellow'
icons.getClass('Javascript') // 'icon js-icon medium-yellow'

icons.getClass('node_modules', {
  array: true
}) // ['icon', 'node-icon', 'medium-green']

icons.getClass('node_modules', {
  color: false,
  array: true
}) // ['icon', 'node-icon']
```

```html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/file-icons.min.css">
</head>

<body>
  <i id="file-icon"></i>

  <script src="https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/file-icons.min.js"></script>
  <script>
    const icons = require('file-icons-js')
    const cssIcon = document.getElementById('file-icon')
    const classArray = icons.getClass('css', { array: true })
    for (const i in classArray) {
      cssIcon.classList.add(classArray[i])
    }
  </script>
</body>
```

## Icon reference

- [File-Icons](https://github.com/file-icons/icons/blob/master/charmap.md)
- [FontAwesome 4.7.0](https://fontawesome.com/v4.7.0/cheatsheet/)
- [Mfizz](https://github.com/file-icons/MFixx/blob/master/charmap.md)
- [Devicons](https://github.com/file-icons/DevOpicons/blob/master/charmap.md)

## Acknowledgement

- [file-icons/atom](https://github.com/file-icons/atom)

## TODO

- [x] CDN support
- [x] demo site

## License

[MIT](https://github.com/exuanbo/file-icons-js/blob/master/LICENSE)
