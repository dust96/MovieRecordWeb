
<template>
  <div class="calendar_content">
    <SelectMonth v-bind:currentyearmonth="this.currentYearMonth" v-on:changemonth="setCurrentYearMonth"></SelectMonth>
    <DayDiv></DayDiv>
    <DateDiv v-bind:currentyearmonth="this.currentYearMonth" ></DateDiv>
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
    },
    data(){
      return {
        currentYear : 0,
        currentMonth: 0,
        currentYearMonth:{}
      }
    },
    created(){
      const date = new Date();
      this.currentYear = date.getFullYear();
      this.currentMonth = date.getMonth()+1;
      this.currentYearMonth.currentYear = date.getFullYear();
      this.currentYearMonth.currentMonth = date.getMonth()+1;
    },
    methods:{
      formatMonthDate(num){
        let formatnum = "";
        if(num<10){
          formatnum = "0"+num;
        }
        else {
          formatnum = num;
        }

        return formatnum;
      },
      setCurrentYearMonth(data){
        this.currentYearMonth.currentYear = data.currentYear;
        this.currentYearMonth.currentMonth = data.currentMonth;
      }
    }
  }
   
</script>

<style>
    .calendar_content{
        width:100%;
        height: 100%;
    }

</style>