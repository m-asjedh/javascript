function updateClock() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, 0);
  const maridiem = hours <= 12 ? "AM" : "PM";
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${seconds} ${maridiem}`;
  document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
