var express = require('express');
var router = express.Router();

var ctrlPoems = require('../controllers/poems.controllers.js');

router
.route('/poems')
.get(ctrlPoems.poemsGetAll)
.post(ctrlPoems.poemsAddOne);

router
.route('/poems/:poemId')
.get(ctrlPoems.poemsGetOne);

module.exports = router;