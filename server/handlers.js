const axios = require('axios');
require('dotenv').config();

let getInfo = (endpoint) => {

  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc${endpoint}`,
    headers: {
      'Authorization': `${process.env.AUTHORIZATION_TOKEN}`
    }
  };

  return axios(options);

}

let putInfo = (endpoint) => {

  let options = {
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc${endpoint}`,
    headers: {
      'Authorization': `${process.env.AUTHORIZATION_TOKEN}`
    }
  };

  return axios(options);

}

module.exports = {
  getInfo,
  putInfo
};