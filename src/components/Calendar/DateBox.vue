
<template>
  <div class="datebox-grid">
    <div v-bind:class="{transparency: this.datedata.transparency,weekend: this.datedata.weekend}">{{this.datedata.date}}</div>
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
  text-align: right;
  grid-template-rows: 0.2fr 0.8fr;
  padding:5%;
  font-size: 14px;
}   

.transparency{
  opacity:0.5;
}

.weekend{
  color: #ff0000;
}
</style>