<script>
import axios from "axios";
import { store } from "../data/store.js";

export default {
  name: "AppHome",
  components: {},

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
    <div class="container">HOMEPAGE</div>
  </main>
</template>

<style scoped lang="scss">
main {
  margin-top: 150px;
}
</style>
