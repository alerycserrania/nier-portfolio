<template>
  <div v-if="show" class="nier-modal">
    <div ref="modal" class="nier-modal-flex">
      <div class="nier-modal-content" :style="{ height }">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { show, toggle } = defineProps<{
  show: boolean;
  toggle: () => void;
  height: string;
}>();

const modal = ref(null);

const onClick = (event) => {
  if (event.target === modal.value) {
    toggle();
  }
};

onMounted(() => {
  window.addEventListener("click", onClick);
});

onUnmounted(() => {
  window.removeEventListener("click", onClick);
});

</script>



<style lang="scss">
@import "~/assets/css/colors.scss";

.nier-modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  animation: modal-enter 0.3s ease;

  .nier-modal-flex {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;

    .nier-modal-content {
      display: flex;
      flex-direction: column;
      background-color: $light;
      width: 75%;
      max-height: 95%;
      animation: modal-content-enter 0.3s ease;

      .nier-modal-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: $dark;
        color: $light;
        padding: 0.3em 0.5em;

        * {
          color: $light;
        }
      }

      .nier-modal-body {
        flex-grow: 1;
        overflow: auto;
      }

      .nier-modal-footer {
        flex-shrink: 1;
      }
    }
  }
}

@keyframes modal-enter {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes modal-content-enter {
  0% {
    transform: scale(0.95, 0.95);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>