<template>
  
  <div class="calendar">
        <h3 class="noticeBoard-title"> לוח דו שבועי </h3>
            <div class="flex-subjects"> 
                <span  v-for="subject in subjects" :key="subject.color"  class="subject" :style="{'--subject-color':subject.color}" >{{subject.subject}} </span> 
            </div>
        <FullCalendar   :options="currentWeekOptions" />


     </div>
</template>

<script>
// import SubjectsFlex from "../subjectsFlex/SubjectsFlex"
import '@fullcalendar/core/vdom' 
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'

import 'moment-timezone';
import moment from 'moment';
// import axios from "axios";
export default {
    name:"Calendar",
    data(){
        return{
            subjects:[{
                subject:"פלוגתי",color:"#063c5c"
            },{
                    subject:"מחלקתי",color:"#dc291e"

            },{
                    subject:"גדודי",color:"rgb(19,126,233)"

        }
            ],
            activities:[],
            events:{value:[
         
         {"Title":"הדממה" ,"end":"2022-11-15T22:28:04Z","start":"2022-11-14T21:28:04Z","subject":"מחלקתי", "isGant":true}
         ,
         {"Title":"ערב מחלקה" ,"end":"2022-11-16T22:28:04Z","start":"2022-11-14T22:28:04Z","subject":"גדודי", "isGant":true}
         ,
        {"Title":"טיול פלוגתי" ,"end":"2022-11-17T22:28:04Z","start":"2022-11-14T22:28:04Z","subject":"גדודי", "isGant":true},
        
         {"Title":"הרצאה בוחרים בחיים" ,"end":"2022-11-18T22:28:04Z","start":"2022-11-14T22:28:04Z","subject":"פלוגתי", "isGant":true}
         ,
         {"Title":"ערב ראשון" ,"end":"2022-11-21T22:28:04Z","start":"2022-11-14T22:28:04Z","subject":"מחלקתי", "isGant":true}
         

        ]},
                 currentWeekOptions: {
                
                 timeZone: "Asia/Jerusalem",
          
                dayHeaderFormat: this.dayHeaderFormatUsingMoment,                                                                                                                                       
                plugins: [ dayGridPlugin],
                initialView: 'dayGridWeek',
                views:{
                    dayGridWeek:{
                        type:'basic',
                        duration:{days:14},
                        rows:1
                    }
                },
                direction:'rtl',
                height:'50%',
                events: [],
                // hiddenDays: [ 5, 6 ],
                // headerToolbar: false,
            },
        }
    },
    mounted(){
        this.doAll();
    },
    methods:{
         doAll(){           
                this.activities=this.events.value
                    console.log(this.activities)
                this.activities = this.activities.filter(activity=>activity.isGant);
                console.log(this.activities)
                this.processResponse(this.activities)
                this.fillEvents()
    
        },
            dayHeaderFormatUsingMoment(info) {
           let date =  moment(info.date.marker,'L', 'he').format("dddd  D/M"); 
         
           return date
            },
             processResponse(response){
                response.forEach(activity=>{

                
                    activity.start = moment.tz(activity.start,"Asia/Jerusalem").toDate()
                    activity.start.setDate(activity.start.getDate() );
                
                    activity.end = moment.tz(activity.end,"Asia/Jerusalem").toDate()
                        activity.end.setDate(activity.end.getDate() );


            
                    
                })
             },     fillEvents(){
            var arr =[]

            this.activities.forEach((event)=>{
                var color= this.pickColor(event['subject'])
                var textColor = 'white'
                
                var object = {
                    'title':event['Title'],
                    'start':event['start'],
                    'end':event['end'],
                    'backgroundColor':color,
                       'borderColor':'transparent',
                       'textColor' :textColor
                }
                arr.push(object)
            })
              this.currentWeekOptions["events"] = arr;
            // this.currentWeekOptions.events.forEach(event=>{
            //     if( event.start.getDay() == event.end.getDay()){
            //         event['allDay']= true; 
            //      }
            // })
        
            
        },
        pickColor(subject){
            if(subject=='גדודי'){
                return  'rgb(19,126,233)'
            }
            if(subject=='מחלקתי'){
                return '#dc291e'
            }
            if( subject =='פלוגתי'){
                return '#063c5c'
            }
        }
              
    },
    components:{
        FullCalendar
    }
}
</script>

<style >
.subject::after{
    position: absolute;
    content: "";
    top: 0%;
    transform: translate(-130%,22%);
    left: 0%;
    display: block;
    border-radius: 5px;
    background-color: var(--subject-color);
    height: 20px;
    width:20px;

}

.subject{
    font-size: 20px;
    margin-left: 30px;
    margin-right: 30px;
    position: relative;
    /* width: 5%; */
}
.flex-subjects{
    display: flex;
    flex-direction: row;
    height: 70px;
    align-items: center;
    justify-content: center;
}
.noticeBoard-title{
  font-family: var(--font-title);
  font-size: 40px;
}
.calendar{
    grid-area: calendar;
}
.fc-event-time{
    display:none;
}
.fc-event {
    font-size: 15px !important;
  /* margin-bottom: 30px; */
}
.fc-event-title-container{
    text-align:right;
    padding-right:5px;
    padding-top:0;
    /* padding-bottom:0; */
}
.fc-daygrid-event{
    border-radius:20px !important;
} 

.fc-daygrid-day-top{
    height:3vh !important;
    /* border-bottom:1px solid silver; */
    justify-content:flex-end;
}
.fc .fc-daygrid-day-number{
    padding:0.4vw;
    color:black;
    outline:none;
    text-decoration: none;
    /* left:40%; */
}
.fc-scrollgrid {
    border-top: none !important;
}
.fc .fc-scrollgrid-liquid{
    border: none !important;
}
.fc-theme-standard td, .fc-theme-standard th {
    border: none !important;
}
.fc-day-today{
    background-color: transparent !important;
}
.fc .fc-col-header-cell-cushion {
    text-align:center;
    display: inline-block;
    padding: 2px 4px;
    color:black;
    font-size:1vw;
    color: grey;
    font-size: 20px;
    font-family:var(--font-title);
    text-decoration:none; 
    outline:none;
}
</style>