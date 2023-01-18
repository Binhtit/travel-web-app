<template>
  <section class="fashion container">
    <div class="content">
      <h2 class="title">{{ data_fashion.title }}</h2>
      <div class="desc">{{ data_fashion.content }}</div>
    </div>
    <div class="image">
      <img :src="data_fashion.image" alt="">
    </div>
  </section>
</template>

<script>
import { FASHION } from "../../sources/data";

export default {
  data() {
    return {
      data_fashion: FASHION,
    };
  },
};
</script>

<style lang="scss">
.fashion {
  display: flex;
  justify-content: space-between;
  column-gap: 30px;
  padding: 80px 0;
  .content {
    .title {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 30px;
    }
    .desc {
      font-size: 14px;
      text-align: justify;
    }
  }
}
</style>