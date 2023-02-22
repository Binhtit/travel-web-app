<template>
  <div>
    <ProductBanner />
    <ProductSelectProduct :currentProd="item" />
    <ProductDescription />
  </div>
</template>

<script>
import { DATA_COLLECTION } from "@resources/product/data-collection";
export default {
  props: {
    idCategory: {
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
    const arr = this.product.filter((i) => {
      return i.id > 1;
    });
    console.log("arr", arr);
    const itemArr = this.product.filter((i) => {
      return i.id == this.idCategory;
    });
    console.log("idCategory", this.idCategory);
    console.log(itemArr);
    if (itemArr.length) {
      this.item = itemArr[0];
    }
  },
};
</script>

<style lang="scss"></style>
