<template>
  <div class="feedback">
    <carousel
      :perPage="1"
      :navigationEnabled="true"
      :navigationNextLabel="nextLabel"
      :navigationPrevLabel="prevLabel"
      :paginationActiveColor="'#FFFFFF'"
    >
      <slide v-for="(item, index) in data_feedback" :key="index">
        <div class="slider">
          <div class="slider__wrap container">
            <h2 class="title">{{ item.title }}</h2>
            <img :src="item.img" alt="" />
            <p class="describe">{{ item.describe }}</p>
            <img src="@images/feedback/icon.png" alt="" />
            <p class="name">{{ item.name }}</p>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { FEEDBACK } from "@data";
export default {
  data() {
    return {
      data_feedback: FEEDBACK,
      nextLabel: `<div class="label--next"><i class="fa-solid fa-caret-right arrow"></i></div>`,
      prevLabel: `<div class="label--prev"><i class="fa-solid fa-caret-left arrow"></i></div>`,
    };
  },
};
</script>

<style scoped lang="scss">
.feedback {
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
          background-color: green;
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
    background-image: url("@images/feedback/banner.png");
    background-size: cover;
    padding: 80px 0;
    &__wrap {
      text-align: center;
      .title {
        font-weight: 600;
        font-size: 32px;
        line-height: 43px;
        color: #ffffff;
        margin-bottom: 30px;
      }
      > img {
        margin-bottom: 20px;
      }
      .describe {
        max-width: 770px;
        font-size: 14px;
        line-height: 19px;
        color: #ffffff;
        margin: auto;
        margin-bottom: 20px;
      }
      .name {
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: #ffffff;
      }
    }
  }
}
</style>
