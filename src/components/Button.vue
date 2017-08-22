<template>
  <button class="button" :type="type" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button',
  props: {
    type: {
      type: String,
      default: 'button',
    },
  },
};
</script>
