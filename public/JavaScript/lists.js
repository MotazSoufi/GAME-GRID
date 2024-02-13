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
