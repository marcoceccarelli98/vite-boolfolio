<script>
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
    };
  },

  methods: {
    async getProjects() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/projects");

        this.projects = response.data.results;
        console.log(response.data);
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
  <ul>
    <li v-for="project in this.projects">{{ project.title }}</li>
  </ul>
</template>

<style scoped></style>
