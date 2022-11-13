<template>
  <!-- <div id="tsparticles" class="night-and-day"> 
    <i class="bi bi-moon-fill"></i>

    </div> -->
    <div class="night-and-day">
             <div class="clock"> 
                        <i class="bi bi-moon-fill night-icon"></i>

          <div class="times-container"> 
                <span class="day"> יום  {{day}}</span>
                    <span class="day">   {{loaziDate}}</span>

                <span class="day">   {{hebrewDate}}</span>
                    <span ref="span" :seconds = "seconds" class="day big-clock">{{time}}</span>


    </div>
        <!-- <Particles id="tsparticles" :options="options" :particlesInit="particlesInit" /> -->
    </div>
    </div>
</template>

<script>
// import {Engine} from "tsparticles-engine"
import {loadStarsPreset} from "tsparticles-preset-stars"
import Hebcal from "hebcal"
export default {
    name:"Time",
     data(){
      return{
        loaziDate:"",
        hebrewDate:"",
        day:"dayInWeek",
        days:["שבת","שישי","חמישי","רביעי","שלישי","שני","ראשון"],
               time:"",
            seconds:"",
            clearInt:"",
        options:{
            background: {
              color:"#070B34"

         
       },
          fullScreen:{
            enable:false,
          },
          preset:"stars"
        }
      }
    },
    methods:{
      calCLoaziDate(){
          var date = new Date();
          var dd = String(date.getDate()).padStart(2,'0')
          var mm = String(date.getMonth()+1).padStart(2,'0')
          var yyy = date.getFullYear();
          this.loaziDate = dd  + '.' + mm + '.' + yyy;
      },
      getHebrewDate(){
          var unparsed = new Hebcal.HDate().toString('h');
          var arr = unparsed.split(' ');
          this.hebrewDate = `${arr[0]} ב${arr[1]} ${arr[2].slice(1)} `
      },
      showDate(){
        var date = new Date();
        var day = 6-date.getDay();
        this.day = this.days[day];
      },
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
          this.showDate()
             this.updateSeconds()
              this.updateTime()
        }
    },
    
    mounted(){
      this.calCLoaziDate()
      this.getHebrewDate()
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
.times-container{
  padding-top: 10px;
  font-size: 30px !important;
    display: flex;
    flex-direction: column;
  }
.day{
  color: rgba(255, 255, 255, 1);
}
.clock{
  text-align: right;
    position:absolute;
    /* top:15%; */
    right:5%;
    width:100%;
    height:5.5%;
     height:auto;
    
}




.big-clock{
  
    /* position: absolute; */
    /* top: 73%; */
    /* left: 52%;  */
    /* transform: translate(-50%,-50%); */
    display:inline-block;
    /* margin-left:0.5vw; */
     color: rgba(255, 255, 255,1);

    font-family: var(--font-clock);
    font-size:50px;
}
.big-clock::after { 
    content: attr(seconds);
  color: rgba(255, 255, 255, 1);
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
    color: rgba(255, 255, 255, 1);
;
    position: absolute;
    left: 10%;
    font-size: 100px;
}
.night-and-day{

    position: relative;
    border-radius: 30px;
    background-image:url(../../../assets/nightSky.jpg);
    background-size: 100% 100%;
    background-repeat:  no-repeat;
      
     grid-area: Time; 
}



</style>