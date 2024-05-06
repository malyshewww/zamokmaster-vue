<template lang="pug">
  Layout
</template>

<script>
import { useMeta } from 'vue-meta'
import Layout from './layouts/BaseLayout.vue'

export default {
  // setup() {
  //   useMeta({
  //     title: '',
  //     htmlAttrs: { lang: 'ru', amp: true }
  //   })
  // },
  components: {
    Layout
  },
  data() {
    return {}
  },
  methods: {},
  watch() {},
  mounted() {
    console.log('app')
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
