<template>
<section class="hero">
    <div class="hero-body">
        <div class="container">
            <h1 class="title">
            {{ currentPage.title }}
            </h1>
            <hr />
            <h2 class="subtitle">
            {{ currentPage.subtitle }}
            </h2>
        </div>
    </div>
</section>
</template>

<script>
import PageMap from '~/assets/js/page-map';
export default {
  name: 'PageHero',
  props: {
    path: String
  },
  computed: {
    currentPage() {
      return PageMap.pages.find(page => {
        return page.path === this.path;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.subtitle {
  color: $secondary-bold;
}
</style>
