<template>
  <product :id_Category="idCategory" />
</template>

<script>
export default {
  data() {
    return {
      idCategory: null,
    };
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