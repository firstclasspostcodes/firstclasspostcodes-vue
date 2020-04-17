<template>
  <div v-if="addresses" :class="selectClassNames.container">
    <label :class="selectClassNames.label" for="postcode-lookup-select">
      Select your address
    </label>
    <select
      id="postcode-lookup-select"
      v-if="addresses.length > 0"
      v-on:change="handleChange"
      v-model="selected"
      :class="selectClassNames.select"
    >
      <option disabled value="">Choose an address...</option>
      <option
        v-for="address in addresses"
        v-bind:value="address[0]"
        :key="address[0]"
      >
        {{ address[1] }}
      </option>
    </select>
    <select
      id="postcode-lookup-select"
      v-else
      v-on:change="handleChange"
      v-model="selected"
      :class="selectClassNames.select"
    >
      <option disabled value="">No addresses found</option>
    </select>
  </div>
</template>

<script>
export default {
  inject: ['classNames'],
  props: {
    addresses: Array,
  },
  data() {
    const { select: selectClassNames = {} } = this.classNames;
    return {
      selectClassNames,
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
