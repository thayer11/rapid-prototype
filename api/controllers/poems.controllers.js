var mongoose = require('mongoose');
var Poem = mongoose.model('Poem');

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

Poem
	.find()
	.skip(offset)
	.limit(count)
	.exec(function(err, poems){
		console.log("Found poems", poems.length);
		res
			.json(poems);
	});
}
module.exports.poemsGetOne = function(req, res){
	console.log("in the getcard");
    var id = req.params.id;
    Poem.findById({_id: id}, function(error,poem) {
        if(error) {
            res.json({message: "Couldn't find the poem b/c "+error});
        } else{
        res.json({poem: poem});
	    }
    });
};

module.exports.poemsAddOne = function(req, res){
	console.log("POST new poem");
	console.log(req.body);
	var poem = new Poem(req.body);
	poem.save(function(error) {
		if(error) res.json({message: "Could not create card b/c "+error});
	});
}
	