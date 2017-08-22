<template>
  <section class="section">
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'section',
};
</script>

<style lang="scss" scoped>
.section {
  height: 100%;
  padding: 1rem;
}
</style>
