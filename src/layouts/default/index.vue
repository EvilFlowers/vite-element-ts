<template>
  <el-container>
<!--    <el-header style="width: calc(100% - 220px);">
      Header
    </el-header>-->
    <el-container>
      <el-aside width="220px">
        <el-scrollbar style="height: 100%; position: fixed; top: 0; width: 220px;">
          <el-menu>
            <el-menu-item>
              menu1
            </el-menu-item>
            <el-menu-item>
              menu1
            </el-menu-item>
            <el-menu-item>
              menu1
            </el-menu-item>
            <el-menu-item>
              menu1
            </el-menu-item>
            <el-menu-item>
              menu1
            </el-menu-item>
            <el-menu-item>
              menu1
            </el-menu-item>
            <el-menu-item>
              menu1
            </el-menu-item>
            <el-menu-item>
              menu1
            </el-menu-item>
            <el-menu-item>
              menu1
            </el-menu-item>
            <el-menu-item>
              menu1
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header style="display: flex; justify-content: space-between; align-items: center;">
          <div style="align-items: center;">
            <span>
              <font-awesome-icon icon="outdent" title="收起" />
            </span>
          </div>
          <div>header-end</div>
        </el-header>
        <el-main>
          Main
        </el-main>
        <el-footer>
          Footer
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultLayout',
  setup() {
    return {}
  }
})
</script>

<style scoped>

</style>
