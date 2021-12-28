
$(document).ready(function () {
    "use strict"; // Start of use strict

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    $(window).scroll(sticktothetop);
    sticktothetop();

    // When the user scrolls down 20px from the top of the document, show the button
    // window.onscroll = function () { scrollFunction() };

});

function sticktothetop() {
    var window_top = $(window).scrollTop();
    var top = $('#stick-here').offset().top;
    if (window_top > top) {
        $('#stickThis').addClass('stick');
    } else {
        $('#stickThis').removeClass('stick');
    }
}


function scrollFunction() {
    //Get the button:
    mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    //1 second of animation time
    //html works for FFX but not Chrome
    //body works for Chrome but not FFX
    //This strange selector seems to work universally
    $("html, body").animate({ scrollTop: 0 }, 1000);
}

function elementNavigation(elementID) {
     $("html, body").animate({ scrollTop: $("#" + elementID).offset().top }, 1000);
}

function removeCookiesDiv()
{
    $('#cookies').remove();
}