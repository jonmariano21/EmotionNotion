var data = require('../data.json');

exports.addDescription = function(req, res){
  
	var emotion = req.query.emotion;
  console.log(emotion);
	res.render('description');


};

