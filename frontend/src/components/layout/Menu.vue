
<template>
  <div class="menu">
        <div class="menulist" :key="menu.key" @click="ChangePage(menu.key)" v-for="menu in menulist">
            <div class="menuicon"><img :src="require(`@/assets/menu/${menu.icon}.png`)"></div>
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
    props:[
      'addmenu'
    ],
    methods:{
        ChangePage(key){
            if(key != 'home'){
              this.$router.push({path:"/main/"+key}).catch(()=>{});
            }
            else if(key == 'home'){
              
              this.$emit('add:menu',true);
            }
            
        }
    }
    
  }
   
</script>

<style>
    
</style>