<template>
  <div id="app">
    <PostcodeLookup
      :classNames="classNames"
      :apiKey="apiKey"
      :apiOverrides="apiOverrides"
    >
      <template v-slot:input="{ onLookup }">
        <fieldset>
          <legend>Find your address</legend>
          <Input v-on:lookup="onLookup" />
        </fieldset>
      </template>
    </PostcodeLookup>
  </div>
</template>

<script>
import PostcodeLookup from './components/PostcodeLookup.vue';
import Input from './components/Input.vue';

export default {
  name: 'App',
  props: {
    classNames: {
      type: Object,
      default: () => ({
        select: {
          container: 'test-select-container',
          select: 'test-select-select',
          label: 'test-select-label',
        },
        input: {
          container: 'test-input-container',
          input: 'test-input-input',
          label: 'test-input-label',
          button: 'test-input-button',
        },
        addressForm: {
          addressLine1: {
            container: 'test-addressLine1-container',
            input: 'test-addressLine1-input',
            label: 'test-addressLine1-label',
          },
          addressLine2: {
            container: 'test-addressLine2-container',
            input: 'test-addressLine2-input',
            label: 'test-addressLine2-label',
          },
          locality: {
            container: 'test-locality-container',
            input: 'test-locality-input',
            label: 'test-locality-label',
          },
          county: {
            container: 'test-county-container',
            input: 'test-county-input',
            label: 'test-county-label',
          },
          postcode: {
            container: 'test-postcode-container',
            input: 'test-postcode-input',
            label: 'test-postcode-label',
          },
        },
      }),
    },
  },
  components: {
    PostcodeLookup,
    Input,
  },
  data() {
    return {
      apiKey: process.env.VUE_APP_API_KEY,
      apiOverrides: {
        endpoint: process.env.VUE_APP_API_ENDPOINT,
      },
    };
  },
};
</script>
