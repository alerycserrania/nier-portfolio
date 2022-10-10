<template>
  <hr
    class="divider"
    :class="{
      'divider-solid': type === 'solid',
      'divider-dashed': type === 'dashed',
      'divider-dotted': type === 'dotted',
      'divider-dark': color === 'dark',
      'divider-medium': color === 'medium',
      'divider-light': color === 'light',
    }"
    :style="{ height: size }"
  />
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ type?: string; size?: string; color?: string }>(), {
  size: "1px",
  color: "dark",
  type: "solid",
});
</script>

<style lang="scss">
@import "~/assets/css/colors.scss";

hr.divider {
  width: 100%;

  @each $name, $color in $colors {
    &.divider-dashed.divider-#{$name} {
      background: repeating-linear-gradient(
        90deg,
        transparent 0,
        transparent 35px,
        $color 35px,
        $color 40px
      );
    }

    &.divider-solid.divider-#{$name} {
      background-color: $color;
    }
  }

  &.divider-dotted {
    background-image: url(~/assets/img/dots.png);
    background-size: auto 15px;
    background-repeat: repeat-x;
    width: 100%;
    margin: 0 auto;
  }
}
</style>