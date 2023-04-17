const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

const convertCelsius = () => {
  if (celsiusInput.value) {
    const [celsius, fahrenheit, kelvin] = [
      +celsiusInput.value,
      (+celsiusInput.value * 9) / 5 + 32 || "",
      +celsiusInput.value + 273.15 || "",
    ];
    [fahrenheitInput.value, kelvinInput.value] = [fahrenheit, kelvin];
  } else {
    [fahrenheitInput.value, kelvinInput.value] = ["", ""];
  }
};

const convertFahrenheit = () => {
  if (fahrenheitInput.value) {
    const [fahrenheit, celsius, kelvin] = [
      +fahrenheitInput.value,
      ((+fahrenheitInput.value - 32) * 5) / 9 || "",
      ((+fahrenheitInput.value - 32) * 5) / 9 + 273.15 || "",
    ];
    [celsiusInput.value, kelvinInput.value] = [celsius, kelvin];
  } else {
    [celsiusInput.value, kelvinInput.value] = ["", ""];
  }
};

const convertKelvin = () => {
  if (kelvinInput.value) {
    const [kelvin, celsius, fahrenheit] = [
      +kelvinInput.value,
      +kelvinInput.value - 273.15 || "",
      ((+kelvinInput.value - 273.15) * 9) / 5 + 32 || "",
    ];
    [celsiusInput.value, fahrenheitInput.value] = [celsius, fahrenheit];
  } else {
    [celsiusInput.value, fahrenheitInput.value] = ["", ""];
  }
};

celsiusInput.addEventListener("input", convertCelsius);
fahrenheitInput.addEventListener("input", convertFahrenheit);
kelvinInput.addEventListener("input", convertKelvin);
