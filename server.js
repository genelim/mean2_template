var express         = require('express'),
    app             = express(),
    mongoose       = require('mongoose'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    port            = process.env.PORT || 1000;
    
db = require('./config/db');
mongoose.connect(db.url); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride('X-HTTP-Method-Override'));
require('./app/routes')(app); 

app.use('/app', express.static(__dirname + '/public/app'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.all('/*', function(req, res, next) {
    res.sendFile('/public/index.html', { root: __dirname });
}); 

app.listen(port);	
console.log('Magic happens on port ' + port);