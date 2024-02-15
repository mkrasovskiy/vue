<template>
    <section class="blog-details-bunner">
        <img class="blog-details-bunner__img" src="../assets/img/BlogDetailsBunner.jpeg" alt="Bunner" width="1920" height="356">
    </section>
</template>

<script>
export default {
    name: 'BlogDetailsBunner',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .blog-details-bunner {
        margin-bottom: 200px;
        &__img {
            position: relative;
            width: 100%;
            background-size: cover;
        }
    }
</style>