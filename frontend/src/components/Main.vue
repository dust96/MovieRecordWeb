
<template>
  <div class="mainpage">
    <Header></Header>
    <div class="content">
      <router-view v-bind:usercode="user.user_code"></router-view>
    </div>
    <AddMenu v-show="addmenu" v-bind:addmenu="addmenu" @add:menu="addMenu"></AddMenu>
    <Menu v-bind:addmenu="addmenu" @add:menu="addMenu"></Menu>
  </div>
</template>

<script>
  import Header from "./layout/Header";
  import Menu from "./layout/Menu";
  import AddMenu from "./layout/AddMenu";

  export default {
    name: 'Main',
    components: {
      Header,
      Menu,
      AddMenu
    },
    data(){
      return {
        addmenu : false
      }
    },
    created(){
      this.$http.get("/api/login")
                .then((res)=>{
                  const user = res.data.user;
                  if(user){
                    this.$store.commit("setUser",user);
                  }
                  else{
                    this.$router.push({path:"/"})
                  }
                })
                .catch((err)=>{
                  console.error(err);
                });
    },
    computed:{
      user(){return this.$store.getters.user;}
    },
    methods:{
      addMenu(addboolen){
          this.addmenu = addboolen;
      }
    }
  }
   
</script>

<style>

</style>