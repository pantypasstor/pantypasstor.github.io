// DARK MODE TOGGLE
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
    );
}

// Load saved theme
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

// Availability calendar
function toggleStatus(el) {
    if (el.classList.contains("available")) {
        el.classList.remove("available");
        el.classList.add("booked");
    } else if (el.classList.contains("booked")) {
        el.classList.remove("booked");
        el.classList.add("pending");
    } else if (el.classList.contains("pending")) {
        el.classList.remove("pending");
    } else {
        el.classList.add("available");
    }
}
