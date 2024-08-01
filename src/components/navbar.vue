<template>
  <div>
    <nav class="navbar" style="border-bottom: solid 15px #e7c969">
      <div class="d-flex justify-content-end">
        <div class="d-block d-sm-none">
          <i
            class="bi bi-x-circle color-primary h2"
            @click="drawer = !drawer"
          ></i>
        </div>
      </div>
      <div
        class="container d-flex justify-content-spacebettwen align-items-end"
      >
        <img
          src="@/assets/imgs/logo.png"
          height="100"
          alt="..."
          class="d-none d-sm-block col-2"
        />
        <div class="col-md-9 pt-1 offset-md-1">
          <div class="d-flex justify-content-end mb-1">
            <div class="d-none d-sm-block">
              <a
                href=""
                class="mx-2"
                v-for="(icon, index) in icons"
                :key="index"
              >
                <img
                  :src="require(`@/assets/icons/${icon.icon}`)"
                  alt=""
                  width="20"
                  height="20"
              /></a>
            </div>
          </div>
          <div class="pt-2 d-none d-sm-block">
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
          <div
            v-if="drawer"
            class="bg-color-primary"
            style="height: 100vh; width: 100vw"
          >
            <div
              v-for="(t, index) in links"
              :key="index"
              class="text-center py-2"
            >
              <router-link
                :to="t.link"
                class="mx-1 px-1 text-white"
                style="font-family: 'Marcellus '; font-size: x-large"
              >
                {{ t.title }}
              </router-link>
            </div>
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
      drawer: false,
      links: [
        { title: "Home", link: "/" },
        { title: "Cart", link: "/cart" },
        { title: "Elictronics", link: "/productCat/electronics" },
        { title: "Jewelery", link: "/productCat/jewelery" },
        { title: "Men Closthing", link: "/productCat/men's clothing" },
        { title: "Woman Closthing", link: "/productCat/women's clothing" },
        { title: "Media Center", link: "/productCat/" },
        { title: "Contact us", link: "/productCat/" },
      ],
      icons: [
        { icon: "instagram_Gold.png", link: "" },
        { icon: "facebook_Gold.png", link: "" },
        { icon: "Twitter.png", link: "" },
        { icon: "Youtube.png", link: "" },
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
