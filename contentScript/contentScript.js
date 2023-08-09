"use strict";
console.log("content script is running");
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("🔥 some message received in content script:");
    if (message.command === "changeTextColor") {
        console.log("🔥 that message is changeTextColor");
        document.getElementsByTagName("body")[0].style.color = "#82fff3";
        sendResponse({ rasen: "tarengan!" });
    }
});
