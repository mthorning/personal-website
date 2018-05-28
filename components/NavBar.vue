<template>
<nav id="navBar" class="navbar is-fixed-top" role="navigation">
    <div class="navbar-brand is-expanded">
        <a href='/'  id="brand_logo">
            <img src="/logo.png"></a> 
        <a 
            class="navbar-burger" 
            role="button" 
            @click="burgerClick"
        >
            <span></span>
            <span></span>
            <span></span>
        </a>
    </div>
    <div v-bind:class="['navbar-menu', { 'is-active': mobileMenu }]"
    >
        <div class="navbar-start">
            <a 
                v-for="(page, i) in pages"
                :key="i"
                :href="page.path"
                class="navbar-item"
            >{{ page.title }}</a>
        </div>
        <div class="navbar-end">
            
        </div>
    </div>
</nav>
</template>

<script>
import PageMap from '~/assets/js/page-map';
export default {
  name: 'NavBar',
  data() {
    return {
      mobileMenu: false
    };
  },
  computed: {
    pages() {
      return PageMap.pages;
    },
    desktopMenu() {
      return !this.mobileMenu;
    }
  },
  methods: {
    burgerClick: function() {
      this.mobileMenu = !this.mobileMenu;
    }
  }
};
</script>

<style lang="scss" scoped>
#navBar {
  background-color: $primary-bold;
  border-bottom: 1px solid grey;
  a {
    color: $primary-faint;
  }
  a:hover {
    color: $highlight;
  }
  .is-active a {
    color: $text-color;
  }
}

#brand_logo {
  height: $navbar-height;
  img {
    height: 100%;
  }
}
</style>