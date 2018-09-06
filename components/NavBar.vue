<template>
<nav id="navBar" class="navbar" role="navigation">
  <div class="navbar-brand is-expanded">
    <a href='/'  id="brandLogo">
      <img src="/logo-clear.png">
    </a> 
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
        <p class="buttons is-grouped">
           <a 
            class="button is-small is-outlined is-inverted"
            @click="toggleEmailModal"
          >
            <span class="icon">
              <font-awesome-icon :icon="emailIcon" />
            </span>
            <span>Email</span>
          </a>
          <a 
            class="button is-small is-outlined is-inverted"
            href="https://twitter.com/thorning_m"
          >
            <span class="icon">
              <font-awesome-icon :icon="twitterIcon" />
            </span>
            <span>Twitter</span>
          </a>
          <a 
            class="button is-small is-outlined is-inverted"
            href="https://github.com/mthorning"
          >
            <span class="icon">
              <font-awesome-icon :icon="gitHubIcon" />
            </span>
            <span>GitHub</span>
          </a>
        </p>
    </div>
  </div>
  <email-modal 
    v-on:email-close="toggleEmailModal" 
    v-bind:modalShow="emailModalShow" 
  />
</nav>
</template>

<script>
import FontAwesomeIcon from '@fortAwesome/vue-fontawesome';
import gitHubIcon from '@fortAwesome/fontawesome-free-brands/faGithub';
import twitterIcon from '@fortAwesome/fontawesome-free-brands/faTwitter';
import emailIcon from '@fortAwesome/fontawesome-free-solid/faAt';
import emailModal from '~/components/emailModal';
export default {
  name: 'NavBar',
  data() {
    return {
      mobileMenu: false,
      emailModalShow: false,
      gitHubIcon,
      twitterIcon,
      emailIcon
    };
  },
  components: {
    FontAwesomeIcon,
    emailModal
  },
  computed: {
    pages() {
      return this.$store.state.pages;
    },
    desktopMenu() {
      return !this.mobileMenu;
    }
  },
  methods: {
    burgerClick: function() {
      this.mobileMenu = !this.mobileMenu;
    },
    toggleEmailModal() {
      this.emailModalShow = !this.emailModalShow;
    }
  }
};
</script>

<style lang="scss" scoped>
#navBar {
  background-color: $primary-bold;
  border-bottom: 1px solid grey;
  padding: 0 8px 0 0;
  a {
    color: $primary-faint;
  }
  a:hover {
    color: $highlight;
  }
  .is-active a {
    color: $text-color;
  }
  .button {
    background-color: $primary-bold;
  }
  .button:hover {
    background-color: $primary-faint;
  }
}
#brandLogo {
  height: $navbar-height;
  padding: 8px;
  img {
    height: 100%;
  }
}
#brandLogo:hover > img {
  background-color: $highlight;
}
</style>