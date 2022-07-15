$(document).ready(() => {
  // left-aside
  $('.left-open').click(function () {
    // open
    $('#left-aside').css({
      animation: 'left-unhide-motion 0.3s forwards',
    });
  });

  $('.left-close').click(function () {
    $('#left-aside').css({
      animation: 'left-hide-motion 0.3s forwards',
    });
  });

  // right-aside
  $('.right-open').click(function () {
    // open
    $('#right-aside').css({
      animation: 'right-unhide-motion 0.3s forwards',
    });
  });

  $('.right-close').click(function () {
    $('#right-aside').css({
      animation: 'right-hide-motion 0.3s forwards',
    });
  });

  // center
  $('.center-open').click(function () {
    $('#content').children().slideDown();
  });
});
