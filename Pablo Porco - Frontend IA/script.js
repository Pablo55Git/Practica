document.getElementById('cta-btn').addEventListener('click', function() {
    document.getElementById('form-section').scrollIntoView({behavior: 'smooth'});
});

// Animación de partículas (estrellas/luces)
const canvas = document.getElementById('particles-bg');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createParticles() {
    particles = [];
    for (let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2 + 1,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5,
            color: Math.random() > 0.7 ? '#ffd700' : '#d90429'
        });
    }
}
createParticles();

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    }
    requestAnimationFrame(drawParticles);
}
drawParticles();

// Scroll suave a CTA
document.getElementById('cta-main').addEventListener('click', function() {
    document.querySelector('.offer-section').scrollIntoView({behavior: 'smooth'});
});
document.getElementById('cta-offer').addEventListener('click', function() {
    document.querySelector('footer').scrollIntoView({behavior: 'smooth'});
});

// Temporizador oferta especial
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        display.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        if (--timer < 0) {
            clearInterval(interval);
            display.textContent = "¡Tiempo agotado!";
        }
    }, 1000);
}
window.onload = function () {
    const offerTime = 15 * 60; // 15 minutos
    const display = document.getElementById('timer');
    startTimer(offerTime, display);
};

// Formulario suscripción (solo frontend)
document.querySelector('.footer-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('suscripcion').value;
    alert('¡Gracias por suscribirte! Pronto recibirás ofertas exclusivas.');
    document.getElementById('suscripcion').value = '';
});