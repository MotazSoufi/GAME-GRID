var count = 1;

            $(document).keyup(function(e) {
                if (e.key === "Escape") {
                    closeSc();
                }
            });

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

            $('#wishlist').click(() => {
                if($('#wishlist').attr("value") == "WISHLIST") {
                    $('#wishlist').attr("value", "     ✓     ");
                } else {
                    $('#wishlist').attr("value", "WISHLIST");
                }
                
            });

            function enlargeScreenshots() {
                $('.gradientBG').css("opacity", "1");
                $('.gradientBG').css('pointer-events', "all");
                $('.closeScreenshots').css("opacity", "1");
                $('.bgImage').css('pointer-events', "none");
                $('.closeScreenshots').css('pointer-events', "all");
                $('.gameScreenshots').css('opacity', "1");

                $('.arrowLeft').css('opacity', "1");
                $('.arrowLeft').css('pointer-events', "all");
                $('.arrowRight').css('opacity', "1");
                $('.arrowRight').css('pointer-events', "all");

                $('.screenshotGallery').css('opacity', "1");
                $('.screenshotGallery').css('pointer-events', "all");
            }

            function closeSc() {
                $('.gradientBG').css("opacity", "0");
                $('.gradientBG').css('pointer-events', "none");
                $('.closeScreenshots').css("opacity", "0");
                $('.bgImage').css('pointer-events', "all");
                $('.closeScreenshots').css('pointer-events', "none");
                $('.gameScreenshots').css('opacity', "0");

                $('.arrowLeft').css('opacity', "0");
                $('.arrowLeft').css('pointer-events', "none");
                $('.arrowRight').css('opacity', "0");
                $('.arrowRight').css('pointer-events', "none");

                $('.screenshotGallery').css('opacity', "0");
                $('.screenshotGallery').css('pointer-events', "none");

            }

            function goRight() {
                count++;

                if(count == 5) {
                    count = 1;
                }

                switch(count) {
                    case 1:
                        $('.gameScreenshots').css('background-image', 'url(/Images/eldenBG.webp)');
                    break;

                    case 2:
                        $('.gameScreenshots').css('background-image', 'url(/Images/screenshot1.jpg)');
                    break;

                    case 3:
                        $('.gameScreenshots').css('background-image', 'url(/Images/screenshot2.jpg)');
                    break;

                    case 4:
                        $('.gameScreenshots').css('background-image', 'url(/Images/screenshot3.jpg)');
                    break;
                }
            }

            function goLeft() {
                count--;

                if(count == 0) {
                    count = 4;
                }

                switch(count) {
                    case 1:
                        $('.gameScreenshots').css('background-image', 'url(/Images/eldenBG.webp)');
                    break;

                    case 2:
                        $('.gameScreenshots').css('background-image', 'url(/Images/screenshot1.jpg)');
                    break;

                    case 3:
                        $('.gameScreenshots').css('background-image', 'url(/Images/screenshot2.jpg)');
                    break;

                    case 4:
                        $('.gameScreenshots').css('background-image', 'url(/Images/screenshot3.jpg)');
                    break;

                }
            }

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