<template>
  <div class="field">
    <label class="label">{{ title }}</label>
    <div class="control">
      <div class="select">
        <select ref="control" v-focus="focus" :value="value" @input="$emit('input', $event.target.value)">
          <option disabled>{{ placeholder }}</option>
          <option v-for="option in options">{{ option }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import Control from '../mixins/Control';

export default {
  name: 'select',
  extends: Control,
  props: {
    focus: Boolean,
    title: String,
    options: Array,
    placeholder: String,
    value: String,
  },
};
</script>

<style lang="scss" scoped>
select {
  border-radius: 0;
}
</style>
