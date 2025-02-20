// Typing effect for the intro text
const typingText = document.querySelector('.typing-intro');
const textToType = typingText.textContent;
typingText.textContent = ''; // Clear the original text
let i = 0;
let typingSpeed = 150; // Speed of typing effect

function typeWriter() {
    if (i < textToType.length) {
        typingText.textContent += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    }
}
typeWriter();

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
            behavior: 'smooth'
        });
    });
});


document.querySelector('.contact-btn').addEventListener('click', () => {
    alert("Let's talk! You can reach out to me through my contact links below.");
});

document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('click', () => {
        alert('Skill item clicked!');
    });
});

// Select the dark mode toggle and sun icon
const darkModeToggle = document.getElementById('darkModeToggle');
const sunIcon = document.getElementById('sunIcon');

// Function to toggle dark mode
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    // Change sun to moon icon when toggling dark mode
    if (document.body.classList.contains('dark-mode')) {
        sunIcon.src = 'moon-icon.png'; // Replace with moon icon path
    } else {
        sunIcon.src = 'sun-icon.png'; // Replace with sun icon path
    }
});