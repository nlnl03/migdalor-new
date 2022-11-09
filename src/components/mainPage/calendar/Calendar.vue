<template>
  
  <div class="calendar">
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
            activities:[],
            events:{value:[
         
         {"Title":"הדממה" ,"end":"2022-11-13T22:00:00Z","start":"2022-11-09T22:00:00Z","subject":"תרגילים", "isGant":true}
         ,
         {"Title":"ערב מחלקה" ,"end":"2022-11-15T22:00:00Z","start":"2022-11-11T22:00:00Z","subject":"תרגילים", "isGant":true}
         ,
        {"Title":"טיול פלוגתי" ,"end":"2022-11-19T22:00:00Z","start":"2022-11-17T22:00:00Z","subject":"תרגילים", "isGant":true}



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
                height:'80%',
                events: [],
                hiddenDays: [ 5, 6 ],
                headerToolbar: false,
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
                    activity.start.setDate(activity.start.getDate() + 1);
                
                    activity.end = moment.tz(activity.end,"Asia/Jerusalem").toDate()
                        activity.end.setDate(activity.end.getDate() + 1);


            
                    
                })
             },     fillEvents(){
            var arr =[]

            this.activities.forEach((event)=>{
                // var array= this.pickColor(event['subject'])
                var color ='rgb(19,126,233)'
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
            this.currentWeekOptions.events.forEach(event=>{
                if( event.start.getDay() == event.end.getDay()){
                    event['allDay']= true; 
                 }
            })
        
            
        },
              
    },
    components:{
        FullCalendar
    }
}
</script>

<style >
.calendar{
    grid-area: calendar;
}
.fc-event-time{
    display:none;
}
.fc-event {
    font-size: 15px !important;
  margin-bottom: 30px;
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