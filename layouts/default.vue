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
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  color: $text-color;
}
</style>
