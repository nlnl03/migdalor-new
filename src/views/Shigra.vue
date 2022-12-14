<template>
<div class="wrap">
  <TopBar/>
  <Time :shigra="shigra" />
  <Jobs v-if="true" :jobs="jobs" />
  <BirthdayList v-if="false" :birthdayList="birthdayList" />
  <NoticeBoard v-if="false" :notices="notices" />
    <Havai v-if="true" />

  <Calendar/>
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
      shigraNotice:"",
      shigraJobs:"",
      notShigraBirthdays:"",
      CalendarUrl:"",
      shigra:"שגרה",
      clearInt:"",
      isShigra:true,
      birthdayList:[{
        name:"",
        pluga:"",
        mahlaka:"",
      }],
       notices:[
          {Title:"כרגע בלי רסר חובתינו להתנהג בהתאם",isCritical:false},
          {Title: "נכנסים לתקופה של שחרורים והחלפות (גם בחטיבה) להיערכות כולם",isCritical:false},
          {Title:"הערכה רבה לכל המשתתפים בכנסי החשיפה",isCritical:false},
          {Title:"מזל  טובטובטו טוב    בטובטוב למיטל על הלידה",isCritical:false},
          {Title:"ביקור במסדרת יחידה מצטיינת של הרמטכל",isCritical:true},
          {Title:"22.9 אריזות מזון",isCritical:false},
          
         
          
          
        ],

       jobs:[
          {job:"נהג תורן",
            name:"",
            phone:"",
          },
          {
            job:'מג"ד תורן',
            name:"",
            phone:"",
            
          },{
              job:'קצין תורן',
            name:"",
            phone:"",

          },
          {
              job:'מפקד תורן ת. מטכ"ל',
            name:"",
            phone:"",

          },
            {
              job:'מפקד תורן הפת"ק',
            name:"",
            phone:"",

          },
           {
              job:'מפקד תורן שו"ב',
            name:"",
            phone:"",

          }
        ]
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
                    today.setDate(today.getDate()-today.getDay())
                    let lastSunday = new Date(today)
                    lastSunday.setDate(lastSunday.getDate() + 1)
                    let lastMonday = new Date(lastSunday)
                    lastMonday.setDate(lastMonday.getDate() + 1)
                    let lastTuesday = new Date(lastMonday)
                    lastTuesday.setDate(lastTuesday.getDate() + 1)
                    let lastWednesday= new Date(lastTuesday)
                    lastWednesday.setDate(lastWednesday.getDate() + 1)
                    let lastThursday= new Date(lastWednesday)
                    lastThursday.setDate(lastThursday.getDate() + 1)
                    let lastFriday= new Date(lastThursday)
                    lastFriday.setDate(lastFriday.getDate() + 1)
                    let lastSaturday= new Date(lastFriday)
                    
                    today = moment.tz(today,"Asia/Jerusalem").toDate()
                    lastSunday = moment.tz(lastSunday,"Asia/Jerusalem").toDate()
                    lastMonday = moment.tz(lastMonday,"Asia/Jerusalem").toDate()
                    lastTuesday = moment.tz(lastTuesday,"Asia/Jerusalem").toDate()
                    lastWednesday = moment.tz(lastWednesday,"Asia/Jerusalem").toDate()
                    lastThursday = moment.tz(lastThursday,"Asia/Jerusalem").toDate()
                    lastFriday = moment.tz(lastFriday,"Asia/Jerusalem").toDate()
                    lastSaturday = moment.tz(lastSaturday,"Asia/Jerusalem").toDate()
                    
                    
              birthdays= birthdays.filter(birthday=>{

                    
                    birthday.birthday = moment.tz(birthday.birthday,"Asia/Jerusalem")
                    birthday.birthday= birthday.birthday.toDate()
                   

                    var isToday = birthday.birthday.getMonth() === today.getMonth() && birthday.birthday.getDate() === today.getDate()
                    var isSunday = birthday.birthday.getMonth() === lastSunday.getMonth() && birthday.birthday.getDate() === lastSunday.getDate()
                    var isMonday =birthday.birthday.getMonth() === lastMonday.getMonth() && birthday.birthday.getDate() === lastMonday.getDate()
                    var isTuesday = birthday.birthday.getMonth() === lastTuesday.getMonth() && birthday.birthday.getDate() === lastTuesday.getDate()
                    var isWednesday = birthday.birthday.getMonth() === lastWednesday.getMonth() && birthday.birthday.getDate() === lastWednesday.getDate()
                    var isThursday = birthday.birthday.getMonth() === lastThursday.getMonth() && birthday.birthday.getDate() === lastThursday.getDate()
                    var isFriday = birthday.birthday.getMonth() === lastFriday.getMonth() && birthday.birthday.getDate() === lastFriday.getDate()
                    var isSaturday = birthday.birthday.getMonth() === lastSaturday.getMonth() && birthday.birthday.getDate() === lastSaturday.getDate()

                    return isSunday || isMonday || isTuesday || isWednesday || isThursday || isFriday || isSaturday||isToday
                })
                birthdays.sort(function(a,b){
                    return a.birthday-b.birthday
                })
                birthdays.forEach(birthday=>{
                    
                    birthday.birthday =this.setToHebrewDate(birthday.birthday)
                    

                })  
 
            
           
         },
      dateCheck(from,to,check) {

      var fDate,lDate,cDate;
      fDate = Date.parse(from);
      lDate = Date.parse(to);
      cDate = Date.parse(check);

      if((cDate <= lDate && cDate >= fDate)) {
          return true;
      }
      return false;
}  ,
     async makeApiCalls(){
        const calendarResponse = await axios.get(this.CalendarUrl)
        this.jobs = [...calendarResponse.value]
          
          if(this.isShigra){
              const birthdayData = await axios.get(this.notShigraBirthdays)    
              this.birthdayList = [...birthdayData.data.value];

          }else{
              const jobsData = await axios.get(this.ShigraJobs)    
              const jobsResults = [...jobsData.data.value];
              jobsResults = jobsResults.filter((job)=>{
                  return this.dateCheck(job.start,job.end)
              })
              this.jobs.forEach((job)=>{
                job.name = ""
                job.phone = ""
                  jobsResults.forEach((innerJob)=>{
                    if(job.job == innerJob.Title){
                        job.name = innerJob.name;
                        job.phone = innerJob.phone;
                    }

                  })
              })
                const noticeBoardData = await axios.get(this.shigraNotice)
                this.notices = this.getBirthdays([...noticeBoardData.data.value])


          }
        this.isShigra = !this.isShigra;
    },    
  },
    beforeMount(){
      this.clearInt = setInterval(()=>{
        this.makeApiCalls()
      
    },10000)
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
}

.header { grid-area: header; }
.phones { grid-area: phones; }
.Time { grid-area: Time; }
.noticeBoard { grid-area: noticeBoard; }
.calendar { grid-area: calendar; }
.jobs { grid-area: jobs; }
.hamal { grid-area: hamal; }

</style>
