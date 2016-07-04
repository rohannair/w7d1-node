'use strict';

const http = require('http');
const PORT = process.argv[2] || 3000;
const url = require('url');
const chalk = require('chalk');

const server = http.createServer(function(req, res) {

  const url_parts = url.parse(req.url, true);
  const query = url_parts.query;
  console.log(chalk.bold.yellow(JSON.stringify(query, null, 4)));

  switch(query.page) {
    case 'test':
      res.end('Welcome to the test page');
    break;

    case '/':
    default:
      res.end('Hello!');
    break;
  }

});

server.listen(PORT, '127.0.0.1');
console.log(`Server running at http://127.0.0.1:${PORT}/`);
