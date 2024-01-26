import { formatDate } from "../../../utils/date";

export default function Date({ date }) {
  console.log(formatDate("2024-01-25"));
  return (
    <div className="bg-dark_bg_3 text-white py-1 px-2 rounded-lg text-xs inline-block">
      {formatDate(date)}
    </div>
  );
}
