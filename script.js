document.addEventListener('DOMContentLoaded', () => {
    // Function to simulate data change for each sensor
    function simulateDataChange(sensorNumber) {
        const sensorPower = document.querySelector(`#sensor${sensorNumber} .power`);
        const statusBar = document.querySelector(`#sensor${sensorNumber} .status-bar`);
        
        // Random power value between 0 and 9999 kW
        sensorPower.textContent = `${Math.floor(Math.random() * 10000)} kW`;
        // Random status bar height
        statusBar.style.height = `${Math.floor(Math.random() * 100)}%`;
    }

    // Simulate data change for all sensors every second
    setInterval(() => {
        for (let i = 1; i <= 5; i++) { // Assuming you have 5 sensors
            simulateDataChange(i);
        }
    }, 1000);

    // Handle switch toggle for all sensors
    const switches = document.querySelectorAll('.switch input');
    switches.forEach(sw => {
        sw.addEventListener('change', (event) => {
            const sensorId = sw.closest('.sensor').id;
            console.log(`${sensorId} Switch toggled`, event.target.checked);
            // Here you can handle the switch toggle for each sensor
        });
    });
});
