<template>
    <p>{{ id }}</p>
</template>

<script>
export default {
     layout: 'photo-view',
     computed: {
         id() {
             return this.$route.params.id;
         }
     }
}
</script>


