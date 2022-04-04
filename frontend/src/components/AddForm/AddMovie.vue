
<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" >
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
    </b-form>
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
      onSubmit(event) {
        event.preventDefault()
        let form = new FormData();
        let file = this.$refs['file'].files[0];
      
        form.append('name', this.form.name);
        form.append('file', file);

        this.$http.post('/api/movie/add', form, {
            header: { 'Content-Type': 'multipart/form-data' }
        }).then( ({data}) => {
          console.log(data)
          // this.images = data
        })
        .catch( err => console.log(err))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.file = ''
      }
    }
  }
   
</script>

<style>
  

</style>