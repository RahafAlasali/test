<template>
  <div class="container py-5">
    <table class="table text-white">
      <thead>
        <tr class="text-center">
          <th scope="col"></th>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="(item, index) in cart" :key="index">
          <td>
            <i class="bi bi-x-circle" @click="remove(item)"> </i>
          </td>
          <td scope="row">
            <img :src="item.image" alt="" width="100" height="80" />
          </td>
          <td>{{ item.title }}</td>

          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("cart", ["cart"]),
  },
  methods: {
    ...mapActions("cart", ["deleteProduct"]),
    remove(product) {
      this.deleteProduct(product);
    },
  },
};
</script>