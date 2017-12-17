# Vue.js Chrome Extension Template ([wcer](https://github.com/YuraDev/wcer))
> Template for quick creation of Chrome extension on Vuejs c hot reloading when developing.

![Vue.js Chrome Extension Template images](/docs/images/mini.jpg)

## Installation:
This boilerplate was built as a template for [vue-cli](https://github.com/vuejs/vue-cli) and includes options to customize your final scaffolded app. 
``` bash
# install vue-cli
$ npm install -g vue-cli
# create a new project using the template
$ vue init YuraDev/vue-chrome-extension-template my-project
# install dependencies and go!
$ cd my-project
$ npm install # or yarn
$ npm run dev # or yarn dev
```

## Structure
* [backend](https://developer.chrome.com/extensions/background_pages): Background work of your scripts
* [content](https://developer.chrome.com/extensions/content_scripts) Run in the context of web pages 
* [devtools](https://developer.chrome.com/extensions/devtools) - It can add new UI panels and sidebars, interact with the inspected page, get information about network requests, and more.
* [options](https://developer.chrome.com/extensions/options) - To allow users to customize the behavior of your extension, you may wish to provide an options page.
* popup - The page (window) that will be displayed when the icon is clicked
* tab - Your application will work in a separate tab
* ext - Shared scripts
* [manifest.js](https://developer.chrome.com/extensions/manifest) - Descriptions of the application, its rights and possibilities