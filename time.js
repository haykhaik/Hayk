const day = document.querySelector(".days");
const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");

const futureDate = new Date("15 July 2023 16:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();

  const timeleft = futureDate - now;

  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;

  const days = Math.floor(timeleft / msPerDay);
  const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / msPerHour);
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / msPerMinute);


  day.innerText = days; 
  hour.innerText = hours;
  minute.innerText = minutes;

}, 1000);
