<template>
  <div class="header">
    <div class="Title-container">
      <div class="swiper">
        <span>מגדלור צמרת/  </span>
                <div class="stop-and-swap">
                  <button class="bi bi-repeat rep-btn"> </button>
                          <button class="bi bi-play-fill rep-btn"> </button>

                </div>
        </div>
    </div>
      <div >
          
          
        </div>
        <div class="smalim">
                    <!-- <img  src="@/assets/tikshuv.png"> 
                                        <img  src="@/assets/Hoshen_center.png">  -->


          </div>
  </div>

</template>

<script>
export default {
    name:"TopBar"
}
</script>

<style scoped>
.semel{
  height:100px;
}
.smalim img{
    height:100px;
    margin-right: 10px;
    margin-left: 10px;

}
.smalim{
    align-items: center;

  padding-left: 10px;
  display: flex;
  justify-content: flex-end;
  width:30%;
  height: 100%;
  position: relative;
  /* background-color: aqua; */
}
.rep-btn{
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  

}
.stop-and-swap{
  display: flex;
  width:60px;
  justify-content: space-between;
  align-items: center;
}
.swiper{
  display: flex;
  width:700px;
  justify-content: space-between;
}
.Title-container{
    width:60%;
    height: 100%;

    padding-right: 10px;
    position: relative;
     display: flex;
     justify-content: space-between;
     align-items: center;


}
.Title-container span::after{
    content: 'מסך שגרה';

  font-family: var(--font-primary);

    justify-content: center;
    font-size: 30px;
    color:var(--font-secondary);
  
}
.Title-container span{
  text-align: right;
  position: relative;
  font-size: 60px;
  font-family: var(--font-title);
  font-weight: var(--font-bold);
  
}

.header {
  direction: rtl;
     grid-area: header; 
     color:black;
       position: relative;
       display: flex;
       justify-content: space-between;

     /* background-color: pink; */
     /* border-bottom: 1px solid rgb(228, 225, 225); */
     width: 100%;
     height: 100%;
     
     }

</style>