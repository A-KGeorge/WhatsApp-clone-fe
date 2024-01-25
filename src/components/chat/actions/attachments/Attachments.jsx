import { AttachmentIcon } from "../../../../svg";
import Menu from "./Menu";

export default function Attachments({
  showAttachments,
  setShowAttachments,
  setShowPicker,
}) {
  return (
    <li className="relative">
      <button
        className="btn"
        type="button"
        onClick={() => {
          setShowPicker(false);
          setShowAttachments((prev) => !prev);
        }}
      >
        <AttachmentIcon className="dark:fill-dark_svg_1" />
      </button>
      {/* Menu */}
      {showAttachments ? <Menu /> : null}
    </li>
  );
}
