<template>
  <div class="container py-5">
    <table class="table text-white">
      <thead>
        <tr
          class="text-center color-primary"
          style="font-family: 'Marcellus'; font-size: x-large"
        >
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
            <i class="bi bi-x-circle color-primary h3" @click="remove(item)">
            </i>
          </td>
          <td scope="row">
            <img
              :src="item.image"
              alt=""
              width="100"
              height="80"
              style="object-fit: contain"
            />
          </td>
          <td>{{ item.title }}</td>

          <td>{{ item.price }}</td>
          <td>
            <button
              type="button"
              class="btn btn-sm btn-outline-light"
              @click="item.quantity > 0 ? reduce(item.id) : null"
            >
              <i class="bi bi-dash"></i>
            </button>
            {{ item.quantity }}
            <button
              type="button"
              class="btn btn-sm btn-outline-light"
              @click="increase(item.id)"
            >
              <i class="bi bi-plus"></i>
            </button>
          </td>
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
    ...mapActions("cart", [
      "deleteProduct",
      "reduceQuantityPrd",
      "increaseQuantityPrd",
    ]),
    remove(product) {
      this.deleteProduct(product);
    },
    increase(id) {
      this.increaseQuantityPrd(id);
    },
    reduce(id) {
      this.reduceQuantityPrd(id);
    },
  },
};
</script>