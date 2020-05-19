<template>
  <div>
    <div class="flex justify-center">
      <form action>
        <label for="search" class="text-xl font-bold mr-4">Search:</label>
        <input
          type="text"
          class="border-solid border-black border-2"
          name="search"
          v-model="searchValue"
          @input="debouncedUpdate"
        />
      </form>
    </div>
    <div v-if="Response">
      <slot :response="response"></slot>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {

  props: ["baseUrl", "adapter"],
  data() {
    return {
      response: null,
      searchValue: "",
      method: "",
      token: "393173429dc66a88154090b394a2480f",
      radioGroup: 1,
      debouncedUpdate: null
    };
  },
  computed: {
    Response() {
      return this.response;
    },
    SearchValue() {
      return this.searchValue;
    },
    Token() {
      return this.token;
    },
    Method() {
      return this.method;
    },
    Endpoint() {
      const adapter = this.adapter(this.SearchValue);
      return this.baseUrl + adapter;
    }
  },
  methods: {
    async updateData() {
      try {
        if (this.searchValue != "") {
          const response = await axios.get(this.Endpoint);
          this.response = response.data;
        }
      } catch (err) {
        console.log(err);
      }
    },
    debounce(fn, delay) {
      let timeoutID = null;
      return function() {
        clearTimeout(timeoutID);
        const args = arguments;
        const that = this;
        timeoutID = setTimeout(function() {
          fn.apply(that, args);
        }, delay);
      };
    }
  },
  mounted() {
    this.debouncedUpdate = this.debounce(this.updateData, 500);
  },

  async created() {}
};
</script>

<style lang="scss" scoped>
.padded {
  padding: 0 25px;
}
</style>