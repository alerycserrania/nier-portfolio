<template>
  <row :style="{ flexGrow: 1 }">
    <nier-bar color="bg-medium" :style="{ margin: '2px 0' }" />
    <column
      :style="{
        overflow: 'auto',
        marginLeft: '1em',
        borderWidth: '3px',
        flexGrow: 1,
      }"
      class="border-medium"
    >
      <column v-for="image in images" :key="image.key">
        <h3 :style="{ margin: '1em 1em' }">
          {{ $t("hobbies.painting." + image.key + ".title") }}
        </h3>
        <row
          :style="{
            flexWrap: 'wrap',
            flexGrow: 1,
            justifyContent: 'space-around',
          }"
        >
          <column
            v-for="artwork in image.artworks"
            :key="artwork.src"
            :style="{ marginBottom: '2em' }"
          >
            <nier-card-button
              :style="{ width: '300px' }"
              @click="onCardClick('/img/' + image.key + '/' + artwork.src)"
            >
              <nier-card-img
                :src="'/img/' + image.key + '/' + artwork.src"
                :style="{ height: '300px', width: '300px' }"
              />
              <nier-card-body
                :style="{ display: 'flex', padding: '0.5em 1em' }"
              >
                title
              </nier-card-body>
            </nier-card-button>
          </column>
        </row>
      </column>
    </column>

    <nier-modal :show="show" :toggle="toggle" height="95%">
      <nier-modal-header :toggle="toggle">
        <row :style="{ display: 'flex', alignItems: 'center' }">
          <div class="nier-button-block bg-light" />
          <div>MESSAGE SYSTÈME</div>
        </row>
      </nier-modal-header>

      <nier-modal-body :style="{ overflow: 'hidden' }">
        <img
          :src="selected"
          :style="{ width: '100%', height: '100%', objectFit: 'contain' }"
        />
      </nier-modal-body>
    </nier-modal>
  </row>
</template>

<script lang="ts" setup>
const images = [
  {
    key: "landscape",
    artworks: [
      { src: "beach.jpg" },
      { src: "makai.jpg" },
      { src: "test.jpg" },
      { src: "chrono_trigger_zhyle.jpg" },
      { src: "feltiliminal.jpg" },
      { src: "reimu.jpg" },
    ],
  },
  {
    key: "portrait",
    artworks: [
      { src: "muse.jpg" },
      { src: "muse2.jpg" },
      { src: "muse3.jpg" },
      { src: "muse7.jpg" },
      { src: "sophie.jpg" },
      { src: "birthday.jpg" },
      { src: "felti.jpg" },
      { src: "ghost_trick.jpg" },
      { src: "kua.jpg" },
      { src: "pumpiino.jpg" },
      { src: "rosalind.jpg" },
      { src: "sumireko.jpg" },
      { src: "felti_sus.png" },
    ],
  },
  {
    key: "pixelart",
    artworks: [
      { src: "follow_me_unafraid.png" },
      { src: "mysterious_snake_show.png" },
      { src: "sea.png" },
      { src: "takane.png" },
    ],
  },
];

const show = ref(false);
const toggle = () => {
  show.value = !show.value;
};

const selected = ref(null);

const onCardClick = (src: string) => {
  show.value = true;
  selected.value = src;
};
</script>
