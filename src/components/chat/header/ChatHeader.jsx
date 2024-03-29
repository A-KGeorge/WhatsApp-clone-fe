import { DotsIcon, SearchLargeIcon } from "../../../svg";
import {
  getConversationName,
  getConversationPicture,
} from "../../../utils/chat";
import { capitalize } from "../../../utils/string";
import { useSelector } from "react-redux";

export default function ChatHeader({ activeConversation, online }) {
  const { user } = useSelector((state) => state.user);
  const { users } = activeConversation;

  return (
    <div className="h-[59px] dark:bg-dark_bg_2 flex items-center p16 select-none">
      {/* Container */}
      <div className="w-full flex items-center justify-between">
        {/* left */}
        <div className="flex items-center gap-x-4">
          {/* Conversation image */}
          <button className="btn">
            <img
              src={getConversationPicture(user, users)}
              alt={capitalize(getConversationName(user, users).split(" ")[0])}
              className="w-full h-full rounded-full object-cover"
            />
          </button>
          {/* Conversation name and online status */}
          <div className="flex flex-col">
            <h1 className="dark:text-white text-md font-semibold">
              {capitalize(getConversationName(user, users).split(" ")[0])}
            </h1>
            <span
              className={`text-xs dark:text-dark_svg_2 ${
                online ? "animate-slide-up" : "animate-slide-down"
              }`}
            >
              online
            </span>
          </div>
        </div>
        {/* right */}
        <ul className="flex items-center gap-x-2.5">
          <li>
            <button className="btn">
              <SearchLargeIcon className="dark:fill-dark_svg_1" />
            </button>
          </li>
          <li>
            <button className="btn">
              <DotsIcon className="dark:fill-dark_svg_1" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
