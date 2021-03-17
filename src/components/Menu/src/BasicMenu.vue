<template>
  <el-menu>
    <template v-for="item in items" :key="item.path">
      <basic-sub-menu-item :item="item" />
    </template>
  </el-menu>
</template>

<script>
import { defineComponent } from 'vue'
import BasicSubMenuItem from './components/BasicSubMenuItem.vue'

export default defineComponent({
  name: 'BasicMenu',
  components: { BasicSubMenuItem },
  props: {
    items: Array
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>

</style>
