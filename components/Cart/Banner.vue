<template>
    <div class="banner">
        <img class="banner__img" :src="require('@images/pages/cart/background/bg_banner.png')" alt="banner cart">
        <div class="banner__content">
            <h1 class="banner__content--title">ĐẶT HÀNG</h1>
            <div class="banner__content--link">
                <span class="span active">Trang chủ</span>
                <span class="span">/</span>
                <span :class="['span', { active: step === 1 }]">Giỏ hàng</span>
                <span class="span">/</span>
                <span class="span">Đặt hàng</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        step: {
            type: Number,
            default: 0
        },
    },
}
</script>
<style lang="scss" scoped>
    .banner {
        position: relative;
        &__img {
            width: 100vw;
            height: 232px;
            object-fit: cover;
        }
        &__content {
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            &--title {
                color: #000000;
                text-align: center;
                letter-spacing: 0px;
                text-transform: uppercase;
                font: normal normal 600 32px/43px Open Sans;
                margin-bottom: 10px;
            }
            &--link {
                .span {
                    font: normal normal normal 14px/19px Open Sans;
                    letter-spacing: 0px;
                    color: #6C757D;
                    &.active {
                        color: #CB1515;
                    }
                }
            }
        }
    }
</style>
