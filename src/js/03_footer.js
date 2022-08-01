$(document).ready(() => {
  $('footer span')
    .click(() => {
      icon = `success`;
      title = `Hello`;
      text = `I'm Habibie`;
      alert(icon, title, text);
    });
});
