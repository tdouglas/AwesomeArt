var signUpDiv;
var carouselDiv;

$(function(){
  $('.page-wrap').hide();
  $('.flipbox-container').hide();
  $('.page-wrap').slideDown(2100);
  signUpDiv = $('.sign-up');
  carouselDiv = $('.inner-image');
  setTimeout(init, 2500); // postponing init until the box falls
});

function init() {
  $('.flipbox-container').hide();
  $('#strip').css('webkit-transition', '-webkit-transform 1200ms');
  $('#stop').click(function() {
    stop();
  });
  $('#log-in-button').click(function() {
    // flipToLogIn();
  });
  $('#last-button').click(function() {
    // flipToSignUp();
  });
  myInterval = setInterval(next, 1200);
  $('.sign-in-up li:last').click(function() {
    $('.inner-image').hide();
    $('.flipbox-container').show();
    $('.sign-up').hide();
    $('.sign-in').show();
    $('#signed-out-navbar li:last').detach();
  });
  $('#sign-in-nav').click(revealSignIn);
  $('.sign-in-up li:first').click(function() {
    $('.inner-image').hide();
    $('.flipbox-container').show();
    $('.sign-in').hide();
    $('.sign-up').show();
    $('#signed-out-navbar li:first').detach();
  });
}


// Image Sizes
var slideWidth = 300;
var slideHeight = 420;
var currentTranslation = -slideWidth;
var myInterval;



function next() {
  $('#strip').css('-webkit-transform', 'translateX(' + currentTranslation + 'px)');
  currentTranslation -= 300;

  // console.log('currentTranslation', currentTranslation);

  if (currentTranslation === -slideWidth * 2) {
    currentTranslation = 0;
  }

}


function stop() {
  console.log('stopping the animation');
  // $('#strip').css('-webkit-transform', 'translateX(' + apiImage + 'px)');
  clearInterval(myInterval);
}




// $('.inner-image').hide();
// $('.sign-in').hide();
// $('.flipbox-container').show();


// $(".flipbox").flippy({
//     recto: $('.sign-in'),
//     duration: "500",
//     onFinish: function(){
//       $('.sign-up').hide();
//       $('.sign-in').show();
//     }
//  });

// $(".flipbox").flippy({
//     recto: $('.sign-in'),
//     duration: "500"
// });
// $('.flipbox-container').hide();
// $(".flipbox").flippyReverse();
// $('.flipbox-container').show();


function flipToLogin() {
  $('#log-in-button').click(function() {
    $('.inner-image').hide();
    $('.flipbox-container').hide();
    $(".flipbox").flippyReverse();
    $(".flipbox").flippyReverse();
    $('.sign-up').hide();
    $('.sign-in').show();
    $('.flipbox-container').show();
  });
}

function flipToSignUp() {
  $('#last-button').click(function() {
    $('.inner-image').hide();
    $('.flipbox-container').hide();
    $(".flipbox").flippyReverse();
    $(".flipbox").flippyReverse();
    $('.sign-in').hide();
    $('.sign-up').show();
    $('.flipbox-container').show();
  });
}


function revealSignIn(e) {
  e.preventDefault();
  $('.inner-image').hide();
  $('.flipbox-container').show();
  $('.sign-up').hide();
  $('.sign-in').show();
}


function next() {
  $('#strip').css('-webkit-transform', 'translateX(' + currentTranslation + 'px)');
  currentTranslation -= 300;

  // console.log('currentTranslation', currentTranslation);

  if (currentTranslation === -slideWidth * 2) {
    currentTranslation = 0;
  }

}





