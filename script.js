document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    const animatedText = document.querySelectorAll(".animated-text");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("text-appear");
            }
        });
    }, { threshold: 0.2 });
    
    animatedText.forEach(text => {
        text.classList.add("text-hidden");
        observer.observe(text);
    });

    const profileImage = document.querySelector(".hero-image img");
    if (profileImage) {
        profileImage.addEventListener("mouseenter", () => {
            profileImage.style.transform = "scale(1.15) rotate(5deg)";
            profileImage.style.transition = "transform 0.4s ease-in-out";
            profileImage.style.boxShadow = "0px 10px 30px rgba(243, 156, 18, 0.6)";
        });
        profileImage.addEventListener("mouseleave", () => {
            profileImage.style.transform = "scale(1) rotate(0deg)";
            profileImage.style.boxShadow = "0px 0px 15px rgba(243, 156, 18, 0.6)";
        });
    }
});
