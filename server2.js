import { createServer } from "http";

const PORT = 8000;
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Jim Doe" },
];

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (req.url === "/api/users" && req.method === "GET") {
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    const user = users.find((user) => user.id === Number(id));
    if (user) {
      res.write(JSON.stringify(user));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: "User Not Found" }));
    }

    res.end();
  } else {
    //  res.setHeader("Content-Type", "application/json");
    //  req.statusCode = 404;
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "Route not found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server2 Running on Port ${PORT}`);
});
