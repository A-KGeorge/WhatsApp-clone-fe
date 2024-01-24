import { useEffect } from "react";
import ChatHeader from "./header/ChatHeader";
import ChatMessages from "./messages/ChatMessages";
import { useSelector, useDispatch } from "react-redux";
import { getConversationMessages } from "../../features/chatSlice";

export default function ChatContainer() {
  const dispatch = useDispatch();
  const { activeConversation, messages } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const { token } = user;
  const values = {
    token,
    convo_id: activeConversation._id,
  };
  useEffect(() => {
    dispatch(getConversationMessages(values));
  }, [activeConversation]);
  console.log("messages: ", messages);
  return (
    <div className="relative h-full w-full  border-l dark:border-l-dark_border_2 select-none overflow-hidden">
      {/* Container */}
      <div>
        {/* Chat Header */}
        <ChatHeader activeConversation={activeConversation} />
        {/* Chat Messages */}
        <ChatMessages />
      </div>
    </div>
  );
}
