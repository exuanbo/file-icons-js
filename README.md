# file-icons-js

> File-specific icons for front-end project, extracted from [file-icons/atom](https://github.com/file-icons/atom)

[![Travis CI](https://flat.badgen.net/travis/exuanbo/file-icons-js)](https://travis-ci.com/github/exuanbo/file-icons-js)
[![NPM Version](https://flat.badgen.net/npm/v/@exuanbo/file-icons-js)](https://www.npmjs.com/package/@exuanbo/file-icons-js)
[![NPM Downloads](https://flat.badgen.net/npm/dw/@exuanbo/file-icons-js)](https://www.npmjs.com/package/@exuanbo/file-icons-js)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/@exuanbo/file-icons-js/badge)](https://www.jsdelivr.com/package/npm/@exuanbo/file-icons-js)
[![License](https://flat.badgen.net/github/license/exuanbo/file-icons-js)](https://github.com/exuanbo/file-icons-js/blob/master/LICENSE)

<img alt="Icons preview" src="https://raw.githubusercontent.com/file-icons/atom/master/preview.png">

## Demo

<https://exuanbo.github.io/file-icons-js/>

## Installation

```shell
npm i @exuanbo/file-icons-js
```

## Usage

### CSS

![css gzip size](https://flat.badgen.net/badgesize/gzip/https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/file-icons.min.css)

Add a link tag to head, or `@import`

```html
<!-- Local -->
<link rel="stylesheet" href="node_modules/@exuanbo/file-icons-js/dist/file-icons.min.css">

<!-- Using CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/file-icons.min.css">
```

`@font-face` has a fallback webfont url, so you can use it directly without hosting required fonts locally. But there would be an annoying error `net::ERR_FILE_NOT_FOUND` in console.

```css
@font-face {
  font-family: "file-icons";
  font-weight: normal;
  font-style: normal;
  src: url("../fonts/file-icons.woff2") format("woff2"),
       url("https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/fonts/file-icons.woff2") format("woff2");
}
```

In html,

```html
<i class="icon css3-icon medium-blue"></i>
```

Full list of available classes can be found in

- [`styles/icons.less`](./styles/icons.less)
- [`styles/colors.less`](./styles/colors.less)

### Javascript

![js gzip size](https://flat.badgen.net/badgesize/gzip/https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/file-icons.min.js)

Require in node.js,

```javascript
const icons = require('@exuanbo/file-icons-js')
```

or in browser,

```html
<!-- Local -->
<script src="node_modules/@exuanbo/file-icons-js/dist/file-icons.min.js"></script>

<!-- Using CDN -->
<script src="https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/file-icons.min.js"></script>
```

and then,

```html
<script>
  const icons = require('file-icons-js')
</script>
```

### API

`getClass(name, options?)`

Returns `string | string[]`

#### name

Type: `string`

Accept file name as `'index.js'`, language name as `'Javascript'`, directory name as `'node_modules'`

#### options

Type: `object`

##### options.color

Type: `boolean`  
Default: `true`

Returned classes contain color `'icon js-icon medium-yellow'`

##### options.array

Type: `boolean`  
Default: `false`

Return an array of string `['icon', 'js-icon', 'medium-yellow']`

### Example

```javascript
icons.getClass('index.js') //=> 'icon js-icon medium-yellow'
icons.getClass('Javascript') //=> 'icon js-icon medium-yellow'

icons.getClass('node_modules', {
  array: true
}) //=> ['icon', 'node-icon', 'medium-green']

icons.getClass('node_modules', {
  color: false,
  array: true
}) //=> ['icon', 'node-icon']
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
    const classArray = icons.getClass('css', { array: true })
    for (const i in classArray) {
      document.getElementById('file-icon').classList.add(classArray[i])
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
- [ ] add a webfont version of css

## License

[MIT](https://github.com/exuanbo/file-icons-js/blob/master/LICENSE)
