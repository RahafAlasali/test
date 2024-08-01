<template>
  <div class="container">
    <Products title="products" :products="data" />
  </div>
</template>

<script>
import axios from "axios";
import Products from "@/components/productsList.vue";
export default {
  name: "prdView",
  components: {
    Products,
  },
  data() {
    return {
      id: null,
      data: [],
    };
  },
  mounted() {
    this.id = this.$route.params.cat;
    axios
      .get(`https://fakestoreapi.com/products/category/${this.id}`)
      .then((res) => (this.data = res.data))
      .catch();
  },
};
</script>