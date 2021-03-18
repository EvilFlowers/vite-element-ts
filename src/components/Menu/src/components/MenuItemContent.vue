<template>
  <span style="padding-right: 5px; font-size: 14px; display: inline-flex;">
      <font-awesome-icon v-if="item.icon" :icon="item.icon"/>
  </span>
  <span style="font-size: 14px">{{ item.name }}</span>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuItemContent',
  props: {
    item: Object
  }
})
</script>

<style scoped>

</style>
