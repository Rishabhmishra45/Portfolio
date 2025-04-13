var exBtn = document.getElementById("experience-btn");
var edBtn = document.getElementById("education-btn");
var exTab = document.getElementById("experience-tab");
var edTab = document.getElementById("education-tab");

exBtn.onclick = function () {
    exTab.style.display = "block";
    edTab.style.display = "none";
}
edBtn.onclick = function () {
    exTab.style.display = "none";
    edTab.style.display = "block";
}



// Sidebar Toggle Functionality
const sidemenu = document.getElementById("sidemenu");
const openmenu = document.getElementById("openmenu");
const closemenu = document.getElementById("closemenu");

openmenu.addEventListener("click", () => {
    sidemenu.classList.add("active");
});

closemenu.addEventListener("click", () => {
    sidemenu.classList.remove("active");
});

// Close sidebar when clicking outside
document.addEventListener("click", (event) => {
    if (!sidemenu.contains(event.target) && !openmenu.contains(event.target)) {
        sidemenu.classList.remove("active");
    }
});




document.addEventListener("DOMContentLoaded", function () {
    let navHeight = document.querySelector("nav").offsetHeight;

    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            let targetId = this.getAttribute("href").substring(1);
            let targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                let elementPosition = targetElement.offsetTop - navHeight;
                window.scrollTo({ top: elementPosition, behavior: "smooth" });
            }
        });
    });
});



// ......form submit aleart....
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Form select karna

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Default submit behavior rokna

        // Form submit hone ke baad alert show karna
        alert("Form successfully submitted!");

        // Form ko manually submit karna
        form.submit();
    });
});



// Theme Toggle Functionality
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});




//text animation

const roles = [
    {
        text: "Web Developer &",
        highlights: {
            0: "highlight-orange", // W
            4: "highlight-orange"  // D
        }
    },
    {
        text: "College Student.",
        highlights: {
            0: "highlight-blue",   // C
            8: "highlight-blue"    // S
        }
    }
];

const typedText = document.getElementById("typed-text");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const role = roles[roleIndex];
    const fullText = role.text;
    const highlights = role.highlights;

    if (!isDeleting) {
        charIndex++;
    } else {
        charIndex--;
    }

    let visibleText = fullText.substring(0, charIndex);
    typedText.innerHTML = applyHighlights(visibleText, highlights);

    let delay = isDeleting ? 50 : 120;

    if (!isDeleting && charIndex === fullText.length) {
        delay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 500;
    }

    setTimeout(typeEffect, delay);
}

function applyHighlights(text, highlights) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        if (highlights[i]) {
            result += `<span class="${highlights[i]}">${text[i]}</span>`;
        } else {
            result += text[i];
        }
    }
    return result;
}

typeEffect();


// ...........back to top section................
window.addEventListener('scroll', function () {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 100) { // Show button after scrolling 100px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});



window.addEventListener('scroll', function () {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 100) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});







// Skills Marquee Animation
document.addEventListener('DOMContentLoaded', function() {
    const marquee = document.querySelector('.marquee');
    const skillCards = document.querySelectorAll('.skill-card');
    const marqueeContainer = document.querySelector('.marquee-container');
    
    // Function to initialize marquee
    function initMarquee() {
        // Calculate total width of one set of cards
        let totalWidth = 0;
        skillCards.forEach(card => {
            totalWidth += card.offsetWidth + (window.innerWidth <= 480 ? 5 : 10);
        });
        
        // Set container width
        marqueeContainer.style.width = '100%';
        marquee.style.width = totalWidth + 'px';
        
        // Adjust animation duration based on screen size
        const animationDuration = window.innerWidth <= 480 ? 20 : 30;
        
        // Remove existing animation
        marquee.style.animation = 'none';
        void marquee.offsetWidth; // Trigger reflow
        
        // Apply new animation
        marquee.style.animation = `marquee ${animationDuration}s linear infinite`;
        
        // Update keyframes
        updateKeyframes();
    }
    
    // Function to update keyframes
    function updateKeyframes() {
        const gapValue = window.innerWidth <= 480 ? 5 : 10;
        const styleSheet = document.styleSheets[0];
        
        // Remove existing marquee keyframes if they exist
        const existingIndex = Array.from(styleSheet.cssRules).findIndex(rule => 
            rule.name === 'marquee'
        );
        if (existingIndex !== -1) {
            styleSheet.deleteRule(existingIndex);
        }
        
        // Add new keyframes
        styleSheet.insertRule(`
            @keyframes marquee {
                0% {
                    transform: translateX(100%);
                }
                100% {
                    transform: translateX(calc(-100% - ${gapValue}px));
                }
            }
        `, styleSheet.cssRules.length);
    }
    
    // Initialize on load
    initMarquee();
    
    // Make responsive on window resize
    window.addEventListener('resize', function() {
        initMarquee();
    });
    
    // Perfect loop for mobile - reset when last card is about to disappear
    marquee.addEventListener('animationiteration', function() {
        if (window.innerWidth <= 480) {
            // Force reset to starting position
            marquee.style.animation = 'none';
            void marquee.offsetWidth;
            initMarquee();
        }
    });
    
    // Interaction handlers
    marquee.addEventListener('mouseenter', () => {
        marquee.style.animationPlayState = 'paused';
    });
    
    marquee.addEventListener('mouseleave', () => {
        marquee.style.animationPlayState = 'running';
    });
    
    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            marquee.style.animationPlayState = marquee.style.animationPlayState === 'paused' 
                ? 'running' 
                : 'paused';
        });
    });
    
    // Touch controls
    let touchTimer;
    marquee.addEventListener('touchstart', (e) => {
        if (e.target.closest('.skill-card') || e.target === marquee) {
            marquee.style.animationPlayState = 'paused';
            // Auto-resume after 3 seconds if not manually resumed
            touchTimer = setTimeout(() => {
                marquee.style.animationPlayState = 'running';
            }, 3000);
        }
    });
    
    marquee.addEventListener('touchend', () => {
        clearTimeout(touchTimer);
        marquee.style.animationPlayState = 'running';
    });
});