// const { Client } = require('@elastic/elasticsearch')
const { Client } = require('@opensearch-project/opensearch')
var fs = require('fs');

const getElasticClient = () => {
  let connection = null;
    try {
      //  connection = new Client({ node: 'http://localhost:9200' })
      const host = 'localhost';
      const protocol = 'https';
      const port = 9200;
      const auth = 'admin:admin'; // For testing only. Don't store credentials in code.
      var ca_certs_path = "./rootCA.crt";

       connection = new Client({
        node: protocol + '://' + auth + '@' + host + ':' + port,
        ssl: {
          ca: fs.readFileSync(ca_certs_path),
          rejectUnauthorized: false
      }
    })
      console.log('Elastic search: Connection has been established successfully.');
    } catch (error) {
      console.error('Elastic search: Unable to connect to the database:', error);
    }
 
    return connection;  
};

module.exports = {
  esClient:getElasticClient()
};
