<template>
  <div style="background-color: black; color: #fff !important">
    <div id="app" class="">
      <router-view :key="$route.path" />
    </div>
  </div>
</template>

<script>
</script>

<style>
@font-face {
  font-family: "Marcellus";
  src: url("@/assets/font/Marcellus/MarcellusRegular.ttf");
}
@font-face {
  font-family: "RobotoFlexRegular";
  src: url("@/assets/font/Roboto_Flex/static/RobotoFlex-Regular.ttf");
}
@font-face {
  font-family: "RobotoFlex";
  src: url("@/assets/font/Roboto_Flex/RobotoFlex-VariableFont_GRAD\,XTRA\,YOPQ\,YTAS\,YTDE\,YTFI\,YTLC\,YTUC\,opsz\,slnt\,wdth\,wght.ttf");
}
body {
  font-family: "RobotoFlexRegular" !important;
}

/* edit in scss thiem promary */
.bg-color-primary {
  background-color: #e7c969;
}

.color-primary {
  color: #e7c969;
}

::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f9f9f9;
  width: 6px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #121212;
  border-radius: 2px;
}
</style>

