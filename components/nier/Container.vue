<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts">
</script>

<style lang="scss">
@import "~/assets/css/colors.scss";

html,
body,
#__nuxt,
#__layout {
  height: 100% !important;
  width: 100% !important;
}

div.container {
  position: absolute;
  background-color: $bg;
  background-image: url(~/assets/img/bg2.png);
  background-size: cover;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

</style>