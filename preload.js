window.addEventListener('DOMContentLoaded', () => {
    const item = document.querySelector('.menu');
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    item.addEventListener('mousedown', (event) => {
        isDragging = true;
        offset.x = event.clientX;
        offset.y = event.clientY;
        console.log('mouse down');
    });

    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            const newX = event.screenX - offset.x;
            const newY = event.screenY - offset.y;

            fetch('http://localhost:5000/mousepos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ x: newX, y: newY })
            })
            .then(response => {
                if (response.ok) {
                    console.log('Mouse position data sent successfully');
                } else {
                    console.error('Failed to send mouse position data');
                }
            })
            .catch(error => {
                console.error('Error sending mouse position data:', error);
            });
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        console.log("mouse is up");
    });

    
});
