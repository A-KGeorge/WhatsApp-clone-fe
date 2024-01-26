import { useSelector } from "react-redux";
import Message from "./Message";
import { useEffect, useRef } from "react";
import Typing from "./Typing";
import Date from "./Date";

export default function ChatMessages({ typing }) {
  const { messages, activeConversation } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const endRef = useRef(null);
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const scrollToBottom = () => {
    endRef.current.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <div
      className="mb-[60px] bg-[url('https://res.cloudinary.com/dmhcnhtng/image/upload/v1677358270/Untitled-1_copy_rpx8yb.jpg')]
    bg-cover bg-no-repeat "
    >
      {/* Container */}
      <div className="scrollbar overflow_scrollbar overflow-auto py-2 px-[5%] ">
        {/* messages */}
        {messages &&
          messages.map((message, index) => {
            const prevMessage = messages[index - 1];

            const showDate =
              !prevMessage ||
              message.createdAt.substring(0, 10) !==
                prevMessage.createdAt.substring(0, 10);

            return (
              <div key={message._id}>
                {showDate && (
                  <div className="text-center">
                    <Date date={message.createdAt.substring(0, 10)} />
                  </div>
                )}
                <Message
                  message={message}
                  me={user._id === message.sender._id}
                />
              </div>
            );
          })}
        {typing === activeConversation._id ? <Typing /> : null}
        <div className="mt-2" ref={endRef}></div>
      </div>
    </div>
  );
}
