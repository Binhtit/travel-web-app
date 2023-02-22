<template>
  <div>
    <CurrentFlashSale :idProd="idProduct" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      idProduct: null,
    };
  },
  watch: {
    "$route.query": {
      handler: function (value) {
        if (value.id) {
          this.idProduct = value.id;
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang=""></style>
