<template>
    <BlogDetailsBunner/>
    <BlogDetailsContent/>
    <FooterComp/>
</template>

<script>
import BlogDetailsBunner from '@/components/BlogDetailsBunner.vue';
import BlogDetailsContent from '@/components/BlogDetailsContent.vue';
import FooterComp from '@/components/FooterComp.vue';

export default {
    name: 'VueBlogDetailsPage',
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { 
        BlogDetailsBunner, 
        BlogDetailsContent, 
        FooterComp 
    }
};
</script>

<style lang="scss" scoped>

</style>