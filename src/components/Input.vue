<template>
  <div>
    <Field
      type="text"
      name="postcode-lookup-input"
      label="Postcode Lookup"
      :classNames="inputClassNames"
      v-on:keyup.enter="handleLookup"
      v-model="fieldEvent"
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
  inject: ['client', 'classNames'],
  components: {
    Field,
  },
  data() {
    const { input: inputClassNames = {} } = this.classNames;
    return {
      inputClassNames: inputClassNames || {},
      fieldEvent: {},
    };
  },
  methods: {
    handleLookup() {
      this.$emit('lookup', this.fieldEvent.target.value);
    },
  },
};
</script>
