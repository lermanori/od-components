<template>
  <div>
    <h4>smithsonian object search:</h4>
    <div style="text-align:center">
      <v-btn
        class="my-btn"
        inset
        @click="manual=!manual"
      >{{manual==true?'make responsive': 'manual select' }}</v-btn>
    </div>
    <v-radio-group row v-model="radioGroup" class="my-radio-group" v-if="manual">
      <v-radio v-for="n in ['grid','list']" :key="n" :label="n" :value="n"></v-radio>
    </v-radio-group>
    <div>
      <search-content
        baseUrl="https://api.collection.cooperhewitt.org/rest/"
        :adapter="adapter_fn"
      >
        <template v-slot:default="slotProps">
          <div>
            <v-card>
              <component :is="tabComponent" v-bind="{items:slotProps.response.objects}" />
            </v-card>
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
  methods:{
    adapter_fn(query){
      return `?method=${this.method}
&access_token=${this.token}
&query=${query}
&page=1`
    }
  },

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