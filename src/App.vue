<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'dark-mode': enabledDarkMode }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @whenChangedTheme="themeChange" />
    </div>
    <div class="column is-three-quarter content">
      <Formulario @whenAddTask="addTask" />
      <div class="list">
        <Task v-for="(task, index) in task" :key="index" :task="task" />
        <Box v-if="emptyList"> You are not doing anything right now</Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import Box from "./components/Box.vue";
import Formulario from "./components/Formulario.vue";
import Task from "./components/Task.vue";
import ITask from "./interfaces/ITask";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Formulario,
    Task,
    Box,
  },
  data() {
    return {
      task: [] as ITask[],
      enabledDarkMode: false,
    };
  },
  computed: {
    emptyList(): boolean {
      return this.task.length === 0;
    },
  },
  methods: {
    addTask(task: ITask) {
      this.task.push(task);
    },
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
