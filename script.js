document.addEventListener('DOMContentLoaded', () => {
    // Messages for the status of each sensor
    const sensor1Messages = [
        "No Package Detected - Sensor Idle",
        "Awaiting Package Arrival",
        "Package Detected",
        "Package Expected But Not Detected - Check System"
    ];

    const sensor2Messages = [
        "Actuator Inactive - Ready for Engagement",
        "Actuator Engaged - Operation in Progress",
        "Error: Actuator Status Unclear"
    ];

    let sensor1Index = 0;
    let sensor2Index = 0;

    // Function to update the status message for a sensor
    function updateStatusMessage(sensorElement, messages, index) {
        const statusDisplay = sensorElement.querySelector('.status-message');
        statusDisplay.textContent = messages[index];
    }

    // Function to simulate data change for each sensor
    function simulateDataChange(sensorNumber) {
        const sensorElement = document.querySelector(`#sensor${sensorNumber}`);
        const powerDisplay = sensorElement.querySelector('.power');

        // Update power value for sensors 3 to 5
        if (sensorNumber >= 3) {
            powerDisplay.textContent = `${Math.floor(Math.random() * 10000)} kW`;
        }
    }

    // Update status messages for sensors 1 and 2 at a different interval
    setInterval(() => {
        updateStatusMessage(document.querySelector('#sensor1'), sensor1Messages, sensor1Index);
        updateStatusMessage(document.querySelector('#sensor2'), sensor2Messages, sensor2Index);

        sensor1Index = (sensor1Index + 1) % sensor1Messages.length;
        sensor2Index = (sensor2Index + 1) % sensor2Messages.length;
    }, 3000); // Update every 3 seconds for demonstration

    // Simulate data change for sensors 3 to 5
    setInterval(() => {
        for (let i = 3; i <= 5; i++) {
            simulateDataChange(i);
        }
    }, 1000); // Update every second for demonstration

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
