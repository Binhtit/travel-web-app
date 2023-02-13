<template>
  <section class="albums">
    <div class="container">
      <h2 class="title">NHỮNG BỘ SƯU TẬP THỜI TRANG NỔI BẬT CỦA VMMS</h2>
      <div class="section-content">
        <carousel
          :perPage="3"
          :wrap-around="true"
          :navigationEnabled="true"
          :navigationNextLabel="nextLabel"
          :navigationPrevLabel="prevLabel"
          :paginationActiveColor="'#CB1515'"
        >
          <slide v-for="item in data_albums" :key="item.id">
            <div class="slider">
              <div class="slider__wrap">
                <div class="content">
                  <div class="image"><img :src="item.image" alt="" /></div>
                  <p class="title-slide">{{ item.title }}</p>
                </div>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { ALBUMS } from "../../sources/data";
// import arrowLeft from "@imagesCommon/arrow-left.png";
// import arrowRight from "@imagesCommon/arrow-right.png";
export default {
  data() {
    return {
      data_albums: ALBUMS,
      // nextLabel: `<div class="btn-nav label--next"><img src="${arrowRight}" alt="arrow" /></div>`,
      // prevLabel: `<div class="btn-nav label--prev"><img src="${arrowLeft}" alt="arrow" /></div>`,
    };
  },
};
</script>

<style lang="scss" scoped>
.albums {
  padding: 130px 0 80px;
  .container {
    .title {
      text-align: center;
      margin-bottom: 30px;
    }
    .section-content {
      ::v-deep {
        .VueCarousel-dot-container {
          display: none;
        }
        .VueCarousel-inner {
          // column-gap: 30px;

          img {
            // width: 100%;
          }
          .title-slide {
            text-align: center;
            margin-top: 15px;
            font-weight: bold;
          }
        }
        .btn-nav {
          background: #f5f5f5;
          border-radius: 50%;
          height: 30px;
          width: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          &.label--prev {
            margin-right: 30px;
          }
          &.label--next {
            margin-left: 30px;
          }
        }
      }
    }
  }
}
</style>