

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

function selectXbox() {
    $(".playstationExclusives").css("transition-delay","0s");
    $(".nintendoExclusives").css("transition-delay","0s");
    $(".xboxExclusives").css("transition-delay","0.5s");

    $(".nintendoExclusives").css("pointer-events","none");
    $(".playstationExclusives").css("pointer-events","none");
    $(".xboxExclusives").css("pointer-events","all");

    $(".playstationExclusives").css("opacity",0);
    $(".playstationExclusives").css("margin-top","50px");
    $(".nintendoExclusives").css("opacity",0);
    $(".nintendoExclusives").css("margin-top","50px");

    $(".xboxExclusives").css("opacity",1);
    $(".xboxExclusives").css("margin-top","0px");
    

    $(".xbox").css("background-color", "#077D07")
    $(".playstation").css("background-color","#b2b2b2");
    $(".nintendo").css("background-color","#b2b2b2");
}

function selectPlaystation() {
    $(".xboxExclusives").css("transition-delay","0s");
    $(".nintendoExclusives").css("transition-delay","0s");
    $(".playstationExclusives").css("transition-delay","0.5s");

    $(".playstationExclusives").css("pointer-events","all");
    $(".xboxExclusives").css("pointer-events","none");
    $(".nintendoExclusives").css("pointer-events","none");

    $(".playstationExclusives").css("opacity",1);
    $(".playstationExclusives").css("margin-top","0px");

    $(".xboxExclusives").css("opacity",0);
    $(".xboxExclusives").css("margin-top","50px");
    $(".nintendoExclusives").css("opacity",0);
    $(".nintendoExclusives").css("margin-top","50px");

    $(".playstation").css("background-color","#003791");
    $(".xbox").css("background-color","#b2b2b2");
    $(".nintendo").css("background-color","#b2b2b2");
}

function selectNintendo() {
    $(".xboxExclusives").css("transition-delay","0s");
    $(".playstationExclusives").css("transition-delay","0s");
    $(".nintendoExclusives").css("transition-delay","0.5s");

    $(".playstationExclusives").css("pointer-events","none");
    $(".xboxExclusives").css("pointer-events","none");
    $(".nintendoExclusives").css("pointer-events","all");

    $(".xboxExclusives").css("opacity",0);
    $(".xboxExclusives").css("margin-top","50px");
    $(".playstationExclusives").css("opacity",0);
    $(".playstationExclusives").css("margin-top","50px");

    $(".nintendoExclusives").css("opacity",1);
    $(".nintendoExclusives").css("margin-top","0px");

    $(".playstation").css("background-color","#b2b2b2");
    $(".xbox").css("background-color","#b2b2b2");
    $(".nintendo").css("background-color","#E80015");
}


function handleViewportChange(mediaQuery) {
    if (mediaQuery.matches) {

        var scrollVal = 135;

        $('.arrowDown').click(function() {
            scrollDown();
        });

        $('.arrowUp').click(function() {
            scrollUp();
        });

        $(document).ready(function() {
            $('.gamePics').scrollTop(scrollVal); // Set the initial scroll position (in pixels)
            scrollCheck();
        });

        function scrollUp() {

            if(scrollVal == 30) {
                scrollVal = 450;
            }
            else {
                scrollVal = scrollVal - 105;
            }

            $('.gamePics').scrollTop(scrollVal);
            scrollCheck();
        }

        function scrollDown() {
            if(scrollVal == 450) {
                scrollVal = 30;
            }
            else {
                scrollVal = scrollVal + 105;
            }
            

            $('.gamePics').scrollTop(scrollVal);
            scrollCheck();
        }

        function scrollCheck(){
            
            switch(scrollVal) {
                case 30:
                    $('#p5').css("width", "100");
                    $('#p1').css("width", "150");
                    $('#p2').css("width", "100");

                    $('.bgIMG').css('opacity', 0);
                    setTimeout(function() {
                        $('.bgIMG').attr('src', 'Images/spidermanBG.png');
                        $('.bgIMG').css('opacity', 1);
                      }, 150);
                break;

                case 135:
                    $('#p1').css("width", "100");
                    $('#p2').css("width", "150");
                    $('#p3').css("width", "100");

                    $('.bgIMG').css('opacity', 0);
                    setTimeout(function() {
                        $('.bgIMG').attr('src', 'Images/ff16BG.png');
                        $('.bgIMG').css('opacity', 1);
                      }, 150);
                break;

                case 240:
                    $('#p2').css("width", "100");
                    $('#p3').css("width", "150");
                    $('#p4').css("width", "100");

                    $('.bgIMG').css('opacity', 0);
                    setTimeout(function() {
                        $('.bgIMG').attr('src', 'Images/re4BG.png');
                        $('.bgIMG').css('opacity', 1);
                      }, 150);
                break;

                case 345:
                    $('#p3').css("width", "100");
                    $('#p4').css("width", "150");
                    $('#p5').css("width", "100");

                    $('.bgIMG').css('opacity', 0);
                    setTimeout(function() {
                        $('.bgIMG').attr('src', 'Images/hogwartsBG.png');
                        $('.bgIMG').css('opacity', 1);
                      }, 150);
                break;

                case 450:
                    $('#p4').css("width", "100");
                    $('#p5').css("width", "150");
                    $('#p1').css("width", "100");

                    $('.bgIMG').css('opacity', 0);
                    setTimeout(function() {
                        $('.bgIMG').attr('src', 'Images/diabloBG.png');
                        $('.bgIMG').css('opacity', 1);
                      }, 150);
                break;
            }

        }
    } 
    
    // --------------------------  LARGER THAN 600 PIXELS -------------------------------
    else {
        var scrollVal = 270;

        $('.arrowDown').click(function() {
            scrollDown();
        });

        $('.arrowUp').click(function() {
            scrollUp();
        });

        $(document).ready(function() {
    
            $('.gamePics').scrollTop(scrollVal); // Set the initial scroll position (in pixels)
            scrollCheck();
        });

        function scrollUp() {

            if(scrollVal == 60) {
                scrollVal = 900;
            }
            else {
                scrollVal = scrollVal - 210;
            }
            

            $('.gamePics').scrollTop(scrollVal);
            scrollCheck();
        }

        function scrollDown() {


            if(scrollVal == 900) {
                scrollVal = 60;
            }
            else {
                scrollVal = scrollVal + 210;
            }
        

            $('.gamePics').scrollTop(scrollVal);
            scrollCheck();
        }

        function scrollCheck(){
            switch(scrollVal) {
                case 60:
                    $('#p5').css("width", "200");
                    $('#p1').css("width", "300");
                    $('#p2').css("width", "200");

                    $('.bgIMG').css('opacity', 0);
                    setTimeout(function() {
                        $('.bgIMG').attr('src', 'Images/spidermanBG.png');
                        $('.bgIMG').css('opacity', 1);
                      }, 150);
                    
                break;

                case 270:
                    $('#p1').css("width", "200");
                    $('#p2').css("width", "300");
                    $('#p3').css("width", "200");

                    $('.bgIMG').css('opacity', 0);
                    setTimeout(function() {
                        $('.bgIMG').attr('src', 'Images/ff16BG.png');
                        $('.bgIMG').css('opacity', 1);
                      }, 150);
                break;

                case 480:
                    $('#p2').css("width", "200");
                    $('#p3').css("width", "300");
                    $('#p4').css("width", "200");

                    $('.bgIMG').css('opacity', 0);
                    setTimeout(function() {
                        $('.bgIMG').attr('src', 'Images/re4BG.png');
                        $('.bgIMG').css('opacity', 1);
                      }, 150);
                break;

                case 690:
                    $('#p3').css("width", "200");
                    $('#p4').css("width", "300");
                    $('#p5').css("width", "200");

                    $('.bgIMG').css('opacity', 0);
                    setTimeout(function() {
                        $('.bgIMG').attr('src', 'Images/hogwartsBG.png');
                        $('.bgIMG').css('opacity', 1);
                      }, 150);
                break;

                case 900:
                    $('#p4').css("width", "200");
                    $('#p5').css("width", "300");
                    $('#p1').css("width", "200");

                    $('.bgIMG').css('opacity', 0);
                    setTimeout(function() {
                        $('.bgIMG').attr('src', 'Images/diabloBG.png');
                        $('.bgIMG').css('opacity', 1);
                      }, 150);
                break;
            }
                 
        }
    }
}

var mediaQuery = window.matchMedia("(max-width: 600px)");
handleViewportChange(mediaQuery);

mediaQuery.addListener(handleViewportChange);