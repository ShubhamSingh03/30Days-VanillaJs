const slider = document.querySelector(".slider");
const innerSlider = document.querySelector(".inner-slider");
const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");

let isDragging = false;
let startX = 0;
let currentX = 0;

// Handle mouse down event
const handleDragStart = (event) => {
  isDragging = true;
  startX = event.clientX - innerSlider.offsetLeft;
  slider.style.cursor = "grabbing";
};

// Handle mouse up event
const handleDragEnd = () => {
  isDragging = false;
  slider.style.cursor = "grab";
};

// Handle mouse move event
const handleDragMove = (event) => {
  if (!isDragging) return;
  currentX = event.clientX || event.touches[0].clientX;
  innerSlider.style.left = `${currentX - startX}px`;
  checkSliderPosition();
};

// Handle prev button click event
const handlePrevButtonClick = () => {
  let innerSliderLeft = parseInt(innerSlider.style.left) || 0;
  innerSliderLeft += 265;
  innerSlider.style.left = `${innerSliderLeft}px`;
  checkSliderPosition();
};

// Handle next button click event
const handleNextButtonClick = () => {
  let innerSliderLeft = parseInt(innerSlider.style.left) || 0;
  innerSliderLeft -= 265;
  innerSlider.style.left = `${innerSliderLeft}px`;
  checkSliderPosition();
};

// Check slider position
const checkSliderPosition = () => {
  const outerBounds = slider.getBoundingClientRect();
  const innerBounds = innerSlider.getBoundingClientRect();

  if (innerBounds.left > outerBounds.left) {
    innerSlider.style.left = "0px";
  }
  if (innerBounds.right < outerBounds.right) {
    innerSlider.style.left = `-${innerBounds.width - outerBounds.width}px`;
  }
};

// Event listeners for desktop devices
slider.addEventListener("mousedown", handleDragStart);
slider.addEventListener("mouseenter", () => (slider.style.cursor = "grab"));
slider.addEventListener("mouseup", handleDragEnd);
slider.addEventListener("mousemove", handleDragMove);

// Event listeners for mobile devices
slider.addEventListener("touchstart", handleDragStart, { passive: true });
slider.addEventListener("touchmove", handleDragMove, { passive: true });

// Event listeners for previous and next buttons
prevButton.addEventListener("click", handlePrevButtonClick);
nextButton.addEventListener("click", handleNextButtonClick);
