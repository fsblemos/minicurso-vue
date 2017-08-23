<template>
  <div class="field">
    <label class="label">{{ title }}</label>
    <div class="control">
      <input class="input"
             ref="control"
             v-focus="focus"
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
    focus: Boolean,
    placeholder: String,
    title: String,
    value: [String, Number],
    type: String,
  },
};
</script>

<style lang="scss" scoped>
.input {
  border-radius: 0;
  box-shadow: none;
}
</style>
