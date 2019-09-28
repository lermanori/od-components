<template>
  <v-container>
    <v-row>
      <slot />
    </v-row>
  </v-container>
</template>
<script>
import { VRow, VContainer } from "vuetify/lib";
export default {
  components: {
    VRow,
    VContainer
  }
};
</script>