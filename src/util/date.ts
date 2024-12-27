const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export default function dateOfDay() {
  const time = new Date();
  const day = time.getDate();
  const month = months[time.getMonth()];
  console.log(month);

  return `${month} ${day}`;
}
