var signUpDiv;
var carouselDiv;
var artworkData;

$(function(){
  loadArtworkData();
  $('.sign-up').hide();
  $('.art-info').hide();
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
  $('.flipbox-container').hide();
  $('.start').show();
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
var numOfImages = 10;

function next() {
  $('#strip').css('-webkit-transform', 'translateX(' + currentTranslation + 'px)');
  currentTranslation -= 300;
  imageIndex += 1;
  console.log('currentTranslation', currentTranslation);
  console.log('imageIndex', imageIndex);
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

var title;
var artist;
var medium;
var date;
var collection;
var link;

function position() {
  index = imageIndex;
  if (index == -1) {
    index = numOfImages - 1;
  }
  title = $('#artwork-title').html(artworkData.data[index].title);
  artist = $('#artwork-artist').html(artworkData.data[index].artist);
  medium = $('#artwork-medium').html(artworkData.data[index].medium);
  date = $('#artwork-date').html(artworkData.data[index].date);
  collection = $('#artwork-collection').html(artworkData.data[index].collection);
  link = $('#artwork-link').attr('href', artworkData.data[index].link);
  console.log('animation stopped');
  console.log(currentTranslation);
  console.log(index);
  console.log(title, artist, medium, date, collection, link);
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

function revealSignIn(e) {
  e.preventDefault();
  $('.inner-image').hide();
  $('.flipbox-container').show();
  $('.sign-up').hide();
  $('.sign-in').show();
}

function successfulSignInUp() {
  $('.flipbox-container').fadeOut(500);
  $('.inner-image').fadeIn(2000);
  $('#signed-out-navbar li').detach();
  $('#signed-out-navbar').append('<li></li>');
}

function unsuccessfulSignInUp() {
  $('#sign-up-div').prepend('<p>Invalid email or password</p>');
}


