<template>
<div class="wrap">
  <TopBar @swap-page="handleSwapPage" @toggle-transition="handleTransition" />
      <Time :shigra="shigra" />
      <Jobs v-if="isShigra"  :jobs="jobs" />
    

  <BirthdayList v-if="!isShigra" :birthdays="birthdayList" />
  <NoticeBoard v-if="isShigra" :notices="notices" />
    <Havai v-if="!isShigra" />

  <Calendar v-if="events && subjects" :events="events" :subjects="subjects" />
</div>

</template>


<script>
import NoticeBoard from "@/components/mainPage/noticeBoard/NoticeBoard.vue"
import Calendar from "@/components/mainPage/calendar/Calendar.vue"
import BirthdayList from "@/components/secondPage/Birthdays/BirthdayList.vue"
import Time from "@/components/mainPage/time/Time.vue"
import TopBar from "@/components/mainPage/topBar/TopBar.vue"
import Jobs from "@/components/mainPage/jobs/Jobs.vue"
import Havai from "@/components/secondPage/havai/Havai.vue"
import axios from "axios"
import moment from "moment"
export default {
  name: 'Shigra',
  data(){
    return{
      shigraNotice:this.$devUrl+'/notices',
      shigraJobs:this.$devUrl+'/jobs',
      notShigraBirthdays:this.$devUrl+'/birthdayList',
      calendarUrl:this.$devUrl+'/events',
      subjectsUrl:this.$devUrl+'/subjects',
      shigra:"שגרה",
      isTransition: true,
      clearInt:"",
      isShigra:true,
      birthdayList:"",
        events:"",
          subjects:"",
       notices:"",
        jobsTitles:["נהג תורן","מג\"ד תורן","קצין תורן","מפקד תורן ת. מטכ\"ל","מפקד תורן הפת\"ק","מפקד תורן שו\"ב"],
       jobs:""
        
    }
  },
  methods:{
        setToHebrewDate(day){
            var dd = String(day.getDate()).padStart(2,'0');
            var mm = String(day.getMonth() + 1).padStart(2, '0'); //January is 0!
            var today = dd + '/' + mm 
            return today
        },
         getBirthdays(birthdays){
          
             
                     let today  = new Date()
                     
                     let tommarow = new Date()
                     tommarow.setDate(tommarow.getDate() + 1)
                    let twoDays  = new Date();
                    twoDays.setDate(today.getDate() + 2)
                 
                    
                    today = moment.tz(today,"Asia/Jerusalem").toDate()
                    tommarow = moment.tz(tommarow,"Asia/Jerusalem").toDate()
                    twoDays = moment.tz(twoDays,"Asia/Jerusalem").toDate()
                   
                    
              birthdays= birthdays.filter(birthday=>{

                    
                    birthday.birthday = moment.tz(birthday.birthday,"Asia/Jerusalem")
                    birthday.birthday= birthday.birthday.toDate()
                   

                    var isToday = birthday.birthday.getMonth() === today.getMonth() && birthday.birthday.getDate() === today.getDate()
                    var isTommarow = birthday.birthday.getMonth() === tommarow.getMonth() && birthday.birthday.getDate() === tommarow.getDate()
                    var istwoDays =birthday.birthday.getMonth() === twoDays.getMonth() && birthday.birthday.getDate() === twoDays.getDate()
                  

                    return isToday || isTommarow || istwoDays
                })
                birthdays.sort(function(a,b){
                    return a.birthday-b.birthday
                })
                birthdays.forEach(birthday=>{
                    
                    birthday.birthday =this.setToHebrewDate(birthday.birthday)
                    

                })  
                return [...birthdays]
 
            
           
         },
      dateCheck(from,to,current) {

      
      from = new Date(from);
      to = new Date(to);
      current = new Date(current);
      console.log(from,current,to)
      if(current.getDate() == to.getDate() && current >= from.getDate()) {
          return true;
      }
      return false;
}  ,
     async makeApiCalls(){
        const calendarResponse = await axios.get(this.calendarUrl)
        this.events = [...calendarResponse.data.value]
          const subjectReponse = await axios.get(this.subjectsUrl)
          this.subjects = [...subjectReponse.data.value] 
          if(this.isShigra){
              const birthdayData = await axios.get(this.notShigraBirthdays)    
              this.birthdayList = this.getBirthdays([...birthdayData.data.value]);
              console.log(this.birthdayList)

          }else{
              const jobsData = await axios.get(this.shigraJobs)    
              this.jobs = [...jobsData.data.value];
              console.log(this.jobs)
              let today = new Date();
              today = moment.tz(today,"Asia/Jerusalem").toDate();
              this.jobs = this.jobs.filter((job)=>{
                job.start =  moment.tz( job.start,"Asia/Jerusalem").toDate();
                job.end =   moment.tz(job.end,"Asia/Jerusalem").toDate();
              var st =  this.dateCheck(job.start,job.end,today)
              console.log(st)
                  return st
              })
                            console.log(this.jobs)

              this.jobs.forEach((job)=>{
  
                 if(!this.jobsTitles.includes(job.job)){
                  job.name = ""
                  job.phone = ""
                 }
              })
              let notThereTitles = [...this.jobsTitles]
              this.jobs.forEach((job)=>{
                if(notThereTitles.includes(job.job)){
                  console.log("in here")
                  notThereTitles = notThereTitles.filter(val=> val!== job.job)
                }
              })
              console.log(notThereTitles)
              notThereTitles.forEach((jobTitle)=>{
                this.jobs.push({job:jobTitle,name:"",phone:""})
              })


                const noticeBoardData = await axios.get(this.shigraNotice)
                this.notices = [...noticeBoardData.data.value]


          }
            this.isShigra = !this.isShigra;
    },
    startPageTransition(){
      
      this.isTransition = true;
      this.clearInt = setInterval(()=>{
        this.makeApiCalls()
      
    },15000)
    } ,
    stopPageTransition(){
      this.isTransition = false;
          clearInterval(this.clearInt);

    } ,  
    handleSwapPage(){
      this.stopPageTransition();
      this.makeApiCalls()

    },
    handleTransition(data){
      console.log(data)
         if(this.isTransition){
          console.log("yes1")
          this.stopPageTransition()
          data.classList.remove('bi', 'bi-pause-fill');
          data.classList.add('bi', 'bi-play-fill')
        }else{
          console.log("yes2")
          this.startPageTransition()
          data.classList.remove('bi', 'bi-play-fill');
          data.classList.add('bi', 'bi-pause-fill')
        }
    },
  },
    beforeMount(){
          this.makeApiCalls()

       this.startPageTransition()
    },
  components:{
    BirthdayList,
    TopBar,
    Time,
    Jobs,
    NoticeBoard,
    Calendar,
    Havai
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.wrap {
  display: grid; 
  position: relative;
  grid-template-columns: 0.01fr 2.8fr 1.3fr 1.3fr 0.1fr; 
  grid-template-rows: 0.3fr 0.8fr 0.5fr 2.1fr; 
  gap: 30px 10px; 
  background-color: var(--overall-bg-color);
  grid-template-areas: 
    ". header header header ."
    ". jobs jobs Time ."
    ". jobs jobs Time ."
    ". calendar calendar noticeBoard ."; 
    height: 100vh;
    width: 100vw;
    padding: 0 12%;
}

.header { grid-area: header; }
.phones { grid-area: phones; }
.Time { grid-area: Time; }
.noticeBoard { grid-area: noticeBoard; }
.calendar { grid-area: calendar; }
.jobs { grid-area: jobs; }
.hamal { grid-area: hamal; }

.main-flex{
    position: absolute;
    margin-top: 100px;
    width: 100%;
 }
</style>
