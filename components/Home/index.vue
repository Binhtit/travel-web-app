<template>
  <div>
    <HomeBanner />
    <HomeFlashSale />
    <HomeTrending />
    <HomeSale50percent />
    <HomeTradeMark />
    <HomeSuggest />
    <HomeFeedback />
  </div>
</template>
<script>
export default {
  layout: "default",
};
</script>
<style lang="scss">
* {
  font-family: "Open Sans";
}
.VueCarousel-navigation-button {
  padding: 0 !important;
}
.VueCarousel-pagination {
  position: absolute !important;
  bottom: 0;
}
</style>
