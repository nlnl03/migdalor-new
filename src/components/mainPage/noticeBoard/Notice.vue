<template>
  <div class="notice-item">
    <span>{{notice}} </span>
    </div>
</template>

<script>
export default {
    name:"Notice",
    props:["notice"]
}
</script>

<style scoped>
.notice-item{
    position: relative;
    text-align: right;
        margin-bottom: 10px;
    padding-right: 10px;
    /* height: 50px; */
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    /* border-left: 1px solid grey;
        border-top: 1px solid grey;
        border-bottom: 1px solid grey; */

    border-radius: 5px;
    border-right: 12px solid #00aeef;
}
.notice-item::after{
    /* content: 'חשוב'; */
    /* display: none; */
    position: absolute;
}
</style>