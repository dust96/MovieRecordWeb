
<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="ID"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="id"
          type="text"
          placeholder="ID"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="PASSWORD" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="password"
          placeholder="PASSWORD"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>

<script>
 
  export default {
    name: 'Login',
    data() {
      return {
        id:'',
        password:'' 
      }
    },
    methods:{
      onSubmit(e){
          e.preventDefault();
          const id = this.id;
          const password = this.password;
          this.$http
            .post("/api/login"
              ,{id,password}
              ,{"Content-Type":"application-json"})
            .then(
              (res) =>{
                
                if(res.data.user){

                  this.$store.commit('setUser',res.data.user);
                  this.$router.push({path:'main'});
                }
                else if(res.data.message){
                  alert(res.data.message)
                }
              },
              (err) =>{
                alert(err+"login failed")
              }
            )
            .catch((err)=>{
              console.error(err)
            });
          

      },
    }
    
  }
   
</script>