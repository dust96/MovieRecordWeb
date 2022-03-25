
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
  

</style>