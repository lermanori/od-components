<template>
  <div class="flex">
    <div class="w-auto h-auto">
      <template v-for="(arg) in [item.images.length > 0 ? item.images[0]:[]]">
        <img
          class="object-cover object-center h-64 w-64 overflow-hidden"
          v-if="arg.b"
          :src="arg.b.url"
          :key="arg.b.url"
        />
      </template>
    </div>

    <div class="w-full h-auto align-center flex items-center ml-4">
    <div>
      <div>
        <u>id:</u>
        {{item.id}}
      </div>
      <div >
        <u>title:</u>
        {{item.title}}
      </div>
      <div >
        <u>year acquired:</u>
        {{item.year_acquired}}
      </div>
      <div >
        <u>decade:</u>
        {{item.decade}}
      </div>
      <div v-if="item.participants">
        <u>participants:</u>
        {{item.participants.map(x=>x.person_name).join(',')}}
      </div>
    </div>

    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "col"]
};
</script>
