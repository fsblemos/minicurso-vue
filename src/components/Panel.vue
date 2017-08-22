<template>
  <div class="panel">
    <p class="panel-heading">
      {{ title }}
      <span class="icon" @click="toggle()">
        <i :class="[opened ? 'fa fa-angle-down' : 'fa fa-angle-up' ]"></i>
      </span>
    </p>
    <transition name="collapse">
      <div class="panel-block" v-show="opened">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'panel',
  props: {
    title: String,
  },
  data() {
    return {
      opened: true,
    };
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/theme';

.panel {
  background-color: $white;
}

.panel-block {
  display: block;
  overflow: hidden;
}

.panel-heading {
  background-color: $primary;
  border: $primary;
  color: $white;
  display: flex;
  font-weight: bold;
  justify-content: space-between;

  .icon {
    cursor: pointer;
  }
}

.collapse-enter,
.collapse-leave-to {
  max-height: 0;
}

.collapse-enter-to,
.collapse-leave {
  max-height: 1000px;
}

.collapse-enter-active,
.collapse-leave-active {
  transition: max-height .5s ease-in;
}
</style>
