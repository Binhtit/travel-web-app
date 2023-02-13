<template>
  <div>
    <ProductBanner />
    <ProductSelectProduct :currentProduct="item" />
    <ProductDescription />
  </div>
</template>

<script>

import { DATA_COLLECTION } from "@resources/product/data-collection";
export default{
data() {
  return {
    item: {},
    items: DATA_COLLECTION
  }
},
 props: {
  idCategory: {
    type: [String, Number],
    default: null
  },
 },
 mounted () {
  const itemArr = this.items.filter((i) => {
    return i.id == this.idCategory
  })
  if (itemArr.length) {
    this.item = itemArr[0]
  }
 },
}
</script>

<style lang="scss">

</style>
