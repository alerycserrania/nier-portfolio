<template>
  <column :style="{ height: '100%' }">
    <row>
      <h1 :style="{ textTransform: 'uppercase' }">{{ $t("home.title") }}</h1>
    </row>

    <row :style="{ flexGrow: 1, paddingTop: '0.5em' }">
      <column :style="{ flexShrink: 1, flexBasis: '250px' }">
        <row>
          <nier-bar color="bg-medium" :style="{ margin: '2px 0' }" />
          <nier-list :style="{ marginLeft: '1.5em', flexGrow: 1 }">
            <nier-list-item
              v-for="menu in homeMenus"
              :key="menu.title"
              :style="{ paddingRight: activatedMenu === menu ? '0' : '1em' }"
            >
              <nier-list-button
                :class="{ active: activatedMenu === menu }"
                class="nier-button-blink"
                @click="activateMenu(menu.key)"
                @mouseenter="hoverMenu(menu.key)"
                @mouseleave="hoverMenu(null)"
                >{{ $t(menu.title) }}</nier-list-button
              >
            </nier-list-item>
          </nier-list>
        </row>
      </column>

      <row :style="{ flexGrow: 1, flexBasis: '300px' }">
        <transition name="slide-fade-full" mode="out-in">
          <row :key="activatedMenu" :style="{ flexGrow: 1 }">
            <component v-if="activatedMenu" :is="activatedMenu.component" />
            <div v-else class="bg-medium dark" :style="{ flexGrow: 1, marginTop: '2px' }">
              <ul>Work in progress:
              <li>- contacts</li>
              <li>- credits</li>
              <li>- settings</li>
              <li>- employment</li>
              <li>- i18n</li>
              <li>- education details</li>
              <li>- skills details</li>
              <li>- nier components as a library</li>
              </ul>

            </div>
          </row>
        </transition>
      </row>
    </row>

    <row>
      <nier-banner :style="{ flexGrow: 1, marginTop: '1em' }">
        <transition name="slide-fade" mode="out-in">
          <div :key="hoveredMenu">
            {{ hoveredMenu ? $t(hoveredMenu.description) : $t("home.description") }}
          </div>
        </transition>
      </nier-banner>
    </row>
  </column>
</template>

<script lang="ts" setup>
const HomeLanguage = resolveComponent("HomeLanguage");
const HomeContacts = resolveComponent("HomeContacts");
const homeMenus = [
  {
    key: "language",
    title: "home.language.title",
    description: "home.language.description",
    component: HomeLanguage,
  },
  {
    key: "contacts",
    title: "home.contacts.title",
    description: "home.contacts.description",
    component: HomeContacts,
  },
  {
    key: "settings",
    title: "home.settings.title",
    description: "home.settings.description",
    component: null,
  },
  {
    key: "credits",
    title: "home.credits.title",
    description: "home.credits.description",
    component: null,
  },
];
const activatedMenu = shallowRef(null);
const hoveredMenu = shallowRef(null);
const activateMenu = (key: string | null) => {
  activatedMenu.value = homeMenus.find((menu) => menu.key === key);
};
const hoverMenu = (key: string | null) => {
  hoveredMenu.value = homeMenus.find((menu) => menu.key === key);
};
</script>
