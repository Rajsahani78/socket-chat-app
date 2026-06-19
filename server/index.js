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

const onlineUsers = new Map();
const socketToUser = new Map();

io.on("connection", (socket) => {
  const userId = socket.handshake.auth.userId;

  if (!userId) return;
  socketToUser.set(socket.id, userId);

  if (!onlineUsers.has(userId)) {
    onlineUsers.set(userId, new Set());
  }

  onlineUsers.get(userId).add(socket.id);

  socket.emit("online-users", Array.from(onlineUsers.keys()));

  socket.broadcast.emit("user-online", userId);

  socket.on("joinConversation", (conversationId) => {
    socket.join(conversationId);
  });

  socket.on("leaveConversation", (conversationId) => {
    socket.leave(conversationId);
  });

  socket.on("typing", ({ conversationId, userId }) => {
  socket.to(conversationId).emit("typing", {
    conversationId,
    userId,
  });
});

socket.on("stopTyping", ({ conversationId, userId }) => {
  socket.to(conversationId).emit("stopTyping", {
    conversationId,
    userId,
  });
});

  socket.on("disconnect", () => {
    const userId = socketToUser.get(socket.id);

    if (!userId) return;

    const sockets = onlineUsers.get(userId);

    if (sockets) {
      sockets.delete(socket.id);

      if (sockets.size === 0) {
        onlineUsers.delete(userId);

        socket.broadcast.emit("user-offline", userId);
      }
    }

    socketToUser.delete(socket.id);
  });
});

app.set("io", io);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});