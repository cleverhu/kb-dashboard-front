<template>
  <div>
    <span>Hello world</span>
  </div>
</template>

<script>
export default {
  name: "MangerSourceKb",
  data() {
    return {
      kb_id: 0,
    }
  },
  methods: {
    cloneObjectFn(obj) {
      return JSON.parse(JSON.stringify(obj))
    },
  },
  mounted() {
    this.kb_id = this.$route.query.id
  },
  watch: {
    $route: {
      handler(val) {
        this.kb_id = this.$route.query.id
      },
    }

  }
}
</script>

<style>
</style>
