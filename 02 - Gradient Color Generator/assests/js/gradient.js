// selecting dom values
let gradientColorOne = document.getElementById("color_one");
let gradientColorTwo = document.getElementById("color_two");
let gradientColorDirection = "to top";
let outputcode = document.getElementById("output-value");

// event listeners for buttons list
let buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    setGradientColorDirection(this.getAttribute("data-direction"), this);
  });
});

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", generateGradientColor);

const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", copyToClipboard);

// set gradient directions function
function setGradientColorDirection(value, _this) {
  let direction = document.querySelectorAll(".buttons button");
  direction.forEach((e) => {
    e.classList.remove("active");
  });
  _this.classList.add("active");
  gradientColorDirection = value;
}

// generate color
function generateGradientColor() {
  outputcode.value = `background-image: linear-gradient(${gradientColorDirection}, ${gradientColorOne.value}, ${gradientColorTwo.value});`;
  document.getElementById(
    "body"
  ).style.backgroundImage = `linear-gradient(${gradientColorDirection}, ${gradientColorOne.value}, ${gradientColorTwo.value})`;
}

// copy to clipboard & toast
function copyToClipboard() {
  navigator.clipboard.writeText(outputcode.value);
  toastr["success"]("Copied to Clipboard", "Copied");

  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: true,
    progressBar: false,
    positionClass: "toast-top-center",
    preventDuplicates: true,
    showDuration: "200",
    hideDuration: "500",
    timeOut: "2500",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
}
