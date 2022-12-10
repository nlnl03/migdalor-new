  
<template>
<div class="havai-container">
    <q-carousel
      autoplay
      
      v-model="0"
      height="600px"
    >
      <q-carousel-slide :name="0" img-src="@/assets/nightSky.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
    
      <q-carousel-slide :name="1" img-src="@/assets/daySky.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Third stop</div>
          <div class="text-subtitle1">Famous Bridge</div>
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
            slide:0
        }
    }

}
</script>

<style>
.havai-container{
    width:100%;
    height:100%;
        grid-area: noticeBoard; 

}
</style>