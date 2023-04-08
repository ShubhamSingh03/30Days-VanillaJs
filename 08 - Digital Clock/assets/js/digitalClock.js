const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondsElement = document.getElementById("seconds");
const meridiemElement = document.getElementById("meridiem");

const formatNumber = (number) => number.toString().padStart(2, "0");

const getMeridiem = (hours) => (hours >= 12 ? "PM" : "AM");

const updateClock = () => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  hourElement.textContent = formatNumber(hours);
  minuteElement.textContent = formatNumber(minutes);
  secondsElement.textContent = formatNumber(seconds);
  meridiemElement.textContent = getMeridiem(hours);
};

setInterval(updateClock, 1000);
