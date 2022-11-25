// index.js
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
});

fetchCoordsByIP('64.180.212.197', (error, data) => {
  if (error) {
    console.log("Not working!", error);
    return;
  }
  console.log('Wow it worked! Coordinates received:', data);
});
