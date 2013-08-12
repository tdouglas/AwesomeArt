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

// Unsure how to test AJAX
// And was running into issues testing click events
// Also transitions
// I hope this is 50%
// I feel like we haven't done much testing in class
// And if we need 80% coverage on the final project
// We should do more