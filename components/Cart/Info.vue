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
            <tbody v-if="items.length && !isCount">
              <tr v-for="(item, index) in items" :key="index">
                <th scope="row">{{ index + 1 }}</th>
                <td>
                  <div>
                    <button class="btn btn-danger" @click="editNumItem(item.id, false)">-</button>
                    <span>{{ item.count }}</span>
                    <button class="btn btn-success" @click="editNumItem(item.id, true)">+</button>
                  </div>
                </td>
                <td><img :src="item.img" :alt="item.name"></td>
                <td>{{ item.name }}</td>
                <td>{{ item.sale }}</td>
                <td><button @click="deleteNumber(item.id)" class="btn btn-danger">Delete</button></td>
              </tr>
            </tbody>
            <p v-else class="text-center font-weight-bold py-3">Không có sản phẩm nào trong giỏ hàng</p>
          </table>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isCount: false
    }
  },
  computed: {
      items() {
          return this.$store.state.cart 
      }
  },
  methods: {
    editNumItem (id, type = false) {
      this.isCount = true
      this.$store.commit("editNumItem", {id, type});
      this.isCount = false
    },
    deleteNumber (id) {
      this.$store.commit("deleteItem", id);
    }
  },
}
</script>
<style lang="scss" scoped>
</style>
