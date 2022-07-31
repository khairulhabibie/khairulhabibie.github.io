$(document).ready(() => {
  $('footer span')
    .addClass('hover')
    .click(() => {
      icon = `success`;
      title = `Hello`;
      text = `I'm Habibie`;
      alert(icon, title, text);
    });
});
