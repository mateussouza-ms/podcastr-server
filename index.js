const jsonServer = require('json-server');
const data = require("./server.json");

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults({readOnly: true});
 
server.use(router);
server.use(middlewares);

const port = process.env.PORT || 3333;

server.listen(port, () => {
  console.log('JSON Server is running')
});