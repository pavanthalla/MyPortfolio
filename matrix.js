const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Matrix characters
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 16;
const columns = canvas.width / fontSize;

// Array for drop positions
const drops = Array.from({ length: columns }, () => 1);

// Draw function
function draw() {
    // Black background with slight opacity
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Green text
    ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px monospace`;

    // Loop over drops
    drops.forEach((y, index) => {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        const x = index * fontSize;
        ctx.fillText(text, x, y * fontSize);

        // Reset drop to top randomly
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;
        }

        // Increment Y coordinate
        drops[index]++;
    });
}

// Interval for animation
setInterval(draw, 50);

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
