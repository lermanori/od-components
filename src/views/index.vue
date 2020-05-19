<template>
  <div>
    <h4 class="font-bold text-2xl">smithsonian object search:</h4>
    <div class="flex justify-center">
      <button
        class="inline-block font-bold border-solid border-2 border-black px-4 mb-4"
        @click="manual=!manual"
      >{{manual==true?'make responsive': 'manual select' }}</button>
    </div>
    <form v-if="manual" action>
      <div class="flex justify-around mb-4">
        <div>
          <input type="radio" id="grid" name="radioGroup" value="grid" @click="test('grid')" />
          <label for="grid" class="text-xl font-bold ml-4">Grid</label>
        </div>
        <div>
          <input type="radio" id="list" name="radioGroup" value="list" @click="test('list')" />
          <label for="list" class="text-xl font-bold ml-4">List</label>
        </div>
      </div>
    </form>
    <div>
      <search-content baseUrl="https://api.collection.cooperhewitt.org/rest/" :adapter="adapter_fn">
        <template v-slot:default="slotProps">
          <div class="border-solid border-black border-2">
              <component :is="tabComponent" v-bind="{items:slotProps.response.objects}" />
          </div>
        </template>
      </search-content>
    </div>
  </div>
</template>

<script>
import searchContent from "../components/searchContent";
import smithGridView from "../components/templates/smith-grid-view";
import smithListView from "../components/templates/smith-list-view";
export default {
  components: {
    searchContent,
    smithGridView,
    smithListView
  },
  data() {
    return {
      token: "393173429dc66a88154090b394a2480f",
      method: "cooperhewitt.search.objects",
      radioGroup: "grid",
      manual: false
    };
  },
  computed: {
    tabComponent() {
      const radioGroup =
        this.radioGroup == "grid" ? "smith-grid-view" : "smith-list-view";
      const responsive =
        this.$vuetify.breakpoint.xsOnly == false
          ? "smith-grid-view"
          : "smith-list-view";
      return this.manual ? radioGroup : responsive;
    }
  },
  methods: {
    adapter_fn(query) {
      return `?method=${this.method}
&access_token=${this.token}
&query=${query}
&page=1`;
    },
    test() {
      this.radioGroup = arguments[0];
      console.log("changed");
    }
  }
};
</script>

<style lang="scss" scoped>
$padding: 15px;
.my-btn {
  margin: 10px 10px;
  margin-bottom: 25px;
}

div {
  h4 {
    font-size: 5vh;
    margin: 0 auto;
    text-align: center;
    padding: $padding;
    text-transform: uppercase;
    text-decoration: underline;
  }
  .my-radio-group {
    justify-content: center;
    margin: 0 0;
  }
}
</style>