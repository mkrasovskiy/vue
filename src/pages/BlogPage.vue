<template>
  <BlogBanner/>
  <BlogArticles/>
</template>

<script>
import BlogBanner from '@/components/BlogBanner.vue';
import BlogArticles from '@/components/BlogArticles.vue';

  export default {
    name: 'BlogPage',
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { 
      BlogBanner,
      BlogArticles
     }
};
</script>

<style lang="scss" scoped>

</style>
