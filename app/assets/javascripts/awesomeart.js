var signUpDiv;
var carouselDiv;
var artworkData;

$(function(){
  loadArtworkData();
});

function loadArtworkData() {
  $.ajax({
   url: '/art_data',
   dataType: 'json'
}).done(function(data){
  console.log(data);
  artworkData = data;
  console.log(artworkData.data[imageIndex].title);
  appendImages();
  setUpPage();
});
}

function appendImages() {
  images = '';
  $.each(artworkData.data, function(index, imageInfo) {
  images += "<img src='" + imageInfo.image_url + "'></img>";
});
  $('.inner-image').append(images);
}


function setUpPage() {
  $('.page-wrap').hide();
  $('.page-wrap').hide();
  $('.flipbox-container').hide();
  $('.art-info').hide();
  $('.page-wrap').slideDown(2100);
  signUpDiv = $('.sign-up');
  carouselDiv = $('.inner-image');
  setTimeout(init, 2500); // postponing init until the box falls
}

function init() {
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
    // $('#signed-out-navbar li:last').detach();
  });
  $('#sign-in-nav').click(revealSignIn);
  $('.sign-in-up li:first').click(function() {
    $('.inner-image').hide();
    $('.flipbox-container').show();
    $('.sign-in').hide();
    $('.sign-up').show();
    // $('#signed-out-navbar li:first').detach();
  });
}


// Image Sizes
var slideWidth = 300;
var slideHeight = 420;
var currentTranslation = -slideWidth;
var myInterval;
var imageIndex = 0;
var numOfImages = 2;

function next() {
  $('#strip').css('-webkit-transform', 'translateX(' + currentTranslation + 'px)');
  currentTranslation -= 300;
  imageIndex += 1;
  // console.log('currentTranslation', currentTranslation);
  // console.log('imageIndex', imageIndex);
  if (currentTranslation === -slideWidth * numOfImages) {
    imageIndex = -1;
    currentTranslation = 0;
  }
}

function stop() {
  // $('#strip').css('-webkit-transform', 'translateX(' + apiImage + 'px)');
  $('.art-info').show();
   $('.art-info').animate({ width: "30%" }, {queue: false, duration: 2000});
   $('.art-info').animate({ fontSize: "14px" }, 1000 );
   $('.art-info').animate({ borderRightWidth: "15px" }, 1000 );
  position();
  // what image am i stopping on?
}

function position() {
  index = imageIndex;
  if (index == -1) {
    index = numOfImages - 1;
  }
  $('#artwork-title').html(artworkData.data[index].title);
  $('#artwork-artist').html(artworkData.data[index].artist);
  $('#artwork-medium').html(artworkData.data[index].medium);
  $('#artwork-date').html(artworkData.data[index].date);
  $('#artwork-collection').html(artworkData.data[index].collection);
  $('#artwork-link').attr('src', artworkData.data[index].link);
  console.log('animation stopped');
  console.log(currentTranslation);
  console.log(index);
  // clearInterval(myInterval);
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

function revealSignIn(e) {
  e.preventDefault();
  $('.inner-image').hide();
  $('.flipbox-container').show();
  $('.sign-up').hide();
  $('.sign-in').show();
}




