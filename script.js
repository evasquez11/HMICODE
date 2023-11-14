// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Simulate data change
    setInterval(() => {
        const enginePower = document.querySelector('.engine .power');
        enginePower.textContent = `${Math.floor(Math.random() * 10000)} kW`;
        
        const statusBar = document.querySelector('.status-bar');
        statusBar.style.height = `${Math.floor(Math.random() * 100)}%`;
    }, 1000);

    // Handle switch toggle
    const switches = document.querySelectorAll('.switch input');
    switches.forEach(sw => {
        sw.addEventListener('change', (event) => {
            console.log('Switch toggled', event.target.checked);
            // Here you would handle the switch toggle
        });
    });
});
