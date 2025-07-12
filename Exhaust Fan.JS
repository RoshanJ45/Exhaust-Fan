    const blades = document.getElementById('blades');
const btn = document.getElementById('toggleBtn');
let rotating = false;
let angle = 0;
function animateFan() {
if (rotating) {
angle += 6;
blades.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
requestAnimationFrame(animateFan);
}
}
btn.addEventListener('click', () => {
rotating = !rotating;
btn.textContent = rotating ? 'Turn Off' : 'Turn On';
if (rotating) animateFan();
});
