// var signUpButton = $('#sign-up-button');
// var signInButton = $('#sign-in-button');

// $(function(){
//   signUpButton.click(function(){
//     signUp();
//   });
//   signInButton.click(function(){
//     signIn();
//   });
// });

// function signUp() {
//     console.log("in sign up");
//     var user = { "email": "", "password": "", "password_confirmation": "" };
//     user.email = $('#sign-up-email').val();
//     user.password = $('#sign-up-password').val();
//     user.password_confirmation = $('#sign-up-password-confirmation').val();

//     $.ajax({
//       url: '/users',
//       type: 'POST',
//       dataType: 'json',
//       data: user
//     }).success(function(){
//       $('.flipbox-container').hide();
//       $('#signed-out-navbar').detach();
//       $('.sign-in-up').appendTo('#signed-in-navbar');
//     });
// }

// // for signInButton
// function signIn(event) {
//   console.log("in sign in");
//   event.preventDefault();
//   alert("something");
//   var user = { "email": "", "password": "" };
//   user.email = $('#sign-in-email').val();
//   user.password = $('#sign-in-password').val();

//   console.log(user);

//   $.ajax({
//     url: '/sessions',
//     type: 'POST',
//     dataType: 'json',
//     data: user
//   }).done(function(result){
//     alert("success");
//     $('.flipbox-container').hide();
//     $('.inner-image').show();
//   });
// }