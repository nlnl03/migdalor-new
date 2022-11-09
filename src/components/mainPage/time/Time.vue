<template>
  <!-- <div id="tsparticles" class="night-and-day"> 
    <i class="bi bi-moon-fill"></i>

    </div> -->
    <div class="night-and-day">
          <i class="bi bi-moon-fill night-icon"></i>
          <div class="particles-container">
             <div class="clock " > 
        <div class = "stuff"> 
            <span ref="span" :seconds = "seconds" class="big-clock">{{time}}</span>
            
        </div> 
    </div>
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
               time:"",
            seconds:"",
            clearInt:"",
        options:{
            background: {
              color:
              {
              value: "#063c5c",
      },},
          fullScreen:{
            enable:false,
          },
          preset:"stars"
        }
      }
    },
    methods:{
       async particlesInit(engine){
        await loadStarsPreset(engine)

      },
        updateTime(){
                var date = new Date();
                var h = date.getHours(); // 0 - 23
                var m = date.getMinutes(); // 0 - 59
               
                
                
                h = (h < 10) ? "0" + h : h;
                m = (m < 10) ? "0" + m : m;
                
                
                this.time = h + ":" + m 

                
    
        }
        ,
        updateSeconds(){
              var date = new Date();
              var s = date.getSeconds(); // 0 - 59
              s = (s < 10) ? "0" + s : s;
              this.seconds=":"+ s
            
        },
        doAll(){
             this.updateSeconds()
              this.updateTime()
        }
    },
    
    mounted(){
        this.doAll()
        this.clearInt =setInterval(()=>{
            this.doAll()
        }
        , 1000);
        },
        unmounted(){
            clearInterval(this.clearInt)
        }
        
    
,
   
   
    components:{
        
    },

}
</script>

<style >
.clock{
    position:absolute;
    top:15%;
    left:5%;
    width:90%;
    height:5.5%;
     height:auto;
    
}

.stuff{
    position: relative;
    border-bottom:none;
    width:100%;
    
   
}

.big-clock{
    
    display:inline-block;
    margin-left:0.5vw;
    color:rgba(255, 255, 255, 0.836);
    font-family: var(--font-clock);
    font-size:1.9vw;
}
.big-clock::after { 
    content: attr(seconds);
    color:rgba(255, 255, 255, 0.836);
    top:35%;
    box-sizing: border-box;
   
    font-family: var(--font-clock);
    font-size:1vw;
}
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
    color: rgba(255, 255, 255, 0.836);
;
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