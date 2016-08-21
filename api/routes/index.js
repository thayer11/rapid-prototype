var express = require('express');
var router = express.Router();

var ctrlPoems = require('../controllers/poems.controllers.js');

router
.route('/poems')
.get(ctrlPoems.poemsGetAll);

router
.route('/poems/:poemId')
.get(ctrlPoems.poemsGetOne);

router
.route('/poems/new')
.post(ctrlPoems.poemsAddOne);

module.exports = router;