const express = require('express');
const fs = require('fs');
const apiRoutes = require('../../msu-det-fsf-pt-11-2020-u-c/11-express/01-Activities/15-HotRestaurant/Solved/routes/apiRoutes');
const htmlRoutes = require('../../msu-det-fsf-pt-11-2020-u-c/11-express/01-Activities/15-HotRestaurant/Solved/routes/htmlRoutes');

const app= express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api',apiRoutes);
app.use ('/',htmlRoutes);

app.listen(PORT, () =>{
    console.log(`App Listening on PORT: ${PORT}`);
});