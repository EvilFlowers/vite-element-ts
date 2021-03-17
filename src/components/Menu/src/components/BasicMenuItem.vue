<template>
  <el-menu-item>
    <menu-item-content :item="item" />
  </el-menu-item>
</template>

<script>
import { defineComponent } from 'vue'
import MenuItemContent from './MenuItemContent.vue'

export default defineComponent({
  name: 'BasicMenuItem',
  components: { MenuItemContent },
  props: {
    item: Object
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>

</style>
