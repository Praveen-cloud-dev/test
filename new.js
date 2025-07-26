const clock = document.createElement('div');
clock.style.fontSize = '2em';
clock.style.fontFamily = 'monospace';
clock.style.textAlign = 'center';
clock.style.marginTop = '50px';
document.body.appendChild(clock);

function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${h}:${m}:${s}`;
}

setInterval(updateClock, 1000);
updateClock();