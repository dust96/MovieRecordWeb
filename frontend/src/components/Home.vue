
<template>
    <div class="totallistdiv">
        <div class="totallist"  :key="total.key" v-for="total in totallist" >
            <div class='title'>{{total.text}}</div>
            <div class="blank"></div>
            <div class="total">{{total.num}}</div>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'Home',
    data() {
        return {
            totallist:[
                {text:"총관람수", num:0, key:"total"},
                {text:"관람영화수", num:0, key:"typetotal"}
            ]
        }
    },
    
  }
   
</script>

<style>
    .totallistdiv{
        width:100%;
        height:10%;
    }
    .totallist{
        width:100%;
        height:100%;
        display:grid;
        grid-template-columns: 0.5fr 1fr 0.5fr;
        text-align: center;
        line-height: 100%;
    }

   
</style>