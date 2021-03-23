<template>
  <el-aside class="lm-aside" :class="{'lm-aside-collapse': collapse}">
    <AppLogo />
    <el-scrollbar wrap-class="lm-scrollbar-wrapper" class="lm-menu-scrollbar">
      <basic-menu :items="menus" />
    </el-scrollbar>
  </el-aside>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { AppLogo } from '@/components/Application';
import { BasicMenu } from '@/components/Menu';
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Sider',
  components: {AppLogo, BasicMenu},
  setup() {
    const store = useStore();
    const menus = computed(() => store.getters['menus/menus']);
    return {
      menus,
      collapse: computed(() => store.getters['app/collapse'])
    };
  }
})
</script>

<style lang="scss" scoped>
.lm-aside {
  width: $base-left-menu-width !important;

  .lm-menu-scrollbar {
    height: calc(100% - 56px);
    position: fixed;
    top: 56px;
    width: $base-left-menu-width;
  }

  &-collapse {
    width: $base-left-menu-width-min !important;

    .lm-menu-scrollbar {
      height: calc(100% - 56px);
      position: fixed;
      top: 56px;
      width: $base-left-menu-width-min !important;

      .el-scrollbar__wrap {
        width: $base-left-menu-width-min !important;
      }
    }

    .el-scrollbar .el-scrollbar__wrap {
      width: $base-left-menu-width-min;
    }
  }

}

.lm-scrollbar-wrapper {
  width: 65px !important;
}
</style>
