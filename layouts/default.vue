<template>
  <nier-container>
    <div class="box">
      <nier-nav-bar class="row-header">
        <nier-nav-item
          v-for="nav in navs"
          :active="activeTab === nav.to"
          :key="nav.to"
          :to="nav.to"
        >
          <div :style="{ textTransform: 'uppercase' }">
            {{ $t(nav.title) }}
          </div>
        </nier-nav-item>
      </nier-nav-bar>

      <div class="row-content">
        <slot />
      </div>
    </div>
    <nier-filter />
  </nier-container>
</template>


<script lang="ts" setup>
const route = useRoute();
const router = useRouter();
const activeTab = ref(route.name);
const order = ["home", "education", "employment", "skills", "hobbies"];

const navs = reactive(
  router.options.routes
    .filter((route) => route.name !== "index")
    .sort((r1, r2) => order.indexOf(r1.name) - order.indexOf(r2.name))
    .map((route) => ({ to: route.name, title: `${route.name}.title` }))
);

watch(
  () => route.name,
  () => {
    activeTab.value = route.name;
  }
);
</script>

<script lang="ts">
</script>


<style lang="scss">
@import "~/assets/css/colors.scss";

.box {
  display: flex;
  flex-flow: column;
  height: 100%;

  .row-header {
    flex: 0 1 auto;
  }

  .row-content {
    flex: 1 1 auto;
    overflow: auto;
    margin: 1em 2em;
    padding: 1em;
    border: 2px solid $medium;
  }
}
</style>