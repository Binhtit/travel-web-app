<template>
  <div class="suggest">
    <div class="suggest__wrap container">
      <h2 class="title">Gợi ý hôm nay</h2>
      <p class="sub-title">
        Chúng tôi gợi ý cho bạn những mẫu thời trang mới nhất
      </p>
      <div class="options">
        <p class="opt">Áo thun</p>
        <p class="opt">Áo sơ mi</p>
        <p class="opt">Túi xách</p>
        <p class="opt">Ví cầm tay</p>
        <p class="opt">Khăn choàng</p>
      </div>
      <div class="clothes">
        <div class="item" v-for="(item, index) in data_suggest" :key="index">
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
          <p class="sale" v-if="item.sale">{{ item.sale }}</p>
          <p class="unavailable" v-if="item.unavailable">
            {{ item.unavailable }}
          </p>
          <button class="add" :disabled="item.unavailable == '' ? true : false">
            Thêm vào giỏ
            <img src="@images/common/arrow.png" alt="" />
          </button>
          <div class="size">
            <select>
              <option value="xs">Size XS</option>
              <option value="s">Size S</option>
              <option value="m">Size M</option>
              <option value="l">Size L</option>
            </select>
          </div>
          <div class="blur-bg"></div>
        </div>
      </div>
      <button class="see-all">
        Xem tất cả <img src="@images/common/arrow.png" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
import { SUGGEST } from "@data";
export default {
  data() {
    return {
      data_suggest: SUGGEST,
    };
  },
};
</script>

<style scoped lang="scss">
.suggest {
  padding: 80px 0;
  &__wrap {
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
    .options {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 30px;
      .opt {
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        padding: 13px 45px;
        border: 1px solid #000000;
        border-radius: 6px;
        transition: all 0.3s;
        &:hover {
          cursor: pointer;
          border: 1px solid #cb1515;
          color: #cb1515;
        }
      }
    }
    .clothes {
      display: grid;
      grid-template-columns: 255px 255px 255px 255px;
      column-gap: calc((100% - 255px * 4) / 3);
      row-gap: 30px;
      margin-bottom: 30px;
      .item {
        text-align: center;
        position: relative;
        overflow: hidden;
        transition: all 0.3s;
        &:hover {
          cursor: pointer;
          .add {
            right: calc((100% - 134px) / 2);
          }
          .size {
            left: calc((100% - 100px) / 2);
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
        .unavailable {
          display: inline-block;
          font-size: 12px;
          line-height: 17px;
          padding: 5px 10px;
          background-color: #000000;
          border-radius: 2px;
          color: #ffffff;
          position: absolute;
          top: 10px;
          left: 10px;
        }
        .add {
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
          padding: 5px;
          position: absolute;
          top: 210px;
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
          top: 170px;
          left: -100px;
          transition: all 0.3s;
          z-index: 2;
          > select {
            width: 100px;
            text-align: center;
            font-size: 14px;
            line-height: 19px;
            color: #cb1515;
            padding: 5px;
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
    .see-all {
      padding: 8px 20px;
      border-radius: 10px;
      background-color: #cb1515;
      color: #ffffff;
      margin-left: 50%;
      transform: translateX(-50%);
      transition: all 0.3s;
      > img {
        margin-left: 10px;
      }
      &:hover {
        background-color: green;
        color: #ffffff;
      }
    }
  }
}
</style>
