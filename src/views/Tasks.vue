<template>
  <Formulario @whenAddTask="addTask" />
  <div class="list">
    <Box v-if="emptyList">
      You are not doing anything right now<span class="has-text-weight-bold"
        >:(</span
      ></Box
    >
    <Task v-for="(task, index) in task" :key="index" :task="task" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Box from "../components/Box.vue";
import Formulario from "../components/Formulario.vue";
import Task from "../components/Task.vue";
import ITask from "../interfaces/ITask";

export default defineComponent({
  name: "App",
  components: {
    Formulario,
    Task,
    Box,
  },
  data() {
    return {
      task: [] as ITask[],
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
  },
});
</script>
