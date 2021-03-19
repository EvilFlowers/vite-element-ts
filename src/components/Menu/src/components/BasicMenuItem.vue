<template>
  <el-menu-item :index="item.id" @click="handleClick(item)">
    <menu-item-content :item="item" />
  </el-menu-item>
</template>

<script>
import { defineComponent } from 'vue'
import MenuItemContent from './MenuItemContent.vue'
import { useRouter} from 'vue-router'
import { isExternal } from '@/utils/validate'

export default defineComponent({
  name: 'BasicMenuItem',
  components: { MenuItemContent },
  props: {
    item: Object
  },
  setup() {
    const router = useRouter()
    const handleClick = ({url}) => {
      if (isExternal(url)) {
        window.open(url, '_blank')
      } else {
        router.push(url)
      }
    }
    return {
      handleClick
    }
  }
})
</script>

<style lang="scss" scoped>

.lm-menu-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
