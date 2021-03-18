<template>
  <el-container>
    <!--    <el-header style="width: calc(100% - 220px);">
      Header
    </el-header>-->
    <el-container>
      <el-aside width="220px">
        <el-scrollbar style="height: 100%; position: fixed; top: 0; width: 220px">
          <AppLogo />
          <basic-menu :items="menus" />
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header style="display: flex; justify-content: space-between; align-items: center">
          <div style="align-items: center">
            <span style="font-size: 18px">
              <font-awesome-icon icon="outdent" title="收起" />
            </span>
          </div>
          <div>header-end</div>
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

<style scoped></style>
