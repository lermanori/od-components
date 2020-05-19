import gridItem from "./components/gridItem.vue";
import gridView from "./components/gridView.vue";
import listItem from "./components/listItem.vue";
import listView from "./components/listView.vue";
import searchContent from "./components/searchContent.vue"



const components = {
  odGridItem: gridItem,
  odGridView: gridView,
  odListItem: listItem,
  odListView: listView,
  odSearchContent: searchContent,
};

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.keys(components).forEach((name) => {
    Vue.component(name, components[name]);
  })
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
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