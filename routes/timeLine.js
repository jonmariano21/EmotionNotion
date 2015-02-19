// Get all of our friend data

var data = require('../data.json');

exports.addTimeLine = function(req, res) { 
	// Your code goes here


	//res.render('added'); 
	
  	var newEntry = 
	{
		'name': req.query.name,
		'imageURL': req.query.imageURL,
		'description': req.query.description,
	}
	;


	console.log("New Entry has been added:");

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



