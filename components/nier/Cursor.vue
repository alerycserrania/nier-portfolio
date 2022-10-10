<template>
  <div class="nier-cursor">
    <img
      class="cursor-dark"
      src="~/assets/img/cursor1.png"
      alt="nier-cursor-dark"
    />
    <img
      class="cursor-light"
      src="~/assets/img/cursor2.png"
      alt="nier-cursor-light"
    />
  </div>
</template>

<style lang="scss">
.nier-cursor {
  height: 1.4em;
  width: 0;
  position: relative;
  left: -50px;
  display: inline-block;

  & > img {
    height: 1.4em;
    position: relative;
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: 100;
    pointer-events: none;

    &.cursor-light {
      top: -1.7em;
    }
  }
}

.nier-button.active {
  .nier-cursor {
    & > img.cursor-light {
      opacity: 1;
    }
    & > img.cursor-dark {
      opacity: 0;
    }
  }
}

.nier-button:hover,
.nier-button:active {
  .nier-cursor {
    & > img.cursor-light {
      opacity: 0;
    }

    & > img.cursor-dark {
      opacity: 1;
    }
  }
}
</style>