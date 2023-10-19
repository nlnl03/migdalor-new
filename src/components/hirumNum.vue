<template>
 <div class="hirum">
  <div class="hirum-flex" v-for="item in hirumNum" :key="item">
     <h3 v-if="item.name">{{ item.name }}</h3>
      <div class="sub-title">{{ item.subTitle }}</div>

      <div class="item" v-for="inner in item.place" :key="inner"  >
          <span class="sub">{{ inner.subject }}</span>
          <span class="phoneNum">{{ inner.phoneNum }}</span>
      </div>
   </div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
 name:'hirumNum',
 data(){
  return{
   hirumNum:[]
  }
 },

 methods:{
  async getHirumNum(){
    var res = null
     if (this.$isSharePointUrl) {
       res = await axios.get(this.$url + "getByTitle('hirumNum')")
     }
     else{
      res = await axios.get(this.$url + "hirumNum") 
     }
      this.hirumNum = res.data.value
      console.log(this.hirumNum)
  }
 },
 
 beforeMount(){
   this.getHirumNum()
 }
}
</script>

<style scoped>
.hirum{
  position: relative;
  margin: 0.3em 2em;
  max-height: calc(100% - 45px);
 }
h3{
  font-family: var(--font-title);
  /* font-size: 30px; */
  padding-bottom: 5px ;
  /* border-bottom: 1px solid white; */
      font-size: 35px;
  color: rgb(255, 255, 255);
  font-weight: 700;
 }
.sub{
 font-weight: 700;
 font-size: 23px;
 color: #313131;
}
.item{
    text-align: right;
}
.phoneNum{
 margin-right: 0.6em;
    font-size: 16px;
     color: #313131;
  font-weight:  600;
}
.hirum-flex{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 1.5em;
    padding: 0.5em 1.2em;
    border-radius: 15px;
   /* background-color: #d9d9d9bf; */
    background-color: #d9d9d97d;
 }
 .hirum-flex:first-child{
  align-items: center;
  margin-bottom: 5px;
  padding: 0;
   position: relative;
  background: none;
   border-radius: 0;
 }
 .sub-title{
   font-size: 25px;
  font-family: var(--font-title);
  /* color: #262626e8; */
      color: white;

  margin-bottom: 7px;
 }
 
</style>