<template>
  <v-card style="padding:0px">
    <template v-for="(arg,idx) in [item.images.length > 0 ? item.images[0]:[]]">
      <v-img
        class="my-img"
        max-height="400"
        max-width="400"
        aspect-ratio="1"
        v-if="arg.b"
        :src="arg.b.url"
        :key="idx"
      >
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col class="my-col">
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
          </v-col>
        </v-row>
      </v-img>
    </template>
  </v-card>
</template>
<script>
export default {
  props: ["item"]
};
</script>
<style lang="scss" scoped>
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
    opacity: 0;
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