<template>
  <HomeBanner/>
  <HomeProject/>
  <HomeCounter/>
  <HomeBlog/>
  <FooterComp/>
</template>

<script>
  import HomeBanner from '@/components/HomeBanner.vue';
  import HomeProject from '@/components/HomeProject.vue';
  import HomeCounter from '@/components/HomeCounter.vue';
  import HomeBlog from '@/components/HomeBlog.vue';
  import FooterComp from '@/components/FooterComp.vue';

  export default {
    name: 'HomePage',
    components: {
      HomeBanner,
      HomeProject,
      HomeCounter,
      HomeBlog,
      FooterComp
    },
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    
  };
</script>

<style lang="scss" scoped>

</style>
