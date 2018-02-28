const express = require('express');
let path = require('path');
const app = express();

let engines = require('consolidate');

//app.set('views', __dirname + '/dist');
app.use(express.static(`${__dirname}/dist`));

app.engine('html', engines.mustache);
app.set('view engine', 'html');

const PORT = process.env.PORT || 9000;


app.get('/', function(req, res, next) {

  return res.sendfile('/dist/index.html', { root: __dirname + '/..' });

  next();
});

/*
app.get('/',function(req,res, next) {
  res.render(__dirname + "/dist/index.html");
  req.next();
});*/

app.listen(PORT, function () {
  console.log('Proxy app listening on port ' + PORT);
})
