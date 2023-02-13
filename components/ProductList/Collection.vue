<template>
  <div class="collection container ">
    <div class="collection__item--normal">
      <div
        v-for="item in items"
        :key="item.id"
        class="item"
        @click="handleClick(item.id)"
      >
      <img :src=" item.image " alt="" />
        <div>
          <p class="title text-center">{{ item.title }}</p>
        </div>
      </div>
    </div>
    <div class="collection__item--special " >
      <a href="javascript:;"><img
          src="@images/collection/1.jpg"
          alt=""
        /></a>
      <p class="title">Sale off 50%</p>
      <button class="btn-buyNow">Mua ngay <img
          src="@images/collection/Path 10.svg"
          alt=""
        ></button>
    </div>
  </div>
</template>

<script>
import { DATA_COLLECTION } from "@resources/product/data-collection";
export default {
  data() {
    return {
      items: DATA_COLLECTION,
    };
  },
  methods: {
    handleClick (id) {
      if (id) {
        this.$router.push(`category?id=${id}`)
      }
    }
  },
};
</script>

<style  lang="scss">

.collection {
  column-gap: 3em;
  padding-top: 3em;
  display: flex;
  justify-content: center;
  @include tablet {
    display: block;
  }
  &__item--normal {
    row-gap: 3em;
    padding-left: 26rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3em;
    @include mobile {
      grid-template-columns: 1fr 1fr;
    }
    .item {
      .title {
        font-size: 1.4em;
        line-height: 1.9em;
        font-weight: 600;
        padding-top: 1.5rem;
        color: $black;
        transition: all 0.5;
        position: relative;
        
        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
  &__item--special {
    position: relative;
    @include tablet{
      position: unset;
      padding-left: 26rem;
    }
    img {
      width: 22.5em;
      height: 41.8em;
      border-radius: 1em;
      @include tablet{
        width: 12.9em;
        height: 12.9em;
      }
      @include tabletMini{
        width: 6.8em;
        height: 6.8em;
      }
    }
    .title {
      font-size: 2.8em;
      line-height: 3.8em;
      font-weight: 600;
      color: $white;
      position: absolute;
      z-index: 2;
      bottom: 7.3rem;
      left: 1.5rem;
      @include tablet{
        font-size: 1.4em;
        line-height: 2.4em;
        color: $black;
        position: unset;
      }
    }
    .btn-buyNow {
      position: absolute;
      z-index: 2;
      bottom: 5rem;
      left: 1.5rem;
      font-size: 1.6em;
      line-height: 22px;
      color: $white;
      background: #cb1515;
      padding: 1.5rem 3rem;
      border-radius: 6px;
      border: none;
      font-weight: 600;
      transition: all 0.5;
      @include tablet{
        display: none;
      }
      img {
        width: 1.5em;
        height: .8em;
        color: $white;
      }
      &:hover{
        opacity: 0.8;
      }
    }
  }
}

</style>