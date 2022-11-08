<template>
  <!-- <div id="tsparticles" class="night-and-day"> 
    <i class="bi bi-moon-fill"></i>

    </div> -->
    <div class="night-and-day">
          <i class="bi bi-moon-fill night-icon"></i>
          <div class="particles-container">
    <Particles id="tsparticles" :options="options" :particlesInit="particlesInit" />
    </div>
    </div>
</template>

<script>
// import {Engine} from "tsparticles-engine"
import {loadStarsPreset} from "tsparticles-preset-stars"

export default {
    name:"Time",
    data(){
      return{
        options:{
           background: {
    color: {
      value: "#063c5c",
    },},
          fullScreen:{
            enable:false,
          },
          preset:"stars"
        }
      }
    },
    mounted(){
      
    },
    components:{
        
    },
    methods:{
      async particlesInit(engine){
        await loadStarsPreset(engine)

      }
    }
}
</script>

<style >
.particles-container{
  height: 100%;
 

}
.particles-container div{
  height: 100%;
}
 canvas{
  border-radius: 20px !important;
}
.night-icon{
    color: white;
    position: absolute;
    left: 10%;
    font-size: 100px;
}
.night-and-day{
    position: relative;
    border-radius: 30px;
      background: linear-gradient(to bottom , #0a2342,#283e51 );
      
     grid-area: Time; 
}



</style>