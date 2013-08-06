
// zoom in on div
$('.page-wrap').on('click',function(){
  var step = 2;
  currIEZoom += step;
  $('.page-wrap').css('zoom', ' ' + currIEZoom + '%');
});

hide = $('.page-wrap').hide();
show = $('.page-wrap').show();

// slide down
$(document.body).hover(function () {
  if ($('.page-wrap').is(":hidden")) {
  $('.page-wrap').slideDown("slow");
  } else {
  $('.page-wrap').hide();
  }
});

$(document.body).click(function () {
  $('.page-wrap').slideDown("slow");
});

// slide up
  $(document.body).hover(function () {
    if ($("div:first").is(":hidden")) {
      $("div").show("slow");
    } else {
      $("div").slideUp();
    }
  });

function somefunction(){
  $.ajax({
    type: 'get',
    url: '/',
    dataType: 'script'
  });
}

$(function(){
  $('.page-wrap').hide();
  $('.page-wrap').slideDown(2100);
  setTimeout(init, 2500);
  // some_function()
  // $(parent_item).on('click', 'clicked-item', somefunction)
});

/* no longer needed
$('.page-wrap').prepend('<img src="assets/bg14.jpg" />');
$('img').each(function(){
  if ($(this).width() > $(this).height()){
        $(this).addClass('inner-image');
  } else {
        $(this).addClass('inner-image');
  }
});

function fitImagetoContainer() {
  $("img").each(function(i) {
     $(this).width($(this).parent().width());
  });
}
$(window).resize(function() {
   fitImagetoContainer();
});

*/

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

function parse() {

for (var i = 0; i < imageArray.length; i++) {
   $.parseHTML(imageArray[i]);
   imageArray[i].append('.inner-image');
  }
}



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


function init() {
  $('.flipbox-container').hide();

  // $('.inner-image').append(imageArray);

  $('#strip').css('webkit-transition', '-webkit-transform 1200ms');
  $('#stop').click(function() {
    stop();
  });

  // $('.sign-in-up li:last').click(function() {
  // xyz();
  // console.log("clicked");
  // });

  myInterval = setInterval(next, 1200);
}

function next() {
  $('#strip').css('-webkit-transform', 'translateX(' + currentTranslation + 'px)');
  currentTranslation -= 300;

  console.log('currentTranslation', currentTranslation);

  if (currentTranslation === -slideWidth * 10) {
    currentTranslation = 0;
  }

}

// function getArray() {
//   for (var i = 0; i < imageArray.length; i++) {
//     console.log(imageArray[i]);
//       // $('.inner-image').append(imageArray);
//     // imageArray.src = ary[i].media.m;
//   }
//   setInterval(startTheShow, 2000);
// }

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














