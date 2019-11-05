# RESTy

### Author: Antonella Gutierrez & Sam Jespersen

### About
API Server client application. It’s a lot like Postman or httpie, but it runs in the browser.

### Links and Resources
* [submission PR](https://github.com/RESTySA/RESTy/pull/1)
* [travis](https://travis-ci.com/RESTySA/RESTy/builds/135087562)

###  Components
* `Header.js`
  * This component will render header
* `History.js`
  * This component sets layout of history
* `DeckOfHistory.js`
  * This component will render each history
* `Results.js`
  * This component will render the info added through POST and PUT
* `Form.js`
  * This component handles change on routes and URL provided
* `FormContainer.js`
  * This component will render the DeckOfHistory, Form and Results components and pass down the functionality to each component
* `App.js`
  * This component renders all other components

### Setup
#### .env requirements
* PORT - 7891
#### Running the app
* npm run build
* npm run start
#### Tests
* Unit Tests: npm run test
* Lint Tests: npm run lint