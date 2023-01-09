<template>
  <section>
    <div class="container ">
      <div class="navBar d-flex align-items-center">
        <div class="list-prod d-flex  align-items-center">
          <a href="javascript:;"><img
              src="~assets/images/navbar/hamburger.png"
              alt=""
            ></a>
          <span>Danh mục sản phẩm</span>
        </div>
        <ul class="d-flex align-items-center">
          <li
            v-for="item in content"
            :key="item.id"
          ><a :href="item.link">{{item.content}}</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { DATA_NAVBAR } from "../../resources/data-navbar";
export default {
  data() {
    return {
      content: DATA_NAVBAR,
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  background: #f5f5f5;
  .navBar {
    .list-prod {
      padding: 15px 77px 15px 30px;
      background: #000000;
      margin-right: 120px;
      span {
        margin-bottom: 0;
        color: #ffffff;
        font-size: 14px;
        height: 19px;
        padding-left: 10px;
      }
    }
    ul {
      margin-bottom: 0;
      li {
        list-style: none;
        margin-right: 30px;
        &:last-child {
          margin-right: 0;
        }
        a {
          color: #000000;
          font-size: 14px;
          height: 19px;
          transition: all 0.5s;
          text-decoration: none;
          &:hover {
            color: #cb1515;
          }
        }
      }
    }
  }
}
</style>