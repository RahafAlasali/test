<template>
  <div class="py-3">
    <h2
      class="text-center header-p text-uppercase"
      style="position: relative; font-family: 'Marcellus'"
    >
      {{ $props.title }}
    </h2>
    <!-- <img src="@/assets/icons/COMPANYLogo.png" alt="" height="80" width="350" /> -->
    <div class="row pt-2">
      <product-item
        v-for="(prd, index) in $props.products"
        :key="index"
        :product="prd"
        class="col-10 col-md-4"
      />
    </div>
  </div>
</template>
<script>
import productItem from "@/components/productItem.vue";
export default {
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
</style>