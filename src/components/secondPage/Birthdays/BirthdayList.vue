<template>
    <div class="subgrid-container">
      <div class="flex-birthdays"> 
        
        <div v-for="pluga in plugot" :key="pluga.name" class="flex-item-pluga" :style="{'--shape-color':pluga.color,'--pluga-name':pluga.name}"> 
          <h3 class="pluga-title"> {{pluga.name}}</h3>
          <div class="birthdays-pluga-flex">
                <Birthday v-for="birthday in pluga.birthdays" :date="birthday.birthday" :name="birthday.Title" :mahlaka="birthday.mahlaka" :plugaColor="pluga.color" :key ="birthday.Title"  />
            </div>
            </div>
        </div>
        </div>
</template>

<script>
import Birthday from './Birthday.vue'
export default {
  components: { Birthday },
  props:["birthdays"],
    data(){
      return{
        plugot:[
          {
            name:"ת. מטכ\"ל", color:"rgb(19,126,233)",
                birthdays:[]
        },{
            name:'מפקדה',color:"#063c5c",
                  birthdays:[]

        },
        {
          name:'טכנ"ל',color:"#dc291e",
             birthdays:[]

        },{
          name:'שו"ב',color:"#624e6a",            
          birthdays:[]

        },
        {
          
          name:'הפת"ק',color:"teal",
                      birthdays:[]

        }
        ]
      }
    },
    beforeMount(){
      
      this.birthdays.forEach((birthday)=>{
        this.plugot.forEach((pluga)=>{
          console.log("Gw")
          console.log(pluga,birthday)
          if(birthday.pluga == pluga.name){
            console.log("h")
            pluga.birthdays.push(birthday)
          }
        })
      })
    },
}
</script>





<style scoped>
.birthdays-pluga-flex{
  position: absolute;
  top:100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 92%;
  justify-content: flex-end;

}
.pluga-title{
  font-family: var(--font-primary);
  padding-right: 10px;
  padding-top: 4px;
  text-align: right;
  position: relative;
  z-index: 3;
  color: white;
  font-size: 30px;
  /* font-weight: bold; */
}
.flex-item-pluga{
  height: 100%;
  position: relative;
  width: 18%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: hidden;
  border-radius: 20px;
  background-color: white;
}
.flex-item-pluga::after{
  border-radius: 50%;
  content: "";
  color: black;
  display: block;
  z-index: 0;
  position: absolute;
  right: 0%;
  overflow: hidden;
  transform: translate(30%,-80%);
  background-color: var(--shape-color);
    height: 150px;
    width: 200px;
}

.flex-birthdays{
  display: flex;
  flex-direction:row;
  height: 100%;
  width: 85%;
  justify-content: space-evenly;
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



</style>