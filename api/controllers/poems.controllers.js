var poemData = require('../data/poem-data.json');

module.exports.poemsGetAll = function(req, res){
	console.log("GET the poems");
	console.log(req.query);

	var offset = 0;
	var count = 5;

	if (req.query && req.query.offset){
		offset = parseInt(req.query.offset, 10);
	}

	if (req.query && req.query.count){
		count = parseInt(req.query.count, 10);
	}
	
	var returnData = poemData.slice(offset,offset+count);
	
	res
		.status(200)
		.json( returnData );
};

module.exports.poemsGetOne = function(req, res){
	var poemId = req.params.poemId;
	var thisPoem = poemData[poemId];
	console.log("GET poemId", poemId);
	res
		.status(200)
		.json( thisPoem );
};

module.exports.poemsAddOne = function(req, res){
	console.log("POST new poem");
	console.log(req.body);
	res
		.status(200)
		.json(req.body);

};