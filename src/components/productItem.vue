<template>
  <div>
    <div class="card border-0 bg-transparent">
      <div class="bg-white">
        <img
          :src="item.image"
          class="card-img-top"
          alt="..."
          height="250"
          style="object-fit: contain"
        />
        <div class="card-img-overlay">
          <i class="bi bi-heart" style="color: #e7c969"></i>
        </div>
      </div>
      <div class="card-body text-center">
        <h5 class="card-title" style="font-family: 'Marcellus'">
          {{ item.title }}
        </h5>
        <p class="card-text">{{ item.price }}</p>
        <div class="d-grid col-8 mx-auto mt-3 text-center">
          <button
            type="button"
            class="btn btn-outline-light btn-sm text-uppercase"
            @click="
              $router.push({ name: 'productDetailes', params: { id: '2' } })
            "
          >
            see more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {};
  },
  computed: {
    item() {
      return this.$props.product;
    },
  },
};
</script>
<style>
.card-img-overlay {
  left: unset !important;
}
</style>