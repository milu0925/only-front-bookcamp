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
    const socket = io(`${domain}`);
    setSocket(socket);
    //與socket連線。
    socket.on("connect", () => {
      setSocket(socket); // Socket.IO 連接成功
    });
    socket.on("disconnect", () => {
      setSocket(""); //Socket.IO 連接已斷開
    });
    //接收後端傳回的資料,加入聊天群陣列
    socket.on("message", (data) => {
      setChat((prev) => [...prev, data]);
    });
    //接收後端傳回的總人數
    socket.on("peoples", (number) => {
      setPeople(number);
    });

    // 組件卸載時關閉 Socket.IO 連接
    return () => {
      socket.disconnect();
    };
  }, [domain]);

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
