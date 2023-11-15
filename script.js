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

    // Function to update the status message for a sensor and activate the alarm if the message matches a certain condition
    function updateStatusMessage(sensorElement, messages, index) {
        const statusDisplay = sensorElement.querySelector('.status-message');
        const alarmIndicator = sensorElement.querySelector('.alarm');
        statusDisplay.textContent = messages[index];

        // Check the message and add 'active' class to alarm if it matches the condition
        if (messages[index] === "Package Expected But Not Detected - Check System" || 
            messages[index] === "Error: Actuator Status Unclear") {
            alarmIndicator.classList.add('active');
        } else {
            alarmIndicator.classList.remove('active');
        }
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

    function startLoopingTimer(sensorId) {
        let timer = document.querySelector(`#${sensorId} .timer`);
        let seconds = 0;

        setInterval(() => {
            seconds = (seconds + 1) % 11; // Reset to 0 after reaching 10
            let secondsFormatted = seconds.toString().padStart(2, '0');
            timer.textContent = `00:${secondsFormatted}`;
        }, 1000); // Update every second
    }

    // Call the startLoopingTimer function for sensor4 and sensor5
    startLoopingTimer('sensor4');
    startLoopingTimer('sensor5');

    

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

    document.querySelector('#sensor1 .switch input').addEventListener('change', (event) => {
        const messageList = document.querySelector('#sensor1 .message-list-sensor1');
        if (event.target.checked) {
            messageList.style.display = 'block'; // Show the list
        } else {
            messageList.style.display = 'none'; // Hide the list
        }
    });

    document.querySelector('#sensor2 .switch input').addEventListener('change', (event) => {
        const messageListSensor2 = document.querySelector('#sensor2 .message-list-sensor2');
        if (event.target.checked) {
            messageListSensor2.style.display = 'block'; // Show the list
        } else {
            messageListSensor2.style.display = 'none'; // Hide the list
        }
    });

    document.querySelector('#sensor3 .switch input').addEventListener('change', (event) => {
        const messageListSensor3 = document.querySelector('#sensor3 .message-list-sensor3');
        if (event.target.checked) {
            messageListSensor3.style.display = 'block'; // Show the list
        } else {
            messageListSensor3.style.display = 'none'; // Hide the list
        }
    });

    document.querySelector('#sensor4 .switch input').addEventListener('change', (event) => {
        const messageListSensor4 = document.querySelector('#sensor4 .message-list-sensor4');
        if (event.target.checked) {
            messageListSensor4.style.display = 'block'; // Show the list
        } else {
            messageListSensor4.style.display = 'none'; // Hide the list
        }
    });
    
    document.querySelector('#sensor5 .switch input').addEventListener('change', (event) => {
        const messageListSensor5 = document.querySelector('#sensor5 .message-list-sensor5');
        if (event.target.checked) {
            messageListSensor5.style.display = 'block'; // Show the list
        } else {
            messageListSensor5.style.display = 'none'; // Hide the list
        }
    });




    
});
