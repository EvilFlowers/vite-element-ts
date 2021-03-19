<template>
  <font-awesome-icon v-if="item.icon" :icon="item.icon" :title="item.name" style="font-size: 16px; display: inline-flex;" />
  <span style="font-size: 14px; padding-left: 8px">{{ item.name }}</span>
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
