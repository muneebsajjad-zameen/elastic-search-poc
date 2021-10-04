var express = require('express');
const {Op} = require('sequelize');
const { Employee,DeptEmp,Departments } = require('../models');
const { esClient } = require("../elastic-client"); 
var mocker = require('mocker-data-generator').default;
var router = express.Router();

/* GET users listing. */
router.get('/:id', async function(req, res, next) {
  try {
    const employeeInfo = await Employee.findOne({
      where: {
        emp_no: {
          [Op.eq]: req.params.id,
        },
      },
      include: [
        {
          model: Departments,
          required: false,
        }
      ]  
    })
  } catch (error) {
    throw error
  }
  

  res.json(employeeInfo);
});

router.post('/', async function(req, res, next) {

const employee = {
  emp_no: {
      chance: 'integer({"min": 500000, "max": 1000000})',
  },
  birth_date: {
      faker: 'date.past'
  },
  first_name: {
      faker: 'name.lastName'
  },
  last_name: {
      faker: 'name.lastName'
  },
  gender: {
      values: ['M', 'F']
  },
  hire_date: {
      faker: 'date.past'
  },
  

};

const department = {
  emp_no:{
    hasOne: 'employee',
    get: 'emp_no' 
  },
  dept_no:{values:['d009','d005','d002','d003','d001','d004','d006','d008','d007']},
  from_date:{faker:'date.past'},
  to_date:{faker:'date.future'}
};
const mockedData = mocker()
    .schema('employee', employee, 1)
    .schema('department', department, 1)
    .buildSync();

  await Promise.all([Employee.create(mockedData.employee[0]),DeptEmp.create(mockedData.department[0])]);

  // esClient.index({
  //   index: 'employees',
  //   body: req.body
  // })
  
  res.json(mockedData); 
});

module.exports = router;
