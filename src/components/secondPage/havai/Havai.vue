  
<template>
<div class="havai-container">
    <q-carousel
    autoplay
      animated
      v-model="nide"
      height="auto"
      infinite
    >
      <q-carousel-slide  v-for="slide in slides" :key="slide.description" :img-src="slide.sr" :name="slide.place" >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">{{slide.description}}</div>
          <div class="text-subtitle1">{{slide.place}}</div>
        </div>
      </q-carousel-slide>
    
      
    </q-carousel>
    </div>
</template>

<script>
export default {
    name:"Havai",
    data(){
        return{
          nide:["at night", "at day"],
            slides:[{
              "place":"at night",
              "description":"pictureOfNight",
              "sr":"https://toppng.com/uploads/preview/transparent-deco-sunpicture-11546504442mgfcqrhzmh.png"
            },{
            "place":"at day",
              "description":"pictureOfDay",
              "sr":"https://cdn.quasar.dev/img/mountains.jpg"
            }]
        }
    },
    beforeMount(){
      
    }

}
</script>

<style>
.custom-caption{
  text-align: center;
  padding: 12px;
  color: white;
  /* position: absolute; */
  /* bottom: 0%; */
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  
  background-color: rgba(0, 0, 0, .3);
}
.havai-container{
    width:100%;
    height:100%;
  
        grid-area: noticeBoard; 

}
</style>