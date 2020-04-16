<template>
  <div>
    <select v-on:change="handleChange" v-model="selected">
      <option disabled value="">Choose an address...</option>
      <option
        v-for="address in addresses"
        v-bind:value="address[0]"
        :key="address[0]"
      >
        {{ address[1] }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    addresses: Array,
  },
  data() {
    return {
      selected: '',
    };
  },
  methods: {
    handleChange() {
      this.$emit('selected', this.selected);
    },
  },
};
</script>
