$(document).ready(function(){
$(".parallax").hide();

  $(".Loader").css({"height":$(window).height()});
  $(".Loader").click(function(){

    $(".Loader").css({"height":"0px"});
    $(".Loader h1").fadeOut("0.1s");
    $(".wrapper").fadeOut("0.1s");
    $(".parallax").show();
  });

  $('.parallax').css({"height":$(window).height()*0.9});


$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

  // If theres no activity for 5 seconds do something
var activityTimeout = setTimeout(inActive, 10000);

function resetActive(){
    $(document).attr('class', 'active');
    clearTimeout(activityTimeout);
    activityTimeout = setTimeout(inActive, 10000);

}

// No activity do something.
function inActive(){
  $(".parallax").hide();
  $(".Loader").css({"height":$(window).height()});
  $(".Loader h1").fadeIn("10s");
  $(".wrapper").fadeIn("10s");
}

// Check for mousemove, could add other events here such as checking for key presses ect.
$(document).bind('mousemove', function(){resetActive()});
});
