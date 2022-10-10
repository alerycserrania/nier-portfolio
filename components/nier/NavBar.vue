<template>
  <div>
    <ul class="nier-nav-bar">
      <nier-bar color="bg-medium" :style="{ height: '1.8em', margin: 'auto', marginRight: '1em' }" />
      <slot />
    </ul>
    <nier-divider type="solid" color="dark" size="1.5px" />
    <nier-divider type="dotted" size="15px" />
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.nier-nav-bar {
  display: flex;
  flex-flow: row no-wrap;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 3.15em;
}
</style>