<template>
  <div class="container">
    <h2>thanh</h2>
    <div class="header d-flex align-items-center justify-content-between">
      <div class="header__logo">
        <img
          src="~assets/images/header/Group 19147.png"
          alt=""
        >
      </div>
      <div class="header__search">
        <input
          type="text"
          placeholder="Nhập từ khoá tìm kiếm..."
        >
      </div>
      <div class="header__account d-flex ">
        <img
          src="~assets/images/header/avatar.png"
          alt=""
          class="header__account--avatar"
        >
        <div class="header__account--login">
          <a href="javascipts:;"><p>Tài khoản</p></a>
          <a href="javascipts:;"><span>Đăng nhập</span></a>
          /
          <a href="javascipts:;"><span>Đăng ký</span></a>
        </div>
      </div>
      <div class="header__cart d-flex">
        <img
          src="~assets/images/header/Mask Group 72.png"
          alt=""
          class="header__cart--img"
        >
        <div class="header__cart--prod">
          <a href="javascipts:;"><p>Giỏ hàng</p></a>
          <span>0 ₫</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
    margin-top: 20px;
  &__logo {
    cursor: pointer;
  }
  &__search {
    input{
        padding: 18px 211px 18px 20px;
        color: #7D7D7D;
        font-size: 14px;
        height: 19px;
        border: 1px solid #E5E5E5;
        border-radius: 10px;
    }
  }
  &__account {
    &--avatar {
      width: 41px;
      height: 41px;
      margin-right: 10px;
    }
    &--login {
     a{
        text-decoration: none;
        p {
        margin-bottom: 0;
        font-size: 14px;
        line-height: 24px;
        font-weight: 600;
        letter-spacing: 0px;
        color: #000;
      }
     }
      a{
        text-decoration: none;
        span {
        margin-bottom: 0;
        font-size: 12px;
        line-height: 17px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #000;
      }
      }
    }
  }
  &__cart {
    &--img {
      width: 41px;
      height: 41px;
      margin-right: 10px;

    }
    &--prod {
      a{
        text-decoration: none;
        p {
        margin-bottom: 0;
        font-size: 14px;
        line-height: 24px;
        font-weight: 600;
        letter-spacing: 0px;
        color: #000;
      }
      }
      span {
        margin-bottom: 0;
        font-size: 12px;
        line-height: 17px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #000;
      }
    }
  }
}
</style>