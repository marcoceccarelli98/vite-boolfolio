<script>
import axios from "axios";
import { store } from "../data/store.js";
import AppCard from "./AppCard.vue";

export default {
  name: "AppMain",
  components: {
    AppCard,
  },

  props: {
    projects: {
      type: Array,
      required: false,
    },
  },

  data() {
    return {
      store,
    };
  },
  methods: {},
  created() {},
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
          ></AppCard>
        </li>
      </ul>
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
