<template>
  <div class="banner">
    <carousel
      :perPage="1"
      :navigationEnabled="true"
      :navigationNextLabel="nextLabel"
      :navigationPrevLabel="prevLabel"
      :paginationActiveColor="'#CB1515'"
    >
      <slide v-for="(item, index) in data_banner" :key="index">
        <div class="slider">
          <div class="slider__wrap container">
            <div class="content">
              <p class="sale">{{ item.sale }}</p>
              <p class="topic">{{ item.topic }}</p>
              <p class="describe">{{ item.describe }}</p>
              <button class="buynow">
                Mua ngay
                <img src="@images/common/arrow.png" alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { BANNER } from "@data";
export default {
  data() {
    return {
      data_banner: BANNER,
      nextLabel: `<div class="label--next"><i class="fa-solid fa-caret-right arrow"></i></div>`,
      prevLabel: `<div class="label--prev"><i class="fa-solid fa-caret-left arrow"></i></div>`,
    };
  },
};
</script>

<style scoped lang="scss">
.banner {
  ::v-deep {
    .label {
      &--prev {
        position: absolute;
        padding: 10px 15px;
        left: 80px;
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
      &--next {
        position: absolute;
        padding: 10px 15px;
        right: 80px;
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
  .slider {
    background-image: url("@images/banner/banner.png");
    background-size: cover;
    padding: 102px 0px;
    background-repeat: no-repeat;
    background-size: cover;
    height: 30vw;
    &__wrap {
      .content {
        max-width: 600px;
        margin-left: auto;
        text-align: center;
        .sale {
          font-weight: 300;
          font-size: 32px;
          line-height: 43px;
          color: #cb1515;
          margin-bottom: 20px;
        }
        .topic {
          font-weight: 600;
          font-size: 40px;
          line-height: 55px;
          color: #000000;
          margin-bottom: 30px;
        }
        .describe {
          max-width: 541px;
          font-size: 0.9vw;
          line-height: 1.188vw;
          color: #000000;
          margin: auto;
          margin-bottom: 30px;
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
