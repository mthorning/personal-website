<template>
<div 
  v-bind:class="['modal', {'is-active': modalShow}]"
  @click="modalClick"
>
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
    <button
      @click.stop="modalClick" 
      class="modal-close is-large" 
      aria-label="close"
    ></button>
</div>
</template>

<script>
import FontAwesomeIcon from '@fortAwesome/vue-fontawesome';
import envelopeIcon from '@fortAwesome/fontawesome-free-solid/faEnvelope';
export default {
  name: 'emailModal',
  props: ['modalShow'],
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      envelopeIcon
    };
  },
  methods: {
    modalClick(e) {
      if (
        e.target.className === 'modal-background' ||
        e.target.classList.contains('modal-close')
      ) {
        this.$emit('email-close')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#emailModalIcon {
  height: 3em;
  width: 3em;
}
</style>

