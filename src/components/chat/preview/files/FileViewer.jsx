import { useSelector } from "react-redux";

export default function FileViewer({ activeIndex }) {
  const { files } = useSelector((state) => state.chat);
  return (
    <div className="w-full max-w-[60%]">
      {/* Container */}
      <div className="flex justify-center items-center">
        {files[0].type === "IMAGE" ? (
          <img
            src={files[activeIndex].fileData}
            alt=""
            className="max-w-[80%] object-contain hview"
          />
        ) : (
          <div className="min-w-full hview flex flex-col items-center justify-center">
            {/* File Icon Image */}
            <img
              src={`../../../../images/file/${files[activeIndex].type}.png`}
              alt={files[activeIndex].type}
            />
            {/* No preview text */}
            <h1 className="dark: text-dark_text_2 text-2xl">
              No preview available
            </h1>
            {/* File size /type */}
            <span className="dark:text-dark_text_2">
              {Math.round(files[activeIndex]?.file?.size / 1000)} kB -{" "}
              {files[0].type}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
