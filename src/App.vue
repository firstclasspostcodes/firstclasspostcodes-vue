<template>
  <div id="app">
    <PostcodeLookup :apiKey="apiKey" :apiOverrides="apiOverrides">
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
