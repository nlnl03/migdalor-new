<template>

    <div class="night-and-day-and-shigra"> 
       <div class="semel-and-shigra-container"> 
      <div class="shigra-container">
       <span class="shigra-title">  כוננות </span>
                <!-- <h3 class="shigra-title"> כוננות</h3> -->
                <!-- <span class="shigra-circle"> כוננות</span> -->
        </div>
         <div class="logo-container">
          <span>
            {{shigra}}
            </span>
              <i class="bi bi-arrow-clockwise"> </i>

        </div>
      </div>
    <div class="night-and-day" :class="{night:!isDay,days:isDay}">
      <div v-if="isDay" class="sun"></div>
      <div v-if="!isDay" class="moon"></div>

             <div class="clock"> 
                        <!-- <i class="bi bi-moon-fill night-icon"></i> -->

          <div class="times-container"> 



           </div>
                           <span class=" week-day">   {{day}}</span>
                  <span class="day loaz ">   {{loaziDate}}</span>
                  <span class="mid"> </span>
                <span class="day ">   {{hebrewDate}}</span>
               <span ref="span" :seconds = "seconds" class="day big-clock">{{time}}</span>

    </div>
    </div>
   
    </div>
</template>

<script>
// import {Engine} from "tsparticles-engine"
import {loadStarsPreset} from "tsparticles-preset-stars"
import Hebcal from "hebcal"
import moment from 'moment'
export default {
    name:"Time",
    props:["shigra"],
     data(){
      return{
        isDay:false,

        loaziDate:"",
        hebrewDate:"",
        day:"dayInWeek",
        days:["שבת","שישי","חמישי","רביעי","שלישי","שני","ראשון"],
               time:"",
            seconds:"",
            clearInt:"",
            clearSunMoonInt:"",
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
        },
        checkIfDay(){

            var currentHour = moment().format("HH");

            if (currentHour >= 6 && currentHour < 20){
                this.isDay = true
          } else{
                  this.isDay = false

            }
            


        }
    },
    beforeMount(){
      this.checkIfDay()

    },
    mounted(){
      this.calCLoaziDate()
      this.getHebrewDate()
      this.doAll()
      

        this.clearInt =setInterval(()=>{
            this.doAll()
        }
        , 1000);
        this.clearSunMoonInt = setInterval(()=>{
          this.checkIfDay()
        },3600000)
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
.sun {
	width:80px;
	height: 80px;
  position:absolute;
  top:8%;
  right:15%;
	background-color: #FFDE00;
	border-radius: 50%;
}
.moon{ 
	width:60px;
	height: 60px;
  position:absolute;
  top:8%;
  right:15%;
	background-color: white;
	border-radius: 50%;

}

@keyframes sunrise {
	0% {
		box-shadow: none;
	}
}

@keyframes rays {
	0% {
		box-shadow: 
		0 0 0 0 #FFDE0080,
		0 0 0 20px #FFDE0080,
		0 0 0 40px #FFDE0040,
		0 0 0 60px #FFDE0020,
		0 0 0 80px #FFDE0010,
		0 0 40px 100px #FFDE0010;
	}
	100% {
		box-shadow: 
		0 0 0 20px #FFDE0080,
		0 0 0 40px #FFDE0040,
		0 0 0 60px #FFDE0020,
		0 0 0 80px #FFDE0010,
		0 0 0 100px #FFDE0000,
		0 0 40px 100px #FFDE0010;
	}
}
.logo-container{
  width: 80%;
  height: 50%;
  position: relative;
  
}
.logo-container span{
   z-index:1;
  position: absolute;
  top: 60%;
  font-family: var(--font-title);
  font-size: 24px;
  /* color: green; */
  left: 50%;
  transform: translate(-50%,-50%);

}
.logo-container i{
  
  position: absolute;
  top: 60%;
  font-size: 120px;
  /* color: green; */
  left: 50%;
  transform: translate(-50%,-50%);
}
.shigra-title{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-family: var(--font-title);
  font-size: 40px;
}
.shigra-circle{
  position: absolute;
  top: 70%;
  left:50%;
  border-radius: 50%;
  font-size: 30px;
  color: white;
  background-color: green;
  padding: 0.8em 0.8em;
  transform: translate(-50%,-50%);
}
.loaz{
    /* width: 30%; */

  /* text-align: right !important; */
}
.times-container .day{
  /* width: 60%; */
  /* text-align: left; */
}
.week-day{
  font-size: 17px;
  color: rgba(255, 255, 255, 1);
}
.mid{
  /* border-right: 1px solid white; */
  border-left: 1px solid white;
  /* padding: 0px 10px ; */
  /* /* margin-left: 10px; */
  margin-right: 10px; 
}
.times-container{
  position: relative;
  /* padding-top: 10px; */
  font-size:17px !important;
    display: flex;
    width: 100%;
    
    margin: 0 auto;
    align-items: flex-start;

    justify-content: center;
    flex-direction: row;
  }
.day{
  color: rgba(255, 255, 255, 1);
}
.clock{
  position: relative;
  top:15px;
      justify-content: center;
      display: flex;
      align-items: center;
      /* align-items: flex-start; */
      flex-direction: column;
    width: 100%;
      height: 100%;
}
.clock span{
  width: 60%;
  text-align: center;
}





.big-clock{
  
    /* position: absolute; */
    /* top: 73%; */
    /* left: 52%;  */
    /* transform: translate(-50%,-50%); */
    display:inline-block;
    /* margin-left:0.5vw; */
     color: rgba(255, 255, 255,1);

    /* font-family: var(--font-clock); */
    font-size:20px;
}
.big-clock::after { 
    content: attr(seconds);
  color: rgba(255, 255, 255, 1);
    top:35%;
    box-sizing: border-box;
   
    /* font-family: var(--font-clock); */
    /* font-size:35px; */
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
.night{
    background-image:url(../../../assets/nightSky.jpg);

}
.days{
      background-image:url(../../../assets/daySky.jpg);

}
.night-and-day{
    position: relative;
    border-radius: 30px;
    background-size: 100% 100%;
    /* background-origin: border-box; */
    background-position: 0% 0% !important;
    background-repeat:  no-repeat;
    width: 50%;
    height: 100%;
}
.semel-and-shigra-container{
  height: 100%;
  width: 50%;
  border-radius: 30px;
  /* background-color: white; */
}
.shigra-container{
  position: relative;
    width:80%;
    height: 50%;
    border-bottom: 1px solid grey;
}
.night-and-day-and-shigra{
       grid-area: Time; 
       justify-content: space-between;
      display: flex;
      flex-direction: row;
}

</style>