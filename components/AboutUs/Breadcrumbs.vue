<template>
  <section class="breadcrumbs">
    <h1 class="page-title">Về Chúng Tôi</h1>
    <div class="nav-breadcrumbs">
      <a href="/">Trang chủ</a>
      <span class="separator">/</span>
      <span>Về chúng tôi</span>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.breadcrumbs {
  background: url("~assets/images/AboutUs/bg-about-us.png") no-repeat;
  background-size: cover;
  padding: 80px;
  text-align: center;
  .page-title {
    font-size: 32px;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .nav-breadcrumbs {
    font-size: 14px;
    a {
      color: #cb1515;
    }
    .separator {
      margin: 0 8px;
    }
  }
}
</style>