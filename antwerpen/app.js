let fetch = require('node-fetch');
const express = require('express');
const ejs = require('ejs');

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
  res.render('index');
});

app.get('/stadsdeel', (req,res) =>{
  //API stadsdeel-gebruiksgroen
fetch('https://opendata.arcgis.com/datasets/593e9680b43e4332952d3ef249e1912a_854.geojson')
.then(res => res.json())
.then(stadsdeelData => {
    res.json(stadsdeelData);
});
});

app.get('/buurt', (req,res) =>{
  //API buurt-gebruiksgroen
fetch('https://opendata.arcgis.com/datasets/c96c56b2c36f48cc86fbe77ea872b555_850.geojson')
.then(res => res.json())
.then(buurtData => {
    res.json(buurtData);
});
});

app.listen(app.get('port'), () => {
  console.log(`Express started on http://localhost:${
    app.get('port')}; press Ctrl-C to terminate.`);
});