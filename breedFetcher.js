const request = require("request");
//const userInput = process.argv[2];
// console.log(userInput);
const fetchBreedDescription = (breedName, cb) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, res, body) => {
    if (error) {
      cb(`Failed to request details: ${error}`, null);
    }
    //console.log(res)
    const data = JSON.parse(body);
    //console.log(data);
    const breed = data[0];
    // console.log(breed);
    if (breed) {
      cb(null, breed.description);
    } else {
      cb(`Failed to find breed ${userInput}`, null);
    }
  });
};

module.exports = { fetchBreedDescription };
