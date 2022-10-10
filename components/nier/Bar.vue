<template>
  <div class="nier-bar">
    <div class="bar-1" :class="color"></div>
    <div class="bar-2" :class="color"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ color?: string }>();
</script>


<style lang="scss">
.nier-bar {
  display: flex;
  flex-flow: row;
  .bar-1 {
    width: 0.5em;
  }
  .bar-2 {
    width: 0.12em;
    margin-left: 0.25em;
  }
}
</style>