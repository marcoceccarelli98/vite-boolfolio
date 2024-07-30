<script>
export default {
  name: "AppCard",
  components: {},

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    start_date: {
      type: String,
      required: false,
    },
    end_date: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    data() {
      return {};
    },
  },

  // METHODS
  methods: {},
};
</script>

<template>
  <div class="card-container">
    <!-- POSTER -->
    <div class="image-content">
      <img
        v-if="image"
        class="poster-image"
        :src="image"
        :alt="title + ' poster'"
      />
      <div class="noImage" v-else>IMAGE NOT FOUND</div>
    </div>
    <!-- DETAILS -->
    <ul class="details">
      <!-- TITLE -->
      <li>
        <h3 class="mb-10">{{ title }}</h3>
      </li>
      <!-- /TITLE -->
      <!-- DESCRIPTION -->
      <li>
        <p class="mb-15">{{ description }}</p>
      </li>
      <!-- /DESCRIPTION -->
      <!-- STATUS -->
      <li>
        <p>{{ status }}</p>
      </li>
      <!-- /STATUS -->
      <!-- START DATE -->
      <li v-if="status !== 'To Do'" class="mb-15">{{ start_date }}</li>
      <!-- /START DATE -->
      <!-- END DATE -->
      <li v-if="status === 'Done'" class="mb-15">{{ end_date }}</li>
      <!-- /END DATE -->
    </ul>
  </div>
</template>

<style scoped lang="scss">
.card-container {
  width: 514px;
  height: 514px;
  border: 1px solid white;
  background-color: black;
  color: white;
  overflow-y: hidden;
  // HOVER EFFECT
  &:hover {
    .poster-image,
    .noImage {
      // display: none;
      opacity: 0;
      max-height: 0;
      transition: 0.5s;
    }
    .details {
      opacity: 1;
      max-height: 600px;
      transition: 0.3s;
      display: inline-block;
    }
  }
}

.image-content {
  transition: opacity 0.3s, max-height 0.3s;
  overflow: hidden;
  .poster-image {
    position: relative;
    width: 512px;
    height: 512px;
  }
}

// TEXT DETAILS
.details {
  color: white;
  padding: 30px;
  //display: none;
  .text-list {
    line-height: 20px;
    li:first-of-type {
      margin-top: 5px;
    }
  }
}
</style>
