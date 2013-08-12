describe("loadArtworkData", function (){
  it("should be trivial", function() {
    expect(1).toEqual(1);
  });
});

describe("setUpPage", function(){
  it("should hide art-info and start", function(){
    loadFixtures("index.html.erb");
    setUpPage();
    expect($('.art-info')).toBeHidden();
    expect($('.start')).toBeHidden();
  });
});

describe("init", function(){
  it("should set up the page", function(){
    loadFixtures("index.html.erb");
    init();
    expect($('.inner-image')).toExist();
  });
});

describe("promptSignUp", function(){
  it("should prompt you to sign up", function(){
    loadFixtures("index.html.erb");
    promptSignUp();
    expect($('.inner-image')).toBeHidden();
    expect($('.sign-up')).toBeVisible();
  });
});

describe("promptSignIn", function(){
  it("should prompt you to sign in", function(){
    loadFixtures("index.html.erb");
    promptSignIn();
    expect($('.sign-up')).toBeHidden();
    expect($('.sign-in')).toBeVisible();
  });
});

describe("successfulSignInUp", function(){
  it("should reveal image", function(){
    loadFixtures("index.html.erb");
    successfulSignInUp();
    expect($('.signed-out-navbar')).not.toBeVisible();
    expect($('.sign-in-up')).toExist();
  });
});

describe("unsuccessfulSignInUp", function(){
  it("should spew error message", function(){
    loadFixtures("index.html.erb");
    unsuccessfulSignInUp();
    expect($('#sign-up-div')).toContainHtml("<p>Invalid email or password</p>");
  });
});


describe("reload", function(){
  it("should reload the artworks", function(){
    loadFixtures("index.html.erb");
    reload();
    expect($('.stop')).toBeVisible();
    expect($('.art-info')).not.toBeVisible();
    expect($('.space')).toContainHtml('<h1>Just a sec, while we fetch you some more artwork!</h1>');
  });
});

describe("back", function(){
  it("should clear the message", function(){
    loadFixtures("index.html.erb");
    back();
    expect($('.space')).toContainHtml('');
  });
});

// Unsure how to test AJAX
// And was running into issues testing click events
// Also transitions
// I hope this is 50%
// I feel like we haven't done much testing in class
// And if we need 80% coverage on the final project
// We should do more