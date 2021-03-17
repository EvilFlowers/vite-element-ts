<template>
  <span>
    <font-awesome-icon v-if="item.meta.icon" :icon="item.meta.icon"/>
    {{ item.meta.title }}
  </span>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuItemContent',
  props: {
    item: Object
  },
  setup(props) {
    console.log(props)
    return {}
  }
})
</script>

<style scoped>

</style>
