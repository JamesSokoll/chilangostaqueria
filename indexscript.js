const panels = document.querySelectorAll('.panel');
let currentIndex = 0; // Track the active panel

function removeActiveClasses() {
    panels.forEach(panel => panel.classList.remove('active'));
}

function setActivePanel(index) {
    removeActiveClasses();
    panels[index].classList.add('active');
}

// Auto-rotate function
function autoRotate() {
    currentIndex = (currentIndex + 1) % panels.length; // Cycle through images
    setActivePanel(currentIndex);
}

// Start auto-rotation every 4 seconds
setInterval(autoRotate, 4000);

// Allow manual selection while keeping auto-rotation
panels.forEach((panel, index) => {
    panel.addEventListener('click', () => {
        currentIndex = index; // Update index so auto-rotation continues correctly
        setActivePanel(index);
    });
});
