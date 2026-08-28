// ================================
// N+ MEDIA & DIGITAL
// MAIN JAVASCRIPT
// ================================


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


    // Close menu after clicking any navigation link

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
// SMOOTH SCROLL
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
// CONTACT FORM → WHATSAPP
// ================================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // ================================
        // GET FORM VALUES
        // ================================

        const nameField = document.querySelector("#name");
        const companyField = document.querySelector("#company");
        const emailField = document.querySelector("#email");
        const whatsappField = document.querySelector("#whatsapp");
        const serviceField = document.querySelector("#service");
        const detailsField = document.querySelector("#details");


        const name = nameField ? nameField.value.trim() : "";
        const company = companyField ? companyField.value.trim() : "";
        const email = emailField ? emailField.value.trim() : "";
        const whatsapp = whatsappField ? whatsappField.value.trim() : "";
        const service = serviceField ? serviceField.value.trim() : "";
        const details = detailsField ? detailsField.value.trim() : "";


        // ================================
        // REQUIRED FIELD VALIDATION
        // ================================

        if (!name) {

            alert("Please enter your name.");
            if (nameField) nameField.focus();
            return;

        }


        if (!email) {

            alert("Please enter your email address.");
            if (emailField) emailField.focus();
            return;

        }


        // Basic email validation

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");
            if (emailField) emailField.focus();
            return;

        }


        if (!service || service === "Select a service") {

            alert("Please select a service.");
            if (serviceField) serviceField.focus();
            return;

        }


        if (!details) {

            alert("Please enter your project details.");
            if (detailsField) detailsField.focus();
            return;

        }


        // ================================
        // WHATSAPP MESSAGE
        // ================================

        const message =
            "N+ MEDIA & DIGITAL - NEW ENQUIRY\n" +
            "================================\n\n" +

            "Name: " + name + "\n" +

            "Company / Business: " +
            (company || "Not provided") + "\n" +

            "Email: " + email + "\n" +

            "WhatsApp: " +
            (whatsapp || "Not provided") + "\n" +

            "Service Required: " + service + "\n\n" +

            "Project Details:\n" +
            details + "\n\n" +

            "================================\n" +
            "Sent from N+ Media & Digital Website";


        // ================================
        // YOUR BUSINESS WHATSAPP NUMBER
        // ================================

        const whatsappNumber = "918072441662";


        // ================================
        // CREATE WHATSAPP URL
        // ================================

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);


        // ================================
        // OPEN WHATSAPP
        // ================================

        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    });

}


// ================================
// FLOATING WHATSAPP BUTTON
// ================================

const whatsappButtons =
    document.querySelectorAll(".whatsapp-button");


whatsappButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();


        const message =
            "Hi N+ Media & Digital! 👋\n\n" +
            "I would like to know more about your digital services.";


        const whatsappNumber = "918072441662";


        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);


        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    });

});


// ================================
// PORTFOLIO / GENERAL WHATSAPP LINKS
// ================================

document.querySelectorAll(
    'a[href*="wa.me"], a[href*="whatsapp"]'
).forEach(function (link) {

    link.addEventListener("click", function () {

        // Allow normal WhatsApp links to work naturally.

    });

});


// ================================
// ESCAPE KEY — CLOSE MOBILE MENU
// ================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (menuToggle && navLinks) {

            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );

        }

    }

});


// ================================
// PAGE LOADED
// ================================

document.addEventListener("DOMContentLoaded", function () {

    console.log(
        "N+ Media & Digital website loaded successfully."
    );

});
