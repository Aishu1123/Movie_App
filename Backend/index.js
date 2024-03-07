const express = require('express');
// const bodyParser = require('body-parser');
const searchRoutes = require('./routes/searchRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');
const {sequelize} = require('./config/db');
const {Favorite} = require('./model/Favorite.model');
const cors=require("cors")
const app = express();
const PORT =3000;

app.use(express.json());
 app.get("/",(req,res)=>{
    res.status(200).json("homepage");
 })

sequelize.sync()
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

app.use('/search', searchRoutes);
app.use('/favorites', favoriteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:/${PORT}`);
});
