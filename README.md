# Fela Workshop

[![Build Status](https://travis-ci.org/tajo/fela-workshop.svg?branch=master)](https://travis-ci.org/tajo/fela-workshop)

**This repository is a collection of typical Fela examples**. It uses some helper utilities from [Cloudflare's cf-ui library](https://github.com/cloudflare/cf-ui) but it's still plain Fela. To make the setup painless we maintain fine-tuned pre-configured set of Fela plugins, enhancers, breakpoints and colors. **Everytime we start a new project, we just need to wrap its root with [`<StyleProvider>`](src/client/main.js) component and that's it!** You probably want to [fork it](https://github.com/cloudflare/cf-ui/blob/master/packages/cf-style-provider/src/createRenderer.js) once you start building your own project.

We also use our own flavor of [createComponent](https://github.com/cloudflare/cf-ui/tree/master/packages/cf-style-container#createcomponentrule-type) that automatically whitelists PropTypes in case we are styling an existing React component.

**Note:** This repository does not support server-side rendering but [it is easy](http://fela.js.org/docs/advanced/ServerRendering.html) to set it up!

**First ten examples cover all CSS syntax and its rewrite into CSS in JS**. We will be adding more topics over time.

## Content

1. [Basic Syntax](src/client/01-basic-syntax/index.js)
2. [Dynamic Styles](src/client/02-dynamic-styles/index.js)
3. [Media Queries](src/client/03-media-queries/index.js)
4. [Fonts](src/client/04-fonts/index.js)
5. [Selectors](src/client/05-selectors/index.js)
6. [Prefixes](src/client/06-prefixes/index.js)
7. [Fallbacks](src/client/07-fallbacks/index.js)
8. [Polished](src/client/08-polished/index.js)
9. [Gotchas](src/client/09-gotchas/index.js)
10. [Keyframes](src/client/10-keyframes/index.js) (w/o solution, it is a homework)
11. [Testing](src/client/11-testing/index.js)
12. [Integration](src/client/12-integration/index.js)

## Prerequisites

Download and install [node.js](http://nodejs.org) version 6+. I recommend to use [Node Version Manager](https://github.com/creationix/nvm).

## Download

```shell
git clone https://github.com/tajo/fela-workshop.git
cd fela-workshop
npm install
```

## Development interactive mode

```shell
npm start
open http://localhost:8000
```

## Production mode build with server

```shell
npm run build
npm run server
open http://localhost:8000
```
