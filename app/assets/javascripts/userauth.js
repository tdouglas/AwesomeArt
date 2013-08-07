$(function(){

  var signUpButton = $('#sign-up-button');

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
  });
});