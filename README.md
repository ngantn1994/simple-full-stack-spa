# A simple Full stack SPA
A simple full stack application for test using API/packages, etc.

(Because we can't expose sensitive info to client side, so in many cases API calls must be done from server-side).

The idea is to demo a simple api call from back-end to back-end, then front-end will call back-end to get the data.

![image](https://user-images.githubusercontent.com/16540751/132084742-acbe3386-11a5-44f6-ab11-13f9aee025e0.png)


##  1. Init project
The API used in this example is `openweathermap`, so a API key from `https://openweathermap.org/` is required.

To install required module, after checkout, from the root folder do
```
npm install
```
Then copy the content of `.env.example` to a new `.env` file, and put your API key to `OPEN_WEATHER_APP_ID`.
```
OPEN_WEATHER_APP_ID=<your openweathermap api key>
```
You can also change the port to be served in here.

##  2. Start the service
From root folder, run
```
npm run full
```
and the Vue front-end will be up at `http://localhost:3000/`.
Node back-end will be up at `http://localhost:3001/`.
(Ports are defined in `.env` file).

## 3. Packages used

- `express`: for better node server
- `vue-cli`: to implement Vue 3
- `npm-run-all`: serve both node server and Vue in 1 call
- `cors`: allow cors
- `dotenv`: read values from `.env` file to `process.env` for node server (Vue 3 will auto read value with prefix `VUE_APP_` from `.env`)
- `axios`: http calls

## 4. Screenshot

![image](https://user-images.githubusercontent.com/16540751/132084331-0e5fb387-650f-436e-aa58-0356a368b557.png)
