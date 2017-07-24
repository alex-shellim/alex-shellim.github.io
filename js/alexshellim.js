$(document).ready(function(){

// fade in
  setTimeout(function(){
    $('.pre-load').fadeOut('slow');
  }, 300);


// menu animation

$('#menu-launch').click(function(){
  if ( $('header').hasClass('menu-show') ) {
    $('header').removeClass('menu-show');
  }
  else {
    $('header').addClass('menu-show');
  }
});

$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
  $(this).toggleClass('open');
});


// show header logo when main logo disappears off screen

var headerLogo = $('.logo-reached-top').offset().top;

$(window).scroll(function() {
    if ($(window).scrollTop() > headerLogo -60) {
      $('header').addClass('shadow');
      $('.header-logo').addClass('show-logo');
    }
    else {
      $('header').removeClass('shadow');
      $('.header-logo').removeClass('show-logo');
    }
});



// scroll to work from nav
$("#nav-go-to-work").click(function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top
    }, 1000);
    $('header').removeClass('menu-show');
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open');
});

// scroll to about from nav
$("#nav-go-to-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
    $('header').removeClass('menu-show');
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open');
});

// scroll to work
$(".scroll").click(function() {
  if ($(this).hasClass('go-to-work')){
    $('html, body').animate({
        scrollTop: $("#work").offset().top
    }, 1000);
  }
});


//last.fm api call
$.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=ohalex&api_key=c8efeca2fa6325625c90b52cc5e9e984&format=json", function(json){

  // get name of the last track played
  var trackName = json.recenttracks.track[0].name;

  // get artist name of the last track played
  var trackArtist = json.recenttracks.track[0].artist['#text'];

  // get album art of last track played
  var trackArt = json.recenttracks.track[0].image[2]['#text'];

  // get url of last track played
  var trackLink = json.recenttracks.track[0].url;

  // console.log(trackArt);
  // console.log(trackLink);
  // console.log(trackName);
  // console.log(trackArtist);

  // do something
  $('.track-art').attr('src',trackArt);
  $('.track-link').attr('href',trackLink);
  $('.track-name').text(trackName);
  $('.track-artist').text(trackArtist);

  });


  var jmediaquery = window.matchMedia( "(min-width: 449px)" )
  if (jmediaquery.matches) {
      // window width is at least 449px
  }
  else {
    $(window).scroll(function() {

      // listen for top position of each and apply class
      $('.project').each(function(){
       var toppos = $(this).offset().top;
           if ($(window).scrollTop() >= toppos - 180) {
            $('.shadow-hover-mobile').removeClass('shadow-hover-mobile');// remove class from all
            $('.text-hover-mobile').removeClass('text-hover-mobile');// remove class from all
              $(this).find('.hover-shadow').addClass('shadow-hover-mobile'); // add class to this one
              $(this).find('.project-name').addClass('text-hover-mobile'); // add class to this one
           }
           else {
             $(this).find('.hover-shadow').removeClass('shadow-hover-mobile');
             $(this).find('.project-name').removeClass('text-hover-mobile');
           }

      });
     });
  }



});
