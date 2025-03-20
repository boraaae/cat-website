// Global variable for auto-scroll interval
let autoScrollInterval = null;

// Global variable for the current (filtered or shuffled) images
let currentImages = [];

// Helper function to generate images dynamically
function generateImages(prefix, count, category) {
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push({ src: `images/${prefix}${i}.jpg`, category: category });
  }
  return images;
}

// Generate image arrays for each category
const jadeImages = generateImages("jade", 44, "jade");
const memeImages = generateImages("meme", 79, "meme");
const gatosImages = generateImages("gatos", 23, "gatos");
const cuteImages = generateImages("cute", 97, "cute");

// Combine them all into one array
const catImages = [...jadeImages, ...memeImages, ...gatosImages, ...cuteImages];

let currentIndex = 0;
let currentCategory = "all";

const catImage = document.getElementById("cat-image");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Helper function to shuffle an array (Fisher-Yates shuffle)
function shuffleArray(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Update currentImages based on the selected category (shuffled)
function updateCurrentImages() {
  if (currentCategory === "all" || currentCategory === "doomscroll") {
    // For "all" and "doomscroll", shuffle all images
    currentImages = shuffleArray(catImages);
  } else {
    // For other categories, filter then shuffle the results
    currentImages = shuffleArray(catImages.filter(img => img.category === currentCategory));
  }
}

// Function to update the displayed image
function updateImage() {
  if (currentImages.length > 0) {
    catImage.src = currentImages[currentIndex].src;
  } else {
    catImage.src = ""; // Clear the image if no images match
  }
}

// --- New Functions to Add/Remove Random Hearts ---
// These hearts will only appear when the "jade" category is selected.
function addRandomHearts() {
  // Remove any existing hearts first
  removeRandomHearts();
  const numHearts = 10; // Number of hearts to add; adjust as needed
  const heartEmojis = ["❤️", "💖", "💘", "💕", "💗", "💙", "💚", "💛", "💜"]; // List of heart emojis
  for (let i = 0; i < numHearts; i++) {
    const heart = document.createElement('div');
    heart.classList.add('random-heart');
    // Randomly choose an emoji from the array
    const randomEmoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.innerText = randomEmoji;
    // Generate random positions across the viewport (adjust as needed)
    const randomLeft = Math.floor(Math.random() * (window.innerWidth - 50));
    const randomTop = Math.floor(Math.random() * (window.innerHeight - 50));
    heart.style.position = 'absolute';
    heart.style.left = `${randomLeft}px`;
    heart.style.top = `${randomTop}px`;
    heart.style.pointerEvents = 'none'; // so hearts don't block clicks
    heart.style.fontSize = '24px';
    document.body.appendChild(heart);
  }
}

function removeRandomHearts() {
  const hearts = document.querySelectorAll('.random-heart');
  hearts.forEach(heart => heart.remove());
}
// --- End of Hearts Functions ---

// Function to filter images by category
function filterCats(category) {
  // Clear any existing auto-scroll interval if present
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
    autoScrollInterval = null;
  }
  
  currentCategory = category;
  currentIndex = 0;
  updateCurrentImages();
  updateImage();
  
  // Add random hearts only when the "jade" category is selected
  if (category === "jade") {
    addRandomHearts();
  } else {
    removeRandomHearts();
  }
  
  if (category === "doomscroll") {
    // Start auto-scrolling every 2 seconds
    autoScrollInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % currentImages.length;
      updateImage();
    }, 2000);
  }
}

// Initial image load: default to "all" (randomized order)
filterCats("all");

// Next button functionality (manual navigation)
nextBtn.addEventListener("click", () => {
  if (currentImages.length > 0) {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateImage();
    if (currentCategory === "jade") {
      removeRandomHearts();
      addRandomHearts();
    }
  }
});

// Previous button functionality (manual navigation)
prevBtn.addEventListener("click", () => {
  if (currentImages.length > 0) {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateImage();
    if (currentCategory === "jade") {
      removeRandomHearts();
      addRandomHearts();
    }
  }
});

// --- Background Music Functionality ---

// Music control variables
const musicTracks = [
  "music/music1.mp3",
  "music/music2.mp3",
  "music/music3.mp3",
  "music/music4.mp3",
  "music/music5.mp3",
  "music/music6.mp3",
  "music/music7.mp3",
  "music/music8.mp3",
  "music/music9.mp3",
  "music/music10.mp3",
  "music/music11.mp3",
  "music/music12.mp3",
  "music/music13.mp3"
];

let currentMusicIndex = -1; // Not yet selected
const audio = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
const prevMusicBtn = document.getElementById("prev-music");
const nextMusicBtn = document.getElementById("next-music");

// Function to play the track at currentMusicIndex (or select a random one if none)
function playTrack() {
  if (currentMusicIndex === -1) {
    currentMusicIndex = Math.floor(Math.random() * musicTracks.length);
  }
  audio.src = musicTracks[currentMusicIndex];
  audio.play();
  musicToggle.innerText = "⏸️";
}

// Function to pause music
function pauseMusic() {
  audio.pause();
  musicToggle.innerText = "▶️";
}

// Play/pause toggle button functionality
musicToggle.addEventListener("click", () => {
  if (audio.paused) {
    playTrack();
  } else {
    pauseMusic();
  }
});

// Next music button functionality
nextMusicBtn.addEventListener("click", () => {
  if (audio.paused && currentMusicIndex === -1) {
    playTrack();
  } else {
    currentMusicIndex = (currentMusicIndex + 1) % musicTracks.length;
    playTrack();
  }
});

// Previous music button functionality
prevMusicBtn.addEventListener("click", () => {
  if (audio.paused && currentMusicIndex === -1) {
    playTrack();
  } else {
    currentMusicIndex = (currentMusicIndex - 1 + musicTracks.length) % musicTracks.length;
    playTrack();
  }
});

// When a track ends, automatically play the next track
audio.addEventListener("ended", () => {
  currentMusicIndex = (currentMusicIndex + 1) % musicTracks.length;
  playTrack();
});


// Start playing a random music track
playRandomMusic();

  

