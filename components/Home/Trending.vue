<template>
  <div class="trending">
    <div class="trending__wrap container">
      <div class="title__wrap">
        <h2 class="title">TRENDING</h2>
        <p class="slogan">Những mẫu thời trang nổi bật nhất của chúng tôi</p>
      </div>
      <CommonSlideModel
        :is-show-sale="isShowSale"
        :custom-class="customClass"
        :slide-per-view="slidePerView"
        :slide-data="data_trending"
      />
    </div>
  </div>
</template>

<script>
import { TRENDING } from "@data";
export default {
  data() {
    return {
      slidePerView: 3,
      isShowSale: false,
      data_trending: TRENDING,
      customClass: "trending-slide",
    };
  },
};
</script>

<style scoped lang="scss">
.trending {
  padding: 80px 0;
  &__wrap {
    .title__wrap {
      text-align: center;
      margin-bottom: 30px;
      .title {
        font-weight: 600;
        font-size: 32px;
        line-height: 43px;
        margin-bottom: 10px;
      }
      .slogan {
        font-size: 14px;
        line-height: 21px;
        color: #7d7d7d;
      }
    }
  }
}
</style>
