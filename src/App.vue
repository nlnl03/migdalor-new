<template>
 <Shigra/> 

</template>

<script>
import Shigra from '@/views/Shigra.vue'

export default {
  name: 'App',
  components: {
    Shigra
  }
}
</script>

<style>

@font-face {
  font-family: assistant;
  src: url(assets/Assistant-VariableFont_wght.ttf);
}
@font-face {
  font-family: openSans;
  src: url(assets/opensanshebrew-regular.woff2);
}
@font-face {
  font-family: openSansBold;
  src: url(assets/opensanshebrew-extrabold.woff2);
}

:root{
  --bg-color:rgb(255, 255, 255);
  --font-primary: openSans;
  --font-title:openSansBold;
  --font-secondary:assistant;
  --font-primary-color:black;
  --font-light:400;
  --font-bold:700;
  --font-secondary-color:grey

}


#app {
  /* direction: rtl; */
  font-family:var(--font-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  /* margin-top: 60px; */
}
*{
  margin: 0;
}
body,html{
  margin: 0;
  height: 100%;

}



</style>
