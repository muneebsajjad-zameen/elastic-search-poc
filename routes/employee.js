var express = require('express');
// const { sequelize } = require("../db-connection"); 
const { Employee } = require('../models');
const { esClient } = require("../elastic-client"); 
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  
  res.send('respond with a resourceAMC');
});

router.post('/', async function(req, res, next) {

  console.log(req.body);
  const employee = await Employee.create(req.body);

  esClient.index({
    index: 'employees',
    body: req.body
  })
  
  res.json(employee); 
});

module.exports = router;
