<template>
  <v-row>
    <template v-for="(arg) in [item.images.length > 0 ? item.images[0]:[]]">
      <v-img
        class="my-img"
        max-height="200"
        max-width="200"
        aspect-ratio="1"
        v-if="arg.b"
        :src="arg.b.url"
        :key="arg.b.url"
      ></v-img>
    </template>

    <v-list-item-content class="item-content">
      <v-list-item-title v-html="item.title"></v-list-item-title>
      <v-list-item-subtitle>
        <div class="subheading">
          <u>id:</u>
          {{item.id}}
        </div>
        <div class="subheading">
          <u>title:</u>
          {{item.title}}
        </div>
        <div class="subheading">
          <u>year acquired:</u>
          {{item.year_acquired}}
        </div>
        <div class="subheading">
          <u>decade:</u>
          {{item.decade}}
        </div>
        <div class="subheading" v-if="item.participants">
          <u>participants:</u>
          {{item.participants.map(x=>x.person_name).join(',')}}
        </div>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-row>
</template>
<script>
export default {
  props: ["item", "col"]
};
</script>
<style lang="scss" scoped>
.list-item:hover {
  animation-name: opac;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}
.item-content {
  padding-left: 15px;
}
.my-col {
  opacity: 0;
  .subheading {
    font-family: "Courier New", Courier, monospace;
    padding-top: 15px;
    padding-left: 15px;
    color: white;
    -webkit-text-stroke: 1px solid;
    -webkit-text-stroke-color: black;
  }
}
.my-col:hover {
  animation-name: opac;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}
.my-img:hover {
  animation-name: scal;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}
@keyframes opac {
  from {
    opacity: 1;
  }
  to {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
@keyframes scal {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
</style>