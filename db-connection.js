const { Sequelize } = require('sequelize');

const getDBConnection = () => {

    const connection =  new Sequelize( {
      host: 'localhost',
      dialect: 'mysql',
      username:'root',
      password: 'zameen123root',
      database: 'employees',
      port:3306
    });
    

    try {
       connection.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }

    return connection;  

  
};

module.exports = {
  sequelize:getDBConnection()
};
