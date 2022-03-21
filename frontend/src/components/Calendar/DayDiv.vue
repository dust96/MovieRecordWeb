
<template>
    <div class="day-div">
        <div>SUN</div>
        <div>MON</div>
        <div>TUE</div>
        <div>WED</div>
        <div>THU</div>
        <div>FRI</div>
        <div>SAT</div>
    </div>
</template>

<script>
  export default {
    name: 'DayDiv'
  }
   
</script>

<style>
.day-div{
    width:100%;
    height:5%;
    text-align: right;
    display:grid;
    font-size: 14px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    border-bottom : 1px solid rgba(58, 50, 74,0.2);
}   
.day-div div{
    padding:5%;
}

</style>