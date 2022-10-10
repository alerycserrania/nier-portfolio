<template>
  <div class="nier-card-img">
    <img :src="src" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ src: string }>();
</script>

<style lang="scss">

</style>