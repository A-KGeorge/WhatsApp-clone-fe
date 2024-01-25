import { useSelector } from "react-redux";
import Message from "./Message";
export default function ChatMessages() {
  const { messages } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  return (
    <div
      className="mb-[60px] bg-[url('https://res.cloudinary.com/dmhcnhtng/image/upload/v1677358270/Untitled-1_copy_rpx8yb.jpg')]
    bg-cover bg-no-repeat h-[100vh]"
    >
      {/* Container */}
      <div className="scrollbar overflow_scrollbar overflow-auto pt-2 px-[5%] h-full">
        {/* messages */}
        {messages &&
          messages.map((message) => (
            <Message
              message={message}
              me={user._id === message.sender._id}
              key={message._id}
            />
          ))}
      </div>
    </div>
  );
}
