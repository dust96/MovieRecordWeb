
<template>
  <div class="calendar_content">
    <SelectMonth v-bind:currentyearmonth="this.currentYearMonth" v-on:changemonth="setCurrentYearMonth"></SelectMonth>
    <DayDiv></DayDiv>
    <DateDiv v-bind:currentyearmonth="this.currentYearMonth" :usercode="usercode" :key="this.currentYearMonth.currentMonth"></DateDiv>
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
    props:[
      'usercode'
    ],
    data(){
      return {
        currentYearMonth:{
          currentYear : 0,
          currentMonth: 0
        }
      }
    },
    watch:{
      currentYearMonth: {
        handler: function (){
         
        },
        deep:true
      }
    },
    created(){
      const date = new Date();
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
      checkWeekend(year,month,date){
        const checkdate = new Date(year, month-1,date);
        const checkday = checkdate.getDay();
        if(checkday === 0 || checkday === 6){
          return true;
        }
        else {
          return false;
        }
      },
      setCurrentYearMonth(data){
        this.currentYearMonth.currentYear = data.currentYear;
        this.currentYearMonth.currentMonth = data.currentMonth;
      }
    }
  }
   
</script>

<style>
    

</style>