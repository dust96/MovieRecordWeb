
<template>
    <div class='addmenubox'  @click="HideMenu($event)">
        <div class='addmenuposition'>
            <div class="addmenu" >
                    <div class="addmenulist" @click="ChangeAddPage(menu.key)" :key="menu.key"  v-for="menu in menulist">
                        <div class="addmenuicon"><img :src="require(`@/assets/addmenu/${menu.icon}.png`)"></div>
                        <div class="addmenuname"><span>{{menu.text}}</span></div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'AddMenu',
    data() {
        return {
            menulist:[
                {text:"관람", icon:"add", key:"addlog"},
                {text:"굿즈", icon:"stamp", key:"stamplog"},
                {text:"영화", icon:"movie", key:"moviedata"}
            ]
        }
    },
    props:[
      'addmenu'
    ],
    methods:{
        HideMenu(event){
            if(event.target._prevClass!="addmenu"){
                this.$emit('add:menu',false);
            }

        },
        ChangeAddPage(key){
            this.$emit('add:menu',false);
            this.$router.push({path:"/main/"+key}).catch(()=>{});
            
        }
    }
    
  }
   
</script>

<style>
    
</style>