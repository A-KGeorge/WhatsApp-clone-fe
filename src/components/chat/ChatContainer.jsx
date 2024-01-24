import ChatHeader from "./header/ChatHeader";

export default function ChatContainer() {
  return (
    <div className="relative h-full w-full  border-l dark:border-l-dark_border_2 select-none overflow-hidden">
      {/* Container */}
      <div>
        {/* Chat Header */}
        <ChatHeader />
      </div>
    </div>
  );
}
