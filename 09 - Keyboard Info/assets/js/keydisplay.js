const keyboardDisplay = document.getElementById("keyboard-display");

window.addEventListener("keydown", (event) => {
  const { key, keyCode, code } = event;
  const keyName = key === " " ? "Space" : key;

  keyboardDisplay.innerHTML = `
    <div class="key">
      ${keyName}
      <small>Key</h3>
    </div>
    <div class="key">
      ${keyCode}
      <small>KeyCode</small>
    </div>
    <div class="key">
      ${code}
      <small>Code</small>
    </div>
  `;
});
