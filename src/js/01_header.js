// JQUERY
$(document).ready(() => {
  const left_show = () => {
    if ($('#media').css('opacity', '1')) {
      $('#media').css({ opacity: '0' });
    }
    return 'left-show 0.3s forwards';
  };
  const right_show = () => {
    if ($('#list').css('opacity', '1')) {
      $('#list').css({ opacity: '0' });
    }
    return 'right-show 0.3s forwards';
  };

  $('.list').click(() => {
    if ($('#list').css('opacity', '0')) {
      $('#list').css({ animation: left_show() });
    }
  });
  $('#list .close').click(() => {
    $('#list').css({
      animation: 'left-hide 0.3s forwards',
    });
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
