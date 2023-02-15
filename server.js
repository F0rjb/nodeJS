const http = require("http");
http
  .createServer((req, resp) => {
    resp.write("<h1>Hello node !!</h1>");
    resp.end();
  })
  .listen(3000);
console.log("serverRunIn3000");
