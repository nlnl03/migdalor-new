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
.q-carousel{
  width: 100%;
}
.q-carousel__slide{
  height: 400px;
  position: relative;
      border-radius: 20px;

  min-height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

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
  --overall-bg-color:rgba(226, 225, 225, 0.61);
  --bg-color:rgb(19,126,233);
    /* --bg-color:rgb(49, 63, 58); */

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

@media (max-width: 1630px) {
  .subgrid-container{
    font-size: 13px !important;
    width: 90% !important;
  }
  .flex-birthdays{
    width: 100% !important;
  }
  
  
}
@media(max-width:1280px) {
  .wrap{
    padding: 0 5% !important;

  }
  .fc .fc-col-header-cell-cushion{
    font-size: 16px;
  }
}

</style>
