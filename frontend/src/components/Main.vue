
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
    }
    
  }
   
</script>

<style>
.mainpage{
  width:100%;
  height: 100%;
}
.content{
  width:100%;
  height:85%;
}
</style>