const app = require('./lib/app');
const http = require('http');
const port = process.env.PORT || 3000;
const connection = require('./lib/setup-mongoose');

const server = http.createServer(app);
server.listen(port, () => {
  console.log('PORT: ', server.address());
});
