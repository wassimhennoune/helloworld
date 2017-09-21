var app = require('express')();


/*app.get('/popular', function(req, res){
    console.log("popular request");
    var page = (req.query["page"]) ? req.query["page"] : 1;
    page = (req.query["page"] > 1000) ? 1000 : req.query["page"];
    mdb.miscPopularMovies({page: page}, function(err, data){
        data.total_pages = 1000;
        res.send(data)
    });
});*/


app.get('/wassim', function(req, res) {
	console.log("login request");
});

app.post('/get', function(req, res) {
	console.log("login post request");
});

app.listen(3000, function () {
    console.log("Listening 3000")
});