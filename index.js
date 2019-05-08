var express = require('express');
var app = express();
var port = process.env.PORT || 8042;
const path = require('path');

  app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/Presentacion/presentacion.html'));
  });

//launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);

//catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(500).render('404', {title: "Sorry, page not found"});
});
exports = module.exports = app;