<template>
  <div class="notice-item">
    <div  v-if="isCritical" class="not-urgancy bi bi-exclamation hid"> </div>
        <div v-if="!isCritical" class="not-urgancy bi bi-exclamation not-hid"> </div>

    <span class="notice">{{notice}} </span>
    </div>
</template>

<script>
export default {
    name:"Notice",
    props:["notice","isCritical"]
}
</script>

<style scoped>
.notice{
    padding-right: 10px;
}
.hid{ 
        color:var(--bg-color);
         background-color: var(--bg-color);

}
.not-hid{
    color:white;
    background-color: var(--bg-secondary-color);
}
.not-urgancy{
    display:flex;
    flex-direction:column;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    align-items: center;
    justify-content:center;
    /* height: 100%; */
    /* position: absolute; */
    /* width:30px; */
    font-size:35px;
    
    /* height: 30px; */
    position: absolute;
    height:100%;
    border-radius: 0px 20px 20px 0px;
    transform: translate(100%,-10px);
   
}
.notice-item{
    position: relative;
    text-align: right;
    margin-bottom: 10px;
    padding-right: 20px;
    background-color: white;
    /* height: 50px; */
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    /* border-left: 1px solid grey;
        border-top: 1px solid grey;
        border-bottom: 1px solid grey; */

    border-radius: 5px;
    /* border-right: px solid var(--bg-color); */
}
.notice-item::after{
    /* content: 'חשוב'; */
    /* display: none; */
    position: absolute;
}
</style>