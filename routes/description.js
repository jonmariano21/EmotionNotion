var data = require('../data.json');

exports.addDescription = function(req, res){
  
	var emotion = req.query.emotion;
  var name = req.query.face;

	res.render('description', {"emotion" : emotion, "face" : name});


};

