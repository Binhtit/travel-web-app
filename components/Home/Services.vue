<template>
  <div class="services">
    <div class="services__wrap container">
      <div
        class="service"
        v-for="(service, index) in data_services"
        :key="index"
      >
        <img :src="service.img" alt="" />
        <div class="info">
          <p class="name">{{ service.name }}</p>
          <p class="describe">{{ service.describe }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SERVICES } from "@data";
export default {
  data() {
    return {
      data_services: SERVICES,
    };
  },
};
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
