<template>
  <div class="nier-modal-header">
    <div class="nier-modal-header-content">
      <slot />
    </div>
    <nier-button
      class="nier-modal-header-button nier-button-medium nier-button-fade"
      color="dark"
      :withCursor="false"
      :withBar="false"
      :withBlock="false"
      @click="toggle"
    >
      <div
        class="nier-button-block bg-dark"
        :style="{ width: '0.5em', height: '0.5em', margin: '0.25em 0' }"
      />
    </nier-button>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ toggle: () => void }>();
</script>

<style lang="scss">
@import "~/assets/css/colors.scss";
.nier-button.nier-modal-header-button:hover {
  outline: 2px solid $important;
  .nier-button-content .nier-button-block {
    background-color: $important;
  }
}
</style>
