
<template>
  <div class="date-grid">
      <DateBox v-for="(date, index) in weekdata" :key="index" v-bind:datedata="date"></DateBox>
  </div>
</template>

<script>
  import DateBox from "./DateBox.vue";

  export default {
    name: "WeekDiv",
    components: {
        DateBox
    },
    props: [ 'weekdata' ]
  }
   
</script>

<style>
   .date-grid{
      width:100%;
      height:100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      border-bottom : 1px solid rgba(58, 50, 74,0.2);
   }

</style>