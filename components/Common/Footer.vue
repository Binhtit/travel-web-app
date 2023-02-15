<template>
  <div class="footer">
    <div class="footer__wrap container">
      <div class="signin-follow">
        <div class="signin">
          <p class="title">ĐĂNG KÝ THÀNH VIÊN MỚI</p>
          <p class="describe text1">
            Đăng ký thành viên với VMMS để hưởng tối đa các ưu đãi khi mua sắm.
          </p>
          <div class="lookfor">
            <input class="text1" type="text" placeholder="info@vmms.vn" />
            <button class="send">GỬI</button>
          </div>
        </div>
        <div class="follow">
          <p class="title">THEO DÕI CHÚNG TÔI</p>
          <div class="app__group">
            <nuxt-link class="app" to=""
              ><img src="@images/common/fb.png" alt=""
            /></nuxt-link>
            <nuxt-link class="app" to=""
              ><img src="@images/common/ig.png" alt=""
            /></nuxt-link>
            <nuxt-link class="app" to=""
              ><img src="@images/common/tt.png" alt=""
            /></nuxt-link>
            <nuxt-link class="app" to=""
              ><img src="@images/common/yt.png" alt=""
            /></nuxt-link>
          </div>
        </div>
      </div>
      <div class="quick-link">
        <p class="title">LIÊN KẾT NHANH</p>
        <div class="link__group">
          <nuxt-link class="opt text1" to="/">Trang chủ</nuxt-link>
          <nuxt-link class="opt text1" to="/about-us">Về chúng tôi</nuxt-link>
          <nuxt-link class="opt text1" to="">Sản phẩm</nuxt-link>
          <nuxt-link class="opt text1" to="">Câu hỏi thường gặp</nuxt-link>
          <nuxt-link class="opt text1" to="">Tin tức</nuxt-link>
          <nuxt-link class="opt text1" to="">Liên hệ</nuxt-link>
        </div>
      </div>
      <div class="policy">
        <p class="title">CHÍNH SÁCH</p>
        <div class="policy__group">
          <nuxt-link class="opt text1" to="">Chính sách bảo mật</nuxt-link>
          <nuxt-link class="opt text1" to="">Chính sách bảo hành</nuxt-link>
          <nuxt-link class="opt text1" to="">Chính sách đổi trả</nuxt-link>
          <nuxt-link class="opt text1" to="">Chính sách thanh toán</nuxt-link>
          <nuxt-link class="opt text1" to="">Chính sách thành viên</nuxt-link>
          <nuxt-link class="opt text1" to=""
            >Hướng dẫn mua hàng trực tuyến</nuxt-link
          >
        </div>
      </div>
      <div class="address">
        <div class="brand">
          <img src="@images/common/brand.png" alt="" />
        </div>
        <p class="describe text2">
          VMMS là cửa hàng thời trang nam nữ phong cách trẻ trung, cá tính, năng
          động. Với chất liệu thời trang thân thiện môi trường, VMMS mong muốn
          để lại dấu ấn riêng với các tín đồ thời trang Việt Nam.
        </p>
        <div class="location__group">
          <img src="@images/common/location.png" alt="" />
          <!-- TODO: cho sdt địa chỉ ... vào data @nghia -->
          <p class="location text2">
            Tầng 3 số 14 Pháo Đài Láng, Đống Đa, Hà Nội
          </p>
        </div>
        <div class="phone__group">
          <img src="@images/common/phone.png" alt="" />
          <p class="phone text2">(+84-4) 3562.6296</p>
        </div>
        <div class="mail__group">
          <img src="@images/common/mail.png" alt="" />
          <p class="mail text2">info@vmms.vn</p>
        </div>
        <div class="notice">
          <img src="@images/common/notice.png" alt="" />
        </div>
      </div>
      <p class="copyright text1">COPYRIGHT © 2022 VMMS</p>
    </div>
  </div>
</template>
<script>
export default {
};
</script>
<style scoped lang="scss">
.footer {
  border-top: 5px solid #000000;
  padding: 50px 0;
  background-color: #f2f2f2;
  .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  }
  .text1 {
    font-size: 12px;
    line-height: 16px;
    color: #7d7d7d;
  }
  .text2 {
    font-size: 12px;
    line-height: 16px;
  }
  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .signin-follow {
      max-width: 350px;
      display: flex;
      flex-direction: column;
      .signin {
        margin-bottom: 50px;
        .title,
        .describe {
          margin-bottom: 10px;
        }
        .lookfor {
          display: flex;
          align-items: center;
          > input {
            padding: 10px 20px;
            flex-grow: 1;
            border: 1px solid #000000;
            border-radius: 10px 0 0 10px;
            color: #000000;
          }
          .send {
            font-weight: 600;
            font-size: 12px;
            line-height: 16px;
            padding: 10px 8px;
            background-color: #ffffff;
            border: 1px solid #000000;
            border-radius: 0 10px 10px 0;
            transition: all 0.3s;
            &:hover {
              background-color: lightgreen;
            }
          }
        }
      }
      .follow {
        .title {
          margin-bottom: 10px;
        }
        .app__group {
          display: flex;
          align-items: center;
          .app {
            background-color: #000000;
            border-radius: 50%;
            margin-right: 10px;
            transition: all 0.3s;
            &:hover {
              background-color: lightgreen;
            }
            > img {
              padding: 8px;
            }
          }
        }
      }
    }
    .quick-link {
      .title {
        margin-bottom: 10px;
      }
      .link__group {
        display: flex;
        flex-direction: column;
        .opt {
          margin-bottom: 10px;
          transition: all 0.3s;
          &:hover {
            color: lightgreen;
          }
        }
        :last-child {
          margin-bottom: 0;
        }
      }
    }
    .policy {
      .title {
        margin-bottom: 10px;
      }
      .policy__group {
        display: flex;
        flex-direction: column;
        .opt {
          margin-bottom: 10px;
          transition: all 0.3s;
          &:hover {
            color: lightgreen;
          }
        }
        :last-child {
          margin-bottom: 0;
        }
      }
    }
    .address {
      border-left: 2px solid #7d7d7d;
      padding-left: 15px;
      max-width: 270px;
      display: flex;
      flex-direction: column;
      .brand,
      .describe {
        margin-bottom: 30px;
      }
      .location__group,
      .phone__group,
      .mail__group {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        > img {
          margin-right: 5px;
        }
      }
    }
    .copyright {
      width: 100%;
    }
  }
}
</style>
