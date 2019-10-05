$(function() {
  "use strict";

  // Update active item in navbar
  $('body').scrollspy({
    target: '.navbar',
    offset: 80
  });

  $('.scroll-link').click(function () {
    // Smooth scrolling
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top - 70
    }, 1000, "easeInOutExpo");

    // Collapse mobile navbar
    $('.navbar-collapse').collapse('hide');

    return false;
  });

  // Shrink navbar
  var navbarShrink = function() {
    if ($(".navbar").offset().top > 100) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  };
  navbarShrink();
  $(window).scroll(navbarShrink);
});
