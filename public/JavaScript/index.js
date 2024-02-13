
$('.profileIMG').click(() => {
    if($('.profileDropdown').css("opacity") == 0) {
        $('.profileDropdown').css("opacity", 1);
        $('.profileDropdown').css("height", "110px");
    } else {
        $('.profileDropdown').css("opacity", 0);
        $('.profileDropdown').css("height", "0px");
    }
});

$(document).click(() => {
    if($('.profileDropdown').css("opacity") == 1) {
        $('.profileDropdown').css("opacity", 0);
        $('.profileDropdown').css("height", "0px");
    }
});


document.addEventListener('DOMContentLoaded', function() {
    function handleMouseMove(event) {
        var cursorXPercentage = (event.clientX / window.innerWidth) * 100;
        var cursorYPercentage = (event.clientY / window.innerHeight) * 100;

        var offsetX = (cursorXPercentage - 50) * (movementRange / 50);
        var offsetY = (cursorYPercentage - 50) * (movementRange / 50);

        var koffsetX = (cursorXPercentage - 50) * (kratosMovementRange / 50);
        var koffsetY = (cursorYPercentage - 50) * (kratosMovementRange / 50);

        circle.style.backgroundPositionX = circleOriginalLeft + offsetX + '%';
        circle.style.backgroundPositionY = circleOriginalTop + offsetY + '%';

        kratos.style.left = kratosOriginalLeft + koffsetX + '%';
        kratos.style.top = kratosOriginalTop + koffsetY + '%';
    }

    var circle = document.getElementById('bg');
    var kratos = document.getElementById('kratos');
    
    var circleOriginalLeft = parseFloat(circle.style.backgroundPositionX);
    var circleOriginalTop = parseFloat(circle.style.backgroundPositionY);

    var kratosOriginalLeft = parseFloat(kratos.style.left);
    var kratosOriginalTop = parseFloat(kratos.style.top);

    var movementRange = 1.4; // Adjust the range as needed
    var kratosMovementRange = 1;

    function handleResize() {
        if (window.innerWidth > 600) {
            document.addEventListener('mousemove', handleMouseMove);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }

    // Initial setup
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);
});




function toggleMenu() {
    const navigation = document.querySelector(".navigation");
    const menuToggle = document.querySelector(".menuToggle");
    const shadowToggle = document.querySelector(".shadow");

    const visibility = navigation.getAttribute('data-visible');
    const iconVisibility = menuToggle.getAttribute('menuIcon');
    const shadowVisibility = shadowToggle.getAttribute('shadowToggle');

    if (visibility == "false") {
        navigation.setAttribute('data-visible', true);
        menuToggle.setAttribute('menuIcon', true);
        shadowToggle.setAttribute('shadowToggle', true);
    }
    else if (visibility == "true") {
        navigation.setAttribute('data-visible', false);
        menuToggle.setAttribute('menuIcon', false);
        shadowToggle.setAttribute('shadowToggle', false);
    }

}
