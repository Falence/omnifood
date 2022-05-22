$(document).ready(function() {
  // change h1 background color on click
  // $('h1').click(function() {
  //   $(this).css('background-color', '#ff0000')
  // })

  // add sticky nav on scroll down
  $('.js--section-features').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky')
    } else {
      $('nav').removeClass('sticky')
    }
  }, {
    offset: '60px'
  });


  // Scroll on buttons
  $('.js--scroll-to-plans').click(function() {
    $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000); // scroll to plans section with 1000ms speed
  });
  
  $('.js--scroll-to-start').click(function() {
    $('html, body').animate({ 
      scrollTop: $('.js--section-features').offset().top 
    }, 1000); // scroll to plans section with 1000ms speed
  });


  /* Navigation scroll */
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

});