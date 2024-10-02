document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const viewMoreButton = document.querySelector('.view-more-button');

viewMoreButton.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.style.opacity = '0';
    setTimeout(function() {
        window.location.href = viewMoreButton.getAttribute('href');
    }, 500); // Adjust the delay to match your animation timing
});


window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const vines = document.querySelector('.vines');
    
    // Add a slight parallax effect by changing the vine's translateY based on scroll position
    vines.style.transform = translateY(${scrolled * 0.3}px);
});
 
// Select all images in the gallery preview section
const previewImages = document.querySelectorAll('.gallery-grid img');

// Select the gallery preview section itself
const gallerySection = document.getElementById('gallery-preview');

// Add hover event listeners to each preview image
previewImages.forEach(image => {
    image.addEventListener('mouseenter', function() {
        // Get the src of the hovered image
        const imageUrl = this.src;

        // Change the background image of the gallery preview section
        gallerySection.style.backgroundImage = url(${imageUrl});
    });

    image.addEventListener('mouseleave', function() {
        // Optionally, revert to the original background or keep the last hovered image
        gallerySection.style.backgroundImage = url('default-background.jpg'); // Replace with default if needed
    });
});