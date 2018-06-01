<template>
<nav id="navBar" class="navbar" role="navigation">
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
        <p class="buttons is-grouped">
           <a 
            class="button is-small is-outlined is-inverted"
            @click="showModal"
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
  <div v-bind:class="['modal', {'is-active': modalShow}]">
    <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <span class="icon is-large">
                <font-awesome-icon id="emailModalIcon" :icon="envelopeIcon" />
              </span>
            </div>
            <div class="media">
              <div class="content">
                <h5>Please feel free to send me an email.</h5>
                <p>
                  You can email about my photos or if you wish to discuss your 
                  requirements for a website. Drop me a line: <strong>
                    <a href="mailto:matthewthorning@gmail.com">
                      matthewthorning@gmail.com
                    </a>
                  </strong>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
  </div>
</nav>
</template>

<script>
import FontAwesomeIcon from '@fortAwesome/vue-fontawesome';
import gitHubIcon from '@fortAwesome/fontawesome-free-brands/faGithub';
import twitterIcon from '@fortAwesome/fontawesome-free-brands/faTwitter';
import emailIcon from '@fortAwesome/fontawesome-free-solid/faAt';
import envelopeIcon from '@fortAwesome/fontawesome-free-solid/faEnvelope';
export default {
  name: 'NavBar',
  data() {
    return {
      mobileMenu: false,
      modalShow: false,
      gitHubIcon,
      twitterIcon,
      emailIcon,
      envelopeIcon
    };
  },
  components: {
    FontAwesomeIcon
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
    modalClick(e) {
      if (e.target.className !== 'modal_content') {
        this.modalShow = false;
      }
    },
    showModal() {
      this.modalShow = true;
    }
  }
};
</script>

<style lang="scss" scoped>
#navBar {
  background-color: $primary-bold;
  border-bottom: 1px solid grey;
  padding: 0 8px;
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
#emailModalIcon {
  height: 5em;
  width: 5em;
}
#brand_logo {
  height: $navbar-height;
  img {
    height: 100%;
  }
}
</style>