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
                 currentWeekOptions: {
                
                 timeZone: "Asia/Jerusalem",
          
                dayHeaderFormat: this.dayHeaderFormatUsingMoment,                                                                                                                                       
                plugins: [ dayGridPlugin],
                initialView: 'dayGridWeek',
                views:{
                    dayGridWeek:{
                        type:'basic',
                        duration:{days:10},
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
    methods:{
            dayHeaderFormatUsingMoment(info) {
           let date =  moment(info.date.marker,'L', 'he').format("dddd  D/M"); 
         
           return date
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
.fc-event-title-container{
    text-align:center;
    font-size:0.728vw;
    padding-top:0;
    /* padding-bottom:0; */
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
.fc .fc-col-header-cell-cushion {
    text-align:center;
    display: inline-block;
    padding: 2px 4px;
    color:black;
    font-size:1vw;
    color: grey;
    font-size: 25px;
    font-family:var(--font-title);
    text-decoration:none; 
    border:0;
    outline:none;
}
</style>