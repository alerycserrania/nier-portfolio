<template>
  <column :style="{ height: '100%' }">
    <row>
      <h1 :style="{ textTransform: 'uppercase' }">{{ $t("hobbies.title") }}</h1>
    </row>

    <row :style="{ flexGrow: 1, overflow: 'auto', paddingTop: '0.5em' }">
      <column :style="{ flexShrink: 1, flexBasis: '250px' }">
        <row>
          <nier-bar color="bg-medium" :style="{ margin: '2px 0' }" />
          <nier-list :style="{ marginLeft: '1.5em', flexGrow: 1 }">
            <nier-list-item
              v-for="button in buttons"
              :key="button.title"
              :style="{ paddingRight: activated === button ? '0' : '1em' }"
            >
              <nier-list-button
                :class="{ active: activated === button }"
                class="nier-button-blink"
                @click="activateButton(button.key)"
                @mouseenter="hoverButton(button.key)"
                @mouseleave="hoverButton(null)"
                >{{ $t(button.title) }}</nier-list-button
              >
            </nier-list-item>
          </nier-list>
        </row>
      </column>

      <row :style="{ flexGrow: 1, flexBasis: '300px' }">
        <transition name="slide-fade-full" mode="out-in">
          <row :key="activated" :style="{ flexGrow: 1 }">
            <component v-if="activated" :is="activated.component" />
            <div
              v-else
              class="bg-medium"
              :style="{ flexGrow: 1, marginTop: '2px' }"
            ></div>
          </row>
        </transition>
      </row>
    </row>

    <row>
      <nier-banner :style="{ flexGrow: 1, marginTop: '1em' }">
        <transition name="slide-fade" mode="out-in">
          <div :key="hovered">
            {{ hovered ? $t(hovered.description) : $t("hobbies.description") }}
          </div>
        </transition>
      </nier-banner>
    </row>
  </column>
</template>

<script lang="ts" setup>
const HobbiesPainting = resolveComponent("HobbiesPainting")
const HobbiesMusic = resolveComponent("HobbiesMusic")
const HobbiesVideoGame = resolveComponent("HobbiesVideoGame")

const buttons = [
  {
    key: "painting",
    title: "hobbies.painting.title",
    description: "hobbies.painting.description",
    component: HobbiesPainting,
  },
  {
    key: "music",
    title: "hobbies.music.title",
    description: "hobbies.music.description",
    component: HobbiesMusic,
  },
  {
    key: "videogame",
    title: "hobbies.videogame.title",
    description: "hobbies.videogame.description",
    component: HobbiesVideoGame,
  },
];

const activated = shallowRef(null);
const hovered = shallowRef(null);
const activateButton = (key: string | null) => {
  activated.value = buttons.find((button) => button.key === key);
};
const hoverButton = (key: string | null) => {
  hovered.value = buttons.find((button) => button.key === key);
};
</script>
