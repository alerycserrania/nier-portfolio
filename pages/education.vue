<template>
  <column :style="{ height: '100%' }">
    <row>
      <h1 :style="{ textTransform: 'uppercase' }">
        {{ $t("education.title") }}
      </h1>
    </row>

    <row :style="{ flexGrow: 1, paddingTop: '0.5em' }">
      <nier-bar color="bg-medium" :style="{ margin: '2px 0' }" />
      <nier-card
        :style="{
          marginLeft: '1.5em',
          marginRight: '1em',
          flexShrink: 1,
          flexBasis: '400px',
        }"
        class="nier-box-shadow"
      >
        <nier-card-body :style="{ display: 'flex', flexFlow: 'column' }">
          <div :style="{ flexShrink: 1, margin: '0.5em' }">
            <nier-divider type="solid" size="2px" color="medium" />
          </div>

          <nier-list :style="{ flexGrow: 1 }">
            <nier-list-item
              v-for="formation in formations"
              :key="formation.key"
            >
              <nier-list-button
                :class="{ active: activatedMenu === formation }"
                class="nier-button-none nier-button-blink"
                @click="activateMenu(formation.key)"
              >
                <div
                  :style="{
                    display: 'flex',
                    flexFlow: 'column',
                    flexGrow: '1',
                  }"
                >
                  <div>
                    <em
                      ><b>{{
                        $t("education." + formation.key + ".title")
                      }}</b></em
                    >
                  </div>
                  <div>
                    {{ $t("education." + formation.key + ".location") }}
                  </div>
                  <div :style="{ textAlign: 'end' }">
                    <b>{{ $t("education." + formation.key + ".period") }}</b>
                  </div>
                </div>
              </nier-list-button>
            </nier-list-item>
          </nier-list>

          <div :style="{ flexShrink: 1, margin: '0.5em' }">
            <nier-divider type="solid" size="2px" color="medium" />
          </div>
        </nier-card-body>
      </nier-card>

      <row :style="{ flexGrow: 1, flexBasis: '300px' }">
        <transition name="slide-fade-full" mode="out-in">
          <row
            :key="activatedMenu"
            :style="{ flexGrow: 1, justifyContent: 'center' }"
          >
            <component
              v-if="activatedMenu"
              :is="activatedMenu.component"
              :style="{ flexShrink: 1, flexBasis: '500px' }"
            />
            <div
              v-else
              class="bg-medium"
              :style="{ flexShrink: 1, flexBasis: '500px', marginTop: '2px' }"
            ></div>
          </row>
        </transition>
      </row>
    </row>

    <row>
      <nier-banner :style="{ flexGrow: 1, marginTop: '1em' }">
        {{ $t("education.description") }}
      </nier-banner>
    </row>
  </column>
</template>

<script lang="ts" setup>
const EducationDutInfoParis = resolveComponent("EducationDutInfoParis");
const EducationInsaLyon = resolveComponent("EducationInsaLyon");
const EducationUcdDublin = resolveComponent("EducationUcdDublin");
const formations = [
  { key: "dutinfoparis", component: EducationDutInfoParis },
  { key: "insalyon", component: EducationInsaLyon },
  { key: "ucddublin", component: EducationUcdDublin },
];
const activatedMenu = shallowRef(null);
const activateMenu = (key: string | null) => {
  activatedMenu.value = formations.find((formation) => formation.key === key);
};
</script>
