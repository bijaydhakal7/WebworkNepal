const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

// Check local storage for saved theme preference
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "💡"; // Light mode icon
}

// Toggle Theme
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Update button icon
    if (body.classList.contains("dark-mode")) {
        themeToggle.textContent = "💡"; // Switch to light mode
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙"; // Switch to dark mode
        localStorage.setItem("theme", "light");
    }
});
