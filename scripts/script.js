

// Function to open a link in a new tab, used for social media links etc.
function openLinkInNewTab(url) {
    window.open(url, '_blank').focus();
}

// Function to open a mail client with my mail pre-filled
function mailTo() {
    window.location.href = "mailto:viktor.hogberg.work@gmail.com";
}

// For navigation menu
document.addEventListener('DOMContentLoaded', function() {
    const navButton = document.getElementById('header-navigation-button');
    const navList = document.getElementById('header-navigation-list');

    // Toggle navigation menu
    navButton.addEventListener('click', function() {
        if (navList.style.display === 'block') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'block';
        }
    });

    // Close menu if clicked outside
    document.addEventListener('click', function(event) {
        if (!navButton.contains(event.target) && !navList.contains(event.target)) {
            navList.style.display = 'none';
        }
    });
});

// Header listener
document.getElementById("header-photography-portfolio-button").addEventListener("click", function () {
    openLinkInNewTab("https://www.photos.viktorhogberg.com/");
});

// Sidebar button listeners
document.getElementById("sidebar-resume-button").addEventListener("click", function () {
    openLinkInNewTab("https://drive.google.com/file/d/1BY5kCGhW7W2FRffL1tobpF9q25DIplxT/view?usp=sharing");
});
document.getElementById("sidebar-social-github-button").addEventListener("click", function () {
    openLinkInNewTab("https://github.com/vhogberg");
});
document.getElementById("sidebar-social-linkedin-button").addEventListener("click", function () {
    openLinkInNewTab("https://www.linkedin.com/in/viktor-h%C3%B6gberg-294492203/");
});
document.getElementById("sidebar-social-email-button").addEventListener("click", function () {
    mailTo();
});
document.getElementById("sidebar-social-instagram-button").addEventListener("click", function () {
    openLinkInNewTab("https://www.instagram.com/vhogbergphoto/");
});