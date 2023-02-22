<template>
  <div class="cart">
    <CartBanner :step="step" />
    <div class="cart__content container">
      <div class="process">
        <div class="process__step-name">
          <span class="span">Giỏ hàng</span>
          <span class="span">Đặt hàng</span>
          <span class="span">Hoàn tất</span>
        </div>
        <div class="process__line">
          <div class="process__line--percent"></div>
        </div>
      </div>
      <div>
        <CartMain />
        <CartInfo />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
    };
  },
  mounted() {
  },
  watch: {
    "$route.query": {
      handler: function (value) {
        if (value.id) {
          this.idCategory = value.id;
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .cart {
    .process {
      width: 100%;
      &__step-name {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .span {
          position: relative;
          font: normal normal 600 16px/22px Open Sans;
          letter-spacing: 0px;
          color: #7D7D7D;
          &::after {
            position: absolute;
            content: "";
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #7D7D7D 0% 0% no-repeat padding-box;
            opacity: 1;
            transform: translate(-50%, -50%);
            bottom: -22px;
            left: 50%;
          }
        }
      }
    }
  }
</style>
