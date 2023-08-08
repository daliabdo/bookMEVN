const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port=process.env.PORT || 3000;

require('dotenv').config();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.engine('ejs', require('ejs').__express);

const routes = require('./server/routes/bookRoutes.js');
app.use('/',routes);


app.listen(port,() => {
    console.log(`listening on port ${port}`)
});

