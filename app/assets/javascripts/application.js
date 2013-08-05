// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


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

$(function(){
  $('.page-wrap').hide();
  $('.page-wrap').slideDown(2100);
  init();
});

function fitImagetoContainer() {
  $("img").each(function(i) {
     $(this).width($(this).parent().width());
  });
}
$(window).resize(function() {
   fitImagetoContainer();
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
*/

// can this be a function that pulls photos from assets folder directl
var imageArray = [
  '<img src="assets/bg1.jpg"/>',
  '<img src="assets/bg2.jpg"/>',
  '<img src="assets/bg3.jpg"/>',
  '<img src="assets/bg4.jpg"/>',
  '<img src="assets/bg5.jpg"/>',
  '<img src="assets/bg6.jpg"/>',
  '<img src="assets/bg7.gif"/>',
  '<img src="assets/bg8.jpg"/>',
  '<img src="assets/bg9.jpg"/>',
  '<img src="assets/bg10.jpg"/>',
  '<img src="assets/bg11.jpg"/>',
  '<img src="assets/bg12.jpg"/>',
  '<img src="assets/bg13.jpg"/>',
  '<img src="assets/bg15.jpg"/>'
];

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



// can this be stored in a function as well and shuffle so the pictures shuffle in a unique order
// for (var i = 0; i < imageArray.length; i++) {
//   $('.inner-image').append(imageArray);

var slideWidth = 300;
var slideHeight = 420;

var currentTranslation = -slideWidth;


function init() {
  $('.inner-image').append(imageArray);
  $('#strip').css('webkit-transition', '-webkit-transform 1200ms');
  // getArray();
}

function next(){
  $('#strip').css('-webkit-transform', 'translateX(' + currentTranslation + 'px)');
  currentTranslation -= 300;

  //style.webkitTransform = 'translateX(-300px)';
}

function getArray() {
  for (var i = 0; i < imageArray.length; i++) {
    console.log(imageArray[i]);
      // $('.inner-image').append(imageArray);
    // imageArray.src = ary[i].media.m;
  }
  setInterval(startTheShow, 2000);
}


function startTheShow() {
  imageArray.style.webkitTransform = 'translateX(' + currentTranslation + 'px)';
  currentTranslation -= slideWidth;

  if (currentTranslation == -slideWidth * imageArray.length) {
    currentTranslation = 0;
  }
}









