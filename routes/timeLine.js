// Get all of our friend data

var data = require('../data.json');

/*
exports.view = function(req, res){
  res.render('timeLine');
};
*/


exports.addTimeLine = function(req, res) { 
	// Your code goes here


	//res.render('added'); 
	
  	var newEntry = 
	{
		'name': req.query.name,
		'date': req.query.date,
		'priority': req.query.priority,
		'description': req.query.description,
	}
	;


	console.log("New task added:");

	console.log(newEntry);
	data["emotions"].push(newEntry);
	
	res.render('timeLine', data);

}

/*
exports.view = function(req, res){
	console.log(data);
	res.render('timeLine', data);
};
*/



