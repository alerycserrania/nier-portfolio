<template>
  <div class="nier-range">
    <input
      type="range"
      min="0"
      :max="nbBars"
      :value="value"
      @change="(event) => setVolume(event.target.valueAsNumber)"
    />
    <div class="nier-range-bars" ref="bars">
      <component
        v-for="i in [...Array(nbBars).keys()]"
        :is="RangeBar"
        :key="i"
        @click="() => setVolume(i)"
      />
    </div>
  </div>
</template>


<script lang="ts" setup>
const { value } = defineProps<{ nbBars: number; value: number }>();
const emits = defineEmits<{
  (eventName: "change", value: number): void;
}>();
const bars = ref<HTMLDivElement | null>(null);
const RangeBar = resolveComponent("NierRangeBar");

onMounted(() => {
  setBars(value);
});

const setVolume = (volume: number) => {
  emits("change", volume);
  setBars(volume);
};

const setBars = (volume: number) => {
  let i = 0;
  bars.value.childNodes.forEach((element) => {
    if (element instanceof HTMLDivElement) {
      if (i <= volume) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
      i += 1;
    }
  });
};
</script>

<style lang="scss">
@import "~/assets/css/colors.scss";

.nier-range {
  input {
    display: none;
  }

  .nier-range-bars {
    display: flex;
    flex-flow: row;
    align-items: center;

    .nier-range-bar {
      transition: height 0.2s ease, background-color 0.2s ease;
      background-color: $dark;
      height: 16px;
      width: 6px;
      margin-left: 1px;
      margin-right: 1px;
      cursor: pointer;
      outline: 2px solid transparent;

      &.active {
        background-color: $light;
        height: 20px;
      }

      &:hover {
        outline-color: $important;
      }
    }
  }
}
</style>