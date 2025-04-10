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