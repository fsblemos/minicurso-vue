<template>
  <form @submit.prevent="$emit('submit')">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'form',
  methods: {
    clear() {
      this.controls().forEach(control => control.clear());
    },
    controls() {
      return this.$children.filter(child => child.isControl);
    },
  },
};
</script>
