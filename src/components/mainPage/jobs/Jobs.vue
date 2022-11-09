<template>
  <div class="subgrid-container"> 

               <img  src="@/assets/383zameret.png"> 

      <div class="jobs">

        <div class="flex-jobs"> 
            <Job v-for="job in jobs" :name="job.name"  :job="job.job" :phone="job.phone" :grad="job.grad" :key="job.job" />
          </div>

      </div>
    <div class="flex-shigra-and-other-phones">
      <h1 class="herum-header"> מספרי חירום</h1>
      <div class="inner-flex-herum" >
          <div class="herum">
              <span class="phone-type"> טלפון חמ"ל</span>
              <br>
                            <span> 0343-4100</span>

             </div>
              <div class="herum">
              <span class="phone-type">טלפון חירום סמג"ד</span>
              <br>
                            <span>052-4566570</span>

             </div>
      </div>
      
        <!-- <div class="shigra-ball">
          <span> שגרה</span>
          </div> -->
      </div>
  </div>
</template>

<script>
import Job from "./job.vue"
export default {
  name:"jobs",
  data(){
      return{
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
  components:{
    Job
  }
    
}
</script>

<style scoped>
.phone-type{
    font-family: var(--font-title);

    font-weight: var(--font-bold);

}
.herum span{
  color:white;
  font-size: 22px;
}
.herum{
  width: 40%;
  height: 100%;

}
.herum-header{
    color: white;

    font-family: var(--font-title);

  margin-bottom: 40px;
  font-weight: bold;
}
.shigra-ball{
  color: white;
  font-size: 25px;
  font-weight: var(--font-bold);
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  border-radius: 50%;
}
.inner-flex-herum{
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: 30%;
  /* transform: translateY(-50%);
  top: 25%; */
}
.flex-shigra-and-other-phones{
  padding-top: 20px;
  /* display: flex; */
  border-radius: 0px 20px 20px 0px;
  position: relative;
  background-color:var(--bg-color);
  height: 100%;
  align-items: center;
  width:40%;
}
.subgrid-container img{
  left: 3%;
  z-index:1;
  transform: translateY(-70%);
    position: absolute;
    height:100px;
    /* margin-right: 10px; */
    /* margin-left: 10px; */

}
.flex-inner-driver{
    /* transform: translateY(-20px); */

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
}
.flex-jobs{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 42%;
  margin:0 auto;
  width: 98%;
}
.phone{
  /* display: inline; */
  /* border-bottom: 1px solid white; */
}
.driver i{
  display: inline-block;
  font-size: 30px;
  position: relative;
  /* left: 50%; */
  /* padding-right: 10px; */
  /* padding-left: 10px; */
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  /* border: 1px solid rgba(128, 128, 128, 0.171); */
  /* transform: translate(-50%,-50%); */
    transform: translateY(-50%);

  /* border: 1px solid black; */
  border-radius: 50%;
}
.subgrid-container { 
    /* direction: rtl !important;   */
      border-radius: 20px;
      display: flex;
      justify-content: space-between;
        /* background-color:var(--bg-color); */

    grid-area: jobs;
    /* border: 1px solid black; */
  /* display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns:  0.4fr 0.4fr; 
  grid-template-rows: 1.3fr 2fr 1.7fr; 
  gap: 0px 0px;  */
}



.jobs{
  /* border: 1px solid black; */
  position: relative;
  /* padding-right: 30px; */
  color:var(--font-light-color);
  background-color:var(--bg-secondary-color);
      border-radius: 20px 0px 0px 20px;
        /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
    width: 70%; 
    height:100%;
}
.driver{
  position: relative;
  background-color: white;
   box-shadow: #0000008e 0px 7px 20px 0px;

    /* border: 1px solid black; */
    z-index: 100;
    border-radius: 20px;

  grid-area: 2 / 2 / 3 / 4; ;
}
.job-title{
  font-size: 25px;
  font-weight: var(--font-bold);
}


</style>