<template>
  <div :class="classes.container">
    <label :class="classes.label" :for="name">{{ label }}</label>
    <input
      v-on="{
        ...$listeners,
        input: event => $emit('input', event.target.value),
      }"
      v-bind="inputProps"
      v-model="value"
      :value="value"
      :class="classes.input"
    />
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
      value: '',
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
