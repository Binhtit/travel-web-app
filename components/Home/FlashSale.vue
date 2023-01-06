<template>
  <div class="flashsale">
    <div class="flashsale__wrap container">
      <div class="title__wrap">
        <img src="../../assets/images/flash-sale.png" alt="flash sale" />
        <p class="title">FLASH SALE</p>
      </div>
      <div class="clothes_list">
        <carousel :perPage="4" :navigationEnabled="true">
          <slide v-for="(item, index) in data_flashsale" :key="index">
            <div class="clothe__wrap">
              <img src="../../assets/images/sample1.png" alt="" />
              <p class="name">{{ item.name }}</p>
              <p class="cost">{{ item.cost }}</p>
              <div class="choose-color">
                <span class="color--1"></span>
                <span class="color--1"></span>
                <span class="color--1"></span>
              </div>
              <div class="sale">{{ item.sale }}</div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { FLASH_SALE } from "../../sources/data";
export default {
  data() {
    return {
      data_flashsale: FLASH_SALE,
    };
  },
};
</script>

<style lang="scss">
.flashsale {
  background-color: #f5f5f5;
  padding: 80px 0;
  &__wrap {
    .title__wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 30px;
      .title {
        font-weight: 600px;
        font-size: 32px;
        line-height: 43px;
        color: #cb1515;
        margin-left: 5px;
      }
    }
  }
}
</style>
