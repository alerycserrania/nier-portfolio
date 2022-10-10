<template>
  <nier-bar color="bg-medium" :style="{ margin: '2px 0' }" />
  <nier-list :style="{ marginLeft: '1em', flexGrow: 1 }">
    <nier-list-button
      v-for="language in languages"
      :key="language.key"
      @click="$i18n.locale = language.code"
      :class="{ active: $i18n.locale === language.code }"
    >
      <div
        :style="{
          display: 'flex',
          justifyContent: 'space-between',
          flexGrow: 1,
        }"
      >
        {{ language.title }}
        <component
          :is="language.flag"
          width="20"
          :style="{
            filter:
              $i18n.locale === language.code
                ? 'saturate(100%)'
                : 'saturate(50%)',
          }"
        />
      </div>
    </nier-list-button>
  </nier-list>
</template>

<script lang="ts" setup>
const flags = {
  france: resolveComponent("FlagFrance"),
  usa: resolveComponent("FlagUsa"),
};

const languages = [
  { code: "fr", title: "Français", flag: flags.france },
  { code: "en", title: "English", flag: flags.usa },
];
languages.sort((a, b) => a.title.localeCompare(b.title))

</script>
