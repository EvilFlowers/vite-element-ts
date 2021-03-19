<template>
  <el-container>
    <!--    <el-header style="width: calc(100% - 220px);">
      Header
    </el-header>-->
    <el-container>
      <el-aside class="lm-aside">
        <AppLogo />
        <el-scrollbar class="lm-menu-scrollbar">
          <basic-menu :items="menus" />
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header style="display: flex; justify-content: space-between; align-items: center">
          <div style="display: flex; align-items: center; justify-content: center;">
            <span style="font-size: 18px">
              <font-awesome-icon icon="outdent" title="收起" />
            </span>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item>系统管理</el-breadcrumb-item>
              <el-breadcrumb-item>配置管理</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div style="display: flex; justify-content: center; align-items: center">
            <font-awesome-icon icon="expand-arrows-alt" title="全屏" style="margin: 0 5px; font-size: 18px" />
            <el-dropdown>
              <div style="display: flex; align-items: center">
                <el-avatar :size="50" src=""/>
                管理员
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>修改密码</el-dropdown-item>
                  <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <font-awesome-icon icon="cog" title="页面设置" style="margin: 0 5px; font-size: 18px" />
          </div>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer> Footer </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  import { computed, defineComponent, unref } from 'vue';
  import { AppLogo } from '@/components/Application';
  import { BasicMenu } from '@/components/Menu';
  import { useStore } from 'vuex';

  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      BasicMenu,
      AppLogo,
    },
    setup() {
      const store = useStore();
      const menus = computed(() => store.getters['menus/menus']);
      return {
        menus
      };
    },
  });
</script>

<style lang="scss" scoped>
.lm-aside {
  width: $base-left-menu-width-min !important;
}
.lm-menu-scrollbar {
  height: 100%;
  position: fixed;
  top: 56px;
  width: $base-left-menu-width-min;
}
</style>
