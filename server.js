var express         = require('express'),
    app             = express(),
    port            = process.env.PORT || 1000;
    
app.use('/app', express.static(__dirname + '/public/app'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.all('/*', function(req, res, next) {
    res.sendFile('/public/index.html', { root: __dirname });
}); 

app.listen(port);	
console.log('Magic happens on port ' + port);