var express = require('express')
    ,fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    var indexhtml  = fs.readFileSync('index.html', 'utf-8');
    response.send(indexhtml);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});