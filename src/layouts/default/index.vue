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
        <LayoutHeader />
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
  import LayoutHeader from '@/layouts/default/header/index.vue'

  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      LayoutHeader,
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
