<template>
  <section class="why-choose">
    <div class="container">
      <h2 class="title">TẠI SAO NÊN CHỌN CHÚNG TÔI?</h2>
      <div class="section-content">
        <div class="item" v-for="whychoose in whychooses" :key="whychoose.id">
          <div class="image">
            <img :src="whychoose.image" alt="" />
          </div>
          <h3>{{ whychoose.title }}</h3>
          <p>{{ whychoose.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { WHYCHOOSE } from "../../sources/data";
export default {
  data() {
    return {
      whychooses: WHYCHOOSE,
    };
  },
};
</script>

<style lang="scss">
.why-choose {
  padding: 80px 0;
  background: url("../../assets/images/AboutUs/why-choose.png") no-repeat;
  background-size: cover;
  .container {
    .title {
      font-size: 32px;
      color: #fff;
      text-align: center;
      font-weight: 500;
      margin-bottom: 30px;
    }
    .section-content {
      display: flex;
      justify-content: space-between;
      column-gap: 30px;
      .item {
        width: 25%;
        padding: 20px;
        border-radius: 20px;
        background: #fff;
        text-align: center;
        .image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: #cb1515;
          padding: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          img {
            width: 100%;
          }
        }
        h3 {
          font-weight: bold;
          font-size: 16px;
          margin: 20px 0 10px;
        }
        p {
          font-size: 14px;
          color: #7d7d7d;
        }
      }
    }
  }
}
</style>