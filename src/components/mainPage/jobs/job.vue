<template>
  <div class="job-item" :style="grad" >
    <div class="flex-inner-driver"  >
          <span class="job-title"> 
           {{job}}
          </span>
          <div v-if="job"> 
          <span class="name">
          {{name}}
            </span>
            <span class="phone">
           {{phone}}
            </span>
            </div>
             <span class="does-not-exist">
              טרם הוזן
            </span>
        </div>
    </div>

</template>

<script>
export default {
    mounted(){
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
    font-family: var(--font-title);
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
    justify-content: space-evenly;
  flex-direction: column;
  height: 100%;
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