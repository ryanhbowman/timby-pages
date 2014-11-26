$( document ).ready(function() {
  $('#menu_control').click(function(event) {
      $('.mobile-menu').toggleClass('active-menu');
      $('#menu_control').toggleClass('active');
  });
  $features = $('.page-header__features');
  if ($features.length > 0){
    $featuresHeight = $features.innerHeight();
  }
});
$(window).scroll(function(event) {
  $scrolled = $(window).scrollTop();
  if ($features.length > 0 && $scrolled > $featuresHeight-160){
    $('.features-menu-scroll').addClass('is-active');
  }
  else {
    $('.features-menu-scroll').removeClass('is-active');
  }
  // if scrolled past main header, show the little header
  if ($scrolled > 140) {
    $('.header').addClass('is-active');
    // $('.glasses-grid').addClass('fixed')
  }
  //otherwise dont show that stuff
  else  {
    $('.header').removeClass('is-active'); 
  }
});
$( window ).resize(function() {

});
