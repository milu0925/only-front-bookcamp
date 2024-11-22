import ChatRoom from "@/components/st/forum/chat-room";
import { useAuth } from "@/hooks/auth-context";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import MainLayout from "@/components/layout/main-layout";
export default function Forum() {
  const domain = process.env.NEXT_PUBLIC_SOCKET;
  const { auth, userData } = useAuth();
  const [socket, setSocket] = useState(); //socket主連線
  const [chat, setChat] = useState([]); // 所有內容 (打印出來的畫面)
  const [message, setMessage] = useState(""); // 我發的一條訊息
  const [peoples, setPeople] = useState(0); // 聊天室總人數
  const [visitor, setVisitor] = useState(); // 隨機產生一組亂數給會員使用
  useEffect(() => {
    const visit = Math.floor(100000 + Math.random() * 900000); // 給進入頁面的人一組亂數序號
    setVisitor(visit);
  }, []);

  //傳送訊息
  const handleSendMessage = () => {
    let sendMessage = {
      id: visitor,
      name: auth.isAuth ? userData?.u_name : "",
      img: auth.isAuth ? userData?.u_img : "",
      content: message,
    };
    socket.emit("message", sendMessage);
    setMessage("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage(); // 按下 Enter 鍵發送訊息
      e.preventDefault(); // 防止換行
    }
  };
  //啟動SOCKET
  useEffect(() => {
    const socket = io();

    socket.on("connect", () => {
      console.log("Connected to socket:", socket.id);
    });

    socket.on("message", (data) => {
      console.log("Message received:", data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <ChatRoom
      handleKeyDown={handleKeyDown}
      socket={socket}
      message={message}
      setMessage={setMessage}
      peoples={peoples}
      chat={chat}
      visitor={visitor}
      handleSendMessage={handleSendMessage}
    />
  );
}
