
<template>
  <div class="menu">
        <div class="menulist" :key="menu.key" @click="ChangePage(menu.key)" v-for="menu in menulist">
            <div class="menuicon"><img :src="require(`@/assets/${menu.icon}.png`)"></div>
            <div class="menuname"><span>{{menu.text}}</span></div>
        </div>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
    data() {
        return {
            menulist:[
                {text:"캘린더", icon:"calendar", key:"calendar"},
                {text:"굿즈챌린지", icon:"gift", key:"goods"},
                {text:"홈", icon:"home", key:"home"},
                {text:"분석", icon:"file", key:"analyze"},
                {text:"마이페이지", icon:"user", key:"mypage"}
            ]
        }
    },
    methods:{
        ChangePage(key){
            
            this.$router.push({path:"/main/"+key})
        }
    }
    
  }
   
</script>

<style>
    .menu{
        width:100%;
        height: 10%;
        border-top : 1.5px solid #bea5ef;
    }

    .menulist{
        width:20%;
        height: 100%;
        float:left;
        margin:auto;
    }

    .menuicon{
        position:relative;
        width:100%;
        height:60%;
    }

    .menuicon img{
        position:absolute;
        height:auto;
        width:25%;
        left:0px;
        right:0px;
        top:0px;
        bottom:0px;
        margin:auto;
        
    }

    .menuname{
        width:100%;
        height:10%;
        position: relative;
      
    }

    .menuname span{
        position:absolute;
        left:0px;
        right:0px;
        top:0px;
        bottom:0px;
        margin:auto;
        text-align: center;
    }

</style>