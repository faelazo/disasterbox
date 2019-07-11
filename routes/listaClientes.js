'use strict'

var express = require('express');
var fs = require('fs');

var data = JSON.parse(fs.readFileSync('./data/clients.json'));

var router  = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Lista de Clientes llamado");
  res.json(data);
});

module.exports = router;
