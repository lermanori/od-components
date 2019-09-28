<template>
  <v-col :cols="12" :sm="6" :md="4" :lg="3" :xl="2">
    <slot />
  </v-col>
</template>

<script>
import { VCol } from "vuetify/lib";
export default {
  components: {
    VCol
  }
};
</script>

