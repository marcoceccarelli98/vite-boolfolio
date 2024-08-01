<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      projects: [],
    };
  },

  components: {
    AppHeader,
    AppMain,
  },

  methods: {
    async getProjects() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/projects");

        this.projects = response.data.results;
        console.log(this.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    },
  },

  created() {
    this.getProjects();
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain :projects="projects"></AppMain>
</template>

<style scoped lang="scss"></style>
