<template>
  <button
    class="nier-card-button nier-button nier-button-fade nier-button-flat"
  >
    <nier-card class="nier-button-content">
      <slot />
    </nier-card>
  </button>
</template>

<style lang="scss">
@import "~/assets/css/colors.scss";

.nier-card-button .nier-button-content {
  transition: all 0.1s ease;
  flex-direction: column;
  &:hover {
    box-shadow: 5px 5px rgba($dark, 0.5);
    transform: translate(-5px, -5px);
  }

  .nier-card-img img {
    height: 100%;
    filter: grayscale(25%);
  }

  &:hover .nier-card-img img {
    filter: grayscale(0%);
  }
}
</style>