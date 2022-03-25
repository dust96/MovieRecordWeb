
<template>
    <div class="select-month">
        <b-container class="bv-example-row">
            <b-row>
                <b-col @click="prevMonth"><b-icon icon="chevron-left" ></b-icon></b-col>
                <b-col>{{currentYearMonth}}</b-col>
                <b-col @click="nextMonth"><b-icon icon="chevron-right"></b-icon></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
  export default {
    name: 'SelectMonth',
    data(){
        return {
            currentYearMonth : "",
            year:0,
            month:0
        }
    },
    props:[
      'currentyearmonth'
    ],
    created() {
        this.year = this.currentyearmonth.currentYear;
        this.month = this.currentyearmonth.currentMonth;
        this.currentYearMonth = this.currentyearmonth.currentYear +"년 " + this.$parent.formatMonthDate(this.currentyearmonth.currentMonth)+"월"; 
    },
    methods:{
        prevMonth(){
            let prevyear = this.year;
            let prevmonth = this.month-1;
            if(prevmonth == 0){
                prevyear = this.year -1;
                prevmonth = 12;
            }
            let prevdate = new Date(prevyear, prevmonth-1,1);
            this.year = prevdate.getFullYear();
            this.month = prevdate.getMonth()+1;
            this.currentYearMonth = this.year+"년 " + this.$parent.formatMonthDate(this.month)+"월"; 
            this.currentyearmonth.currentYear = this.year;
            this.currentyearmonth.currentMonth = this.month;
            this.$emit('changemonth',this.currentyearmonth);
        },
        nextMonth(){
            let nextyear = this.year;
            let nextmonth = this.month+1;
            if(nextmonth == 0){
                nextyear = this.year +1;
                nextmonth = 1;
            }
            let nextdate = new Date(nextyear, nextmonth-1,1);
            this.year = nextdate.getFullYear();
            this.month = nextdate.getMonth()+1;
            this.currentYearMonth = this.year+"년 " + this.$parent.formatMonthDate(this.month)+"월"; 
            this.currentyearmonth.currentYear = this.year;
            this.currentyearmonth.currentMonth = this.month;
            this.$emit('changemonth',this.currentyearmonth);
        }
    }
  }
   
</script>

<style>
   

</style>