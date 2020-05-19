<template>
  <div class="relative">
    <template v-for="(arg,idx) in [item.images.length > 0 ? item.images[0]:[]]">
      <img
        class="object-cover object-center h-64 w-full"
        v-if="arg.b"
        :src="arg.b.url"
        :key="arg.b.url"
      />
      <div class="absolute top-0 overlay text-white w-full" :key="'about'+idx">
        <div >
              <u>id:</u>
              {{item.id}}
            </div>
            <div>
              <u>title:</u>
              {{item.title}}
            </div>
            <div >
              <u>year acquired:</u>
              {{item.year_acquired}}
            </div>
            <div>
              <u>decade:</u>
              {{item.decade}}
            </div>
            <div  v-if="item.participants">
              <u>participants:</u>
              {{item.participants.map(x=>x.person_name).join(',')}}
            </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: ["item"]
};
</script>
<style lang="scss" scoped>

.overlay{
  opacity: 0;
  &:hover{
      animation-name: opac;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  
  }
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

</style>