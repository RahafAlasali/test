<template>
  <div>
    <Header class="container" />
    <Products title="Latest products" :products="products" class="container" />
    <sctions-collection />
    <Categoris :categoies="data" class="container" />
    <Footer class="container" />
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
          id: "1", //
          title: "Headphone",
          price: "180",
          image: "headphones.jpg",
        },
        {
          id: "2",
          title: "Necklace",
          price: "50",
          image: "necklace-jewelry.jpg",
        },
        {
          id: "3",
          title: "Home Appliances",
          price: "250",
          image: "background.jpg",
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