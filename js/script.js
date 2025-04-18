const moodTitle = document.getElementById("mood-title");
const moodText = document.getElementById("mood-text");
const happyButton = document.getElementById("happy-btn");
const neutralButton = document.getElementById("neutral-btn");
const sadButton = document.getElementById("sad-btn");
const moodImage = document.getElementById("mood-image");

// Mouse event - Happy mood
happyButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightyellow";
  moodTitle.textContent = "Happiness!";
  moodText.textContent = "Sunshine and smiles everywhere!";
  moodImage.src = "/images/happymood.jpg";
  moodImage.alt = "Image representing happiness";
  moodImage.style.display = "block"; 
});

// Mouse event - Neutral mood
neutralButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightgrey";
  moodTitle.textContent = "Neutral, not sad and not happy!";
  moodText.textContent = "The Earth is a planet.";
  moodImage.src = "/images/neutralmood.jpg";
  moodImage.alt = "Image representing neutral mood";
  moodImage.style.display = "block"; 
});

// Mouse event - Sad mood
sadButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightblue";
  moodTitle.textContent = "Sadness...";
  moodText.textContent = "Raindrops and cloudy skies.";
  moodImage.src = "/images/sadmood.jpg";
  moodImage.alt = "Image representing sadness";
  moodImage.style.display = "block"; 
});

// Keyboard event - Toggle mood
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    document.body.style.backgroundColor = "lightyellow";
    moodTitle.textContent = "Happiness!";
    moodText.textContent = "Sunshine and smiles everywhere!";
  } else if (event.key === "s") {
    document.body.style.backgroundColor = "lightblue";
    moodTitle.textContent = "Sadness...";
    moodText.textContent = "Raindrops and cloudy skies.";
  } else if (event.key === "n") {
    document.body.style.backgroundColor = "lightgrey";
    moodTitle.textContent = "Neutral, not sad and not happy!";
    moodText.textContent = "The Earth is a planet.";
  }
});