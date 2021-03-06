//Globals
GLOBAL.fs      = require('fs');
GLOBAL._       = require('underscore');
GLOBAL.express = express = require("express");
GLOBAL.app     = express();
GLOBAL.ejs     = require('ejs');

//Mongoose
mongoose = require('mongoose');
var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/gifbin';
mongoose.connect(mongoUri);
mongoose.connection.on('error', function(){
	console.log(">>>ERROR: Run Mongodb.exe ya goof!");
});

//Express
app.engine('html', ejs.renderFile);
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});

//Modules
mw  = require('./modules/middleware.js');
xo  = require('./modules/xo-node.js');


//Models
require('./modules/models/gif.js');
require('./modules/models/category.js');
require('./modules/models/clicks.js');


//Renders HTML file with layout.ejs
var render = function(htmlFile, vars){
	var tempRender = ejs.render(fs.readFileSync(__dirname + '/views/' + 'layout.ejs','utf8'), {
		body : fs.readFileSync(__dirname + '/views/' + htmlFile,'utf8'),
	});
	return ejs.render(tempRender, vars);
};


//Routes
app.get('/', function(req,res){
	res.end(render('index.html', {
		things : 'test'
	}));
});

app.get('/thing/:thingid', function(req,res){
	Things.findById(req.params.thingid, function(err, thing){
		if(err || !thing) return res.send(500, "Can't find thing");
		res.end(render('thingPage.html', {
			thing : JSON.stringify(thing)
		}));
	});
});

app.get('*', function(req,res){
	res.end(render('oops.html'));
});