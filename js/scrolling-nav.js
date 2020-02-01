(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 2000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

})(jQuery); // End of use strict

var previousScroll = 0;

$(window).scroll(function(){

  var currentScroll = $(this).scrollTop();

  if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){

    if (currentScroll > previousScroll){
      window.setTimeout(hideNav, 300);

    } else if (currentScroll == previousScroll) {
      window.setTimeout(visibleNav, 300);
    }
     else {
      window.setTimeout(showNav, 300);
    }

    previousScroll = currentScroll;
  }

  /* make the scroll navigation disappear when it is scrolled on top */

  if ($(window).scrollTop() <= 150) {
      $('#navigation-scroll').css('display', 'none');
  } else {
    $('#navigation-scroll').css('display', 'flex');
  }

});

function hideNav() {
  $(".main-navigation-scroll").removeClass("is-visible").addClass("is-hidden");
}
function showNav() {
  $(".main-navigation-scroll").removeClass("is-hidden").addClass("is-visible");
  $(".main-navigation-scroll").addClass("shadow");
}

});