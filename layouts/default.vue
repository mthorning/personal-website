<template>
<div>
  <nav-bar />
  <div id="page" class="container">
    <page-hero v-bind:path="$nuxt.$route.path"/>
      <nuxt/>
  </div>
</div>
</template>

<script>
import NavBar from '~/components/NavBar';
import PageHero from '~/components/PageHero';

export default {
  components: {
    NavBar,
    PageHero
  }
};
</script>

<style lang="scss">
</style>
