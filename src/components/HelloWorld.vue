<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form :onsubmit="submitLocation">
      <label for="location-input">Enter city name
        <input type="text" id="location-input" name="location-input" placeholder="Input a city" v-model="location" required>
        <input type="submit" value="Submit"/>
      </label>
    </form>
    <br>
    <div>Status: {{ status }}</div>
    <br>
    <div v-if="result && !loading">
      <textarea id="result" name="result" v-model="result" rows="10" cols="50"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      loading: false,
      location: '',
      result: '',
    };
  },
  computed: {
    status: function () {
      return this.loading ? 'Calling API ...' : `API called ${this.count} times.`;
    }
  },
  methods: {
    async submitLocation(e) {
      e.preventDefault();

      this.loading = true;
      
      await axios.get(`http://localhost:${process.env.VUE_APP_BACK_END_PORT}`, {
        params: {
          location: this.location
        }
      })
      .then((response) => {
        this.result = JSON.stringify(response.data);
      })
      .catch(console.error);

      this.count += 1;
      this.loading = false;
    }
  },
}
</script>

<style scoped>
input[type=submit] {
  cursor: pointer;
}
</style>
