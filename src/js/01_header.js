// JQUERY
$(document).ready(() => {
  const right_show = () => {
    return 'right-show 0.1s forwards';
  };
  const right_close = () => {
    return 'right-hide 1s forwards';
  };

  const left_show = () => {
    return 'left-show 0.1s forwards';
  };
  const left_close = () => {
    return 'left-hide 1s forwards';
  };

  $('.list').mouseover(() => {
    $('#list').css({ animation: right_show() });
  });
  $('.list').mouseleave(() => {
    $('#list').css({ animation: right_close() });
  });

  $('.burger-menu').mouseover(() => {
    $('#burger-menu').css({ animation: left_show() });
    if ($('#list').css({ opacity: '1', right: '0px' })) {
      $('#list').css({ opacity: '0', right: '-200px' });
    }
  });
  $('.burger-menu').mouseleave(() => {
    $('#burger-menu').css({ animation: left_close() });
  });

  // header - section
  $('.certificate').click(() => {
    $('#certificate').slideDown().siblings().slideUp();
  });

  $('.training').click(() => {
    $('#training').slideDown().siblings().slideUp();
  });

  $('.organization').click(() => {
    $('#organization').slideDown().siblings().slideUp();
  });

  $('.work-experience').click(() => {
    $('#work-experience').slideDown().siblings().slideUp();
  });

  // header - aside #list
  $('.view-all').click(() => {
    $('#table').children().slideDown();
  });
  $('.hide-all').click(() => {
    $('#table').children().slideUp();
  });
});
