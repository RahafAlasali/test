<template>
  <div>
    <div class="card border-0 bg-transparent">
      <div class="bg-white">
        <img
          v-if="$route.path == '/'"
          :src="require(`@/assets/imgs/${item.image}`)"
          class="card-img-top"
          alt="..."
          height="250"
          style="object-fit: contain"
        />
        <img
          v-else
          :src="item.image"
          class="card-img-top"
          alt="..."
          height="250"
          style="object-fit: contain"
        />
        <div class="card-img-overlay">
          <i class="bi bi-heart color-primary"></i>
        </div>
      </div>
      <div class="card-body text-center">
        <h5 class="card-title" style="font-family: 'Marcellus'">
          {{ item.title }}
        </h5>
        <p class="card-text color-primary">{{ item.price }}</p>
        <div class="d-grid col-8 mx-auto mt-3 text-center">
          <button
            type="button"
            class="btn btn-outline-light btn-sm text-uppercase rounded-0"
            style="border-color: #e7c969"
            @click="
              $router.push({ name: 'productDetailes', params: { id: item.id } })
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