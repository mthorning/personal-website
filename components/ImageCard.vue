<template>
<div id="card" class="card">
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
    <div id="mainImage" class="card-image">
        <figure class="image">
            <img 
                @click="imageClicked"
                v-if="image" 
                v-bind:src="image.path"
            >
        </figure>
    </div>
    <div class="card-content">
        <div class="media-content">
            <p class="title is-4">{{ title }}</p>
        </div>
    </div>
    <div class="content">
        {{ image.description }}
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
    height() {
      return this.portrait ? '90vh' : 'auto';
    },
    width() {
      return this.portrait ? 'auto' : '100%';
    },
    title() {
      return this.image.path
        .split('/')
        .pop()
        .split('.')[0]
        .split('_')
        .join(' ');
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
      }
    });
  }
};
</script>

<style lang="scss" scoped>
#card {
  padding: 4px;
  margin: 4px;
}
#mainImage {
  img {
    cursor: pointer;
    height: auto;
  }
}
.modal-content {
  text-align: center;
}
</style>
