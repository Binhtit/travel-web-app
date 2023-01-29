<template>
  <section class="certifications">
    <div class="container">
      <h2 class="title">CHỨNG NHẬN & GIẢI THƯỞNG</h2>
      <div class="images">
        <div class="item">
          <img src="../../assets/images/AboutUs/chungnhan1.png" alt="" />
        </div>
        <div class="item">
          <img src="../../assets/images/AboutUs/chungnhan2.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.certifications {
  background: #fbfbfb;
  padding: 80px 0;
  .container {
    .title {
      text-align: center;
      margin-bottom: 30px;
    }
    .images {
      display: flex;
      gap: 30px;
      justify-content: space-between;
      .item {
        width: 50%;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>