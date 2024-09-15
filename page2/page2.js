document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            
            // Add the fade-out class to the body
            document.body.classList.add('fade-out');
            
            // Delay navigation to allow the fade-out effect to complete
            setTimeout(() => {
                window.location.href = link.href; // Navigate to the new page
            }, 500); // The duration should match the CSS transition time
        });
    });
});

