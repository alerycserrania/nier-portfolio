<template>
  <div class="nier-banner nier-box-shadow bg-light">
    <nier-bar color="bg-dark" />
    <div class="nier-banner-block">
      <div class="nier-banner-content">
        <slot />
      </div>
      <div class="nier-banner-block">
        <div class="bg-dark" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "~/assets/css/colors.scss";

.nier-banner {
  display: flex;
  flex-flow: row;

  & > .nier-banner-block {
    display: flex;
    flex-flow: row;
    width: 100%;

    & > .nier-banner-content {
      padding: 0.8em 0 0.8em 1em;
      width: 100%;
    }

    .nier-banner-block {
      height: 100%;
      display: flex;
      align-items: flex-end;

      & > div {
        width: 0.7em;
        height: 0.7em;
        margin: 5px;
      }
    }
  }
}
</style>