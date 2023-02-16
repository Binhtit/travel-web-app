<template>
  <section :class="['slide-model', customClass]">
    <div id="btn" @click="runTmp()"></div>
    <carousel
      class="clothes__wrap"
      :perPage="slidePerView"
      :navigationEnabled="true"
      :navigationNextLabel="nextLabel"
      :navigationPrevLabel="prevLabel"
      :paginationEnabled="false"
    >
      <slide v-for="(item, index) in slideData" :key="index">
        <div class="cloth" @mouseleave="mouseleave('mySelect')">
          <img :src="item.img" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="cost">{{ item.cost }}</p>
          <div class="choose-color">
            <div
              v-for="(color, index) in item.color"
              :key="index"
              :class="`color color--${color}`"
            ></div>
          </div>
          <div v-if="isShowSale" class="sale">{{ item.sale }}</div>
          <p class="add">
            Thêm vào giỏ
            <img src="@images/common/arrow.png" alt="" />
          </p>
          <div class="size">
            <select class="mySelect">
              <option value="xs">Size XS</option>
              <option value="s">Size S</option>
              <option value="m">Size M</option>
              <option value="l">Size L</option>
            </select>
          </div>
          <div class="blur-bg"></div>
        </div>
      </slide>
    </carousel>
  </section>
</template>

<script>
import utils from "@mixins/utils";
export default {
  mixins: [utils],
  props: {
    slideData: {
      type: Array,
      default: [],
    },
    slidePerView: {
      type: Number,
      default: 4,
    },
    isShowSale: {
      type: Boolean,
      default: true,
    },
    customClass: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      nextLabel: `<div class="label--next"><i class="fa-solid fa-caret-right arrow"></i></div>`,
      prevLabel: `<div class="label--prev"><i class="fa-solid fa-caret-left arrow"></i></div>`,
    };
  },
};
</script>
<style scoped lang="scss">
.slide-model {
  ::v-deep {
    .label {
      &--next {
        position: absolute;
        padding: 10px 15px;
        top: -70px;
        right: -70px;
        font-weight: 900;
        background-color: #ffffff;
        border-radius: 50%;
        transition: all 0.3s;
        &:hover {
          background-color: lightgreen;
        }
        .arrow {
          font-size: 20px;
        }
      }
      &--prev {
        position: absolute;
        padding: 10px 15px;
        top: -70px;
        left: -70px;
        font-weight: 900;
        background-color: #ffffff;
        border-radius: 50%;
        transition: all 0.3s;
        &:hover {
          background-color: lightgreen;
        }
        .arrow {
          font-size: 20px;
        }
      }
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
        .color--green {
          background-color: green;
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
        padding: 8px;
        position: absolute;
        top: 205px;
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
        top: 207px;
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
          padding: 8px;
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
  &.trending-slide {
    ::v-deep {
      .label {
        &--next {
          background-color: #f5f5f5;
        }
        &--prev {
          background-color: #f5f5f5;
        }
      }
    }
    .clothes__wrap {
      .cloth {
        width: 350px;
        &:hover {
          .add {
            width: 160px;
            top: 300px;
          }
          .size {
            top: 302px;
            > select {
              width: 160px;
            }
          }
          .blur-bg {
            width: 350px;
            height: 350px;
            border-radius: 10px;
          }
        }
      }
    }
  }
}
</style>
