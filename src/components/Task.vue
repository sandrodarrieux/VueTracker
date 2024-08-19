<template>
  <Box>
    <div class="columns">
      <div class="column is-7">
        {{ task.description || "No description task" }}
        | Priority:
        {{ task.priority || "No priority" }}
      </div>
      <div class="column is-8">
        <Cronometer :timeInSeconds="task.durationinSeconds" />
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ITask from "../interfaces/ITask";
import Cronometer from "./Cronometer.vue";
import Box from "./Box.vue";

export default defineComponent({
  name: "Task",
  components: {
    Cronometer,
    Box,
  },
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true,
    },
  },
});
</script>
<style scoped>
.column {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.is-7 {
  display: flex;
  flex-direction: column;
}
.is-8 {
  -ms-flex-align: end;
}
</style>
