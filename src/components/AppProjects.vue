<script>
import axios from "axios";
import { store } from "../data/store.js";
import AppCard from "./AppCard.vue";

export default {
  name: "AppMain",
  components: {
    AppCard,
  },

  data() {
    return {
      store,
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
  <main>
    <div class="container">
      <ul>
        <li v-for="project in projects.data">
          <AppCard
            :title="project.title"
            :description="project.description"
            :status="project.status"
            :start_date="project.start_date"
            :end_date="project.end_date"
            :image="project.images[0]"
            :slug="project.slug"
          ></AppCard>
        </li>
      </ul>
      <nav>
        <ul class="d-flex justify-content-between">
          <li>
            <button
              v-if="this.currentPage > 1"
              @click="prevPage"
              class="btn btn-secondary"
            >
              Prev
            </button>
          </li>
          <li>
            <button
              v-show="this.currentPage < this.projects.last_page"
              @click="nextPage"
              class="btn btn-primary"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  margin-top: 150px;
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 60px;
  }
}
</style>
