<template>
  <div class="filter-color"></div>
  <div class="filter-image"></div>
</template>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";

.filter-color::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: radial-gradient(
    circle at center,
    transparent 70%,
    rgba($dark, 0.7)
  );
  z-index: 2;
  pointer-events: none;
  background-attachment: fixed;
}

.filter-image::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url(~/assets/img/bg.png);
  background-size: 5px;
  opacity: 0.08;
  z-index: 2;
  pointer-events: none;
  background-attachment: fixed;
}
</style>