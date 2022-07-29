$(document).ready(function () {
  $('footer').html(`<p>Created by <span>khairul habibie</span></p>`);

  $('footer span')
    .addClass('hover')
    .click(() => {
      icon = `success`;
      title = `Hello`;
      text = `I'm Habibie`;
      alert(icon, title, text);
    });
});
