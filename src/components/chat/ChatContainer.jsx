import { useEffect } from "react";
import { ChatHeader } from "./header";
import { ChatMessages } from "./messages";
import { useSelector, useDispatch } from "react-redux";
import { getConversationMessages } from "../../features/chatSlice";
import { ChatActions } from "./actions";
import { checkOnlineStatus } from "../../utils/chat";
import FilesPreview from "./preview/files/FilesPreview";

export default function ChatContainer({ onlineUsers, typing }) {
  const dispatch = useDispatch();
  const { activeConversation, files } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const { token } = user;
  const values = {
    token,
    convo_id: activeConversation._id,
  };
  useEffect(() => {
    dispatch(getConversationMessages(values));
  }, [activeConversation]);

  return (
    <div className="relative h-full w-full  border-l dark:border-l-dark_border_2 select-none overflow-hidden">
      {/* Container */}
      <div>
        {/* Chat Header */}
        <ChatHeader
          activeConversation={activeConversation}
          online={checkOnlineStatus(
            onlineUsers,
            user,
            activeConversation.users
          )}
        />

        {files.length > 0 ? (
          <FilesPreview />
        ) : (
          <>
            {/* Chat Messages */}
            <ChatMessages typing={typing} />
            {/* Chat Actions */}
            <ChatActions />
          </>
        )}
      </div>
    </div>
  );
}
