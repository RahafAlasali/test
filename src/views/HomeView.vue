<template>
  <div class="container">
    <Header />
    <Products title="Latest products" :products="products" />
    <sctions-collection />
    <Categoris :categoies="data" />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/header.vue";
import SctionsCollection from "@/components/sctions.vue";
import Products from "@/components/productsList.vue";
import Categoris from "@/components/categoris.vue";
export default {
  name: "HomeView",
  components: {
    Header,
    SctionsCollection,
    Products,
    Categoris,
  },
  data() {
    return {
      products: [
        {
          id: "5",
          title: "Title",
          price: "150",
          image: "@/assets/imgs/headphones.jpg",
        },
      ],
      data: [],
    };
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => (this.data = res.data))
      .catch();
  },
};
</script>