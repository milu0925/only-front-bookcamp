"use client";
import style from "./chat-room.module.scss";
import { useEffect, useState, useRef } from "react";
import { FaFaceSmileWink } from "react-icons/fa6";
import { AiFillPicture } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
export default function Forum() {
  const [chat, setChat] = useState([]); // 所有內容 (打印出來的畫面)
  const [message, setMessage] = useState(""); // 我發的一條訊息

  //傳送訊息
  const handleSendMessage = () => {
    let sendMessage = {
      id: 1,
      name: "王曉明",
      img: "lover.png",
      content: message,
    };
    setMessage("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage(); // 按下 Enter 鍵發送訊息
      e.preventDefault(); // 防止換行
    }
  };

  // 表情設定
  const [showEmoji, setShowEmoji] = useState(false);
  const emojis = [
    "😀",
    "😂",
    "😊",
    "🥰",
    "😎",
    "🤩",
    "😊",
    "🤔",
    "😄",
    "😃",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "😇",
    "😉",
    "😍",
    "🥰",
    "😋",
    "😎",
    "😌",
    "😏",
    "🙃",
    "😐",
    "😑",
    "😶",
    "😒",
    "🙄",
    "😬",
    "🤐",
    "😷",
    "🤒",
    "🤕",
    "🤢",
    "🤮",
    "🥴",
    "🥺",
    "😢",
    "😥",
    "😰",
    "😭",
    "😓",
    "😪",
    "😴",
    "🙄",
    "🤷‍♂️",
    "🤷‍♀️",
    "🤦‍♂️",
    "🤦‍♀️",
    "🙆‍♂️",
    "🙆‍♀️",
    "🙅‍♂️",
    "🙅‍♀️",
    "🙋‍♂️",
    "🙋‍♀️",
    "🤯",
    "😥",
    "🤬",
    "😈",
    "👿",
    "💀",
    "☠️",
    "💩",
    "🤡",
    "👻",
    "👽",
    "👾",
    "🤖",
    "🎃",
    "😺",
    "😸",
    "😹",
    "😻",
    "😼",
    "😽",
    "🙀",
    "😿",
    "😾",
    "🤲",
    "👐",
    "🙌",
    "👏",
    "🤝",
    "👍",
    "👎",
    "👊",
    "✊",
    "🤛",
    "🤜",
    "🤞",
    "✌️",
    "🤟",
    "🤘",
    "👌",
    "👈",
    "👉",
    "👆",
    "👇",
    "☝️",
    "✋",
    "🤚",
    "🖐",
    "🖖",
    "🤏",
    "✍️",
    "👋",
    "👏",
    "🙏",
    "💪",
    "🦵",
    "🦶",
    "👂",
    "👃",
    "👣",
    "👀",
    "👁️‍🗨️",
    "🧠",
    "🦷",
    "🗣",
    "👅",
    "👄",
    "💋",
    "🌍",
    "🌎",
    "🌏",
    "🌐",
    "🌑",
    "🌒",
    "🌓",
    "🌔",
    "🌕",
    "🌖",
    "🌗",
    "🌘",
    "🌙",
    "🌚",
    "🌛",
    "🌜",
    "🌝",
    "🌞",
    "🌟",
    "⭐️",
    "🌠",
    "🌤️",
    "⛅️",
    "🌥️",
    "☁️",
    "🌦️",
    "🌧️",
    "⛈️",
    "🌩️",
    "🌨️",
    "❄️",
    "☃️",
    "⛄️",
    "🌬️",
    "💨",
    "🌪️",
    "🌫️",
    "🌈",
    "☔️",
    "💧",
    "💦",
    "☂️",
    "🌊",
  ];
  const handleEmoji = (emoji) => {
    setMessage((prevMessage) => prevMessage + emoji);
    setShowEmoji(false);
  };
  // 附帶圖片
  const fileInputRef = useRef(null);
  const handleFile = () => {
    fileInputRef.current.click();
  };
  const handleFilewithPicture = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.onload = () => {
        const base64String = reader.result; // 取得 base64 字串

        setMessage("");
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={style.l_chatroom}>
      <div className={`chat_screen_bg ${style.chat_screen}`}>
        <div className={style.line}>目前聊天室人數：1</div>
        <div className={style.chat}>
          {chat.map((v, i) => (
            <div key={i} className={`${style.other} ${style.self}`}>
              <div>
                {visitor === v.id ? null : !!v.img ? (
                  <img alt="user-avatar" src="/image/user.png" />
                ) : (
                  <img
                    alt="default"
                    src={`${domain}/images/user/default.png`}
                  />
                )}
                <div className={style.name}>
                  {visitor == v.id ? "" : v.name}
                </div>
              </div>
              <div className={style.content}>
                {v.type === "image" ? <img src={v.content} /> : v.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`chat_inputbox_bg ${style.chat_inputbox}`}>
        <button
          style={{ position: "relative" }}
          onClick={() => {
            setShowEmoji(!showEmoji);
          }}
        >
          <FaFaceSmileWink />
          {showEmoji && (
            <div className={style.emoji_picker}>
              {emojis.map((emoji, i) => (
                <span
                  key={i}
                  onClick={() => handleEmoji(emoji)}
                  className="emoji"
                >
                  {emoji}
                </span>
              ))}
            </div>
          )}
        </button>
        <button onClick={handleFile}>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFilewithPicture}
          />
          <AiFillPicture />
        </button>
        <input
          type="text"
          value={message}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setMessage(e.currentTarget.value);
          }}
        />
        <button className={style.msgbtn} onClick={handleSendMessage}>
          <span>發送</span>
          <RiSendPlaneFill />
        </button>
      </div>
    </div>
  );
}
