<template>
  <product :id="idCategory" />
</template>

<script>
export default {
  data() {
    return {
      idCategory: null,
    };
  },
  mounted() {
    console.log(this.idCategory);
  },
  watch: {
    "$route.query": {
      handler: function (value) {
        if (value.id) {
          this.idCategory = value.id;
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style>
</style>