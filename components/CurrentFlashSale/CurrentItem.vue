<template>
  <div class="currentItem" v-if="currentProduct.id">
    <div class="header">
      <p class="title">{{ currentProduct.name }}</p>
      <div class="option">
        <nuxt-link to="/" class="home">Trang chủ</nuxt-link>
        <p class="symbol">/</p>
        <nuxt-link to="/flashsale" class="product">FlashSale</nuxt-link>
        <p class="symbol">/</p>
        <p class="nameproduct">{{ currentProduct.name }}</p>
      </div>
    </div>
    <div class="cloth container">
      <div class="img"><img :src="currentProduct.img" alt="" /></div>
      <div class="information">
        <p class="name">{{ currentProduct.name }}</p>
        <p class="trademark">Thương hiệu: VMMS</p>
        <p class="status">Tình trạng: Còn hàng</p>
        <p class="cost">{{ currentProduct.cost }}</p>
        <p class="current-color">Màu sắc: đen</p>
        <div class="choose-color">
          <div class="color black"></div>
          <div class="color blue"></div>
          <div class="color green"></div>
          <div class="color yellow"></div>
        </div>
        <p class="current-size">Kích cỡ: Size S</p>
        <div class="choose-size">
          <p class="size S">Size S</p>
          <p class="size M">Size M</p>
          <p class="size L">Size L</p>
          <p class="size XL">Size XL</p>
        </div>
        <p class="number">Số lượng: 1</p>
        <div class="button">
          <button class="buynow">
            Mua ngay <i class="fa-solid fa-arrow-right-long arrow"></i>
          </button>
          <button class="addtocart">
            Thêm vào giỏ <i class="fa-solid fa-arrow-right-long arrow"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentProduct: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>

<style scoped lang="scss">
.currentItem {
  .header {
    background-image: url("@imagesCommon/banner_bg.png");
    background-size: cover;
    padding: 80px 0;
    text-align: center;
    margin-bottom: 80px;
    .title {
      font: normal normal 600 32px/43px "Open Sans", sans-serif;
      margin-bottom: 10px;
      text-transform: uppercase;
    }
    .option {
      display: flex;
      align-items: center;
      justify-content: center;
      .home,
      .product {
        font: normal normal normal 14px/19px "Open Sans", sans-serif;
        color: #cb1515;
        margin-right: 8px;
        &:hover {
          text-decoration: underline;
        }
      }
      .symbol {
        margin-right: 8px;
      }
      .nameproduct {
        font: normal normal normal 14px/19px "Open Sans", sans-serif;
        color: #6c757d;
      }
    }
  }
  .cloth {
    display: flex;
    margin-bottom: 80px;
    .img {
      width: 32%;
      margin-right: 30px;
      > img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
    .information {
      .name {
        font: normal normal normal 24px/33px "Open Sans", sans-serif;
        margin-bottom: 10px;
      }
      .trademark,
      .status {
        font: normal normal normal 12px/16px "Open Sans", sans-serif;
        margin-bottom: 10px;
      }
      .cost {
        font: normal normal 600 24px/32px "Open Sans", sans-serif;
        color: #cb1515;
        margin-bottom: 20px;
      }
      .current-color {
        font: normal normal 600 14px/19px "Open Sans", sans-serif;
        margin-bottom: 10px;
      }
      .choose-color {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        .color {
          width: 50px;
          height: 50px;
          margin-right: 15px;
          border-radius: 5px;
          transition: all 0.3s;
          &:hover {
            cursor: pointer;
            border: 1px solid red;
          }
          &:last-child {
            margin-right: 0;
          }
        }
        .black {
          background-color: black;
        }
        .blue {
          background-color: blue;
        }
        .green {
          background-color: green;
        }
        .yellow {
          background-color: yellow;
        }
      }
      .current-size {
        font: normal normal 600 14px/19px "Open Sans", sans-serif;
        margin-bottom: 10px;
      }
      .choose-size {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        .size {
          padding: 7px 15px;
          background-color: #cb151529;
          border-radius: 6px;
          margin-right: 10px;
          transition: all 0.3s;
          &:hover {
            cursor: pointer;
            background-color: red;
          }
        }
      }
      .number {
        font: normal normal normal 14px/19px "Open Sans", sans-serif;
        margin-bottom: 30px;
      }
      .button {
        display: flex;
        align-items: center;
        .buynow,
        .addtocart {
          padding: 13px 60px;
          border: 1px solid black;
          border-radius: 6px;
        }
        .buynow {
          font: normal normal 600 16px/22px "Open Sans", sans-serif;
          margin-right: 15px;
          display: flex;
          align-items: center;
          &:hover {
            background-color: lightgreen;
          }
          > i {
            margin-left: 5px;
          }
        }
        .addtocart {
          font: normal normal 600 16px/22px "Open Sans", sans-serif;
          color: white;
          background-color: #cb1515;
          transition: all 0.3s;
          &:hover {
            background-color: lightgreen;
            color: black;
          }
        }
      }
    }
  }
}
</style>
