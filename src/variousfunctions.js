/*

>> Fake API data
https://jsonplaceholder.typicode.com/users/

>> axios
https://www.npmjs.com/package/axios
Desc: Promise based HTTP client for the browser and node.js

*/
const axios = require('axios');

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Marc' };
    user['lastName'] = 'Antoine';
    return user;
  },
  fetchUser: () =>
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .catch(err => 'error')
};
module.exports = functions;
