$( document ).ready(function() {
$('#reportinglink').click(function(e) {
  e.preventDefault();
  $('html,body').animate({scrollTop:$('#reporting').offset().top - 130});
});
$('#dashboardlink').click(function(e) {
  e.preventDefault();
  $('html,body').animate({scrollTop:$('#dashboard').offset().top - 145});
});
$('#storylink').click(function(e) {
  e.preventDefault();
  $('html,body').animate({scrollTop:$('#story').offset().top - 145});
});

 $('.various').fancybox({
    openEffect  : 'none',
    closeEffect : 'none'
  });
    
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
  // if scrolled past main header, show the little header
  if ($scrolled > 140) {
    $('.header').addClass('is-active');
    // $('.glasses-grid').addClass('fixed')
  }
  //otherwise dont show that stuff
  else  {
    $('.header').removeClass('is-active'); 
  }

  
  if ($('#reporting').length > 0){
    $reportingHeight = $('#reporting').innerHeight();
    $dashboardHeight = $('#dashboard').innerHeight();
    $storyHeight = $('#story').innerHeight();
  }
  if ($scrolled > $featuresHeight + $reportingHeight - 180 && $scrolled < $featuresHeight + $reportingHeight + $dashboardHeight -150){
    $('.features-item').removeClass('is-happening');
    $('#dashboardlink').addClass('is-happening');
    console.log('dashboard');
  }
  else if ($scrolled > $featuresHeight + $reportingHeight + $dashboardHeight - 150) {
    $('.features-item').removeClass('is-happening');
    $('#storylink').addClass('is-happening');
    console.log('story');
  }
  else {
    $('.features-item').removeClass('is-happening');
    $('#reportinglink').addClass('is-happening');
    console.log('reporting');
  }

  if ($features.length > 0 && $scrolled > $featuresHeight-160){
    $('.features-menu-scroll').addClass('is-active');
  }
  else {
    $('.features-menu-scroll').removeClass('is-active');
  }
  
});
$( window ).resize(function() {

});
