import { useSelector } from "react-redux";
import Conversation from "./Conversation";
import { checkOnlineStatus } from "../../../utils/chat";

export default function Conversations({ onlineUsers, typing }) {
  const { conversations, activeConversation } = useSelector(
    (state) => state.chat
  );
  const { user } = useSelector((state) => state.user);
  return (
    <div className="convos scrollbar">
      <ul>
        {conversations &&
          conversations
            .filter(
              (convo) =>
                convo.latestMessage || convo._id === activeConversation._id
            )
            .map((convo) => {
              let check = checkOnlineStatus(onlineUsers, user, convo.users);
              return (
                <Conversation
                  convo={convo}
                  key={convo._id}
                  online={check ? true : false}
                  typing={typing}
                />
              );
            })}
      </ul>
    </div>
  );
}
