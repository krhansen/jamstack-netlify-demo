const axios = require('axios');

console.log(require('dotenv').config()); // log in bash output

module.exports = async function() {
  try {

    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`); // note the backticks!
    return response.data;
  
  } catch (error) {

    console.error(error);
  }
};