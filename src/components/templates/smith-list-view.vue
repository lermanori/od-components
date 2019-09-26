
<template>
  <list-view>
    <list-item v-for="(item,index) in items" :key="index" style="padding: 15px 25px">
      <smithsonian-list-item :item="item" />
    </list-item>
  </list-view>
  <!-- 
                    <list-view v-if="radioGroup=='list'">
                <list-item v-for="(item,index) in slotProps.response.objects" :key="index">
                  <smithsonian-list-item :item="item" />
                </list-item>
              </list-view>
  -->
</template>

<script>
import listView from "../listView";
import listItem from "../listItem";
import smithsonianListItem from "../smithsonain-list-item";
export default {
  props: ["items"],
  components: {
    listView,
    listItem,
    smithsonianListItem
  }
};
</script>

<style lang="scss" scoped>
</style>