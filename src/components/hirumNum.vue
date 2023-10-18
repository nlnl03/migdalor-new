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
 margin: 1em 2em;
  max-height: calc(100% - 45px);
}
h3{
  font-family: var(--font-title);
  font-size: 30px;

 }
.sub{
 font-weight: 700;
 font-size: 23px;
 color: #484848;
}
.item{
 margin-bottom: 3px;
}
.phoneNum{
 margin-right: 0.6em;
    font-size: 18px;
     color: #484848;
  font-weight:  600;
}
.hirum-flex{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 1.5em;
 }
 .hirum-flex:first-child{
  align-items: center;
  margin-bottom: 0;
 }
 .sub-title{
   font-size: 25px;
  font-family: var(--font-title);
  color: #262626e8;
  margin-bottom: 7px;
 }
 
</style>