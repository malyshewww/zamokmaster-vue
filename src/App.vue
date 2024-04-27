<template lang="pug">
  Layout
</template>

<script>
import Layout from './layouts/BaseLayout.vue'

export default {
  components: {
    Layout
  },
  data() {
    return {}
  },
  methods: {},
  watch() {
    window.addEventListener('storage', function (e) {
      alert('session storage variable value changed')
    })
  },
  mounted() {}
}
</script>
