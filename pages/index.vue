<template>
<div>
  <email-modal v-bind:modalShow="emailModalShow" />
  <section id="topSection">
    <div id="topFiller">
      <div id="header">
        <a href="/about/">
          <span class="icon">
            <font-awesome-icon class="lgIcon" :icon="infoCircle" />
          </span>
        </a>
        <a 
          class="button is-rounded is-outlined"
          @click="sayHello" 
        >
          <span>Say Hello</span>
        </a>
      </div>
      <div class="welcome container">
        <h1>
          Hi, my name is Matt and I make websites :)
        </h1>
      </div>
    </div>
    <div id="leftFiller"></div>
    <div id="rightFiller"></div>
  </section>
  <section class="bold">
    <div class="container">
      <div class="tri_boxes">
        <h1>Fast</h1>
      </div>
      <div class="tri_boxes">
        <h1>Responsive</h1>
      </div>
      <div class="tri_boxes">
        <h1>Something</h1>
      </div>
    </div>
  </section>
  <section id="bottomSection">
    <div id="leftFiller"></div>
    <div id="rightFiller"></div>
    <div id="bottomFiller">
      <div class="CTA container">
        <h1>
          Get in touch to see if I can help.
        </h1>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import FontAwesomeIcon from '@fortAwesome/vue-fontawesome';
import infoCircle from '@fortAwesome/fontawesome-free-solid/faInfoCircle';
import emailModal from '~/components/emailModal';
export default {
  layout: 'home',
  components: {
    FontAwesomeIcon,
    emailModal
  },
  data() {
    return {
      emailModalShow: false,
      infoCircle
    };
  },
  methods: {
    sayHello() {
      this.emailModalShow = true;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  padding: 32px;
  background-color: $primary-faint;
}
#topSection,
#bottomSection {
  display: grid;
  grid-template-columns: 1fr 40vh 1fr;
  grid-auto-rows: 1fr 10vh 1fr;
  padding: 0;
  background: rgba(0, 0, 0, 0);
}
#topSection {
  #topFiller {
    grid-row: 1;
    grid-column: 1 / 4;
    background-color: $primary-faint;
  }
  #leftFiller {
    grid-row: 2 / 4;
    grid-column: 1;
    background-color: $primary-faint;
  }
  #rightFiller {
    grid-row: 2 / 4;
    grid-column: 3;
    background-color: $primary-faint;
  }
}
#bottomSection {
  #leftFiller {
    grid-row: 1 / 4;
    grid-column: 1;
    background-color: $primary-faint;
  }
  #rightFiller {
    grid-row: 1 / 4;
    grid-column: 3;
    background-color: $primary-faint;
  }
  #bottomFiller {
    grid-row: 3;
    grid-column: 1 / 4;
    background-color: $primary-faint;
  }
}
#header {
  display: flex;
  justify-content: space-between;
  padding: 32px 32px 0 32px;
  .lgIcon {
    height: 3em;
    width: 3em;
    color: $primary-bold;
  }
  .button {
    background-color: $primary-faint;
    color: $primary-bold;
    border-color: $primary-bold;
  }
  .button:hover {
    background-color: $primary-bold;
    color: $primary-faint;
  }
}
.container.welcome,
.container.CTA {
  max-width: 650px;
  display: flex;
  align-content: center;
  padding-bottom: 8px;
  display: flex;
  h1 {
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    font-family: 'Comfortaa', cursive;
    width: 100%;
  }
}
.container.welcome {
  align-items: center;
}
.container.CTA {
  align-items: flex-start;
}
.bold {
  background-color: $primary-bold;
  border: 24px solid $primary-bold;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  div {
    border-radius: 10px;
    width: 30%;
    padding-bottom: 30%;
    background-color: $primary-faint;
  }
}
.tri_boxes {
  h1 {
    color: $primary-bold;
    text-align: center;
    width: 100%;
  }
}
</style>


