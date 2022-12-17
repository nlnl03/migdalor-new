<template>
  <div class="job-item" :style="grad" >
    <div class="flex-inner-driver data">
         
     <span class="job-title"> 
           {{job}}
          </span>
          <span class="name" v-if="name.trim()">
          {{name}}
            </span>
                  <span class="name" v-if="!name.trim()">
          טרם הוזן שם
            </span>
            <span class="phone" v-if="phone.trim()">
           {{phone}}
            </span>
             <span class="phone" v-if="!phone.trim()">
           טרם הוזן טלפון
            </span>
            
           </div>
     
         
            
    </div>

</template>

<script>
export default {
    mounted(){
      console.log(this.name,this.job,this.phone)
    },
    data(){
        return{
          
        }
    },
    props:["name","job","phone"],
    name:"job"

}
</script>

<style scoped>
.does-not-exist{
  font-size: 20px;
    /* font-family: var(--font-title); */
}
.job-item{
    width: 28%;
    height: 100%;    
    margin-top: 10px;

    /* margin-bottom: 30px; */
    /* height: 40%; */
    border-radius: 20px;
    background: none !important;
    /* border: 1px solid white;      */
}
.flex-inner-driver{
    /* transform: translateY(-20px); */
  display: flex;
  flex-direction: column;
  height: 100%;
}
.data{
      justify-content: space-evenly;

}
.terem-huzan{
      justify-content: flex-start;

}
.name{

    font-size: 18px;
}
.job-title{
  font-size: 22px;
  font-family: var(--font-title);
  font-weight: var(--font-bold);
}
</style>