$(function () {
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

  navbarShrink();
  $(window).scroll(navbarShrink);

  matomo();
});

function navbarShrink() {
  if ($(".navbar").offset().top > 100) {
    $(".navbar").addClass("navbar-shrink");
  } else {
    $(".navbar").removeClass("navbar-shrink");
  }
};

function matomo() {
  var _paq = window._paq = window._paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function () {
    var u = "https://matomo.nano-byte.net/";
    _paq.push(['setTrackerUrl', u + 'matomo.php']);
    _paq.push(['setSiteId', '2']);
    var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
    g.type = 'text/javascript'; g.async = true; g.src = u + 'matomo.js'; s.parentNode.insertBefore(g, s);
  })();
}
