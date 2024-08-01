<script>
import axios from "axios";
import AppCard from "./components/AppCard.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      projects: [],
    };
  },

  components: {
    AppCard,
    AppHeader,
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

  <ul>
    <li v-for="project in this.projects">
      <AppCard
        :title="project.title"
        :description="project.description"
        :status="project.status"
        :start_date="project.start_date"
        :end_date="project.end_date"
        :image="project.images[0]"
      ></AppCard>
    </li>
  </ul>
</template>

<style scoped></style>
