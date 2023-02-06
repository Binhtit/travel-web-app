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
  padding: 80px 0;
  ::v-deep {
    .label {
      &--next {
        position: absolute;
        padding: 10px 15px;
        top: -70px;
        right: -30px;
        font-weight: 900;
        background-color: #ffffff;
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
        background-color: #ffffff;
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
    .clothes__wrap {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      .cloth {
        width: 255px;
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
          .size {
            left: 10px;
            opacity: 1;
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
            border: 1px solid brown;
            margin-right: 5px;
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
        }
        .sale {
          position: absolute;
          background-color: #cb1515;
          top: 10px;
          left: 10px;
          width: 50px;
          padding: 5px;
          color: #ffffff;
          font-size: 12px;
          line-height: 17px;
          border-radius: 2px;
        }
        .add {
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
          padding: 5px;
          position: absolute;
          top: 210px;
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
        .size {
          position: absolute;
          top: 215px;
          left: -100px;
          transition: all 0.3s;
          z-index: 2;
          opacity: 0;
          > select {
            width: 80px;
            text-align: center;
            font-size: 14px;
            line-height: 19px;
            color: #cb1515;
            padding: 5px;
            border: none;
            border-radius: 10px;
            -webkit-appearance: none;
            text-indent: 1px;
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
        }
        .blur-bg {
          width: 255px;
          height: 255px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          background-color: #000000;
          opacity: 0;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
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
.colors {
  display: flex;
  column-gap: 8px;
  .color {
    width: 15px;
    height: 15px;
    &--red {
      background: red;
    }
    &--yellow {
      background: yellow;
    }
    &--black {
      background: black;
    }
  }
}
</style>
