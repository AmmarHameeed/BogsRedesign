// Add class to the body when scrolling
$(window).bind("scroll load", function () {
  var addClassNow = $(".mega__menu").offset().top;
  if (addClassNow > 58) {
    $("body").addClass("scrolling-body");
  } else {
    $("body").removeClass("scrolling-body");
  }
});



$(document).ready(function () {

  // Setting the height of the mobile menu according to the viewport's height
  var screenHeightOnLoad = $("html").height();
  var minusHeight = 261;

  var adjustedHeight = screenHeightOnLoad - minusHeight;

  $("#mobile__menu, #mobileMenu__overlay").css("height", adjustedHeight);

});
