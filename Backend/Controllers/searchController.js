

const axios = require('axios');

// const apiKey = 'ea0fded2-b294-403a-b73d-b72bea486ece'; 

exports.searchMovies = async (req, res) => {
  const searchQuery = req.query.q;
try {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=55a3b75&s=${searchQuery}`);
    const movies = response.data.Search;
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
