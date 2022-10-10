<template>
  <ul class="nier-list">
    <slot />
  </ul>
</template>


<script setup lang="ts">
</script>

<style lang="scss">
@import "~/assets/css/colors.scss";

.nier-list {
  display: flex;
  flex-flow: column;
  align-content: flex-start;

  .nier-list-item {
    margin: 0.3em 0;
  }

  & > * {
    margin: 0.25em 0;
  }

  & > *:first-child {
    margin: 0;
    margin-bottom: 0.25em;
  }

  & > *:last-child {
    margin: 0;
    margin-top: 0.25em;
  }
}
</style>