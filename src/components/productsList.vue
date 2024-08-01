<template>
  <div class="py-3">
    <h2
      class="text-center header-p text-uppercase position-relative"
      style="font-family: 'Marcellus'"
    >
      {{ $props.title }}
    </h2>
    <!-- <img src="@/assets/icons/COMPANYLogo.png" alt="" height="80" width="350" /> -->
    <div class="row">
      <carousel
        class="container"
        :per-page="3"
        :navigate-to="someLocalProperty"
        :mouse-drag="false"
        :paginationPadding="2"
        paginationColor="#e7c969"
        paginationActiveColor="#e7c969"
      >
        <!-- <div> -->
        <slide
          v-for="(prd, index) in $props.products"
          :key="index"
          class="col-4 px-1"
        >
          <product-item :product="prd"
        /></slide>
        <!-- </div> -->
      </carousel>
    </div>
  </div>
</template>
<script>
import productItem from "@/components/productItem.vue";
export default {
  name: "prodList",
  components: {
    productItem,
  },
  props: ["title", "products"],
  data() {
    return {};
  },
};
</script>

<style >
.header-p::before {
  content: "";
  position: absolute;
  display: block;
  background-image: url("@/assets/icons/COMPANYLogo.png");
  height: 50px;
  width: 50px;
}
.VueCarousel-dot--active {
  height: 15px !important;
  width: 15px !important;
}
.VueCarousel-inner {
  justify-content: space-between;
}
</style>