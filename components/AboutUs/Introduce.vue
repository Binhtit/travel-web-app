<template>
  <section class="introduce">
    <div class="item"></div>
  </section>
</template>

<script>
import { INTRODUCE } from "../../sources/data";
export default {
  data() {
    return {
      introduces: INTRODUCE,
    };
  },
};
</script>

<style lang="scss">
.introduce {
  background: #fbfbfb;
}
</style>