<template>
  <component class="nier-button" :is="is">
    <div v-if="withBar" class="nier-button-bar nier-button-bar-top" />
    <div class="nier-button-content">
      <nier-cursor v-if="withCursor" />
      <div class="nier-button-inner">
        <div v-if="withBlock" class="nier-button-block bg-dark" />
        <slot />
      </div>
    </div>
    <div v-if="withBar" class="nier-button-bar nier-button-bar-bottom" />
  </component>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    withBar?: boolean;
    withCursor?: boolean;
    withBlock?: boolean;
    color?: string;
    is?: any;
  }>(),
  {
    withBar: false,
    withCursor: true,
    withBlock: true,
    noPadding: false,
    color: "medium",
    is: "button",
  }
);
</script>

<style lang="scss">
@import "~/assets/css/colors.scss";

.nier-button-block {
  margin-right: 0.5em;
  width: 1em;
  height: 1em;
}

.nier-button {
  display: flex;
  flex-flow: column;
  align-items: stretch;

  @each $name, $color in $colors {
    &.nier-button-#{$name} {
      .nier-button-content {
        background: linear-gradient(to left, $color 50%, $dark 50%) right;
        background-size: 200% 100%;
      }
    }

    &.nier-button-#{$name}.nier-button-fade {
      .nier-button-content {
        background: $color;
      }
    }
  }

  &.nier-button-fade {
    .nier-button-content {
      background: $medium;
    }
  }

  &.nier-button-flat {
    .nier-button-content {
      box-shadow: unset;
    }
  }

  .nier-button-bar {
    height: 2px;
    width: 100%;
    background-color: $dark;
    opacity: 0;
    transition: transform 0.2s ease, opacity 0.2s ease;
    position: relative;
  }

  .nier-button-content {
    display: flex;
    flex-flow: row;
    flex-grow: 1;
    align-items: center;
    background: linear-gradient(to left, $medium 50%, $dark 50%) right;
    background-size: 200% 100%;
    transition: background 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;
    box-shadow: 2px 2px 0 rgba($dark, 0.35);

    .nier-button-inner {
      display: flex;
      flex-flow: row;
      flex-grow: 1;
      align-items: center;
      padding: 0.2em 0.5em;
    }
  }

  &:hover:not(:disabled),
  &:active:not(:disabled) {
    .nier-button-bar {
      opacity: 1;

      &.nier-button-bar-top {
        transform: translate(0, -3px);
      }

      &.nier-button-bar-bottom {
        transform: translate(0, 3px);
      }
    }
  }

  &:hover:not(:disabled),
  &:active:not(:disabled),
  &.active {
    &.nier-button-blink {
      animation: blink 1.5s ease infinite;
    }

    &.nier-button-fade {
      .nier-button-content {
        background: $dark;
      }
    }

    .nier-button-content {
      background-position: left;
      color: $light;

      .nier-button-block {
        background-color: $light;
      }

      * {
        color: $light;
      }
    }
  }

  &:active:not(:disabled) {
    .nier-button-content {
      box-shadow: unset;
      transform: translate(2px, 2px);
    }

    .nier-button-bar {
      transition: unset;
      opacity: 0;

      &.nier-button-bar {
        transform: translate(0, 0);
      }
    }
  }

  &:disabled {
    &.nier-button-flat {
      .nier-button-content {
        outline: unset;
      }
    }

    .nier-button-content {
      outline: 1px solid $dark;
      background: none;
      opacity: 0.6;
      box-shadow: unset;
      cursor: unset;

      .nier-cursor {
        display: none;
      }

      .nier-button-block {
        background: none;
        outline: 1px solid $dark;
      }
    }
  }
}
</style>