<template>
  <div>
    <bulma-hero class="is-primary" title="Vue.js pra quem nunca viu!" subtitle="Um exemplo com Bulma.io">
    </bulma-hero>
    <bulma-section class="section">
      <router-view></router-view>
    </bulma-section>
  </div>
</template>

<script>
import BulmaHero from '@/components/Hero';
import BulmaSection from '@/components/Section';

export default {
  name: 'main',
  components: {
    BulmaHero,
    BulmaSection,
  },
};
</script>
