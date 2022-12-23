<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/partials/BulleursNav.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
  },
});
</script>
