<template>
  <div >
    <ProductBanner :currentProd="item" />
    <ProductSelectProduct :currentProd="item" />
    <ProductDescription />
  </div>
</template>

<script>
import { DATA_COLLECTION } from "@resources/product/data-collection";
export default {
  props: {
    id_Category: {
      type: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      item: {},
      product: DATA_COLLECTION,
    };
  },
  mounted() {
    const itemArr = this.product.filter((i) => {
      return i.id == this.id_Category;
    });
    if (itemArr.length) {
      this.item = itemArr[0];
    }
  },
};
</script>

<style lang="scss"></style>
