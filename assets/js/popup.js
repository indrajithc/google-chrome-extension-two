$(function () {
  const colorPicker = $("#color-picker");

  $("#color-component").submit(function (event) {
    event.preventDefault();
    const color = colorPicker.val();

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        todo: "changeColor",
        clickedColor: color,
      });
    });
  });
});
