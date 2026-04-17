
// OPEN BOOKING POPUP
function openBooking() {
    document.getElementById("bookingModal").style.display = "flex";
}

function closeBooking() {
    document.getElementById("bookingModal").style.display = "none";
}

// CLOSE POPUP WHEN CLICKING OUTSIDE
window.onclick = function(event) {
    let modal = document.getElementById("bookingModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// SECTION ANIMATION (FIXED - runs only once properly)
window.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");

    sections.forEach(sec => {
        let top = sec.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});

// GALLERY FILTER
function filterGallery(category, event) {
    let images = document.querySelectorAll(".gallery img");

    // remove active class from all buttons
    document.querySelectorAll(".gallery-buttons button")
        .forEach(btn => btn.classList.remove("active"));

    // add active to clicked button
    if (event) event.target.classList.add("active");

    // show/hide images
    images.forEach(img => {
        if (category === "all") {
            img.style.display = "block";
        } else {
            img.style.display =
                img.classList.contains(category) ? "block" : "none";
        }
    });
}

// LIGHTBOX OPEN
function openLightbox(img) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
}

// LIGHTBOX CLOSE
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}