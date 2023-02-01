<template>
  <header class="header">
    <div class="header__top">
      <div class="top__wrap container">
        <div class="phone__group">
          <img
            src="@images/header/phone.png"
            alt="phone_icon"
          />
          <p class="phone">0962.180.180</p>
        </div>
        <div class="mail__group">
          <img
            src="@images/header/mail.png"
            alt="mail_icon"
          />
          <p class="mail">info@vmms.vn</p>
        </div>
        <div class="time__group">
          <img
            src="@images/header/clock.png"
            alt="clock_icon"
          />
          <p class="time">
            Mở cửa: Từ 8:00 đến 20:30 (Tất cả các ngày trong tuần)
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
        <a
          href="/"
          class="brand"
        >
          <img
            src="@images/header/brand.png"
            alt="logo_brand"
          />
        </a>
        <div class="search__group">
          <input
            class="search"
            type="text"
            placeholder="Nhập từ khóa tìm kiếm..."
          />
          <button class="search__btn">
            <img
              src="@images/header/search.png"
              alt="search"
            />
          </button>
        </div>
        <div class="user__group">
          <button class="user__btn">
            <img
              src="@images/header/user.png"
              alt="user"
            />
          </button>
          <p class="user">Tài khoản</p>
          <a
            class="signin-up"
            href="#"
          >Đăng nhập / Đăng ký</a>
        </div>
        <div class="cart__group">
          <button class="cart__btn">
            <img
              src="@images/header/cart.png"
              alt="cart"
            />
          </button>
          <p class="cart">Giỏ hàng</p>
          <p class="total-cost">0 đ</p>
        </div>
      </div>
    </div>
    <div class="header__bot">
      <div class="bot__wrap container ">
        <div
          @mouseover="onOver()"
          @mouseleave="onLeave()"
        >
          <b-dropdown
            no-caret
            id="dropdown-1"
            text="Dropdown Button"
            ref="dropdown"
          
          >
            <template #button-content>
              <div class="menu__group">
                <img
                  src="@images/header/menu.png"
                  alt="menu"
                />
                <span class="menu">Danh mục sản phẩm</span>
              </div>
            </template>
            <b-dropdown-item
              v-for="item in list"
              :key="item.id"
              :to="item.page"
            >
              <div class="drop-item d-flex align-items-center justify-content-between">
                <span class="drop-item__text">{{item.prod}}</span>
                <font-awesome-icon
                  class="chevron-right"
                  icon="fa-solid fa-chevron-right"
                />
              </div>
            </b-dropdown-item>
          </b-dropdown>
        </div>
        <a
          class="home"
          href="#"
        >Trang chủ</a>
        <nuxt-link to="/about-us">Về chúng tôi</nuxt-link>
        <a href="javascript:;" >Sản phẩm</a>
        <a
          class="questions"
          href="#"
        >Câu hỏi thường gặp</a>
        <a
          class="support"
          href="#"
        >Hướng dẫn mua hàng</a>
        <a
          class="news"
          href="#"
        >Tin tức</a>
        <a
          class="contact"
          href="#"
        >Liên hệ</a>
      </div>
    </div>
  </header>
</template>

<script>
import { DATA_LIST_PRODUCT } from "../../resources/navbar/data-listProduct";
export default {
  data() {
    return {
      list: DATA_LIST_PRODUCT,
      listProd: false,
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
          color: #000000;
          font-size: 12px;
          line-height: 17px;
          transition: all 0.3s;

          &:hover {
            color: #7d7d7d;
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

          &:hover {
            scale: 1.1;
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
          color: #000000;
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
      .btn-secondary {
        color: #fff;
        background-color: black;
        border-color: black;
        box-shadow: none;
      }
      .menu__group {
        display: flex;
        width: 255px;
        padding: 15px;
        background-color: #000000 !important;
        // margin-right: 80px;
        .menu {
          font-size: 14px;
          line-height: 19px;
          color: #ffffff;
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
        &:hover {
          background: #000000 0% 0% no-repeat padding-box;
          & .drop-item__text {
            color: #ffffff;
          }
          & .chevron-right {
            color: #ffffff;
          }
        }
        .chevron-right {
          width: 11px;
          height: 11px;
        }
        &__text {
          font-size: 14px;
          line-height: 19px;
          color: #000000;
          font-weight: 600;
        }
      }
      // ul.dropdown-menu.show {
      //   width: 260px;
      // }
      .dropdown-item {
        padding: 0;
      }
      > a {
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: #000000;
        transition: all 0.3s;
        &:hover {
          color: red;
        }
      }
    }
  }
}
</style>
