<template>
  <div>
    <Field
      type="text"
      name="postcode-lookup-input"
      label="Postcode Lookup"
      :classNames="inputClassNames"
      v-on:keyup.enter="handleLookup"
      v-model="value"
    >
      <button :class="inputClassNames.button" v-on:click="handleLookup">
        Lookup
      </button>
    </Field>
  </div>
</template>

<script>
import Field from './Field.vue';

export default {
  inject: ['classNames'],
  components: {
    Field,
  },
  data() {
    const { input: inputClassNames = {} } = this.classNames || {};
    return {
      inputClassNames,
      value: '',
    };
  },
  methods: {
    handleLookup() {
      this.$emit('lookup', this.value);
    },
  },
};
</script>
