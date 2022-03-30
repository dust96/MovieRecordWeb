
<template>
  <div class="week-grid">
    <WeekDiv v-for="(week,i) in dates" :key="i" v-bind:weekdata="week"></WeekDiv>
  </div>
</template>

<script>
  import WeekDiv from "./WeekDiv.vue";

  export default {
    name: "DateDiv",
    components: {
        WeekDiv
    },
    props:[
      'currentyearmonth',
      'usercode'
    ],
    data(){
      return {
        dates:[],
        currentYear : 0,
        currentMonth: 0,
        year: 0,
        month: 0
      }
    },
    created(){

      this.year = this.currentyearmonth.currentYear;
      this.month = this.currentyearmonth.currentMonth;
      this.$http.get('/api/calendar',{
        params:{usercode:this.usercode,year:this.year,month:this.month}
      }).then(res=>{
        console.log(res)
      })
      this.getCalendarDate();
    },
    updated(){
      this.year = this.currentyearmonth.currentYear;
      this.month = this.currentyearmonth.currentMonth;

    },
    methods: {
      getCalendarDate(){
        const [firstDay, lastDate, prevLastDate] = this.getFirstDayLastDate(this.year, this.month);
        this.dates = this.getMonthDates(firstDay, lastDate, prevLastDate);
      },
      getFirstDayLastDate(year, month){
        const firstDay = new Date(year, month - 1, 1).getDay();
        const lastDate = new Date(year, month , 0).getDate();
        let lastYear = year;
        let lastMonth = month - 1;
        if(month === 1){
          lastMonth = 12;
          lastYear -= 1;
        }
        const prevLastDate = new Date(lastYear, lastMonth, 0).getDate();
        return [firstDay, lastDate, prevLastDate];
      },
      getMonthDates(firstDay, lastDate, prevLastDate){
        
        let datearr = [];
        let date = 1;
        let weekarr = [];
        let prevLastStartDate = prevLastDate - firstDay  + 1;
        while(date <=lastDate){
          if(date === 1){
            for(var day = 0;day<firstDay;day++){
              let date_data = {};
              let value_name = String(this.year) + this.$parent.formatMonthDate(this.month-1) + this.$parent.formatMonthDate(prevLastStartDate + day);
              date_data['date'] = prevLastStartDate + day;
              date_data['yearmonthdate'] = value_name;
              date_data['transparency'] = true;
              date_data['weekend'] = this.$parent.checkWeekend(this.year,this.month,prevLastStartDate + day);
              weekarr.push(date_data);
            }
          }

          let date_data = {};
          let value_name = String(this.year) + this.$parent.formatMonthDate(this.month) + this.$parent.formatMonthDate(date);
          date_data['date'] = date;
          date_data['yearmonthdate'] = value_name;
          date_data['transparency'] = false;
          date_data['weekend'] = this.$parent.checkWeekend(this.year,this.month,date);
          weekarr.push(date_data);
          if(weekarr.length == 7){
            datearr.push(weekarr);
            weekarr = [];
          }
          date++;
        }
        const len = weekarr.length;

        if(len>0 && len <7){
          for(let i = 1;i<=7-len;i++){
            let date_data = {};
            let value_name = String(this.year) + this.$parent.formatMonthDate(this.month+1) + this.$parent.formatMonthDate(i);
            date_data['date'] = i;
            date_data['yearmonthdate'] = value_name;
            date_data['transparency'] = true;
            date_data['weekend'] = this.$parent.checkWeekend(this.year,this.month+1,i);
            weekarr.push(date_data);
          }
        }

        if(weekarr.length>0){
          datearr.push(weekarr);
        }
        return datearr;
      },
      
    }
  }
   
</script>

<style>
 

</style>