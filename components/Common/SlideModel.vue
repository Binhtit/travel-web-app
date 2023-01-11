<template>
    <section :class="['slide-model', customClass]">
        <carousel
        class="clothes__wrap"
        :perPage="slidePerView"
        :navigationEnabled="true"
        :navigationNextLabel="nextLabel"
        :navigationPrevLabel="prevLabel"
        :paginationEnabled="false"
        >
        <slide v-for="(item, index) in slideData" :key="index">
            <div class="cloth">
            <img :src="item.img" alt="" />
            <p class="name">{{ item.name }}</p>
            <p class="cost">{{ item.cost }}</p>
            <div class="choose-color">
                <div
                v-for="(color, index) in item.color"
                :key="index"
                :class="`color color--${color}`"
                ></div>
            </div>
            <div v-if="isShowLabel" class="sale">{{ item.sale }}</div>
            <p class="add">
                Thêm vào giỏ
                <img src="@images/common/arrow.png" alt="" />
            </p>
            <div class="size">
                <select>
                <option value="xs">Size XS</option>
                <option value="s">Size S</option>
                <option value="m">Size M</option>
                <option value="l">Size L</option>
                </select>
            </div>
            <div class="blur-bg"></div>
            </div>
        </slide>
        </carousel>
    </section>
</template>

<script>
import arrowLeft from "@images/Common/arrow-left.png";
import arrowRight from "@images/Common/arrow-right.png";
export default {
    props: {
        slideData: {
            type: Array,
            default: []
        },
        slidePerView: {
            type: Number,
            default: 4
        },
        isShowLabel: {
            type: Boolean,
            default: true
        },
        customClass: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            nextLabel: `<div class="label--next"><img src="${arrowRight}" alt="arrow" /></div>`,
            prevLabel: `<div class="label--prev"><img src="${arrowLeft}" alt="arrow" /></div>`,
        }
    },
}
</script>
<style scoped lang="scss">
.slide-model {
  background-color: #f5f5f5;
  padding: 80px 0;

  &.trending-slide {
    // TODO: custom layout @Nghia
    background: red;
  }
  ::v-deep {
    .label {
      &--next {
        position: absolute;
        padding: 10px 15px;
        top: -70px;
        right: -30px;
        font-weight: 900;
        background-color: #ffffff;
        border-radius: 50%;
        transition: all 0.3s;
        &:hover {
          background-color: lightgreen;
        }
      }
      &--prev {
        position: absolute;
        padding: 10px 15px;
        top: -70px;
        left: -30px;
        font-weight: 900;
        background-color: #ffffff;
        border-radius: 50%;
        transition: all 0.3s;
        &:hover {
          background-color: lightgreen;
        }
      }
    }
  }
    .clothes__wrap {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        .cloth {
        width: 255px;
        margin-left: 50%;
        transform: translateX(-50%);
        border-radius: 10px;
        text-align: center;
        background-color: #ffffff;
        padding-bottom: 15px;
        transition: all 0.4s;
        overflow: hidden;
        &:hover {
            cursor: pointer;
            .add {
            right: 10px;
            }
            .size {
            left: 10px;
            opacity: 1;
            }
            .blur-bg {
            opacity: 0.4;
            }
        }
        > img {
            margin-bottom: 15px;
        }
        .name {
            font-size: 14px;
            line-height: 19px;
            margin-bottom: 10px;
        }
        .cost {
            font-weight: 600;
            font-size: 20px;
            line-height: 27px;
            color: #cb1515;
            margin-bottom: 10px;
        }
        .choose-color {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
            .color {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 1px solid brown;
            margin-right: 5px;
            transition: all 0.3s;
            &:hover {
                cursor: pointer;
                transform: translateY(-5px);
            }
            }
            :last-child {
            margin-right: 0;
            }
            .color--red {
            background-color: red;
            }
            .color--black {
            background-color: black;
            }
            .color--yellow {
            background-color: yellow;
            }
            .color--blue {
            background-color: blue;
            }
            .color--pink {
            background-color: pink;
            }
            .color--gray {
            background-color: gray;
            }
            .color--brown {
            background-color: brown;
            }
            .color--white {
            background-color: white;
            }
        }
        .sale {
            position: absolute;
            background-color: #cb1515;
            top: 10px;
            left: 10px;
            width: 50px;
            padding: 5px;
            color: #ffffff;
            font-size: 12px;
            line-height: 17px;
            border-radius: 2px;
        }
        .add {
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            padding: 5px;
            position: absolute;
            top: 210px;
            right: -200px;
            border: 1px solid #ffffff;
            border-radius: 10px;
            background-color: transparent;
            color: #ffffff;
            z-index: 2;
            transition: all 0.3s;
            &:hover {
            background-color: #cb1515;
            }
        }
        .size {
            position: absolute;
            top: 215px;
            left: -100px;
            transition: all 0.3s;
            z-index: 2;
            opacity: 0;
            > select {
            width: 80px;
            text-align: center;
            font-size: 14px;
            line-height: 19px;
            color: #cb1515;
            padding: 5px;
            border: none;
            border-radius: 10px;
            -webkit-appearance: none;
            text-indent: 1px;
            &:focus {
                border: none;
                outline: none;
            }
            &:hover {
                cursor: pointer;
                background-color: green;
                color: #ffffff;
            }
            }
        }
        .blur-bg {
            width: 255px;
            height: 255px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            background-color: #000000;
            opacity: 0;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
        }
    }
    .see-all {
        padding: 8px 20px;
        border-radius: 10px;
        background-color: #cb1515;
        color: #ffffff;
        margin-left: 50%;
        transform: translateX(-50%);
        transition: all 0.3s;
        > img {
        margin-left: 10px;
        }
        &:hover {
        background-color: green;
        color: #ffffff;
        }
    }
}
.colors {
  display: flex;
  column-gap: 8px;
  .color {
    width: 15px;
    height: 15px;
    &--red {
      background: red;
    }
    &--yellow {
      background: yellow;
    }
    &--black {
      background: black;
    }
  }
}
</style>
