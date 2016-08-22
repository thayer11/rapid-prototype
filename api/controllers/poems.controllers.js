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
module.exports.poemsGetOne = function(req, res) {
    // Get the connection from MongoDB using Mongo NPM package
    // var db = dbconn.get();
    // Define a new variable for the specific collection in MongoDB using Mongo NPM Package
    // var collection = db.collection('poems');

    var poemId = req.params.poemId;
    // var thisPoem = poemData[poemId];
    console.log("GET poemId ", poemId);

    // Find single document from mongoDB - Using the ObjectId helper from MongoDB from Mongo NPM Package only
    // collection
    //     .findOne({
    //         _id : ObjectId(poemId)
    //     }, function(err, doc) {
    //         res
    //           .status(200)
    //           .json(doc);
    //     });

    // Getting from Mongoose Model
    Poem
        .findById(poemId)
        .exec(function(err, doc) {
            var response = {
                status: 200,
                message: doc
            };
            if (err) {
                console.log("Error when finding poem");
                  response.status = 500;
                  response.message = err;
            } else if (!doc) {
                  response.status = 404;
                  response.message = {
                      "message" : "Poem ID not found"
                  };
            }
            res
              .status(response.status)
              .json(response.message);

        });
};

// module.exports.poemsAddOne = function(req, res){
//  	console.log("POST new poem");
//  	console.log(req.body);
//  	var poem = new Poem(req.body);
//  	poem.save(function(error) {
//  		if(error) res.json({message: "Could not create card b/c "+error});
//  	});
//  }
 // Controller function to create a new poem
module.exports.poemsAddOne = function(req, res) {

    Poem
        .create({
            book: req.body.book,
            author: req.body.author,
            poem: req.body.poem 
            
		}, function(err, poem) {
            if(err) {
                console.log("Error creating model");
                res
                  .status(400)
                  .json(err);
            } else {
                console.log("Poem created", poem);
                res
                  .status(201)
                  .json(poem);
            }
        });
};
	