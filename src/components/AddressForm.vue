<template>
  <fieldset>
    <legend>{{ legend }}</legend>
    <Field
      :classNames="addressForm.addressLine1"
      name="address-line-1"
      label="Address Line 1"
      dataSelector="data-address-line1"
    />
    <Field
      :classNames="addressForm.addressLine2"
      name="address-line-2"
      label="Address Line 2"
      dataSelector="data-address-line2"
    />
    <Field
      :classNames="addressForm.locality"
      name="locality"
      label="City/Town"
      dataSelector="data-address-locality"
    />
    <Field
      :classNames="addressForm.county"
      name="county"
      label="County"
      dataSelector="data-address-county"
    />
    <Field
      :classNames="addressForm.postcode"
      name="postcode"
      label="Postcode"
      dataSelector="data-address-postcode"
    />
  </fieldset>
</template>

<script>
import Field from './Field.vue';

export default {
  inject: ['classNames'],
  components: {
    Field,
  },
  props: {
    legend: String,
  },
  data() {
    const { addressForm = {} } = this.classNames;
    return {
      addressForm,
    };
  },
};
</script>
