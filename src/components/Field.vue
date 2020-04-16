<template>
  <div :class="classes.container">
    <label :class="classes.label" :for="name">{{ label }}</label>
    <input v-on="$listeners" v-bind="inputProps" :class="classes.input" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    label: String,
    type: String,
    dataSelector: String,
    classNames: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    const { dataSelector, type, name } = this;
    return {
      classes: this.classNames,
      inputProps: {
        [dataSelector]: '',
        id: name,
        type,
        name,
      },
    };
  },
};
</script>
