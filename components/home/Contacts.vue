<template>
  <nier-bar color="bg-medium" :style="{ margin: '2px 0' }" />
  <nier-list :style="{ marginLeft: '1em', flexGrow: 1 }">
    <nier-button :is="'a'" href="mailto:alerycserrania@protonmail.com">Mail: alerycserrania@protonmail.com</nier-button>
    <nier-button :is="'a'" href="https://www.pixiv.net/en/users/69802194">Pixiv (painting)</nier-button>
    <nier-button :is="'a'" href="https://cyrelouyea.itch.io/">Itch.io (games)</nier-button>
    <nier-button :is="'a'" href="https://github.com/alerycserrania">Github (code)</nier-button>
  </nier-list>
</template>

<script lang="ts" setup>
const languages = reactive([
  { code: "fr", title: "Français" },
  { code: "en", title: "English" },
]);
</script>
