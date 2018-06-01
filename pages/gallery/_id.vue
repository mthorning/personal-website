<template>
  <div class="container">
    <div class="columns content_wrapper">
      <section id="imageWrapper" class="column is-8">
        <img 
          v-if="image"
          v-bind:src="image.path || ''"
          v-bind:style="{ height, width }"
        />
      </section>
      <section class="blurb column is-4">
        <div class="content">
          <h1>{{ title }}</h1>
          <p>{{ image.description }}</p>
        </div>
      </section>
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
    height() {
      return this.$store.getters.isPortrait(this.id) ? '90vh' : 'auto';
    },
    width() {
      return this.$store.getters.isPortrait(this.id) ? 'auto' : '100%';
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
.content_wrapper {
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
  .blurb {
    height: 60%;
  }
}
#imageWrapper {
  max-height: 90vh;
}
</style>



