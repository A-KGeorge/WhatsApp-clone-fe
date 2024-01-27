import Header from "./Header";
import FileViewer from "./FileViewer";
import Input from "./Input";
import HandleAndSend from "./HandleAndSend";

export default function FilesPreview() {
  return (
    <div className="relative py-2 w-full flex items-center justify-center">
      {/* Container */}
      <div className="w-full flex flex-col items-center">
        {/* Header */}
        <Header />
        {/* Viewing selected file */}
        <FileViewer />
        <div className="w-full flex flex-col">
          {/* Message input */}
          <Input />
          {/* Send and manipulate files */}
          <HandleAndSend />
        </div>
      </div>
    </div>
  );
}
