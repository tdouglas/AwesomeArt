$(function(){

  var signUpButton = $('#sign-up-button');

  signUpButton.click(function(){
    var user = { "email": "", "password": ""};
    user.email = $('#sign-up-email').val();
    user.password = $('#sign-up-password').val();

    $.ajax({
      url: '/users/create',
      type: 'POST',
      dataType: 'script',
      data: user
    });
  });
});