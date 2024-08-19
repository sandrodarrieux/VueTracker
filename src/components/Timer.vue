<!-- <template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometer :timeInSeconds="timeInSeconds" />
    <button class="button" @click="start" :disabled="cronometerRuning">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="stop" :disabled="!cronometerRuning">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template> -->

<template>
  <section
    class="is-flex is-align-items-center is-justify-content-space-between"
  >
    <Cronometer :timeInSeconds="timeInSeconds" />
    <Botao
      @clicked="start"
      icon="fas fa-play"
      text="play"
      :isDisabled="cronometerRuning"
    />
    <Botao
      @clicked="stop"
      icon="fas fa-stop"
      text="stop"
      :isDisabled="!cronometerRuning"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometer from "./Cronometer.vue";
import Botao from "./Botao.vue";

export default defineComponent({
  name: "Timer",
  emits: ["whenTimerEnds"],
  components: {
    Cronometer,
    Botao,
  },
  data() {
    return {
      timeInSeconds: 0,
      cronometer: 0,
      cronometerRuning: false,
    };
  },

  methods: {
    start() {
      this.cronometerRuning = true;
      this.cronometer = setInterval(() => {
        this.timeInSeconds += 1;
      }, 1000);
    },
    stop() {
      this.cronometerRuning = false;
      clearInterval(this.cronometer);
      this.$emit("whenTimerEnds", this.timeInSeconds);
      this.timeInSeconds = 0;
    },
  },
});
</script>
