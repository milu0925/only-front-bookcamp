import { Server } from "socket.io";

export default function handler(req, res) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);

    io.on("connection", (socket) => {
      console.log("Socket connected:", socket.id);

      socket.on("message", (data) => {
        console.log("Received message:", data);
        socket.broadcast.emit("message", data); // 广播消息
      });

      socket.on("disconnect", () => {
        console.log("Socket disconnected:", socket.id);
      });
    });

    res.socket.server.io = io;
  }
  res.end();
}
