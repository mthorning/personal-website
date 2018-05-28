<template>
<div class="container">
    <div 
        class="three_cards columns"
        v-for="(el, i) in new Array(rows)"
        v-bind:key="i"
    >
        <div class="card_container column"
            v-for="j in 3"
            v-bind:key="j"
            v-if="getImage(i, j)"
        >
            <image-card 
                v-bind:image="getImage(i, j)"
            />
        </div>
    </div>
</div>
</template>

<script>
import ImageCard from '~/components/ImageCard';
import GalleryConfig from '~/assets/js/gallery-config'

export default {
    components: {
        ImageCard
    },
    computed: {
        images() {
            return GalleryConfig.images;
        },
        rows() {
            return Math.ceil(this.images.length / 3);
        }
    },
    methods: {
        getImage(i, j) {
            return this.images[((i * 3) + j) - 1] || false;
        }
    }
}
</script>

<style lang="scss" scoped>
    .three_cards {
        text-align: center;
    }
    .card_container {
        display: inline-flex;
        margin: auto;
        justify-content: space-between;
    }
</style>

