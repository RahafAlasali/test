<template>
  <div class="py-3">
    <h2
      class="text-center header-p text-uppercase position-relative"
      style="font-family: 'Marcellus'"
    >
      {{ $props.title }}
    </h2>
    <!-- <img src="@/assets/icons/COMPANYLogo.png" alt="" height="80" width="350" /> -->

    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators pt-2">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner row" style="padding-bottom: 50px">
        <div
          class="col-10 col-md-4"
          v-for="(prd, index) in $props.products"
          :key="index"
        >
          <div class="pt-2 carousel-item" :class="{ active: index < 3 }">
            <product-item :product="prd" />
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev d-none"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next d-none"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
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