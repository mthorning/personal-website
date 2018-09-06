<template>
<div>
  <nav-bar />
  <div id="page" class="container">
      <div class="container">
        <nuxt/>
      </div>
  </div>
</div>
</template>

<script>
import NavBar from '~/components/NavBar';

export default {
  components: {
    NavBar
  }
};
</script>

<style lang="scss" scoped>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  color: $text-color;
}
#page {
  margin-top: 50px;
}
</style>
