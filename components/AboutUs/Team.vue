<template>
  <section class="section-team">
    <div class="container">
      <h2 class="title">ĐỘI NGŨ CỦA CHÚNG TÔI</h2>
      <div class="teams">
        <div class="team" v-for="team in teams" :key="team.id">
          <img :src="team.image" alt="" />
          <h3>{{ team.name }}</h3>
          <p>{{ team.position }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { TEAM } from "../../sources/data";

export default {
  data() {
    return {
      teams: TEAM,
    };
  },
};
</script>

<style lang="scss" scoped>
.section-team {
  padding: 80px 0;
  background: url("../../assets/images/AboutUs/bg_team.png") no-repeat;
  background-size: 100%;
  .container {
    .title {
      text-align: center;
      color: #fff;
      margin-bottom: 30px;
    }
    .teams {
      display: flex;
      gap: 30px;
      justify-content: space-between;
      .team {
        width: 25%;
        border-radius: 20px;
        background: #fff;
        padding: 20px;
        text-align: center;
        img {
          width: 149px;
          height: 149px;
          border-radius: 50%;
        }
        h3 {
          font-size: 16px;
          font-weight: bold;
          margin: 20px 0 5px;
        }
        p {
          color: #7d7d7d;
          font-size: 14px;
        }
      }
    }
  }
}
</style>