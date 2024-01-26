import { formatDate } from "../../../utils/date";

export default function Date({ date }) {
  return (
    <div
      className="bg-dark_bg_3 text-dark_text_2 pt-1 px-3 pb-2 rounded-lg text-xs inline-block"
      style={{
        borderRadius: "7.5px",
        boxShadow: "0 1px 0.5px rgba(11,20,26,.13)",
      }}
    >
      {formatDate(date)}
    </div>
  );
}
