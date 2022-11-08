<template>
  <div id="tsparticles" class="night-and-day"> 
    <i class="bi bi-moon-fill"></i>

    </div>
</template>

<script>
export default {
    name:"Time",
    mounted(){
    },
    components:{
        
    }
}
</script>

<style scoped>
i{
    color: white;
    position: absolute;
    left: 10%;
    font-size: 100px;
}
.night-and-day{
    position: relative;
    border-radius: 30px;
      background: linear-gradient(to bottom , #0a2342,#283e51 );
      
     grid-area: Time; 
}



</style>