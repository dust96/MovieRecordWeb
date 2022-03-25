
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
          v-model="form.id"
          type="text"
          placeholder="ID"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="PASSWORD" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
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
          form:{
              id:'111',
              password:'111' 
          }
      }
    },
    methods:{
      onSubmit(e){
          e.preventDefault();
          // this.$http.get('/api/login').then(res => { console.log(res.data) })

          this.$http
            .post("/api/login",{
              user:this.form,
            })
            .then(
              (res) =>{
                console.log(res.data.message);
                this.$router.push({path:'main'})
              },
              (err) =>{
                alert(err+"login failed")
              }
            )
            .catch((err)=>{
              alert(err)
            });
          

      },
    }
    
  }
   
</script>