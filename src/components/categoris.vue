<template>
  <div class="img-background" style="position: relative">
    <div
      class="d-flex align-items-center"
      style="
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        background-color: #000000c4;
        position: absolute;
      "
    >
      <div class="row container mx-0">
        <h2
          class="text-uppercase mb-5 text-center"
          style="color: #e7c969; font-family: 'Marcellus'; font-size: xxx-large"
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
              class="text-uppercase d-flex align-items-center justify-content-center text-white"
              style="
                background-color: #e7c969;
                height: 130px;
                opacity: 0.7;
                font-family: 'Marcellus';
                font-size: x-large;
              "
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