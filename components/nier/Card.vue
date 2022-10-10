<template>
  <div class="nier-card">
    <slot />
  </div>
</template>

<style lang="scss">
@import "~/assets/css/colors.scss";

.nier-card {
  display: flex;
  flex-flow: column;
  background-color: $light;

  .nier-card-title {
    background-color: $dark;
    color: $light;
    padding: 0.3em 0.5em;
    flex: 0 1 auto;
  }

  .nier-card-body {
    flex: 1 1 auto;
  }

  .nier-card-img {
    background-color: $light;
    display: flex;
    justify-content: center;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  
}
</style>