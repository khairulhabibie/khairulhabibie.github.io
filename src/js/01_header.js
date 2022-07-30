// JQUERY
$(document).ready(() => {
  const left_show = () => {
    if ($('#media').css('opacity', '1')) {
      $('#media').css({ opacity: '0' });
    }
    return 'left-show 0.3s forwards';
  };
  const right_show = (condition) => {
    if (condition == true) {
      return 'right-show 0.3s forwards';
    } else {
      return right_close();
    }
  };
  const right_close = () => {
    return 'right-hide 0.3s forwards';
  };

  $('.list').click(() => {
    if ($('#list').css('opacity', '0')) {
      $('#list').css({ animation: right_show(true) });
    } else {
      $('#list').css({ animation: right_show(false) });
    }
  });
  $('#list .close').click(() => {
    $('#list').css({ animation: right_close() });
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
