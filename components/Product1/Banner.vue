<template>
  <div class="banner">
    <h2 class="heading text-center">ÁO DỆT TAY CỔ TRÒN MẪU HÀN QUỐC</h2>
    <p class=" desc text-center"><span class=" desc__link home">
        <nuxt-link   to="/">Trang chủ</nuxt-link>
      </span>
      / <span class=" desc__link product ">
        <nuxt-link  to="/collection">Sản phẩm</nuxt-link>
      </span> /
      <span class=" desc__link product-style">Áo dệt tay cổ tròn mẫu Hàn Quốc</span>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.banner {
  margin-bottom: 8rem;
  background: transparent url("@images/AboutUs/bg-about-us.png") 0% 0% no-repeat
    padding-box;
  .heading {
    padding: 8rem 0 1rem 0;
    font-size: 3.2em;
    font-weight: 600;
    color: $black;
  }
  .desc {
    padding-bottom: 8rem;
    &__link{
      @include text_14px;
      transition: all 0.5s;
      &:hover{
        text-decoration: underline;
      }
      a.nuxt-link-active{
        color: red;
      }
    }
  }
}
</style>