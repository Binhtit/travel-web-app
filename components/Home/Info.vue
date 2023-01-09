<template>
  <div class="wrapper">

    <div class=" container d-flex align-items-center justify-content-between">
      <div class="info d-flex align-items-center ">
        <div class="phone">
          <img
            src="~assets/images/info/phone.png"
            alt=""
          >
          <span>0962180180</span>
        </div>
        <div class="email">
          <img
            src="~assets/images/info/phone.png"
            alt=""
          >
          <span>info@vmm.vn</span>
        </div>
        <div class="time"> <img
            src="~assets/images/info/phone.png"
            alt=""
          >
          <span>Mở cửa: Từ 8:00 đến 20:30 (Tất cả các ngày trong tuần)</span>
        </div>
      </div>
      <div class="language d-flex align-items-center">
        <span>Tiếng Việt</span>
        <a href="javascript:;"><img
            class="pl-1 pb-1"
            src="~assets/images/info/Path 190.png"
            alt=""
          /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 10px;
  &::before {
    content: "";
    height: 2px;
    width: 100%;
    position: absolute;
    top: 40px;
    background: #f5f5f5;
  }
  .phone {
    margin-right: 25px;
  }
  .email {
    margin-right: 25px;
  }
}
</style>