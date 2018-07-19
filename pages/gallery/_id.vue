<template>
  <div class="container">
    <div class="columns content_wrapper">
      <div 
        id="imageWrapper" 
        class="column is-8"
        v-bind:style="{ backgroundImage }"
      >
      </div>
      <div class="blurb column is-4">
        <div class="content">
          <h1>{{ title }}</h1>
          <p>{{ image.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'photo-view',
  computed: {
    image() {
      return this.$store.getters.getImage(this.id);
    },
    title() {
      return this.$store.getters.getImageTitle(this.id);
    },
    backgroundImage() {
      return `url(${this.image.path})`;
    }
  },
  beforeCreate() {
    this.id = this.$route.params.id;
    if (!this.$store.getters.getImage(this.id)) {
      this.$router.replace(this.$route.path.replace(this.id, ''));
    }
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 845px) {
  .container {
    padding: 0 4vw;
  }
}
#imageWrapper {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
}
.blurb {
  display: flex;
  align-items: center;
  padding-bottom: 20%;
}
</style>



