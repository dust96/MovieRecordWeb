
<template>
  <div>
    <div><DateBox></DateBox></div>
    <DateBox></DateBox>
    <DateBox></DateBox>
    <DateBox></DateBox>
    <DateBox></DateBox>
  </div>
</template>

<script>
  import DateBox from "./DateBox.vue";

  export default {
    name: "DateDiv",
    components: {
        DateBox
    },
    data(){
      return {
        monthdata : []
      }
    },
    mounted(){

    }
  }
   
</script>

<style>
   

</style>