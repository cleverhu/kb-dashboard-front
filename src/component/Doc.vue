<template>
  <div >
    <mavon-editor v-model="value"/>
  </div>

</template>

<script>
export default {
  name: "Doc",
  data() {
    return {
      value: "",
    }
  },
}
</script>

<style scoped>

</style>
