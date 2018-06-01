<template>
<div id="card" class="card">
  <div id="mainImage">
    <figure class="image">
      <img 
        @click="imageClicked"
        v-if="image" 
        v-bind:src="image.path"
      >
    </figure>
  </div>
  <div id="imageTitle">
    <div class="media-content">
      <p class="title is-4">{{ title }}</p>
    </div>
  </div>
  <footer id="imageLink">
    <a :href="url">View Details</a>
  </footer>

  <div 
    v-bind:class="['modal', {'is-active': modalShow}]"
    @click="modalClick"
  >
    <div class="modal-background"></div>
    <div class="modal-content">
      <img
        class="modal_image" 
        v-bind:src="image.path"
        v-bind:style="{ height, width }"
      >
    </div>
    <button class="modal-close is-large" @click="closeModal"></button>
  </div>
</div>

</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    image: Object,
    route: String
  },
  data() {
    return {
      modalShow: false,
      portrait: false
    };
  },
  computed: {
    title() {
      return this.$store.getters.getImageTitle(this.image.id);
    },
    height() {
      return this.portrait ? '90vh' : 'auto';
    },
    width() {
      return this.portrait ? 'auto' : '100%';
    },
    url() {
      return `${this.route}${this.image.id}`;
    }
  },
  methods: {
    imageClicked() {
      this.modalShow = true;
    },
    closeModal() {
      this.modalShow = false;
    },
    modalClick(e) {
      if (e.target.className !== 'modal_image') {
        this.closeModal();
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const width = this.$el.querySelector('img').width;
      const height = this.$el.querySelector('img').height;

      if (height >= width) {
        this.portrait = true;
        this.$store.commit('addPortrait', this.image.id);
      }
    });
  }
};
</script>

<style lang="scss" scoped>
#card {
  width: 100%;
  padding-bottom: 100%;
  position: relative;
}
#mainImage {
  overflow: hidden;
  position: absolute;
  top: 0;
  height: 100%;
  img {
    width: 100%;
    cursor: pointer;
    height: auto;
  }
}
#imageTitle {
  position: absolute;
  z-index: 1;
  bottom: 0px;
  padding: 12px 4px 52px;
  background-color: $primary-faint;
  width: 100%;
}
#imageLink {
  position: absolute;
  bottom: 0;
  z-index: 2;
  background-color: $primary-faint;
  width: 100%;
  padding: 4px;
  text-align: right;
  a {
    color: $secondary-bold;
  }
  a:hover {
    color: $highlight;
  }
}

.modal-content {
  text-align: center;
}
</style>
