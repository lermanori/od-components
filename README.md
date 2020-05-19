# od-components
## a minimal components libary for search functionality and presentation.
#### made for usage with tailwind.css

### project components:
- display:
    - odGridView - responsive grid for displaying results.
    - odGridItem - single grid Item.
    - odListView - list presentation.
    - odListItem - list Item.
- logic:
    - odSearchComponent - (requires axios) vue component for searching apis with 500ms debounce built in.
    ```js
        /*
            @Params
            base-url:the base url for the get HTTP request.
            adapter: Function (searchValue) => the end of the api URL, function
            which accepts the value of the search and returns the end of the url. 
        */
        props:{
            'base-url':String,
            'adapter':Function
        }
    ```

# <a href="https://lermanori.github.io/od-components/#/">Demo Example </a>


## Nuxt.js Setup

1. Add `@nuxtjs/tailwindcss` dependency to your project
```bash
npm install --save-dev @nuxtjs/tailwindcss # or yarn add --dev @nuxtjs/tailwindcss
```

2. Add `@nuxtjs/tailwindcss` to the `buildModules` section of `nuxt.config.js`

```js
{
  buildModules: [
    '@nuxtjs/tailwindcss'
  ]
}
```
3. add `@lermanori/od-vue-components` dependency to your project.
```bash
npm i @lermanori/od-vue-components

```
4. add `od-vue-component` plugin to the plugins directory. 
```js
// /plugins/odVueComponents.js

import Vue from 'vue'
import odComponents from '@lermanori/od-vue-components'
Object.keys(odComponents).forEach(el=>{
    Vue.component(el,odComponents[el]);
})
```

5. now you can use the components in your templates.
```html
<template>
  <od-grid-view>
    <od-grid-item v-for="i in 20">
      <img src="https://picsum.photos/400
                "style="width:450px;height:auto"/>
      </od-grid-item>
    </od-grid-view>
</template>

```
## HTML Setup
```html
   <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
</head>

<body>
    <div id="main">
        <od-grid-view>
            <od-grid-item v-for="i in 20">
                <img src="https://picsum.photos/400" style="width:450px;height:auto" />
            </od-grid-item>
        </od-grid-view>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.min.js"></script>
    <script src="https://unpkg.com/@lermanori/od-vue-components@0.1.98/dist/od-vue-component.umd.js"></script>
    <script>
        new Vue({
            el: '#main'
        })
    </script>
</body>

</html>
```
## Codepen template
<a href="https://codepen.io/ori-lerman/pen/bGVOGLd"> click to see the Codepen template</a>


