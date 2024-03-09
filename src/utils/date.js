import moment from "moment";

export const timeHandler = (date) => {
  let now = moment();
  let momentDate = moment(date);
  let time = momentDate.fromNow(true);
  let dateByHourAndMin = momentDate.format("HH:mm");
  const getDay = () => {
    let days = time.split(" ")[0];
    if (Number(days) < 8) {
      return now.subtract(Number(days), "days").format("dddd");
    } else {
      return momentDate.format("DD/MM/YYYY");
    }
  };
  if (time === "a few seconds") {
    return "Now";
  }
  if (time.search("minute") !== -1) {
    let mins = time.split(" ")[0];
    if (mins === "a") {
      return "1 min";
    } else {
      return `${mins} min`;
    }
  }
  if (time.search("hour") !== -1) {
    return dateByHourAndMin;
  }
  if (time === "a day") {
    return "Yesterday";
  }
  if (time.search("days") !== -1) {
    return getDay();
  }
  // Directly check if the date is within the last 7 days and format it accordingly
  if (
    momentDate.isAfter(moment().subtract(7, "days")) &&
    momentDate.isBefore(moment().add(7, "days"))
  ) {
    return getDay();
  } else {
    return momentDate.format("DD/MM/YYYY");
  }
};

export const formatDate = (dateString) => {
  const date = moment.utc(dateString).local().startOf("day");
  const today = moment().local().startOf("day");
  const lastWeek = moment().subtract(7, "days").local().startOf("day");

  if (date.isSame(today, "day")) {
    return "TODAY";
  } else if (
    date.isSame(moment().subtract(1, "days").local().startOf("day"), "day")
  ) {
    return "YESTERDAY";
  } else if (date.isAfter(lastWeek) && date.isSameOrBefore(today)) {
    return date.format("dddd").toUpperCase(); // Returns the name of the day of the week
  } else {
    return date.format("DD/MM/YYYY"); // Returns the date in the format "Month name DD, YYYY"
  }
};
