import Vue from 'vue';
import gridItem from './gridItem.vue';
import gridView from './gridView.vue';
import listItem from './listItem.vue';
import listView from './listView.vue';
const components = {
  odGridItem: gridItem,
  odGridView: gridView,
  odListItem: listItem,
  odListView: listView,
}

Object.keys(components).forEach(name => {
  Vue.component(name, components[name]);
});

export default components;
