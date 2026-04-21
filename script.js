function updateDateTime() {
    const now = new Date();

    // Format time
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const timeString = now.toLocaleTimeString('en-US', timeOptions);

    // Format date
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const dateString = now.toLocaleDateString('en-US', dateOptions);

    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    if (timeElement) timeElement.textContent = timeString;
    if (dateElement) dateElement.textContent = dateString;
}

// Update clock every second
setInterval(updateDateTime, 1000);

function initColorPicker() {
    const picker = document.getElementById('bg-picker');
    if (picker) {
        picker.addEventListener('input', (e) => {
            document.body.style.backgroundColor = e.target.value;
        });
    }
}

// Initial call
document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    initColorPicker();
    console.log('Skoop Agent Welcome Page Initialized');
});

// Connectivity fallback
window.addEventListener('online', () => {
    console.log('App is online');
});

window.addEventListener('offline', () => {
    console.log('App is offline - maintaining state');
});
