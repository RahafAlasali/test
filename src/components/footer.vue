<template>
  <div class="container">
    <footer class="pb-1">
      <hr class="bg-color-primary" style="height: 4px" />
      <section class="" style="font-family: 'Marcellus'">
        <div class="text-md-start mt-3">
          <div class="row mt-3">
            <div class="col-md-5 col-lg-4 col-xl-3 mb-4">
              <img
                src="@/assets/imgs/logo.png"
                width="300"
                height="200"
                class=""
              />
              <div class="d-flex justify-content-center">
                <div v-for="(d, index) in data" :key="index">
                  <a href="i.link" class="mx-2">
                    <img
                      :src="require(`@/assets/icons/${d.img}`)"
                      alt=""
                      width="30"
                      height="30"
                  /></a>
                </div>
              </div>
            </div>

            <div class="col-4 col-md-2 mx-auto mt-4" style="color: #e7c969">
              <p>
                <router-link
                  to="/"
                  exact
                  class="text-white"
                  style="font-size: x-large"
                  >Home</router-link
                >
              </p>
              <p>
                <a href="#!" class="text-reset">About us</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Media Center</a>
              </p>
              <p>
                <a href="#!" class="text-reset"> Contact us</a>
              </p>
            </div>

            <div class="col-4 col-md-2 mx-auto mt-4 color-primary">
              <p>
                <a href="#!" class="text-reset">Elictronics</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Jewelry</a>
              </p>
              <p>
                <a href="#!" class="text-reset"> Men Closthing</a>
              </p>
              <p>
                <a href="#!" class="text-reset"> Woman Closthing</a>
              </p>
            </div>

            <div class="col-4 col-md-2 mx-auto mb-md-0 mt-4 color-primary">
              <p class="text-white" style="font-size: x-large">Contact us</p>
              <p>+971 45 567 488</p>
              <p>+971 23 567 789</p>
              <!-- <p>info@almotthedon.com</p> -->
            </div>
          </div>
        </div>
      </section>
      <hr class="my-1" style="height: 4px" />
      <div class="text-center pt-1">
        ©Al Mottahedon 2024 . All Rights Reseved.
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { img: "facebook_White.png", link: "" },
        { img: "instagram_White.png", link: "" },
        { img: "TwitterWhite.png", link: "" },
        { img: "YoutubeWhite.png", link: "" },
      ],
    };
  },
};
</script>
<style>
a {
  text-decoration: none !important;
  color: white !important;
}
</style>
<!-- <style lang="sass">
$body-font-family: 'MyFont', sans-serif
</style> -->