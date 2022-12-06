<template>
<div class="birthday-card" :style="{'border-top':`6px solid ${plugaColor}`}">
    <div>
        <span class="name"> {{name}}</span>

    <span class="mahlaka"> {{mahlaka}}</span>
    </div>
        <span class="date"> {{date}}</span>

    </div>
</template>



<script>
export default {
    name:"",
    props:["plugaColor","mahlaka","name","date"]
}
</script>

<style scoped>
.name{
 display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        
  direction: rtl;
  width: 100% !important;
  text-overflow: ellipsis;
    font-family: var(--font-primary);
    font-weight: 800;
        font-size: 15px;


}
.mahlaka{
    color: grey;
    font-size: 15px;
}
.date{
        font-family: var(--font-primary);
    font-weight: 800;
    font-size: 15px;
        font-family: var(--font-title);


}

.birthday-card{
    width: 40%;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius:8px;
    margin-bottom: 10px;
    margin-left: 10px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

}

</style>