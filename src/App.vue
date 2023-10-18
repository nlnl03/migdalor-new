<template>
  <topNav />
   <div class="grid-box">
    <div class="il-flag"> <ilFlag /> </div>
    <div class="hirum-box"> <hirumNum /> </div>
    <div class="messages-box"> <messagesComp /> </div>
    <div class="activity-times"> <activityTimes /> </div>
   </div>
</template>

<script>
import topNav from './components/topNav.vue';
import ilFlag from './components/flag.vue'
import hirumNum from './components/hirumNum.vue'
import messagesComp from './components/messages.vue'
import activityTimes from './components/activityTimes.vue'

export default {
  name: 'App',
  components: {
    topNav,
    ilFlag,
    hirumNum,
    messagesComp,
    activityTimes,
    
  }
}
</script>

<style>
#app {
  font-family:var(--font-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* margin-top: 20px; */
}
body{
  background-color: rgba(226, 225, 225, 0.61) !important;
}

@font-face {
  font-family: openSansBold;
  src: url(assets/opensanshebrew-extrabold.woff2);
}
@font-face {
  font-family: openSans;
  src: url(assets/opensanshebrew-regular.woff2);
}
@font-face {
  font-family: assistant;
  src: url(assets/Assistant-VariableFont_wght.ttf);
}

:root{
   --font-title:openSansBold;
   --font-bold:700;
   --font-primary: openSans;
   --font-secondary:assistant;
   --bg-secondary-color:#dc291e;
   --bg-color: rgb(19,126,233);

}

.grid-box {
  margin-top: 40px;
  margin-left: 5%;
  margin-right: 7%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows:  250px 505px;
  grid-column-gap: 10px;
  grid-row-gap:52px;

}

.il-flag {
   grid-area: 1 / 5 / 2 / 6; 
   width: 350px; 
}
.hirum-box {
   grid-area: 2 / 5 / 3 / 6; 
   background-color: #d3d3d37a ;
   color: black;
  border-radius: 15px;
  height: 480px;
 
}
.messages-box {
   grid-area: 1 / 3 / 2 / 4; 
   max-height: 500px;
   width: 750px;
   height: 650px;
   direction: rtl;
 }
.activity-times {
   grid-area: 1 / 1 / 2 / 2; 
   width: 400px;
   height: 790px;
}
.div5 { 
  grid-area: 3 / 3 / 4 / 4; 
  width: 250%;
  background: blue;
}

@media (max-width:1280px) {
  .grid-box{
      margin-left: 7%;
    margin-right: 5%;
      grid-column-gap: 10px;


  }
  .div1 {
    width: 300px; 
  }
}
 
 </style>
