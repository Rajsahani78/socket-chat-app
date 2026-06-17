require("dotenv").config();

const http = require("http");
const { Server } = require("socket.io");
const app = require("./app");
const errorMiddleware = require("./src/middlewares/error.middleware");
const mainRoute = require("./src/routes");
const connectDb = require("./src/config/connectDb");
const server = http.createServer(app);
connectDb()

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

app.set("io", io);



const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});