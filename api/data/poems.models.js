var mongoose = require('mongoose');

var poemSchema = new mongoose.Schema({
	book : {
		type : String,
		required : true
	},
	author : String,
	poem : String
});

mongoose.model('Poem', poemSchema);