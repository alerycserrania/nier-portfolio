<template>
  <row :style="{ flexGrow: 1 }">
    <nier-bar color="bg-medium" :style="{ margin: '2px 0' }" />

    <column :style="{ flexGrow: 1 }">
      <div :style="{ margin: '0 1em 1em 1em' }">
        <nier-audio>
          <source
            src="/audio/corridors_of_time_piano_25_07_2021.mp3"
            type="audio/mpeg"
          />
        </nier-audio>
      </div>
      <div :style="{ margin: '0 1em 1em 1em' }">
        <nier-audio>
          <source src="/audio/bg.ogg" type="audio/ogg" />
        </nier-audio>
      </div>
    </column>
  </row>
</template>

<script lang="ts" setup>
</script>
