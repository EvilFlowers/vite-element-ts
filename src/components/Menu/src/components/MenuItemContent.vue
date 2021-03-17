<template>
  <span>
    <font-awesome-icon v-if="item.icon" :icon="item.icon"/>
    {{ item.name }}
  </span>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuItemContent',
  props: {
    item: Object
  }
})
</script>

<style scoped>

</style>
