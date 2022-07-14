$(document).ready(() => {
  $('.left-close').click(function () {
    $('#left-side').css({
      width: '0',
      transition: '0.3s',
    });
    $(this).parent().siblings().slideToggle();
  });

  $('.left-open').click(function () {
    $('#left-side').css({
      width: '200px',
      transition: '0.3s',
    });
    $(this).slideToggle();
  });
});
