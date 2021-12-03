const request = require("request");
const userInput = process.argv[2];
// console.log(userInput);
//const fetchBreedDescription = (breedName, cb) => {
const url = `https://api.thecatapi.com/v1/breeds/search?q=${userInput}`;
request(url, (error, res, body) => {
  if (error) {
    console.log(`Failed to request details: ${error}`, null);
  }

  const data = JSON.parse(body);
  //console.log(data);
  const breed = data[0];
  // console.log(breed);
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`Failed to find breed ${userInput}`, null);
  }
});
//};
