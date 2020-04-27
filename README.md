# @exuanbo/file-icons-js

> File-specific icons for front-end project, extracted from [file-icons/atom](https://github.com/file-icons/atom)

[![NPM Version](https://img.shields.io/npm/v/@exuanbo/file-icons-js.svg?style=flat-square)](https://www.npmjs.com/package/@exuanbo/file-icons-js)
[![Travis CI](https://img.shields.io/travis/com/exuanbo/file-icons-js.svg?style=flat-square)](https://travis-ci.com/github/exuanbo/file-icons-js)
[![NPM Downloads](https://img.shields.io/npm/dw/@exuanbo/file-icons-js.svg?style=flat-square)](https://www.npmjs.com/package/@exuanbo/file-icons-js)
[![jsDelivr](https://img.shields.io/jsdelivr/npm/hm/@exuanbo/file-icons-js.svg?style=flat-square)](https://www.jsdelivr.com/package/npm/@exuanbo/file-icons-js)
[![License](https://img.shields.io/github/license/exuanbo/file-icons-js.svg?style=flat-square)](https://github.com/exuanbo/file-icons-js/blob/master/LICENSE)

![Icons preview](https://cdn.jsdelivr.net/gh/file-icons/atom@latest/preview.png)

## Table of Contents

- [Demo](#demo)
- [Description](#description)
- [What's included](#whats-included)
- [Installation](#installation)
- [Usage](#usage)
  - [CSS](#css)
    - [Local](#local)
    - [With CDN and Web Fonts](#with-cdn-and-web-fonts)
    - [Customize](#customize)
  - [JavaScript](#javascript)
    - [Node.js](#nodejs)
      - [1. CommonJS](#1-commonjs)
      - [2. ECMAScript Module](#2-ecmascript-module)
    - [Browser](#browser)
      - [1. Browserified Module](#1-browserified-module)
      - [2. ES Module](#2-es-module)
  - [API Reference](#api-reference)
    - [name](#name)
    - [options](#options)
      - [options.color](#optionscolor)
      - [options.array](#optionsarray)
    - [Example](#example)
- [Acknowledgement](#acknowledgement)
- [TODO](#todo)
- [License](#license)

## Demo

<https://exuanbo.github.io/file-icons-js/> and [CodePen](https://codepen.io/exuanbo/pen/jObPEGO)

They are also good starter templates for using in browser

## Description

- CSS  with self-hosted fonts and web fonts
- JavaScript for getting classes by file name with extension, specific directory name and programming language name

## What's included

```shell
dist
├── css
│   ├── file-icons-cdn.css
│   ├── file-icons-cdn.min.css
│   ├── file-icons-cdn.min.css.map
│   ├── file-icons.css
│   ├── file-icons.min.css
│   └── file-icons.min.css.map
├── fonts
│   ├── devopicons.woff2
│   ├── file-icons.woff2
│   ├── fontawesome.woff2
│   ├── mfixx.woff2
│   └── octicons.woff2
└── js
    ├── file-icons.es.min.js
    ├── file-icons.es.min.js.map
    ├── file-icons.js
    ├── file-icons.min.js
    ├── file-icons.min.js.map
    └── file-icons.mjs

3 directories, 17 files
```

## Installation

```shell
npm i @exuanbo/file-icons-js
```

Or download from [Github Releases](https://github.com/exuanbo/file-icons-js/releases)

## Usage

Similar to [`font-awesome`](https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself),

```html
<i class="icon css3-icon medium-blue"></i>
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

![css gzip size](https://flat.badgen.net/badgesize/gzip/https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/css/file-icons.min.css)

```shell
dist/css
├── file-icons-cdn.css
├── file-icons-cdn.min.css
├── file-icons-cdn.min.css.map
├── file-icons.css
├── file-icons.min.css
└── file-icons.min.css.map

0 directories, 6 files
```

Add a link tag to head, or `@import`

#### Local

`dist/css/file-icons.min.css`

```html
<link href="node_modules/@exuanbo/file-icons-js/dist/css/file-icons.min.css" rel="stylesheet">
```

#### With CDN and Web Fonts

`dist/css/file-icons-cdn.min.css`

```html
<link href="node_modules/@exuanbo/file-icons-js/dist/css/file-icons-cdn.min.css" rel="stylesheet">
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
<link href="https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/css/file-icons.min.css" rel="stylesheet">
```

#### Customize

By default,

```css
.icon:before {
  font-weight: normal;
  font-style: normal;
  text-align: center;
  width: 16px;
  line-height: 1;
  position: relative;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
}
```

### JavaScript

![js gzip size](https://flat.badgen.net/badgesize/gzip/https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/js/file-icons.es.min.js)

```shell
dist/js
├── file-icons.es.min.js
├── file-icons.es.min.js.map
├── file-icons.js
├── file-icons.min.js
├── file-icons.min.js.map
└── file-icons.mjs

0 directories, 6 files
```

```json
// package.json
{
  "main": "./dist/js/file-icons.js",
  "exports": {
    "import": "./dist/js/file-icons.mjs",
    "require": "./dist/js/file-icons.js"
  }
}
```

```javascript
// dist/js/file-icons.mjs
var main = new FileIcons();
export default main;
```

#### Node.js

##### 1. CommonJS

```javascript
const icons = require('@exuanbo/file-icons-js')
```

##### 2. ECMAScript Module

```javascript
import icons from '@exuanbo/file-icons-js'
```

#### Browser

##### 1. Browserified Module

`dist/js/file-icons.min.js`

```html
<!-- Locally -->
<script src="node_modules/@exuanbo/file-icons-js/dist/js/file-icons.min.js"></script>

<!-- With CDN -->
<script src="https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/js/file-icons.min.js"></script>
```

Then create an instance,

```html
<script>
  const icons = require('file-icons-js')
</script>
```

##### 2. ES Module

`dist/js/file-icons.es.min.js`

```html
<!-- Locally -->
<script type="module">
  import icons from 'node_modules/@exuanbo/file-icons-js/dist/js/file-icons.es.min.js'
</script>

<!-- With CDN -->
<script type="module">
  import icons from 'https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest/dist/js/file-icons.es.min.js'
</script>
```

### API Reference

`getClass(name, options?)`

Returns `String|String[]`

#### name

Type: `String`

Accept file name with extension as `'index.js'`, specific directory name as `'node_modules'` or `'.github'`, programming language name as `'Javascript'`

String ended with `/` will be considered as directory, e.g `'.emacs.d/'`

#### options

Type: `Object`

##### options.color

Type: `boolean`  
Default: `true`

Returned classes contain color `'icon js-icon medium-yellow'`

##### options.array

Type: `boolean`  
Default: `false`

Return an array of string `['icon', 'js-icon', 'medium-yellow']`

#### Example

```javascript
icons.getClass('index.js')
// -> 'icon js-icon medium-yellow'

icons.getClass('Javascript')
// -> 'icon js-icon medium-yellow'

icons.getClass('node_modules', {
  array: true
})
// -> ['icon', 'node-icon', 'medium-green']

icons.getClass('node_modules', {
  color: false,
  array: true
})
// -> ['icon', 'node-icon']
```

## Acknowledgement

- [file-icons/atom](https://github.com/file-icons/atom)

## TODO

- [x] CDN support
- [x] demo site
- [x] add a webfont version of css
- [x] ES6 module

## License

[MIT](https://github.com/exuanbo/file-icons-js/blob/master/LICENSE)

## Donate

<a href="https://www.buymeacoffee.com/exuanbo" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/lato-orange.png" alt="Buy Me A Coffee" height="38.25px" width="162.75px"></a>
