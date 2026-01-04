const button = document.getElementById("colorBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.backgroundColor = randomColor;
  message.textContent = "Background color changed! 🎨";
});
