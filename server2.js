import { createServer } from "http";

const PORT = 8000;
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Jim Doe" },
];

//Logger Middleware

const logger = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

//Handler for GET /api/users

const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// Handler for GET /api/users/id

const getUserById = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === Number(id));
  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "User Not Found" }));
  }
  res.end();
};

//Handler for Not Found

const notFoundHandler = (req, res) => {
  res.writeHead(404, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ message: "Route not found" }));
  res.end();
};

//Route Handler for POST request to /api/users

const createUserHandler = (req, res) => {
  let body = "";
  //listen for data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.StatusCode = 201; //something created
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    if (req.url === "/api/users" && req.method === "GET") {
      getUsersHandler(req, res);
    } else if (
      req.url.match(/\/api\/users\/([0-9]+)/) &&
      req.method === "GET"
    ) {
      getUserById(req, res);
    } else if (req.url === "/api/users" && req.method === "POST") {
      createUserHandler(req, res);
    } else {
      notFoundHandler(req, res);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server2 Running on Port ${PORT}`);
});
