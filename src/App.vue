<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      projects: [],
      api: {
        baseUrl: "http://127.0.0.1:8000/api/",
        endPoints: {
          projectsList: "projects",
        },
      },
      response: {},
      currentPage: 1,
    };
  },

  components: {
    AppHeader,
    AppMain,
  },

  methods: {
    async getProjects() {
      try {
        const url = this.api.baseUrl + this.api.endPoints.projectsList;
        console.log(url);

        const response = await axios.get(url, {
          params: {
            page: this.currentPage,
          },
        });

        this.projects = response.data.results;
        console.log(this.projects);
      } catch (error) {
        console.error("Error Api projects:", error);
      }
    },

    prevPage() {
      this.currentPage--;
      this.getProjects();
    },

    nextPage() {
      this.currentPage++;
      this.getProjects();
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
