var signUpDiv;
var carouselDiv;
var artworkData;

$(function(){
  $('.awesomeness').css("display", "none");
  $('#end').append('<p>Your artwork is loading...</p>')
  // $('p').replaceWith('<p>Please be patient.</p>');

  loadArtworkData();
  $('.sign-up').hide();
  $('.sign-in').hide();
  $('.art-info').hide();
  $('#leave-it').click(reload);
});

function loadArtworkData() {
  $.ajax({
   url: '/art_data',
   dataType: 'json'
}).done(function(data){
  // console.log(data);
  artworkData = data;
  console.log(artworkData.data[imageIndex].title);
  appendImages();
  setUpPage();
  $('#love-it').click(favScroll);
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
  $('.art-info').hide();
  $('.start').hide();
  $('.page-wrap').slideDown(2100);
  $('#end').text('');
  signUpDiv = $('.sign-up');
  carouselDiv = $('.inner-image');
  setTimeout(init, 1200); // postponing init until the box falls
}

function init() {
  $('.inner-image').css('webkit-transition', '-webkit-transform 1200ms');
  $('#stop').click(stop);
  $('#log-in-button').click(promptSignIn);
  $('#last-button').click(promptSignUp);
  myInterval = setInterval(next, 1200);
  $('#float-sign-in').click(revealSignIn);
  $('#float-about-us').click(aboutUs);
  $('#float-sign-up').click(function() {
  $('.inner-image').hide();
  $('.flipbox-container').show();
  $('.sign-in').hide();
  $('.sign-up').show();   //just added
  $('.start').hide();
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
  $('.inner-image').css('-webkit-transform', 'translateX(' + currentTranslation + 'px)');
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
  $('.stop').hide();
  $('.art-info').slideDown("slow");
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
  $('#artwork-title').html(artworkData.data[index].title);
  $('#artwork-artist').html(artworkData.data[index].artist);
  $('#artwork-medium').html(artworkData.data[index].medium);
  $('#artwork-date').html(artworkData.data[index].date);
  $('#artwork-collection').html(artworkData.data[index].collection);
  $('#artwork-link').attr('href', artworkData.data[index].link);
  // console.log('animation stopped');
  // console.log(currentTranslation);
  // console.log(index);
  clearInterval(myInterval);
  $('#love-it').click(saveFaves);
  $('#will-love-it').click(promptSignIn);
  console.log("ready to save or not");
}

function saveFaves() {
  $('#love-it').data(artworkData.data[index]);
  $('#love-it').click(function(){
    $.ajax({
      url: '/favorite',
      type: 'POST',
      data: $('#love-it').data(),
      dataType: 'json'
    });
    window.location = "/favorites";
  });
  $('.x').click(deleteArt);
}

function promptSignUp() {
  $('.inner-image').hide();
  $('.sign-up').show();
  $('#float-sign-up').click();
}

function promptSignIn() {
  $('.sign-up').hide();
  $('.sign-in').show();
  $('#float-sign-in').click();
}

function deleteArt() {
  $(this).parent().parent().remove();
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
  $('.signed-out-navbar').detach();
  $('.sign-in-up').append();
}

function unsuccessfulSignInUp() {
  $('#sign-up-div').prepend('<p>Invalid email or password</p>');
}

function favScroll() {
  $('.scroll').css('-webkit-transform', 'translateX(' + currentTranslation + 'px)');
  currentTranslation -= 300;
  imageIndex += 1;
  console.log('currentTranslation', currentTranslation);
  console.log('imageIndex', imageIndex);
  if (currentTranslation === -slideWidth * numOfImages) {
    imageIndex = -1;
    currentTranslation = 0;
  }
}

function reload() {
  $('.stop').show();
  $('.start').hide();
  $('.sign-up').hide();
  $('.sign-in').hide();
  $('.art-info').hide();
  loadArtworkData();
  $('.inner-image').show();
  $('.space').prepend('<h1>Just a sec, while we fetch you some more artwork!</h1>');
  setTimeout(back, 3000);
}

function back() {
  $('.space').text('');
}

function aboutUs() {
  if ($('.awesomeness').is(':visible')) {
    $('.awesomeness').slideUp('slow');
  } else {
    $('.awesomeness').slideDown("slow");
  }
}
