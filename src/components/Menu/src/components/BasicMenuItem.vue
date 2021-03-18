<template>
  <el-menu-item :index="item.id" @click="handleClick(item)">
    <menu-item-content :item="item" />
  </el-menu-item>
</template>

<script>
import { defineComponent, unref } from 'vue'
import MenuItemContent from './MenuItemContent.vue'
import { useRouter} from 'vue-router'

export default defineComponent({
  name: 'BasicMenuItem',
  components: { MenuItemContent },
  props: {
    item: Object
  },
  setup(props) {
    const router = useRouter()
    const handleClick = (item) => {
      router.push(item.url)
    }
    return {
      handleClick
    }
  }
})
</script>

<style scoped>

</style>
