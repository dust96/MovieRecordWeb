
<template>
    <div class="select-month">
        <b-container class="bv-example-row">
            <b-row>
                <b-col><b-icon icon="chevron-left" ></b-icon></b-col>
                <b-col>{{this.selectMonth}}</b-col>
                <b-col><b-icon icon="chevron-right"></b-icon></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
  export default {
    name: 'SelectMonth',
    props: [ "selectMonth" ]
  }
   
</script>

<style>
    .select-month{
        width:100%;
        height:5%;
        text-align: center;
    }

</style>