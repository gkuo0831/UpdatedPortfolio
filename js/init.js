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