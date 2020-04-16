<template>
  <div ref="form">
    <slot name="input" v-bind:onLookup="onLookup">
      <Input v-on:lookup="onLookup" />
    </slot>

    <slot
      name="select"
      v-bind:addresses="addresses"
      v-bind:onSelected="onSelected"
    >
      <Select
        v-on:selected="onSelected"
        v-if="addresses"
        :addresses="addresses"
      />
    </slot>

    <slot name="address" v-bind:address="address">
      <AddressForm />
    </slot>
  </div>
</template>

<script>
import Input from './Input.vue';
import Select from './Select.vue';
import AddressForm from './AddressForm.vue';

const Firstclasspostcodes = require('@firstclasspostcodes/js/dist/main');

export default {
  name: 'PostcodeLookup',
  props: {
    apiKey: String,
    apiOverrides: Object,
    classNames: {
      type: Object,
      default: () => ({}),
    },
    addressSelectors: {
      type: Object,
      default: () => ({
        address: '[data-address-line1]',
        locality: '[data-address-locality]',
        region: '[data-address-county]',
        postcode: '[data-address-postcode]',
      }),
    },
  },
  components: {
    Input,
    Select,
    AddressForm,
  },
  methods: {
    async onLookup(value) {
      const lookup = await this.client.getPostcode(value);
      this.addresses = lookup.listAddresses();
      this.lookup = lookup;
    },
    onSelected(id) {
      const { addressSelectors } = this;
      const address = this.lookup.formatAddress(id);
      Object.keys(addressSelectors).forEach(property => {
        const value = address[property];
        const $input = this.$refs.form.querySelector(
          addressSelectors[property]
        );
        if ($input && value) {
          $input.value = value;
        }
        return true;
      });
    },
  },
  data() {
    const { apiKey, apiOverrides } = this;
    return {
      client: Firstclasspostcodes(apiKey, apiOverrides),
      address: null,
      addresses: null,
    };
  },
  provide() {
    return {
      client: this.client,
      classNames: this.classNames,
    };
  },
};
</script>
