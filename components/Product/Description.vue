<template>
  <div class="container section">
    <h3 class="title">Mô tả sản phẩm</h3>
    <p class="sub-title">Thông tin sản phẩm</p>
    <ul>
      <li class="list"><span class="prop">Bảng màu:</span><span class="detail">Đen, Be (màu Kem), Nâu Vàng, Xanh dương</span></li>
      <li class="list"><span class="prop">Chất liệu: </span><span class="detail">Vải dệt kim (co dãn đàn hồi tốt; giữ nhiệt tốt; thấm hút mồ hổi cực hiệu quả,...)</span></li>
      <li class="list">
        <p class="prop">Bảng size:</p>
        <span class="prop">- Size S:</span><span class="detail">Rộng 42 - Dài áo 56 - Dài tay áo 56 </span><br>
        <span class="prop">- Size M:</span><span class="detail">Rộng 42 - Dài áo 56 - Dài tay áo 56 </span><br>
        <span class="prop">- Size L:</span><span class="detail">Rộng 42 - Dài áo 56 - Dài tay áo 56 </span><br>
        <span class="prop">- Size XL:</span><span class="detail">Rộng 42 - Dài áo 56 - Dài tay áo 56 </span><br>
      </li>
      <li class="list"><span class="prop">Thương hiệu:</span><span class="detail">VMMS</span></li>
      <li class="list"><span class="prop">Xuất sứ:</span><span class="detail"> Việt Nam</span></li>
    </ul>
    <ul>
      <p class="sub-title">Bảo quản</p>
      <li class="prop">- Nên phơi đồ dệt kim ở nơi thoáng mát, tránh ánh nắng mặt trời trực tiếp</li>
      <li class="prop">- Nếu đồ len bị hôi mùi ẩm mốc vì bảo quản lâu trong tủ, bạn hãy hòa vào nước giặt một ít sữa tươi không đường, rồi giặt như bình thường, mùi mốc sẽ bay đi.</li>
    </ul>
  </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
export default {
  data() {
    return {
     
    };
  },
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
};
</script>

<style lang="scss">
.section{
  margin-top: 8rem;
  .title{
    font-size: 2.4em;
    line-height: 3.2rem;
    color: $black;
    padding-bottom: 1rem;
  }
  .list{
    margin-bottom: 1rem;
  }
  .sub-title{
    font-size: 1.6em;
    line-height: 2.2rem;
    color: $black;
    padding-bottom: 1rem;

  }
  .prop, .detail{
    @include text_14px;
    padding-bottom: 1rem;
  }
  .detail{
    color: $black;
  }
}
</style>