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
@font-face{
    font-family:clockFont;
    src:url("./assets/RobotoMono-VariableFont_wght.ttf")
}
@font-face {
  font-family: openSansBold;
  src: url(assets/opensanshebrew-extrabold.woff2);
}

:root{
  --overall-bg-color:rgb(255, 255, 255);
  --bg-color:rgb(19,126,233) ;
  --bg-secondary-color:#dc291e;
  --changing-color:#063c5c;
  --font-primary: openSans;
  --font-title:openSansBold;
  --font-secondary:assistant;
  --font-dark-color:black;
  --font-light-color:white;
  --font-light:400;
  --font-bold:700;
  --font-clock:clockFont;
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
