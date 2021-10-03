const Sequelize = require('sequelize');
const { sequelize } = require("../db-connection");  
module.exports = function( ) {
  
  const Employee =  sequelize.define('Employee', {
    emp_no: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    birth_date: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    first_name: {
      type: Sequelize.STRING(14),
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING(16),
      allowNull: false
    },
    gender: {
      type: Sequelize.ENUM('M','F'),
      allowNull: false
    },
    hire_date: {
      type: Sequelize.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'employees',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "emp_no" },
        ]
      },
    ]
  });

  Employee.addHook("afterCreate",  function(obj, options) {
    console.log('HOOOOK>>>',options);
  })

  return Employee;
};
