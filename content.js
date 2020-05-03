chrome.runtime.sendMessage({ todo: "showPageAction" });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.todo === "changeColor") {
    const adColor = `#${request.clickedColor}`;
    $(".api h1").attr("style", `color: ${adColor} !important;`);
  }
});
