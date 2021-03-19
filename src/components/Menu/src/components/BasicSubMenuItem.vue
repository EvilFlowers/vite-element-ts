<template>
  <basic-menu-item v-if="!menuHasChildren(item)" v-bind="$props" />
  <el-submenu v-if="menuHasChildren(item)" :index="item.id">
    <template #title>
      <menu-item-content :item="item" />
    </template>
    <template v-for="childrenItem in item.children || []" :key="childrenItem.id">
      <basic-sub-menu-item :item="childrenItem" />
    </template>
  </el-submenu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BasicMenuItem from './BasicMenuItem.vue'
import MenuItemContent from './MenuItemContent.vue'
import {Menu} from "@/utils/menus";

export default defineComponent({
  name: 'BasicSubMenuItem',
  components: { MenuItemContent, BasicMenuItem },
  props: {
    item: Object
  },
  setup() {
    const menuHasChildren = (menuTreeItem: Menu) => {
      return Reflect.has(menuTreeItem, "children") &&
        menuTreeItem.children &&
        menuTreeItem.children.length > 0
    }
    return {
      menuHasChildren
    }
  }
})
</script>

<style scoped>

</style>
