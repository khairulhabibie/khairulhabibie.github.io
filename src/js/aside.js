$(document).ready(() => {
  $('.left-open').click(function () {
    $('#left-aside').css({
      animation: 'left-unhide-motion 0.3s forwards',
    });
  });

  // left-aside
  $('.left-close').click(function () {
    $('#left-aside').css({
      animation: 'left-hide-motion 0.3s forwards',
    });
  });

  $('.right-open').click(function () {
    $('#right-aside').css({
      animation: 'right-unhide-motion 0.3s forwards',
    });
  });

  // right-aside
  $('.right-close').click(function () {
    $('#right-aside').css({
      animation: 'right-hide-motion 0.3s forwards',
    });
  });
});
