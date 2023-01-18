<template>
  <div class="blog container">
    <h2 class="title">BLOG</h2>
    <p class="sub-title">Những tin tức mới nhất về thời trang VMMS</p>
    <div class="options">
      <div class="opt" v-for="(item, index) in data_blog" :key="index">
        <img :src="item.img" alt="" />
        <p class="opt__title">{{ item.title }}</p>
        <p class="date">{{ item.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { BLOG } from "@data";
export default {
  data() {
    return {
      data_blog: BLOG,
    };
  },
};
</script>

<style scoped lang="scss">
.blog {
  padding: 80px 0;
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
    text-align: center;
    margin-bottom: 30px;
  }
  .options {
    display: grid;
    grid-template-columns: 350px 350px 350px;
    column-gap: calc((100% - 350px * 3) / 2);
    .opt {
      position: relative;
      transition: all 0.3s;
      &:hover {
        cursor: pointer;
      }
      > img {
        margin-bottom: 15px;
      }
      &__title {
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
      }
      .date {
        position: absolute;
        width: 36px;
        top: 10px;
        left: 10px;
        background-color: #ffffff;
        padding: 10px;
        font-size: 14px;
        line-height: 19px;
        border-radius: 2px;
      }
    }
  }
}
</style>
