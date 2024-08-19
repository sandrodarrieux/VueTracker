<template>
  <div class="box form">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Form to create a new task"
      >
        <input
          type="text"
          class="input"
          placeholder="What task do you want to add?"
          v-model="description"
        />
        <select class="input priority" v-model="priority">
          <option disabled value="">Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div class="column">
        <Timer @when-timer-ends="endTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Timer from "./Timer.vue";

export default defineComponent({
  name: "Formulario",
  emits: ["whenAddTask"],
  components: {
    Timer,
  },
  data() {
    return {
      description: "",
      priority: "",
    };
  },
  methods: {
    endTask(elapsedTime: number): void {
      this.$emit("whenAddTask", {
        durationinSeconds: elapsedTime,
        description: this.description,
        priority: this.priority,
      });
      this.description = "";
      this.priority = "";
    },
  },
});
</script>
<style>
.form {
  color: var(--primary-text);
  background-color: var(--primary-bg);
  display: flex;
  flex-direction: column;
}
.column .is-8 {
  display: flex;
  flex-direction: row;
}
.priority {
  margin-left: 1rem;
  width: 5.5rem;
}
</style>
