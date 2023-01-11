<template>
  <div class="sale-50percent">
    <div class="banner">50% OFF</div>
    <div
      class="product container"
      v-for="(item, index) in data_sale"
      :key="index"
    >
      <div class="item" v-if="index % 2 == 0">
        <div class="info">
          <h2 class="name">{{ item.name }}</h2>
          <p class="describe">{{ item.describe }}</p>
          <button class="buynow">
            Mua ngay <img src="@images/common/arrow.png" alt="" />
          </button>
        </div>
        <div class="image">
          <img
            v-for="(image, index) in item.img"
            :key="index"
            :src="image"
            alt=""
          />
        </div>
      </div>
      <div class="item" v-if="index % 2 == 1">
        <div class="image">
          <img
            v-for="(image, index) in item.img"
            :key="index"
            :src="image"
            alt=""
          />
        </div>
        <div class="info">
          <h2 class="name">{{ item.name }}</h2>
          <p class="describe">{{ item.describe }}</p>
          <button class="buynow">
            Mua ngay <img src="@images/common/arrow.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SALE_50PERCENT } from "../../sources/data";
export default {
  data() {
    return {
      data_sale: SALE_50PERCENT,
    };
  },
};
</script>

<style lang="scss">
.sale-50percent {
  padding-bottom: 80px;
  .banner {
    background-image: url("@images/sale50percent/banner.png");
    padding: 100px 0;
    text-align: center;
    font-style: italic;
    font-size: 40px;
    line-height: 55px;
    color: #ffffff;
  }
  .product {
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 80px;
      .info {
        max-width: 350px;
        .name {
          font-weight: 600;
          font-size: 32px;
          line-height: 43px;
          margin-bottom: 30px;
        }
        .describe {
          font-size: 14px;
          line-height: 19px;
          margin-bottom: 30px;
          color: #7d7d7d;
        }
        .buynow {
          padding: 13px 30px;
          background-color: #cb1515;
          color: #ffffff;
          border-radius: 6px;
          transition: all 0.3s;
          &:hover {
            background-color: green;
          }
        }
      }
    }
  }
}
</style>
