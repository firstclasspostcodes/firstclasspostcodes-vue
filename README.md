# Firstclasspostcodes
![Build Package](https://github.com/firstclasspostcodes/firstclasspostcodes-vue/workflows/Build%20Package/badge.svg) [![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/projects/7ns8he/runs)

We've designed our [Vue](https://vuejs.org) component library to be as flexible as possible enabling you to quickly configure build or enhance any form with postcode lookup.

## Documentation
See [@firstclasspostcodes/vue](https://docs.firstclasspostcodes.com/js/vue) for detailed usage, guides and examples.

## Installation
Install the package with:

```
npm install @firstclasspostcodes/vue -s
```

once installed, import the components inside `src/main.js`:

```js
import Vue from 'vue';
import App from './App.vue';

// add global components
import '@firstclasspostcodes/vue';

new Vue({ render: h => h(App) }).$mount('#app');
```

Now, you can add the components to any Vue component:

```jsx
<template>
  <div>
    <postcode-lookup apiKey="12345678909" />
  </div>
</template>
```

For more guides and information on how to configure and use the components, [read our documentation](https://docs.firstclasspostcodes.com/js/vue).

## Development
The library is built off the back of `vue-cli-service` and we stick to the paved road.

### Getting started
Run the mock API container, this will provide some data you can develop & test with locally:

```
docker run --rm -d -p 2345:80 firstclasspostcodes/mock:latest
```

Add necessary configuration to a `.env` file:

```sh
# .env
VUE_APP_API_KEY=111111111111
VUE_APP_API_ENDPOINT=http://localhost:2345
```

For development, we run a "test app" locally, which is configured and set up in `src/App.vue`. The intention of this app is to provide some visual feedback for the library and allows for experimental usage. Most importantly, it is the page used by Cypress for integration testing.

Start the development app:

```
npm run serve
```

### Testing
All changes to modules should be accompanied with matching tests and functional changes should have accompanying integration tests, written using Cypress.

Run the tests:

```
npm test && npm run lint
```

### Cypress
Provide necessary Cypress variables to run the testing suite:

**Headless:**

```
CYPRESS_API_URL=http://localhost:2345 CYPRESS_API_KEY=111111111111 npm run test:e2e
```

**Interactively:**

```
CYPRESS_API_URL=http://localhost:2345 CYPRESS_API_KEY=111111111111 npx cypress open
```