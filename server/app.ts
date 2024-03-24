import express, { Request, Response } from "express";

const app: express.Application = express();

const users = [
  { id: 1, name: "Nikita" },
  { id: 2, name: "Zajec" },
  { id: 3, name: "Alex" },
];

app.use(function (request: Request, response: Response, next) {
  console.log(
    "Request " + request.method + " to " + request.url,
    " at " + new Date(),
  );
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/users", function (request: Request, response: Response) {
  response.send({ users: users });
});

app.get("/user", function (request: Request, response: Response) {
  const userId = Number.parseInt(request.query.id?.toString() ?? "");
  const user = users.filter((user) => user.id === userId);

  if (user.length > 0) {
    response.send(user[0]);
  } else {
    response.status(404).send("User not found");
    response.end();
  }
});

app.listen(3000, "localhost", () => {
  console.log("Server running at http://localhost:3000/");
});
