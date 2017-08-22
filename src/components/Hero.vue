<template>
  <div class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ title }}
        </h1>
        <h2 class="subtitle">
          {{ subtitle }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero',
  props: {
    title: String,
    subtitle: String,
  },
};
</script>
