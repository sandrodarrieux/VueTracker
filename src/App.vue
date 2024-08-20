<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'dark-mode': enabledDarkMode }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @whenChangedTheme="themeChange" />
    </div>
    <div class="column is-three-quarter content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
  },
  data() {
    return {
      enabledDarkMode: false,
    };
  },
  methods: {
    themeChange(enabledDarkMode: boolean) {
      this.enabledDarkMode = enabledDarkMode;
    },
  },
});
</script>

<style>
.list {
  padding: 1.25rem;
}
main {
  --primary-bg: #fff;
  --primary-text: #000;
}
main.dark-mode {
  --primary-bg: #2b2d42;
  --primary-text: #ddd;
}
.content {
  background-color: var(--primary-bg);
}
</style>
