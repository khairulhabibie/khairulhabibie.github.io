// JQUERY
$(document).ready(() => {
  const right_show = () => {
    return 'right-show 0.3s forwards';
  };
  const right_close = () => {
    return 'right-hide 0.3s forwards';
  };

  $('.list').click(() => {
    $('#list').css({ animation: right_show() });
  });
  $('#list .close').click(() => {
    $('#list').css({ animation: right_close() });
  });

  const left_show = () => {
    return 'left-show 0.3s forwards';
  };
  const left_close = () => {
    return 'left-hide 0.3s forwards';
  };

  $('.medsos').mouseover(() => {
    $('#medsos').css({ animation: left_show() });
  });
  $('.medsos').mouseleave(() => {
    $('#medsos').css({ animation: left_close() });
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

  // ... - alert
  $('.whatsapp').click(() => {
    icon = `warning`;
    title = `Whatsapp`;
    text = `Link Not Found !`;
    alert(icon, title, text);
  });

  $('.instagram').click(() => {
    icon = `warning`;
    title = `Instagram`;
    text = `Link Not Found !`;
    alert(icon, title, text);
  });
});
