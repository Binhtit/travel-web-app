<template>
    <AboutUs />
</template>

<script>
export default {
    middleware: 'authenticated',
  mounted () {
    console.log('run mounted')
    this.$store.commit('add', 'new value')
  },
}
</script>

<style>

</style>