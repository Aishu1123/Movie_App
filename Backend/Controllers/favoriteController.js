

const { Favorite } = require("../model/Favorite.model"); 

exports.addToFavorites = async (req, res) => {
    const { title, year, type, posterUrl } = req.body;
  
    try {
      // Check if the movie is already in favorites
      const existingFavorite = await Favorite.findOne({ where: { title } });
  
      if (existingFavorite) {
        return res.status(400).json({ error: 'Movie already in favorites' });
      }
  
      // If not, add it to the favorites table
      const newFavorite = await Favorite.create({ title, year, type, posterUrl });
      res.json(newFavorite);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
