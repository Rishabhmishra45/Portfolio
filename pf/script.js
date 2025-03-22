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