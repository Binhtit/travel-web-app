<template>
  <div class="container">
    <div class="wrapper-prod  d-flex">
      <div class="carousel">
        <button
          @click.prevent="slidePrev"
          class="btn-up"
        ><img src="@images/product1/arrow down.svg" /></button>
        <button
          @click.prevent="slideNext"
          class="btn-down"
        ><img src="@images/product1/arrow up.svg" /></button>
        <div class="img-prod">
          <hooper
            ref="carousel"
            class="small-img "
            group="1"
            :vertical="true"
            :itemsToShow="6"
            :centerMode="false"
            :infiniteScroll="false"
            :wheelControl="false"
          >
            <slide
              v-for="(item , index ) in product1"
              :key="item.id"
            >
              <img
                @click.prevent="getChoose(index)"
                :class="{active:active_el==item.id}"
                :src="item.img"
                alt="img"
              >
            </slide>
          </hooper>

          <hooper
            ref="carousel_big"
            class="big-img "
            :vertical="true"
            :wheelControl="false"
            group="1"
          >
            <slide
              v-for="item in product1"
              :key="item.id"
            >
              <img
                :src="item.img_big"
                alt="img"
              >
            </slide>
          </hooper>
        </div>
      </div>
      <div class="select-prod">
        <h3 class="title">Áo dệt kim cổ tròn mẫu Hàn Quốc</h3>
        <span class="brand">Thương hiệu: <strong class="brand__name">VMMS</strong></span>
        |
        <span class="status">Tình trạng <strong class="status__prod">Còn hàng</strong></span>
        <p class="price">
          <span class="price__sale">239.000 ₫</span><span class="price__origin">478.000 ₫</span>
        </p>
        <span class="color__text">Màu sắc: <strong class="color__type">{{color}}</strong></span>
        <div class="color__table d-flex">
          <div
            v-for=" (item , index ) in colors"
            :key="item.id"
            class="wrapper__color"
            @click="getColor(index)"
            :class="{active_border:border_el == item.id}"
          >
            <div :class=" [item.color, 'type-color']"></div>
          </div>
        </div>
        <span class="size__text">Kích cỡ: <span class="size__type">{{ size }}</span></span>
        <a
          href="javascript:;"
          class="guide"
        >Hướng dẫn chọn size</a>
        <div class="size__table">
          <div
            v-for=" ( item , index) in sizes"
            @click="getSize(index)"
            :key="item.id"
            :class="{bg:bg_color==item.id}"
            class="size__type"
          >
            <p :class="{color_text:cl_text==item.id}">{{ item.size }}</p>
          </div>
        </div>
        <p class="number">Số lượng:</p>
        <div class="wrapper__number">
          <button
            @click="getDown()"
            class="decrease"
          >
            <font-awesome-icon
              class="decrease__icon"
              icon="fa-solid fa-minus"
            />
          </button>
          <input
            type="number"
            class="number__input"
            v-model="number"
          >
          <button
            @click="getUp()"
            class="increase"
          >
            <font-awesome-icon
              class="increase__icon"
              icon="fa-solid fa-plus"
            />
          </button>
        </div>
        <button class="buy__now">Mua ngay</button>
        <button class="add__cart">Thêm vào giỏ</button>
      </div>
    </div>
    <div class="wrapper d-flex align-items-center justify-content-between">
      <div class="sharing">
        <p class="text">Chia sẻ:</p>
        <div class="sharing__social d-flex">
          <div class="wrapper-img">
            <img
              src="@images/product1/fb.svg"
              alt=""
              class="fb"
            >
          </div>
          <div class="wrapper-img"><img
              src="@images/product1/ig.svg"
              alt=""
              class="ig"
            ></div>
          <div class="wrapper-img"><img
              src="@images/product1/tt.svg"
              alt=""
              class="twitter"
            ></div>
          <div class="wrapper-img"><img
              src="@images/product1/printest.svg"
              alt=""
              class="printerest"
            >
          </div>
        </div>
      </div>
      <div class="contact-prod d-flex align-items-center justify-content-left">
        <div class="contact__icon">
          <img
            src="@images/product1/contact.svg"
            alt="icon"
            class="icon"
          >
        </div>
        <div class="contact-prod__info">
          <p class="contact-prod__info--timeline">Đặt mua qua hotline (8:00 - 20:30)</p>
          <strong class="contact-prod__info--phone-number">0962.180.180</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DATA_PRODUCT1 } from "../../resources/product/data-product1";
import { DATA_COLOR } from "../../resources/product/data-color";
import { DATA_SIZE } from "../../resources/product/data-size";

import { Hooper, Slide } from "hooper";
export default {
  data() {
    return {
      product1: DATA_PRODUCT1,
      colors: DATA_COLOR,
      sizes: DATA_SIZE,
      carouselData: 0,
      color: "black",
      size: "size s",
      value: "",
      bg_color: 1,
      active_el: 1,
      border_el: 1,
      number: 0,
      cl_text: 1,
    };
  },
  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData);
    },
  },
  components: {
    Hooper,
    Slide,
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    getChoose(idx) {
      for (let i = 0; i < 10; ++i) {
        if (idx === i) {
          this.active_el = ++i;
          this.$refs.carousel.slideTo(idx);
        }
      }
    },
    getColor(idx) {
      if (idx === this.colors[idx].id - 1) {
        this.color = this.colors[idx].color;
        this.border_el = idx + 1;
      }
    },
    getSize(idx) {
      if (idx === this.sizes[idx].id - 1) {
        this.size = this.sizes[idx].size;
        this.bg_color = idx + 1;
        this.cl_text = idx + 1;
        console.log(this.bg_color);
      }
    },
    getUp() {
      this.number = this.number + 1;
    },
    getDown() {
      if (this.number > 0) {
        this.number = this.number - 1;
      }
    },
  },
};
</script>

<style  lang="scss">
.wrapper-prod {
  @include tablet {
    font-size: 8px;
  }
  .carousel {
    position: relative;
    .btn-up,
    .btn-down {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 30px;
      background-color: $white;
      border: 1px solid $black;
      transform: rotate(-90deg);
      cursor: pointer;
      z-index: 2;
    }
    .btn-up {
      top: 1em;
      left: 3.5em;
    }
    .btn-down {
      bottom: 3em;
      left: 3.5em;
    }
    .img-prod {
      display: grid;
      grid-template-columns: auto auto;
      column-gap: 10px;
      .small-img {
        .hooper-list {
          width: 100%;
          height: 47.4em;
          overflow: hidden;
          .hooper-slide {
            height: 11em !important;
            img {
              cursor: pointer;
              width: 10em;
              height: 10em;
            }
          }
          .active {
            border: 2px solid red;
            border-radius: 7px;
          }
        }
      }
      .big-img {
        .hooper-list {
          width: 100%;
          height: 47.4em;
          overflow: hidden;
          .hooper-slide {
            height: 100%!important;
            img {
              cursor: pointer;
              width: 52.5em;
              height: 47.4em;
            }
          }
        }
      }
    }
  }
}
.select-prod {
  margin-left: 2rem;
  .title {
    font-size: 2.4em;
    line-height: 3.3rem;
    color: $black;
    padding-bottom: 1rem;
  }
  .brand,
  .status {
    font-size: 1.2em;
    line-height: 1.6em;
    color: #7d7d7d;
    margin-bottom: 2em;
    &__name,
    &__prod {
      font-size: 1.2em;
      line-height: 1.6em;
      font-weight: 600;
      color: #cb1515;
    }
    &__prod {
      color: #169e30;
    }
  }
  .price {
    margin: 2rem 0;
    position: relative;
    &__sale {
      font-size: 2.4em;
      line-height: 3.2rem;
      font-weight: 600;
      color: #cb1515;
      margin-right: 2rem;
    }
    &__origin {
      color: #7d7d7d;
      font-size: 1.2em;
      line-height: 1.6rem;
      position: absolute;
      top: 1rem;
      text-decoration: line-through;
    }
  }
  .color__text,
  .size__text,
  .number {
    @include text_14px;
  }
  .color__type,
  .size__type {
    color: $black;
    text-transform: capitalize;
    font-weight: 600;
  }
  .color__table {
    margin: 1rem 0 2rem;
  }
  .wrapper__color {
    margin-right: 1rem;
    position: relative;
    width: 5em;
    height: 5em;
    &:hover {
      border: 2px solid red;
    }
  }
  .type-color {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4.5em;
    height: 4.5em;
    cursor: pointer;
  }
  .active_border {
    border: 2px solid red;
  }
  .black {
    background-color: $black;
  }
  .green {
    background-color: green;
  }
  .red {
    background-color: red;
  }
  .yellow {
    background-color: yellow;
  }
  .guide {
    text-decoration: underline;
    margin-left: 3rem;
    font-size: 1.4em;
    line-height: 1.9rem;
    color: #2e95fc;
  }
  .size__table {
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-gap: 2rem;
    margin: 1rem 0 2rem;
    .size__type {
      cursor: pointer;
      p {
        @include text-14px;
        text-align: center;
        border: 1px solid gray;
        padding: 7px;
        border-radius: 5px;
      }
    }
    .bg {
      background-color: #cb151529;
      color: $black;
      .color_text {
        color: $black;
      }
    }
  }
  .wrapper__number {
    background: #f5f5f5;
    border-radius: 6px;
    width: 12.2rem;
    height: 3.8em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 2rem;
    .increase,
    .decrease {
      border: none;
      background: none;
      &__icon {
        width: 1.2em;
        height: 1.2em;
      }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .number__input {
      border: none;
      width: 4.8em;
      -webkit-appearance: none;
      background: #f5f5f5;
      text-align: center;
      font-size: 1.6em;
      line-height: 2.2rem;
      &:focus {
        outline: none !important;
      }
    }
  }
  .buy__now,
  .add__cart {
    padding: 1.3rem 5.8rem;
    border: 1px solid $black;
    border-radius: 6px;
    background-color: $white;
    font-size: 1.6em;
    line-height: 2.2rem;
    font-weight: 600;
    transition: all 0.5s;
    @include tablet {
      width: 100%;
    }
  }
  .buy__now:hover {
    background: #cb1515;
    color: $white;
    border: 1px solid $white;
    opacity: 0.8;
  }
  .add__cart {
    background: #cb1515;
    color: $white;
    margin-left: 2rem;
    border: none;
    @include tablet {
      width: 100%;
      margin-left: 0;
      margin-top: 1rem;
    }
    &:hover {
      opacity: 0.8;
    }
  }
}
.sharing {
  .text {
    @include text_14px;
  }
  &__social {
    .wrapper-img {
      cursor: pointer;
      margin-right: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.8em;
      height: 3.8em;
      border-radius: 3.8rem;
      border: 1px solid #7d7d7d;
      transition: all 0.5s;
      &:hover {
        background: (#7d7d7d, transparent);
        opacity: 0.5;
      }
    }
  }
}
.contact-prod {
  margin-top: 3rem;
  &__icon {
    margin-right: 1rem;
  }
  &__info {
    &--timeline {
      @include text_14px;
    }
    &--phone-number {
      font-size: 2.4em;
      line-height: 3.2rem;
    }
  }
}
</style>