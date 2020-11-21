(function ($) {
  $(function () {
    $(".sidenav").sidenav();
    $(".parallax").parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function () {
  $(".materialboxed").materialbox();
});

$(document).ready(function () {
  $(".carousel")
    .carousel({ fullWidth: true })
    .css("height", $(window).height());

  // for next slide
  $(".next").click(function () {
    $(".carousel").carousel("next");
  });

  // for prev slide
  $(".prev").click(function () {
    $(".carousel").carousel("prev");
  });
});
