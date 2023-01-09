<template>
  <div class="section">
    <agile
      :autoplay="false"
      :centerMode='true'
      :initialSlide="1"
      :fade="false"
    >
      <div class="banner">
        <img
          class="banner__img"
          src="~assets/images/banner/Untitled-1.png"
          alt=""
        >
        <div class="banner__content ">
          <p class="sale-off text-center">30% OFF</p>
          <h2 class="heading text-center">BỘ SƯU TẬP MÙA HÈ 2022</h2>
          <p class="desc text-center">VMMS đã cho ra mắt bộ sưu tập thời trang mới nhất dành cho phái nữ trong mùa hè 2022 này. Với phối màu sáng làm chủ đạo, bộ sưu tập giúp các quý cô thể hiện cá tính thời trang độc đáo, đầy năng động của mình.</p>
          <button class="btn-buy">Mua ngay <img
              src="~assets/images/banner/rigth-arrow.png"
              alt=""
            ></button>
        </div>
      </div>
      <div class="banner">
        <img
          class="banner__img"
          src="~assets/images/banner/Untitled-1.png"
          alt=""
        >
        <div class="banner__content ">
          <p class="sale-off text-center">60% OFF</p>
          <h2 class="heading text-center">BỘ SƯU TẬP MÙA HÈ 2022</h2>
          <p class="desc text-center">VMMS đã cho ra mắt bộ sưu tập thời trang mới nhất dành cho phái nữ trong mùa hè 2022 này. Với phối màu sáng làm chủ đạo, bộ sưu tập giúp các quý cô thể hiện cá tính thời trang độc đáo, đầy năng động của mình.</p>
          <button class="btn-buy">Mua ngay <img
              src="~assets/images/banner/rigth-arrow.png"
              alt=""
            ></button>
        </div>
      </div>
      <div class="banner">
        <img
          class="banner__img"
          src="~assets/images/banner/Untitled-1.png"
          alt=""
        >
        <div class="banner__content ">
          <p class="sale-off text-center">90% OFF</p>
          <h2 class="heading text-center">BỘ SƯU TẬP MÙA HÈ 2022</h2>
          <p class="desc text-center">VMMS đã cho ra mắt bộ sưu tập thời trang mới nhất dành cho phái nữ trong mùa hè 2022 này. Với phối màu sáng làm chủ đạo, bộ sưu tập giúp các quý cô thể hiện cá tính thời trang độc đáo, đầy năng động của mình.</p>
          <button class="btn-buy">Mua ngay <img
              src="~assets/images/banner/rigth-arrow.png"
              alt=""
            ></button>
        </div>
      </div>
      <img
        slot="prevButton"
        class="btn-prev"
        src="~assets/images/banner/arrow left.png"
      >
      <img
        slot="nextButton"
        class="btn-next"
        src="~assets/images/banner/arrow right.png"
      >
    </agile>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
.agile__nav-button {
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background: #ffffff;
  position: absolute;
  top: 50%;
  
}
.agile__nav-button--next {
  right: 68px;
  transition: all 0.5s;
  &:hover{
    background:  #7b655e;
  }
}
.agile__nav-button--prev {
  left: 68px;
  transition: all 0.5s;
  &:hover{
    background:  #7b655e;
  }
}
.agile__dots {
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
}
.agile__dot {
  margin-right: 5px;
}
.agile__dot button {
  border: 1px solid red;
  transition: all 0.3s;
  width: 8px;
  height: 8px;
  border-radius: 5px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: red;
  scale: 1.5;
}

.banner {
  position: relative;
  width: 100%;
  height: 487px;
  .banner__image {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    height: 487px;
  }
  &__content {
    width: 541px !important;
    height: 283px;
    position: absolute;
    top: 100px;
    right: 127px;
    z-index: 10;
    .sale-off {
      color: #cb1515;
      font-size: 32px;
      line-height: 43px;
      font-weight: 300;
      padding-bottom: 20px;
    }
    .heading {
      color: #000000;
      font-size: 40px;
      line-height: 55px;
      font-weight: 600;
      padding-bottom: 30px;
    }
    .desc {
      color: #000000;
      font-size: 14px;
      line-height: 19px;
      font-weight: 500;
      padding-bottom: 30px;
    }
    .btn-buy {
      border: 0;
      border-radius: 6px;
      background: #cb1515;
      display: block;
      margin: 0 auto;
      padding: 13px 30px;
      color: #ffffff;
      font-size: 16px;
      line-height: 22px;
      font-weight: 600;
    }
  }
}
</style>