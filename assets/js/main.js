/* =====================================================
   Stackly - MAIN JS
   Loader + Mobile Menu + Counter
   FAQ + Scroll Top + Animations
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       LOADER
    ========================== */

    const loader = document.querySelector(".loader");

    function hideLoader(){
        if(loader && loader.style.visibility !== "hidden"){
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }
    }

    window.addEventListener("load", () => {
        setTimeout(hideLoader, 2500);
    });

    setTimeout(hideLoader, 6000);

    /* ==========================
       MOBILE MENU
    ========================== */

    const menuBtn = document.querySelector(".mobile-toggle");
    const nav = document.querySelector("nav");

    if(menuBtn && nav){

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if(nav.classList.contains("active")){

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");

            }else{

                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");

            }

        });

    }

    /* ==========================
       CLOSE MENU AFTER CLICK
    ========================== */

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if(nav){

                nav.classList.remove("active");

                if(menuBtn){

                    menuBtn.innerHTML =
                    '<i class="fas fa-bars"></i>';

                }

            }

        });

    });

    /* ==========================
       COUNTER ANIMATION
    ========================== */

    const counters =
    document.querySelectorAll(".counter");

    const startCounter = () => {

        counters.forEach(counter => {

            const target =
            +counter.getAttribute("data-target");

            let count = 0;

            const speed = target / 150;

            const updateCounter = () => {

                count += speed;

                if(count < target){

                    counter.innerText =
                    Math.floor(count);

                    requestAnimationFrame(
                    updateCounter);

                }else{

                    counter.innerText =
                    target + "+";

                }

            };

            updateCounter();

        });

    };

    const counterSection =
    document.querySelector(".counter-section");

    if(counterSection){

        const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    startCounter();

                    observer.disconnect();

                }

            });

        });

        observer.observe(counterSection);

    }

    /* ==========================
       FAQ ACCORDION
    ========================== */

    const faqButtons =
    document.querySelectorAll(".faq-question");

    faqButtons.forEach(button => {

        button.addEventListener("click", () => {

            const answer =
            button.nextElementSibling;

            document
            .querySelectorAll(".faq-answer")
            .forEach(item => {

                if(item !== answer){

                    item.style.display = "none";

                }

            });

            if(answer.style.display === "block"){

                answer.style.display = "none";

            }else{

                answer.style.display = "block";

            }

        });

    });

    /* ==========================
       SCROLL TO TOP
    ========================== */

    const scrollBtn =
    document.getElementById("scrollTop");

    window.addEventListener("scroll", () => {

        if(scrollBtn){

            if(window.scrollY > 500){

                scrollBtn.classList.add("show");

            }else{

                scrollBtn.classList.remove("show");

            }

        }

    });

    if(scrollBtn){

        scrollBtn.addEventListener("click", () => {

            window.scrollTo({

                top:0,
                behavior:"smooth"

            });

        });

    }

    /* ==========================
       ACTIVE NAVIGATION
    ========================== */

    const sections =
    document.querySelectorAll("section[id]");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
            section.offsetTop - 120;

            const sectionHeight =
            section.offsetHeight;

            if(window.scrollY >= sectionTop){

                current =
                section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if(
                link.getAttribute("href") ===
                "#" + current
            ){

                link.classList.add("active");

            }

        });

    });

    /* ==========================
       HEADER SCROLL EFFECT
    ========================== */

    const header =
    document.querySelector("header");

    window.addEventListener("scroll", () => {

        if(header){

            if(window.scrollY > 100){

                header.style.background =
                "rgba(7,11,22,.95)";

                header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.3)";

            }else{

                header.style.background =
                "rgba(7,11,22,.85)";

                header.style.boxShadow =
                "none";

            }

        }

    });

    /* ==========================
       CUSTOM CURSOR
    ========================== */

    const cursor =
    document.querySelector(".cursor");

    if(cursor){

        document.addEventListener(
        "mousemove",
        (e) => {

            cursor.style.left =
            e.clientX + "px";

            cursor.style.top =
            e.clientY + "px";

        });

    }

    /* ==========================
       FLOATING CARDS EFFECT
    ========================== */

    const cards =
    document.querySelectorAll(
    ".service-card,.team-card,.price-card,.blog-card,.case-card"
    );

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
            "translateY(-12px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
            "translateY(0px)";

        });

    });

    /* ==========================
       CONTACT FORM
    ========================== */

    const contactForm =
    document.querySelector(".contact-form");

    if(contactForm){

        contactForm.addEventListener(
        "submit",
        (e) => {

            e.preventDefault();

            window.location.href =
            "404.html";

        });

    }

    /* ==========================
       NEWSLETTER
    ========================== */

    const newsletterForm =
    document.querySelector(
    ".newsletter form"
    );

    if(newsletterForm){

        newsletterForm.addEventListener(
        "submit",
        (e) => {

            e.preventDefault();

            window.location.href =
            "404.html";

        });

    }

    /* ==========================
       REVEAL ON SCROLL
    ========================== */

    const revealElements =
    document.querySelectorAll(
    ".service-card,.team-card,.blog-card,.price-card,.case-card,.why-card,.solution-card"
    );

    const revealObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                "translateY(0)";

            }

        });

    }, {
        threshold:0.1
    });

    revealElements.forEach(item => {

        item.style.opacity = "0";
        item.style.transform =
        "translateY(40px)";
        item.style.transition =
        "all .8s ease";

        revealObserver.observe(item);

    });

});

/* ==========================
CONSOLE BRANDING
========================== */

console.log(
"%cStackly",
"font-size:28px;font-weight:bold;color:#14b8a6;"
);

console.log(
"%cFuture Powered By Artificial Intelligence",
"font-size:14px;color:#059669;"
);