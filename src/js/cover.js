var alert = (icon, title, text) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
  });
};

// JQUERY
$(document).ready(() => {
  $('#cover span')
    .first()
    .click(() => {
      icon = `question`;
      title = `Who is Front-end Engineer`;
      text = `someone who builds websites, designs apps, and ensures overall user accessibility`;
      alert(icon, title, text);
    });

  $('#cover span')
    .eq(1)
    .click(() => {
      icon = `question`;
      title = `jQuery`;
      text = ` a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax`;
      alert(icon, title, text);
    });

  $('#cover span')
    .last()
    .click(() => {
      icon = `question`;
      title = `ReactJS`;
      text = `a free and open-source front-end JavaScript library for building user interfaces based on UI components`;
      alert(icon, title, text);
    });
});
