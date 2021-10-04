const Sequelize = require('sequelize');
const { DeptEmp } = require('../models');
const { sequelize } = require("../db-connection");  


module.exports = function() {
  const Department = sequelize.define('Departments', {
    dept_no: {
      type: Sequelize.CHAR(4),
      allowNull: false,
      primaryKey: true
    },
    dept_name: {
      type: Sequelize.STRING(40),
      allowNull: false,
      unique: "dept_name"
    }
  }, {
    sequelize,
    tableName: 'departments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dept_no" },
        ]
      },
      {
        name: "dept_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dept_name" },
        ]
      },
    ]
  });

 Department.associate = function(models) {
  Department.belongsToMany(models.Employee, { through: DeptEmp });
  }

  return Department;
};
