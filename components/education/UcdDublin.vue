<template>
  <nier-card class="test-card">
    <nier-card-title
      :style="{
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
      }"
    >
      <div
        class="nier-button-block bg-light"
        :style="{ width: '1em', height: '1em' }"
      />
      {{ $t("education.ucddublin.title") }} - {{ $t("education.ucddublin.location") }}
    </nier-card-title>
    <nier-card-body>ayo</nier-card-body>
  </nier-card>
</template>

<style lang="scss">
.test-card {
  animation: testCard 0.5s cubic-bezier(0, 0.87, 0.4, 1.03);
}

@keyframes testCard {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}
</style>