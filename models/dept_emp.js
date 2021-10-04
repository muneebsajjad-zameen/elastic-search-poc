const Sequelize = require('sequelize');
const { Employee } = require('../models');
const { sequelize } = require("../db-connection");  
module.exports = function() {
  const DeptEmp = sequelize.define('DeptEmp', {
    emp_no: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employees',
        key: 'emp_no'
      }
    },
    dept_no: {
      type: Sequelize.CHAR(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'departments',
        key: 'dept_no'
      }
    },
    from_date: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    to_date: {
      type: Sequelize.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dept_emp',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "emp_no" },
          { name: "dept_no" },
        ]
      },
      {
        name: "dept_no",
        using: "BTREE",
        fields: [
          { name: "dept_no" },
        ]
      },
    ]
  });

  
    // DeptEmp.associate = function(models) {
    //   DeptEmp.belongsTo(Employee, { foreignKey: "emp_no" });
    // }

  return DeptEmp;
};
