var app = require('./server-config.js');

 // var port = 3458;
var port = process.env.PORT || 4478;

app.listen(port);

console.log('Server now listening on port ' + port);
