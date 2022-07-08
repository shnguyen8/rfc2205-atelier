const axios = require('axios');
require('dotenv').config();

let getInfo = (endpoint) => {

  console.log('axios endpoint', endpoint)
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc${endpoint}`,
    headers: {
      // "User-Agent": "request",
      'Authorization': `${process.env.AUTHORIZATION_TOKEN}`
    }
  };

  return axios(options);

}

module.exports = {
  getInfo,
};