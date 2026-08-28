// ==========================================================
// N+ MEDIA & DIGITAL
// MAIN JAVASCRIPT
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    // ======================================================
    // ELEMENTS
    // ======================================================

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    const contactForm = document.querySelector(".contact-form");
    const contactSection = document.querySelector("#contact");

    const businessWhatsApp = "918072441662";


    // ======================================================
    // MOBILE MENU
    // ======================================================

    function openMobileMenu() {

        if (!menuToggle || !navLinks) return;

        menuToggle.classList.add("active");
        navLinks.classList.add("active");

        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close menu");
    }


    function closeMobileMenu() {

        if (!menuToggle || !navLinks) return;

        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
    }


    function toggleMobileMenu() {

        if (!menuToggle || !navLinks) return;

        const isOpen = navLinks.classList.contains("active");

        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }


    if (menuToggle && navLinks) {

        // Initial accessibility state

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open menu"
        );


        // Toggle menu

        menuToggle.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                toggleMobileMenu();

            }
        );


        // Close menu when navigation link is clicked

        navLinks.querySelectorAll("a").forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        closeMobileMenu();

                    }
                );

            }
        );

    }


    // ======================================================
    // CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
    // ======================================================

    document.addEventListener(
        "click",
        function (event) {

            if (!menuToggle || !navLinks) return;

            const clickedInsideMenu =
                navLinks.contains(event.target);

            const clickedToggle =
                menuToggle.contains(event.target);

            if (
                navLinks.classList.contains("active") &&
                !clickedInsideMenu &&
                !clickedToggle
            ) {

                closeMobileMenu();

            }

        }
    );


    // ======================================================
    // ESCAPE KEY — CLOSE MOBILE MENU
    // ======================================================

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeMobileMenu();

            }

        }
    );


    // ======================================================
    // RESET MOBILE MENU ON DESKTOP
    // ======================================================

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 768) {

                closeMobileMenu();

            }

        }
    );


    // ======================================================
    // SMOOTH SCROLL
    // ======================================================

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");

                    // Ignore empty "#"

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(targetId);

                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    // Close mobile menu

                    closeMobileMenu();


                    // Smooth scroll

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });


                    // Update URL without jumping

                    if (
                        history.pushState
                    ) {

                        history.pushState(
                            null,
                            "",
                            targetId
                        );

                    }

                }
            );

        }
    );


    // ======================================================
    // GET A QUOTE BUTTON
    // ======================================================

    document.querySelectorAll(
        "a, button"
    ).forEach(
        function (element) {

            const text =
                element.textContent
                    .trim()
                    .toUpperCase();


            if (
                text.includes("GET A QUOTE")
            ) {

                element.addEventListener(
                    "click",
                    function (event) {

                        if (!contactSection) {
                            return;
                        }


                        event.preventDefault();


                        closeMobileMenu();


                        contactSection.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });


                        // Update URL

                        if (
                            history.pushState
                        ) {

                            history.pushState(
                                null,
                                "",
                                "#contact"
                            );

                        }

                    }
                );

            }

        }
    );


    // ======================================================
    // CONTACT FORM → WHATSAPP
    // ======================================================

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                // ==========================================
                // FORM FIELDS
                // ==========================================

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


                // ==========================================
                // GET VALUES
                // ==========================================

                const name =
                    nameField
                        ? nameField.value.trim()
                        : "";

                const company =
                    companyField
                        ? companyField.value.trim()
                        : "";

                const email =
                    emailField
                        ? emailField.value.trim()
                        : "";

                const whatsapp =
                    whatsappField
                        ? whatsappField.value.trim()
                        : "";

                const service =
                    serviceField
                        ? serviceField.value.trim()
                        : "";

                const details =
                    detailsField
                        ? detailsField.value.trim()
                        : "";


                // ==========================================
                // NAME VALIDATION
                // ==========================================

                if (!name) {

                    alert(
                        "Please enter your name."
                    );

                    if (nameField) {

                        nameField.focus();

                    }

                    return;

                }


                // ==========================================
                // EMAIL VALIDATION
                // ==========================================

                if (!email) {

                    alert(
                        "Please enter your email address."
                    );

                    if (emailField) {

                        emailField.focus();

                    }

                    return;

                }


                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (
                    !emailPattern.test(email)
                ) {

                    alert(
                        "Please enter a valid email address."
                    );

                    if (emailField) {

                        emailField.focus();

                    }

                    return;

                }


                // ==========================================
                // SERVICE VALIDATION
                // ==========================================

                if (
                    !service ||
                    service === "Select a service"
                ) {

                    alert(
                        "Please select a service."
                    );

                    if (serviceField) {

                        serviceField.focus();

                    }

                    return;

                }


                // ==========================================
                // PROJECT DETAILS VALIDATION
                // ==========================================

                if (!details) {

                    alert(
                        "Please enter your project details."
                    );

                    if (detailsField) {

                        detailsField.focus();

                    }

                    return;

                }


                // ==========================================
                // CREATE WHATSAPP MESSAGE
                // ==========================================

                const message =
                    "N+ MEDIA & DIGITAL - NEW ENQUIRY\n" +
                    "================================\n\n" +

                    "Name: " +
                    name +
                    "\n" +

                    "Company / Business: " +
                    (
                        company ||
                        "Not provided"
                    ) +
                    "\n" +

                    "Email: " +
                    email +
                    "\n" +

                    "WhatsApp: " +
                    (
                        whatsapp ||
                        "Not provided"
                    ) +
                    "\n" +

                    "Service Required: " +
                    service +
                    "\n\n" +

                    "Project Details:\n" +
                    details +
                    "\n\n" +

                    "================================\n" +
                    "Sent from N+ Media & Digital Website";


                // ==========================================
                // WHATSAPP URL
                // ==========================================

                const whatsappURL =
                    "https://wa.me/" +
                    businessWhatsApp +
                    "?text=" +
                    encodeURIComponent(message);


                // ==========================================
                // OPEN WHATSAPP
                // ==========================================

                window.open(
                    whatsappURL,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    }


    // ======================================================
    // FLOATING WHATSAPP BUTTON
    // ======================================================

    document.querySelectorAll(
        ".whatsapp-button, .whatsapp-btn"
    ).forEach(
        function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();


                    const message =
                        "Hi N+ Media & Digital! 👋\n\n" +
                        "I would like to know more about your digital services.";


                    const whatsappURL =
                        "https://wa.me/" +
                        businessWhatsApp +
                        "?text=" +
                        encodeURIComponent(message);


                    window.open(
                        whatsappURL,
                        "_blank",
                        "noopener,noreferrer"
                    );

                }
            );

        }
    );


    // ======================================================
    // NORMAL WHATSAPP LINKS
    // ======================================================
    // Any other WhatsApp link that is NOT the floating
    // button will work normally.
    // ======================================================

    document.querySelectorAll(
        'a[href*="wa.me"], a[href*="whatsapp"]'
    ).forEach(
        function (link) {

            const isFloatingButton =
                link.matches(
                    ".whatsapp-button, .whatsapp-btn"
                );


            if (isFloatingButton) {

                return;

            }


            // Keep normal WhatsApp links working naturally.

        }
    );


    // ======================================================
    // PREVENT FORM DOUBLE SUBMISSION
    // ======================================================

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function () {

                const submitButton =
                    contactForm.querySelector(
                        'button[type="submit"]'
                    );


                if (submitButton) {

                    submitButton.blur();

                }

            }
        );

    }


    // ======================================================
    // PAGE LOADED
    // ======================================================

    console.log(
        "N+ Media & Digital website loaded successfully."
    );

});
