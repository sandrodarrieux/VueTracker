<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="" />
    </h1>
    <button class="button is-dark" @click="themeChange">
      {{ buttonText }}
    </button>
    <div>
      <strong class="tag is-danger"> {{ currentDay }}</strong>
      <strong class="tag is-info"> {{ currentTime }}</strong>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BarraLateral",
  emits: ["whenChangedTheme"],
  data() {
    return {
      darkMode: false,
      currentTime: new Date().toLocaleTimeString(),
      currentDay: new Date().toLocaleDateString(),
    };
  },
  computed: {
    buttonText() {
      if (this.darkMode) {
        return "Disable dark mode";
      }
      return "Enable dark mode";
    },
  },
  methods: {
    themeChange() {
      this.darkMode = !this.darkMode;
      this.$emit("whenChangedTheme", this.darkMode);
    },
    updateTime() {
      this.currentTime = new Date().toLocaleTimeString("en", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    },
    updateDay() {
      this.currentDay = new Date().toLocaleDateString("en", {
        weekday: "long",
      });
    },
  },
  mounted() {
    setInterval(this.updateTime, 1000);
    setInterval(this.updateDay, 1000);
  },
});
</script>

<style scoped>
header {
  padding: 2rem;
  background: #000602;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
button {
  margin: 0.5rem;
  margin-top: 1rem;
  display: flex;
}
.tag {
  margin: 0.5rem;
  display: flex;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
