<template>
  <li class="nier-nav-item" :class="{ 'nier-nav-item-active': active }">
    <nier-button
      withBar
      :color="active ? 'dark' : 'medium'"
      :class="{ active: active }"
      class="nier-button-blink"
      :is="NuxtLink"
      :to="to"
    >
      <slot />
    </nier-button>
  </li>
</template>

<script setup lang="ts">
defineProps<{ active: boolean; to: string }>();
const NuxtLink = defineNuxtLink({
  componentName: "MyNuxtLink"
});
</script>

<style lang="scss">
@import "~/assets/css/colors.scss";

.nier-nav-item {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  flex-flow: column;
  margin: 0.6em 0.6em -0.2em 0.6em;
  .nier-button {
    .nier-button-content {
      box-shadow: unset;
      transition: all 0.3s cubic-bezier(0, 0.78, 0.38, 1.04);
      padding-bottom: 0;
      margin-bottom: 0.8em;
    }

    .nier-button-bar-bottom {
      top: -0.8em;
    }
  }
}

.nier-nav-item-active {
  .nier-button {
    .nier-button-content {
      margin-bottom: 0;
      padding-bottom: 0.8em;
    }

    .nier-button-bar {
      visibility: hidden;
    }
  }
}
</style>