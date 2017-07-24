$(document).ready(function(){

  setTimeout(function(){
    $('.pre-load').fadeOut('fast');
  }, 300);

  setTimeout(function(){
    $('header').addClass('shadow');
    $('.header-logo').addClass('show-logo');
    $('header').addClass('menu-show');
  }, 500);

  $('.view-large').click(function(){
    var attr = $(this).attr('data-image');
    // console.log(attr);
    $('.light-box').fadeIn('slow');
    $('.injected-image').attr('src',attr);
  });

  $('.close-light-box,.light-box').click(function(){
    $('.light-box').fadeOut('slow');
    $('.injected-image').attr('src','');
  });

});
