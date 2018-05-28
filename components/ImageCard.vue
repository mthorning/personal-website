<template>
<div id="card" class="card">
    <div id="mainImage" class="card-image">
        <figure class="image">
            <img 
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
        image: Object
    },
    computed: {
        title() {
            return this.image.path.split('/').pop().split('.')[0].split('_')
                .join(' ');
        }
    }
}
</script>

<style lang="scss" scoped>
    #card {
        max-width: 350px;
        padding: 10px;
        margin: 10px;
    }
    #mainImage {
        width: 100%;
        height: auto;
        figure {
            min-height: 200px;
            width: 100%;
            height: auto;
        }
        img {
            width: 100%;
            height: 100%;
        }
        
    }
</style>
