<template>
  <div class="noticeBoard" > 
    <h3 class="noticeBoard-title"> לוח מודעות</h3>
    <p>הודעות מיקוד מסומנות <span style="color:red">באדום </span> </p>
    <div class="flex-notices"> 
      <Notice v-for="notice in notices"
       :key="notice"  
       :isCritical="notice.isCritical"
        :notice="notice.Title"/>
      </div>
    </div>
</template>

<script>
import Notice from "./Notice.vue"
export default {
    name:"NoticeBoard",
    props:["notices"],
    data(){
      return{
       
      }  
    },
    components:{
      Notice
    }
   
}
</script>

<style scoped>
.flex-notices{
  
  display:flex;
  /* flex-wrap: wrap; */
  justify-content: flex-start;
  width: 100%;
  height: auto;
  flex-direction: column;
  
}
.noticeBoard-title{
  font-family: var(--font-title);
  font-size: 40px;
}
.noticeBoard { 
  direction: rtl;
    grid-area: noticeBoard; 
}


</style>