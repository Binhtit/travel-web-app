<template>
  <header class="header">
    <div class="header__top">
      <div
        class="top__wrap container"
        v-for="(item, index) in data_common"
        :key="index"
      >
        <div class="phone__group">
          <img src="@images/header/phone.png" alt="phone_icon" />
          <p class="phone">{{ item.phoneHeader }}</p>
        </div>
        <div class="mail__group">
          <img src="@images/header/mail.png" alt="mail_icon" />
          <p class="mail">{{ item.mail }}</p>
        </div>
        <div class="time__group">
          <img src="@images/header/clock.png" alt="clock_icon" />
          <p class="time">
            {{ item.timeOpen }}
          </p>
        </div>
        <div class="language__group">
          <select>
            <option value="vie">Tiếng Việt</option>
            <option value="eng">English</option>
          </select>
        </div>
      </div>
    </div>
    <div class="header__mid">
      <div class="mid__wrap container">
        <a href="/" class="brand">
          <img src="@images/header/brand.png" alt="logo_brand" />
        </a>
        <div class="search__group">
          <input
            class="search"
            type="text"
            placeholder="Nhập từ khóa tìm kiếm..."
          />
          <button class="search__btn">
            <img src="@images/header/search.png" alt="search" />
          </button>
        </div>
        <div class="user__group">
          <button class="user__btn">
            <img src="@images/header/user.png" alt="user" />
          </button>
          <p class="user">Tài khoản</p>
          <a class="signin-up" @click="isShowLogin = !isShowLogin"
            >Đăng nhập / Đăng ký</a
          >
          <div class="form-login" v-show="isShowLogin">
            <div class="background-blur"></div>
            <div class="inner-form">
              <div class="logo">
                <img src="../../assets/images/header/brand.png" alt="" />
              </div>
              <form action="">
                <div class="form-group">
                  <label class="form-label">Email đăng ký</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Nhập email"
                  />
                </div>
                <div class="form-group">
                  <label class="form-label">Mật khẩu</label>
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    placeholder="Nhập mật khẩu"
                  />
                </div>
                <div class="form-group">
                  <label class="form-label">Xác nhận mật khẩu</label>
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    placeholder="Nhập lại mật khẩu"
                  />
                </div>
                <div class="form-group agree d-flex align-items-center">
                  <input type="checkbox" name="" id="" checked />
                  <label class="mb-0" for=""
                    >Tôi đã đọc và đồng ý <a href="#">Điều khoản sử dụng</a> và
                    <a href="#">Chính sách bảo mật tại VMMS</a></label
                  >
                </div>
                <div class="form-group">
                  <button class="btn-login">
                    Đăng ký
                    <img
                      src="../../assets/images/header/button-arrow-right.svg"
                      alt=""
                    />
                  </button>
                </div>
              </form>
              <p class="had-acc">
                Bạn đã có tài khoản? <a href="#">Đăng nhập</a>
              </p>
              <div class="icon-close" @click="isShowLogin = !isShowLogin">
                <img src="../../assets/images/header/icon-close.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <nuxt-link to="/cart" class="cart__group">
          <button class="cart__btn">
            <img src="@images/header/cart.png" alt="cart" />
            <div class="cart-count">{{ numCart }}</div>
          </button>
          <p class="cart">Giỏ hàng: {{ numCart }} sp</p>
          <p class="total-cost">0 đ</p>
        </nuxt-link>
      </div>
    </div>
    <div class="header__bot">
      <div class="bot__wrap container">
        <div @mouseover="onOver()" @mouseleave="onLeave()">
          <b-dropdown
            no-caret
            id="dropdown-1"
            text="Dropdown Button"
            ref="dropdown"
          >
            <template #button-content>
              <div class="menu__group">
                <img src="@images/header/menu.png" alt="menu" />
                <span class="menu">Danh mục sản phẩm</span>
              </div>
            </template>
            <b-dropdown-item
              active-class="active"
              v-for="item in list"
              :key="item.id"
              :to="item.page"
            >
              <div
                class="drop-item d-flex align-items-center justify-content-between"
              >
                <span class="drop-item__text">{{ item.prod }}</span>
                <font-awesome-icon
                  class="chevron-right"
                  icon="fa-solid fa-chevron-right"
                />
              </div>
            </b-dropdown-item>
          </b-dropdown>
        </div>
        <nuxt-link to="/">Trang chủ</nuxt-link>
        <nuxt-link to="/about-us">Về chúng tôi</nuxt-link>
        <nuxt-link to="/collection">Sản phẩm</nuxt-link>
        <a class="questions" href="#">Câu hỏi thường gặp</a>
        <a class="support" href="#">Hướng dẫn mua hàng</a>
        <a class="news" href="#">Tin tức</a>
        <a class="contact" href="#">Liên hệ</a>
      </div>
    </div>
  </header>
</template>

<script>
import { DATA_LIST_PRODUCT } from "../../resources/navbar/data-listProduct";
import { COMMON } from "@data";
export default {
  data() {
    return {
      data_common: COMMON,
      list: DATA_LIST_PRODUCT,
      listProd: false,
      isShowLogin: false,
      isShowLogin: false,
    };
  },
  methods: {
    onOver() {
      this.$refs.dropdown.visible = true;
    },
    onLeave() {
      this.$refs.dropdown.visible = false;
    },
  },
  computed: {
    numCart() {
      return this.$store.state.cart.length;
    },
  },
};
</script>

<style lang="scss">
.header {
  font-size: 12px;
  line-height: 16px;
  &__top {
    padding: 10px 0;
    border-bottom: 1px solid #d3d3d3;
    .top__wrap {
      display: flex;
      align-items: center;
      color: #7d7d7d;
      .phone__group,
      .mail__group,
      .time__group {
        display: flex;
        align-items: center;
        margin-right: 25px;

        > img {
          margin-right: 5px;
        }
      }
      :nth-child(3) {
        margin-right: 0;
        flex-grow: 1;
      }
      .language__group {
        select {
          color: #7d7d7d;
          border: none;
          outline: none;
        }
      }
    }
  }
  &__mid {
    border-bottom: 1px solid #d3d3d3;
    .mid__wrap {
      display: flex;
      align-items: center;
      .brand {
        flex-grow: 1;
      }
      .search__group {
        position: relative;
        margin-right: 30px;

        .search {
          width: 392px;
          padding: 10px 0 10px 20px;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
        }
        .search__btn {
          position: absolute;
          background-color: transparent;
          top: 50%;
          transform: translateY(-50%);
          right: 20px;
          transition: all 0.3s;

          &:hover {
            scale: 1.1;
          }
        }
      }
      .user__group {
        display: grid;
        margin-right: 30px;

        .user__btn {
          grid-column: 1/2;
          grid-row: 1/3;
          margin-right: 10px;
          background-color: transparent;
          transition: all 0.3s;

          &:hover {
            scale: 1.1;
          }
        }
        .user {
          grid-column: 2/3;
          grid-row: 1/2;
          margin-bottom: 5px;
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;
        }
        .signin-up {
          grid-column: 2/3;
          grid-row: 2/3;
          color: $black;
          font-size: 12px;
          line-height: 17px;
          transition: all 0.3s;
          cursor: pointer;
          &:hover {
            color: #7d7d7d;
          }
        }
        .form-login {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #2c2c2c;
          display: flex;
          align-items: center;
          justify-content: center;

          .inner-form {
            background: #fff;
            border-radius: 10px;
            padding: 50px;
            min-width: 500px;
            position: relative;
            .icon-close {
              position: absolute;
              top: 10px;
              right: 10px;
              cursor: pointer;
            }
            .logo {
              text-align: center;
              margin-bottom: 30px;
            }
            .had-acc {
              text-align: center;
              font-size: 14px;
              color: #7d7d7d;
              a {
                color: #000000;
                margin-left: 10px;
                text-decoration: underline;
                font-weight: bold;
              }
            }
            form {
              .form-group {
                margin-bottom: 20px;
                &.agree {
                  margin-bottom: 30px;
                  input[type="checkbox"] {
                    margin-right: 8px;
                  }
                  label {
                    a {
                      text-decoration: underline;
                    }
                  }
                }
                .btn-login {
                  background: #cb1515;
                  width: 220px;
                  height: 38px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: #fff;
                  border-radius: 6px;
                  margin: 0 auto;
                  font-size: 16px;
                  img {
                    margin-left: 5px;
                  }
                }
                label {
                  font-size: 14px;
                  margin-bottom: 5px;
                }
                input {
                  border-radius: 6px;
                }
              }
            }
          }
        }
      }
      .cart__group {
        display: grid;

        .cart__btn {
          grid-column: 1/2;
          grid-row: 1/3;
          margin-right: 10px;
          background-color: transparent;
          transition: all 0.3s;
          position: relative;
          &:hover {
            scale: 1.1;
          }
          .cart-count {
            background-color: red;
            width: 25px;
            height: 25px;
            padding: 5px;
            font-size: 15px;
            color: white;
            border-radius: 50%;
            position: absolute;
            top: 0;
            right: 0;
          }
        }
        .cart {
          grid-column: 2/3;
          grid-row: 1/2;
          margin-bottom: 5px;
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;
        }
        .total-cost {
          grid-column: 2/3;
          grid-row: 2/3;
          color: $black;
          font-size: 12px;
          line-height: 17px;
        }
      }
    }
  }
  &__bot {
    border-bottom: 1px solid #d3d3d3;
    background-color: #f3f3f3;
    .bot__wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .btn {
        padding: 0;
      }
      // .btn-secondary {
      //   color: #fff;
      //   background-color: black;
      //   border-color: black;
      //   box-shadow: none;
      // }
      .menu__group {
        display: flex;
        width: 255px;
        padding: 15px;
        background-color: $black !important;
        // margin-right: 80px;
        .menu {
          font-size: 14px;
          line-height: 19px;
          color: $white;
          margin-left: 10px;
          cursor: pointer;
        }
      }
      .dropdown-menu {
        width: 260px;
        max-height: 450px;
        overflow-y: scroll;
      }
      ::-webkit-scrollbar {
        width: 3px;
        height: 3px;
      }
      ::-webkit-scrollbar-thumb {
        background: grey;
        border-radius: 5px;
      }
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 5px;
        opacity: 0.5;
      }
      .drop-item {
        padding: 15px 15px;
        margin-bottom: 5px;
        &:hover {
          background: $black 0% 0% no-repeat padding-box;
          & .drop-item__text {
            color: $white;
          }
          & .chevron-right {
            color: $white;
          }
        }
        .chevron-right {
          width: 11px;
          height: 11px;
        }
        &__text {
          font-size: 14px;
          line-height: 19px;
          color: $black;
          font-weight: 600;
        }
      }
      // ul.dropdown-menu.show {
      //   width: 260px;
      // }
      .dropdown-item {
        padding: 0;
        &.active {
          background-color: black;
          color: $white;
          & .drop-item__text {
            color: $white;
          }
        }
      }
      > a {
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: $black;
        transition: all 0.3s;
        &:hover {
          color: red;
        }
      }
      // a.nuxt-link-exact-active {
      //   color: red;
      // }
      a.nuxt-link-active {
        color: red;
      }
    }
  }
}
</style>
