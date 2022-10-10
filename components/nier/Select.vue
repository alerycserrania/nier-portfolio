<template>
  <div class="nier-select">
    <nier-button
      class="nier-select-button nier-button-flat"
      :withBlock="false"
      :withBar="true"
      @click="toggleDropdown"
      :class="{ active: show }"
    >
      <div>{{ name }}</div>
      <div>{{ selected.label }}</div>
    </nier-button>
    <div class="nier-dropdown-menu" :class="{ show: show }">
      <div :style="{ padding: '0.2em 0.3em' }">
        <nier-divider type="solid" color="dark" size="1px" />
      </div>
      <column class="nier-dropdown-item">
        <nier-button
          class="nier-button-flat"
          v-for="option in options"
          @click="setSelected(option)"
          :key="option.value"
          :withBlock="false"
          :withBar="true"
          :class="{ active: selected.value === option.value }"
        >
          {{ option.label }}
        </nier-button>
      </column>
      <div :style="{ padding: '0.2em 0.3em' }">
        <nier-divider type="solid" color="dark" size="1px" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { name, selected, options } = defineProps<{
  name: string;
  selected: { value: any; label: any };
  options: { value: any; label: any }[];
}>();
const emits = defineEmits<{
  (eventName: "select", value: { value: any; label: any }): void;
}>();
const show = ref(false);

const setSelected = (newValue: { value: any; label: any }) => {
  emits("select", newValue);
  toggleDropdown();
};

const toggleDropdown = () => {
  show.value = !show.value;
};
</script>


<style lang="scss">
@import "~/assets/css/colors.scss";

.nier-select {
  position: relative;
  display: flex;
  select {
    display: none;
  }

  .nier-select-button {
    flex-grow: 1;

    .nier-button-inner {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
    }
  }

  .nier-dropdown-menu {
    transition: opacity 0.2s ease;
    position: absolute;
    display: flex;
    opacity: 0;
    flex-flow: column;
    background-color: $medium;
    right: 0;
    box-shadow: 2px 2px 0 $dark;
    z-index: 2;
    pointer-events: none;
    min-width: 200px;

    &.show {
      opacity: 1;
      pointer-events: unset;
    }

    .nier-dropdown-item {
      flex-grow: 1;
      max-height: 200px;
      overflow-y: auto;
      overflow-x: hidden;
      .nier-button {
        flex-grow: 1;
        margin-top: 0.2em;
        margin-bottom: 0.2em;
        .nier-button-inner {
          justify-content: center;
        }
      }
    }
  }
}
</style>