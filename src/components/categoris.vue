<template>
  <div class="img-background position-relative">
    <div
      class="d-flex align-items-center position-absolute w-100 h-100 top-0 right-0"
      style="background-color: #000000c4"
    >
      <div class="row container mx-0">
        <h2
          class="text-uppercase mb-5 text-center color-primary"
          style="font-family: 'Marcellus'; font-size: xxx-large"
          data-aos="fade-down"
        >
          Categoris
        </h2>
        <div
          v-for="(cat, index) in $props.categoies"
          :key="index"
          class="col-md-3 col-12 mb-2"
        >
          <router-link :to="`/productCat/${cat}`" class="text-white">
            <!-- to:{name:"" , param:""} -->
            <div
              class="bg-color-primary text-uppercase d-flex align-items-center justify-content-center text-white"
              style="
                height: 130px;
                opacity: 0.7;
                font-family: 'Marcellus';
                font-size: x-large;
              "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              {{ cat }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categoies"],
  data() {
    return {};
  },
};
</script>
<style>
.img-background {
  background-image: url("@/assets/imgs/Header2.jpg");
  background-size: cover;
  width: 100%;
  height: 500px;
}
</style>