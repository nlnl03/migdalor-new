<template>
<div class="wrap">
  <TopBar/>
  <Time :shigra="shigra" />
  <Jobs v-if="false" :jobs="jobs" />
  <BirthdayList v-if="true" :birthdayList="birthdayList" />
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
export default {
  name: 'Shigra',
  data(){
    return{
      shigraUrl:"",
      notShigraUrl:"",
      Calendar:"",
      shigra:"שגרה",
      clearInt:"",
      isShigra:true,
      birthdayList:[{
        name:"",
        pluga:"",
        mahlaka:"",
      }],
       notices:[
          {notice:"כרגע בלי רסר חובתינו להתנהג בהתאם",isCritical:false},
          {notice: "נכנסים לתקופה של שחרורים והחלפות (גם בחטיבה) להיערכות כולם",isCritical:false},
          {notice:"הערכה רבה לכל המשתתפים בכנסי החשיפה",isCritical:false},
          {notice:"מזל  טובטובטו טוב    בטובטוב למיטל על הלידה",isCritical:false},
          {notice:"ביקור במסדרת יחידה מצטיינת של הרמטכל",isCritical:true},
          {notice:"22.9 אריזות מזון",isCritical:false},
          
         
          
          
        ],
       jobs:[
          {job:"נהג תורן",
            name:"טוהר",
            phone:"052-3901370",
            grad:{background:"linear-gradient(to right, #14557B , #7FCEC5) "}

          },
          {
            job:'מג"ד תורן',
            name:"נועה אילוז",
            phone:"052-7807470",
              grad:{background:"linear-gradient(to right,#0D324D ,#7F5A83) "}
            
          },{
              job:'קצין תורן',
            name:"אריקה ברודסקי",
            phone:"052-7027354",
                          grad:{background:"linear-gradient(to right,#2A5470 ,#4C4177) "}

          },
          {
              job:'מפקד תורן ת. מטכ"ל',
            name:"יהונתן רול",
            phone:"052-7253655",
                grad:{background:"linear-gradient(to right,#28313B ,#485461) "}

          },
            {
              job:'מפקד תורן הפת"ק',
            name:"נועם בצלאל",
            phone:"058-4311201",
                        grad:{background:"linear-gradient(to right, #616161, #9bc5c3) "}

          },
           {
              job:'מפקד תורן שו"ב',
            name:"אריקה ברודסקי",
            phone:"052-7027354",
                    grad:{background:"linear-gradient(to right,#5D4954 ,#FFA69E) "}

          }
        ]
    }
  },
  methods:{
     async makeApiCalls(isShigra){
       

          if(isShigra){
              const data = await axios.get(this.notShigraUrl)    
              // const results = data.value;

          }
    },
  },
    beforeMount(){
      this.clearInt = setInterval(()=>{
        this.isShigra = !this.isShigra;
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
  grid-template-rows: 0.3fr 0.8fr 0.4fr 2.1fr; 
  gap: 10px 10px; 
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
