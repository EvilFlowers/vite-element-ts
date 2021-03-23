<template>
  <el-menu
    unique-opened
    :collapse="collapse"
    class="lm-menu"
  >
    <template v-for="item in items" :key="item.path">
      <basic-sub-menu-item :item="item" />
    </template>
  </el-menu>
</template>

<script>
import { computed, defineComponent } from 'vue'
import {useStore} from 'vuex'
import BasicSubMenuItem from './components/BasicSubMenuItem.vue'

export default defineComponent({
  name: 'BasicMenu',
  components: { BasicSubMenuItem },
  props: {
    items: Array
  },
  setup() {
    const store = useStore()
    return {
      collapse: computed(() => store.getters['app/collapse'])
    }
  }
})
</script>

<style scoped>
.lm-menu {
  border-right: none;
}
</style>
