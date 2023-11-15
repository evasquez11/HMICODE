document.addEventListener('DOMContentLoaded', () => {
    // Function to simulate data change for each engine
    function simulateDataChange(engineNumber) {
        const enginePower = document.querySelector(`#engine${engineNumber} .power`);
        const statusBar = document.querySelector(`#engine${engineNumber} .status-bar`);
        
        // Random power value between 0 and 9999 kW
        enginePower.textContent = `${Math.floor(Math.random() * 10000)} kW`;
        // Random status bar height
        statusBar.style.height = `${Math.floor(Math.random() * 100)}%`;
    }

    // Simulate data change for all engines every second
    setInterval(() => {
        for (let i = 1; i <= 5; i++) { // Assuming you have 5 engines
            simulateDataChange(i);
        }
    }, 1000);

    // Handle switch toggle for all engines
    const switches = document.querySelectorAll('.switch input');
    switches.forEach(sw => {
        sw.addEventListener('change', (event) => {
            const engineId = sw.closest('.engine').id;
            console.log(`${engineId} Switch toggled`, event.target.checked);
            // Here you can handle the switch toggle for each engine
        });
    });
});
