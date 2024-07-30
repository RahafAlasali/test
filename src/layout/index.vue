<template>
  <div>
    <nav-bar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>