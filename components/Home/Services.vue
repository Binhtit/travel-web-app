<template>
  <div class="services">
    <div class="services__wrap container">
      <div class="service">
        <img src="@images/services/service1.png" alt="" />
        <div class="info">
          <p class="name">Miễn phí giao hàng</p>
          <p class="describe">Áp dụng cho đơn hàng trên 2.000.000 VNĐ</p>
        </div>
      </div>
      <div class="service">
        <img src="@images/services/service2.png" alt="" />
        <div class="info">
          <p class="name">Hỗ trợ đổi trả hàng</p>
          <p class="describe">
            Quý khách có thể đổi trả hàng trong vòng 30 ngày
          </p>
        </div>
      </div>
      <div class="service">
        <img src="@images/services/service3.png" alt="" />
        <div class="info">
          <p class="name">Khách hàng VIP</p>
          <p class="describe">Nhận ưu đãi lớn khi đăng ký thành viên</p>
        </div>
      </div>
      <div class="service">
        <img src="@images/services/service4.png" alt="" />
        <div class="info">
          <p class="name">Hotline phản ánh</p>
          <p class="describe">Phản hồi về dịch vụ của VMMS: 0962.180.180</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.services {
  padding: 30px 0;
  background-color: #f5f5f5;
  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .service {
      display: flex;
      align-items: center;
      > img {
        margin-right: 10px;
      }
      .info {
        width: 195px;
        .name {
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
          margin-bottom: 10px;
        }
        .describe {
          font-size: 14px;
          line-height: 19px;
          color: #7d7d7d;
        }
      }
    }
  }
}
</style>
