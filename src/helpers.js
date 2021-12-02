const jwt = require('jsonwebtoken');

const getBearerToken = function (req) {
  const authHeader = req.get('Authorization');
  return authHeader.replace('Bearer ', '');
};

const verifyJWT = function (token, secret) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, function (error, decoded) {
      if (error) {
        reject(error);
      } else {
        resolve(decoded);
      }
    });
  });
};

module.exports = {
  getBearerToken,
  verifyJWT,
};
