// ==========================================================
// N+ MEDIA & DIGITAL
// FINAL MAIN JAVASCRIPT
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    // ======================================================
    // CONFIGURATION
    // ======================================================

    const BUSINESS_WHATSAPP = "918072441662";


    // ======================================================
    // ELEMENTS
    // ======================================================

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    const contactForm = document.querySelector(".contact-form");
    const contactSection = document.querySelector("#contact");


    // ======================================================
    // MOBILE MENU
    // ======================================================

    function openMobileMenu() {

        if (!menuToggle || !navLinks) {
            return;
        }

        menuToggle.classList.add("active");
        navLinks.classList.add("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Close menu"
        );
    }


    function closeMobileMenu() {

        if (!menuToggle || !navLinks) {
            return;
        }

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


    function toggleMobileMenu() {

        if (!menuToggle || !navLinks) {
            return;
        }

        if (navLinks.classList.contains("active")) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }


    // ======================================================
    // INITIAL MOBILE MENU STATE
    // ======================================================

    if (menuToggle && navLinks) {

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open menu"
        );


        // Toggle button

        menuToggle.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                toggleMobileMenu();
            }
        );


        // Close after clicking navigation link

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
    // CLOSE MENU WHEN CLICKING OUTSIDE
    // ======================================================

    document.addEventListener(
        "click",
        function (event) {

            if (!menuToggle || !navLinks) {
                return;
            }

            const clickedInsideNav =
                navLinks.contains(event.target);

            const clickedMenuButton =
                menuToggle.contains(event.target);


            if (
                navLinks.classList.contains("active") &&
                !clickedInsideNav &&
                !clickedMenuButton
            ) {

                closeMobileMenu();

            }

        }
    );


    // ======================================================
    // ESCAPE KEY
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
    // RESET MENU WHEN SWITCHING TO DESKTOP
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


                    // Ignore empty #

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(targetId);


                    // If target doesn't exist,
                    // allow normal browser behaviour

                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    closeMobileMenu();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });


                    // Update URL without jumping

                    try {

                        history.replaceState(
                            null,
                            "",
                            targetId
                        );

                    } catch (error) {

                        // Ignore history errors

                    }

                }
            );

        }
    );


    // ======================================================
    // GET A QUOTE
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


                        try {

                            history.replaceState(
                                null,
                                "",
                                "#contact"
                            );

                        } catch (error) {

                            // Ignore history errors

                        }

                    }
                );

            }

        }
    );


        // ======================================================
    // CONTACT FORM → FORMSPREE + WHATSAPP
    // ======================================================

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            async function (event) {

                event.preventDefault();

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


                // ==================================================
                // VALIDATION
                // ==================================================

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


                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailPattern.test(email)) {
                    alert("Please enter a valid email address.");
                    if (emailField) emailField.focus();
                    return;
                }


                if (!whatsapp) {
                    alert("Please enter your WhatsApp number.");
                    if (whatsappField) whatsappField.focus();
                    return;
                }


                const whatsappDigits =
                    whatsapp.replace(/\D/g, "");

                if (whatsappDigits.length < 10) {
                    alert("Please enter a valid WhatsApp number.");
                    if (whatsappField) whatsappField.focus();
                    return;
                }


                if (!service) {
                    alert("Please select a service.");
                    if (serviceField) serviceField.focus();
                    return;
                }


                if (!details) {
                    alert("Please enter your project details.");
                    if (detailsField) detailsField.focus();
                    return;
                }


                // ==================================================
                // SEND TO FORMSPREE
                // ==================================================

                const formData =
                    new FormData(contactForm);

                try {

                    const response =
                        await fetch(
                            "https://formspree.io/f/xkjnnzra",
                            {
                                method: "POST",
                                body: formData,
                                headers: {
                                    "Accept": "application/json"
                                }
                            }
                        );


                    if (!response.ok) {
                        throw new Error(
                            "Form submission failed."
                        );
                    }


                    // ==================================================
                    // WHATSAPP MESSAGE
                    // ==================================================

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
                        whatsapp +
                        "\n" +

                        "Service Required: " +
                        service +
                        "\n\n" +

                        "Project Details:\n" +
                        details +
                        "\n\n" +

                        "================================\n" +
                        "Sent from N+ Media & Digital Website";


                    const whatsappURL =
                        "https://wa.me/" +
                        BUSINESS_WHATSAPP +
                        "?text=" +
                        encodeURIComponent(message);


                    alert(
                        "Thank you! Your enquiry has been sent successfully."
                    );


                    contactForm.reset();


                    const newWindow =
                        window.open(
                            whatsappURL,
                            "_blank"
                        );


                    if (!newWindow) {
                        window.location.href =
                            whatsappURL;
                    }


                } catch (error) {

                    console.error(
                        "Form submission error:",
                        error
                    );

                    alert(
                        "Sorry, your enquiry could not be sent. Please try again."
                    );

                }

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
                        BUSINESS_WHATSAPP +
                        "?text=" +
                        encodeURIComponent(message);


                    const newWindow =
                        window.open(
                            whatsappURL,
                            "_blank"
                        );


                    if (!newWindow) {

                        window.location.href =
                            whatsappURL;

                    }

                }
            );

        }
    );


    // ======================================================
    // PAGE LOADED
    // ======================================================

    console.log(
        "N+ Media & Digital website loaded successfully."
    );

});
