
<template>
  <div class="mainpage">
    <Header></Header>
    <div class="content">
      <router-view></router-view>
    </div>
    <Menu></Menu>

  </div>
</template>

<script>
  import Header from "./layout/Header";
  import Menu from "./layout/Menu";

  export default {
    name: 'Main',
    components: {
      Header,
      Menu
    },
    created(){
      this.$http.get("/api/login")
                .then((res)=>{
                  const user = res.data.user;
                  if(user){
                    this.$store.commit("setUser",user);
                  }
                  else{
                  }
                })
                .catch((err)=>{
                  console.error(err);
                });
    },
    computed:{
      user(){return this.$store.getters.user;}
    }
    
  }
   
</script>

<style>

</style>