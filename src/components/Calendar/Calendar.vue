
<template>
  <div class="calendar_content">
    <SelectMonth></SelectMonth>
    <DateDiv></DateDiv>
    <DayDiv></DayDiv>
  </div>
</template>

<script>

  import DateDiv from "./DateDiv.vue";
  import DayDiv from "./DayDiv.vue";
  import SelectMonth from "./SelectMonth.vue";

  export default {
    name: "Calendar",
    components: {
        DateDiv,
        DayDiv,
        SelectMonth
    }
  }
   
</script>

<style>
    .calendar_content{
        width:100%;
        height: 100%;
    }

</style>