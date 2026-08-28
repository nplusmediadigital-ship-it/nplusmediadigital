// ========================================
// N+ MEDIA & DIGITAL - MAIN SCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // MOBILE MENU
    // ========================================

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


    // ========================================
    // SMOOTH SCROLL
    // ========================================

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


    // ========================================
    // GET A QUOTE
    // ========================================

    document.querySelectorAll("a, button").forEach(function (element) {

        const text = element.textContent.trim().toUpperCase();

        if (text.includes("GET A QUOTE")) {

            element.addEventListener("click", function (event) {

                const contactSection =
                    document.querySelector("#contact");

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


    // ========================================
    // CONTACT FORM → WHATSAPP
    // ========================================

    const contactForm = document.querySelector("form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            // STOP NORMAL FORM SUBMISSION
            event.preventDefault();
            event.stopPropagation();

            // GET FORM VALUES
            const nameField =
                document.querySelector("#name");

            const companyField =
                document.querySelector("#company");

            const emailField =
                document.querySelector("#email");

            const whatsappField =
                document.querySelector("#whatsapp");

            const serviceField =
                document.querySelector("#service");

            const detailsField =
                document.querySelector("#details");


            const name =
                nameField ? nameField.value.trim() : "";

            const company =
                companyField ? companyField.value.trim() : "";

            const email =
                emailField ? emailField.value.trim() : "";

            const whatsapp =
                whatsappField ? whatsappField.value.trim() : "";

            const service =
                serviceField ? serviceField.value.trim() : "";

            const details =
                detailsField ? detailsField.value.trim() : "";


            // ========================================
            // VALIDATION
            // ========================================

            if (!name) {
                alert("Please enter your name.");
                return;
            }

            if (!email) {
                alert("Please enter your email address.");
                return;
            }

            if (!service) {
                alert("Please select a service.");
                return;
            }

            if (!details) {
                alert("Please enter your project details.");
                return;
            }


            // ========================================
            // WHATSAPP MESSAGE
            // ========================================

            const message =
                "N+ MEDIA & DIGITAL - NEW ENQUIRY\n\n" +

                "Name: " + name + "\n" +

                "Company / Business: " +
                (company || "Not provided") +
                "\n" +

                "Email: " + email + "\n" +

                "WhatsApp: " +
                (whatsapp || "Not provided") +
                "\n" +

                "Service: " + service +
                "\n\n" +

                "Project Details:\n" +
                details;


            // ========================================
            // N+ BUSINESS WHATSAPP NUMBER
            // ========================================

            const whatsappNumber = "918072441662";


            // ========================================
            // CREATE WHATSAPP URL
            // ========================================

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(message);


            // ========================================
            // OPEN WHATSAPP
            // ========================================

            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        });

    }

});
