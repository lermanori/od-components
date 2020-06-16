<template>
    <router-view />
</template>

<script>
import Vue from "vue";
import gridItem from "./components/gridItem.vue";
import gridView from "./components/gridView.vue";
import listItem from "./components/listItem.vue";
import listView from "./components/listView.vue";
const components = {
  odGridItem: gridItem,
  odGridView: gridView,
  odListItem: listItem,
  odListView: listView
};
export default {
  name: "App",
  components: {
    ...components
  },
  data: () => ({
    //
  })
};
</script>
