  
<template>
<div class="havai-container">
    <q-carousel
    
      animated
      width="100%"
      v-model="nide[0]"
      height="400px"
      infinite
    >
      <q-carousel-slide  v-for="slide in slides" :key="slide.description" :img-src="slide.sr" :name="slide.place" >
        <div class="absolute-bottom custom-caption">
          <h2 >{{slide.description}}</h2>
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
        border-radius:0px 0px 20px 20px;

  left: 0;
  position: absolute;
  
  background-color: rgba(0, 0, 0, .3);
}
.text-subtitle1{
  color:rgba(255, 255, 255, 0.74);
}
.havai-container{
    width:100%;
    height:100%;

  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
        grid-area: noticeBoard; 

}
</style>