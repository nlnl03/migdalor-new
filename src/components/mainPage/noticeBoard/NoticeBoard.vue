<template>
  <div class="noticeBoard" > 
    <h3 class="noticeBoard-title"> לוח מודעות</h3>
    <div class="flex-notices"> 
      <Notice v-for="notice in notices" :key="notice" :notice="notice"/>
      </div>
    </div>
</template>

<script>
import Notice from "./Notice.vue"
export default {
    name:"NoticeBoard",
    data(){
      return{
        notices:[
          "כרגע בלי רסר חובתינו להתנהג בהתאם",
          "נכנסים לתקופה של שחרורים והחלפות (גם בחטיבה) להיערכות כולם",
          "הערכה רבה לכל המשתתפים בכנסי החשיפה",
        
          "מזל טוב למיטל על הלידה",
          "ביקור במסדרת יחידה מצטיינת של הרמטכל",
          "22.9 אריזות מזון"
        ]
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
  width: 90%;
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