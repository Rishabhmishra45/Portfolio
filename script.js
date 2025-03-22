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



// Mobile Menu Toggle Functionality
const openMenu = document.getElementById('openmenu');
const closeMenu = document.getElementById('closemenu');
const sideMenu = document.getElementById('sidemenu');

openMenu.addEventListener('click', () => {
    sideMenu.classList.add('active'); // Show menu
});

closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('active'); // Hide menu
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