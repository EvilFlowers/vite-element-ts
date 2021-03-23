<template>
  <el-container>
    <!--    <el-header style="width: calc(100% - 220px);">
      Header
    </el-header>-->
    <el-container>
      <Sider/>
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

  import { useStore } from 'vuex';
  import LayoutHeader from '@/layouts/default/header/index.vue'
  import Sider from '@/layouts/default/sider/index.vue'

  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      Sider,
      LayoutHeader,
    },
    setup() {
      const store = useStore();
      const menus = computed(() => store.getters['menus/menus']);
      return {
        menus,
        collapse: computed(() => store.getters['app/collapse'])
      };
    },
  });
</script>

<style lang="scss" scoped>
</style>
