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
  ::v-deep {
    .label {
      &--next {
        position: absolute;
        padding: 10px 15px;
        top: -70px;
        right: -30px;
        font-weight: 900;
        background-color: #f5f5f5;
        border-radius: 50%;
        transition: all 0.3s;
        &:hover {
          background-color: lightgreen;
        }
      }
      &--prev {
        position: absolute;
        padding: 10px 15px;
        top: -70px;
        left: -30px;
        font-weight: 900;
        background-color: #f5f5f5;
        border-radius: 50%;
        transition: all 0.3s;
        &:hover {
          background-color: lightgreen;
        }
      }
    }
  }
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
    .clothes__wrap {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      .cloth {
        width: 350px;
        margin-left: 50%;
        transform: translateX(-50%);
        border-radius: 10px;
        text-align: center;
        background-color: #ffffff;
        padding-bottom: 15px;
        transition: all 0.4s;
        overflow: hidden;
        &:hover {
          cursor: pointer;
          .add {
            right: 10px;
          }
          > select {
            opacity: 1;
            left: 10px;
          }
          .blur-bg {
            opacity: 0.4;
          }
        }
        > img {
          margin-bottom: 15px;
        }
        .name {
          font-size: 14px;
          line-height: 19px;
          margin-bottom: 10px;
        }
        .cost {
          font-weight: 600;
          font-size: 20px;
          line-height: 27px;
          color: #cb1515;
          margin-bottom: 10px;
        }
        .choose-color {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          .color {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin-right: 5px;
            border: 1px solid brown;
            transition: all 0.3s;
            &:hover {
              cursor: pointer;
              transform: translateY(-5px);
            }
          }
          :last-child {
            margin-right: 0;
          }
          .color--red {
            background-color: red;
          }
          .color--black {
            background-color: black;
          }
          .color--yellow {
            background-color: yellow;
          }
          .color--blue {
            background-color: blue;
          }
          .color--pink {
            background-color: pink;
          }
          .color--gray {
            background-color: gray;
          }
          .color--brown {
            background-color: brown;
          }
          .color--white {
            background-color: white;
          }
          .color--green {
            background-color: green;
          }
        }
        .sale {
          position: absolute;
          background-color: #cb1515;
          top: -245px;
          left: 10px;
          width: 50px;
          padding: 5px;
          color: #ffffff;
          font-size: 12px;
          line-height: 17px;
        }
        .add {
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
          padding: 5px;
          position: absolute;
          top: 305px;
          right: -200px;
          border: 1px solid #ffffff;
          border-radius: 10px;
          background-color: transparent;
          color: #ffffff;
          z-index: 2;
          transition: all 0.3s;
          &:hover {
            background-color: #cb1515;
          }
        }
        > select {
          width: 160px;
          text-align: center;
          font-size: 14px;
          line-height: 19px;
          color: #cb1515;
          position: absolute;
          top: 310px;
          left: -100px;
          padding: 5px;
          border: none;
          border-radius: 10px;
          -webkit-appearance: none;
          text-indent: 1px;
          transition: all 0.3s;
          z-index: 2;
          opacity: 0;
          &:focus {
            border: none;
            outline: none;
          }
          &:hover {
            cursor: pointer;
            background-color: green;
            color: #ffffff;
          }
        }
        .blur-bg {
          width: 350px;
          height: 350px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          background-color: #000000;
          opacity: 0;
          border-radius: 10px;
        }
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
