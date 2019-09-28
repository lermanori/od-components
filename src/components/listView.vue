<template>
  <v-container>
    <v-list three-line>
      <slot />
    </v-list>
  </v-container>
</template>
<script>
import { VList } from "vuetify/lib";
export default {
  components: {
    VList
  }
};
</script>