<template>
  <div class="trademark">
    <div class="trademark__list container">
      <h2 class="title">THƯƠNG HIỆU HÀNG ĐẦU</h2>
      <p class="sub-title">
        Những thương hiệu thời trang nổi tiếng hợp tác với chúng tôi
      </p>
      <carousel
        class="trademark__wrap"
        :perPage="6"
        :navigationEnabled="true"
        :navigationNextLabel="nextLabel"
        :navigationPrevLabel="prevLabel"
        :paginationEnabled="false"
      >
        <slide v-for="(item, index) in data_trademark" :key="index">
          <div class="item">
            <img :src="item.img" alt="" />
            <p class="name">{{ item.name }}</p>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { TRADEMARK } from "@data";

export default {
  data() {
    return {
      data_trademark: TRADEMARK,
      nextLabel: `<div class="label--next"><i class="fa-solid fa-caret-right arrow"></i></div>`,
      prevLabel: `<div class="label--prev"><i class="fa-solid fa-caret-left arrow"></i></div>`,
    };
  },
};
</script>

<style scoped lang="scss">
.trademark {
  background-color: #f5f5f5;
  padding: 80px 0;
  ::v-deep {
    .label {
      &--next {
        position: absolute;
        padding: 10px 15px;
        top: -40px;
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
        top: -40px;
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
  .title {
    font-weight: 600;
    font-size: 32px;
    line-height: 43px;
    text-align: center;
    margin-bottom: 10px;
  }
  .sub-title {
    font-size: 14px;
    line-height: 19px;
    color: #7d7d7d;
    margin-bottom: 30px;
    text-align: center;
  }
  &__wrap {
    .item {
      text-align: center;
      > img {
        margin-bottom: 15px;
      }
      .name {
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
      }
    }
  }
}
</style>
