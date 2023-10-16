<template>
  <div class="meals-container">
    <h3>ארוחות בקרייה</h3>
    <div class="meals-flex" v-for="meal in meals" :key="meal">
      <h4>{{ meal.subject }}</h4>
      <div class="text" v-for="text in meal.text" :key="text">{{ text }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
 name:'Meals',
 data(){
  return{
   meals:[]
  }
 },

 methods:{
  async getMeals(){
    const res = await axios.get(this.$devUrl + "/meals")
    this.meals = res.data.value
    console.log(this.meals)
  }
 },

 beforeMount(){
   this.getMeals()
 }
}
</script>

<style scoped>
.meals-container{
    width:100%;
    height:95%;
    padding: 10px;
    position: relative;
    justify-content: center;
    align-items: center;
     grid-area: noticeBoard; 
     border: 1px solid rgb(145, 144, 144);
     border-radius: 20px ;
}
.meals-flex{
 display: flex;
 flex-direction: column;
 margin-bottom: 20px;
}
h3{
   font-size: 40px;
   font-family: var(--font-title);
   margin-bottom: 15px;
}
h4{
 font-size: 34px;
 margin-bottom: 15px;
}
.text{
 margin-bottom: 0.4em;
 font-size: 18px;
 font-weight: 600;
}
</style>