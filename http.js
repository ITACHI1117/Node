const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Homepage");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(
    `<h1>Opps</h1> 
      <p><We cnat find the page that you are looking for </p> 
       <a href="/">Back Home</a>`
  );
});

server.listen(5000);
