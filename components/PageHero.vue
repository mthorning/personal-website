<template>
<section class="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        {{ currentPage.title }}
      </h1>
      <h2 class="subtitle">
        {{ currentPage.subtitle }}
      </h2>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'PageHero',
  props: {
    path: String
  },
  computed: {
    currentPage() {
      return this.$store.getters.getPage(this.path);
    }
  }
};
</script>

<style lang="scss" scoped>
.subtitle {
  color: $secondary-bold;
}
</style>
