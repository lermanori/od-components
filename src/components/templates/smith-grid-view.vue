
<template>
  <grid-view>
    <grid-item v-for="(item,index) in items" :key="index" :item="item">
      <smithsonian-grid-item :item="item" />
    </grid-item>
  </grid-view>
</template>

<script>
import gridView from "../gridView";
import gridItem from "../gridItem";
import smithsonianGridItem from "../smithsonain-grid-item";
export default {
  props: ["items"],
  components: {
    gridView,
    gridItem,
    smithsonianGridItem
  }
};
</script>

<style lang="scss" scoped>
</style>