<template>
  <div class="flashsale">
    <div class="flashsale__wrap container">
      <div class="title__wrap">
        <img src="@images/flashsale/flash-sale.png" alt="flash sale" />
        <h2 class="title">FLASH SALE</h2>
      </div>
      <CommonSlideModel
        :is-show-sale="isShowSale"
        :slide-per-view="slidePerView"
        :slide-data="data_flashsale"
      />
      <button class="see-all">
        Xem tất cả <img src="@images/common/arrow.png" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
import { FLASH_SALE } from "@data";
import arrowLeft from "@images/Common/arrow-left.png";
import arrowRight from "@images/Common/arrow-right.png";
export default {
  data() {
    return {
      slidePerView: 4,
      isShowSale: true,
      data_flashsale: FLASH_SALE,
      nextLabel: `<div class="label--next"><img src="${arrowRight}" alt="arrow" /></div>`,
      prevLabel: `<div class="label--prev"><img src="${arrowLeft}" alt="arrow" /></div>`,
    };
  },
  methods: {
    addList() {
      this.$store.commit("add", "new list");
    },
  },
};
</script>

<style scoped lang="scss">
.flashsale {
  background-color: #f5f5f5;
  &__wrap {
    padding: 80px 0;
    .title__wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 30px;
      .title {
        font-weight: 600;
        font-size: 32px;
        line-height: 43px;
        color: #cb1515;
        margin-left: 5px;
      }
    }
    .see-all {
      padding: 8px 20px;
      border-radius: 10px;
      background-color: #cb1515;
      color: #ffffff;
      margin-left: 50%;
      transform: translateX(-50%);
      transition: all 0.3s;
      > img {
        margin-left: 10px;
      }
      &:hover {
        background-color: green;
        color: #ffffff;
      }
    }
  }
}
</style>
