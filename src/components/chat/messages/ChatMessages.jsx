import { useSelector } from "react-redux";
import Message from "./Message";
import { useEffect, useRef } from "react";
import Typing from "./Typing";
import Date from "./Date";
import FileMessage from "./files/FileMessage";
import moment from "moment";

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

            const showDate = prevMessage
              ? !moment(message.createdAt).isSame(
                  moment(prevMessage.createdAt),
                  "day"
                )
              : true;

            return (
              <div key={message._id}>
                {/* Date */}
                {showDate && (
                  <div className="text-center">
                    <Date date={message.createdAt} />
                  </div>
                )}
                {/* Message files */}
                {message.files.length > 0
                  ? message.files.map((file) => (
                      <FileMessage
                        fileMessage={file}
                        message={message}
                        me={user._id === message.sender._id}
                      />
                    ))
                  : null}
                {/* Message text */}
                {message.message.length > 0 ? (
                  <Message
                    message={message}
                    me={user._id === message.sender._id}
                  />
                ) : null}
              </div>
            );
          })}
        {typing === activeConversation._id ? <Typing /> : null}
        <div className="mt-2" ref={endRef}></div>
      </div>
    </div>
  );
}
