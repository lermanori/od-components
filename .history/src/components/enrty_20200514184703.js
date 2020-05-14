import Vue from 'vue';
import searchContent from './searchContent.vue'
import gridItem from './gridItem.vue';
import gridView from './gridView.vue';
import listItem from './listItem.vue';
import listView from './listView.vue';
const components = {
  odGridItem: gridItem,
  odGridView: gridView,
  odListItem: listItem,
  odListView: listView,
  odSearch:searchContent
}
export function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Object.keys(components).forEach(name => {
    Vue.component(name, components[name]);
  });
}

// Create module definition for Vue.use()
const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component

export default components;
