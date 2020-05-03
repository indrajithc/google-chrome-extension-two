$(function () {
  const colorPicker = $("#color-picker");

  $("#color-component").submit(function (event) {
    event.preventDefault();
    const color = colorPicker.val();
    alert(color);
  });
});
