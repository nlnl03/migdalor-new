<template>
  <h3>שעות פעילות</h3>
  <div class="activity-container">
    <div class="activity-flex" v-for="activity in activityTimes" :key="activity">
      <span>{{ activity.Title }}</span>
      <span v-if="!Array.isArray(activity.label)">{{ activity.label }}</span>
       <div v-if="Array.isArray(activity.label)">
        <span v-for="item in activity.label" :key="item">
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
 name:'activityTimes',
 data(){
  return{
   activityTimes:[]
  }
 },
 methods:{
  async getActivityTimes(){
    var res = null
    if(this.$isSharePointUrl){
      res = await axios.get(this.$url + "getByTitle('activityTimes')")
    }
    else{
     res = await axios.get(this.$url + "activityTimes")
    }
      this.activityTimes = res.data.value
      console.log(this.activityTimes)
   }
 },
 beforeMount(){
  this.getActivityTimes()
 }
}
</script>

<style scoped>
 h3{
   font-family: var(--font-title);
    font-size: 40px;

 }
</style>