<template>
    <div class="info py-5">
        <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Hình ảnh</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Thông tin sale</th>
              </tr>
            </thead>
            <tbody v-if="items.length">
              <tr v-for="(item, index) in items" :key="index">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ item.count }}</td>
                <td><img :src="item.img" :alt="item.name"></td>
                <td>{{ item.name }}</td>
                <td>{{ item.sale }}</td>
              </tr>
            </tbody>
            <p v-else class="text-center font-weight-bold py-3">Không có sản phẩm nào trong giỏ hàng</p>
          </table>
    </div>
</template>
<script>
export default {
    computed: {
        items() {
            return this.$store.state.cart 
        }
    },
}
</script>
<style lang="scss" scoped>
</style>
