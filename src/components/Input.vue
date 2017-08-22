<template>
  <div class="field">
    <label class="label">{{ title }}</label>
    <div class="control">
      <input class="input"
             ref="input"
             :value="value"
             @input="$emit('input', $event.target.value)"
             :placeholder="placeholder"
             :type="type">
    </div>
  </div>
</template>

<script>
import Control from '../mixins/Control';

export default {
  name: 'input',
  extends: Control,
  props: {
    placeholder: String,
    title: String,
    value: [String, Number],
    type: String,
  },
  methods: {
    setFocus() {
      this.$refs.input.focus();
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  border-radius: 0;
  box-shadow: none;
}
</style>
