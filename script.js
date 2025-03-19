// Global variable for auto-scroll interval
let autoScrollInterval = null;

// Global variable for the current (filtered or shuffled) images
let currentImages = [];

// Array of cat images with updated categories
const catImages = [
    { src: "images/jade1.jpg", category: "jade" },
    { src: "images/jade2.jpg", category: "jade" },
    { src: "images/jade3.jpg", category: "jade" },
    { src: "images/jade4.jpg", category: "jade" },
    { src: "images/jade5.jpg", category: "jade" },
    { src: "images/jade6.jpg", category: "jade" },
    { src: "images/jade7.jpg", category: "jade" },
    { src: "images/jade8.jpg", category: "jade" },
    { src: "images/jade9.jpg", category: "jade" },
    { src: "images/jade10.jpg", category: "jade" },
    { src: "images/jade11.jpg", category: "jade" },
    { src: "images/jade12.jpg", category: "jade" },
    { src: "images/jade13.jpg", category: "jade" },
    { src: "images/meme1.jpg", category: "meme" },
    { src: "images/meme2.jpg", category: "meme" },
    { src: "images/meme3.jpg", category: "meme" },
    { src: "images/meme4.jpg", category: "meme" },
    { src: "images/meme5.jpg", category: "meme" },
    { src: "images/meme6.jpg", category: "meme" },
    { src: "images/meme7.jpg", category: "meme" },
    { src: "images/meme8.jpg", category: "meme" },
    { src: "images/meme9.jpg", category: "meme" },
    { src: "images/meme10.jpg", category: "meme" },
    { src: "images/meme11.jpg", category: "meme" },
    { src: "images/meme12.jpg", category: "meme" },
    { src: "images/meme13.jpg", category: "meme" },
    { src: "images/meme14.jpg", category: "meme" },
    { src: "images/meme15.jpg", category: "meme" },
    { src: "images/meme16.jpg", category: "meme" },
    { src: "images/meme17.jpg", category: "meme" },
    { src: "images/meme18.jpg", category: "meme" },
    { src: "images/meme19.jpg", category: "meme" },
    { src: "images/meme20.jpg", category: "meme" },
    { src: "images/meme21.jpg", category: "meme" },
    { src: "images/meme22.jpg", category: "meme" },
    { src: "images/meme23.jpg", category: "meme" },
    { src: "images/meme24.jpg", category: "meme" },
    { src: "images/meme25.jpg", category: "meme" },
    { src: "images/meme26.jpg", category: "meme" },
    { src: "images/meme27.jpg", category: "meme" },
    { src: "images/meme28.jpg", category: "meme" },
    { src: "images/meme29.jpg", category: "meme" },
    { src: "images/meme30.jpg", category: "meme" },
    { src: "images/meme31.jpg", category: "meme" },
    { src: "images/meme32.jpg", category: "meme" },
    { src: "images/meme33.jpg", category: "meme" },
    { src: "images/meme34.jpg", category: "meme" },
    { src: "images/meme35.jpg", category: "meme" },
    { src: "images/meme36.jpg", category: "meme" },
    { src: "images/meme37.jpg", category: "meme" },
    { src: "images/meme38.jpg", category: "meme" },
    { src: "images/meme39.jpg", category: "meme" },
    { src: "images/meme40.jpg", category: "meme" },
    { src: "images/meme41.jpg", category: "meme" },
    { src: "images/meme42.jpg", category: "meme" },
    { src: "images/meme43.jpg", category: "meme" },
    { src: "images/meme44.jpg", category: "meme" },
    { src: "images/meme45.jpg", category: "meme" },
    { src: "images/meme46.jpg", category: "meme" },
    { src: "images/meme47.jpg", category: "meme" },
    { src: "images/meme48.jpg", category: "meme" },
    { src: "images/meme49.jpg", category: "meme" },
    { src: "images/meme50.jpg", category: "meme" },
    { src: "images/meme51.jpg", category: "meme" },
    { src: "images/meme52.jpg", category: "meme" },
    { src: "images/meme53.jpg", category: "meme" },
    { src: "images/meme54.jpg", category: "meme" },
    { src: "images/meme55.jpg", category: "meme" },
    { src: "images/meme56.jpg", category: "meme" },
    { src: "images/meme57.jpg", category: "meme" },
    { src: "images/meme58.jpg", category: "meme" },
    { src: "images/meme59.jpg", category: "meme" },
    { src: "images/meme60.jpg", category: "meme" },
    { src: "images/meme61.jpg", category: "meme" },
    { src: "images/meme62.jpg", category: "meme" },
    { src: "images/meme63.jpg", category: "meme" },
    { src: "images/meme64.jpg", category: "meme" },
    { src: "images/meme65.jpg", category: "meme" },
    { src: "images/meme66.jpg", category: "meme" },
    { src: "images/meme67.jpg", category: "meme" },
    { src: "images/meme68.jpg", category: "meme" },
    { src: "images/meme69.jpg", category: "meme" },
    { src: "images/meme70.jpg", category: "meme" },
    { src: "images/meme71.jpg", category: "meme" },
    { src: "images/meme72.jpg", category: "meme" },
    { src: "images/meme73.jpg", category: "meme" },
    { src: "images/meme74.jpg", category: "meme" },
    { src: "images/meme75.jpg", category: "meme" },
    { src: "images/meme76.jpg", category: "meme" },
    { src: "images/gatos1.jpg", category: "gatos" },
    { src: "images/gatos2.jpg", category: "gatos" },
    { src: "images/gatos3.jpg", category: "gatos" },
    { src: "images/gatos4.jpg", category: "gatos" },
    { src: "images/gatos5.jpg", category: "gatos" },
    { src: "images/gatos6.jpg", category: "gatos" },
    { src: "images/gatos7.jpg", category: "gatos" },
    { src: "images/gatos8.jpg", category: "gatos" },
    { src: "images/gatos9.jpg", category: "gatos" },
    { src: "images/gatos10.jpg", category: "gatos" },
    { src: "images/gatos11.jpg", category: "gatos" },
    { src: "images/gatos12.jpg", category: "gatos" },
    { src: "images/gatos13.jpg", category: "gatos" },
    { src: "images/gatos14.jpg", category: "gatos" },
    { src: "images/gatos15.jpg", category: "gatos" },
    { src: "images/gatos16.jpg", category: "gatos" },
    { src: "images/gatos17.jpg", category: "gatos" },
    { src: "images/gatos18.jpg", category: "gatos" },
    { src: "images/gatos19.jpg", category: "gatos" },
    { src: "images/gatos20.jpg", category: "gatos" },
    { src: "images/gatos21.jpg", category: "gatos" },
    { src: "images/cute1.jpg", category: "cute" },
    { src: "images/cute2.jpg", category: "cute" },
    { src: "images/cute3.jpg", category: "cute" },
    { src: "images/cute4.jpg", category: "cute" },
    { src: "images/cute5.jpg", category: "cute" },
    { src: "images/cute6.jpg", category: "cute" },
    { src: "images/cute7.jpg", category: "cute" },
    { src: "images/cute8.jpg", category: "cute" },
    { src: "images/cute9.jpg", category: "cute" },
    { src: "images/cute10.jpg", category: "cute" },
    { src: "images/cute11.jpg", category: "cute" },
    { src: "images/cute12.jpg", category: "cute" },
    { src: "images/cute13.jpg", category: "cute" },
    { src: "images/cute14.jpg", category: "cute" },
    { src: "images/cute15.jpg", category: "cute" },
    { src: "images/cute16.jpg", category: "cute" },
    { src: "images/cute17.jpg", category: "cute" },
    { src: "images/cute18.jpg", category: "cute" },
    { src: "images/cute19.jpg", category: "cute" },
    { src: "images/cute20.jpg", category: "cute" },
    { src: "images/cute21.jpg", category: "cute" },
    { src: "images/cute22.jpg", category: "cute" },
    { src: "images/cute23.jpg", category: "cute" },
    { src: "images/cute24.jpg", category: "cute" },
    { src: "images/cute25.jpg", category: "cute" },
    { src: "images/cute26.jpg", category: "cute" },
    { src: "images/cute27.jpg", category: "cute" },
    { src: "images/cute28.jpg", category: "cute" },
    { src: "images/cute29.jpg", category: "cute" },
    { src: "images/cute30.jpg", category: "cute" },
    { src: "images/cute31.jpg", category: "cute" },
    { src: "images/cute32.jpg", category: "cute" },
    { src: "images/cute33.jpg", category: "cute" },
    { src: "images/cute34.jpg", category: "cute" },
    { src: "images/cute35.jpg", category: "cute" },
    { src: "images/cute36.jpg", category: "cute" },
    { src: "images/cute37.jpg", category: "cute" },
    { src: "images/cute38.jpg", category: "cute" },
    { src: "images/cute39.jpg", category: "cute" },
    { src: "images/cute40.jpg", category: "cute" },
    { src: "images/cute41.jpg", category: "cute" },
    { src: "images/cute42.jpg", category: "cute" },
    { src: "images/cute43.jpg", category: "cute" },
    { src: "images/cute44.jpg", category: "cute" },
    { src: "images/cute45.jpg", category: "cute" },
    { src: "images/cute46.jpg", category: "cute" },
    { src: "images/cute47.jpg", category: "cute" },
    { src: "images/cute48.jpg", category: "cute" },
    { src: "images/cute49.jpg", category: "cute" },
    { src: "images/cute50.jpg", category: "cute" },
    { src: "images/cute51.jpg", category: "cute" },
    { src: "images/cute52.jpg", category: "cute" },
    { src: "images/cute53.jpg", category: "cute" },
    { src: "images/cute54.jpg", category: "cute" }
];

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

// Update currentImages based on the selected category
function updateCurrentImages() {
    if (currentCategory === "all" || currentCategory === "doomscroll") {
        // For "all" and "doomscroll", show all images in random order
        currentImages = shuffleArray(catImages);
    } else {
        // For other categories, filter normally (order remains unchanged)
        currentImages = catImages.filter(img => img.category === currentCategory);
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
    }
});

// Previous button functionality (manual navigation)
prevBtn.addEventListener("click", () => {
    if (currentImages.length > 0) {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateImage();
    }
});


  




