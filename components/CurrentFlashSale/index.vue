<template>
  <div>
    <CurrentItem :currentProduct="cloth" />
  </div>
</template>

<script>
import { FLASH_SALE } from "@data";
export default {
  props: {
    idProd: {
      type: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      cloth: {},
      clothes: FLASH_SALE,
    };
  },
  mounted() {
    const itemArr = this.clothes.filter((i) => {
      return i.id == this.idProd;
    });
    if (itemArr.length) {
      this.cloth = itemArr[0];
    }
  },
};
</script>

<style lang=""></style>
