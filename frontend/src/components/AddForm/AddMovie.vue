
<template>
  <div class='addmovie'>
    <div class='titlebar'>
      영화 등록
    </div>
    <div class='addformdiv'>
      <div class='addformbox addformbox_movie'>
        <div class='addform'>
          <div class='formtitle'>영화 제목</div>
          <div><input id="input-1" v-model="form.name" type="text"></div>
        </div>
        <div class='addform'>
          <div class='formtitle'>영화 포스터</div>
          <div>
            <input class="upload_name" id="upload_name" v-bind:value="form.file" >
            <label for="form-image"><span>업로드</span></label> 
            <input v-on:change="inputFile" ref="file" id="form-image" type="file" >
          </div>
        </div>
      </div>
    </div>
    <div class='addbtndiv'>
      <div class='resetbtn' v-on:click="onReset">
        <span>취소</span>
      </div>
      <div class='submitbtn' v-on:click="onSubmit">
        <span>등록</span>
      </div>
    </div>
    <!-- <b-form @submit="onSubmit" @reset="onReset" >
        <b-form-group
            id="input-group-1"
            label="영화 제목 :"
            label-for="input-1"
        >
            <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Image" label-for="form-image" label-cols-lg="2">
            <b-input-group>
                <b-input-group-prepend is-text>
                <b-icon icon="image-fill"></b-icon>
                </b-input-group-prepend>
                <b-form-file type="file" v-model="form.file" ref="file" id="form-image" accept="image/*"></b-form-file>
            </b-input-group>
        </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form> -->
  </div>
</template>

<script>

  export default {
    name: "AddMovie",
     data() {
      return {
        form: {
          name: '',
          file: ''
        },
      }
    },
    methods: {
      inputFile(){
        
        this.form.file = this.$refs['file'].files[0].name;
      },
      async onSubmit(event) {
        event.preventDefault()
        let form = new FormData();
        let file = this.$refs['file'].files[0];
      
        if(file == null){
          this.$http.post('/api/movie/add',{name:this.form.name}, {
              header: { 'Content-Type': 'multipart/form-data' }
          }).then( ({data}) => {
            if(data.result == true){
              alert(data.message);
              this.$router.go(-1);
            }
            else {
              alert(data.message)
            }
          })
          .catch( err => console.log(err))
        }
        else {
          form.append('name', this.form.name);
          form.append('file', file);
          this.$http.post('/api/movie/addwithimg', form, {
              header: { 'Content-Type': 'multipart/form-data' }
          }).then( ({data}) => {
            if(data.result == true){
              alert(data.message);
              this.$router.go(-1);
            }
            else {
              alert(data.message)
            }
          })
          .catch( err => console.log(err))
        }
        
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.name = '';
        this.form.file = '';
        this.$refs['file'].value = null;

        this.$router.go(-1);
      }
    }
  }
   
</script>

<style>
  

</style>