<template>
  <section class="container partner">
    <h2 class="title">ĐỐI TÁC CỦA CHÚNG TÔI</h2>
    <div class="partner-logo">
      <carousel
        :perPage="6"
        :wrap-around="true"
        :navigationEnabled="true"
        :navigationNextLabel="nextLabel"
        :navigationPrevLabel="prevLabel"
        :paginationEnabled="false"
      >
        <slide v-for="logo in data_partner" :key="logo.id">
          <div class="image"><img :src="logo.logo" alt="" /></div>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import { PARTNER } from "../../sources/data.js";
import arrowLeft from "@imagesCommon/arrow-left.png";
import arrowRight from "@imagesCommon/arrow-right.png";

export default {
  data() {
    return {
      data_partner: PARTNER,
      nextLabel: `<div class="btn-nav label--next"><img src="${arrowRight}" alt="arrow" /></div>`,
      prevLabel: `<div class="btn-nav label--prev"><img src="${arrowLeft}" alt="arrow" /></div>`,
    };
  },
};
</script>

<style lang="scss" scoped>
.partner {
  padding: 80px 0;
  .title {
    text-align: center;
    margin-bottom: 30px;
  }
  ::v-deep {
    .btn-nav {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #f5f5f5;
      cursor: pointer;
    }
  }
}
</style>