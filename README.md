# simple-full-stack-spa
A simple full stack application for test using API/packages, etc.

###  1. Init project
To install required module, after checkout, from the root folder do
```
npm install
```

###  2. Start the service
From root folder, run
```
npm run full
```
and the Vue front-end will be up at `http://localhost:3000/`.
Node back-end will be up at `http://localhost:3001/`.

###  3. Default flow
The idea is to demo a simple api call from back-end to back-end, then front-end will call back-end to get the data.

(Because we can't expose sensitive info to client side, so in many cases API calls must be done from server-side).
