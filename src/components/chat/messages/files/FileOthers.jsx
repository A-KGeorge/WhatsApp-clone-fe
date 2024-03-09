import { DownloadIcon } from "../../../../svg";

export default function FileOthers({ file, type }) {
  return (
    <div className="bg-green_4 p-2 rounded-lg ">
      {/* Container */}
      <div className="flex justify-between gap-x-8">
        {/* File Infos */}
        <div className="flex items-center gap-2">
          {/* PDF preview */}
          {/* Document Placeholders */}
          <img
            src={`../../../../images/file/${type}.png`}
            alt=""
            className="w-8 object-contain"
          />
          {/* File name + size */}
          <div className="flex flex-col gap-2">
            <h1>
              {file.original_filename + "." + file.public_id.split(".")[1]}
            </h1>
            <span className="text-sm">
              {type}
              <span className="font-bold"> {String.fromCharCode(8901)} </span>
              {file.bytes < 1024
                ? Math.round(file.bytes * 10) / 10 + " B"
                : file.bytes < 1024 * 1024
                ? Math.round((file.bytes * 10) / 1024) / 10 + " KB"
                : Math.round((file.bytes * 10) / (1024 * 1024)) / 10 + " MB"}
            </span>
          </div>
        </div>
        {/* Download Button */}
        <a href={file.secure_url} target="_blank" download>
          <DownloadIcon />
        </a>
      </div>
    </div>
  );
}
