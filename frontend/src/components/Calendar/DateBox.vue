
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

</style>