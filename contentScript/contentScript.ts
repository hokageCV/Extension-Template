console.log("content script is running");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.command === "changeTextColor") {
        document.getElementsByTagName("body")[0].style.color = "#82fff3";

        sendResponse({ rasen: "tarengan!" });
    }
});
