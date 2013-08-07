$(function(){
  $('.page-wrap').hide();
  $('.flipbox-container').hide();
  $('.page-wrap').slideDown(2100);
  setTimeout(init, 2500);

});

function init() {
  $('.flipbox-container').hide();
  $('#strip').css('webkit-transition', '-webkit-transform 1200ms');
  $('#stop').click(function() {
    stop();
});

  $(".flipbox").flippy({
    color_target: "black",
    duration: "500"
});
  $(".flipbox").flippyReverse();
  $('#log-in-button').click(function() {
    flipToLogIn();
});
  $('#last-button').click(function() {
    flipToSignUp();
});

  myInterval = setInterval(next, 1200);
}

$('.sign-in-up li:last').click(function() {
  $('.inner-image').hide();
  $(".flipbox").flippyReverse();
  $('.flipbox-container').show();
  $('.sign-up').hide();
  $('.sign-in').show();
});

$('.sign-in-up li:first').click(function() {
  $('.inner-image').hide();
  $(".flipbox").flippyReverse();
  $(".flipbox").flippyReverse();
  $('.flipbox-container').show();
  $('.sign-in').hide();
  $('.sign-up').show();
});



// can this be a function that pulls photos from assets folder directl
// var imageArray = [
//   '<img src="assets/bg1.jpg"/>',
//   '<img src="assets/bg2.jpg"/>',
//   '<img src="assets/bg3.jpg"/>',
//   '<img src="assets/bg4.jpg"/>',
//   '<img src="assets/bg5.jpg"/>',
//   '<img src="assets/bg6.jpg"/>',
//   '<img src="assets/bg7.gif"/>',
//   '<img src="assets/bg8.jpg"/>',
//   '<img src="assets/bg9.jpg"/>',
//   '<img src="assets/bg10.jpg"/>',
//   '<img src="assets/bg11.jpg"/>',
//   '<img src="assets/bg12.jpg"/>',
//   '<img src="assets/bg13.jpg"/>',
//   '<img src="assets/bg15.jpg"/>'
// ];

var imageArray = [];





// $('.inner-image').append(imageArray);

// for (var i = 0; i < imageArray.length; i++) {
//   $('.inner-image').append(imageArray[i]);
// }
// function zoom() {
//   $('#logo').css('webkit-transition', 'webkit-transform 2s');
// }



// can this be stored in a function as well and shuffle so the pictures shuffle in a unique order
// for (var i = 0; i < imageArray.length; i++) {
//   $('.inner-image').append(imageArray);

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


// apiImage = -1800;

function stop() {
  console.log('stopping the animation');
  // $('#strip').css('-webkit-transform', 'translateX(' + apiImage + 'px)');
    clearInterval(myInterval);
}

// alter nav bar when button is clicked
$('.sign-in-up li:last').click(function() {
  $(this).slideUp();
});

// append sign-up div above over carousel
$('.page-wrap').prepend('<div id="sign-up"</div>');

$('.sign-up').remove();
$('.inner-image').remove();

var signUpDiv = $('.sign-up');

var carouselDiv = $('.inner-image');

$('.page-wrap').append(carouselDiv);
$('.stop').remove();


$('.page-wrap').prepend(signUpDiv);


var signUpDiv;

var carouselDiv = $('.inner-image');


signUpDiv = $('.sign-up');
signUpDiv.remove();
$('.flipbox-container').prepend(signUpDiv);

// if they click, sign-up
$('.flipbox-container').show();

// flippidy (from sign-up)
$(".flipbox").flippy({
    recto: $('.sign-in'),
    duration: "500"
});

$(".flipbox").flippyReverse();

// if they click, sign-in
$('.flipbox-container').show();
$('.sign-up').hide();

// flippidy (from sign-in)

$(".flipbox").flippyReverse();



// color_target : The targeted background color. (ex.: ‘aliceblue’, ‘#f0f8ff’ or rgba(33,133,197,.3) | default: ‘white’)
// recto : The content to show after a revert() action (default : the original content)
// verso : The content to show after the flip effect
// direction : The direction of the flip effect (‘RIGHT’, ‘LEFT’, ‘BOTTOM’, ‘TOP’ | default : ‘LEFT’)
// duration : How long the flip effect is during in ms (default : 300)
// depth : You can adjust the perspective effect (default : 0.12)
// light : You can adjust light and shadow intensity (default : 60)
// noCSS : You can force Flippy to NOT use CSS3 properties even if the browser support it (default : false)











// no longer needed
// $('.page-wrap').prepend('<img src="assets/bg14.jpg" />');
// $('img').each(function(){
//   if ($(this).width() > $(this).height()){
//         $(this).addClass('inner-image');
//   } else {
//         $(this).addClass('inner-image');
//   }
// });

// // zoom in on div
// $('.page-wrap').on('click',function(){
//   var step = 2;
//   currIEZoom += step;
//   $('.page-wrap').css('zoom', ' ' + currIEZoom + '%');
// });

// hide = $('.page-wrap').hide();
// show = $('.page-wrap').show();

// // slide down
// $(document.body).hover(function () {
//   if ($('.page-wrap').is(":hidden")) {
//   $('.page-wrap').slideDown("slow");
//   } else {
//   $('.page-wrap').hide();
//   }
// });

// $(document.body).click(function () {
//   $('.page-wrap').slideDown("slow");
// });

// // slide up
//   $(document.body).hover(function () {
//     if ($("div:first").is(":hidden")) {
//       $("div").show("slow");
//     } else {
//       $("div").slideUp();
//     }
//   });

// function somefunction(){
//   $.ajax({
//     type: 'get',
//     url: '/',
//     dataType: 'script'
//   });
// }

// function parse() {

// for (var i = 0; i < imageArray.length; i++) {
//    $.parseHTML(imageArray[i]);
//    imageArray[i].append('.inner-image');
//   }
// }


$('.inner-image').hide();
$('.sign-in').hide();
$('.flipbox-container').show();


$(".flipbox").flippy({
    recto: $('.sign-in'),
    duration: "500",
    onFinish: function(){
      $('.sign-up').hide();
      $('.sign-in').show();
    }
 });

$(".flipbox").flippy({
    recto: $('.sign-in'),
    duration: "500"
});
$('.flipbox-container').hide();
$(".flipbox").flippyReverse();
$('.flipbox-container').show();





$(".flipbox").flippyReverse();

////

//images --> sign-up
$('.inner-image').hide();
$('.flipbox-container').show();
//sign-up --> sign-in
$('.sign-up').hide();

$(".flipbox").flippy({
    color_target: "black",
    duration: "500"
 });

$('.flipbox-container').hide();
$(".flipbox").flippyReverse();
$('.flipbox-container').show();

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


function next() {
  $('#strip').css('-webkit-transform', 'translateX(' + currentTranslation + 'px)');
  currentTranslation -= 300;

  // console.log('currentTranslation', currentTranslation);

  if (currentTranslation === -slideWidth * 2) {
    currentTranslation = 0;
  }

}





$(document).ready(function(){

    $('.flipbox-container').bind("click",function(){

        // $(this) point to the clicked .sponsorFlip element (caching it in elem for speed):

        var elem = $(this);

        // data('flipped') is a flag we set when we flip the element:

        if(elem.data('flipped'))
        {
            // If the element has already been flipped, use the revertFlip method
            // defined by the plug-in to revert to the default state automatically:

            elem.revertFlip();

            // Unsetting the flag:
            elem.data('flipped',false);
        }
        else
        {
            // Using the flip method defined by the plugin:

            elem.flip({
                direction:'lr',
                speed: 350,
                onBefore: function(){
                    // Insert the contents of the .sponsorData div (hidden
                    // from view with display:none) into the clicked
                    // .sponsorFlip div before the flipping animation starts:

                    elem.html(elem.siblings('.sponsorData').html());
                }
            });

            // Setting the flag:
            elem.data('flipped',true);
        }
    });

});
