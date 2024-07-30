<template>
  <div>
    <nav class="navbar" style="border-bottom: solid 15px #e7c969">
      <div
        class="container d-flex justify-content-spacebettwen align-items-end"
      >
        <img src="@/assets/imgs/logo.png" width="150" height="100" alt="..." />
        <div>
          <div class="d-flex justify-content-end mb-1">
            <a href="" class="mx-2">
              <img
                src="@/assets/icons/instagram_Gold.png"
                alt=""
                width="20"
                height="20"
            /></a>
            <a href="" class="mx-2">
              <img
                src="@/assets/icons/facebook_Gold.png"
                alt=""
                width="20"
                height="20"
            /></a>
            <a href="" class="mx-2">
              <img
                src="@/assets/icons/Twitter.png"
                alt=""
                width="20"
                height="20"
            /></a>
            <a href="" class="mx-2">
              <img
                src="@/assets/icons/Youtube.png"
                alt=""
                width="20"
                height="20"
            /></a>
          </div>
          <div class="pt-2">
            <ul class="links">
              <router-link
                v-for="(t, index) in links"
                :key="index"
                :to="t.link"
                class="mx-1 px-1"
                style="color: #ffff; font-family: 'Marcellus'"
              >
                {{ t.title }}
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      links: [
        { title: "Home", link: "/" },
        { title: "Cart", link: "/cart" },
        { title: "Elictronics", link: "" },
        { title: "Jewelry", link: "" },
        { title: "Men Closthing", link: "" },
        { title: "Woman Closthing", link: "" },
        { title: "Media Center", link: "" },
        { title: "Contact us", link: "" },
      ],
    };
  },
};
</script>


<style scoped>
.links a {
  text-decoration: none;
}
</style>
