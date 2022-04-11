
<template>
  <div class='addmovie'>
    <div class='titlebar'>
      영화 기록
    </div>
    <div class='addformdiv'>
      <div class='addformbox addformbox_log'>
        <div class='addform'>
          <div class='formtitle'>관람일자</div>
          <div><date-picker v-model="form.ilja" valueType="format"></date-picker></div>
        </div>
        <div class='addform'>
          <div class='formtitle'>영화</div>
          <div>
            <select v-model = "form.movie">
              <option :key="item.value" :value="item.value" v-for="(item) in movieopt">{{item.text}}</option>
            </select>
          </div>
        </div>
        <div class='addform'>
          <div class='formtitle'>극장</div>
          <div>
            <select v-model = "form.theater">
              <option :key="item.value" :value="item.value" v-for="(item) in theateropt">{{item.text}}</option>
            </select>
          </div>
        </div>
        <div class='addform'>
          <div class='formtitle'>상영시간</div>
          <div><vue-timepicker v-model="form.viewing_start" format="HH:mm"></vue-timepicker><vue-timepicker v-model="form.viewing_end" format="HH:mm"></vue-timepicker></div>
        </div>
        <div class='addform'>
          <div class='formtitle'>상영관</div>
          <div><input id="hall_number" v-model="form.hall_number" type="text"></div>
        </div>
        <div class='addform'>
          <div class='formtitle'>좌석</div>
          <div><input id="seat" v-model="form.seat" type="text"></div>
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
  </div>
</template>

<script>
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  import VueTimepicker from 'vue2-timepicker'
  import 'vue2-timepicker/dist/VueTimepicker.css'
  export default {
    name: "AddLog",
    components: { DatePicker,VueTimepicker },
    data() {
      return {
        form: {
          movie:'',
          theater:'',
          ilja: '',
          viewing_start: '',
          viewing_end: '',
          hall_number: '',
          seat:''
        },
        movieopt: [],
        theateropt: []
      }
    },
    created(){
      this.$http.get('/api/option/movie').then(res =>{
        this.movieopt = res.data;
      });

      this.$http.get('/api/option/theater').then(res =>{
        this.theateropt = res.data;
      })
    },
    methods: {
      async onSubmit(event) {
        event.preventDefault();
        let user = this.$store.getters.user;
        this.$http.post('/api/calendar',{user_code:user.user_code,form:this.form}, 
        ).then( ({data}) => {
          if(data.result == true){
            alert(data.message);
            this.$router.go(-1);
          }
          else {
            alert(data.message)
          }
        })
        .catch( err => console.log(err))
        
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.movie = '';
        this.form.theater = '';
        this.form.ilja = '';
        this.form.viewing_start = '';
        this.form.viewing_end = '';
        this.form.hall_number = '';
        this.form.seat = '';
        this.$router.go(-1);
      }
    }
  }
   
</script>

<style>
  

</style>