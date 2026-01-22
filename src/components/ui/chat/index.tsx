import { useEffect, useRef, useState } from "react";
import WindowControlButton from "../WindowControlButton";

import "../../../styles/chat.css";

interface ChatProps {
  open: boolean;
  closeDialog: () => void;
}

interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: Date;
  isSent: boolean;
}

const CONTACTS = [{ name: "@gideon" }];
const GROUPS = [{ name: "#ai" }, { name: "#general" }];

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    content: "Hey there! Welcome to giddyOS chat! 🎉",
    sender: "giddyOS",
    timestamp: new Date(Date.now() - 300000),
    isSent: false,
  },
  {
    id: "2",
    content: "Thanks! This looks amazing 😍",
    sender: "You",
    timestamp: new Date(Date.now() - 240000),
    isSent: true,
  },
  {
    id: "3",
    content: "Feel free to explore all the features!",
    sender: "giddyOS",
    timestamp: new Date(Date.now() - 180000),
    isSent: false,
  },
];

function Chat({ open, closeDialog }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [currentInput, setCurrentInput] = useState("");
  const [selectedChat, setSelectedChat] = useState("@gideon");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (currentInput.trim() === "") return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: currentInput,
      sender: "You",
      timestamp: new Date(),
      isSent: true,
    };

    setMessages([...messages, newMessage]);
    setCurrentInput("");

    // Simulate a response after 1-2 seconds
    setTimeout(
      () => {
        const responses = [
          "That's interesting! Tell me more.",
          "Great point! 👍",
          "I see what you mean.",
          "Thanks for sharing that!",
          "Awesome! 😄",
        ];
        const randomResponse =
          responses[Math.floor(Math.random() * responses.length)];

        const responseMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: randomResponse,
          sender: selectedChat,
          timestamp: new Date(),
          isSent: false,
        };

        setMessages((prev) => [...prev, responseMessage]);
      },
      Math.random() * 1000 + 1000
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed left-4 top-16 h-[600px] w-[800px] bg-white border border-black rounded-lg z-50 shadow-lg">
      {/* Header */}
      <div className="flex border-b">
        <div className="flex items-center gap-1 px-2 py-1">
          <WindowControlButton char="x" handleClick={closeDialog} />
          <WindowControlButton char="-" handleClick={() => {}} />
          <WindowControlButton char="□" handleClick={() => {}} />
        </div>
        <div className="flex-1 text-center py-1 font-medium">
          Chat - {selectedChat}
        </div>
      </div>

      <div className="flex h-[calc(100%-40px)]">
        {/* Sidebar */}
        <div className="chat-sidebar">
          <div className="chat-list">
            <h3 className="text-sm font-medium px-2 py-1">DMs</h3>
            {CONTACTS.map(({ name }) => (
              <button
                key={name}
                className={`chat-list-item w-full text-left ${
                  selectedChat === name ? "bg-black text-white" : ""
                }`}
                onClick={() => setSelectedChat(name)}
              >
                {name}
              </button>
            ))}
            <h3 className="text-sm font-medium px-2 py-1 mt-4">Channels</h3>
            {GROUPS.map(({ name }) => (
              <button
                key={name}
                className={`chat-list-item w-full text-left ${
                  selectedChat === name ? "bg-black text-white" : ""
                }`}
                onClick={() => setSelectedChat(name)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Body */}
        <div className="chat-body">
          {/* Chat Header */}
          <div className="chat-header">
            <span className="text-sm">{selectedChat}</span>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.isSent ? "sent" : "received"}`}
              >
                <div className="text-sm">{message.content}</div>
                <div className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="chat-input-area">
            <div className="flex gap-2">
              <input
                type="text"
                className="chat-input"
                placeholder="Type a message..."
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                className="chat-send-button"
                onClick={handleSendMessage}
                disabled={currentInput.trim() === ""}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
