
<template>
  <div class="datebox-grid">
    <div>{{this.datedata.date}}</div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: "DateBox",
    props: [ 'datedata' ]
  }
   
</script>

<style>
.datebox-grid{
  width:100%;
  height:100%;
  display:grid;
  grid-template-rows: 0.2fr 0.8fr;
}   

</style>