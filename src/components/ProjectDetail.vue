<template>
  <div v-if="project">
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
    <p>Status: {{ project.status }}</p>
    <p>Start Date: {{ project.start_date }}</p>
    <p>End Date: {{ project.end_date }}</p>
    <img :src="project.images[0]" alt="Project Image" />
  </div>
  <div v-else-if="error">
    <p>{{ error }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProjectDetail",

  props: {
    slug: String,
  },
  data() {
    return {
      project: null,
      error: null,
    };
  },
  methods: {
    async getDetails() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/projects/${this.slug}`
        );
        this.project = response.data;
      } catch (error) {
        if (error.response && error.response.status === 404) {
          this.error = "Project not found.";
        } else {
          this.error = "An error occurred.";
        }
      }
    },
  },
  created() {
    this.getDetails();
  },
};
</script>

<style scoped></style>
