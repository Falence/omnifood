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

});