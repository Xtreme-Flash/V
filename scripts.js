document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animations
    gsap.from("header", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from("#about", {
        scrollTrigger: "#about",
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from("#gallery-preview", {
        scrollTrigger: "#gallery-preview",
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
    });

    gsap.from(".gallery-grid img", {
        scrollTrigger: ".gallery-grid img",
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)"
    });

    gsap.from("#contact", {
        scrollTrigger: "#contact",
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".social-icon", {
        scrollTrigger: ".social-icon",
        scale: 0.5,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)"
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Particle effect initialization
    particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 50,
            "density": {
              "enable": true,
              "value_area": 1000
            }
          },
          "color": {
            "value": "#ffdd00" // Yellow color to mimic fireflies
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            }
          },
          "opacity": {
            "value": 0.8,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.3,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": true,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false
            },
            "onclick": {
              "enable": false
            },
            "resize": true
          }
        },
        "retina_detect": true
      });
      

    // Set opacity to 1 when scrolling to the top
    window.addEventListener('scroll', function() {
        if (window.scrollY === 0) {
            document.getElementById("particles-js").style.opacity = 1;
        } else {
            document.getElementById("particles-js").style.opacity = 0.5; // Adjust this value if needed
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Create fireflies dynamically
    const firefliesContainer = document.getElementById('fireflies-container');
    const numFireflies = 50;
  
    for (let i = 0; i < numFireflies; i++) {
      const firefly = document.createElement('div');
      firefly.classList.add('firefly');
      firefly.style.top = Math.random() * 100 + 'vh';
      firefly.style.left = Math.random() * 100 + 'vw';
      firefliesContainer.appendChild(firefly);
    }
  
    // Animate fireflies using GSAP
    gsap.utils.toArray('.firefly').forEach(firefly => {
      gsap.to(firefly, {
        x: 'random(-100, 100)',
        y: 'random(-100, 100)',
        duration: 'random(5, 10)',
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        opacity: 'random(0.3, 0.8)'
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Customize your own words here
    const words = [
        "V", "vid", "something", "Passionatly Curious", 
        "Curious", "Astranomy", "Vidhya", "vixnxm",
        "clown", "peace", "hey", "yoo",
        "artist", "✨", "👀", "jadevine", "enticing"
    ];

    const textContainer = document.getElementById('random-text-container');
    const numWords = 20; // Number of words to generate

    for (let i = 0; i < numWords; i++) {
        const word = document.createElement('span');
        word.classList.add('random-text');
        
        // Use the words you defined above
        word.textContent = words[i % words.length]; // Loops through the list if numWords > words.length
        
        // Random positioning
        word.style.top = Math.random() * 100 + 'vh';
        word.style.left = Math.random() * 100 + 'vw';

        // Optional: Add slight rotation for randomness
        word.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
        textContainer.appendChild(word);
    }
});


  