let currentIndex = 0;
const images = document.querySelectorAll(".grid img");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal-content");
const captionText = document.querySelector("#caption");
const nextButton = document.querySelector(".nav-button.next");
const prevButton = document.querySelector(".nav-button.prev");
const closeButton = document.querySelector(".close");

// Open modal and show selected image
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        currentIndex = index;
        updateModalImage();
    });
});

// Close the modal
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Navigate images
const updateModalImage = () => {
    modalImage.src = images[currentIndex].src;
    captionText.textContent = images[currentIndex].alt;
};

// Navigate to the next image
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    updateModalImage();
});

// Navigate to the previous image
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image
    updateModalImage();
});

// Close modal on clicking outside the image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

