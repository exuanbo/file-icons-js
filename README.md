# file-icons-js

> File-specific icons for front-end project, extracted from [file-icons/atom](https://github.com/file-icons/atom)

[![Travis CI](https://flat.badgen.net/travis/exuanbo/file-icons-js)](https://travis-ci.com/github/exuanbo/file-icons-js)
[![NPM Version](https://flat.badgen.net/npm/v/@exuanbo/file-icons-js)](https://www.npmjs.com/package/@exuanbo/file-icons-js)
[![NPM Downloads](https://flat.badgen.net/npm/dw/@exuanbo/file-icons-js)](https://www.npmjs.com/package/@exuanbo/file-icons-js)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/@exuanbo/file-icons-js/badge)](https://www.jsdelivr.com/package/npm/@exuanbo/file-icons-js)
[![License](https://flat.badgen.net/github/license/exuanbo/file-icons-js)](https://github.com/exuanbo/file-icons-js/blob/master/LICENSE)

![Icons preview](https://cdn.jsdelivr.net/gh/file-icons/atom@latest/preview.png)

## Features

- CSS  with self-hosting fonts or web fonts
- JavaScript for getting html classes by file name with extension, specific directory name and programming language name
- Small size after gzipped

## Demo

<https://exuanbo.github.io/file-icons-js/>

### Quick Start

```html
<head>
  <link href="https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/file-icons.min.css" rel="stylesheet">
</head>

<body>
  <i id="icon"></i>

  <script src="https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/file-icons.min.js"></script>
  <script>
    const icons = require('file-icons-js')
    const classArray = icons.getClass('index.js', { array: true })
    for (const i in classArray) {
      document.getElementById('icon').classList.add(classArray[i])
    }
  </script>
</body>
```

## Installation

```shell
npm i @exuanbo/file-icons-js
```

Or download from [Github Releases](https://github.com/exuanbo/file-icons-js/releases)

## Usage

Similar to [`font-awesome`](https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself),

```html
<body>
  <i class="icon css3-icon medium-blue"></i>
</body>
```

Full list of available classes can be found in

- [`styles/icons.less`](./styles/icons.less)
- [`styles/colors.less`](./styles/colors.less)

Icon reference

- [File-Icons](https://github.com/file-icons/icons/blob/master/charmap.md)
- [FontAwesome 4.7.0](https://fontawesome.com/v4.7.0/cheatsheet/)
- [Mfizz](https://github.com/file-icons/MFixx/blob/master/charmap.md)
- [Devicons](https://github.com/file-icons/DevOpicons/blob/master/charmap.md)

### CSS

![css gzip size](https://flat.badgen.net/badgesize/gzip/https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/file-icons.min.css)

Add a link tag to head, or `@import`

#### Local

`dist/file-icons.min.css`

```html
<head>
  <link href="node_modules/@exuanbo/file-icons-js/dist/file-icons.min.css" rel="stylesheet">
</head>
```

#### Using CDN and Web Fonts

`dist/file-icons-cdn.min.css`

```html
<head>
  <link href="node_modules/@exuanbo/file-icons-js/dist/file-icons-cdn.min.css" rel="stylesheet">
</head>
```

in which `url` is remote,

```css
@font-face {
  font-family: "file-icons";
  font-weight: normal;
  font-style: normal;
  src: url("https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/fonts/file-icons.woff2") format("woff2");
}
```

Or entirely using CDN,

```html
<head>
  <link href="https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/file-icons.min.css" rel="stylesheet">
</head>
```

### JavaScript

![js gzip size](https://flat.badgen.net/badgesize/gzip/https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/file-icons.min.js)

Require in node.js,

```javascript
const icons = require('@exuanbo/file-icons-js')
```

Or in browser,

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

Accept file name with extension as `'index.js'`, specific directory name as `'node_modules'` or `'.github'`, programming language name as `'Javascript'`

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

## Acknowledgement

- [file-icons/atom](https://github.com/file-icons/atom)

## TODO

- [x] CDN support
- [x] demo site
- [x] add a webfont version of css
- [ ] ES6 module

## License

[MIT](https://github.com/exuanbo/file-icons-js/blob/master/LICENSE)

## Donate

<a href="https://www.buymeacoffee.com/exuanbo" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/lato-orange.png" alt="Buy Me A Coffee" height="38.25px" width="162.75px"></a>
