/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  const hours = Number(s.substring(0, 2));
  const minutes = Number(s.substring(3, 5));
  const seconds = Number(s.substring(6, 8));
  const period = s.substring(8, 10);

  let hours24 = hours % 12;
  hours24 += period === "PM" ? 12 : 0;

  const formattedHours = String(hours24).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

const time12h = "07:05:45PM";
const time24h = timeConversion(time12h);

console.log(time24h); // output: 19:05:45
