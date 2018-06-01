<template>
<div class="container">
  <div class="columns">
    <div class="column is-half-tablet is-one-third-desktop 
      is-one-quarter-widescreen"
      v-for="(image, i) in images"
      v-bind:key="i"
    >
      <image-card
        v-bind:image="image"
        v-bind:route="$route.fullPath"
      />
    </div>
  </div>
</div>
</template>

<script>
import ImageCard from '~/components/ImageCard';

export default {
  components: {
    ImageCard
  },
  computed: {
    images() {
      return this.$store.state.images;
    }
  }
};
</script>

<style lang="scss" scoped>
.columns {
  align-items: center;
  flex-wrap: wrap;
  padding: 0 10vh;
}
</style>

