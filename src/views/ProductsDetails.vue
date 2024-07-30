<template>
  <div class="container py-4">
    <div class="row mt-4">
      <div class="col-md-5 col-12 px-3">
        <!-- <img :src="product.title" alt="" /> -->
        <img :src="product.image" alt="" width="300" height="300" />
      </div>
      <div class="col-md-7 col-12 mt-3">
        <div class="px-4">
          <h2 style="font-family: 'Marcellus'">
            {{ product.title }}
          </h2>
          <p class="pt-2">
            {{ product.description }}
          </p>
          <div class="d-grid col-md-5 col-10 mt-5">
            <button
              type="button"
              class="btn btn-outline-light text-uppercase"
              @click="add(product)"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      id: null,
      product: null,
    };
  },
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    add(item) {
      this.addProductToCart({ item });
    },
  },
  computed: {
    ...mapState("cart", ["cart"]),
  },
  mounted() {
    this.id = this.$route.params.id;
    axios
      .get(`https://fakestoreapi.com/products/${this.id}`)
      .then((res) => (this.product = res.data))
      .catch();
  },
};
</script>