<template>
  <section class="introduce">
    <div class="container">
      <div class="item" v-for="introduce in introduces" :key="introduce.id">
        <div class="content">
          <h2 class="content-title">{{ introduce.title }}</h2>
          <p class="content-desc">{{ introduce.desc }}</p>
        </div>
        <div class="image">
          <img :src="introduce.image" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { INTRODUCE } from "../../sources/data";
export default {
  data() {
    return {
      introduces: INTRODUCE,
    };
  },
};
</script>

<style lang="scss">
.introduce {
  background: #fbfbfb;
  padding: 80px 0;
  .container {
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      column-gap: 30px;
      margin-bottom: 30px;
      .image {
        width: 50%;
        img {
          width: 100%;
        }
      }
      .content {
        width: 50%;
        .content-title {
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 30px;
        }
        .content-desc {
          color: #7d7d7d;
          font-size: 14px;
        }
      }
      &:nth-child(even) {
        flex-direction: row-reverse;
      }
    }
  }
}
</style>