<template>
  <div class="header">
    <div class="top-bar container">
      <div class="left">
        <div class="phone icon">
          <img src="~/assets/image/phone.svg" alt="" />
          <span>0962.180.180</span>
        </div>
        <div class="email icon">
          <img src="~/assets/image/mail.svg" alt="" />
          <span>info@vmms.vn</span>
        </div>
        <div class="clock icon">
          <img src="~/assets/image/clock.svg" alt="" />
          <span>Mở cửa: Từ 8:00 đến 20:30 (Tất cả các ngày trong tuần)</span>
        </div>
      </div>
      <div class="right">
        <div class="languages">
          <span>Tiếng Việt <img src="~/assets/image/down.svg" alt="" /></span>
        </div>
      </div>
    </div>
    <div class="header-main">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.container {
  width: 1110px;
  margin: 0 auto;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header {
  .top-bar {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      .icon {
        margin-right: 25px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>