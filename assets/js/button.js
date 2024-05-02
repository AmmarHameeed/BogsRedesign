$(document).ready(function () {
 // Toggling the mobile menu closing and opening
 $("input[name='mobileMenuAccordion']").click(function() {
    // Get the storedValue
    var previousValue = $(this).data('storedValue');
    // if previousValue = true then
    //     Step 1: toggle radio button check mark.
    //     Step 2: save data-StoredValue as false to indicate radio button is unchecked.
    if (previousValue) {
      $(this).prop('checked', !previousValue);
      $(this).data('storedValue', !previousValue);
    }
    // If previousValue is other than true
    //    Step 1: save data-StoredValue as true to for currently checked radio button.
    //    Step 2: save data-StoredValue as false for all non-checked radio buttons. 
    else{
      $(this).data('storedValue', true);
      $("input[name='mobileMenuAccordion']:not(:checked)").data("storedValue", false);
    }
  });

  const mobileMenuOpen = document.querySelector(".openMobileMenu");
  const mobileMenuClose = document.querySelector(".closeMobileMenu");

  mobileMenuOpen.addEventListener("click", () => {
    console.log("clicked");
    document.getElementById("mobile__menu").classList.toggle("opened");
  });

  mobileMenuClose.addEventListener("click", () => {
    console.log("clicked");
    document.getElementById("mobile__menu").classList.remove("opened");
  });

  $("#mobileMenu__overlay").on("click touchmove", function(){
    document.getElementById("mobile__menu").classList.remove("opened");
  })

  $(".video__item").click(function() {
    var videoUrl = $(this).data("video-url");
    $("#video-iframe").attr("src", videoUrl+"?rel=0&autoplay=1&modestbranding=1&muted=0&showinfo=0");
    $("#video-modal").removeClass("hidden");
  });

  $(".close-modal").click(function() {
    $("#video-modal").addClass("hidden");
    $("#video-iframe").attr("src", "");
    // You can optionally reset the iframe source here:
    // $("#video-iframe").attr("src", "");
  });

  $(".filter__btn").click(function() {
    $("#categoryPage__module").toggleClass("opened");
    // $("#filter__sidebar").css("left", "0");
  });

  $(".closeFilterMenu").on("click", function(){
    document.getElementById("categoryPage__module").classList.remove("opened");
  })
  $("#mobileMenu__overlay--filter").on("click touchmove", function(){
    document.getElementById("categoryPage__module").classList.remove("opened");
  })
})