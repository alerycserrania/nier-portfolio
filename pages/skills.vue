<template>
  <column :style="{ height: '100%' }">
    <row>
      <h1 :style="{ textTransform: 'uppercase' }">{{ $t("skills.title") }}</h1>
    </row>

    <row>
      <nier-bar color="bg-medium" :style="{ margin: '2px 0' }" />
      <nier-select
        name="Filter Tag"
        :selected="selectedTag"
        :options="tags"
        @select="(v) => (selectedTag = v)"
        :style="{ flexGrow: 1, marginLeft: '1.5em' }"
      />
    </row>

    <row>
      <row class="skills">
        <row
          v-for="skill in filteredSkills"
          :key="skill.key"
          class="skill-card"
        >
          <div class="skill-card-content">
            {{ $t("skills." + skill.key + ".title") }}
          </div>
        </row>
      </row>
    </row>
  </column>
</template>

<script lang="ts" setup>
const skills = [
  {
    key: "python",
    tags: ["language", "backend", "programming"],
  },
  {
    key: "typescript",
    tags: ["language", "frontend", "programming"],
  },
  {
    key: "react",
    tags: ["library", "frontend", "programming"],
  },
  {
    key: "kubernetes",
    tags: ["devops"],
  },
  {
    key: "docker",
    tags: ["devops", "software"],
  },
  {
    key: "jenkins",
    tags: ["devops", "ci", "cd"],
  },
  {
    key: "postgresql",
    tags: ["data", "sql"],
  },
  {
    key: "elasticsearch",
    tags: ["data", "nosql", "monitoring"],
  },
  {
    key: "filebeat",
    tags: ["data", "monitoring", "software"],
  },
  {
    key: "metricbeat",
    tags: ["data", "monitoring", "software"],
  },
  {
    key: "apm",
    tags: ["data", "monitoring", "software"],
  },
  {
    key: "kibana",
    tags: ["data", "front-end", "software", "monitoring"],
  },
  {
    key: "git",
    tags: ["devops", "software", "programming"],
  },
  {
    key: "github",
    tags: ["devops", "software", "programming"],
  },
  {
    key: "pycharm",
    tags: ["ide", "software", "programming"],
  },
  {
    key: "vscode",
    tags: ["ide", "software", "programming"],
  },
  {
    key: "csp",
    tags: ["software", "painting", "art"],
  },
  {
    key: "aseprite",
    tags: ["software", "painting", "art"],
  },
  {
    key: "musescore",
    tags: ["software", "music", "art", "mae"],
  },
  {
    key: "flstudio",
    tags: ["software", "music", "art", "mae"],
  },
  {
    key: "flstudio",
    tags: ["software", "music", "art", "mae"],
  },
];
const tags = [...new Set(skills.flatMap((skill) => skill.tags))].map((tag) => ({
  value: tag,
  label: tag,
}));
tags.push({ value: "*", label: "all" });
const filteredSkills = ref(skills);
const selectedTag = ref({ value: "*", label: "all" });

onMounted(() => {
  updateFilteredSkills(selectedTag.value);
});

watch(selectedTag, (selectedTag) => {
  updateFilteredSkills(selectedTag);
});

const updateFilteredSkills = (selectedTag) => {
  if (selectedTag.value === "*") {
    filteredSkills.value = skills;
  } else {
    filteredSkills.value = skills.filter((skill) =>
      skill.tags.includes(selectedTag.value)
    );
  }
};
</script>

<style lang="scss">
@import "~/assets/css/colors.scss";

.skills {
  flex-wrap: wrap;

  .skill-card {
    position: relative;
    width: 25%;
    margin: 1em 0;
    justify-content: center;

    .skill-card-content {
      height: 80px;
      width: 300px;
      background-color: $medium;

      &:hover {
        position: absolute;
        box-shadow: 3px 3px 0 $dark;
        transform: translate(-3px, -3px);
        height: 200px;
        z-index: 1;
      }
    }
  }
}
</style>