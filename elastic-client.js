const { Client } = require('@elastic/elasticsearch')

const getElasticClient = () => {
  let connection = null;
    try {
       connection = new Client({ node: 'http://localhost:9200' })
      console.log('Elastic search: Connection has been established successfully.');
    } catch (error) {
      console.error('Elastic search: Unable to connect to the database:', error);
    }
 
    return connection;  
};

module.exports = {
  esClient:getElasticClient()
};
