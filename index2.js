// index2.js
const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTime } = require('./index')
// see index.js for printPassTimes 
// copy it from there, or better yet, moduralize and require it in both files

// Call 
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTime(passTimes);
  })
    .catch((error) => {
      console.log("It didn't work: ", error.message);
    });