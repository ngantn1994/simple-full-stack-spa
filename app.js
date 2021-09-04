//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * String format function
 */
String.prototype.formatUnicorn = String.prototype.formatUnicorn ||
  function () {
    "use strict";
    var str = this.toString();
    if (arguments.length) {
        var t = typeof arguments[0];
        var key;
        var args = ("string" === t || "number" === t) ?
            Array.prototype.slice.call(arguments)
            : arguments[0];

        for (key in args) {
            str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
        }
    }

    return str;
  };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Actual server implementation
 */
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

let app = express();
app.use(cors());

app.get('/', async (req, res) => {
  let location = req.query.location ? req.query.location : process.env.OPEN_WEATHER_DEFAULT_QUERY;

  await axios.get(process.env.OPEN_WEATHER_URL.formatUnicorn(location, process.env.OPEN_WEATHER_APP_ID))
  .then(function (response) {
      res.send(JSON.stringify(response.data));
  })
  .catch(function (error) {
      console.log(error);
      res.send(JSON.stringify({error: 'Invalid location.'}));
  });
})

app.listen(process.env.VUE_APP_BACK_END_PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.VUE_APP_BACK_END_PORT}`)
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////