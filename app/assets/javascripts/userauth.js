$(function(){

  var signUpButton = $('#sign-up-button');
  var signInButton = $('#sign-in-button');

  signUpButton.click(function(){
    var user = { "email": "", "password": "", "password_confirmation": "" };
    user.email = $('#sign-up-email').val();
    user.password = $('#sign-up-password').val();
    user.password_confirmation = $('#sign-up-password-confirmation').val();

    $.ajax({
      url: '/users',
      type: 'POST',
      dataType: 'json',
      data: user
    });

    $('.flipbox-container').hide();
  });

  signInButton.click(function(){
    var user = { "email": "", "password": "" };
    user.email = $('#sign-in-email').val();
    user.password = $('#sign-in-password').val();

    $.ajax({
      url: '/sessions',
      type: 'POST',
      dataType: 'json',
      data: user
    });
  });

  $('.flipbox-container').hide();
  $('.inner-image').show();


});