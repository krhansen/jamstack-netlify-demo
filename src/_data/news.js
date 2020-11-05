const axios = require('axios');
const countries = require("./countries.json");

// console.log(require('dotenv').config()); // log in bash output
require('dotenv').config();

async function getNews(country) {
  try {

    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`); // note the backticks!
    return  {
    	"country": country,
    	"articles": response.data.articles
    }
  
  } catch (error) {

    console.error(error);
  }
};

module.exports = async function() {

	var newsPromises = countries.map(getNews);

	return Promise.all(newsPromises).then(newsObjects => {
		//console.log('newsObjects:', newsObjects); // log in bash output
		return [].concat.apply([],newsObjects);
	});
};