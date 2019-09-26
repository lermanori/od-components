<template>
  <v-list-item class="list-item">
    <slot />
  </v-list-item>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.list-item:hover {
  animation-name: opac;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}

@keyframes opac {
  from {
    opacity: 1;
  }
  to {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
@keyframes scal {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
</style>