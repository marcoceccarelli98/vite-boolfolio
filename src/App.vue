<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppProjects from "./components/AppProjects.vue";

export default {
  data() {
    return {};
  },

  components: {
    AppHeader,
  },

  methods: {},
};
</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
</template>

<style scoped lang="scss"></style>
