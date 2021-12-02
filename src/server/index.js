const express = require('@/express.js');
const http = require('http');

const routes = {
  '/tg': './routes/tg',
};

Object.keys(routes).forEach((rout) => {
  express.use(rout, require(routes[rout]));
});

express.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: error.message,
  });
});

http.Server(express).listen(process.env.PORT);
