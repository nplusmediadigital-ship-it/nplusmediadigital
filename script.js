// ================================
// MOBILE MENU
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");

        const isOpen = menuToggle.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );
    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {
        link.addEventListener("click", function () {
            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open menu");
        });
    });
}


// ================================
// GET A QUOTE BUTTON
// ================================

document.querySelectorAll("a, button").forEach(function (element) {

    const text = element.textContent.trim().toUpperCase();

    if (text.includes("GET A QUOTE")) {

        element.addEventListener("click", function (event) {

            const contactSection = document.querySelector("#contact");

            if (contactSection) {
                event.preventDefault();

                contactSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });
    }

});


// ================================
// SMOOTH SCROLL FOR NAVIGATION
// ================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});

// ================================
// CONTACT FORM
// ================================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const company = document.querySelector("#company").value.trim();
        const email = document.querySelector("#email").value.trim();
        const whatsapp = document.querySelector("#whatsapp").value.trim();
        const service = document.querySelector("#service").value;
        const details = document.querySelector("#details").value.trim();

        if (!name || !email || !service || !details) {
            alert("Please fill in all required fields.");
            return;
        }

        const message =
            "N+ MEDIA & DIGITAL - NEW ENQUIRY\n\n" +
            "Name: " + name + "\n" +
            "Company / Business: " + company + "\n" +
            "Email: " + email + "\n" +
            "WhatsApp: " + whatsapp + "\n" +
            "Service: " + service + "\n\n" +
            "Project Details:\n" + details;

        const whatsappNumber = "918072441662";

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank");

    });

}
