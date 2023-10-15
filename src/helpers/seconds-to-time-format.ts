export function secondsToTimeFormat(seconds: number) {
  const convertSeconds = Math.floor(seconds);
  let minutes = Math.floor(convertSeconds / 60);
  let remainingSeconds = convertSeconds % 60;

  // Đảm bảo rằng phút và giây luôn có 2 chữ số
  let formattedMinutes = String(minutes).padStart(2, "0");
  let formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return formattedMinutes + ":" + formattedSeconds;
}
