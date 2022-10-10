<template>
  <row :style="{ flexGrow: 1 }">
    <nier-bar color="bg-medium" :style="{ margin: '2px 0' }" />
    <column
      :style="{
        overflow: 'auto',
        marginLeft: '1em',
        borderWidth: '3px',
        flexGrow: 1,
        padding: '1em',
      }"
      class="border-medium"
    >
      <row
        v-for="game in videoGames"
        :key="game.key"
        :style="{ height: '180px' }"
        class="nier-list-item-image"
      >
        <img
          :src="'/img/games/' + game.image.src"
          :style="{ width: '320px', height: '180px' }"
          class="bg-dark"
        />
        <column :style="{ padding: '0.5em', flexGrow: 1 }">
          <column :style="{ flexGrow: 1 }">
            <h2>{{ $t("hobbies.videogame." + game.key + ".title") }}</h2>
            <p>{{ $t("hobbies.videogame." + game.key + ".description") }}</p>
          </column>
          <row :style="{ flexShrink: 1, justifyContent: 'end' }">
            <nier-button
              v-for="link in game.links"
              :key="link.href"
              :withCursor="true"
              :withBlock="false"
              :withBar="false"
              :href="link.href"
              class="nier-button-fade nier-button-light game-button"
              :is="'a'"
            >
              <row v-if="link.type === 'itchio'">
                <icon-itchio
                  :style="{ height: '24px', marginRight: '0.5em' }"
                />
                Jouer
              </row>

              <row v-if="link.type === 'youtube'">
                <icon-ytb
                  :style="{ height: '24px', marginRight: '0.5em' }"
                />
                Démo
              </row>
            </nier-button>
          </row>
        </column>
      </row>
    </column>
  </row>
</template>

<script lang="ts" setup>
const videoGames = [
  {
    key: "aSilentPumpkin",
    image: {
      src: "asilentpumpkin.png",
    },
    links: [
      { href: "https://cyrelouyea.itch.io/a-silent-pumpkin", type: "itchio" },
    ],
  },
  {
    key: "dontLetThemPass",
    image: {
      src: "dltp.png",
    },
    links: [{ href: "https://cyrelouyea.itch.io/dltp", type: "itchio" }],
  },
  {
    key: "diamond",
    image: {
      src: "diamond.gif",
    },
    links: [
      { href: "https://youtu.be/hE8vGJWTRNU", type: "youtube" },
      { href: "https://cyrelouyea.itch.io/diamond", type: "itchio" },
    ],
  },
  {
    key: "justHideAndDontDie",
    image: {
      src: null,
    },
    links: [
      {
        href: "https://cyrelouyea.itch.io/just-hide-and-dont-die",
        type: "itchio",
      },
    ],
  },
];
</script>

<style lang="scss">
@import "~/assets/css/colors.scss";

.nier-list-item-image {
  transition: all 0.1s ease;
  background-color: $medium;
  margin: 0.5em 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  img {
    filter: sepia(75%);
  }

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 3px 3px 0 $dark;

    img {
      filter: unset;
    }
  }

  .game-button {
    margin-left: 1em;

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
