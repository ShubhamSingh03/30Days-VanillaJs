const displayText = document.querySelector(".charging");
const batteryPercentIndicator = document.querySelector(".batteryIndicator");
const chargingIcon = document.querySelector(".sidetwo-icon");
const getInfo = navigator.getBattery();
const chargingAnimation = document.querySelector(".charging-animation");

setInterval(() => {
  batteryStatusCheck();
}, 1000);

const refresh = () => {
  chargingAnimation.classList.remove("percent");
};

(batteryStatusCheck = () => {
  refresh();
  getInfo.then((battery) => {
    let level = battery.level;
    let result = Math.round(level * 100);
    let dis = `${result}%`;
    batteryPercentIndicator.innerHTML = dis;

    if (battery.charging === true) {
      displayText.innerHTML = "Connected to AC";
      chargingAnimation.classList.remove("chargeshowR");
      chargingAnimation.classList.add("percent");
      chargingIcon.style.visibility = "visible";
      if (result === 100) {
        chargingAnimation.classList.remove("percent");
        chargingAnimation.classList.add("chargeshowG");
      }
    } else {
      displayText.innerHTML = "Not Connected to AC";
      chargingIcon.style.visibility = "hidden";
      let Chargewidth = 160 * level;
      chargingAnimation.style.width = `${Chargewidth / 16}em`;
      if (result <= 30) {
        chargingAnimation.classList.add("chargeshowR");
      }

      if (result > 30) {
        chargingAnimation.classList.add("chargeshowG");
      }
    }
  });
})();
