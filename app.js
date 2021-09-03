const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.VUE_APP_BACK_END_PORT;

app.get('/', (req, res) => {
  axios.get('http://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=' + process.env.OPEN_WEATHER_APP_ID)
  .then(function (response) {
      res.send(JSON.stringify(response.data));
  })
  .catch(function (error) {
      console.log(error);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});