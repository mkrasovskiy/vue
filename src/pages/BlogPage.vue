<template>
  <BlogBanner/>
  <BlogArticlesWrp/>
</template>

<script>
import BlogBanner from '@/components/BlogBanner.vue';
import BlogArticlesWrp from '@/components/BlogArticlesWrp.vue';

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
      BlogArticlesWrp
     }
};
</script>

<style lang="scss" scoped>

</style>
