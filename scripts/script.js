
// For navigation menu dropdown list
document.addEventListener('DOMContentLoaded', function () {
    const navButton = document.getElementById('header-navigation-button');
    const navList = document.getElementById('header-navigation-list');

    // Toggle the navigation menu on click
    navButton.addEventListener('click', function () {
        if (navList.style.display === 'block') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'block';
        }
    });

    // Close menu if clicked outside
    document.addEventListener('click', function (event) {
        if (!navButton.contains(event.target) && !navList.contains(event.target)) {
            navList.style.display = 'none';
        }
    });
});

// Function to toggle light/dark mode (default is dark mode)
document.getElementById("theme-toggle-button").addEventListener("click", () => {
    document.documentElement.classList.toggle('light-mode');

    // Get all GitHub icons since they are white and so disappear in light mode
    const githubIcons = document.querySelectorAll(".github-icon");
    githubIcons.forEach((icon) => {
        // Check if the icon is already in light mode
        if (icon.src.endsWith("github-icon-light-mode.svg")) {
            icon.src = "assets/icons/github-icon.svg";
        } else {
            icon.src = "assets/icons/github-icon-light-mode.svg";
        }
    });
});