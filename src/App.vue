<template>
  <topNav />
   <div class="grid-box">
    <div class="il-flag"> <TimeDate /></div>
    <div class="hirum-box"> <hirumNum /> </div>
    <div class="messages-box"> <messagesComp /> </div>
    <div class="activity-times"> <activityTimes /> </div>
   </div>
</template>

<script>
import topNav from './components/topNav.vue';
// import ilFlag from './components/flag.vue'
import hirumNum from './components/hirumNum.vue'
import messagesComp from './components/messages.vue'
import activityTimes from './components/activityTimes.vue'
import TimeDate from './components/TimeDate.vue'

export default {
  name: 'App',
  components: {
    topNav,
    // ilFlag,
    hirumNum,
    messagesComp,
    activityTimes,
    TimeDate
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
  /* background-color: rgba(226, 225, 225, 0.61) !important; */
  background-image: url("@/assets/background2.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
    width: 100%;
  height: 100%;
  z-index: -1; 
   position: fixed;

}
body::after{
  content: "";
  display: block;
  background-color: rgba(69, 74, 92, 0.3);  
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; 
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
  margin-top: 30px;
  margin-left: 5%;
  margin-right: 5%;
  display: grid;
  grid-template-columns: 1fr 2.8fr 1fr ;
  grid-template-rows:  150px 505px;
  grid-column-gap: 10px;
  grid-row-gap: 0;

}

.il-flag {
   grid-area: 1 / 3 / 2 / 4; 
   /* width: 350px; */
   justify-content: center;
   align-items: center;
   display: flex; 
}
.hirum-box {
   grid-area: 2 / 3 / 3 / 4; 
   /* background-color: #d3d3d37a ; */
   /* background-color: #d9d9d9bf; */
   color: black;
  border-radius: 15px;
  /* height: 480px; */
 
}
.messages-box {
   grid-area: 1 / 2 / 2 / 3; 
   max-height: 500px;
    height: 650px;
   direction: rtl;
   
    }
.activity-times {
   grid-area: 1 / 1 / 2 / 2; 
   /* width: 400px; */
   height: 790px;
       color: white;

}
.div5 { 
  grid-area: 3 / 3 / 4 / 4; 
  width: 250%;
  background: blue;
}

@media (max-width:1280px) {
  .grid-box{
    margin-left: 4%;
    margin-right: 3%;
    grid-column-gap: 20px;
    grid-row-gap: 25px;
    grid-template-columns: 0.8fr 2.2fr .9fr;
          grid-template-rows:  100px 100%;

  }
   .hirum-flex:first-child{
    margin-bottom: 0 !important;
  }
  .hirum-flex h3{
    font-size: 30px;
  }
  body{
    background-position: 70%;
  }
  .messages-container{
    height: 380px !important;
  }
  .hirum{
    margin: 12px 0 !important;

  }
  .noticeBoard[data-v-5b2f7148] {
    width: 88%;
  } 
  .hirum-box{
    display: flex;
    justify-content: flex-end;
  }
  .activity-times h3{
    font-size: 34px;
  }
  .activity-flex{
    width: 100% !important;

  }
 }
 
 </style>
