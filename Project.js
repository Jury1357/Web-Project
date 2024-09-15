

var icon =document.getElementById("img1id");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if( document.body.classList.contains("dark-theme")){
        icon.src ="sun.png";
    }
    else{
        icon.src="moon.png"; 
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.btn');

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

/* ////////////////*/


// var icon2 =document.getElementById("icon11");

// icon2.onclick = function(){
//     var element=document.getElementById("mydiv");
//     element.classList.toggle("mystyle");
// }


