import { createServer, IncomingMessage, ServerResponse } from "http";

const server = createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    console.log("Url:", request.url);
    console.log("Тип запроса:", request.method);
    console.log("User-Agent:", request.headers["user-agent"]);
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    response.end("Hello, World1My changes!");
  },
);

server.listen(3000, "localhost", () => {
  console.log("Server running at http://localhost:3000/");
});
